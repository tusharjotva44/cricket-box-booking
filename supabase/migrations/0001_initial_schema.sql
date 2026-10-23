create extension if not exists pgcrypto;
create extension if not exists btree_gist;

create type public.app_role as enum ('customer', 'owner', 'admin');
create type public.venue_status as enum ('draft', 'pending', 'approved', 'rejected', 'suspended');
create type public.booking_status as enum ('pending_payment', 'confirmed', 'cancelled', 'completed', 'expired');
create type public.payment_status as enum ('created', 'authorized', 'captured', 'failed', 'refunded');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  phone text,
  role public.app_role not null default 'customer',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint profiles_name_length check (full_name is null or char_length(full_name) between 1 and 120),
  constraint profiles_phone_length check (phone is null or char_length(phone) between 7 and 20)
);

-- Signup metadata never determines privileged roles.
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = ''
as $$
begin
  insert into public.profiles (id, full_name, role)
  values (new.id, nullif(new.raw_user_meta_data ->> 'full_name', ''), 'customer')
  on conflict (id) do nothing;
  return new;
end;
$$;
create trigger on_auth_user_created after insert on auth.users
for each row execute procedure public.handle_new_user();

create table public.venues (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references public.profiles(id) on delete restrict,
  name text not null,
  description text,
  venue_type text not null check (venue_type in ('box_cricket', 'open_turf', 'indoor')),
  address_line text not null,
  area text,
  city text not null,
  state text not null,
  postal_code text,
  timezone text not null default 'Asia/Kolkata',
  hourly_rate_paise integer not null check (hourly_rate_paise > 0),
  capacity integer not null default 6 check (capacity between 2 and 30),
  amenities text[] not null default '{}',
  image_urls text[] not null default '{}',
  status public.venue_status not null default 'pending',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint venues_name_length check (char_length(name) between 2 and 140)
);
create index venues_city_status_idx on public.venues (lower(city), status);
create index venues_owner_id_idx on public.venues (owner_id);

create table public.bookings (
  id uuid primary key default gen_random_uuid(),
  booking_code text not null unique default upper(substr(encode(gen_random_bytes(8), 'hex'), 1, 10)),
  customer_id uuid not null references public.profiles(id) on delete restrict,
  venue_id uuid not null references public.venues(id) on delete restrict,
  slot_start timestamptz not null,
  slot_end timestamptz not null,
  amount_paise integer not null check (amount_paise > 0),
  currency char(3) not null default 'INR' check (currency = 'INR'),
  status public.booking_status not null default 'pending_payment',
  payment_method text not null check (payment_method in ('online', 'pay_at_venue')),
  hold_expires_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint bookings_positive_duration check (slot_end > slot_start),
  constraint bookings_max_duration check (slot_end <= slot_start + interval '8 hours'),
  constraint bookings_no_overlapping_active_slots exclude using gist (
    venue_id with =,
    tstzrange(slot_start, slot_end, '[)') with &&
  ) where (status in ('pending_payment', 'confirmed'))
);
create index bookings_customer_id_idx on public.bookings (customer_id, created_at desc);
create index bookings_venue_slot_idx on public.bookings (venue_id, slot_start);

create table public.payments (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid not null unique references public.bookings(id) on delete restrict,
  provider text not null default 'razorpay' check (provider in ('razorpay')),
  provider_order_id text unique,
  provider_payment_id text unique,
  amount_paise integer not null check (amount_paise > 0),
  currency char(3) not null default 'INR' check (currency = 'INR'),
  status public.payment_status not null default 'created',
  verified_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger language plpgsql set search_path = ''
as $$
begin new.updated_at = now(); return new; end;
$$;
create trigger profiles_set_updated_at before update on public.profiles for each row execute procedure public.set_updated_at();
create trigger venues_set_updated_at before update on public.venues for each row execute procedure public.set_updated_at();
create trigger bookings_set_updated_at before update on public.bookings for each row execute procedure public.set_updated_at();
create trigger payments_set_updated_at before update on public.payments for each row execute procedure public.set_updated_at();

alter table public.profiles enable row level security;
alter table public.venues enable row level security;
alter table public.bookings enable row level security;
alter table public.payments enable row level security;

create policy "profile_select_own" on public.profiles for select to authenticated using ((select auth.uid()) = id);
create policy "profile_update_own" on public.profiles for update to authenticated using ((select auth.uid()) = id) with check ((select auth.uid()) = id);
revoke update on public.profiles from authenticated;
grant update (full_name, phone) on public.profiles to authenticated;

create policy "venues_public_read_approved" on public.venues for select to anon, authenticated using (status = 'approved');
create policy "venues_owner_read_own" on public.venues for select to authenticated using (owner_id = (select auth.uid()));
create policy "venues_owner_insert_own" on public.venues for insert to authenticated with check (owner_id = (select auth.uid()) and status in ('draft', 'pending'));
create policy "venues_owner_update_own" on public.venues for update to authenticated using (owner_id = (select auth.uid()) and status in ('draft', 'pending', 'rejected')) with check (owner_id = (select auth.uid()) and status in ('draft', 'pending'));

create policy "bookings_customer_read_own" on public.bookings for select to authenticated using (customer_id = (select auth.uid()));
create policy "bookings_owner_read_venue" on public.bookings for select to authenticated using (
  exists (select 1 from public.venues v where v.id = venue_id and v.owner_id = (select auth.uid()))
);
-- No direct client writes for bookings/payments. Use trusted server-side transactions/RPCs.
create policy "payments_customer_read_own" on public.payments for select to authenticated using (
  exists (select 1 from public.bookings b where b.id = booking_id and b.customer_id = (select auth.uid()))
);
create policy "payments_owner_read_venue" on public.payments for select to authenticated using (
  exists (select 1 from public.bookings b join public.venues v on v.id = b.venue_id where b.id = booking_id and v.owner_id = (select auth.uid()))
);

-- Before launch: add tested role escalation/admin policies, booking RPC and hold-expiry worker,
-- payment signature/webhook verification, and automated RLS/concurrency tests.

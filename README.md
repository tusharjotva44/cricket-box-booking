# CricketBox — Cricket Turf Booking Platform

A blue-and-white marketplace starter for finding and booking cricket turfs and box-cricket venues across India.

## Architecture
- Frontend/server: Next.js App Router + TypeScript
- Data/auth planned: Supabase Auth + PostgreSQL
- Authorization planned: PostgreSQL Row Level Security (RLS)
- Payments planned: Razorpay, with server-side signature and webhook verification
- Deployment planned: Vercel or another supported Node.js host

## Current frontend structure
- `app/page.tsx`: home page and entry points
- `app/explore/page.tsx`: responsive venue discovery, city/search filters and sort controls
- `app/customer/page.tsx`: customer dashboard preview
- `app/customer/bookings/page.tsx`: booking history preview
- `app/customer/profile/page.tsx`: profile preview
- `components/site-header.tsx`: shared navigation
- `components/venue-card.tsx`: reusable venue card
- `lib/demo-venues.ts`: typed sample data to be replaced by database queries
- `supabase/migrations/`: initial database schema and starter RLS policies
- `.env.example`: environment variable template

## Current state and important limitations
The home, explore, and customer pages are frontend previews. Venue examples are fictional sample data for layout and filter testing. Login, live database queries, live slot availability, real bookings, and payments are not enabled. Do not use this preview to accept real bookings or payments.

The initial schema and starter policies still require a security review and tests. Production readiness requires secure authentication, role enforcement, atomic booking logic, payment verification, cancellation/refund handling, monitoring, backups, and deployment verification.

## Local setup
1. Install Node.js LTS and Git.
2. Clone this repository and run `npm install`.
3. Copy `.env.example` to `.env.local`.
4. Create a Supabase project and follow `supabase/README.md` when ready to connect the backend.
5. Run `npm run dev` and open `http://localhost:3000`.

Do not commit `.env.local`, passwords, payment secrets, or Supabase service-role keys.

## Planned implementation order
1. Verify the app builds and refine frontend pages.
2. Add customer sign-up/sign-in and server-side session handling.
3. Add owner onboarding and admin-controlled role assignment/venue approval.
4. Replace sample venues with database-backed venue management, images, city search and opening hours.
5. Implement atomic slot holds/bookings with overlap protection and expiration.
6. Integrate pay-at-venue and online payment with verified webhooks and idempotency.
7. Complete customer/owner/admin dashboards, notifications and cancellation/refund rules.
8. Add automated security, RLS, booking concurrency and payment tests.
9. Configure production environment variables, domain, monitoring, backups and legal pages.

## Security principles
- Never trust role claims from user-editable signup metadata.
- Keep privileged keys and payment secrets on the server only.
- Validate price, venue approval, slot availability and booking ownership server-side.
- Use RLS and least-privilege grants on exposed tables.
- Confirm payments only after trusted provider verification/webhook processing.

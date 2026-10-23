# CricketBox — Cricket Turf Booking Platform

A blue-and-white marketplace starter for finding and booking cricket turfs and box-cricket venues across India.

## Architecture
- Frontend/server: Next.js App Router + TypeScript
- Data/auth: Supabase Auth + PostgreSQL
- Authorization: PostgreSQL Row Level Security (RLS)
- Payments planned: Razorpay, with server-side signature and webhook verification
- Deployment planned: Vercel or another supported Node.js host

## Current state
- Responsive Next.js landing page committed.
- Supabase browser/server client helpers added.
- Initial PostgreSQL schema and starter RLS policies added under supabase/migrations/.
- Environment variable template added as .env.example.
- The earlier static HTML prototype remains in the repository root as a reference.

This is not yet production-ready and cannot accept real bookings or payments. Authentication screens, database provisioning, booking transaction logic, owner/admin workflows, payment verification, automated tests, and deployment still need to be implemented and verified.

## Local setup
1. Install Node.js LTS and Git.
2. Clone this repository and run npm install.
3. Copy .env.example to .env.local.
4. Create a Supabase project and follow supabase/README.md.
5. Run npm run dev and open http://localhost:3000.

Do not commit .env.local, passwords, payment secrets, or Supabase service-role keys.

## Planned implementation order
1. Verify the app builds and configure Supabase.
2. Add customer sign-up/sign-in and server-side session handling.
3. Add owner onboarding and admin-controlled role assignment/venue approval.
4. Add venue management, images, city search and opening hours.
5. Implement atomic slot holds/bookings with overlap protection and expiration.
6. Integrate pay-at-venue and online payment with verified webhooks and idempotency.
7. Add customer/owner/admin dashboards, notifications and cancellation/refund rules.
8. Add automated security, RLS, booking concurrency and payment tests.
9. Configure production environment variables, domain, monitoring, backups and legal pages.

## Security principles
- Never trust role claims from user-editable signup metadata.
- Keep privileged keys and payment secrets on the server only.
- Validate price, venue approval, slot availability and booking ownership server-side.
- Use RLS and least-privilege grants on exposed tables.
- Confirm payments only after trusted provider verification/webhook processing.

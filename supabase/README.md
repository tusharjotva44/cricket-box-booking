# Supabase setup

1. Create a Supabase project in your own account.
2. Open SQL Editor and apply migrations/0001_initial_schema.sql, or use the Supabase CLI.
3. Copy the Project URL and publishable/anon key into a local .env.local based on .env.example.
4. Keep service-role/secret keys server-side only. Never commit real credentials.
5. Configure authentication providers and allowed redirect URLs before testing login.

This migration is an initial schema, not a complete production backend. Booking creation must use a trusted server-side transaction/RPC that revalidates price, availability and venue status. Add and run RLS tests before real use.

# Website Club

Polished Next.js App Router reference build for a modern community club. It runs fully on mock data until provider credentials are supplied.

## Run locally

```bash
npm install
npm run dev
```

## Integration seams

Copy the provider values into `.env.local` when ready:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
```

API routes validate input and return `{ source: "mock" }` by default. Replace the marked seams with Supabase, Clerk, and Stripe server calls. The initial database schema lives in `supabase/migrations/001_initial_schema.sql`.

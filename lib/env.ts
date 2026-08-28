/**
 * Integration seam: credentials are intentionally optional for the demo.
 * Add these values in .env.local to connect real providers.
 */
export const env = {
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
  supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  clerkPublishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
  stripePublishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY
};

export const integrationsReady = {
  supabase: Boolean(env.supabaseUrl && env.supabaseAnonKey),
  clerk: Boolean(env.clerkPublishableKey),
  stripe: Boolean(env.stripePublishableKey && env.stripeSecretKey)
};

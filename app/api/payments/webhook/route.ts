import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const signature = request.headers.get("stripe-signature");
  if (process.env.STRIPE_WEBHOOK_SECRET && !signature) {
    return NextResponse.json({ error: "Missing Stripe signature" }, { status: 400 });
  }

  return NextResponse.json({
    received: true,
    source: "mock",
    message: "Verify the Stripe signature, then upsert the payment and activate membership."
  });
}

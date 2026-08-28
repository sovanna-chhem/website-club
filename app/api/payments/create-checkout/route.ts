import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body.memberId !== "string") {
    return NextResponse.json({ error: "memberId is required" }, { status: 400 });
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json({
      checkoutUrl: "/dashboard?checkout=demo",
      source: "mock",
      message: "Configure STRIPE_SECRET_KEY to create a live Checkout Session."
    });
  }

  return NextResponse.json({ error: "Stripe checkout integration is not configured." }, { status: 501 });
}

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body.name !== "string" || typeof body.email !== "string" || !body.email.includes("@")) return NextResponse.json({ error: "A valid name and email are required" }, { status: 400 });
  // Integration seam: create a Clerk profile, Supabase application, and optional Stripe checkout here.
  return NextResponse.json({ message: "Application received", source: "mock" }, { status: 201 });
}

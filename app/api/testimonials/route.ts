import { NextResponse } from "next/server";
import { testimonials } from "../../../lib/data";

export async function GET() {
  return NextResponse.json({ data: testimonials, source: "mock" });
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body.content !== "string" || body.content.trim().length < 10) {
    return NextResponse.json({ error: "A testimonial of at least 10 characters is required" }, { status: 400 });
  }
  return NextResponse.json({ data: { ...body, isApproved: false }, source: "mock" }, { status: 201 });
}

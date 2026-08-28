import { NextResponse } from "next/server";
import { events } from "../../../lib/data";

export async function GET() {
  return NextResponse.json({ data: events, source: "mock", integrations: { supabase: Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL) } });
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body.title !== "string" || typeof body.date !== "string") return NextResponse.json({ error: "title and date are required" }, { status: 400 });
  // Integration seam: persist to Supabase here when credentials are configured.
  return NextResponse.json({ data: { ...body, slug: body.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") }, source: "mock" }, { status: 201 });
}

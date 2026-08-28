import { NextResponse } from "next/server";
import { members } from "../../../lib/data";

export async function GET() {
  return NextResponse.json({ data: members, source: "mock" });
}

export async function PUT(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body.memberId !== "string" || typeof body.role !== "string") {
    return NextResponse.json({ error: "memberId and role are required" }, { status: 400 });
  }
  if (!["admin", "member", "guest"].includes(body.role)) {
    return NextResponse.json({ error: "Invalid role" }, { status: 400 });
  }
  return NextResponse.json({ data: body, source: "mock" });
}

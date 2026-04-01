import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

const redis = Redis.fromEnv();
const KEY = "aero-expo-notes-v1";

type NotesState = { content: string; updatedAt: string };

export async function GET() {
  try {
    const data = await redis.get<NotesState>(KEY);
    return NextResponse.json(data ?? { content: "", updatedAt: "" });
  } catch {
    return NextResponse.json({ content: "", updatedAt: "" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { content } = await request.json() as { content: string };
    const updated: NotesState = { content: content ?? "", updatedAt: new Date().toISOString() };
    await redis.set(KEY, updated);
    return NextResponse.json(updated);
  } catch {
    return NextResponse.json({ error: "Chyba při ukládání." }, { status: 500 });
  }
}

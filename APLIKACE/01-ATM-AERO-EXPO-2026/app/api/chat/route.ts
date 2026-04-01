import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

const redis = Redis.fromEnv();
const KEY = "aero-expo-chat-v1";

export type ChatMessage = { author: string; text: string; timestamp: string };

export async function GET() {
  try {
    const data = await redis.get<ChatMessage[]>(KEY);
    return NextResponse.json(data ?? []);
  } catch {
    return NextResponse.json([], { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { author, text } = await request.json() as { author: string; text: string };
    if (!author || !text?.trim()) {
      return NextResponse.json({ error: "Chybí autor nebo text." }, { status: 400 });
    }
    const current = (await redis.get<ChatMessage[]>(KEY)) ?? [];
    const updated: ChatMessage[] = [
      ...current,
      { author, text: text.trim(), timestamp: new Date().toISOString() },
    ];
    await redis.set(KEY, updated);
    return NextResponse.json(updated);
  } catch {
    return NextResponse.json({ error: "Chyba při ukládání." }, { status: 500 });
  }
}

export async function DELETE() {
  try {
    await redis.set(KEY, []);
    return NextResponse.json([]);
  } catch {
    return NextResponse.json({ error: "Chyba při mazání." }, { status: 500 });
  }
}

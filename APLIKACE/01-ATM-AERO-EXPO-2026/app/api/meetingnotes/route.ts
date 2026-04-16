import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

const redis = Redis.fromEnv();
const KEY = "aero-expo-meetingnotes-v1";
const SNAPSHOT_TTL_SECONDS = 7 * 24 * 60 * 60; // 7 dní

function snapshotKey(): string {
  const date = new Date().toISOString().slice(0, 10);
  return `aero-expo-meetingnotes-snapshot-${date}`;
}

async function saveSnapshot(notes: MeetingNote[]): Promise<void> {
  try {
    await redis.set(snapshotKey(), notes, { ex: SNAPSHOT_TTL_SECONDS });
  } catch {
    // snapshot je best-effort; nezastaví hlavní operaci
  }
}

export type MeetingNote = {
  id: string;
  title: string;
  body: string;
  author: string;
  createdAt: string;
  editedAt?: string;
  photos?: string[];
};

export async function GET() {
  try {
    const data = await redis.get<MeetingNote[]>(KEY);
    const notes = (data ?? []).slice().reverse();
    return NextResponse.json(notes);
  } catch {
    return NextResponse.json([], { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { title, body, author, photos } = await request.json() as {
      title?: string;
      body: string;
      author: string;
      photos?: string[];
    };
    if (!author || !body?.trim()) {
      return NextResponse.json({ error: "Chybí autor nebo obsah." }, { status: 400 });
    }
    const current = (await redis.get<MeetingNote[]>(KEY)) ?? [];
    const newNote: MeetingNote = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      title: title?.trim() ?? "",
      body: body.trim(),
      author,
      createdAt: new Date().toISOString(),
      ...(photos && photos.length > 0 ? { photos } : {}),
    };
    const updated = [...current, newNote];
    await redis.set(KEY, updated);
    await saveSnapshot(updated);
    return NextResponse.json(updated.slice().reverse());
  } catch {
    return NextResponse.json({ error: "Chyba při ukládání." }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const { id, title, body } = await request.json() as {
      id: string;
      title?: string;
      body: string;
    };
    if (!id || !body?.trim()) {
      return NextResponse.json({ error: "Chybí ID nebo obsah." }, { status: 400 });
    }
    const current = (await redis.get<MeetingNote[]>(KEY)) ?? [];
    const updated = current.map((note) =>
      note.id === id
        ? { ...note, title: title?.trim() ?? note.title, body: body.trim(), editedAt: new Date().toISOString() }
        : note
    );
    await redis.set(KEY, updated);
    await saveSnapshot(updated);
    return NextResponse.json(updated.slice().reverse());
  } catch {
    return NextResponse.json({ error: "Chyba při úpravě." }, { status: 500 });
  }
}

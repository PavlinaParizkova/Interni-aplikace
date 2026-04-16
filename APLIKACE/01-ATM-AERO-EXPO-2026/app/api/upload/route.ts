import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "Žádný soubor." }, { status: 400 });
    }

    const blob = await put(`aero-expo-2026/${Date.now()}-${file.name}`, file, {
      access: "public",
      addRandomSuffix: true,
    });

    return NextResponse.json({ url: blob.url });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Upload selhal.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

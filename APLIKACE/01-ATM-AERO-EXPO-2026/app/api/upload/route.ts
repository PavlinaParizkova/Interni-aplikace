import { put } from "@vercel/blob";
import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Nepřihlášen" }, { status: 401 });
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json(
      { error: "BLOB_READ_WRITE_TOKEN není nastavený. Přidej Blob Store v Settings → Storage." },
      { status: 500 },
    );
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "Žádný soubor." }, { status: 400 });
    }

    const blob = await put(
      `aero-expo-2026/${Date.now()}-${file.name}`,
      file,
      { access: "private", addRandomSuffix: true },
    );

    const url = `/api/blob?p=${encodeURIComponent(blob.pathname)}`;
    return NextResponse.json({ url, pathname: blob.pathname });
  } catch (e) {
    console.error("Upload error:", e);
    const message = e instanceof Error ? e.message : "Upload selhal.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const COOKIE_NAME = "atm-aero-auth";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 dní

export async function POST(request: Request) {
  const { password } = await request.json();

  const correctPassword = process.env.AUTH_PASSWORD?.trim();
  const authToken       = process.env.AUTH_TOKEN?.trim();

  if (!correctPassword || !authToken) {
    return NextResponse.json(
      { error: "Server není správně nakonfigurován." },
      { status: 500 }
    );
  }

  if (password !== correctPassword) {
    return NextResponse.json(
      { error: "Nesprávné heslo. Zkuste to znovu." },
      { status: 401 }
    );
  }

  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, authToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: COOKIE_MAX_AGE,
    path: "/",
  });

  return NextResponse.json({ ok: true });
}

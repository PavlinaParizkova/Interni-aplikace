import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const COOKIE_NAME = "atm-aero-auth";
const LOGIN_PATH  = "/login";
const API_PATH    = "/api/auth";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith(LOGIN_PATH) || pathname.startsWith(API_PATH)) {
    return NextResponse.next();
  }

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon")
  ) {
    return NextResponse.next();
  }

  const token = request.cookies.get(COOKIE_NAME)?.value;
  const expected = process.env.AUTH_TOKEN?.trim();

  if (!expected || token !== expected) {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = LOGIN_PATH;
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  if (
    nextUrl.pathname.startsWith("/admin") &&
    !nextUrl.pathname.startsWith("/admin/login") &&
    !nextUrl.pathname.startsWith("/api/auth")
  ) {
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/admin/:path*"],
};

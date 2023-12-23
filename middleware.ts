import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value || "";
  const pathName = req.nextUrl.pathname;

  const publicRoutes = ["/", "/login", "/signup"];
  const protectRoutes = ["/users", "/doctors", "/admin"];

  const isPublic = publicRoutes.includes(pathName);
  const isProtect = protectRoutes.includes(pathName);

  // console.log(isPublic);
  // console.log(isProtect);
  // console.log("token", token);
  if (isPublic && token) {
    return NextResponse.redirect(new URL("/users", req.nextUrl));
  }
  if (isProtect && !token) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }
}
export const config = {
  matcher: [
    "/users/:path*",
    "/doctors/:path*",
    "/admin/:path*",
    "/login",
    "/signup",
    "/",
  ],
};

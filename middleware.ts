import { NextResponse, type NextRequest } from "next/server";
// Import your auth instance directly
import { auth } from "@/lib/auth";

export default async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith("/admin")) {
    try {
      // BETTER WAY: Use the auth headers directly without a fetch call
      // Better-Auth provides a getSession function that works in Middleware/Proxy
      const session = await auth.api.getSession({
        headers: request.headers,
      });

      // 1. If no session exists
      if (!session) {
        return NextResponse.redirect(new URL("/login", request.url));
      }

      // 2. Role Check
      if (session.user.role !== "admin") {
        // Redirect to home if they aren't an admin
        return NextResponse.redirect(new URL("/", request.url));
      }
    } catch (error) {
      console.error("Proxy Auth Error:", error);
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};

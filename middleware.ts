import { NextResponse, type NextRequest } from "next/server";

export default async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Only protect /admin routes
  if (pathname.startsWith("/admin")) {
    try {
      // Manually fetch the session from your Better-Auth endpoint
      const response = await fetch(
        `${request.nextUrl.origin}/api/auth/get-session`,
        {
          headers: {
            // Critical: Pass the cookies from the browser to the auth check
            cookie: request.headers.get("cookie") || "",
          },
        },
      );

      const session = await response.json();

      // 1. If no session exists
      if (!session) {
        return NextResponse.redirect(new URL("/login", request.url));
      }

      // 2. If session exists but user is not an admin
      if (session.user.role !== "admin") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
        // Alternatively: return NextResponse.redirect(new URL("/", request.url));
      }
    } catch (error) {
      console.error("Middleware Auth Error:", error);
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

// Optimization: Middleware only runs for these paths
export const config = {
  matcher: ["/admin/:path*"],
};

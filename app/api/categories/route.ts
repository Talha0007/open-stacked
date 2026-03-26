import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";

// 1. Force dynamic to prevent Vercel from trying to
// pre-render this during build (fixing the Prisma initialization error).
export const dynamic = "force-dynamic";

// GET: Fetch all categories for the dropdown
export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      orderBy: { name: "asc" },
    });
    return NextResponse.json(categories);
  } catch {
    return NextResponse.json({ error: "Fetch failed" }, { status: 500 });
  }
}

// POST: Create a new category (Admin Only)
export async function POST(req: NextRequest) {
  // Use 'await headers()' to ensure compatibility with Next.js 16/Turbopack
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // Verify Admin Role
  if (!session || session.user.role !== "admin") {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const { name } = await req.json();

    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    const slug = name
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-");

    const category = await prisma.category.create({
      data: { name, slug },
    });

    return NextResponse.json(category);
  } catch (error: unknown) {
    // 2. Replace 'any' with a check for Prisma's specific error structure
    if (typeof error === "object" && error !== null && "code" in error) {
      if ((error as { code: string }).code === "P2002") {
        return NextResponse.json(
          { error: "Category already exists" },
          { status: 400 },
        );
      }
    }

    return NextResponse.json({ error: "Creation failed" }, { status: 500 });
  }
}

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";

// GET: Fetch all posts OR a single post via ?id= or ?slug=
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const slug = searchParams.get("slug");

  try {
    if (id || slug) {
      const post = await prisma.post.findUnique({
        // Prisma handles the String-to-ObjectId conversion automatically
        // if the schema is defined as @db.ObjectId
        where: id ? { id } : { slug: slug! },
        include: {
          author: { select: { name: true, image: true } },
          category: { select: { name: true, slug: true } },
        },
      });
      return post
        ? NextResponse.json(post)
        : new Response("Not Found", { status: 404 });
    }

    const posts = await prisma.post.findMany({
      orderBy: { createdAt: "desc" },
      include: { author: { select: { name: true } } },
    });
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ error: "Fetch failed" }, { status: 500 });
  }
}

// POST: Create (Admin Only)
export async function POST(req: NextRequest) {
  const session = await auth.api.getSession({ headers: await headers() });

  // Refined check: ensure session exists AND role is admin
  if (!session || session.user.role !== "admin")
    return new Response("Unauthorized", { status: 401 });

  try {
    const { title, description, content, thumbnail, categoryId } =
      await req.json();

    const generatedSlug = title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

    const newPost = await prisma.post.create({
      data: {
        title,
        description,
        content,
        thumbnail,
        slug: generatedSlug,
        // Using connect ensures the ObjectId link is created properly
        author: { connect: { id: session.user.id } },
        // Only connect category if categoryId is provided
        ...(categoryId && { category: { connect: { id: categoryId } } }),
      },
    });

    return NextResponse.json(newPost);
  } catch (error: any) {
    if (error.code === "P2002") {
      return NextResponse.json(
        { error: "A post with this title/slug already exists." },
        { status: 400 },
      );
    }
    return NextResponse.json({ error: "Creation failed" }, { status: 500 });
  }
}

// PATCH: Update via ?id=
export async function PATCH(req: NextRequest) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session || session.user.role !== "admin")
    return new Response("Forbidden", { status: 403 });

  const id = new URL(req.url).searchParams.get("id");
  if (!id) return new Response("ID Required", { status: 400 });

  try {
    const { title, description, content, thumbnail, categoryId } =
      await req.json();

    // If title changes, we should probably update the slug too
    const updatedSlug = title
      ?.toLowerCase()
      .trim()
      .replace(/[\s_-]+/g, "-");

    const updated = await prisma.post.update({
      where: { id },
      data: {
        title,
        description,
        content,
        thumbnail,
        ...(updatedSlug && { slug: updatedSlug }),
        ...(categoryId && { category: { connect: { id: categoryId } } }),
      },
    });
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}

// DELETE: Same as your version, just adding a session check fix
export async function DELETE(req: NextRequest) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session || session.user.role !== "admin")
    return new Response("Forbidden", { status: 403 });

  const id = new URL(req.url).searchParams.get("id");
  if (!id) return new Response("ID Required", { status: 400 });

  try {
    await prisma.post.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}

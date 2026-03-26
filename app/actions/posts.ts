"use server";
import { prisma } from "@/lib/prisma";

export async function fetchMorePosts(skip: number, categorySlug?: string) {
  const posts = await prisma.post.findMany({
    where: {
      published: true,
      ...(categorySlug && { category: { slug: categorySlug } }),
    },
    include: { category: true },
    orderBy: { createdAt: "desc" },
    skip: skip,
    take: 6,
  });

  return posts;
}

"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function postComment(formData: FormData, postId: string) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) return { error: "All fields required" };

  await prisma.comment.create({
    data: {
      commenterName: name,
      commenterEmail: email,
      text: message,
      postId: postId,
    },
  });

  revalidatePath(`/blogs/[category]/[slug]`, "page");
  return { success: true };
}

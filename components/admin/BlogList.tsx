import { prisma } from "@/lib/prisma";
import { Eye, Edit3 } from "lucide-react";
import DeleteButton from "./DeleteButton";
import Link from "next/link"; // Import Link

export default async function BlogList() {
  const posts = await prisma.post.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div className="mt-12 overflow-hidden rounded-2xl border border-neutral-900 bg-neutral-950/50 backdrop-blur-sm">
      <table className="w-full text-left">
        <thead className="bg-neutral-900/50 text-xs uppercase text-neutral-500 font-bold">
          <tr>
            <th className="px-6 py-4">Article</th>
            <th className="px-6 py-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-900/50">
          {posts.map((post) => (
            <tr
              key={post.id}
              className="group hover:bg-white/5 transition-colors"
            >
              <td className="px-6 py-4">
                <div className="text-white font-bold">{post.title}</div>
                <div className="text-xs text-neutral-500">
                  {new Date(post.createdAt).toDateString()}
                </div>
              </td>
              <td className="px-6 py-4 text-right flex justify-end gap-2">
                {/* Updated: Link to trigger Edit Mode */}
                <Link
                  href={`?edit=${post.id}`}
                  scroll={false}
                  className="p-2 hover:bg-sky-500/10 rounded-lg text-neutral-400 hover:text-sky-500 transition-all"
                >
                  <Edit3 className="w-4 h-4" />
                </Link>
                <DeleteButton postId={post.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

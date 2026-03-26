import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import CommentSection from "@/components/CommentSection";

// 1. Explicit Interfaces for Type Safety
interface BlogComment {
  id: string;
  commenterName: string;
  text: string;
  createdAt: string;
}

interface SidebarPost {
  id: string;
  title: string;
  slug: string;
  createdAt: string;
  category?: {
    slug: string;
    name: string;
  } | null;
}

type PageProps = {
  params: Promise<{
    categorySlug: string;
    postSlug: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { postSlug } = await params;
  const post = await prisma.post.findUnique({ where: { slug: postSlug } });
  if (!post) return { title: "Post Not Found" };

  const baseUrl = "https://openstacked.com";
  return {
    title: `${post.title} | Open Stacked`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${baseUrl}/blogs/${post.slug}`,
      siteName: "Open Stacked",
      type: "article",
      images: post.thumbnail ? [{ url: post.thumbnail }] : [],
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { categorySlug, postSlug } = await params;

  // 2. Data Fetching
  const [rawPost, rawRecent, rawTrending] = await Promise.all([
    prisma.post.findUnique({
      where: { slug: postSlug },
      include: {
        author: { select: { name: true } },
        category: true,
        comments: { orderBy: { createdAt: "desc" } },
      },
    }),
    prisma.post.findMany({
      where: { published: true, NOT: { slug: postSlug } },
      take: 3,
      include: { category: true },
      orderBy: { createdAt: "desc" },
    }),
    prisma.post.findMany({
      where: { published: true },
      take: 3,
      include: { category: true },
      orderBy: { updatedAt: "desc" },
    }),
  ]);

  if (!rawPost || rawPost.category?.slug !== categorySlug) notFound();

  // 3. Serialization (Fixes the "Digest" Error)
  const post = JSON.parse(JSON.stringify(rawPost));
  const recentPosts: SidebarPost[] = JSON.parse(JSON.stringify(rawRecent));
  const trendingPosts: SidebarPost[] = JSON.parse(JSON.stringify(rawTrending));

  return (
    <article className="min-h-screen bg-black text-neutral-300 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* LEFT CONTENT: Main Article */}
          <main className="lg:w-3/4">
            <header className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-sky-500/10 text-sky-500 text-[10px] px-3 py-1 rounded-full font-black uppercase tracking-widest border border-sky-500/20">
                  {post.category?.name || "Uncategorized"}
                </span>
                <span className="text-neutral-600 font-mono text-xs">
                  {new Date(post.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-8">
                {post.title}
              </h1>
              <p className="text-xl text-neutral-400 font-medium leading-relaxed italic border-l-2 border-sky-600 pl-6 mb-10">
                {post.description}
              </p>
            </header>

            {post.thumbnail && (
              <div className="relative aspect-video w-full mb-16 overflow-hidden rounded-3xl border border-neutral-900 bg-neutral-950">
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            <div
              className="prose prose-invert prose-sky max-w-none 
                prose-headings:tracking-tighter prose-headings:font-black
                prose-p:text-neutral-400 prose-p:leading-8
                prose-pre:bg-neutral-950 prose-pre:border prose-pre:border-neutral-800
                prose-img:rounded-3xl prose-blockquote:border-sky-500"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-32 pt-10 border-t border-neutral-900">
              <CommentSection postId={post.id} />
              <div className="mt-16 space-y-8">
                {post.comments?.map((comment: BlogComment) => (
                  <div
                    key={comment.id}
                    className="border-l border-neutral-800 pl-6 py-2"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-white font-bold text-sm uppercase">
                        {comment.commenterName}
                      </span>
                      <span className="text-[10px] text-neutral-600 font-mono">
                        {new Date(comment.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      {comment.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </main>

          {/* RIGHT CONTENT: Sidebar */}
          <aside className="lg:w-1/4 space-y-16">
            <section>
              <h3 className="text-sky-500 text-[10px] font-black uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-sky-500/30"></span>{" "}
                Recent_Transmission
              </h3>
              <div className="space-y-8">
                {recentPosts.map((rp) => (
                  <Link
                    key={rp.id}
                    href={`/blogs/${rp.category?.slug || "uncategorized"}/${rp.slug}`}
                    className="group block"
                  >
                    <p className="text-[10px] font-mono text-neutral-600 mb-1">
                      {new Date(rp.createdAt).toLocaleDateString()}
                    </p>
                    <h4 className="text-sm font-bold text-neutral-300 group-hover:text-white transition-colors leading-snug">
                      {rp.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </section>

            <section className="bg-neutral-950/50 p-6 rounded-2xl border border-neutral-900">
              <h3 className="text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                🔥 High_Traffic_Nodes
              </h3>
              <div className="space-y-6">
                {trendingPosts.map((tp, idx) => (
                  <Link
                    key={tp.id}
                    href={`/blogs/${tp.category?.slug || "uncategorized"}/${tp.slug}`}
                    className="group flex gap-4 items-start"
                  >
                    <span className="text-2xl font-black text-neutral-800 group-hover:text-sky-900 transition-colors">
                      0{idx + 1}
                    </span>
                    <h4 className="text-sm font-bold text-neutral-400 group-hover:text-sky-400 transition-colors leading-tight">
                      {tp.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </section>

            <div className="pt-10 border-t border-neutral-900">
              <p className="text-xs uppercase tracking-widest text-neutral-500 mb-2">
                Written By
              </p>
              <p className="text-white font-bold mb-4">
                {post.author?.name || "Open Stacked Admin"}
              </p>
              <p className="text-neutral-600 text-[10px] font-mono uppercase tracking-[0.2em]">
                End of Log // Integrity Verified
              </p>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}

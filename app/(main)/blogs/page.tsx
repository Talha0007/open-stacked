import { prisma } from "@/lib/prisma";
import Link from "next/link";
import Image from "next/image";
import { Prisma } from "@prisma/client";
import LoadMorePosts from "@/components/LoadMorePosts";

// --- STEP 1: DEFINE THE TYPE ---
type PostWithCategory = Prisma.PostGetPayload<{
  include: { category: true };
  author?: { select: { name: true } };
}>;

type Props = {
  searchParams: Promise<{ category?: string }>;
};

export default async function BlogArchive({ searchParams }: Props) {
  const { category: activeCategory } = await searchParams;

  // --- STEP 2: UPDATE QUERIES TO INCLUDE CATEGORY ---
  const [posts, categories, recentPosts, trendingPosts] = await Promise.all([
    // Main Feed
    prisma.post.findMany({
      where: {
        published: true,
        ...(activeCategory && { category: { slug: activeCategory } }),
      },
      include: { category: true, author: { select: { name: true } } },
      orderBy: { createdAt: "desc" },
      take: 6,
    }),
    // Category List
    prisma.category.findMany({ orderBy: { name: "asc" } }),
    // Sidebar: Recent (ADDED INCLUDE HERE)
    prisma.post.findMany({
      where: { published: true },
      take: 3,
      include: { category: true },
      orderBy: { createdAt: "desc" },
    }),
    // Sidebar: Trending (ADDED INCLUDE HERE)
    prisma.post.findMany({
      where: { published: true },
      take: 3,
      include: { category: true },
      orderBy: { updatedAt: "desc" },
    }),
  ]);

  return (
    <div className="min-h-screen bg-black text-neutral-400 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER SECTION */}
        <header className="mb-20 border-l-2 border-sky-500 pl-8 font-mono">
          <h1 className="text-7xl font-black text-white tracking-tighter mb-4 uppercase">
            The Archive
          </h1>
          <p className="text-sky-500 text-sm uppercase tracking-[0.3em]">
            Open_Stacked // Insight_Database
          </p>
        </header>

        {/* CATEGORY NAV */}
        <nav className="flex items-center gap-4 mb-12 overflow-x-auto pb-4 border-b border-neutral-900 scrollbar-hide">
          <Link
            href="/blogs"
            className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all border ${
              !activeCategory
                ? "bg-white text-black border-white"
                : "text-neutral-500 border-neutral-800 hover:border-neutral-600"
            }`}
          >
            All_Logs
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/blogs?category=${cat.slug}`}
              className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all border ${
                activeCategory === cat.slug
                  ? "bg-sky-600 text-white border-sky-600"
                  : "text-neutral-500 border-neutral-800 hover:border-neutral-600"
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* LEFT CONTENT */}
          <main className="lg:w-3/4">
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {posts.map((post: PostWithCategory) => (
                <Link
                  key={post.id}
                  href={`/blogs/${post.category?.slug || "uncategorized"}/${post.slug}`}
                  className="group block"
                >
                  <div className="aspect-video mb-6 overflow-hidden rounded-xl border border-neutral-900 bg-neutral-950 relative">
                    {post.thumbnail && (
                      <Image
                        src={post.thumbnail}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-all duration-500"
                      />
                    )}
                  </div>
                  <h2 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors mb-2 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-neutral-500 line-clamp-2">
                    {post.description}
                  </p>
                </Link>
              ))}
            </div> */}
            <LoadMorePosts initialPosts={posts} categorySlug={activeCategory} />
          </main>

          {/* RIGHT CONTENT: Sidebar */}
          <aside className="lg:w-1/4 space-y-16">
            <section>
              <h3 className="text-sky-500 text-[10px] font-black uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-sky-500/30"></span>{" "}
                Recent_Transmission
              </h3>
              <div className="space-y-8">
                {recentPosts.map((post: PostWithCategory) => (
                  <Link
                    key={post.id}
                    href={`/blogs/${post.category?.slug || "uncategorized"}/${post.slug}`}
                    className="group block"
                  >
                    <p className="text-[10px] font-mono text-neutral-600 mb-1">
                      {new Date(post.createdAt).toLocaleDateString()}
                    </p>
                    <h4 className="text-sm font-bold text-neutral-300 group-hover:text-white transition-colors leading-snug">
                      {post.title}
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
                {trendingPosts.map((post: PostWithCategory, idx: number) => (
                  <Link
                    key={post.id}
                    href={`/blogs/${post.category?.slug || "uncategorized"}/${post.slug}`}
                    className="group flex gap-4 items-start"
                  >
                    <span className="text-2xl font-black text-neutral-800 group-hover:text-sky-900 transition-colors">
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-neutral-400 group-hover:text-sky-400 transition-colors leading-tight">
                        {post.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}

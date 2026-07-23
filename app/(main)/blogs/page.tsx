import { prisma } from "@/lib/prisma";
import Link from "next/link";
import LoadMorePosts from "@/components/LoadMorePosts";

// --- TYPES ---
interface Category {
  id: string;
  name: string;
  slug: string;
}

interface PostWithCategory {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  thumbnail: string | null;
  createdAt: Date | string;
  updatedAt: Date | string;
  category: {
    id: string;
    name: string;
    slug: string;
  } | null;
  author?: {
    name: string | null;
  } | null;
}

type Props = {
  searchParams: Promise<{ category?: string }>;
};

export default async function BlogArchive({ searchParams }: Props) {
  const { category: activeCategory } = await searchParams;

  // --- FETCH DATA ---
  const [postsData, categoriesData, recentData, trendingData] =
    await Promise.all([
      prisma.post.findMany({
        where: {
          published: true,
          authorId: { isSet: true },
          ...(activeCategory && { category: { slug: activeCategory } }),
        },
        include: { category: true, author: { select: { name: true } } },
        orderBy: { createdAt: "desc" },
        take: 6,
      }),
      prisma.category.findMany({ orderBy: { name: "asc" } }),
      prisma.post.findMany({
        where: { published: true },
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

  // --- SERIALIZE ---
  const posts = JSON.parse(JSON.stringify(postsData));
  const categories: Category[] = JSON.parse(JSON.stringify(categoriesData));
  const recentPosts = JSON.parse(JSON.stringify(recentData));
  const trendingPosts = JSON.parse(JSON.stringify(trendingData));

  return (
    <div className="min-h-screen bg-white text-slate-600 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <header className="mb-20 border-l-2 border-cyan-600 pl-8 font-mono">
          <span className="text-cyan-600 text-sm uppercase tracking-[0.3em]">
            Open_Stacked // Insight_Database
          </span>
          <h1 className="text-7xl font-black text-slate-900 tracking-tighter mt-2 uppercase">
            The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00aeef] via-[#3b82f6] to-[#2e3192] drop-shadow-[0_0_30px_rgba(0,174,239,0.25)]">
              Archive
            </span>
          </h1>
        </header>

        {/* CATEGORY NAV */}
        <nav className="flex items-center gap-4 mb-12 overflow-x-auto pb-4 border-b border-slate-200 scrollbar-hide">
          <Link
            href="/blogs"
            className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all border ${
              !activeCategory
                ? "bg-slate-900 text-white border-slate-900"
                : "text-slate-600 border-slate-200 hover:border-slate-400"
            }`}
          >
            All_Logs
          </Link>
          {categories.map((cat: Category) => (
            <Link
              key={cat.id}
              href={`/blogs?category=${cat.slug}`}
              className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all border ${
                activeCategory === cat.slug
                  ? "bg-cyan-600 text-white border-cyan-600"
                  : "text-slate-600 border-slate-200 hover:border-slate-400"
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* MAIN FEED */}
          <main className="lg:w-3/4">
            <LoadMorePosts initialPosts={posts} categorySlug={activeCategory} />
          </main>

          {/* SIDEBAR */}
          <aside className="lg:w-1/4 space-y-16">
            {/* Recent Posts */}
            <section>
              <h3 className="text-cyan-600 text-[10px] font-black uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-cyan-600/30"></span>{" "}
                Recent_Transmission
              </h3>
              <div className="space-y-8">
                {recentPosts.map((post: PostWithCategory) => (
                  <Link
                    key={post.id}
                    href={`/blogs/${post.category?.slug || "uncategorized"}/${post.slug}`}
                    className="group block"
                  >
                    <p className="text-[10px] font-mono text-slate-500 mb-1">
                      {new Date(post.createdAt).toLocaleDateString()}
                    </p>
                    <h4 className="text-sm font-bold text-slate-700 group-hover:text-cyan-600 transition-colors leading-snug">
                      {post.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </section>

            {/* Trending */}
            <section className="bg-slate-50/80 p-6 rounded-2xl border border-slate-200">
              <h3 className="text-slate-900 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                🔥 High_Traffic_Nodes
              </h3>
              <div className="space-y-6">
                {trendingPosts.map((post: PostWithCategory, idx: number) => (
                  <Link
                    key={post.id}
                    href={`/blogs/${post.category?.slug || "uncategorized"}/${post.slug}`}
                    className="group flex gap-4 items-start"
                  >
                    <span className="text-2xl font-black text-slate-300 group-hover:text-[#2e3192] transition-colors">
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-slate-600 group-hover:text-cyan-600 transition-colors leading-tight">
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
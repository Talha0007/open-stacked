// components/LoadMorePosts.tsx
"use client";

import { useState, useEffect } from "react"; // 1. Import useEffect
import { fetchMorePosts } from "@/app/actions/posts";
import Link from "next/link";
import Image from "next/image";

export default function LoadMorePosts({
  initialPosts,
  categorySlug,
}: {
  initialPosts: any[];
  categorySlug?: string;
}) {
  // Internal State
  const [posts, setPosts] = useState(initialPosts);
  const [skip, setSkip] = useState(6);
  const [hasMore, setHasMore] = useState(initialPosts.length === 6);
  const [isLoading, setIsLoading] = useState(false);

  // 2. CRITICAL: Reset state when props change (e.g., user clicks a category)
  useEffect(() => {
    setPosts(initialPosts);
    setSkip(6);
    setHasMore(initialPosts.length === 6);
  }, [initialPosts, categorySlug]);

  const loadMore = async () => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const newPosts = await fetchMorePosts(skip, categorySlug);

      if (newPosts.length < 6) {
        setHasMore(false);
      }

      setPosts((prev) => [...prev, ...newPosts]);
      setSkip((prev) => prev + 6);
    } catch (error) {
      console.error("Failed to sync logs:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
        {posts.map((post) => (
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
      </div>

      {hasMore && (
        <div className="mt-20 text-center">
          <button
            onClick={loadMore}
            disabled={isLoading}
            className="px-8 py-4 border border-neutral-800 rounded-full text-xs font-black uppercase tracking-[0.3em] text-neutral-400 hover:bg-white hover:text-black transition-all disabled:opacity-50"
          >
            {isLoading ? "Synchronizing..." : "Load_More_Logs"}
          </button>
        </div>
      )}
    </>
  );
}

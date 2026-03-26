"use client";
import React, { useState } from "react";
import { Plus, Loader2, Tag } from "lucide-react";

export default function CategoryManager({
  onCategoryAdded,
}: {
  onCategoryAdded: () => void;
}) {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAdd = async () => {
    if (!name.trim()) return;
    setLoading(true);

    try {
      const res = await fetch("/api/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });

      if (res.ok) {
        setName("");
        onCategoryAdded(); // Refetch categories in the main editor
      } else {
        const err = await res.json();
        alert(err.error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-neutral-900/50 border border-neutral-800 p-4 rounded-2xl flex items-center gap-4">
      <div className="flex items-center gap-2 text-neutral-500 min-w-fit">
        <Tag className="w-4 h-4" />
        <span className="text-xs font-bold uppercase tracking-widest">
          New Category
        </span>
      </div>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="e.g. Next.js, Hardware, AI"
        className="flex-1 bg-transparent border-b border-neutral-800 focus:border-sky-500 outline-none text-sm text-white py-1 transition-colors"
      />

      <button
        onClick={handleAdd}
        disabled={loading || !name}
        className="bg-white text-black p-2 rounded-full hover:bg-sky-400 disabled:opacity-50 disabled:hover:bg-white transition-all"
      >
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <Plus className="w-4 h-4" />
        )}
      </button>
    </div>
  );
}

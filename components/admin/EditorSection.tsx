"use client";
import React, { useState, useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Underline } from "@tiptap/extension-underline";
import { Link } from "@tiptap/extension-link";
import { Image as TiptapImage } from "@tiptap/extension-image";
import { Table } from "@tiptap/extension-table";
import { TableRow } from "@tiptap/extension-table-row";
import { TableCell } from "@tiptap/extension-table-cell";
import { TableHeader } from "@tiptap/extension-table-header";
import { Blockquote } from "@tiptap/extension-blockquote";
import { HorizontalRule } from "@tiptap/extension-horizontal-rule";
import {
  Save,
  Loader2,
  ChevronRight,
  Bold,
  Italic,
  UnderlineIcon,
  ImageIcon,
  Heading1,
  Heading2,
  List,
  ListOrdered,
  Quote,
  Code,
  Minus,
  Table as TableIcon,
  Type,
  Trash2,
  Tag, // <--- Add this
  Monitor, // <--- Add this if you used it in the UI I sent
  X, // <--- Add this if you used it
  Plus, // <--- Add this if you used it
} from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

const EditorToolbar = ({ editor }: { editor: any }) => {
  if (!editor) return null;

  const addImage = () => {
    const url = window.prompt("Cloudinary Image URL:");
    if (url) editor.chain().focus().setImage({ src: url }).run();
  };

  const activeClass = "bg-sky-600 text-white";
  const btnClass =
    "p-2 hover:bg-neutral-800 rounded transition-colors text-neutral-400 hover:text-white";

  return (
    <div className="border border-neutral-800 bg-neutral-950 sticky top-0 z-50 rounded-t-xl px-4 py-2 flex items-center gap-1 flex-wrap shadow-xl">
      {/* Headings */}
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`${btnClass} ${editor.isActive("heading", { level: 1 }) ? activeClass : ""}`}
      >
        <Heading1 className="w-5 h-5" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`${btnClass} ${editor.isActive("heading", { level: 2 }) ? activeClass : ""}`}
      >
        <Heading2 className="w-5 h-5" />
      </button>

      <div className="w-[1px] h-6 bg-neutral-800 mx-1" />

      {/* Basic Marks */}
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`${btnClass} ${editor.isActive("bold") ? activeClass : ""}`}
      >
        <Bold className="w-5 h-5" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`${btnClass} ${editor.isActive("italic") ? activeClass : ""}`}
      >
        <Italic className="w-5 h-5" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={`${btnClass} ${editor.isActive("underline") ? activeClass : ""}`}
      >
        <UnderlineIcon className="w-5 h-5" />
      </button>

      <div className="w-[1px] h-6 bg-neutral-800 mx-1" />

      {/* Lists & Blocks */}
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`${btnClass} ${editor.isActive("bulletList") ? activeClass : ""}`}
      >
        <List className="w-5 h-5" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`${btnClass} ${editor.isActive("orderedList") ? activeClass : ""}`}
      >
        <ListOrdered className="w-5 h-5" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`${btnClass} ${editor.isActive("blockquote") ? activeClass : ""}`}
      >
        <Quote className="w-5 h-5" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={`${btnClass} ${editor.isActive("codeBlock") ? activeClass : ""}`}
      >
        <Code className="w-5 h-5" />
      </button>

      <div className="w-[1px] h-6 bg-neutral-800 mx-1" />

      {/* Table & Extras */}
      <button
        onClick={() =>
          editor
            .chain()
            .focus()
            .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
            .run()
        }
        className={btnClass}
      >
        <TableIcon className="w-5 h-5" />
      </button>
      <button
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className={btnClass}
      >
        <Minus className="w-5 h-5" />
      </button>
      <button onClick={addImage} className={btnClass}>
        <ImageIcon className="w-5 h-5" />
      </button>

      {/* Table Management (Visible only when in a table) */}
      {editor.isActive("table") && (
        <div className="flex gap-1 ml-auto border-l border-neutral-800 pl-2">
          <button
            onClick={() => editor.chain().focus().deleteTable().run()}
            className="p-2 hover:bg-red-900/30 text-red-500 rounded"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default function EditorSection() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState(""); // New: Thumbnail State
  const [categoryId, setCategoryId] = useState(""); // New: Category ID State
  const [categories, setCategories] = useState<{ id: string; name: string }[]>(
    [],
  ); // To store fetched categories
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();
  const editId = searchParams.get("edit");

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({ openOnClick: false }),
      TiptapImage,
      Table.configure({ resizable: true }),
      TableRow,
      TableHeader,
      TableCell,
      Blockquote,
      HorizontalRule,
    ],
    content: "<h2>Insight Transmission</h2><p>Initialize content...</p>",
    immediatelyRender: false, // <--- THIS IS THE CRITICAL LINE
    editorProps: {
      attributes: {
        class:
          "prose prose-invert prose-sky max-w-none p-8 min-h-[500px] bg-black rounded-b-xl border border-neutral-800 focus:outline-none transition-all focus:border-neutral-700",
      },
    },
  });

  // Fetch categories on mount
  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch("/api/categories"); // Ensure you have this endpoint
      if (res.ok) setCategories(await res.json());
    };
    fetchCategories();
  }, []);

  const handlePublish = async () => {
    if (!title || !editor) return alert("Title and Content required");
    setLoading(true);

    try {
      const url = editId ? `/api/posts?id=${editId}` : "/api/posts";
      const method = editId ? "PATCH" : "POST";

      const res = await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description,
          content: editor.getHTML(),
          thumbnail, // Added to payload
          categoryId: categoryId || null, // Added to payload
        }),
      });

      if (res.ok) {
        alert(editId ? "Update Committed" : "Post Created");
        if (!editId) {
          setTitle("");
          setDescription("");
          setThumbnail("");
          setCategoryId("");
          editor.commands.setContent("");
        }
        router.push("/admin/publish");
        router.refresh();
      }
    } finally {
      setLoading(false);
    }
  };

  // Fetch post data for editing
  useEffect(() => {
    if (editId && editor) {
      const fetchPost = async () => {
        const res = await fetch(`/api/posts?id=${editId}`);
        if (res.ok) {
          const data = await res.json();
          setTitle(data.title);
          setDescription(data.description);
          setThumbnail(data.thumbnail || "");
          setCategoryId(data.categoryId || "");
          editor.commands.setContent(data.content);
        }
      };
      fetchPost();
    }
  }, [editId, editor]);

  return (
    <div className="my-20">
      {/* Header Section */}
      <div className="flex justify-between items-end mb-12">
        <h1 className="text-5xl font-black text-white tracking-tighter">
          {editId ? "Modify Insight" : "Forge Insights"}
        </h1>
        <div className="flex gap-2">
          {editId && (
            <button
              onClick={() => router.push("/admin/publish")}
              className="px-6 py-3 text-neutral-500 hover:text-white uppercase text-xs font-bold"
            >
              Cancel
            </button>
          )}
          <button
            onClick={handlePublish}
            disabled={loading}
            className="bg-white text-black px-8 py-3 rounded-full font-black flex items-center gap-2 hover:bg-sky-400 transition-all disabled:opacity-50"
          >
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Save className="w-4 h-4" />
            )}
            {editId ? "Update Archive" : "Commit Post"}
          </button>
        </div>
      </div>

      {/* Meta Inputs Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="space-y-4">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Post Title..."
            className="w-full bg-transparent text-4xl font-black outline-none text-white border-b border-neutral-900 focus:border-sky-500 pb-2 transition-colors"
          />
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Short description for preview..."
            className="w-full bg-transparent text-lg text-neutral-500 outline-none"
          />
        </div>

        <div className="bg-neutral-900/30 p-6 rounded-2xl border border-neutral-800 space-y-4">
          {/* Thumbnail Input */}
          <div className="flex items-center gap-3">
            <ImageIcon className="w-5 h-5 text-neutral-500" />
            <input
              value={thumbnail}
              onChange={(e) => setThumbnail(e.target.value)}
              placeholder="Thumbnail URL (Cloudinary/Unsplash)"
              className="bg-transparent w-full text-sm text-neutral-300 outline-none"
            />
          </div>

          {/* Category Dropdown */}
          <div className="flex items-center gap-3">
            <Tag className="w-5 h-5 text-neutral-500" />
            <select
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              className="bg-transparent w-full text-sm text-neutral-300 outline-none cursor-pointer"
            >
              <option value="" className="bg-black">
                Uncategorized
              </option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id} className="bg-black">
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Tiptap Editor */}
      {editor && (
        <div className="rounded-xl overflow-hidden border border-neutral-800 shadow-2xl">
          <EditorToolbar editor={editor} />
          <EditorContent editor={editor} />
        </div>
      )}
    </div>
  );
}

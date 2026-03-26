"use client";
import { useState } from "react"; // Remove useEffect
import { postComment } from "@/app/actions/comment";

export default function CommentSection({ postId }: { postId: string }) {
  // 1. Initialize state lazily from cookies
  const [formData, setFormData] = useState(() => {
    // Check if we are in the browser to avoid SSR errors
    if (typeof document !== "undefined") {
      const saved = document.cookie
        .split("; ")
        .find((row) => row.startsWith("user_details="));
      if (saved) {
        try {
          const { name, email } = JSON.parse(
            decodeURIComponent(saved.split("=")[1]),
          );
          return { name: name || "", email: email || "", message: "" };
        } catch (e) {
          console.error("Cookie parse error", e);
        }
      }
    }
    return { name: "", email: "", message: "" };
  });

  const [saveDetails, setSaveDetails] = useState(() => {
    if (typeof document !== "undefined") {
      return document.cookie.includes("user_details=");
    }
    return false;
  });

  const [status, setStatus] = useState("");

  // DELETE the old useEffect block entirely

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Transmitting...");

    const form = new FormData(e.currentTarget);
    const result = await postComment(form, postId);

    if (result.success) {
      if (saveDetails) {
        const details = JSON.stringify({
          name: formData.name,
          email: formData.email,
        });
        document.cookie = `user_details=${encodeURIComponent(details)}; path=/; max-age=${60 * 60 * 24 * 30}`;
      } else {
        document.cookie =
          "user_details=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
      }
      setFormData((prev) => ({ ...prev, message: "" }));
      setStatus("Sent Successfully.");

      // Optional: Clear status after 3 seconds
      setTimeout(() => setStatus(""), 3000);
    } else {
      setStatus("Error.");
    }
  };

  return (
    <section className="mt-20 border-t border-neutral-900 pt-16">
      <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-8 italic">
        Post_Comment
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Identity (Name)"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="bg-neutral-950 border border-neutral-800 rounded-xl p-4 text-sm focus:border-sky-500 outline-none transition-all"
          />
          <input
            type="email"
            name="email"
            placeholder="Node_Address (Email)"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="bg-neutral-950 border border-neutral-800 rounded-xl p-4 text-sm focus:border-sky-500 outline-none transition-all"
          />
        </div>

        <textarea
          name="message"
          placeholder="Your Transmission..."
          required
          rows={5}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full bg-neutral-950 border border-neutral-800 rounded-2xl p-4 text-sm focus:border-sky-500 outline-none transition-all"
        />

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="save"
            checked={saveDetails}
            onChange={(e) => setSaveDetails(e.target.checked)}
            className="accent-sky-500 w-4 h-4"
          />
          <label
            htmlFor="save"
            className="text-xs text-neutral-500 font-mono uppercase tracking-widest"
          >
            Remember my credentials for next time
          </label>
        </div>

        <button
          type="submit"
          className="bg-sky-600 hover:bg-sky-500 text-white font-black uppercase text-xs tracking-[0.3em] px-8 py-4 rounded-full transition-all"
        >
          {status || "Execute_Post"}
        </button>
      </form>
    </section>
  );
}

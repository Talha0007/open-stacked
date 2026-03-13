"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate API call
    setTimeout(() => setStatus("success"), 2000);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-slate-500 text-[10px] font-mono uppercase tracking-widest pl-2">
            Full Name
          </label>
          <input
            type="text"
            required
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <label className="text-slate-500 text-[10px] font-mono uppercase tracking-widest pl-2">
            Email Address
          </label>
          <input
            type="email"
            required
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
            placeholder="john@company.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-slate-500 text-[10px] font-mono uppercase tracking-widest pl-2">
          Subject
        </label>
        <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500/50 transition-colors appearance-none">
          <option className="bg-black">Full-Stack Development</option>
          <option className="bg-black">Cloud Infrastructure</option>
          <option className="bg-black">UI/UX Strategy</option>
          <option className="bg-black">Other Inquiries</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-slate-500 text-[10px] font-mono uppercase tracking-widest pl-2">
          Message Details
        </label>
        <textarea
          rows={5}
          required
          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
          placeholder="Describe your project requirements..."
        />
      </div>

      <button
        type="submit"
        disabled={status !== "idle"}
        className={`w-full py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-xs transition-all flex items-center justify-center gap-4 ${
          status === "success"
            ? "bg-green-500 text-white"
            : "bg-white text-black hover:bg-cyan-500 hover:text-white"
        }`}
      >
        {status === "idle" && (
          <>
            <Send size={16} /> Deploy Message
          </>
        )}
        {status === "sending" && "Processing Protocol..."}
        {status === "success" && "Message Received Successfully"}
      </button>
    </motion.form>
  );
}

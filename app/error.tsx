"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Wrench, RefreshCcw, ShieldAlert } from "lucide-react";

// 'Error' component hamesha client-side hota hai
export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Console mein error log karein (Development mein kaam aata hai)
    console.error("Next.js Error Boundary caught:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-6">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Animated Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mx-auto w-24 h-24 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center text-red-500"
        >
          <ShieldAlert size={48} />
        </motion.div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter">
            System <span className="text-red-500">Fault.</span>
          </h1>
          <p className="text-slate-500 font-mono text-sm uppercase tracking-widest leading-relaxed">
            An unexpected runtime error occurred. The Open Stacked
            infrastructure is attempting to recover.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <button
            onClick={() => reset()} // Yeh page ko refresh kiye baghair components ko recover karega
            className="flex items-center gap-3 px-10 py-4 bg-white text-black font-black rounded-full text-xs tracking-[0.2em] uppercase hover:bg-cyan-500 hover:text-white transition-all w-full sm:w-auto"
          >
            <RefreshCcw size={16} /> Re-Sync System
          </button>

          <button
            onClick={() => (window.location.href = "/")}
            className="flex items-center gap-3 px-10 py-4 border border-white/10 text-slate-400 font-black rounded-full text-xs tracking-[0.2em] uppercase hover:bg-white/5 hover:text-white transition-all w-full sm:w-auto"
          >
            <Wrench size={16} /> Return to Home
          </button>
        </div>
      </div>
    </div>
  );
}

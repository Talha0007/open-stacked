"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Terminal, AlertTriangle, Home, RefreshCcw } from "lucide-react";

export default function NotFoundClient() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10 pointer-events-none">
        <h1 className="text-[25vw] font-black text-white select-none leading-none">
          404
        </h1>
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center space-y-8">
        {/* Error Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
          className="mx-auto w-24 h-24 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center text-red-500"
        >
          <AlertTriangle size={48} />
        </motion.div>

        {/* Text Content */}
        <div className="space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tighter italic uppercase"
          >
            Terminal <span className="text-red-500">Error.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 font-mono text-xs md:text-sm uppercase tracking-widest leading-relaxed max-w-md mx-auto"
          >
            The requested protocol does not exist in the Open Stacked
            infrastructure. The link may have been moved or decommissioned.
          </motion.p>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
        >
          <Link
            href="/"
            className="flex items-center gap-3 px-8 py-4 bg-white text-black font-black rounded-full text-xs tracking-[0.2em] uppercase hover:bg-cyan-500 hover:text-white transition-all w-full sm:w-auto text-center justify-center"
          >
            <Home size={16} /> Return to Core
          </Link>

          <button
            onClick={() => window.location.reload()}
            className="flex items-center gap-3 px-8 py-4 border border-white/10 text-slate-400 font-black rounded-full text-xs tracking-[0.2em] uppercase hover:bg-white/5 hover:text-white transition-all w-full sm:w-auto text-center justify-center"
          >
            <RefreshCcw size={16} /> Retry Connection
          </button>
        </motion.div>

        {/* Terminal Simulation Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="pt-12 flex items-center justify-center gap-4 text-slate-700 font-mono text-[10px] uppercase tracking-[0.3em]"
        >
          <Terminal size={12} />
          <span>Status: 404_PAGE_NOT_FOUND</span>
          <span className="w-2 h-4 bg-cyan-500 animate-pulse" />
        </motion.footer>
      </div>
    </div>
  );
}

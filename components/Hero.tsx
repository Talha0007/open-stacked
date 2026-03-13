"use client";
import { motion, Variants } from "framer-motion";
import HeroScene from "./hero/Scene";
import { ArrowRight, Terminal, Cpu, Globe } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        // ease array ko explicit type den ya simple string use karein
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-transparent text-white">
      {/* Background 3D Scene */}
      <HeroScene />

      {/* Dynamic Overlay Gradient */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_90%)] pointer-events-none" />

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pointer-events-none">
        {/* Left Side: Main Value Proposition */}
        <div className="lg:col-span-8 space-y-8">
          <motion.div
            custom={1}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-3"
          >
            <span className="flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-[10px] font-bold uppercase tracking-[0.4em] backdrop-blur-md">
              <Cpu size={14} className="animate-pulse" /> Next-Gen
              Infrastructure
            </span>
            <div className="h-[1px] w-12 bg-gradient-to-r from-cyan-500 to-transparent" />
          </motion.div>

          <motion.h1
            custom={2}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="text-6xl md:text-8xl lg:text-[11rem] font-black leading-[0.8] tracking-tighter"
          >
            OPEN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00aeef] via-[#3b82f6] to-[#2e3192] drop-shadow-[0_0_30px_rgba(0,174,239,0.3)]">
              STACKED
            </span>
          </motion.h1>

          <motion.p
            custom={3}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="text-lg md:text-2xl text-slate-400 max-w-2xl font-light leading-relaxed border-l-2 border-cyan-500/30 pl-6"
          >
            We don&apos;t just build software; we engineer resilient digital
            ecosystems. High-performance cloud solutions for the next era of
            enterprise technology.
          </motion.p>

          <motion.div
            custom={4}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-6 pointer-events-auto"
          >
            <Link href="/quote">
              <button className="group relative overflow-hidden bg-white text-black px-12 py-5 rounded-sm font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-cyan-500/20">
                <span className="relative z-10 flex items-center gap-2">
                  Launch System{" "}
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </span>
              </button>
            </Link>

            <Link href="/docs">
              <button className="group px-8 py-5 rounded-sm border border-white/10 bg-white/5 backdrop-blur-md font-medium text-lg hover:bg-white/10 transition-all flex items-center gap-2">
                <Terminal size={20} className="text-cyan-400" /> View
                Documentation
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Right Side: Advanced Tech Stats (Bento Look) */}
        <div className="hidden lg:flex lg:col-span-4 flex-col gap-4">
          <motion.div
            custom={5}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="p-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl"
          >
            <div className="text-cyan-400 text-xs font-bold tracking-widest mb-2 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />{" "}
              SERVER STATUS: OPTIMAL
            </div>
            <div className="text-3xl font-mono font-bold tracking-tighter">
              99.9% UPTIME
            </div>
            <div className="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "99.9%" }}
                transition={{ duration: 2, delay: 1 }}
                className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
              />
            </div>
          </motion.div>

          <motion.div
            custom={6}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="p-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl group hover:border-cyan-500/40 transition-colors"
          >
            <Globe className="text-cyan-400 mb-4" />
            <div className="text-sm text-slate-400">
              Global Infrastructure Nodes
            </div>
            <div className="text-4xl font-black mt-1">
              24<span className="text-cyan-500">+</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Tech Bar */}
      <div className="absolute bottom-10 left-0 w-full z-20 px-6 hidden md:block opacity-30 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] font-mono tracking-[0.3em] uppercase">
          <span>&#47;&#47; NODE_ID: OPEN_STACKED_MAIN</span>
          <span>LATENCY: 14MS</span>
          <span>ENCRYPTION: AES-256</span>
          <span>LOCATION: LAHORE_HQ</span>
        </div>
      </div>
    </section>
  );
}

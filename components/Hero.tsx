// components/Hero.tsx
"use client";
import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  Terminal,
  Globe,
  Server,
  Activity,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-between text-black p-4 sm:p-8 md:p-12 xl:p-16 overflow-hidden"
    >
      {/* TOP DECORATIVE META BAR */}
      <div className="w-full flex justify-between items-start pointer-events-none z-20">
        {/* <motion.div
          custom={1}
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-3"
        >
          <span className="flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-[10px] font-bold uppercase tracking-[0.4em] backdrop-blur-md">
            <Cpu size={14} className="animate-pulse" /> Next-Gen Infrastructure
          </span>
        </motion.div> */}

        <motion.div
          custom={1}
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="hidden md:flex items-center gap-2 text-[10px] font-mono tracking-widest text-slate-600"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
          SYS_STATUS: ACTIVE // LOG_0x24F
        </motion.div>
      </div>

      {/* CORE HERO INTERFACE GRID */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-2 md:px-6 pointer-events-none my-auto py-8 lg:py-0 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* LEFT FLANK: Value Proposition (Spans 7 Columns) */}
        <div className="col-span-1 lg:col-span-7 space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
          <div className="space-y-4">
            <motion.h1
              custom={2}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[9rem] font-black leading-[0.85] tracking-tighter uppercase text-black"
            >
              OPEN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00aeef] via-[#3b82f6] to-[#2e3192] drop-shadow-[0_0_40px_rgba(0,174,239,0.25)]">
                STACKED
              </span>
            </motion.h1>
          </div>

          <motion.p
            custom={3}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="text-base sm:text-xl md:text-2xl text-slate-600 max-w-xl font-light leading-relaxed border-t-2 lg:border-t-0 lg:border-l-2 border-cyan-500/30 pt-4 lg:pt-0 lg:pl-6"
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
            className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 w-full sm:w-auto pointer-events-auto"
          >
            <Link href="/quote" className="w-full sm:w-auto">
              <button className="group relative w-full sm:w-auto overflow-hidden bg-white text-black px-10 py-4.5 rounded-sm font-bold text-base transition-all hover:scale-[1.03] active:scale-95 shadow-2xl shadow-cyan-500/10">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Launch System{" "}
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1.5 transition-transform"
                  />
                </span>
              </button>
            </Link>

            <Link href="/docs" className="w-full sm:w-auto">
              <button className="group w-full sm:w-auto px-8 py-4.5 rounded-sm border border-slate-300 bg-white shadow-sm font-medium text-base hover:bg-slate-100 transition-all flex items-center justify-center gap-2">
                <Terminal size={18} className="text-cyan-400" /> View
                Architecture
              </button>
            </Link>
          </motion.div>
        </div>

        {/* RIGHT FLANK: Cybernetic UI Dashboard (Spans 5 Columns) */}
        <div className="col-span-1 lg:col-span-5 flex flex-col gap-4 w-full max-w-md mx-auto lg:mx-0">
          {/* Node Status Panel */}
          <motion.div
            custom={5}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="p-6 rounded-xl border border-slate-200 bg-white/80 backdrop-blur-xl pointer-events-auto group hover:border-cyan-500/20 transition-all duration-500 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-cyan-400 text-[10px] font-mono font-bold tracking-widest flex items-center gap-2">
                <Server size={14} className="text-cyan-400" /> CLOUD
                INFRASTRUCTURE
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 animate-pulse">
                ONLINE
              </span>
            </div>
            <div className="text-3xl font-mono font-bold tracking-tight">
              99.99%{" "}
              <span className="text-xs font-sans text-slate-500 font-normal">
                UPTIME RATE
              </span>
            </div>
            <div className="mt-4 h-[2px] w-full bg-slate-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "99.99%" }}
                transition={{ duration: 1.8, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-[#00aeef] to-[#2e3192]"
              />
            </div>
          </motion.div>

          {/* Network Footprint Panel */}
          <motion.div
            custom={6}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="p-6 rounded-xl border border-slate-200 bg-white/80 backdrop-blur-xl pointer-events-auto group hover:border-blue-500/20 transition-all duration-500 shadow-2xl"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <div className="text-slate-500 text-xs font-medium flex items-center gap-2">
                  <Globe size={14} className="text-blue-400" /> Edge Compute
                  Clusters
                </div>
                <div className="text-4xl font-black tracking-tight pt-1">
                  113<span className="text-cyan-400 font-light">+</span>
                </div>
              </div>
              <div className="text-right font-mono text-[11px] text-slate-400 space-y-0.5">
                <div>LON_UK // LHR_PK</div>
                <div>GLOBAL NODE MESH</div>
              </div>
            </div>
          </motion.div>

          {/* Live Diagnostics Mini Wireframe */}
          <motion.div
            custom={7}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="p-5 rounded-xl border border-slate-200 bg-white/70 backdrop-blur-md flex items-center justify-between pointer-events-auto group hover:border-purple-500/20 transition-all duration-500"
          >
            <div className="flex items-center gap-4">
              <div className="p-2.5 rounded-lg bg-slate-100 border border-slate-300 text-cyan-400 group-hover:scale-110 transition-transform">
                <Activity size={16} className="animate-pulse" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-500">
                  ENGINE LATENCY
                </div>
                <div className="text-base font-mono font-bold tracking-tight text-slate-800">
                  ~14.2MS AVERAGE
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-600">
              <ShieldCheck size={14} className="text-emerald-400" /> SECURE TIER
            </div>
          </motion.div>
        </div>
      </div>

      {/* SYSTEM META METRICS BASELINE STRING */}
      <div className="w-full z-20 px-4 md:px-6 opacity-60 pointer-events-none mt-auto pt-6 lg:pt-0">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-[9px] font-mono tracking-[0.3em] uppercase text-center sm:text-left text-slate-600">
          <span>&#47;&#47; AUTH_NODE: OPEN_STACKED_ENG_HQ</span>
          <span className="hidden sm:inline">|</span>
          <span>PROTOCOL: TLS_1.3_AES_256_GCM</span>
          <span className="hidden sm:inline">|</span>
          <span>LOC_REF: [31.5204° N, 74.3587° E]</span>
        </div>
      </div>
    </section>
  );
}
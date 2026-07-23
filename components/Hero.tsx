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
    hidden: { opacity: 0, y: 15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section
      id="home"
      className="relative min-h-dvh w-full flex flex-col justify-between items-center text-slate-900 px-4 sm:px-6 md:px-6 xl:px-16 pt-24 sm:pt-28 pb-4 overflow-x-hidden"
    >
      {/* CORE HERO INTERFACE GRID */}
      <div className="relative z-20 w-full max-w-7xl mx-auto my-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-center ">
        {/* LEFT FLANK: Value Proposition */}
        <div className="col-span-1 lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start justify-center">
          <div className="space-y-1 sm:space-y-3">
            <motion.h1
              custom={2}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="text-3xl sm:text-5xl md:text-7xl lg:text-[6.5rem] xl:text-[7.5rem] font-black leading-[0.95] sm:leading-[0.85] tracking-tighter uppercase"
            >
              OPEN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00aeef] via-[#3b82f6] to-[#2e3192] drop-shadow-[0_0_30px_rgba(0,174,239,0.25)]">
                STACKED
              </span>
            </motion.h1>
          </div>

          <motion.p
            custom={3}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="text-xs sm:text-base md:text-xl text-slate-600 max-w-xl font-light leading-relaxed border-t lg:border-t-0 lg:border-l-2 border-cyan-600/30 pt-3 lg:pt-0 lg:pl-6"
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
            className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-2.5 sm:gap-4 w-full sm:w-auto"
          >
            <Link href="/quote" className="w-full sm:w-auto">
              <button className="group relative w-full sm:w-auto overflow-hidden bg-slate-900 text-white px-5 sm:px-8 py-3 sm:py-4 rounded-md font-semibold text-xs sm:text-base transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-cyan-600/10">
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
              <button className="group w-full sm:w-auto px-5 sm:px-8 py-3 sm:py-4 rounded-md border border-slate-300 bg-white/80 backdrop-blur-md shadow-sm font-medium text-xs sm:text-base hover:bg-slate-50 transition-all flex items-center justify-center gap-2 font-semibold">
                <Terminal size={16} className="text-cyan-600" /> View
                Architecture
              </button>
            </Link>
          </motion.div>
        </div>

        {/* RIGHT FLANK: Dashboard Panels */}
        <div className="col-span-1 lg:col-span-5 flex flex-col justify-center gap-2.5 sm:gap-4 w-full max-w-md mx-auto lg:mx-0">
          {/* Node Status Panel */}
          <motion.div
            custom={5}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="p-3 sm:p-6 rounded-xl border border-slate-200 bg-white/80 backdrop-blur-xl hover:border-cyan-600/30 transition-all duration-500 shadow-md sm:shadow-xl"
          >
            <div className="flex items-center justify-between mb-2 sm:mb-4">
              <div className="text-cyan-600 text-[10px] sm:text-xs font-mono font-bold tracking-widest flex items-center gap-1.5 sm:gap-2">
                <Server size={14} className="text-cyan-600" /> CLOUD
                INFRASTRUCTURE
              </div>
              <span className="text-[9px] sm:text-[10px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-500/20 font-semibold animate-pulse">
                ONLINE
              </span>
            </div>
            <div className="text-xl sm:text-3xl font-mono font-bold tracking-tight text-slate-900">
              99.99%{" "}
              <span className="text-[10px] sm:text-xs font-sans text-slate-700 font-normal">
                UPTIME RATE
              </span>
            </div>
            <div className="mt-2 sm:mt-4 h-[3px] w-full bg-slate-100 rounded-full overflow-hidden">
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
            className="p-3.5 sm:p-6 rounded-xl border border-slate-200 bg-white/80 backdrop-blur-xl hover:border-blue-600/30 transition-all duration-500 shadow-md sm:shadow-xl"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-0.5 sm:space-y-1">
                <div className="text-slate-500 text-[10px] sm:text-xs font-medium flex items-center gap-1.5">
                  <Globe size={14} className="text-blue-600" /> Edge Compute
                  Clusters
                </div>
                <div className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900">
                  113<span className="text-cyan-600 font-light">+</span>
                </div>
              </div>
              <div className="text-right font-mono text-[8px] sm:text-[11px] text-slate-600 space-y-0.5">
                <div>LON_UK // LHR_PK</div>
                <div>GLOBAL NODE MESH</div>
              </div>
            </div>
          </motion.div>

          {/* Live Diagnostics Panel */}
          <motion.div
            custom={7}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="p-3.5 sm:p-5 rounded-xl border border-slate-200 bg-white/70 backdrop-blur-md flex items-center justify-between hover:border-purple-500/30 transition-all duration-500"
          >
            <div className="flex items-center gap-2.5 sm:gap-4">
              <div className="p-2 sm:p-2.5 rounded-lg bg-slate-100 border border-slate-200 text-cyan-600">
                <Activity size={15} className="animate-pulse" />
              </div>
              <div>
                <div className="text-[9px] sm:text-[11px] font-mono text-slate-500">
                  ENGINE LATENCY
                </div>
                <div className="text-xs sm:text-base font-mono font-bold tracking-tight text-slate-800">
                  ~14.2MS AVERAGE
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1 text-[8px] sm:text-[10px] font-mono text-slate-600">
              <ShieldCheck size={13} className="text-emerald-500" /> SECURE TIER
            </div>
          </motion.div>
        </div>
      </div>

      {/* FOOTER METRICS BASELINE */}
      <div className="w-full z-20 sm:pt-6 flex justify-center pb-10">
        <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 text-[8px] sm:text-[10px] font-mono tracking-[0.15em] sm:tracking-[0.25em] uppercase text-center text-slate-800 opacity-80">
          <span>&#47;&#47; AUTH_NODE: OPEN_STACKED_ENG_HQ</span>
          <span className="">
            LOC_REF: [31.5204° N, 74.3587° E]
          </span>
          <span>PROTOCOL: TLS_1.3_AES_256_GCM</span>
        </div>
      </div>
    </section>
  );
}
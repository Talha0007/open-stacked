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
      className="relative min-h-dvh w-full flex flex-col justify-between items-center text-white px-4 sm:px-6 md:px-6 xl:px-8 pt-24 sm:pt-28 pb-4 overflow-hidden"
    >
      {/* BACKGROUND VIDEO LAYER */}
      <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="https://res.cloudinary.com/dbj0rhqyr/video/upload/q_auto,f_auto,w_1920/v1786721947/158756-817470865_m5qqfn.jpg"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none scale-105"
        >
          <source
            src="https://res.cloudinary.com/dbj0rhqyr/video/upload/q_auto,f_auto,w_1920,c_limit/v1786721947/158756-817470865_m5qqfn.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* DARK GRADIENT OVERLAY FOR MAXIMUM CONTRAST */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950/90" />
      </div>

      {/* CORE HERO INTERFACE GRID */}
      <div className="relative z-20 w-full max-w-375 mx-auto my-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-center">
        {/* LEFT FLANK: Value Proposition */}
        <div className="col-span-1 lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start justify-center">
          <div className="space-y-1 sm:space-y-3">
            <motion.h1
              custom={2}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="text-3xl sm:text-5xl md:text-7xl lg:text-[6.5rem] xl:text-[7.5rem] font-black leading-[0.95] sm:leading-[0.85] tracking-tighter uppercase text-white drop-shadow-md"
            >
              OPEN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 drop-shadow-[0_0_35px_rgba(0,174,239,0.4)]">
                STACKED
              </span>
            </motion.h1>
          </div>

          <motion.p
            custom={3}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="text-xs sm:text-base md:text-xl text-slate-300 max-w-xl font-light leading-relaxed border-t lg:border-t-0 lg:border-l-2 border-cyan-400/40 pt-3 lg:pt-0 lg:pl-6"
          >
            We design and build websites, applications, and cloud systems for
            businesses that need software they can depend on — engineered to
            handle real growth, real traffic, and real users from day one.
          </motion.p>

          <motion.div
            custom={4}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-2.5 sm:gap-4 w-full sm:w-auto"
          >
            <Link href="/quote" className="w-full sm:w-auto">
              <button className="group relative w-full sm:w-auto overflow-hidden bg-cyan-500 text-slate-950 hover:bg-cyan-400 px-5 sm:px-8 py-3 sm:py-4 rounded-md font-bold text-xs sm:text-base transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-cyan-500/25">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start a Project{" "}
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1.5 transition-transform"
                  />
                </span>
              </button>
            </Link>

            <Link href="/docs" className="w-full sm:w-auto">
              <button className="group w-full sm:w-auto px-5 sm:px-8 py-3 sm:py-4 rounded-md border border-slate-700/80 bg-slate-900/60 backdrop-blur-md text-white font-medium text-xs sm:text-base hover:bg-slate-800/80 transition-all flex items-center justify-center gap-2 font-semibold shadow-sm">
                <Terminal size={16} className="text-cyan-400" /> View
                Architecture
              </button>
            </Link>
          </motion.div>
        </div>

        {/* RIGHT FLANK: Dashboard Panels */}
        <div className="col-span-1 lg:col-span-5 flex flex-col justify-center gap-2.5 sm:gap-4 w-full max-w-375 mx-auto lg:mx-0">
          {/* Node Status Panel */}
          <motion.div
            custom={5}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="p-3 sm:p-6 rounded-xl border border-slate-800/80 bg-slate-900/60 backdrop-blur-xl hover:border-cyan-500/50 transition-all duration-500 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-2 sm:mb-4">
              <div className="text-cyan-400 text-[10px] sm:text-xs font-mono font-bold tracking-widest flex items-center gap-1.5 sm:gap-2">
                <Server size={14} className="text-cyan-400" /> CLOUD
                INFRASTRUCTURE
              </div>
              <span className="text-[9px] sm:text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30 font-semibold animate-pulse">
                ONLINE
              </span>
            </div>
            <div className="text-xl sm:text-3xl font-mono font-bold tracking-tight text-white">
              99.99%{" "}
              <span className="text-[10px] sm:text-xs font-sans text-slate-400 font-normal">
                UPTIME RATE
              </span>
            </div>
            <div className="mt-2 sm:mt-4 h-[3px] w-full bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "99.99%" }}
                transition={{ duration: 1.8, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-600"
              />
            </div>
          </motion.div>

          {/* Network Footprint Panel */}
          <motion.div
            custom={6}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="p-3.5 sm:p-6 rounded-xl border border-slate-800/80 bg-slate-900/60 backdrop-blur-xl hover:border-blue-500/50 transition-all duration-500 shadow-2xl"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-0.5 sm:space-y-1">
                <div className="text-slate-400 text-[10px] sm:text-xs font-medium flex items-center gap-1.5">
                  <Globe size={14} className="text-cyan-400" /> Edge Compute
                  Clusters
                </div>
                <div className="text-2xl sm:text-4xl font-black tracking-tight text-white">
                  113<span className="text-cyan-400 font-light">+</span>
                </div>
              </div>
              <div className="text-right font-mono text-[8px] sm:text-[11px] text-slate-400 space-y-0.5">
                <div>LHR_PK // ATL_US</div>
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
            className="p-3.5 sm:p-5 rounded-xl border border-slate-800/80 bg-slate-900/50 backdrop-blur-md flex items-center justify-between hover:border-purple-500/40 transition-all duration-500"
          >
            <div className="flex items-center gap-2.5 sm:gap-4">
              <div className="p-2 sm:p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-cyan-400">
                <Activity size={15} className="animate-pulse" />
              </div>
              <div>
                <div className="text-[9px] sm:text-[11px] font-mono text-slate-400">
                  ENGINE LATENCY
                </div>
                <div className="text-xs sm:text-base font-mono font-bold tracking-tight text-slate-100">
                  ~14.2MS AVERAGE
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1 text-[8px] sm:text-[10px] font-mono text-slate-400">
              <ShieldCheck size={13} className="text-emerald-400" /> SECURE TIER
            </div>
          </motion.div>
        </div>
      </div>

      {/* FOOTER METRICS BASELINE */}
      <div className="w-full z-20 sm:pt-6 flex justify-center pb-10">
        <div className="w-full max-w-375 mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 text-[8px] sm:text-[10px] font-mono tracking-[0.15em] sm:tracking-[0.25em] uppercase text-center text-slate-400 font-semibold opacity-90">
          <span>&#47;&#47; AUTH_NODE: OPEN_STACKED_ENG_HQ</span>
          <span>LOC_REF: [31.5204° N, 74.3587° E]</span>
          <span>PROTOCOL: TLS_1.3_AES_256_GCM</span>
        </div>
      </div>
    </section>
  );
}

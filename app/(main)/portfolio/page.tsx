"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Activity, Layers } from "lucide-react";
import { projects, Project } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function PortfolioPage() {
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
    <main className="relative min-h-dvh w-full text-slate-900 px-4 sm:px-6 md:px-6 xl:px-16 pt-24 sm:pt-28 pb-16 overflow-x-hidden">
      {/* Background Ambient Glows (Same as Services section) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-600/50 to-transparent" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      {/* SECTION 1: HERO / HEADER BANNER */}
      <section className="relative z-20 w-full max-w-7xl mx-auto mb-16 md:mb-24 mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* LEFT: Heading & Value Prop */}
          <div className="col-span-1 lg:col-span-8 space-y-4 sm:space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start justify-center">
            <div>
              <motion.span
                custom={1}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                className="text-cyan-600 font-mono text-xs sm:text-sm tracking-[0.4em] uppercase inline-block mb-3 pl-3"
              >
                 PROVEN ARCHITECTURES
              </motion.span>
              <motion.h1
                custom={2}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black leading-[0.95] tracking-tighter uppercase italic"
              >
                PORTFOLIO & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00aeef] via-[#3b82f6] to-[#2e3192] drop-shadow-[0_0_30px_rgba(0,174,239,0.25)]">
                  DEPLOYMENTS
                </span>
              </motion.h1>
            </div>

            <motion.p
              custom={3}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl font-light leading-relaxed pt-3"
            >
              Explore our complete repository of enterprise-grade software, 
              decentralized infrastructure, and cloud solutions engineered for maximum performance.
            </motion.p>
          </div>

          {/* RIGHT: System Metrics Badge */}
          <div className="col-span-1 lg:col-span-4 w-full max-w-md mx-auto lg:mx-0">
            <motion.div
              custom={4}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-xl shadow-xl space-y-4"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="text-cyan-600 text-xs font-mono font-bold tracking-widest flex items-center gap-2">
                  <Layers size={16} /> SYSTEM METRICS
                </div>
                <span className="text-[9px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-500/20 font-semibold animate-pulse">
                  ACTIVE REGISTRY
                </span>
              </div>

              <div className="flex justify-between items-end">
                <div>
                  <div className="text-3xl font-mono font-black text-slate-900">
                    {projects.length}
                    <span className="text-cyan-600 font-light">+</span>
                  </div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                    Total Enterprise Solutions
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-sm font-mono font-bold text-slate-800 flex items-center gap-1 justify-end">
                    <Activity size={14} className="text-cyan-600" /> 100%
                  </div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                    Production Ready
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PORTFOLIO CARDS GRID */}
      <section className="relative z-20 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: Project, idx: number) => (
            <ProjectCard
              key={project.id || idx}
              project={project}
              idx={idx}
              fadeInVariants={fadeIn}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
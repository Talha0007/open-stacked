"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Code2, Layers } from "lucide-react";

const values = [
  {
    icon: <Cpu />,
    title: "Infrastructure First",
    desc: "We believe a great application is only as good as the servers it runs on. Our focus on resilient hosting ensures zero downtime.",
  },
  {
    icon: <Code2 />,
    title: "Clean Architecture",
    desc: "We don't just write code; we engineer scalable systems using MERN and Next.js that are easy to maintain and evolve.",
  },
  {
    icon: <Layers />,
    title: "Full-Stack Mastery",
    desc: "From designing the perfect UI/UX to configuring private VPS clusters, we handle the entire digital lifecycle.",
  },
];

export default function AboutContent() {
  return (
    <div className="max-w-7xl mx-auto px-6 relative">
      {/* --- Hero Section --- */}
      <section className="max-w-4xl" aria-labelledby="about-hero">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-cyan-600 font-mono text-[10px] tracking-[0.5em] uppercase border-l-2 border-cyan-600 pl-4"
        >
          Behind the Stack
        </motion.span>
        <motion.h1
          id="about-hero"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-8xl font-black text-slate-900 mt-8 tracking-tighter leading-none uppercase italic"
        >
          WE ENGINEER <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00aeef] via-[#3b82f6] to-[#2e3192] drop-shadow-[0_0_30px_rgba(0,174,239,0.25)]">
            POSSIBILITIES.
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-slate-600 text-lg md:text-xl mt-8 font-light leading-relaxed max-w-2xl italic"
        >
          &quot;Open Stacked was founded on a simple principle: Quality
          infrastructure is the backbone of every successful business. We bridge
          the gap between complex hardware and intuitive user experiences.&quot;
        </motion.p>
      </section>

      {/* --- Content Grid --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-32 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-square rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50/50 to-white/80 overflow-hidden group"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 border border-cyan-600/20 rounded-full animate-pulse flex items-center justify-center">
              <div className="w-48 h-48 border border-blue-600/20 rounded-full flex items-center justify-center">
                <ShieldCheck size={80} className="text-cyan-600/50" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 left-10 p-6 bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200 shadow-lg">
            <div className="text-slate-900 font-bold text-xl tracking-tight italic">
              Precision Over History.
            </div>
            <div className="text-slate-500 text-xs mt-1 uppercase tracking-widest font-mono">
              Core Philosophy
            </div>
          </div>
        </motion.div>

        <article className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed font-light">
              As a specialized IT services provider, we help businesses navigate
              the complexities of the digital age. Whether it&apos;s building a{" "}
              <strong className="text-slate-900">custom ERP</strong>, managing{" "}
              <strong className="text-slate-900">private cloud clusters</strong>, or designing a brand
              identity that speaks <strong className="text-slate-900">Technical Excellence</strong>, we are
              committed to delivering results.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-8">
            <div>
              <div className="text-4xl font-black text-slate-900 italic">
                6+ Months
              </div>
              <div className="text-cyan-600 text-[10px] font-mono uppercase tracking-widest mt-2">
                Company Age
              </div>
            </div>
            <div>
              <div className="text-4xl font-black text-slate-900 italic">25+</div>
              <div className="text-cyan-600 text-[10px] font-mono uppercase tracking-widest mt-2">
                Projects Delivered
              </div>
            </div>
          </div>
        </article>
      </div>

      {/* --- Core Values --- */}
      <section className="mt-40" aria-labelledby="values-heading">
        <div className="text-center mb-20">
          <h2
            id="values-heading"
            className="text-4xl font-black text-slate-900 tracking-tight italic uppercase"
          >
            Why Partner With Us?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[2.5rem] border border-slate-200 bg-white/60 backdrop-blur-md hover:border-[#2e3192]/30 transition-all duration-500 group"
            >
              <div className="mb-6 text-cyan-600 group-hover:text-[#2e3192] transition-colors">
                {React.cloneElement(v.icon, {
                  size: 32,
                  className: "text-cyan-600 group-hover:text-[#2e3192] transition-colors",
                })}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-[#2e3192] transition-colors">
                {v.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Final Callout --- */}
      <motion.aside
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-40 p-12 rounded-3xl border border-dashed border-slate-300 text-center relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 relative z-10 italic">
          &quot;We don&apos;t follow the industry standards; we set them for our
          clients.&quot;
        </h2>
        <div className="mt-8 relative z-10 text-slate-500 font-mono text-xs uppercase tracking-[0.3em]">
          - The Open Stacked Engineering Team
        </div>
      </motion.aside>
    </div>
  );
}
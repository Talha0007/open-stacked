"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  PenTool,
  Code2,
  Rocket,
  ShieldCheck,
  Activity,
} from "lucide-react";

const steps = [
  {
    stage: "01",
    title: "Discovery & Strategy",
    desc: "We start by understanding your business vision. Our architects analyze the requirements to define the most efficient tech stack for your specific needs.",
    icon: <MessageSquare className="text-cyan-400" />,
    color: "from-cyan-500/20",
  },
  {
    stage: "02",
    title: "Architecture & Blueprint",
    desc: "Before a single line of code is written, we map out the system architecture and UI/UX flows, ensuring the project is built on a scalable foundation.",
    icon: <PenTool className="text-blue-500" />,
    color: "from-blue-500/20",
  },
  {
    stage: "03",
    title: "Development Mode",
    desc: "Our engineers build the core functionality in a modular fashion using the MERN/Next.js stack, focusing on speed, security, and clean code.",
    icon: <Code2 className="text-indigo-500" />,
    color: "from-indigo-500/20",
  },
  {
    stage: "04",
    title: "Infrastructure Hardening",
    desc: "The project enters our staging environment for rigorous testing. We harden the security and optimize the performance for production loads.",
    icon: <ShieldCheck className="text-purple-500" />,
    color: "from-purple-500/20",
  },
  {
    stage: "05",
    title: "Production Launch",
    desc: "Final deployment to the live environment. We ensure a seamless transition with zero downtime and real-time monitoring of all systems.",
    icon: <Rocket className="text-emerald-500" />,
    color: "from-emerald-500/20",
  },
];

export default function Roadmap() {
  return (
    <section className="relative py-20 md:py-32 bg-transparent overflow-hidden border-t border-white/5">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-cyan-500 font-mono text-[10px] tracking-[0.5em] uppercase">
              &#47;&#47; Execution Framework
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white mt-6 tracking-tighter">
              FROM CONCEPT TO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                PRODUCTION.
              </span>
            </h2>
            <p className="text-slate-500 mt-6 text-lg font-light leading-relaxed">
              We follow a high-level operational roadmap to ensure your project
              transition is smooth, reliable, and engineered for maximum
              business impact.
            </p>
          </motion.div>
        </div>

        {/* Roadmap Steps */}
        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="absolute left-[21px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-cyan-500/50 via-blue-500/20 to-transparent hidden md:block" />

          <div className="space-y-12 md:space-y-20">
            {steps.map((step, idx) => (
              <motion.div
                key={step.stage}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative flex flex-col md:flex-row gap-8 md:gap-16 group"
              >
                {/* Stage Indicator */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-11 h-11 rounded-full bg-black border border-white/10 flex items-center justify-center text-cyan-400 font-mono text-sm group-hover:border-cyan-500/50 transition-colors shadow-[0_0_15px_rgba(0,0,0,1)]">
                    {step.stage}
                  </div>
                </div>

                {/* Content Card */}
                <div
                  className={`flex-1 p-8 rounded-3xl border border-white/5 bg-gradient-to-br ${step.color} to-transparent backdrop-blur-sm group-hover:border-white/10 transition-all duration-500`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="p-4 rounded-2xl bg-black/50 border border-white/5 inline-flex self-start">
                      {React.cloneElement(
                        step.icon as React.ReactElement<{ size: number }>,
                        {
                          size: 32,
                        },
                      )}
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-white tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed font-light max-w-2xl">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Callout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 p-8 rounded-2xl bg-white/[0.02] border border-white/5 text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-3">
              <Activity className="text-cyan-500 animate-pulse" size={20} />
              <span className="text-white font-mono text-xs uppercase tracking-widest">
                Live Monitoring Active
              </span>
            </div>
            <div className="h-px w-12 bg-white/10 hidden md:block" />
            <p className="text-slate-500 text-sm italic">
              &quot;Our roadmap is designed to keep you informed at every
              milestone of the development mode.&quot;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

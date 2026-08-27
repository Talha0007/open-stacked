"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import {
  MessageSquare,
  PenTool,
  Code2,
  Rocket,
  ShieldCheck,
  Activity,
} from "lucide-react";

interface StepItem {
  stage: string;
  title: string;
  desc: string;
  icon: React.ReactElement;
  color: string;
  glowColor: string;
}

const steps: StepItem[] = [
  {
    stage: "01",
    title: "Discovery & Strategy",
    desc: "We start by understanding your business vision. Our architects analyze the requirements to define the most efficient tech stack for your specific needs.",
    icon: <MessageSquare className="text-cyan-600" />,
    color: "from-cyan-500/10",
    glowColor: "rgba(6, 182, 212, 0.2)",
  },
  {
    stage: "02",
    title: "Architecture & Blueprint",
    desc: "Before a single line of code is written, we map out the system architecture and UI/UX flows, ensuring the project is built on a scalable foundation.",
    icon: <PenTool className="text-blue-600" />,
    color: "from-blue-500/10",
    glowColor: "rgba(59, 130, 246, 0.2)",
  },
  {
    stage: "03",
    title: "Development Mode",
    desc: "Our engineers build the core functionality in a modular fashion using the MERN/Next.js stack, focusing on speed, security, and clean code.",
    icon: <Code2 className="text-indigo-600" />,
    color: "from-indigo-500/10",
    glowColor: "rgba(99, 102, 241, 0.2)",
  },
  {
    stage: "04",
    title: "Infrastructure Hardening",
    desc: "The project enters our staging environment for rigorous testing. We harden the security and optimize the performance for production loads.",
    icon: <ShieldCheck className="text-purple-600" />,
    color: "from-purple-500/10",
    glowColor: "rgba(168, 85, 247, 0.2)",
  },
  {
    stage: "05",
    title: "Production Launch",
    desc: "Final deployment to the live environment. We ensure a seamless transition with zero downtime and real-time monitoring of all systems.",
    icon: <Rocket className="text-emerald-600" />,
    color: "from-emerald-500/10",
    glowColor: "rgba(16, 185, 129, 0.2)",
  },
];

interface CardProps {
  step: StepItem;
  index: number;
  totalSteps: number;
  progress: MotionValue<number>;
}

function StackedVanishingCard({
  step,
  index,
  totalSteps,
  progress,
}: CardProps) {
  const stepSegment = 1 / totalSteps;
  const start = index * stepSegment;
  const peak = start + stepSegment * 0.4;
  const exit = (index + 1) * stepSegment;

  const y = useTransform(
    progress,
    [Math.max(0, start - stepSegment * 0.5), start, peak, exit],
    [180, 0, 0, -50],
  );

  const scale = useTransform(progress, [start, peak, exit], [1, 1, 0.82]);

  const opacity = useTransform(
    progress,
    [Math.max(0, start - stepSegment * 0.3), start, peak, exit],
    [0, 1, 1, index === totalSteps - 1 ? 1 : 0],
  );

  const rotateX = useTransform(progress, [start, peak, exit], [10, 0, -20]);
  const z = useTransform(progress, [start, peak, exit], [0, 0, -250]);

  return (
    <motion.div
      style={{
        y,
        scale,
        opacity,
        rotateX,
        z,
        transformStyle: "preserve-3d",
      }}
      className="absolute inset-0 w-full flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-center pointer-events-none"
    >
      <div className="relative z-10 shrink-0 pointer-events-auto">
        <div className="w-12 h-12 rounded-full bg-white border border-cyan-500/40 flex items-center justify-center text-cyan-600 font-mono text-base font-bold shadow-lg shadow-cyan-500/10">
          {step.stage}
        </div>
      </div>

      <div
        className={`w-full p-8 md:p-10 rounded-3xl border border-slate-200/90 bg-gradient-to-br ${step.color} to-white/95 backdrop-blur-xl shadow-2xl transition-colors duration-500 relative overflow-hidden pointer-events-auto`}
      >
        <div
          className="absolute -top-24 -right-24 w-60 h-60 rounded-full blur-3xl pointer-events-none"
          style={{ background: step.glowColor }}
        />

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 relative z-10">
          <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-md inline-flex shrink-0">
            {React.cloneElement(
              step.icon as React.ReactElement<{ size: number }>,
              { size: 36 },
            )}
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl md:text-3xl font-bold text-black tracking-tight">
              {step.title}
            </h3>
            <p className="text-slate-700 text-base leading-relaxed font-light">
              {step.desc}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Roadmap() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    // Height container created to give scroll room for tracking progress
    <section
      ref={containerRef}
      className="relative h-[300vh] border-t border-slate-200/50"
    >
      {/* Sticky viewport frame to freeze cards on screen during scroll */}
      <div className="sticky top-0 h-screen flex flex-col justify-between py-12 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

        {/* Section Header */}
        <div className="max-w-375 mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-cyan-600 font-mono text-[10px] tracking-[0.5em] uppercase">
              Execution Framework
            </span>
          </motion.div>
        </div>

        {/* Dynamic Card Stacking Area (3D perspective wrapper) */}
        <div className="max-w-375 mx-auto px-6 w-full relative h-96 md:h-80 flex items-center justify-center [perspective:1000px]">
          <div className="absolute left-6 md:left-12 top-0 bottom-0 w-0.5 bg-slate-200 hidden sm:block">
            <motion.div
              style={{ scaleY: lineScaleY }}
              className="w-full h-full bg-gradient-to-b from-cyan-500 via-blue-500 to-emerald-500 origin-top"
            />
          </div>

          {steps.map((step, idx) => (
            <StackedVanishingCard
              key={step.stage}
              step={step}
              index={idx}
              totalSteps={steps.length}
              progress={scrollYProgress}
            />
          ))}
        </div>

        {/* Footer Status Bar */}
        <div className="max-w-375 mx-auto px-6 relative z-20 w-full">
          <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 backdrop-blur-md text-center shadow-md max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <Activity className="text-cyan-600 animate-pulse" size={18} />
                <span className="text-black font-mono text-[11px] uppercase tracking-widest">
                  Live Monitoring Active
                </span>
              </div>
              <div className="h-px w-8 bg-slate-200 hidden sm:block" />
              <p className="text-slate-600 text-xs italic">
                Scroll to navigate milestones
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

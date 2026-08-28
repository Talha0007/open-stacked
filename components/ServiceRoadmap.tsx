"use client";

import { memo } from "react";
import {
  Search,
  Layout,
  Code2,
  ShieldCheck,
  SlidersHorizontal,
  Rocket,
} from "lucide-react";
import { motion } from "framer-motion";

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

const STEPS: Step[] = [
  {
    id: 1,
    title: "Discovery & Analysis",
    description:
      "We analyze your project goals, technical requirements, and target audience to build a comprehensive execution plan aligned with your business vision.",
    icon: Search,
  },
  {
    id: 2,
    title: "Architecture & Design",
    description:
      "Our team designs intuitive user workflows, system architecture, and scalable design frameworks focused on usability and efficiency.",
    icon: Layout,
  },
  {
    id: 3,
    title: "Engineering & Build",
    description:
      "We develop high-performance, secure solutions using modern frameworks, clean code principles, and scalable infrastructure standards.",
    icon: Code2,
  },
  {
    id: 4,
    title: "Quality Assurance & Testing",
    description:
      "Rigorous functional, security, and performance testing are conducted to ensure optimal speed, stability, and cross-platform compatibility.",
    icon: ShieldCheck,
  },
  {
    id: 5,
    title: "Deployment & Optimization",
    description:
      "We handle seamless production deployment, cloud configuration, and performance tuning for zero downtime and maximum reliability.",
    icon: SlidersHorizontal,
  },
  {
    id: 6,
    title: "Maintenance & Scaling",
    description:
      "Post-launch support, real-time system monitoring, and ongoing feature updates ensure your solution scales smoothly as your business grows.",
    icon: Rocket,
  },
];

export default memo(function ServiceRoadmap() {
  return (
    <section className="relative py-12 sm:py-20 lg:py-28 bg-transparent text-slate-900 overflow-hidden">
      <div className="max-w-375 mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black text-slate-900 leading-tight tracking-tighter"
            >
              OUR PROCESS, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00aeef] via-[#3b82f6] to-[#2e3192] drop-shadow-[0_0_30px_rgba(0,174,239,0.25)]">
                START TO FINISH
              </span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-600 text-lg max-w-xs font-light border-l border-slate-200 pl-6"
          >
            Six clear stages, each with defined deliverables — so you always
            know what's next.{" "}
          </motion.p>
        </div>
        {/* Roadmap Grid Container */}
        <div className="relative">
          {/* TOP ROW (Steps 1, 2, 3) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 relative mb-12 sm:mb-16 lg:mb-28">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center relative group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-cyan-600 rounded-tl-2xl rounded-br-2xl flex items-center justify-center text-white mb-4 sm:mb-6 shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
                <Search className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 stroke-[1.75]" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-2 sm:mb-3">
                {STEPS[0].title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-sm">
                {STEPS[0].description}
              </p>

              {/* Arrow 1 -> 2 (Desktop Large Screens Only) */}
              <div className="hidden lg:block absolute top-8 -right-1/4 w-1/2 pointer-events-none z-20">
                <svg
                  className="w-full h-12 text-cyan-400"
                  viewBox="0 0 160 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 10 20 Q 80 5, 145 20"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeDasharray="6 6"
                    fill="none"
                  />
                  <polygon points="143,14 153,20 143,26" fill="currentColor" />
                </svg>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center relative group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-cyan-600 rounded-tl-2xl rounded-br-2xl flex items-center justify-center text-white mb-4 sm:mb-6 shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
                <Layout className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 stroke-[1.75]" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-2 sm:mb-3">
                {STEPS[1].title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-sm">
                {STEPS[1].description}
              </p>

              {/* Arrow 2 -> 3 (Desktop Large Screens Only) */}
              <div className="hidden lg:block absolute top-8 -right-1/4 w-1/2 pointer-events-none z-20">
                <svg
                  className="w-full h-12 text-cyan-400"
                  viewBox="0 0 160 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 10 20 Q 80 5, 145 20"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeDasharray="6 6"
                    fill="none"
                  />
                  <polygon points="143,14 153,20 143,26" fill="currentColor" />
                </svg>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center relative group md:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-cyan-600 rounded-tl-2xl rounded-br-2xl flex items-center justify-center text-white mb-4 sm:mb-6 shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
                <Code2 className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 stroke-[1.75]" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-2 sm:mb-3">
                {STEPS[2].title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-sm">
                {STEPS[2].description}
              </p>

              {/* Curve Arrow from Step 3 -> Step 4 (Desktop Large Screens Only) */}
              <div className="hidden lg:block absolute -bottom-24 right-1/2 w-[280%] h-28 pointer-events-none z-20">
                <svg
                  className="w-full h-full text-cyan-400"
                  viewBox="0 0 700 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 650 10 C 650 90, 50 10, 50 90"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeDasharray="6 6"
                    fill="none"
                  />
                  <polygon points="43,82 50,95 57,82" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>

          {/* BOTTOM ROW (Steps 4, 5, 6) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 relative">
            {/* Step 4 */}
            <div className="flex flex-col items-center text-center relative group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-cyan-600 rounded-tl-2xl rounded-br-2xl flex items-center justify-center text-white mb-4 sm:mb-6 shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
                <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 stroke-[1.75]" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-2 sm:mb-3">
                {STEPS[3].title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-sm">
                {STEPS[3].description}
              </p>

              {/* Arrow 4 -> 5 (Desktop Large Screens Only) */}
              <div className="hidden lg:block absolute top-8 -right-1/4 w-1/2 pointer-events-none z-20">
                <svg
                  className="w-full h-12 text-cyan-400"
                  viewBox="0 0 160 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 10 20 Q 80 35, 145 20"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeDasharray="6 6"
                    fill="none"
                  />
                  <polygon points="143,14 153,20 143,26" fill="currentColor" />
                </svg>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col items-center text-center relative group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-cyan-600 rounded-tl-2xl rounded-br-2xl flex items-center justify-center text-white mb-4 sm:mb-6 shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
                <SlidersHorizontal className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 stroke-[1.75]" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-2 sm:mb-3">
                {STEPS[4].title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-sm">
                {STEPS[4].description}
              </p>

              {/* Arrow 5 -> 6 (Desktop Large Screens Only) */}
              <div className="hidden lg:block absolute top-8 -right-1/4 w-1/2 pointer-events-none z-20">
                <svg
                  className="w-full h-12 text-cyan-400"
                  viewBox="0 0 160 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 10 20 Q 80 35, 145 20"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeDasharray="6 6"
                    fill="none"
                  />
                  <polygon points="143,14 153,20 143,26" fill="currentColor" />
                </svg>
              </div>
            </div>

            {/* Step 6 */}
            <div className="flex flex-col items-center text-center relative group md:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-cyan-600 rounded-tl-2xl rounded-br-2xl flex items-center justify-center text-white mb-4 sm:mb-6 shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
                <Rocket className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 stroke-[1.75]" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-2 sm:mb-3">
                {STEPS[5].title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-sm">
                {STEPS[5].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

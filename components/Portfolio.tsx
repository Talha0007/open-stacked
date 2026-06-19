// components/Portfolio.tsx
"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";

const projects = [
  {
    title: "Global Card Tracking System",
    category: "Logistics & Fintech",
    desc: "A high-level tracking application integrated with SMS gateways for real-time delivery updates and customer notifications.",
    tech: ["React Native", "Node.js", "SMS API"],
    status: "Live",
    link: "#",
  },
  {
    title: "Enterprise E-commerce Engine",
    category: "E-Commerce",
    desc: "A scalable MERN stack platform deployed on AWS, optimized for sub-second page loads and secure transaction handling.",
    tech: ["Next.js", "MongoDB", "AWS"],
    status: "Production",
    link: "#",
  },
  {
    title: "Open Stacked OS Pattern",
    category: "Branding & Identity",
    desc: "Our internal design architecture merging technical aesthetics with modern business logic for a cohesive brand identity.",
    tech: ["Figma", "Branding", "UI/UX"],
    status: "Completed",
    link: "#",
  },
  {
    title: "Private Cloud Infrastructure",
    category: "Infrastructure",
    desc: "High-capacity private VPS and CDN setup using Proxmox virtualization for isolated, high-performance business hosting.",
    tech: ["Proxmox", "Nginx", "Docker"],
    status: "Active Work",
    link: "#",
  },
];

// Reusable Row Component to handle isolation of scroll metrics per line
function ProjectRow({
  leftProject,
  rightProject,
}: {
  leftProject: (typeof projects)[0];
  rightProject: (typeof projects)[0] | undefined;
}) {
  const rowRef = useRef<HTMLDivElement>(null);

  // Track scroll parameters specifically for this single row element
  const { scrollYProgress } = useScroll({
    target: rowRef,
    // "start 85%" fires the animation sooner as you scroll down
    // "end 15%" ensures it reverses smoothly before leaving the top of the viewport
    offset: ["start 85%", "end 15%"],
  });

  // Calculate dynamic transformations tied to this row's active viewport state
  const leftX = useTransform(scrollYProgress, [0, 0.35], [-120, 0]);
  const rightX = useTransform(scrollYProgress, [0, 0.35], [120, 0]);
  const rowOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  return (
    <div
      ref={rowRef}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full will-change-transform"
    >
      {/* Left Column Card */}
      {leftProject && (
        <ProjectCard
          project={leftProject}
          xTransform={leftX}
          opacityTransform={rowOpacity}
        />
      )}

      {/* Right Column Card */}
      {rightProject && (
        <ProjectCard
          project={rightProject}
          xTransform={rightX}
          opacityTransform={rowOpacity}
        />
      )}
    </div>
  );
}

// Clean Sub-component extraction for individual Project rendering markup
function ProjectCard({
  project,
  xTransform,
  opacityTransform,
}: {
  project: (typeof projects)[0];
  xTransform: MotionValue<number>;
  opacityTransform: MotionValue<number>;
}) {
  return (
    <motion.div
      style={{
        x: xTransform,
        opacity: opacityTransform,
      }}
      className="group relative rounded-[2.5rem] border border-white/5 bg-gradient-to-b from-white/[0.05] to-transparent p-1 overflow-hidden"
    >
      <div className="relative z-10 p-8 md:p-10 rounded-[2.4rem] bg-[#030303]/80 backdrop-blur-xl h-full flex flex-col justify-between">
        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <div className="p-3 rounded-2xl bg-white/5 text-cyan-500 border border-white/10 group-hover:border-cyan-500/50 transition-colors">
              <Code2 size={24} />
            </div>
            <span className="px-3 py-1 rounded-full border border-white/10 text-[9px] font-mono text-slate-400 uppercase tracking-widest group-hover:text-cyan-400 transition-colors">
              {project.status}
            </span>
          </div>

          <div>
            <span className="text-cyan-500/60 text-[10px] font-mono uppercase tracking-[0.2em]">
              {project.category}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white mt-2 group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-slate-500 text-sm md:text-base mt-4 font-light leading-relaxed line-clamp-3">
              {project.desc}
            </p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/5 flex flex-wrap gap-3">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] text-slate-400 bg-white/5 px-3 py-1 rounded-md border border-white/5"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <a
            href={project.link}
            className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest"
          >
            Case Study <ExternalLink size={14} />
          </a>
        </div>
      </div>

      {/* Decorative Corner Glow */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-cyan-500/10 blur-[50px] group-hover:bg-cyan-500/20 transition-all duration-500" />
    </motion.div>
  );
}

export default function Portfolio() {
  // Group the flat projects array into distinct double-column rows chunk sets
  const rows = [];
  for (let i = 0; i < projects.length; i += 2) {
    rows.push({
      left: projects[i],
      right: projects[i + 1],
    });
  }

  return (
    <section className="relative py-20 md:py-32 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-cyan-500 font-mono text-[10px] tracking-[0.5em] uppercase border-l-2 border-cyan-500 pl-4">
              Our Deployments
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-white mt-6 tracking-tighter">
              PROVEN <br />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                SOLUTIONS
              </span>
            </h2>
          </motion.div>

          <p className="text-slate-500 text-sm md:text-base font-light max-w-xs md:text-right">
            From logistics tracking to cloud infrastructure, we deliver projects
            that power businesses in the digital age.
          </p>
        </div>

        {/* Dynamic Chronological Row Grid Assembly */}
        <div className="flex flex-col gap-8 w-full">
          {rows.map((row, rowIdx) => (
            <ProjectRow
              key={rowIdx}
              leftProject={row.left}
              rightProject={row.right}
            />
          ))}
        </div>

        {/* Confidential Outro Footer Callout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-slate-600 font-mono text-[10px] tracking-widest uppercase italic">
            {/* // & Many more confidential enterprise deployments // */}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

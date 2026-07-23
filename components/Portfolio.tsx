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

// Reusable Row Component
function ProjectRow({
  leftProject,
  rightProject,
}: {
  leftProject: (typeof projects)[0];
  rightProject: (typeof projects)[0] | undefined;
}) {
  const rowRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start 85%", "end 15%"],
  });

  const leftX = useTransform(scrollYProgress, [0, 0.35], [-120, 0]);
  const rightX = useTransform(scrollYProgress, [0, 0.35], [120, 0]);
  const rowOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  return (
    <div
      ref={rowRef}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full will-change-transform"
    >
      {leftProject && (
        <ProjectCard
          project={leftProject}
          xTransform={leftX}
          opacityTransform={rowOpacity}
        />
      )}
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
      className="group relative rounded-[2.5rem] border border-slate-200 bg-gradient-to-b from-slate-50/80 to-white/50 p-1 overflow-hidden hover:border-[#2e3192]/30 transition-all duration-500"
    >
      <div className="relative z-10 p-8 md:p-10 rounded-[2.4rem] bg-white/90 backdrop-blur-xl h-full flex flex-col justify-between">
        <div className="space-y-6">
          <div className="flex justify-between items-start">
            {/* Icon Container */}
            <div className="p-3 rounded-2xl bg-slate-100 text-cyan-600 border border-slate-300 group-hover:border-[#2e3192]/50 group-hover:bg-[#2e3192]/5 transition-all duration-300">
              <Code2
                size={24}
                className="group-hover:text-[#2e3192] transition-colors"
              />
            </div>
            <span className="px-3 py-1 rounded-full border border-slate-300 text-[9px] font-mono text-slate-600 uppercase tracking-widest group-hover:text-cyan-600 group-hover:border-cyan-600/30 transition-colors">
              {project.status}
            </span>
          </div>

          <div>
            {/* Category – now prominent on hover */}
            <span className="text-cyan-600/70 text-[10px] font-mono uppercase tracking-[0.2em] group-hover:text-cyan-600 transition-colors">
              {project.category}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2 group-hover:text-[#2e3192] transition-colors">
              {project.title}
            </h3>
            <p className="text-slate-600 text-sm md:text-base mt-4 font-light leading-relaxed line-clamp-3">
              {project.desc}
            </p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-200/50 flex flex-wrap gap-3">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] text-slate-600 bg-slate-100 px-3 py-1 rounded-md border border-slate-300"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <a
            href={project.link}
            className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-widest hover:text-[#2e3192] transition-colors"
          >
            Case Study <ExternalLink size={14} />
          </a>
        </div>
      </div>

      {/* Decorative Corner Glow – cyan to dark purple on hover */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-cyan-600/10 blur-[50px] group-hover:bg-[#2e3192]/30 transition-all duration-500" />
    </motion.div>
  );
}

export default function Portfolio() {
  const rows = [];
  for (let i = 0; i < projects.length; i += 2) {
    rows.push({
      left: projects[i],
      right: projects[i + 1],
    });
  }

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-cyan-600 font-mono text-[10px] tracking-[0.5em] uppercase border-l-2 border-cyan-600 pl-4">
              Our Deployments
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mt-6 tracking-tighter">
              PROVEN <br />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00aeef] via-[#3b82f6] to-[#2e3192] drop-shadow-[0_0_30px_rgba(0,174,239,0.25)]">
                SOLUTIONS
              </span>
            </h2>
          </motion.div>

          <p className="text-slate-600 text-sm md:text-base font-light max-w-xs md:text-right">
            From logistics tracking to cloud infrastructure, we deliver projects
            that power businesses in the digital age.
          </p>
        </div>

        <div className="flex flex-col gap-8 w-full">
          {rows.map((row, rowIdx) => (
            <ProjectRow
              key={rowIdx}
              leftProject={row.left}
              rightProject={row.right}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-slate-400 font-mono text-[10px] tracking-widest uppercase italic">
            {/* // & Many more confidential enterprise deployments // */}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
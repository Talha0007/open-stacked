"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  idx?: number;
  fadeInVariants?: Variants;
}

export default function ProjectCard({
  project,
  idx = 0,
  fadeInVariants,
}: ProjectCardProps) {
  return (
    <motion.div
      custom={idx}
      variants={fadeInVariants}
      initial={fadeInVariants ? "hidden" : undefined}
      whileInView={fadeInVariants ? "visible" : undefined}
      viewport={{ once: true }}
      className="group relative rounded-[2rem] border border-slate-200/90 bg-gradient-to-b from-slate-50/80 to-white/50 p-1 overflow-hidden hover:border-[#2e3192]/40 transition-all duration-500 flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-cyan-500/10 h-full"
    >
      <div className="relative z-10 p-6 sm:p-7 rounded-[1.85rem] bg-white/95 backdrop-blur-xl h-full flex flex-col justify-between">
        <div>
          {/* Top Landscape Image Frame */}
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-6 border border-slate-200 bg-slate-100">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority={idx < 3}
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          {/* Clean Meta Row: Category & Client Tag */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-cyan-600 text-[10px] font-mono uppercase tracking-[0.2em]">
              &#47;&#47; {project.category}
            </span>

            {project.client && (
              <span className="px-2.5 py-0.5 rounded-full border border-slate-200 bg-slate-50 text-[9px] font-mono text-slate-500 uppercase tracking-wider group-hover:text-cyan-600 group-hover:border-cyan-600/30 transition-colors">
                {project.client}
              </span>
            )}
          </div>

          {/* Title & Concise Description */}
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-[#2e3192] transition-colors tracking-tight">
            {project.title}
          </h3>

          <p className="text-slate-600 text-xs sm:text-sm mt-3 font-light leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        <div>
          {/* Tech Stack Badges (Capped at 4 for ultra-clean UI) */}
          <div className="mt-6 pt-5 border-t border-slate-200/60 flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="text-[10px] font-mono text-slate-400 bg-slate-50 px-2 py-1 rounded-md border border-slate-200">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>

          {/* Action Links */}
          <div className="mt-6 pt-4 flex items-center justify-between border-t border-slate-100">
            <Link
              href={`/portfolio/${project.slug}`}
              className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-widest hover:text-[#2e3192] transition-colors group/btn"
            >
              <span>View Case Study</span>
              <ArrowRight
                size={14}
                className="group-hover/btn:translate-x-1.5 transition-transform text-cyan-600"
              />
            </Link>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-600 transition-colors p-1"
                title="Live Preview"
              >
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Subtle Glow with Brand Accent Color */}
      <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-cyan-600/10 blur-[40px] group-hover:bg-[#2e3192]/20 transition-all duration-500 pointer-events-none" />
    </motion.div>
  );
}
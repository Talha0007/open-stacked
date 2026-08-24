import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects, Project } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Portfolio() {
  // Home page par top 6 projects display honge
  const featuredProjects = projects.slice(0, 6);

  return (
    <section className="relative z-20 pt-24 max-w-375 mx-auto px-4 sm:px-6 lg:px-8">
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-cyan-600 font-mono text-xs tracking-[0.4em] uppercase border-l-2 border-cyan-600 pl-3 inline-block mb-3">
            PROVEN SOLUTIONS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase italic">
            FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00aeef] via-[#3b82f6] to-[#2e3192]">DEPLOYMENTS</span>
          </h2>
        </div>

        <p className="text-slate-600 text-sm max-w-md font-light leading-relaxed">
          Architected with precision. Engineered for enterprise reliability and sub-second page performance.
        </p>
      </div>

      {/* PROJECTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProjects.map((project: Project, idx: number) => (
          <ProjectCard key={project.id || idx} project={project} idx={idx} />
        ))}
      </div>

      {/* MATCHING DARK HERO BUTTON WITH REDIRECT */}
      <div className="mt-14 text-center flex justify-center">
        <Link
          href="/portfolio"
          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-slate-900 text-white font-mono text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-lg shadow-slate-900/10 hover:shadow-cyan-500/25 hover:scale-105 active:scale-95"
        >
          <span>Show More Projects</span>
          <ArrowRight
            size={16}
            className="text-cyan-400 group-hover:translate-x-1.5 transition-transform duration-300"
          />
        </Link>
      </div>
    </section>
  );
}
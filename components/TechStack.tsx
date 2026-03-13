"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiMongodb,
  SiDocker,
  SiReact,
  SiNginx,
  SiTailwindcss,
  SiNodedotjs,
  SiLinux,
  SiFirebase,
  SiKubernetes,
  SiPython,
  SiCloudflare,
} from "react-icons/si";

// AWS Manual SVG to avoid "Export not found" build errors
const AwsIcon = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.903 5.4c-1.474 0-2.73.57-3.77 1.71L6.72 5.25c1.47-1.43 3.39-2.15 5.75-2.15 2.5 0 4.4.82 5.72 2.45 1.15 1.41 1.73 3.19 1.73 5.34 0 2.21-.6 4.01-1.8 5.4-1.35 1.57-3.23 2.36-5.63 2.36-2.16 0-3.95-.65-5.38-1.95a6.45 6.45 0 0 1-1.93-4.8c0-1.8.63-3.37 1.9-4.7 1.25-1.32 2.87-1.98 4.86-1.98zm0 2.4c-1.29 0-2.31.42-3.06 1.26-.75.84-1.13 1.94-1.13 3.3s.38 2.46 1.14 3.3c.76.84 1.78 1.26 3.06 1.26s2.3-.42 3.05-1.26c.75-.84 1.13-1.94 1.13-3.3s-.38-2.46-1.14-3.3c-.76-.84-1.78-1.26-3.05-1.26z" />
  </svg>
);

const techLogos = [
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "Kubernetes", icon: <SiKubernetes /> },
  {
    name: "Proxmox",
    icon: (
      <span className="font-black text-xs italic tracking-tighter">
        PROXMOX
      </span>
    ),
  },
  { name: "React", icon: <SiReact /> },
  { name: "Nginx", icon: <SiNginx /> },
  { name: "AWS", icon: <AwsIcon /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Python", icon: <SiPython /> },
  { name: "Cloudflare", icon: <SiCloudflare /> },
  { name: "Linux", icon: <SiLinux /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
];

export default function TechStack() {
  const duplicatedLogos = [...techLogos, ...techLogos];

  return (
    <section className="py-24 bg-transparent overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex items-center gap-4">
        <div className="h-[1px] w-12 bg-cyan-500/50" />
        <p className="text-[10px] font-mono tracking-[0.5em] text-cyan-500 uppercase">
          Ecosystem Authority v2.0
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        {/* Deep Gradient Masks for smooth appearance */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-black via-black/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-black via-black/90 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex whitespace-nowrap gap-24 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 45, // Thoda slow kiya taaki read karne mein professional lage
            ease: "linear",
            repeat: Infinity,
          }}
          whileHover={{ transition: { duration: 90, ease: "linear" } }}
        >
          {duplicatedLogos.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-5 text-slate-500 hover:text-cyan-400 transition-all duration-500 cursor-default group"
            >
              <div className="text-4xl md:text-5xl opacity-40 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0 group-hover:scale-110 transition-transform duration-500">
                {tech.icon}
              </div>
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] opacity-30 group-hover:opacity-100">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

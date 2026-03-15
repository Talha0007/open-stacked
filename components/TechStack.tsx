"use client";
import React, { useEffect, useState } from "react";
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
  const [mounted, setMounted] = useState(false);
  const duplicatedLogos = [...techLogos, ...techLogos, ...techLogos];

  useEffect(() => {
    // 1. requestAnimationFrame use karne se React ko lagta hai ke ye
    // synchronous cascade nahi hai balkay next frame ki update hai.
    const frame = requestAnimationFrame(() => {
      setMounted(true);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  // 2. Placeholder render taaki hydration mismatch na ho aur layout shift kam ho
  if (!mounted) {
    return <section className="py-16 md:py-24 bg-transparent h-[200px]" />;
  }

  return (
    <section className="py-16 md:py-24 bg-transparent overflow-hidden border-y border-white/5">
      {/* ... (Baqi saara optimized code jo pehle diya tha) */}
      <div className="relative flex overflow-hidden group">
        <motion.div
          className="flex whitespace-nowrap gap-12 md:gap-24 items-center will-change-transform"
          initial={{ x: 0 }}
          animate={{ x: "-33.33%" }}
          transition={{
            duration: 35,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{ translateZ: 0 }}
        >
          {duplicatedLogos.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-3 md:gap-5 text-slate-500"
            >
              {/* Optimized Icons */}
              <div className="text-3xl md:text-5xl opacity-40">{tech.icon}</div>
              <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em]">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

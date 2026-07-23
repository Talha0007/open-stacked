"use client";
import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useAnimationFrame,
  useMotionValue,
  wrap,
} from "framer-motion";
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

// AWS brand color: #FF9900
const AwsIcon = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="#FF9900">
    <path d="M11.903 5.4c-1.474 0-2.73.57-3.77 1.71L6.72 5.25c1.47-1.43 3.39-2.15 5.75-2.15 2.5 0 4.4.82 5.72 2.45 1.15 1.41 1.73 3.19 1.73 5.34 0 2.21-.6 4.01-1.8 5.4-1.35 1.57-3.23 2.36-5.63 2.36-2.16 0-3.95-.65-5.38-1.95a6.45 6.45 0 0 1-1.93-4.8c0-1.8.63-3.37 1.9-4.7 1.25-1.32 2.87-1.98 4.86-1.98zm0 2.4c-1.29 0-2.31.42-3.06 1.26-.75.84-1.13 1.94-1.13 3.3s.38 2.46 1.14 3.3c.76.84 1.78 1.26 3.06 1.26s2.3-.42 3.05-1.26c.75-.84 1.13-1.94 1.13-3.3s-.38-2.46-1.14-3.3c-.76-.84-1.78-1.26-3.05-1.26z" />
  </svg>
);

// Updated for white theme – Next.js icon is now black (#000000) for visibility
const techLogos = [
  { name: "Next.js", icon: <SiNextdotjs color="#000000" /> },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
  { name: "Docker", icon: <SiDocker color="#2496ED" /> },
  { name: "Kubernetes", icon: <SiKubernetes color="#326CE5" /> },
  { name: "React", icon: <SiReact color="#61DAFB" /> },
  { name: "Nginx", icon: <SiNginx color="#009639" /> },
  { name: "AWS", icon: <AwsIcon /> },
  { name: "Node.js", icon: <SiNodedotjs color="#5FA41C" /> },
  { name: "Python", icon: <SiPython color="#3776AB" /> },
  { name: "Cloudflare", icon: <SiCloudflare color="#F38020" /> },
  { name: "Linux", icon: <SiLinux color="#FCC624" /> },
  { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
  { name: "Tailwind", icon: <SiTailwindcss color="#06B6D4" /> },
];

export default function TechStack() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const baseX = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const rotateX = useTransform(smoothProgress, [0, 1], [15, -15]);

  useAnimationFrame((t, delta) => {
    let moveBy = -0.05 * (delta / 16);
    baseX.set(baseX.get() + moveBy);
  });

  const x = useTransform(baseX, (v) => `${wrap(-33.33333333, 0, v)}%`);

  useEffect(() => {
    setMounted(true);
  }, []);

  const duplicatedLogos = [...techLogos, ...techLogos, ...techLogos];

  return (
    <section
      ref={containerRef}
      className="relative pt-12 md:pt-22 overflow-hidden select-none min-h-[200px]"
      style={{ perspective: "1500px" }}
    >
      {mounted && (
        <motion.div
          style={{
            rotateX,
            x,
          }}
          className="flex whitespace-nowrap gap-12 md:gap-24 items-center will-change-transform w-max"
        >
          {duplicatedLogos.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-4 md:gap-8 opacity-85 hover:opacity-100 transition-opacity duration-300 group cursor-default"
            >
              {/* Icon container with sharpness optimizations */}
              <div
                className="text-5xl md:text-7xl flex items-center justify-center will-change-transform"
                style={{
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                  WebkitFontSmoothing: 'antialiased',
                }}
              >
                {tech.icon}
              </div>
              <span className="text-[10px] md:text-[14px] font-bold uppercase tracking-[0.5em] text-slate-600">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      )}

      {/* Depth Masking - updated for white theme */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />
    </section>
  );
}
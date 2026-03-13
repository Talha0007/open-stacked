"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Scene() {
  const { scrollYProgress } = useScroll();

  // Darker, more professional color palette
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    ["#02040a", "#010208", "#030712", "#000000"], // Nearly black with subtle tint shifts
  );

  // Slow parallax for the 3D depth effect
  const blob1Y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  return (
    <motion.div
      style={{ backgroundColor: bgColor }}
      className="fixed inset-0 -z-50 overflow-hidden transition-colors duration-1000"
    >
      {/* Ultra-Subtle 3D Atmosphere Blobs (Reduced Opacity for Darkness) */}
      <motion.div
        style={{ y: blob1Y }}
        className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-blue-900/10 rounded-full blur-[160px] opacity-40"
      />
      <motion.div
        style={{ y: blob2Y }}
        className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-cyan-900/5 rounded-full blur-[180px] opacity-30"
      />

      {/* Noise Texture for that high-end 'Grainy' film look */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay pointer-events-none" />

      {/* Technical Grid - Faded out at the edges */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-40" />

      {/* Vignette effect to keep the focus on content */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />
    </motion.div>
  );
}

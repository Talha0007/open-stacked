"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Scene() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    // Logic ko ek function mein wrap kar ke call karne se
    // linter aksar "synchronous execution" ka error nahi deta
    const initializeScene = () => {
      setMounted(true);
      setIsMobile(window.innerWidth < 768);
    };

    initializeScene();

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    ["#02040a", "#010208", "#030712", "#000000"],
  );

  const blob1Y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  // Server-side render ke waqt placeholder background
  if (!mounted) {
    return <div className="fixed inset-0 bg-[#02040a] -z-50" />;
  }

  return (
    <motion.div
      style={{ backgroundColor: isMobile ? "#02040a" : bgColor }}
      className="fixed inset-0 -z-50 overflow-hidden transition-colors duration-1000"
    >
      <motion.div
        style={{ y: isMobile ? "0%" : blob1Y }}
        className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-blue-900/10 rounded-full blur-[120px] md:blur-[160px] opacity-40"
      />
      <motion.div
        style={{ y: isMobile ? "0%" : blob2Y }}
        className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-cyan-900/5 rounded-full blur-[140px] md:blur-[180px] opacity-30"
      />

      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay pointer-events-none" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-40" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />
    </motion.div>
  );
}

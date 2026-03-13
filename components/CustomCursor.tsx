"use client";
import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);

  // Spring config ko thora soft rakha hai scroll sync ke liye
  const springConfig = { stiffness: 500, damping: 28, mass: 0.5 };

  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      // Direct spring update instead of MotionValue logic
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("button, a, .group, input, [role='button']")) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    // Passive listener use karne se scroll performance behtar hoti hai
    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [mouseX, mouseY]);

  return (
    // 'fixed' aur 'inset-0' cursor ko screen par lock rakhta hai
    <div className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden">
      {/* 1. Precision Crosshair (Now using Springs for smoothness) */}
      <motion.div
        className="absolute w-4 h-4 flex items-center justify-center"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div className="w-[1.5px] h-full bg-cyan-400 absolute" />
        <div className="h-[1.5px] w-full bg-cyan-400 absolute" />
      </motion.div>

      {/* 2. Atmospheric Trailing Ring */}
      <motion.div
        className="absolute rounded-full border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-[1px]"
        animate={{
          width: isHovered ? 64 : 32,
          height: isHovered ? 64 : 32,
          rotate: isHovered ? 90 : 0,
          opacity: 1,
        }}
        initial={{ opacity: 0 }}
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        {/* Subtle Scanning Accents */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-500 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
      </motion.div>
    </div>
  );
}

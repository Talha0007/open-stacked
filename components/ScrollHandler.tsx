// components/ScrollHandler.tsx
"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScrollStore } from "@/store/useScrollStore";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollHandler() {
  const setScrollProgress = useScrollStore((state) => state.setScrollProgress);
  const setActiveSection = useScrollStore((state) => state.setActiveSection);

  useEffect(() => {
    // 1. Track global page scroll progress (0 to 1)
    ScrollTrigger.create({
      trigger: "#home",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        setScrollProgress(self.progress);
      },
    });

    // 2. Track individual sections to trigger specific 3D camera angles
    const sections = ["#home", "#services", "#infra", "#testimonials"];
    sections.forEach((id) => {
      ScrollTrigger.create({
        trigger: id,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveSection(id.replace("#", "")),
        onEnterBack: () => setActiveSection(id.replace("#", "")),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [setScrollProgress, setActiveSection]);

  return null; // This component solely manages data background calculations
}

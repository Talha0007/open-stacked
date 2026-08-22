"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Cpu, Rocket, BarChart } from "lucide-react";

// --- Smooth Animated Counter ---
const Counter = ({ value }: { value: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 60, damping: 20 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) =>
      setDisplayValue(Math.floor(latest)),
    );
  }, [springValue]);

  return <span ref={ref}>{displayValue}</span>;
};

interface Principle {
  title: string;
  desc: string;
  icon: React.ReactElement;
}

// --- Interactive 3D Card ---
const TiltCard = ({ item, index }: { item: Principle; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), {
    stiffness: 150,
    damping: 20,
  });

  function handleMouseMove(event: React.MouseEvent) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.8 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative p-8 rounded-[2rem] border border-slate-200 bg-white/80 backdrop-blur-sm hover:border-cyan-600/30 transition-colors duration-500"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

      <div
        className="relative flex flex-col md:flex-row gap-6 items-start"
        style={{ transform: "translateZ(50px)" }}
      >
        <div className="p-4 rounded-2xl bg-slate-100 border border-slate-300 group-hover:border-cyan-600/50 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-500">
          {React.cloneElement(
            item.icon as React.ReactElement<{
              size?: number;
              className?: string;
            }>,
            {
              size: 32,
              className:
                "text-cyan-600 group-hover:text-cyan-600 transition-colors",
            },
          )}
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-slate-800 group-hover:text-cyan-600 transition-colors tracking-tight">
            {item.title}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed font-light">
            {item.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default function WhyUs() {
  const principles = [
    {
      title: "Built Right From Day One",
      desc: "We design your system's core architecture properly the first time — so you're not rebuilding from scratch when your business grows.",
      icon: <BarChart />,
    },
    {
      title: "Fast Under Real Load",
      desc: "Every system we ship is tested under real traffic conditions, not just demos — so it performs when it actually matters.",
      icon: <Cpu />,
    },
    {
      title: "Scales Without Breaking",
      desc: "From your first 100 users to your first million, your systems keep working — no rewrites, no downtime, no panic.",
      icon: <Rocket />,
    },
  ];

  return (
    <section
      className="relative bg-white py-10 md:py-20 overflow-hidden"
      style={{ perspective: "2000px" }}
    >
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-375 mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-gradient-to-r from-cyan-600 to-transparent" />
                <span className="text-cyan-600 text-[11px] font-black uppercase tracking-[0.6em]">
                  Company Vision
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black leading-[1.1] tracking-tight max-w-3xl">
                PRECISION{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00aeef] via-[#3b82f6] to-[#2e3192] drop-shadow-[0_0_30px_rgba(0,174,239,0.2)]">
                  ENGINEERING
                </span>{" "}
                <br className="hidden sm:inline" />
                MEASURABLE{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00aeef] via-[#3b82f6] to-[#2e3192] drop-shadow-[0_0_30px_rgba(0,174,239,0.2)]">
                  RESULTS
                </span>
              </h2>

              <p className="text-slate-700 text-lg md:text-2xl font-light leading-relaxed max-w-lg">
                Open Stacked builds and optimizes systems for growing businesses — from first launch to enterprise scale, engineered to handle real traffic, real users, and real growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-12 pt-12 border-t border-slate-200/50">
              {[
                { label: "Deliveries", val: 113 },
                { label: "Uptime", val: 99.9 },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <span className="text-5xl md:text-6xl font-black text-black italic tracking-tighter">
                    <Counter value={stat.val} />
                    {stat.label === "Uptime" ? "%" : "+"}
                  </span>
                  <span className="text-[10px] text-cyan-600 uppercase tracking-[0.3em] font-bold">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            {principles.map((item, idx) => (
              <TiltCard key={idx} item={item} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

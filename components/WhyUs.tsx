"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Cpu, Rocket, BarChart } from "lucide-react";

const Counter = ({ value }: { value: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 100, damping: 30 });
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

export default function WhyUs() {
  const principles = [
    {
      title: "Business-Centric Architecture",
      desc: "Open Stacked engineers systems that solve real-world bottlenecks, ensuring your business operations run without friction.",
      icon: <BarChart className="text-cyan-400" />,
    },
    {
      title: "Performance Engineering",
      desc: "We don't just build; we optimize. Every solution is stress-tested to handle high-level enterprise demands.",
      icon: <Cpu className="text-blue-500" />,
    },
    {
      title: "Scalable DNA",
      desc: "Our vision is to build projects that grow with you. From your first 100 users to your first million, we stay stable.",
      icon: <Rocket className="text-indigo-400" />,
    },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-transparent overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Open Stacked Identity */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[1px] bg-cyan-500"></span>
                <span className="text-cyan-400 text-[10px] font-mono uppercase tracking-[0.5em]">
                  Company Vision
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tighter">
                DRIVEN BY{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  PRECISION.
                </span>{" "}
                <br />
                DEFINED BY <span className="text-white/40">RESULTS.</span>
              </h2>

              <p className="text-slate-400 text-lg md:text-xl font-light mt-8 leading-relaxed">
                <strong className="text-white">Open Stacked</strong> is more
                than an IT service provider—we are your technical partner.
              </p>
            </motion.div>

            {/* Performance Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-10 border-t border-white/10">
              <div className="flex flex-col">
                <span className="text-4xl md:text-5xl font-black text-white italic">
                  <Counter value={113} />+
                </span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest mt-3 font-mono">
                  Deliveries
                </span>
              </div>
              {/* ... other stats ... */}
            </div>
          </div>

          {/* Solution Cards */}
          <div className="grid grid-cols-1 gap-6">
            {principles.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.04] to-transparent hover:border-cyan-500/20 transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="p-4 rounded-2xl bg-black border border-white/10 group-hover:border-cyan-500/40 transition-colors shadow-xl">
                    {/* FIX: Cast the element to accept the size prop */}
                    {React.cloneElement(
                      item.icon as React.ReactElement<{ size: number }>,
                      {
                        size: 28,
                      },
                    )}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

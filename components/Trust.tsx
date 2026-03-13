"use client";
import { motion } from "framer-motion";
import { Quote, Star, CheckCircle2, Zap } from "lucide-react";

const metrics = [
  { label: "Server Response Time", value: "< 200ms", icon: <Zap size={16} /> },
  { label: "Client Satisfaction", value: "100%", icon: <Star size={16} /> },
  {
    label: "Uptime Guaranteed",
    value: "99.9%",
    icon: <CheckCircle2 size={16} />,
  },
];

const testimonials = [
  {
    text: "Open Stacked transformed our legacy system into a high-speed Next.js powerhouse. Their understanding of infrastructure is unmatched.",
    author: "Founder, Fintech Startup",
    stat: "40% Speed Increase",
  },
  {
    text: "The deployment roadmap was crystal clear. We went from a local concept to a global production-ready app in record time.",
    author: "CTO, E-commerce Brand",
    stat: "Zero Downtime",
  },
];

export default function Trust() {
  return (
    <section className="relative py-20 md:py-32 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Column: Performance Metrics */}
          <div className="lg:col-span-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-cyan-500 font-mono text-[10px] tracking-[0.5em] uppercase border-l-2 border-cyan-500 pl-4">
                Internal Metrics
              </span>
              <h2 className="text-4xl font-black text-white mt-4 tracking-tighter">
                MEASURED <br /> EXCELLENCE.
              </h2>
            </motion.div>

            <div className="space-y-4">
              {metrics.map((m, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-md"
                >
                  <div className="flex items-center gap-3 text-cyan-400 mb-2">
                    {m.icon}
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
                      {m.label}
                    </span>
                  </div>
                  <div className="text-3xl font-black text-white italic">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Client Feedback */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative p-10 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-transparent backdrop-blur-xl group hover:border-cyan-500/30 transition-all duration-500"
              >
                <Quote
                  className="text-cyan-500/20 absolute top-8 right-8 group-hover:text-cyan-500/40 transition-colors"
                  size={40}
                />

                <div className="space-y-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className="fill-cyan-500 text-cyan-500"
                      />
                    ))}
                  </div>

                  <p className="text-slate-300 text-lg font-light leading-relaxed italic">
                    &quot;{t.text}&quot;
                  </p>

                  <div className="pt-6 border-t border-white/5">
                    <div className="text-white font-bold tracking-tight">
                      {t.author}
                    </div>
                    <div className="text-cyan-500 text-[10px] font-mono mt-1 uppercase tracking-widest">
                      Result: {t.stat}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Empty Trust Card for Visual Balance or CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="md:col-span-2 p-8 rounded-2xl border border-dashed border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 hover:bg-white/[0.02] transition-colors"
            >
              <div className="text-center md:text-left">
                <div className="text-white font-bold">
                  Ready to be our next success story?
                </div>
                <p className="text-slate-500 text-sm">
                  Experience the Open Stacked performance firsthand.
                </p>
              </div>
              <button className="px-8 py-3 bg-white text-black font-bold text-xs uppercase tracking-widest rounded-full hover:bg-cyan-500 hover:text-white transition-all">
                Get a Quote
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

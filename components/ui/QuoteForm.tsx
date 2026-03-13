"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Server,
  Cpu,
  Monitor,
  Code,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";

export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-20 p-12 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl"
      >
        <div className="w-20 h-20 bg-cyan-500/20 text-cyan-500 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 size={40} />
        </div>
        <h1 className="text-4xl font-black text-white italic uppercase tracking-tighter">
          Request Received.
        </h1>
        <p className="text-slate-400 mt-4 max-w-sm mx-auto">
          Our engineering team will analyze your requirements and reach out
          within 12 hours with a technical proposal.
        </p>
        <button
          onClick={() => (window.location.href = "/")}
          className="mt-10 px-8 py-3 bg-white text-black font-bold rounded-full text-xs tracking-widest uppercase hover:bg-cyan-500 hover:text-white transition-colors"
        >
          Return Home
        </button>
      </motion.div>
    );
  }

  return (
    <div className="space-y-12">
      {/* Progress Bar */}
      <div className="space-y-6 mb-12">
        <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: "33%" }}
            animate={{
              width: step === 1 ? "33%" : step === 2 ? "66%" : "100%",
            }}
            className="h-full bg-cyan-500"
          />
        </div>
        <AnimatePresence>
          {step > 1 && (
            <motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              onClick={handleBack}
              className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 hover:text-cyan-400 transition-colors group"
            >
              <ArrowLeft
                size={14}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Return to Step {step - 1}
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <header>
        <span className="text-cyan-500 font-mono text-[10px] tracking-[0.5em] uppercase border-l-2 border-cyan-500 pl-4">
          Step {step} of 3
        </span>
        <h1 className="text-4xl md:text-6xl font-black text-white mt-4 tracking-tighter italic uppercase leading-none">
          {step === 1
            ? "Select Service."
            : step === 2
              ? "Project Scope."
              : "Final Details."}
        </h1>
      </header>

      {/* Form Content */}
      <form onSubmit={(e) => e.preventDefault()}>
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {[
              {
                id: "web",
                label: "Web Development",
                icon: <Monitor size={20} />,
              },
              {
                id: "infra",
                label: "Cloud & Infrastructure",
                icon: <Server size={20} />,
              },
              {
                id: "devops",
                label: "DevOps & Automation",
                icon: <Cpu size={20} />,
              },
              {
                id: "custom",
                label: "Custom Enterprise Solution",
                icon: <Code size={20} />,
              },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={handleNext}
                className="p-8 text-left rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-cyan-500/50 transition-all group"
              >
                <div className="text-cyan-500 mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="text-white font-bold tracking-tight uppercase text-sm">
                  {item.label}
                </div>
              </button>
            ))}
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-slate-500 text-[10px] font-mono uppercase tracking-widest pl-1">
                  Estimated Budget
                </label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-cyan-500/50 outline-none cursor-pointer">
                  <option className="bg-black">$1k - $5k</option>
                  <option className="bg-black">$5k - $20k</option>
                  <option className="bg-black">$20k+</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-slate-500 text-[10px] font-mono uppercase tracking-widest pl-1">
                  Timeline
                </label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-cyan-500/50 outline-none cursor-pointer">
                  <option className="bg-black">Urgent (1 Month)</option>
                  <option className="bg-black">Standard (3 Months)</option>
                  <option className="bg-black">Long-term Partnership</option>
                </select>
              </div>
            </div>
            <button
              onClick={handleNext}
              className="w-full py-5 bg-white text-black font-black uppercase tracking-[0.2em] rounded-xl hover:bg-cyan-500 hover:text-white transition-all shadow-xl"
            >
              Continue to Final Step
            </button>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-cyan-500/50 outline-none"
              />
              <input
                type="email"
                placeholder="Work Email Address"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-cyan-500/50 outline-none"
              />
              <textarea
                rows={4}
                placeholder="Project requirements..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-cyan-500/50 outline-none resize-none"
              />
            </div>
            <button
              onClick={() => setSubmitted(true)}
              className="w-full py-5 bg-cyan-500 text-black font-black uppercase tracking-[0.2em] rounded-xl hover:bg-white transition-all shadow-[0_0_30px_rgba(0,174,239,0.3)]"
            >
              Request Technical Quote
            </button>
          </motion.div>
        )}
      </form>
    </div>
  );
}

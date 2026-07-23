"use client";
import { motion } from "framer-motion";

export default function ServiceCard({ title, desc, icon }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="p-6 rounded-3xl border border-slate-200 bg-white/60 backdrop-blur-md hover:border-cyan-500/30 transition-all duration-300"
    >
      <div className="text-cyan-600 mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-black">{title}</h3>
      <p className="text-slate-600 mt-2 text-sm">{desc}</p>
    </motion.div>
  );
}
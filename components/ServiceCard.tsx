"use client";
import { motion } from "framer-motion";

export default function ServiceCard({ title, desc, icon }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="p-6 rounded-3xl border border-slate-200 backdrop-blur-md"
    >
      <div className="text-cyan-500 mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-black">{title}</h3>
      <p className="text-slate-600 mt-2 text-sm">{desc}</p>
    </motion.div>
  );
}
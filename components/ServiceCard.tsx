"use client"; // <--- Ye line add karna zaroori hai
import { motion } from "framer-motion";

export default function ServiceCard({ title, desc, icon }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="p-6 rounded-3xl bg-slate-900/50 border border-slate-700 backdrop-blur-md"
    >
      <div className="text-teal-400 mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-slate-400 mt-2 text-sm">{desc}</p>
    </motion.div>
  );
}

import Image from "next/image";
import { motion } from "framer-motion";

export default function ServiceCard({ title, desc, icon, image }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="p-6 rounded-3xl border border-slate-200 bg-white/60 backdrop-blur-md hover:border-cyan-500/30 transition-all duration-300"
    >
      <div className="mb-4">
        {image ? (
          <div className="w-12 h-12 rounded-xl overflow-hidden border border-slate-200">
            <Image
              src={image}
              alt={title}
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="text-cyan-600">{icon}</div>
        )}
      </div>
      <h3 className="text-xl font-bold text-black">{title}</h3>
      <p className="text-slate-600 mt-2 text-sm">{desc}</p>
    </motion.div>
  );
}
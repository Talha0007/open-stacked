"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { servicesData } from "@/data/services";
import Image from "next/image";

export default function Services({ id }: { id?: string }) {
  return (
    <section id={id} className="relative py-32 overflow-hidden bg-[#031f33] text-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-600/50 to-transparent" />

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-375 mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-cyan-600 font-mono text-sm tracking-[0.4em] uppercase mb-4"
            >
              &#47;&#47; What We Build
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter"
            >
              TECHNICAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00aeef] via-[#3b82f6] to-[#2e3192] drop-shadow-[0_0_30px_rgba(0,174,239,0.25)]">
                CAPABILITIES
              </span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white text-lg max-w-xs font-light border-l border-slate-200 pl-6"
          >
            From frontend to infrastructure — engineering, design, and
            automation under one roof.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {servicesData.map((service, index) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="block group"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="relative p-8 transition-all duration-500 overflow-hidden h-full flex flex-col justify-between min-h-[320px] rounded-xl shadow-sm hover:shadow-2xl hover:border-cyan-500/50"
              >
                {/* Background Image Container - Clear & Vibrant */}
                {service.image ? (
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover object-right opacity-90 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700 ease-out brightness-105 contrast-110"
                    />

                    {/* Soft Readability Gradient (Only Behind Text) */}
                    {/* <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent z-10" /> */}
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30 z-10" /> */}
                  </div>
                ) : (
                  <div className="absolute inset-0" />
                )}

                {/* 2. Base Dark Tint Overlay (Text Legibility ke liye) */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/60 transition-opacity duration-500" />

                {/* 3. Hover Cyan/Blue Tech Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/70 via-slate-950/80 to-[#2e3192]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* 4. Bottom Accent Glow Line */}
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-cyan-400 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />

                {/* Card Content (Always Crisp & Visible) */}
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    {/* Header Row: Glass Tag + Step Counter */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[9px] font-mono text-cyan-300 uppercase tracking-[0.25em] shadow-sm">
                        {service.tag}
                      </span>

                      <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-cyan-400 transition-colors">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-cyan-300 transition-colors drop-shadow-md">
                      {service.title}
                    </h3>

                    <p className="text-slate-300 text-sm font-light leading-relaxed group-hover:text-slate-200 transition-colors mb-6 line-clamp-3">
                      {service.desc}
                    </p>
                  </div>

                  {/* Action Link */}
                  <div className="flex items-center gap-2 text-[10px] font-bold text-cyan-400 group-hover:text-cyan-300 uppercase tracking-widest transition-all pt-4 border-t border-white/10">
                    <span>View Architecture</span>
                    <div className="h-px w-4 group-hover:w-10 bg-cyan-400 transition-all duration-500" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

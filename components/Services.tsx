"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { servicesData } from "@/data/services";
import Image from "next/image";

export default function Services({ id }: { id?: string }) {
  return (
    <section id={id} className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-600/50 to-transparent" />

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-cyan-600 font-mono text-sm tracking-[0.4em] uppercase mb-4"
            >
              &#47;&#47; Capabilities Matrix v2.0
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black text-slate-900 leading-tight tracking-tighter"
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
            className="text-slate-600 text-lg max-w-xs font-light border-l border-slate-200 pl-6"
          >
            We provide specialized engineering and creative services to scale
            your digital presence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border border-slate-200">
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
                className="relative p-10 bg-white/60 backdrop-blur-sm border border-slate-200 transition-all hover:bg-white/90 overflow-hidden h-full"
              >
                {/* Bottom line – changes to dark gradient color on hover */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-600 scale-x-0 group-hover:scale-x-100 group-hover:bg-[#2e3192] transition-all duration-500 origin-left" />

                <div className="absolute -inset-px bg-gradient-to-br from-cyan-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="mb-8 p-1 w-12 h-12 rounded-lg bg-slate-100 border border-slate-300 group-hover:border-[#2e3192]/30 transition-all duration-500 overflow-hidden flex items-center justify-center">
                    {service.image ? (
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      service.icon &&
                      React.cloneElement(
                        service.icon as React.ReactElement<{
                          size: number;
                          className?: string;
                        }>,
                        {
                          size: 28,
                          className:
                            "text-slate-900 group-hover:text-[#2e3192] transition-colors",
                        },
                      )
                    )}
                  </div>

                  <div className="text-[9px] font-mono text-cyan-600 uppercase tracking-[0.3em] mb-3">
                    {service.tag}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-[#2e3192] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm font-light leading-relaxed group-hover:text-slate-700 transition-colors mb-6">
                    {service.desc}
                  </p>

                  <div className="flex items-center gap-2 text-[9px] font-bold text-cyan-600 group-hover:text-[#2e3192] uppercase tracking-widest transition-all">
                    <span>View Architecture</span>
                    <div className="h-px w-0 group-hover:w-8 bg-cyan-600 group-hover:bg-[#2e3192] transition-all duration-500" />
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

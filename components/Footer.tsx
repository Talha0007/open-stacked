// components/Footer.tsx
import React from "react";
import Image from "next/image";
import { Mail, ArrowUpRight, Globe } from "lucide-react";
import Link from "next/link"; // Use Link for SEO navigation

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-20 pb-10 bg-transparent overflow-hidden border-t border-white/20">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main CTA Card */}
        <div className="relative p-8 md:p-16 rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/5 backdrop-blur-3xl mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter">
                READY TO <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  SCALE UP?
                </span>
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <Link
                href="/contact"
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-cyan-500 hover:text-white transition-all"
              >
                START A PROJECT <ArrowUpRight size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6">
            <div className="relative w-48 h-12">
              <Image
                src="/os-logo.png"
                alt="Open Stacked Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              Providing enterprise-grade IT solutions and resilient digital
              infrastructure for modern businesses worldwide.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">
              Expertise
            </h4>
            <ul className="space-y-3 text-slate-500 text-sm">
              <li>Infrastructure Strategy</li>
              <li>Full-Stack Development</li>
              <li>Cloud Virtualization</li>
              <li>DevOps & Automation</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">
              Connect
            </h4>
            <div className="space-y-3 text-slate-500 text-sm">
              <p className="flex items-center gap-3">
                <Mail size={16} /> hello@openstacked.com
              </p>
              <p className="flex items-center gap-3">
                <Globe size={16} /> Remote / Worldwide
              </p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-600 text-[10px] font-mono uppercase tracking-[0.2em]">
          <div>© {currentYear} Open Stacked. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}

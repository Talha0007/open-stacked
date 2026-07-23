// components/Footer.tsx
import Image from "next/image";
import {
  Mail,
  ArrowUpRight,
  Globe,
  Phone,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden border-t border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main CTA Card */}
        <div className="relative p-8 md:p-16 rounded-[2rem] border border-slate-200 bg-gradient-to-br from-cyan-500/5 via-white/80 to-blue-500/5 backdrop-blur-3xl mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-4xl md:text-6xl font-black text-black leading-tight tracking-tighter uppercase italic">
                Ready to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Scale Up?
                </span>
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <Link
                href="/contact"
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                START A PROJECT{" "}
                <ArrowUpRight
                  size={20}
                  className="group-hover:rotate-45 transition-transform"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-6">
            <div className="relative w-48 h-12">
              <Image
                src="/os-logo.png"
                alt="Open Stacked Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
            <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
              Providing enterprise-grade IT solutions and resilient digital
              infrastructure for modern businesses worldwide.
            </p>
          </div>

          {/* Company Links */}
          <div className="space-y-6">
            <h4 className="text-black font-bold text-sm uppercase tracking-widest">
              Company
            </h4>
            <ul className="space-y-3 text-slate-600 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-cyan-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  Our Blogs{" "}
                  <span className="text-[10px] bg-sky-500/10 text-sky-600 px-1.5 py-0.5 rounded border border-sky-500/20 font-mono italic">
                    NEW
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-conditions"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Expertise / Services */}
          <div className="space-y-6">
            <h4 className="text-black font-bold text-sm uppercase tracking-widest">
              Expertise
            </h4>
            <ul className="space-y-3 text-slate-600 text-sm">
              <li>Infrastructure Strategy</li>
              <li>Full-Stack Development</li>
              <li>Cloud Virtualization</li>
              <li>DevOps & Automation</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h4 className="text-black font-bold text-sm uppercase tracking-widest">
              Connect
            </h4>
            <div className="space-y-3 text-slate-600 text-sm">
              <p className="flex items-center gap-3">
                <Mail size={16} className="text-cyan-500" />{" "}
                info@openstacked.com
              </p>

              <a
                href="tel:+12092131621"
                className="flex items-center gap-3 hover:text-cyan-400 transition-colors"
              >
                <Phone size={16} className="text-cyan-500" /> +1 (209) 213-1621
                Ext 800
              </a>

              <a
                href="https://wa.me/+14244453357"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-cyan-400 transition-colors"
              >
                <MessageSquare size={16} className="text-cyan-500" /> +1 (424)
                445-3357
              </a>

              <p className="flex items-center gap-3 pt-1">
                <Globe size={16} className="text-cyan-500" /> Remote / Worldwide
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-200/50 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-[10px] font-mono uppercase tracking-[0.2em]">
          <div>© {currentYear} Open Stacked. All rights reserved.</div>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-black transition-colors underline decoration-slate-300 underline-offset-4"
            >
              Privacy
            </Link>
            <Link
              href="/terms-conditions"
              className="hover:text-black transition-colors underline decoration-slate-300 underline-offset-4"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
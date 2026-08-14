// components/Footer.tsx
import Image from "next/image";
import {
  FaLinkedinIn,
  FaXTwitter,
  FaFacebookF,
  FaEnvelope,
  FaWhatsapp,
  FaPhone,
  FaInstagram,
} from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import { US, PK } from "country-flag-icons/react/3x2";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden border-t border-slate-800/60 bg-[#031f33] text-white">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main CTA Card */}
        <div className="relative p-8 md:p-16 rounded-[2rem] border border-slate-700/60 bg-gradient-to-br from-cyan-900/20 via-slate-900/60 to-blue-900/20 backdrop-blur-3xl mb-24 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter uppercase italic">
                Ready to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 inline-block pr-3">
                  Scale Up
                </span>
                <span className="text-cyan-400">?</span>
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <Link
                href="/contact"
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-cyan-500 text-slate-950 font-bold rounded-full hover:bg-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
              >
                START A PROJECT{" "}
                <FiArrowUpRight
                  size={20}
                  className="group-hover:rotate-45 transition-transform"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* 4 Columns Grid */}
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

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Providing enterprise-grade IT solutions and resilient digital
              infrastructure for modern businesses worldwide.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com/company/openstacked"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105"
              >
                <FaLinkedinIn size={16} />
              </a>
              <a
                href="https://x.com/openstacked"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105"
              >
                <FaXTwitter size={16} />
              </a>
              <a
                href="https://instagram.com/openstacked"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="https://facebook.com/openstacked"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105"
              >
                <FaFacebookF size={15} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-cyan-400">
              Company
            </h4>
            <ul className="space-y-3 text-slate-300 text-sm flex flex-col items-start">
              <li className="border-b border-slate-100/20 pb-2.5 inline-block">
                <Link
                  href="/about"
                  className="hover:text-cyan-400 transition-colors"
                >
      1   2       Abinline-block
                </Link>
              </li>
              <li className="border-b border-slate-100/20 pb-2.5 inline-block">
                <Link
                  href="/blogs"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  Our Blogs{" "}
                  <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-1.5 py-0.5 rounded border border-cyan-400/30 font-mono italic">
                    NEW
                  </span>
                </Link>
              </li>
              <li className="border-b border-slate-100/20 pb-2.5 inline-block">
                <Link
                  href="/contact"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li className="border-b border-slate-100/20 pb-2.5 inline-block">
                <Link
                  href="/privacy-policy"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="border-b border-slate-100/20 pb-2.5 inline-block">
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
            <h4 className="text-white font-bold text-sm uppercase tracking-widest relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-cyan-400">
              Expertise
            </h4>
            <ul className="space-y-3 text-slate-300 text-sm flex flex-col items-start">
              <li className="border-b border-slate-100/20 pb-2.5 inline-block">
                Infrastructure Strategy
              </li>
              <li className="border-b border-slate-100/20 pb-2.5 inline-block">
                Full-Stack Development
              </li>
              <li className="border-b border-slate-100/20 pb-2.5 inline-block">
                Cloud Virtualization
              </li>
              <li className="border-b border-slate-100/20 pb-2.5 inline-block">
                DevOps & Automation
              </li>
            </ul>
          </div>

          {/* Locations Section */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-cyan-400">
              Locations
            </h4>

            <div className="space-y-4 text-slate-300 text-sm">
              {/* Office 1: US */}
              <div className="border-b border-slate-800/80 pb-3 space-y-2">
                <div className="flex items-center gap-2">
                  <US
                    title="United States"
                    className="w-4 h-3 rounded-sm shadow-sm shrink-0"
                  />
                  <p className="font-semibold text-white text-xs uppercase tracking-wide">
                    US Office
                  </p>
                </div>

                <p className="text-xs text-slate-400">
                  3244 N Fulton ave Hapeville GA 30354
                </p>

                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="text-slate-300">
                    +1 (209) 213-1621 Ext 800
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href="tel:+12092131621"
                      title="Call US Office"
                      aria-label="Call US Office"
                      className="p-1.5 rounded hover:bg-slate-800 text-cyan-400 hover:text-white transition-colors"
                    >
                      <FaPhone size={12} />
                    </a>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="text-slate-300">+1 (424) 445-3357</span>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://wa.me/14244453357"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="WhatsApp US Office"
                      aria-label="WhatsApp US Office"
                      className="p-1.5 rounded hover:bg-slate-800 text-emerald-400 hover:text-white transition-colors"
                    >
                      <FaWhatsapp size={14} />
                    </a>
                    <a
                      href="tel:+14244453357"
                      title="Call US Office"
                      aria-label="Call US Office"
                      className="p-1.5 rounded hover:bg-slate-800 text-cyan-400 hover:text-white transition-colors"
                    >
                      <FaPhone size={12} />
                    </a>
                  </div>
                </div>

                <a
                  href="mailto:info@openstacked.com"
                  className="flex items-center gap-2 hover:text-cyan-400 transition-colors pt-0.5 text-xs text-slate-300"
                >
                  <FaEnvelope size={12} className="text-cyan-400 shrink-0" />
                  info@openstacked.com
                </a>
              </div>

              {/* Office 2: PK */}
              <div className="border-b border-slate-800/80 pb-3 space-y-2">
                <div className="flex items-center gap-2">
                  <PK
                    title="Pakistan"
                    className="w-4 h-3 rounded-sm shadow-sm shrink-0"
                  />
                  <p className="font-semibold text-white text-xs uppercase tracking-wide">
                    Pakistan Office
                  </p>
                </div>

                <p className="text-xs text-slate-400">
                  55180 KRK, Kasur, Punjab, Pakistan
                </p>

                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="text-slate-300">+92 348 4901969</span>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://wa.me/923484901969"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="WhatsApp Pakistan Office"
                      aria-label="WhatsApp Pakistan Office"
                      className="p-1.5 rounded hover:bg-slate-800 text-emerald-400 hover:text-white transition-colors"
                    >
                      <FaWhatsapp size={14} />
                    </a>
                    <a
                      href="tel:+923484901969"
                      title="Call Pakistan Office"
                      aria-label="Call Pakistan Office"
                      className="p-1.5 rounded hover:bg-slate-800 text-cyan-400 hover:text-white transition-colors"
                    >
                      <FaPhone size={12} />
                    </a>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="text-slate-300">+92 313 4866297</span>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://wa.me/923134866297"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="WhatsApp Pakistan Office"
                      aria-label="WhatsApp Pakistan Office"
                      className="p-1.5 rounded hover:bg-slate-800 text-emerald-400 hover:text-white transition-colors"
                    >
                      <FaWhatsapp size={14} />
                    </a>
                    <a
                      href="tel:+923134866297"
                      title="Call Pakistan Office"
                      aria-label="Call Pakistan Office"
                      className="p-1.5 rounded hover:bg-slate-100 text-cyan-400 hover:text-white transition-colors"
                    >
                      <FaPhone size={12} />
                    </a>
                  </div>
                </div>

                <a
                  href="mailto:info@openstacked.com"
                  className="flex items-center gap-2 hover:text-cyan-400 transition-colors pt-0.5 text-xs text-slate-300"
                >
                  <FaEnvelope size={12} className="text-cyan-400 shrink-0" />
                  info@openstacked.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-[10px] font-mono uppercase tracking-[0.2em]">
          <div>© {currentYear} Open Stacked. All rights reserved.</div>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors underline decoration-slate-700 underline-offset-4"
            >
              Privacy
            </Link>
            <Link
              href="/terms-conditions"
              className="hover:text-white transition-colors underline decoration-slate-700 underline-offset-4"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
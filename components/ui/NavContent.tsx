"use client";
import { useState, useEffect, ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavLink {
  name: string;
  href: string;
}

interface CompanyLink extends NavLink {
  icon: ReactNode;
}

interface NavContentProps {
  navLinks: NavLink[];
  companyLinks: CompanyLink[];
}

export default function NavContent({
  navLinks,
  companyLinks,
}: NavContentProps) {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
        setIsOpen(false);
      }
    }
  };

  return (
    <div
      className={`transition-all duration-500 ease-in-out w-full ${scrolled ? "mt-4 px-4 md:px-10" : "mt-0 px-0"}`}
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-500 ease-in-out px-6 md:px-8 flex justify-between items-center ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border border-slate-200 rounded-2xl py-4 md:py-5 shadow-lg"
            : "border-slate-200/50 py-6 md:py-10"
        }`}
      >
        {/* LOGO - Increased size for all devices */}
        <Link href="/" className="z-[110]">
          <div
            className={`relative transition-all duration-500 ${
              scrolled
                ? "w-12 h-12 md:w-14 md:h-14"
                : "w-16 h-16 md:w-20 md:h-20"
            }`}
          >
            <Image
              src="/os-logo.png"
              alt="Open Stacked Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-[11px] uppercase tracking-[0.25em] font-bold text-slate-600 hover:text-black transition-all group relative"
            >
              {link.name}
              <span
                className={`absolute -bottom-2 left-0 h-[1.5px] bg-cyan-400 transition-all duration-300 ${pathname === "/" && link.href.includes(pathname) ? "w-full" : "w-0 group-hover:w-full"}`}
              />
            </Link>
          ))}

          {/* DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <button className="flex items-center gap-1 text-[11px] uppercase tracking-[0.25em] font-bold py-2 text-slate-600 hover:text-black transition-colors">
              Company{" "}
              <ChevronDown
                size={14}
                className={`transition-transform duration-300 ${showDropdown ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence>
              {showDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 w-56 pt-4"
                >
                  <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-2xl">
                    {companyLinks.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="flex items-center gap-4 px-4 py-4 rounded-lg text-slate-600 hover:text-black hover:bg-slate-50 transition-all group/item"
                      >
                        <span className="text-cyan-500/70 group-hover/item:text-cyan-500">
                          {sub.icon}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-widest">
                          {sub.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/quote"
            className="px-6 py-2 bg-white text-black border border-slate-300 text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-all"
          >
            Request Quote
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="lg:hidden text-black p-2 z-[110] relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed inset-0 bg-white z-[100] flex flex-col justify-center p-8 md:p-16 lg:hidden"
          >
            <div className="flex flex-col gap-6 md:gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    handleScrollTo(e, link.href);
                    setIsOpen(false);
                  }}
                  className="text-4xl md:text-7xl font-black text-black italic uppercase tracking-tighter hover:text-cyan-500 transition-colors"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="/quote"
                onClick={() => setIsOpen(false)}
                className="mt-4 text-xl font-bold text-cyan-500 uppercase tracking-widest"
              >
                Request a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
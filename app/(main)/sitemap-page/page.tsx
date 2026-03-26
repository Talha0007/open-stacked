import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

const sitemapData = {
  company: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Get a Quote", href: "/quote" },
    { name: "Documentation", href: "/docs" },
    { name: "Contact", href: "/contact" },
    { name: "Blogs", href: "/blogs" },
  ],
  services: [
    { name: "Web Engineering", href: "/services/web-engineering" },
    { name: "Mobile Solutions", href: "/services/mobile-solutions" },
    { name: "DevOps & Cloud", href: "/services/devops-cloud" },
    { name: "Database Design", href: "/services/database-design" },
    { name: "UI/UX Architecture", href: "/services/ui-ux-architecture" },
    { name: "Digital Marketing", href: "/services/digital-marketing" },
    { name: "SEO Mastery", href: "/services/seo-mastery" },
    { name: "E-commerce Systems", href: "/services/e-commerce-systems" },
    { name: "Video Production", href: "/services/video-production" },
    { name: "AI & Automation", href: "/services/ai-automation" },
    { name: "Cyber Security", href: "/services/cyber-security" },
    { name: "Enterprise Solutions", href: "/services/enterprise-solutions" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-conditions" },
  ],
};

export default function SitemapPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 border-l-4 border-cyan-500 pl-6">
          <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-4">
            Site <span className="text-cyan-500 text-outline">Map</span>
          </h1>
          <p className="text-slate-400 max-w-2xl font-mono uppercase text-sm tracking-widest">
            A comprehensive directory of the Open Stacked digital ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Company */}
          <div>
            <h2 className="text-xl font-bold mb-8 flex items-center gap-2 text-cyan-400">
              <ChevronRight size={20} /> Company
            </h2>
            <ul className="space-y-4">
              {sitemapData.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-slate-400 hover:text-white transition-all"
                  >
                    <ArrowRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all text-cyan-500"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Services */}
          <div>
            <h2 className="text-xl font-bold mb-8 flex items-center gap-2 text-cyan-400">
              <ChevronRight size={20} /> Expertise & Services
            </h2>
            <ul className="grid grid-cols-1 gap-4">
              {sitemapData.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-slate-400 hover:text-white transition-all"
                  >
                    <ArrowRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all text-cyan-500"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h2 className="text-xl font-bold mb-8 flex items-center gap-2 text-cyan-400">
              <ChevronRight size={20} /> Legal
            </h2>
            <ul className="space-y-4">
              {sitemapData.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-slate-400 hover:text-white transition-all"
                  >
                    <ArrowRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all text-cyan-500"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

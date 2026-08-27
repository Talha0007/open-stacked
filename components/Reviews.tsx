"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  ShieldCheck,
  Zap,
  ExternalLink,
} from "lucide-react";

interface Review {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
  outcome: string;
  techStack: string[];
  liveUrl: string;
  projectTitle: string;
}

const REVIEWS_DATA: Review[] = [
  {
    id: 1,
    name: "Jeffrey Vance",
    role: "Product Lead",
    company: "DeepAI",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120",
    rating: 5,
    quote:
      "Open Stacked built a lightning-fast web platform for our AI generation tools. Even under heavy global traffic, the interface remains smooth and responsive.",
    outcome: "⚡ 300% Faster Page Loads",
    techStack: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
    liveUrl: "https://deepai.org/",
    projectTitle: "DeepAI",
  },
  {
    id: 2,
    name: "Tariq Mahmood",
    role: "Operations Director",
    company: "Sparkle Energy",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120",
    rating: 5,
    quote:
      "They developed our solar energy trading portal from scratch. It handles commercial quote requests and large project installations effortlessly.",
    outcome: "📈 +45% Quote Conversions",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://www.sparkleenergy.com.pk/",
    projectTitle: "Sparkle Energy",
  },
  {
    id: 3,
    name: "Dr. Farhan Ahmed",
    role: "Medical Content Head",
    company: "MedEx Directory",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120",
    rating: 5,
    quote:
      "Our pharmaceutical database contains thousands of medicine brands and generics. Open Stacked made search instant and mobile-friendly.",
    outcome: "🚀 Sub-Second Search",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://medex.com.bd/",
    projectTitle: "MedEx Directory",
  },
  {
    id: 4,
    name: "Robert Hoilett",
    role: "Managing Director",
    company: "Hoilett Business Systems",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120",
    rating: 5,
    quote:
      "They delivered a secure enterprise portal for our cloud infrastructure services. Our clients love the clean dashboard and quick service requests.",
    outcome: "🛡️ 99.9% System Reliability",
    techStack: ["Docker", "Linux", "Cloudflare", "Nginx"],
    liveUrl: "https://hoilett.com/",
    projectTitle: "Hoilett Systems",
  },
  {
    id: 5,
    name: "Zahra Hashmi",
    role: "Creative Director",
    company: "Jeem Jewelry",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=120",
    rating: 5,
    quote:
      "Open Stacked captured our luxury aesthetic perfectly. Our online jewelry storefront is elegant, quick to load, and easy for customers to buy from.",
    outcome: "💎 +60% Online Sales",
    techStack: ["Next.js", "Python", "FastAPI", "PostgreSQL"],
    liveUrl: "https://jeem.com.pk/",
    projectTitle: "Jeem Jewelry",
  },
  {
    id: 6,
    name: "David Miller",
    role: "Head of Retail Ops",
    company: "Phone Labs UK",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=120",
    rating: 5,
    quote:
      "Their instant repair quote and doorstep booking feature simplified our customer ordering process. Bookings doubled within the first month.",
    outcome: "⏱️ Instant Online Quotes",
    techStack: ["TypeScript", "Redis", "Cloudflare Workers"],
    liveUrl: "https://phonelabs.co.uk/",
    projectTitle: "Phone Labs",
  },
  {
    id: 7,
    name: "Mahnoor Sahi",
    role: "Founder",
    company: "Mahnoor Sahi Luxury",
    avatar:
      "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=120",
    rating: 5,
    quote:
      "The interactive online fragrance catalog they crafted gives our brand a high-end experience. Visitors spend much more time browsing our perfumes.",
    outcome: "🌟 +150% Engagement",
    techStack: ["Next.js", "Tailwind CSS", "D3.js"],
    liveUrl: "https://mahnoorsahi.com/",
    projectTitle: "Mahnoor Sahi",
  },
  {
    id: 8,
    name: "Simon Clarke",
    role: "E-Commerce Manager",
    company: "Vape UK",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120",
    rating: 5,
    quote:
      "Open Stacked optimized our UK store backend for same-day dispatch handling and checkout speed. The platform operates flawlessly during peak sales.",
    outcome: "📦 Zero Checkout Lag",
    techStack: ["Node.js", "PostgreSQL", "Prisma", "Redis"],
    liveUrl: "https://vapeuk.co.uk/",
    projectTitle: "Vape UK",
  },
  {
    id: 9,
    name: "Eng. Rashid Al-Maktoum",
    role: "Technical Director",
    company: "APCECO UAE",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120",
    rating: 5,
    quote:
      "They developed our industrial engineering catalog and services platform with precision. It presents our technical equipment catalog clearly to corporate clients.",
    outcome: "🏢 Enterprise UAE Portal",
    techStack: ["React", "TypeScript", "GraphQL", "AWS"],
    liveUrl: "http://www.apceco.ae/",
    projectTitle: "APCECO UAE",
  },
];

const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <div className="relative flex flex-col justify-between p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 bg-gradient-to-b from-white/90 to-slate-50/60 backdrop-blur-md shadow-sm hover:border-cyan-500/40 hover:shadow-cyan-500/10 hover:shadow-xl transition-all duration-300 group">
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4 sm:mb-6">
          <div className="flex items-center gap-3 min-w-0">
            <Image
              src={review.avatar}
              alt={review.name}
              width={48}
              height={48}
              loading="lazy"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border border-cyan-500/30 group-hover:border-cyan-500 transition-colors shrink-0"
            />
            <div className="min-w-0">
              <h3 className="text-black font-bold text-xs sm:text-sm tracking-tight leading-snug truncate">
                {review.name}
              </h3>
              <p className="text-slate-500 text-[11px] sm:text-xs truncate">
                {review.role} •{" "}
                <span className="font-medium text-slate-700">
                  {review.company}
                </span>
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-mono text-cyan-600 bg-cyan-50 border border-cyan-200 px-2 py-0.5 sm:py-1 rounded-full shrink-0">
            <ShieldCheck size={11} />
            Verified Client
          </span>
        </div>

        <div className="flex gap-1 mb-3 sm:mb-4">
          {Array.from({ length: review.rating }, (_, index) => (
            <Star
              key={`${review.id}-star-${index}`}
              size={13}
              aria-hidden="true"
              className="fill-cyan-500 text-cyan-500"
            />
          ))}
        </div>

        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-normal mb-5 sm:mb-6">
          &quot;{review.quote}&quot;
        </p>
      </div>

      <div className="pt-4 border-t border-slate-200/60 space-y-3">
        <div className="flex flex-wrap gap-1 sm:gap-1.5">
          {review.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[9px] sm:text-[10px] font-mono uppercase bg-slate-100 text-slate-600 px-1.5 sm:px-2 py-0.5 rounded border border-slate-200/80"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-700 bg-cyan-500/10 border border-cyan-500/20 px-3 py-2 rounded-xl justify-center group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
            <Zap size={13} className="shrink-0" />
            <span className="truncate">{review.outcome}</span>
          </div>

          <a
            href={review.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-black hover:text-white border border-slate-200 px-3 py-2 rounded-xl transition-all duration-300 group/link cursor-pointer"
          >
            <span className="truncate">Visit {review.projectTitle}</span>
            <ExternalLink
              size={12}
              className="shrink-0 group-hover/link:translate-x-0.5 transition-transform"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        let newItemsPerPage = 1;

        if (window.innerWidth >= 1280) {
          newItemsPerPage = 3; // Large Devices
        } else if (window.innerWidth >= 768) {
          newItemsPerPage = 2; // Tablet Devices
        }

        setItemsPerPage((prev) => {
          if (prev !== newItemsPerPage) {
            setCurrentIndex(0);
            return newItemsPerPage;
          }
          return prev;
        });
      }, 100);
    };

    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const totalPages = Math.ceil(REVIEWS_DATA.length / itemsPerPage);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= totalPages - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? totalPages - 1 : prev - 1));
  };

  const visibleReviews = REVIEWS_DATA.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage,
  );

  return (
    <section className="relative py-12 sm:py-20 md:py-32 overflow-hidden bg-transparent">
      <div className="max-w-375 mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-cyan-600 font-mono text-sm tracking-[0.4em] uppercase mb-4 pl-3 sm:pl-4"
            >
              Client Reviews
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-slate-900 leading-tight tracking-tighter uppercase"
            >
              PROVEN RESULTS FOR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00aeef] via-[#3b82f6] to-[#2e3192] drop-shadow-[0_0_30px_rgba(0,174,239,0.25)]">
                REAL BUSINESSES.
              </span>
            </motion.h2>
          </div>

          <nav
            aria-label="Client review navigation"
            className="flex items-center gap-3 self-start sm:self-auto"
          >
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous reviews"
              className="p-2.5 sm:p-3 rounded-full border border-slate-200 bg-white text-slate-700 hover:border-cyan-500 hover:text-cyan-600 hover:bg-cyan-50/50 transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next reviews"
              className="p-2.5 sm:p-3 rounded-full border border-slate-200 bg-white text-slate-700 hover:border-cyan-500 hover:text-cyan-600 hover:bg-cyan-50/50 transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </nav>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentIndex}-${itemsPerPage}`}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.25, ease: "linear" }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 will-change-transform"
            >
              {visibleReviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <nav
          aria-label="Choose review page"
          className="flex justify-center items-center gap-2 mt-8 sm:mt-10"
        >
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to review page ${index + 1}`}
              aria-current={currentIndex === index ? "page" : undefined}
              className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === index
                  ? "w-6 sm:w-8 bg-cyan-600"
                  : "w-2 sm:w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </nav>
      </div>
    </section>
  );
}

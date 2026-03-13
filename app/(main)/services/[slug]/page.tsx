import { servicesData } from "@/data/services";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>; // Params ko Promise define karein
}

// SEO Metadata Fix
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params; // Yahan await karein
  const service = servicesData.find((s) => s.slug === resolvedParams.slug);

  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | Open Stacked`,
    description: service.desc,
  };
}

// Page Component Fix
export default async function ServiceDetailPage({ params }: Props) {
  const resolvedParams = await params; // Yahan await karna laazmi hai
  const service = servicesData.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-20 overflow-hidden relative">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Navigation Back */}
        <Link
          href="/#services"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors mb-12 group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span className="text-[10px] font-mono uppercase tracking-[0.3em]">
            Back to Service Matrix
          </span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Side: Content */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[9px] font-mono uppercase tracking-widest rounded-full">
                {service.tag}
              </span>
              <div className="h-px w-12 bg-white/10" />
            </div>

            <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-none mb-8">
              {service.title.split(" ")[0]} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                {service.title.split(" ").slice(1).join(" ")}.
              </span>
            </h1>

            <p className="text-xl text-slate-400 font-light leading-relaxed mb-10 max-w-2xl">
              {service.fullDesc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {service.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-cyan-500/30 transition-colors group"
                >
                  <CheckCircle2
                    size={20}
                    className="text-cyan-500 mt-0.5 shrink-0"
                  />
                  <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Visual Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="relative p-1 bg-gradient-to-br from-white/10 to-transparent rounded-[2rem]">
              <div className="bg-[#0a0a0a] rounded-[1.9rem] p-10 border border-white/5 relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 blur-[80px] pointer-events-none" />

                <h3 className="text-2xl font-bold mb-2 italic tracking-tight">
                  {service.ctaData?.heading || "Ready to start?"}
                </h3>

                <p className="text-cyan-500 font-mono text-[10px] uppercase tracking-[0.2em] mb-6">
                  {service.ctaData?.highlight}
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">
                      Main Output
                    </span>
                    <span className="text-white text-[11px] font-medium">
                      {service.ctaData?.deliverable}
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">
                      Est. Delivery
                    </span>
                    <span className="text-white text-[11px] font-medium">
                      {service.ctaData?.timeline}
                    </span>
                  </div>
                </div>

                <p className="text-slate-400 text-xs mb-8 leading-relaxed italic">
                  &quot;Accelerate your roadmap with our specialized{" "}
                  {service.title} framework, engineered for{" "}
                  {service.tag?.toLowerCase()} results.&quot;
                </p>

                <Link
                  href="/quote"
                  className="block w-full py-4 bg-white text-black text-center font-black uppercase tracking-widest text-[10px] rounded-xl hover:bg-cyan-500 hover:text-white transition-all shadow-xl hover:shadow-cyan-500/20 active:scale-95"
                >
                  {service.ctaData?.buttonText || "Get Started"}
                </Link>

                <div className="mt-6 flex items-center justify-center gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-[9px] uppercase font-bold tracking-tighter text-slate-500">
                    {service.ctaData?.availabilityText ||
                      "Open Stacked Team Available"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

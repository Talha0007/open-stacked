// app/services/[slug]/page.tsx
import { servicesData } from "@/data/services";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ChevronDown } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.slug === resolvedParams.slug);

  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | Open Stacked`,
    description: service.desc,
    keywords: service.keywords,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  // Generate SEO Schema for FAQs dynamically
  const faqSchema =
    service.faqs && service.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: service.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <main className="min-h-screen bg-white text-black pt-32 md:pt-45 pb-20 overflow-hidden relative">
      {/* Inject SEO Schema if FAQs exist */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Background Orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Link
          href="/#services"
          className="inline-flex items-center gap-2 text-slate-700 hover:text-cyan-600 transition-colors mb-12 group"
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
              <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 text-[9px] font-mono uppercase tracking-widest rounded-full">
                {service.tag}
              </span>
              <div className="h-px w-12 bg-slate-200" />
            </div>

            <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-none mb-8">
              {service.title.split(" ")[0]} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00aeef] via-[#3b82f6] to-[#2e3192]">
                {service.title.split(" ").slice(1).join(" ")}.
              </span>
            </h1>

            <p className="text-xl text-slate-800 font-light leading-relaxed mb-10 max-w-2xl">
              {service?.shortDesc}
            </p>
            <p className="text-xl text-slate-800 font-light leading-relaxed mb-10 max-w-2xl">
              {service.fullDesc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {service.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl hover:border-cyan-500/30 transition-colors group"
                >
                  <CheckCircle2
                    size={20}
                    className="text-cyan-600 mt-0.5 shrink-0"
                  />
                  <span className="text-sm font-medium text-slate-800 group-hover:text-black transition-colors">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* --- FAQ ACCORDION SECTION --- */}
            {service.faqs && service.faqs.length > 0 && (
              <div className="mt-12 border-t border-slate-200 pt-12">
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <span className="text-cyan-600">/</span> Frequently Asked
                  Questions
                </h2>

                <div className="space-y-4">
                  {service.faqs.map((faq, index) => (
                    <details
                      key={index}
                      className="group bg-white border border-slate-200 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden shadow-sm"
                    >
                      <summary className="flex cursor-pointer items-center justify-between p-5 text-slate-800 hover:text-cyan-500 font-medium list-none select-none transition-colors">
                        {faq.question}
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 ml-4 group-open:bg-cyan-500/20 group-open:text-cyan-500 transition-colors">
                          <ChevronDown
                            size={16}
                            className="transition-transform duration-300 group-open:-rotate-180"
                          />
                        </div>
                      </summary>
                      <div className="px-5 pb-5 pt-2 text-slate-700 text-sm font-light leading-relaxed border-t border-slate-200">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Side: Visual Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="relative p-1 bg-gradient-to-br from-slate-200/50 to-transparent rounded-[2rem]">
              <div className="bg-white rounded-[1.9rem] p-10 border border-slate-200 relative overflow-hidden shadow-lg">
                {/* Background Glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/5 blur-[80px] pointer-events-none" />

                <h3 className="text-2xl font-bold mb-2 italic tracking-tight text-black">
                  {service.ctaData?.heading || "Ready to start?"}
                </h3>

                <p className="text-cyan-500 font-mono text-[10px] uppercase tracking-[0.2em] mb-6">
                  {service.ctaData?.highlight}
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                    <span className="text-slate-700 text-[10px] uppercase tracking-widest font-bold">
                      Main Output
                    </span>
                    <span className="text-black text-[11px] font-medium">
                      {service.ctaData?.deliverable}
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                    <span className="text-slate-700 text-[10px] uppercase tracking-widest font-bold">
                      Est. Delivery
                    </span>
                    <span className="text-black text-[11px] font-medium">
                      {service.ctaData?.timeline}
                    </span>
                  </div>
                </div>

                <p className="text-slate-700 text-xs mb-8 leading-relaxed italic">
                  &quot;Accelerate your roadmap with our specialized{" "}
                  {service.title} framework, engineered for{" "}
                  {service.tag?.toLowerCase()} results.&quot;
                </p>

                <Link
                  href="/quote"
                  className="block w-full py-4 bg-black text-white text-center font-black uppercase tracking-widest text-[10px] rounded-xl hover:bg-cyan-500 hover:text-white transition-all shadow-xl hover:shadow-cyan-500/20 active:scale-95"
                >
                  {service.ctaData?.buttonText || "Get Started"}
                </Link>

                <div className="mt-6 flex items-center justify-center gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-[9px] uppercase font-bold tracking-tighter text-slate-700">
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
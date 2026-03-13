import { Metadata } from "next";
import ContactForm from "@/components/ui/ContactForm";
import { Mail, Globe, Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Open Stacked Technical Support",
  description:
    "Get in touch with Open Stacked for technical assessments, MERN stack development, and cloud infrastructure inquiries. Our engineering team responds within 6 hours.",
  keywords: [
    "Contact Open Stacked",
    "Technical Support",
    "Software Consultation Pakistan",
    "Hire MERN Developer",
  ],
};

export default function ContactPage() {
  return (
    <main className="pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* --- Header --- */}
        <header className="text-center mb-20">
          <span className="text-cyan-500 font-mono text-[10px] tracking-[0.5em] uppercase">
            Transmission Protocol
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-white mt-6 tracking-tighter italic uppercase">
            Get in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 font-black">
              Touch.
            </span>
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* --- Left Column: Static Info (SEO Friendly) --- */}
          <section className="lg:col-span-5 space-y-8">
            <div className="p-10 rounded-[2.5rem] border border-white/5 bg-white/[0.02] backdrop-blur-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 transition-opacity">
                <Terminal size={120} aria-hidden="true" />
              </div>

              <h2 className="text-2xl font-bold text-white mb-8 tracking-tight">
                Technical Support & Inquiries
              </h2>

              <div className="space-y-8 relative z-10">
                <div className="flex items-start gap-6 group/item">
                  <div className="p-4 rounded-2xl bg-cyan-500/10 text-cyan-500 border border-cyan-500/20 group-hover/item:bg-cyan-500 group-hover/item:text-black transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <address className="not-italic">
                      <div className="text-slate-500 text-[10px] font-mono uppercase tracking-widest mb-1">
                        Email
                      </div>
                      <a
                        href="mailto:hello@openstacked.com"
                        className="text-white font-bold text-lg hover:text-cyan-400"
                      >
                        hello@openstacked.com
                      </a>
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-6 group/item">
                  <div className="p-4 rounded-2xl bg-blue-500/10 text-blue-500 border border-blue-500/20 group-hover/item:bg-blue-500 group-hover/item:text-black transition-all">
                    <Globe size={24} />
                  </div>
                  <div>
                    <div className="text-slate-500 text-[10px] font-mono uppercase tracking-widest mb-1">
                      Location
                    </div>
                    <div className="text-white font-bold text-lg">
                      Remote / Worldwide Operations
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-white/5">
                <p className="text-slate-500 text-sm leading-relaxed italic">
                  &quot;Our engineering team typically responds within 4-6
                  business hours for technical assessments.&quot;
                </p>
              </div>
            </div>
          </section>

          {/* --- Right Column: Form (Client Side) --- */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}

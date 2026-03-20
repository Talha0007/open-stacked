// app/terms-conditions/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | Open Stacked",
  description:
    "Review the Terms and Conditions of Open Stacked. Our legal framework for software development, IT consulting, and enterprise solutions.",
  alternates: {
    canonical: "https://openstacked.com/terms-conditions",
  },
};

export default function TermsConditionsPage() {
  const lastUpdated = "March 18, 2026";

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-20 overflow-hidden relative">
      {/* Visual Identity Orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Navigation */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors mb-12 group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span className="text-[10px] font-mono uppercase tracking-[0.3em]">
            Return to Site
          </span>
        </Link>

        {/* Header */}
        <header className="mb-16 border-b border-white/10 pb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[9px] font-mono uppercase tracking-widest rounded-full">
              Legal Framework
            </span>
            <div className="h-px w-12 bg-white/10" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none mb-6">
            Terms &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-600">
              Conditions.
            </span>
          </h1>
          <p className="text-slate-400 font-mono text-sm">
            Last Revision: {lastUpdated}
          </p>
        </header>

        {/* Content Section */}
        <article className="prose prose-invert prose-blue max-w-none text-slate-300 font-light leading-relaxed space-y-10">
          <section>
            <p className="text-lg">
              Welcome to <strong className="text-white">Open Stacked</strong>.
              These Terms & Conditions outline the rules and regulations for the
              use of our software development services and website. By accessing
              this website or engaging in our services, we assume you accept
              these terms in full.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-blue-500 text-lg">/ 01.</span> Scope of
              Services
            </h2>
            <p>
              Open Stacked provides custom IT solutions, including but not
              limited to Web Engineering (MERN/Next.js), Mobile App Development,
              DevOps, and System Architecture. Each project is governed by a
              specific Statement of Work (SOW) or Proposal that outlines the
              technical requirements, timelines, and deliverables.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-blue-500 text-lg">/ 02.</span> Intellectual
              Property
            </h2>
            <p className="mb-4">
              Unless otherwise stated in a written agreement:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-400 marker:text-blue-500">
              <li>
                Ownership of the final source code and deliverables is
                transferred to the client only upon{" "}
                <strong className="text-white">Full and Final Payment</strong>.
              </li>
              <li>
                Open Stacked retains the right to use non-proprietary code
                snippets, libraries, and general knowledge gained during the
                project for other clients.
              </li>
              <li>
                All brand assets, logos, and website content belonging to Open
                Stacked are protected by copyright laws.
              </li>
            </ul>
          </section>

          <section className="p-6 bg-blue-500/5 border border-blue-500/20 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-blue-500 text-lg">/ 03.</span> Payment Terms
            </h2>
            <p>
              Clients agree to the payment schedule defined in the project
              proposal. For freelance and enterprise projects, we typically
              operate on a milestone-based payment system. Delayed payments may
              result in the suspension of development services or deployment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-blue-500 text-lg">/ 04.</span>{" "}
              Confidentiality (NDA)
            </h2>
            <p>
              Both parties agree to protect sensitive information shared during
              the development process. Open Stacked will not disclose trade
              secrets, business logic, or proprietary data provided by the
              client to any third party.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-blue-500 text-lg">/ 05.</span> Limitation of
              Liability
            </h2>
            <p>
              While we strive for 100% bug-free deployments, Open Stacked shall
              not be held liable for any indirect, consequential, or incidental
              damages (including loss of profits or data) arising out of the use
              or inability to use the software provided. We recommend regular
              backups and security audits.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-blue-500 text-lg">/ 06.</span> Termination
              of Service
            </h2>
            <p>
              We reserve the right to terminate services if a client violates
              these terms, engages in illegal activities using our software, or
              fails to meet financial obligations. Upon termination, the client
              must cease the use of any unpaid intellectual property.
            </p>
          </section>

          <section className="border-t border-white/10 pt-10 mt-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                  <ShieldCheck className="text-blue-500" /> Legal Inquiries
                </h2>
                <p className="text-slate-400">
                  For clarifications on these terms, reach out to:
                </p>
              </div>
              <a
                href="mailto:legal@openstacked.com"
                className="inline-block px-8 py-4 bg-white text-black font-black uppercase text-xs tracking-widest rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                legal@openstacked.com
              </a>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}

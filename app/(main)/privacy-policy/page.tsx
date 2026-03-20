// app/privacy-policy/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Open Stacked",
  description:
    "Read the Privacy Policy of Open Stacked. Learn how we collect, use, and safeguard your data, including enterprise-grade security protocols, GDPR compliance, and Google AdSense standards.",
  alternates: {
    canonical: "https://openstacked.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Open Stacked",
    description: "Enterprise-grade privacy policies and AdSense compliance.",
    url: "https://openstacked.com/privacy-policy",
    siteName: "Open Stacked",
    locale: "en_US",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "March 18, 2026";

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-20 overflow-hidden relative">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors mb-12 group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span className="text-[10px] font-mono uppercase tracking-[0.3em]">
            Back to Home
          </span>
        </Link>

        <header className="mb-16 border-b border-white/10 pb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[9px] font-mono uppercase tracking-widest rounded-full">
              Legal
            </span>
            <div className="h-px w-12 bg-white/10" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none mb-6">
            Privacy{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Policy.
            </span>
          </h1>
          <p className="text-slate-400 font-mono text-sm">
            Last Updated: {lastUpdated}
          </p>
        </header>

        <article className="prose prose-invert prose-cyan max-w-none text-slate-300 font-light leading-relaxed space-y-10">
          <section>
            <p className="text-lg">
              At <strong className="text-white">Open Stacked</strong>{" "}
              (accessible from{" "}
              <a
                href="https://openstacked.com"
                className="text-cyan-400 hover:underline"
              >
                openstacked.com
              </a>
              ), the privacy of our visitors and clients is one of our main
              priorities. This Privacy Policy outlines the types of information
              collected and how we use it to deliver our web engineering, cloud
              infrastructure, and IT solutions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500 text-lg">/ 01.</span> Information
              Collection
            </h2>
            <p>
              Open Stacked collects user and device data to continuously improve
              our services. All data is gathered transparently and used
              exclusively for legitimate business purposes. The personal
              information requested and the reasons for its collection will be
              made clear to you at the point of request.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500 text-lg">/ 02.</span> Use of
              Information
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-400 marker:text-cyan-500">
              <li>
                To provide, operate, and maintain our enterprise services.
              </li>
              <li>To improve and expand our digital infrastructure.</li>
              <li>
                To understand user behavior and optimize UI/UX performance.
              </li>
              <li>To develop new technical features and products.</li>
              <li>
                To communicate for updates, marketing, and customer support.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500 text-lg">/ 03.</span> Log Files &
              Cookies
            </h2>
            <p className="mb-4">
              We follow standard log file procedures. These logs capture IP
              addresses, browser types, ISPs, timestamps, and referring pages
              for trend analysis.
            </p>
            <p>
              We utilize &quot;cookies&quot; to enhance navigation, remember
              user preferences, and deliver a consistently seamless browsing
              experience based on your interaction with our platforms.
            </p>
          </section>

          <section className="p-6 bg-white/5 border border-cyan-500/20 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500 text-lg">/ 04.</span> Advertising
              Partners & DART Cookie
            </h2>
            <p className="mb-4">
              Google is a third-party vendor on our site. It uses DART cookies
              to serve ads based on your visit to Open Stacked and other sites.
              You can opt out via the Google ad network Privacy Policy:{" "}
              <a
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                https://policies.google.com/technologies/ads
              </a>
            </p>
            <p className="text-sm italic">
              Note: Other third-party ad networks may also use cookies or web
              beacons. Open Stacked has no access to or control over cookies
              used by third-party advertisers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500 text-lg">/ 05.</span> Data Security
            </h2>
            <p>
              Open Stacked enforces enterprise-grade security. Multi-layered
              encryption and continuous monitoring protect your data against
              unauthorized access at all times. We do not sell or distribute
              personal data unless legally mandated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500 text-lg">/ 06.</span> User Rights
              (GDPR & CCPA)
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-400 marker:text-cyan-500">
              <li>
                <strong className="text-white">Access:</strong> Request copies
                of your personal data.
              </li>
              <li>
                <strong className="text-white">Rectification:</strong> Request
                correction of inaccurate information.
              </li>
              <li>
                <strong className="text-white">Erasure:</strong> Request data
                deletion under specific conditions.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500 text-lg">/ 07.</span>{" "}
              Children&apos;s Information
            </h2>
            <p>
              We do not knowingly collect Personal Identifiable Information from
              children under 13. If you believe your child provided such
              information, contact us immediately for its removal.
            </p>
          </section>

          <section className="bg-cyan-500/5 p-6 rounded-xl border border-white/5">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500 text-lg">/ 08.</span> Consent
            </h2>
            <p>
              By using our website, you hereby consent to our Privacy Policy and
              agree to its terms and conditions.
            </p>
          </section>

          <section className="border-t border-white/10 pt-10 mt-10">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500 text-lg">/ 09.</span> Contact Us
            </h2>
            <p>
              For any privacy-related inquiries, contact our administrative team
              at:
            </p>
            <a
              href="mailto:privacy@openstacked.com"
              className="inline-block mt-4 px-6 py-3 bg-white text-black font-bold text-sm rounded-lg hover:bg-cyan-400 transition-colors"
            >
              privacy@openstacked.com
            </a>
          </section>
        </article>
      </div>
    </main>
  );
}

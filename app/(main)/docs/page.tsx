// app/docs/page.tsx
import DocsSidebar from "@/components/docs/DocsSidebar";
import DocsContent from "@/components/docs/DocsContent";

export const metadata = {
  title: "Documentation | Open Stacked",
  description:
    "Technical specifications and execution framework for Open Stacked engineered solutions.",
};

export default function DocsPage() {
  // Real-world scenario mein ye data aap CMS ya Markdown files se fetch karenge
  const docSections = [
    {
      id: "architecture",
      title: "Core Architecture",
      content:
        "Open Stacked uses a modular microservices approach. Our stacks are built on Next.js 14+ with specialized focus on ISR (Incremental Static Regeneration) for maximum performance.",
    },
    {
      id: "deployment",
      title: "Deployment Pipeline",
      content:
        "We utilize AWS EC2 for compute and S3 for static assets. Our CI/CD pipeline ensures that every commit is tested before reaching the production cluster.",
    },
    {
      id: "security",
      title: "Security Protocols",
      content:
        "All ecosystems are hardened with AES-256 encryption at rest and TLS 1.3 in transit. We implement rate limiting at the Nginx level to prevent DDoS attacks.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-slate-300 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Sidebar - Desktop */}
        <aside className="hidden lg:block lg:col-span-3 h-fit sticky top-32">
          <DocsSidebar sections={docSections} />
        </aside>

        {/* Main Content */}
        <section className="lg:col-span-9">
          <div className="max-w-3xl">
            <span className="text-cyan-500 font-mono text-[10px] tracking-[0.5em] uppercase">
              &#47;&#47; Technical Manual v1.0
            </span>
            <h1 className="text-5xl font-black text-white mt-4 mb-8 tracking-tighter">
              SYSTEM <span className="text-cyan-500">DOCS</span>
            </h1>

            <DocsContent sections={docSections} />
          </div>
        </section>
      </div>
    </main>
  );
}

"use client";
import { Terminal } from "lucide-react";
interface DocSection {
  id: string;
  title: string;
  content: string;
}

export default function DocsContent({ sections }: { sections: DocSection[] }) {
  return (
    <div className="space-y-20">
      {sections.map((section) => (
        <div key={section.id} id={section.id} className="scroll-mt-32">
          <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-3">
            <span className="text-cyan-500 font-mono text-sm">#</span>{" "}
            {section.title}
          </h2>
          <p className="text-slate-600 leading-relaxed text-lg mb-6">
            {section.content}
          </p>

          {/* Example Code Block / Terminal Look */}
          <div className="bg-slate-50 border border-slate-200 rounded-lg overflow-hidden shadow-lg">
            <div className="bg-slate-100 px-4 py-2 border-b border-slate-200 flex justify-between items-center">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
              </div>
              <Terminal size={14} className="text-slate-500" />
            </div>
            <pre className="p-6 font-mono text-sm text-slate-800 overflow-x-auto">
              <code>{`// Initialize Open Stacked Ecosystem
const system = new OpenStacked({
  cluster: "Lahore-HQ",
  encryption: "AES-256",
  autoScale: true
});

await system.deploy();`}</code>
            </pre>
          </div>
        </div>
      ))}
    </div>
  );
}
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
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="text-cyan-500 font-mono text-sm">#</span>{" "}
            {section.title}
          </h2>
          <p className="text-slate-400 leading-relaxed text-lg mb-6">
            {section.content}
          </p>

          {/* Example Code Block / Terminal Look */}
          <div className="bg-black border border-white/10 rounded-lg overflow-hidden shadow-2xl">
            <div className="bg-white/5 px-4 py-2 border-b border-white/5 flex justify-between items-center">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              </div>
              <Terminal size={14} className="text-slate-500" />
            </div>
            <pre className="p-6 font-mono text-sm text-cyan-300/80 overflow-x-auto">
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

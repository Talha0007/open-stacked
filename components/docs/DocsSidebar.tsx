"use client";
import { Hash } from "lucide-react";

interface DocSection {
  id: string;
  title: string;
  content: string;
}

export default function DocsSidebar({ sections }: { sections: DocSection[] }) {
  return (
    <nav className="space-y-1 border-l border-white/5 pl-4">
      <p className="text-white text-xs font-bold uppercase tracking-widest mb-6">
        Introduction
      </p>
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className="flex items-center gap-2 py-2 text-sm hover:text-cyan-400 transition-colors group"
        >
          <Hash
            size={14}
            className="text-slate-600 group-hover:text-cyan-500"
          />
          {section.title}
        </a>
      ))}
    </nav>
  );
}

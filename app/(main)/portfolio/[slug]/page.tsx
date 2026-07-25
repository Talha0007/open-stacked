import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Globe, Layers } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function SingleProjectPage({ params }: PageProps) {
  const { slug } = await params;
  
  // Find project by slug
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="relative min-h-dvh w-full text-slate-900 px-4 sm:px-6 md:px-12 xl:px-20 pt-28 pb-24 max-w-6xl mx-auto">
      {/* Back Button */}
      <Link 
        href="/portfolio" 
        className="mt-24 inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-600 hover:text-cyan-600 uppercase tracking-widest mb-8 transition-colors"
      >
        <ArrowLeft size={16} /> Back to Portfolio
      </Link>

      {/* Header Info */}
      <div className="space-y-4 mb-10">
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3.5 py-1 rounded-full bg-slate-900 text-white text-[10px] font-mono font-bold uppercase tracking-widest">
            {project.category}
          </span>
          {project.client && (
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200 text-[10px] font-mono font-semibold uppercase tracking-wider">
              Client: {project.client}
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 leading-tight">
          {project.title}
        </h1>
      </div>

      {/* Hero Image */}
      <div className="relative w-full h-[300px] sm:h-[450px] md:h-[550px] rounded-[2rem] overflow-hidden border border-slate-200 shadow-xl mb-12">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Details (2 cols) */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-bold text-slate-900 uppercase tracking-wide">Overview & Architecture</h2>
          <p className="text-slate-600 leading-relaxed font-light whitespace-pre-line text-base sm:text-lg">
            {project.fullDetails}
          </p>
        </div>

        {/* Sidebar Info (1 col) */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-6 h-fit">
          <div>
            <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <Layers size={14} className="text-cyan-600" /> Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-mono font-semibold text-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.liveUrl && (
            <div className="pt-4 border-t border-slate-200">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-[#2e3192] text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors"
              >
                <Globe size={15} /> Visit Live Project <ExternalLink size={14} />
              </a>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
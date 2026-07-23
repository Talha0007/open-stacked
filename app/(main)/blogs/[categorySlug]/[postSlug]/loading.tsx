export default function Loading() {
  return (
    <div className="min-h-screen bg-white text-slate-500 py-32 px-6 animate-pulse">
      <div className="max-w-6xl mx-auto">
        {/* Skeleton Badge */}
        <div className="h-4 w-24 bg-slate-200 rounded mb-8" />

        {/* Skeleton Title */}
        <div className="space-y-4 mb-10">
          <div className="h-14 bg-slate-200 rounded-xl w-full" />
          <div className="h-14 bg-slate-200 rounded-xl w-3/4" />
        </div>

        {/* Skeleton Author Bar */}
        <div className="flex items-center gap-4 mb-16 pb-10 border-b border-slate-200">
          <div className="w-10 h-10 rounded-full bg-slate-200" />
          <div className="space-y-2">
            <div className="h-4 w-32 bg-slate-200 rounded" />
            <div className="h-3 w-24 bg-slate-200 rounded" />
          </div>
        </div>

        {/* Skeleton Content Paragraphs */}
        <div className="space-y-6">
          <div className="h-4 bg-slate-200 rounded w-full" />
          <div className="h-4 bg-slate-200 rounded w-full" />
          <div className="h-4 bg-slate-200 rounded w-5/6" />

          {/* Skeleton Image Block */}
          <div className="h-64 bg-slate-200 rounded-2xl my-10" />

          <div className="h-4 bg-slate-200 rounded w-full" />
          <div className="h-4 bg-slate-200 rounded w-4/5" />
        </div>
      </div>
    </div>
  );
}
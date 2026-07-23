export default function BlogArchiveLoading() {
  return (
    <div className="min-h-screen bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="h-20 w-64 bg-slate-200 rounded-xl mb-20 animate-pulse" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="aspect-video bg-slate-200 rounded-xl mb-6" />
              <div className="h-4 w-32 bg-slate-200 rounded mb-4" />
              <div className="h-6 w-full bg-slate-200 rounded mb-3" />
              <div className="h-4 w-2/3 bg-slate-200 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
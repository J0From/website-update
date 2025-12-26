export default function Loading() {
  return (
    <div className="min-h-screen bg-white animate-pulse">
      {/* Navigation Skeleton */}
      <nav className="flex justify-between items-center p-4 sm:p-6 max-w-7xl mx-auto">
        <div className="h-8 w-24 bg-slate-200 rounded"></div>
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="h-10 w-20 bg-slate-200 rounded"></div>
          <div className="h-10 w-32 bg-slate-200 rounded"></div>
        </div>
      </nav>

      {/* Hero Section Skeleton */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="h-16 sm:h-20 bg-slate-200 rounded max-w-2xl mx-auto mb-6"></div>
            <div className="h-8 bg-slate-200 rounded max-w-3xl mx-auto mb-12"></div>
            <div className="flex gap-4 justify-center">
              <div className="h-14 w-48 bg-slate-200 rounded"></div>
              <div className="h-14 w-48 bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections Skeleton */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="h-12 bg-slate-200 rounded max-w-md mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="h-64 bg-slate-200 rounded-lg"></div>
            <div className="h-64 bg-slate-200 rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Framework Section Skeleton */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="h-12 bg-slate-200 rounded max-w-md mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="h-48 bg-slate-200 rounded-lg"></div>
            <div className="h-48 bg-slate-200 rounded-lg"></div>
            <div className="h-48 bg-slate-200 rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Department Features Grid Skeleton */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="h-12 bg-slate-200 rounded max-w-md mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-64 bg-slate-200 rounded-lg"></div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Skeleton */}
      <footer className="bg-slate-900 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="h-32 bg-slate-800 rounded"></div>
            <div className="h-32 bg-slate-800 rounded"></div>
            <div className="h-32 bg-slate-800 rounded"></div>
            <div className="h-32 bg-slate-800 rounded"></div>
          </div>
        </div>
      </footer>
    </div>
  )
}

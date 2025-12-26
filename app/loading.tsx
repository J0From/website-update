export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 animate-pulse">
      {/* Navigation Skeleton */}
      <nav className="flex justify-between items-center p-4 sm:p-6 max-w-6xl mx-auto">
        <div className="h-8 w-24 bg-slate-200 rounded"></div>
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="h-10 w-20 bg-slate-200 rounded"></div>
          <div className="h-10 w-24 bg-slate-200 rounded"></div>
        </div>
      </nav>

      {/* Hero Section Skeleton */}
      <div className="flex flex-col items-center justify-center min-h-[60vh] sm:min-h-[70vh] px-4 sm:px-6">
        <div className="text-center max-w-6xl mx-auto w-full">
          <div className="mb-8 sm:mb-12 md:mb-16">
            <div className="h-16 sm:h-20 md:h-24 bg-slate-200 rounded max-w-4xl mx-auto mb-4"></div>
            <div className="h-16 sm:h-20 md:h-24 bg-slate-200 rounded max-w-2xl mx-auto"></div>
          </div>
          <div className="h-12 w-32 bg-slate-200 rounded mx-auto"></div>
        </div>
      </div>

      {/* Man + Machine Section Skeleton */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-12 sm:py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="p-6 sm:p-8 md:p-12 lg:p-16">
            <div className="h-12 sm:h-16 bg-white/20 rounded max-w-4xl"></div>
          </div>
        </div>
      </section>

      {/* CTA Buttons Section Skeleton */}
      <section className="pt-8 sm:pt-12 md:pt-16 pb-4 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex gap-4 justify-center">
            <div className="h-14 w-40 bg-slate-200 rounded"></div>
            <div className="h-14 w-40 bg-slate-200 rounded"></div>
          </div>
        </div>
      </section>

      {/* Framework Section Skeleton */}
      <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="h-12 bg-slate-200 rounded max-w-md mx-auto mb-8"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="h-48 bg-slate-200 rounded-lg"></div>
            <div className="h-48 bg-slate-200 rounded-lg"></div>
            <div className="h-48 bg-slate-200 rounded-lg"></div>
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

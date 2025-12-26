export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 animate-pulse">
      {/* Navigation Skeleton */}
      <nav className="flex justify-between items-center p-6 max-w-4xl mx-auto">
        <div className="h-8 w-24 bg-slate-200 rounded"></div>
      </nav>

      {/* Main Content Skeleton */}
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-6">
        <div className="w-full max-w-lg mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-12">
            <div className="flex flex-col items-center space-y-6">
              {/* Success Icon Skeleton */}
              <div className="w-20 h-20 bg-slate-200 rounded-full"></div>

              {/* Text Skeleton */}
              <div className="space-y-3 w-full">
                <div className="h-10 bg-slate-200 rounded max-w-xs mx-auto"></div>
                <div className="h-6 bg-slate-200 rounded max-w-md mx-auto"></div>
              </div>

              {/* Button Skeleton */}
              <div className="w-full">
                <div className="h-12 bg-slate-200 rounded w-full"></div>
                <div className="h-4 bg-slate-200 rounded max-w-xs mx-auto mt-4"></div>
              </div>

              {/* Social Icons Skeleton */}
              <div className="border-t pt-6 w-full">
                <div className="flex justify-center gap-4">
                  <div className="w-12 h-12 bg-slate-200 rounded-full"></div>
                  <div className="w-12 h-12 bg-slate-200 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Message Skeleton */}
          <div className="mt-8 text-center">
            <div className="h-4 bg-slate-200 rounded max-w-sm mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"

export function BenefitsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
              Proven Results
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 text-balance">Enterprise Benefits</h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Jo delivers measurable ROI across your organization with quantifiable impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-2 border-slate-200 shadow-lg bg-white hover:shadow-xl hover:border-blue-300 transition-all duration-300 group">
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-4">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  70%
                </div>
                <TrendingUp className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Reduction in Manual Tasks</h3>
              <p className="text-slate-600 leading-relaxed">
                Streamline routine workflows across departments, freeing up valuable employee time for strategic
                initiatives.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-slate-200 shadow-lg bg-white hover:shadow-xl hover:border-blue-300 transition-all duration-300 group">
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-4">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  85%
                </div>
                <TrendingUp className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Faster Process Completion</h3>
              <p className="text-slate-600 leading-relaxed">
                Accelerate workflows with 24/7 Human + Machine collaboration that eliminates bottlenecks and reduces wait times.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-slate-200 shadow-lg bg-white hover:shadow-xl hover:border-blue-300 transition-all duration-300 group">
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-4">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  30%
                </div>
                <TrendingUp className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Cost Reduction</h3>
              <p className="text-slate-600 leading-relaxed">
                Lower operational costs through efficient resource allocation and reduced error rates.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-slate-200 shadow-lg bg-white hover:shadow-xl hover:border-blue-300 transition-all duration-300 group">
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-4">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  99.9%
                </div>
                <TrendingUp className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Compliance Accuracy</h3>
              <p className="text-slate-600 leading-relaxed">
                Ensure consistent adherence to policies and regulations with continuous compliance checks.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-slate-200 shadow-lg bg-white hover:shadow-xl hover:border-blue-300 transition-all duration-300 group">
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-4">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  40%
                </div>
                <TrendingUp className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Improved Employee Satisfaction</h3>
              <p className="text-slate-600 leading-relaxed">
                Boost morale by eliminating tedious tasks and allowing employees to focus on meaningful work.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-slate-200 shadow-lg bg-white hover:shadow-xl hover:border-blue-300 transition-all duration-300 group">
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-4">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  60%
                </div>
                <TrendingUp className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Faster Time-to-Value</h3>
              <p className="text-slate-600 leading-relaxed">
                Implement and see results in weeks, not months, with pre-built workflows and integrations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

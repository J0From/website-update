import { Shield, Lock, Users, Building, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function IndustryWorkflowsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Industry-Specific</h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Pre-built workflows designed for the unique requirements of regulated industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-slate-200 hover:border-blue-400 group">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h4 className="font-bold text-xl text-slate-900 mb-3 text-center">Compliance Documentation</h4>
            <p className="text-sm text-slate-600 text-center leading-relaxed">
              Streamlined generation of regulatory filings, audit documentation, and compliance reports
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-slate-200 hover:border-blue-400 group">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Lock className="h-8 w-8 text-purple-600" />
            </div>
            <h4 className="font-bold text-xl text-slate-900 mb-3 text-center">Data Governance</h4>
            <p className="text-sm text-slate-600 text-center leading-relaxed">
              Smart data classification, retention policies, and privacy controls
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-slate-200 hover:border-blue-400 group">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users className="h-8 w-8 text-indigo-600" />
            </div>
            <h4 className="font-bold text-xl text-slate-900 mb-3 text-center">Risk Management</h4>
            <p className="text-sm text-slate-600 text-center leading-relaxed">
              Continuous monitoring, risk assessment, and intelligent incident response
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-slate-200 hover:border-blue-400 group">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Building className="h-8 w-8 text-cyan-600" />
            </div>
            <h4 className="font-bold text-xl text-slate-900 mb-3 text-center">Regulatory Reporting</h4>
            <p className="text-sm text-slate-600 text-center leading-relaxed">
              Streamlined preparation and submission of required regulatory reports
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button
            asChild
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 text-lg px-8 h-12"
          >
            <Link href="/solutions/smb/purchase">
              Explore Workflows
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

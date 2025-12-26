import { Check, Lock, Users, Shield } from "lucide-react"

export function SecuritySection() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-sm font-semibold text-blue-200">
              Security & Compliance
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Enterprise-Grade Security</h2>
          <p className="text-xl text-slate-300 leading-relaxed whitespace-nowrap">
            Jo meets the most stringent security and compliance requirements for enterprise organizations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 backdrop-blur p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-600/20 rounded-lg">
                <Lock className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold">Data Security</h3>
            </div>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>SOC 2 Type II certified</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>End-to-end encryption</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Private cloud deployment options</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Regular penetration testing</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-800/50 backdrop-blur p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-600/20 rounded-lg">
                <Users className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold">Access Controls</h3>
            </div>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>SSO with Okta, Azure AD, Google</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Role-based access controls</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Multi-factor authentication</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Detailed access logging</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-800/50 backdrop-blur p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-600/20 rounded-lg">
                <Shield className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold">Compliance</h3>
            </div>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>GDPR compliant</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>HIPAA ready</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>CCPA compliant</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>ISO 27001 certified</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

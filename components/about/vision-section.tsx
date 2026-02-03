import { Card, CardContent } from "@/components/ui/card"

export function VisionSection() {
  const departmentAgents = [
    { name: "Finance", icon: "💰", description: "Cash flow, forecasting, and financial reporting" },
    { name: "HR", icon: "👥", description: "Recruiting, onboarding, and employee management" },
    { name: "Accounting", icon: "📊", description: "Bookkeeping, reconciliation, and compliance" },
    { name: "IT", icon: "💻", description: "Help desk, security, and asset management" },
    { name: "Support", icon: "🎧", description: "Customer service and ticket management" },
    { name: "Marketing", icon: "📈", description: "Campaigns, content, and analytics" },
    { name: "Operations", icon: "⚙️", description: "Workflows, SOPs, and process optimization" },
    { name: "Sales", icon: "💼", description: "Lead management, pipeline, and forecasting" },
  ]

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
          Workforce Augmentation for Every Business
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Mission Statement</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              To empower businesses by building specialized digital coworkers that handle routine operational work,
              freeing human employees to focus on creativity, judgment, and strategic thinking.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Vision Statement</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              To become the global standard for intelligent business operations—recognized worldwide as the platform
              that fundamentally transforms how work gets done by seamlessly blending human expertise with machine
              capability.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 sm:p-12 mb-20 shadow-sm">
          <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-2 text-lg">1. Augmentation Over Replacement</h4>
              <p className="text-gray-700 leading-relaxed">
                We build tools that amplify human potential, not diminish it. Our digital specialists work alongside
                employees as trusted teammates, handling repetitive tasks so people can focus on what people do best.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2 text-lg">2. Specialization Through Depth</h4>
              <p className="text-gray-700 leading-relaxed">
                We reject one-size-fits-all solutions. Every digital coworker we create possesses deep domain expertise
                for specific roles and industries, delivering an experience that feels custom-built without the custom
                price tag.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2 text-lg">3. Process Before Technology</h4>
              <p className="text-gray-700 leading-relaxed">
                We automate good processes, not broken ones. Through our Discover → Design → Deploy framework, we ensure
                every implementation improves workflows first, then scales them with precision.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2 text-lg">4. Trust Through Transparency</h4>
              <p className="text-gray-700 leading-relaxed">
                We earn confidence by showing our work. From measurable ROI tracking to clear role definitions, we make
                our impact visible and our operations understandable.
              </p>
            </div>
            <div className="md:col-span-2 md:max-w-2xl md:mx-auto">
              <h4 className="font-bold text-gray-900 mb-2 text-lg">5. Democratized Excellence</h4>
              <p className="text-gray-700 leading-relaxed">
                Powerful operational capabilities shouldn't be reserved for enterprises alone. We make sophisticated
                business intelligence accessible to organizations of every size, from solopreneurs to global
                corporations.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">Our Digital Specialists</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {departmentAgents.map((agent) => (
              <Card key={agent.name} className="hover:shadow-lg transition-shadow border-2 hover:border-blue-200">
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="text-5xl mb-3 mx-auto">{agent.icon}</div>
                  <h4 className="font-bold text-gray-900 mb-1 text-sm text-center">{agent.name}</h4>
                  <p className="text-xs text-gray-600 text-center">{agent.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

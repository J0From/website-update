"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Check, Users, Zap, Target, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/footer"

export function AboutPageClient() {
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

  const frameworkSteps = [
    {
      number: 1,
      title: "Discover",
      description:
        "We first map how work is actually getting done in your organization to identify bottlenecks and inefficiencies.",
      icon: Target,
    },
    {
      number: 2,
      title: "Design",
      description:
        "Next, we optimize your workflows and strategically distribute tasks between your team and Jo's digital specialists for maximum efficiency.",
      icon: Users,
    },
    {
      number: 3,
      title: "Deploy",
      description:
        "Finally, we deploy Jo as an intelligent collaborator, continuously monitoring performance and feeding insights back into the system to ensure ongoing improvement.",
      icon: TrendingUp,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/qubit.png" alt="Jo Logo" width={32} height={32} className="w-8 h-8" />
            <span className="text-xl font-bold text-gray-900">Jo</span>
          </Link>
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Human <span className="text-blue-600">+</span> Machine
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We're building the future of work
          </p>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
            Workforce Augmentation for Every Business
          </h2>

          {/* Mission and Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">Mission Statement</h3>
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                To empower businesses by building specialized digital coworkers that handle routine operational work,
                freeing human employees to focus on creativity, judgment, and strategic thinking.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">Vision Statement</h3>
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                To become the global standard for intelligent business operations—recognized worldwide as the platform
                that fundamentally transforms how work gets done by seamlessly blending human expertise with machine
                capability.
              </p>
            </div>
          </div>

          {/* Core Values and Department Agents */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Core Values */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Core Values</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-center">Augmentation Over Replacement</h4>
                  <p className="text-gray-700 leading-relaxed text-center">
                    We build tools that amplify human potential, not diminish it. Our digital specialists work alongside
                    employees as trusted teammates, handling repetitive tasks so people can focus on what people do
                    best.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-center">Specialization Through Depth</h4>
                  <p className="text-gray-700 leading-relaxed text-center">
                    We reject one-size-fits-all solutions. Every digital coworker we create possesses deep domain
                    expertise for specific roles and industries, delivering an experience that feels custom-built
                    without the custom price tag.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-center">Process Before Technology</h4>
                  <p className="text-gray-700 leading-relaxed text-center">
                    We automate good processes, not broken ones. Through our Discover → Design → Deploy framework, we
                    ensure every implementation improves workflows first, then scales them with precision.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-center">Trust Through Transparency</h4>
                  <p className="text-gray-700 leading-relaxed text-center">
                    We earn confidence by showing our work. From measurable ROI tracking to clear role definitions, we
                    make our impact visible and our operations understandable.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-center">Democratized Excellence</h4>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Powerful operational capabilities shouldn't be reserved for enterprises alone. We make sophisticated
                    business intelligence accessible to organizations of every size, from solopreneurs to global
                    corporations.
                  </p>
                </div>
              </div>
            </div>

            {/* Department Agents Grid */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Digital Specialists</h3>
              <div className="grid grid-cols-2 gap-4">
                {departmentAgents.map((agent) => (
                  <Card key={agent.name} className="hover:shadow-lg transition-shadow border-2 hover:border-blue-200">
                    <CardContent className="p-4">
                      <div className="text-3xl mb-2">{agent.icon}</div>
                      <h4 className="font-bold text-gray-900 mb-1 text-sm">{agent.name}</h4>
                      <p className="text-xs text-gray-600">{agent.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">
            A Blueprint for Optimized Augmentation
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Our proprietary framework ensures your organization achieves the perfect balance between human expertise and
            machine efficiency
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {frameworkSteps.map((step) => (
              <Card
                key={step.number}
                className="relative overflow-hidden border-2 hover:border-blue-200 transition-all hover:shadow-xl"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-10 translate-x-10 opacity-50"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6">
                    {step.number}
                  </div>
                  <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <step.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Strategy Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
            Tailored Solutions for Every Scale
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Enterprise Card */}
            <Card className="border-2 hover:border-blue-200 transition-all hover:shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-lg bg-blue-600 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Enterprise</h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  For large organizations, we deploy comprehensive digital workforce solutions that integrate seamlessly
                  with existing systems and scale across departments.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Custom workflow integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Dedicated implementation team</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Advanced analytics and reporting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Priority support and training</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* SMB Card */}
            <Card className="border-2 hover:border-purple-200 transition-all hover:shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-lg bg-purple-600 flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Small & Medium Business</h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  For growing businesses, we provide ready-to-deploy digital specialists that deliver enterprise-grade
                  capabilities at accessible price points.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Quick setup and onboarding</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Pre-configured department agents</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Flexible pricing and scaling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Self-service resources</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Join Us on the Journey</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">There's a place for you in this transformation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/enterprise">
              <Button variant="secondary" className="w-full sm:w-auto">
                Explore Enterprise Solutions
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

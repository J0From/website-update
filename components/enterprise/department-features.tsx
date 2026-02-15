"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DepartmentFeaturesSection() {
  const enterpriseFeatures = [
    {
      name: "Finance",
      icon: "💰",
      features: [
        "Smart invoice reconciliation with SAP/Oracle integration",
        "Multi-entity financial consolidation and reporting",
        "Compliance-ready audit trail documentation",
        "Smart expense policy enforcement",
        "Budget variance analysis with actionable insights",
      ],
    },
    {
      name: "HR",
      icon: "👥",
      features: [
        "Intelligent shift scheduling across multiple locations",
        "Streamlined compliance documentation by jurisdiction",
        "Employee onboarding workflow management",
        "Performance review data aggregation and analysis",
        "Policy management with regulatory updates",
      ],
    },
    {
      name: "Sales",
      icon: "💼",
      features: [
        "Multi-channel sales pipeline management",
        "Territory optimization with data-driven insights",
        "Smart proposal generation with approval workflows",
        "Contract lifecycle management with version control",
        "Sales performance analytics with coaching recommendations",
      ],
    },
    {
      name: "Operations",
      icon: "⚙️",
      features: [
        "Cross-departmental workflow orchestration",
        "Process documentation and SOP management",
        "Supply chain optimization and inventory forecasting",
        "Vendor performance tracking and management",
        "Operational risk assessment and mitigation",
      ],
    },
    {
      name: "Marketing",
      icon: "📈",
      features: [
        "Multi-channel campaign orchestration and tracking",
        "Content approval workflows with brand compliance",
        "Marketing asset management and version control",
        "Streamlined performance reporting across channels",
        "Competitor intelligence gathering and analysis",
      ],
    },
    {
      name: "IT",
      icon: "💻",
      features: [
        "Help desk ticketing with intelligent routing",
        "IT asset lifecycle management and tracking",
        "Security compliance documentation and reporting",
        "System access provisioning and deprovisioning",
        "Change management workflow orchestration",
      ],
    },
    {
      name: "Customer Support",
      icon: "🎧",
      features: [
        "Omni-channel support ticket management",
        "Knowledge base creation and maintenance",
        "SLA tracking and escalation management",
        "Customer satisfaction analysis and reporting",
        "Support team performance analytics",
      ],
    },
    {
      name: "Legal",
      icon: "⚖️",
      features: [
        "Contract review and approval workflows",
        "Legal hold and discovery process management",
        "Compliance monitoring and documentation",
        "Policy distribution and attestation tracking",
        "Regulatory update monitoring and implementation",
      ],
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Collaboration Across Departments</h2>
          <p className="text-lg text-gray-600">
            Jo enables seamless Human + Machine workflows across every department, where Jo from handles structured
            tasks while people focus on strategy, creativity, and relationships
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 auto-rows-fr">
          {enterpriseFeatures.map((department) => (
            <Card
              key={department.name}
              className="hover:shadow-lg transition-shadow border-2 hover:border-blue-200 flex flex-col"
            >
              <CardContent className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-2xl">{department.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">{department.name}</h3>
                </div>

                <div className="space-y-3 flex-1">
                  {department.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={() => window.open("https://calendly.com/myj0/30min", "_blank")}
                  variant="outline"
                  className="mt-6 w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  Book Demo
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

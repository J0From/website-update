import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function IntegrationsSection() {
  const integrations = [
    // Food & Beverage
    {
      name: "Infor CloudSuite F&B",
      industry: "Food & Beverage",
      popular: true,
      logo: "infor-logo-enterprise-software",
    },
    { name: "Aptean Food & Beverage", industry: "Food & Beverage", logo: "aptean-logo-food-beverage-erp" },
    { name: "NetSuite (Food Edition)", industry: "Food & Beverage", logo: "netsuite-oracle-logo" },
    { name: "BatchMaster", industry: "Food & Beverage", logo: "batchmaster-erp-logo" },
    { name: "Cority", industry: "Food & Beverage", logo: "cority-ehs-software-logo" },
    // Healthcare & Life Sciences
    { name: "Epic", industry: "Healthcare & Life Sciences", popular: true, logo: "epic-systems-healthcare-logo" },
    { name: "Cerner (Oracle Health)", industry: "Healthcare & Life Sciences", logo: "cerner-oracle-health-logo" },
    { name: "Infor Cloverleaf", industry: "Healthcare & Life Sciences", logo: "infor-cloverleaf-integration-logo" },
    { name: "Veeva Systems", industry: "Healthcare & Life Sciences", logo: "veeva-systems-life-sciences-logo" },
    { name: "Workday Healthcare", industry: "Healthcare & Life Sciences", logo: "workday-logo-enterprise-software" },
    // Energy & Utilities
    { name: "Oracle Utilities", industry: "Energy & Utilities", popular: true, logo: "oracle-utilities-energy-logo" },
    { name: "IFS Cloud", industry: "Energy & Utilities", logo: "ifs-cloud-erp-logo" },
    { name: "SAP S/4HANA for Energy", industry: "Energy & Utilities", logo: "sap-s4hana-energy-utilities-logo" },
    { name: "Enablon", industry: "Energy & Utilities", logo: "enablon-ehs-sustainability-logo" },
    { name: "GE Vernova", industry: "Energy & Utilities", logo: "ge-vernova-energy-logo" },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 text-sm px-4 py-1">
            Industry-Specific Integrations
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4 text-balance">Built for Your Stack</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {integrations.map((integration) => (
            <Card
              key={integration.name}
              className="border-2 hover:shadow-lg transition-all hover:border-blue-200 relative group"
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                {integration.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 text-xs px-3 py-1 whitespace-nowrap">
                    MOST POPULAR
                  </Badge>
                )}
                <div className="w-20 h-20 mb-4 relative rounded-lg overflow-hidden bg-white border border-gray-200 flex items-center justify-center p-2">
                  <Image
                    src={`/.jpg?height=80&width=80&query=${encodeURIComponent(integration.logo)}`}
                    alt={`${integration.name} logo`}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <h4 className="font-semibold text-gray-900 text-sm leading-tight group-hover:text-blue-600 transition-colors mb-1">
                  {integration.name}
                </h4>
                <p className="text-xs text-gray-500">{integration.industry}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Don't see your system? We build custom integrations for enterprise customers.
          </p>
          <a
            href="/company/contact"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
          >
            Contact our integration team →
          </a>
        </div>
      </div>
    </section>
  )
}

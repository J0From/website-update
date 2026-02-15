import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ClipboardCheck, Microscope, Lock } from "lucide-react"
import Link from "next/link"

export function RegulatedIndustriesSection() {
  const healthcareUnits = [
    {
      name: "Jo from Quality",
      role: "Quality",
      icon: ClipboardCheck,
      features: [
        "Real-time quality monitoring dashboards",
        "Streamlined compliance documentation",
        "Batch testing and validation tracking",
        "Quality event investigation workflows",
        "Supplier quality management",
      ],
    },
    {
      name: "Jo from Safety",
      role: "Safety",
      icon: Microscope,
      features: [
        "Biosafety level compliance monitoring",
        "Incident reporting and investigation",
        "Safety training and certification tracking",
        "Lab safety inspection management",
        "PPE and equipment verification",
      ],
    },
    {
      name: "Jo from Compliance",
      role: "Compliance",
      icon: Lock,
      features: [
        "HIPAA compliance monitoring and reporting",
        "Patient data access audit trails",
        "Regulatory submission management",
        "Policy and procedure version control",
        "Compliance training and attestation",
      ],
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex flex-col text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">Built for Highly Regulated Industries</h2>
            <p className="text-lg text-slate-600 leading-relaxed mt-4">
              Jo meets the stringent compliance, audit, and governance requirements of the most regulated sectors
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {healthcareUnits.map((unit) => (
            <Card
              key={unit.name}
              className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-blue-200 flex flex-col h-full"
            >
              <CardContent className="p-0 flex flex-col h-full text-center">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="text-3xl">
                    <unit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{unit.name}</h3>
                </div>

                <div className="inline-block px-3 py-1 bg-blue-100 rounded-full mb-6 mx-auto">
                  <span className="text-xs font-semibold text-blue-700 uppercase tracking-wide">{unit.role}</span>
                </div>

                <div className="space-y-3 mb-6 flex-grow">
                  {unit.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-center">
                      <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-6 bg-gradient-to-r from-blue-50 to-purple-50 -mx-6 px-6 -mb-6 pb-6 rounded-b-lg mt-auto">
                  <Button
                    asChild
                    variant="gradient"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  >
                    <Link href="/solutions/smb/purchase">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-20">
          <Button
            asChild
            variant="gradient"
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 text-lg px-8 h-12"
          >
            <Link href="/enterprise/whitepaper">Download Whitepaper</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

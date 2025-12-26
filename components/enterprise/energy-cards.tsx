import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wrench, HardHat, FileCheck } from "lucide-react"
import Link from "next/link"

export function EnergyCards() {
  const energyUnits = [
    {
      name: "Jo from Infrastructure",
      role: "Quality",
      icon: Wrench,
      features: [
        "Asset performance monitoring",
        "Maintenance quality verification",
        "Equipment testing and commissioning",
        "Infrastructure reliability tracking",
        "Quality assurance documentation",
      ],
    },
    {
      name: "Jo from Isolation",
      role: "Safety",
      icon: HardHat,
      features: [
        "Lock-out/tag-out management",
        "Safety work permit tracking",
        "Electrical safety compliance",
        "Incident investigation workflows",
        "Safety inspection and audit management",
      ],
    },
    {
      name: "Jo from Manifest",
      role: "Compliance",
      icon: FileCheck,
      features: [
        "NERC CIP compliance monitoring",
        "FERC regulatory reporting",
        "Environmental compliance tracking",
        "Energy audit management",
        "Regulatory documentation and records",
      ],
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {energyUnits.map((unit) => (
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
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  >
                    <Link href="/solutions/smb/purchase">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

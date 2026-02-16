import Image from "next/image"

export function IntegrationsSection() {
  const integrations = [
    { name: "Epic Systems", logo: "/logos/epic-systems.svg" },
    { name: "GE HealthCare", logo: "/logos/ge-healthcare.svg" },
    { name: "Solventum", logo: "/logos/solventum.png" },
    { name: "Siemens", logo: "/logos/siemens.svg" },
    { name: "SAP", logo: "/logos/sap.svg" },
    { name: "Schneider Electric", logo: "/logos/schneider-electric.svg" },
    { name: "Infor", logo: "/logos/infor.svg" },
    { name: "Veeva", logo: "/logos/veeva.png" },
    { name: "NetSuite", logo: "/logos/netsuite.png" },
    { name: "Wolters Kluwer", logo: "/logos/wolters-kluwer.svg" },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4 text-balance">Built for Your Stack</h2>
          <p className="text-lg text-gray-500">Connect with the tools your team already uses</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="bg-white border border-gray-100 rounded-xl p-6 flex items-center justify-center hover:shadow-lg hover:border-blue-200 transition-all group"
            >
              <div className="h-10 flex items-center justify-center">
                <Image
                  src={integration.logo}
                  alt={integration.name}
                  width={160}
                  height={48}
                  className="object-contain max-h-full grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%' }}
                />
              </div>
            </div>
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

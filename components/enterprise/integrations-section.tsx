import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function IntegrationsSection() {
  const integrations = [
    { name: "SAP", category: "ERP" },
    { name: "Workday", category: "HR" },
    { name: "Salesforce", category: "CRM" },
    { name: "MS Teams", category: "Collaboration" },
    { name: "ServiceNow", category: "ITSM" },
    { name: "Oracle", category: "ERP/Finance" },
    { name: "Jira", category: "Project Management" },
    { name: "Zendesk", category: "Customer Support" },
    { name: "Okta", category: "Identity" },
    { name: "Slack", category: "Collaboration" },
    { name: "Tableau", category: "Analytics" },
    { name: "DocuSign", category: "Document Management" },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Enterprise Integrations</h2>
          <p className="text-lg text-gray-600 mx-auto">
            Jo integrates securely with your existing enterprise applications
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
          {integrations.map((integration) => (
            <Card key={integration.name} className="border hover:shadow-md transition-shadow">
              <CardContent className="p-4 text-center">
                <h3 className="font-semibold text-gray-900">{integration.name}</h3>
                <p className="text-xs text-gray-500">{integration.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
            View All Integrations
          </Button>
        </div>
      </div>
    </section>
  )
}

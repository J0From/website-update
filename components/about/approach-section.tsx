import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, TrendingUp } from "lucide-react"

export function ApproachSection() {
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
        "Next, we optimize your workflows and strategically distribute tasks between your team and Jo from for maximum efficiency.",
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
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">
          A Blueprint for Human + Machine Balance
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
  )
}

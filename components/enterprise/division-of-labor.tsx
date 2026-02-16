import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Users, Zap } from "lucide-react"

export function DivisionOfLaborSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-balance">
            A Smarter Division of Labor
          </h2>
          <p className="text-lg text-gray-600 mb-8 text-pretty">
            The future of work isn&apos;t about replacing people—it&apos;s about optimizing the collaboration between{" "}
            <span className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Human + Machine</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="border-2 border-blue-100 hover:border-blue-600 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="h-14 w-14 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6 shadow-md">
                <Users className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">People Provide</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">Strategy and creative problem-solving</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">Relationship-building and communication</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">Adaptability and contextual judgment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">Innovation and complex decision-making</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-100 hover:border-purple-600 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="h-14 w-14 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6 shadow-md">
                <Zap className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Jo Performs</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">Structured, repeatable tasks</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">High-frequency data processing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">Consistency and speed at scale</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">24/7 operational continuity</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-pretty">
            Jo enables organizations to optimize <strong>Human + Machine</strong> collaboration with intelligent
            collaboration that <strong>amplifies human capabilities</strong> rather than replacing them.
          </p>
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, Lightbulb, Rocket } from "lucide-react"
import Link from "next/link"

export function FrameworkSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-balance">Our Framework</h2>
          <p className="text-lg text-gray-600 whitespace-nowrap">
            A proven three-phase approach to implementing Human + Machine collaboration in your organization
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Discovery Phase */}
          <Card className="border-2 border-blue-100 hover:border-blue-600 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6 mx-auto shadow-md">
                <Search className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-600">Discover the problem</p>
            </CardContent>
          </Card>

          {/* Design Phase */}
          <Card className="border-2 border-purple-100 hover:border-purple-600 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6 mx-auto shadow-md">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Design</h3>
              <p className="text-gray-600">Design the Fix</p>
            </CardContent>
          </Card>

          {/* Deploy Phase */}
          <Card className="border-2 border-indigo-100 hover:border-indigo-600 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center mb-6 mx-auto shadow-md">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Deploy</h3>
              <p className="text-gray-600">Deploy the Solution</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Link href="/solutions/smb">
            <Button variant="gradient" size="lg">
              Get Jo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

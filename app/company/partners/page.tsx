import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Check, Mail, Handshake, Users, Puzzle, Briefcase } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Partners | Jo - Build Together",
  description:
    "Partner with Jo to deliver cutting-edge Human + Machine solutions. Explore technology partnerships, reseller opportunities, and integration partnerships.",
}

export default function PartnersPage() {
  const partnershipTypes = [
    {
      icon: Puzzle,
      title: "Technology Partners",
      description: "Integrate your platform with Jo to create seamless workflows for mutual customers.",
      benefits: ["API access and documentation", "Co-marketing opportunities", "Technical support"],
    },
    {
      icon: Handshake,
      title: "Reseller Partners",
      description: "Expand your portfolio by offering Jo's Human + Machine solutions to your clients.",
      benefits: ["Competitive margins", "Sales enablement resources", "Dedicated partner success team"],
    },
    {
      icon: Briefcase,
      title: "Consulting Partners",
      description: "Help businesses implement and optimize Jo's platform as a certified implementation partner.",
      benefits: ["Certification program", "Lead referrals", "Implementation playbooks"],
    },
    {
      icon: Users,
      title: "Referral Partners",
      description: "Earn commissions by referring businesses that could benefit from Jo's collaboration platform.",
      benefits: ["Simple referral process", "Attractive commission structure", "No technical requirements"],
    },
  ]

  const partnerBenefits = [
    "Access to cutting-edge Human + Machine technology",
    "Dedicated partner success manager",
    "Co-marketing and co-selling opportunities",
    "Training and certification programs",
    "Early access to new features and products",
    "Partner portal with resources and tools",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 sm:p-6 max-w-6xl mx-auto">
        <Link href="/" className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center">
          <span className="md:hidden">Jo from</span>
          <span className="hidden md:inline">J</span>
          <div className="relative mx-1">
            <Image src="/qubit.png" alt="Qubit" width={16} height={16} className="sm:w-5 sm:h-5 brightness-0" />
            <div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 mix-blend-normal opacity-100"
              style={{
                maskImage: `url('/qubit.png')`,
                maskSize: "contain",
                maskRepeat: "no-repeat",
                maskPosition: "center",
                WebkitMaskImage: `url('/qubit.png')`,
                WebkitMaskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
              }}
            ></div>
          </div>
        </Link>
        <Link href="/">
          <Button variant="ghost" className="gap-1 sm:gap-2 text-sm sm:text-base px-2 sm:px-4">
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
            Back
          </Button>
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 animate-pulse opacity-50"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">Partner with Jo</h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 opacity-95 max-w-3xl mx-auto leading-relaxed">
            Join our ecosystem, unlock the power collaboration.
          </p>
        </div>
      </section>

      {/* Partnership Types Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">Partnership Opportunities</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <Card key={index} className="border-2 hover:border-blue-200 transition-all hover:shadow-xl">
                <CardContent className="p-8">
                  <type.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{type.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{type.description}</p>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">Why Partner with Jo?</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Benefits List */}
            <Card className="border-2 hover:border-blue-200 transition-all hover:shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Partner Benefits</h3>
                <ul className="space-y-4">
                  {partnerBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-lg text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Right Column - Value Proposition */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                As a Jo partner, you&#39;ll be at the forefront of the Human + Machine collaboration movement. We designed this
                offering to help you grow your business while delivering exceptional value to your customers. Whether
                you&#39;re integrating with our platform, reselling our solutions, or helping businesses implement Jo,
                we provide the support and resources you need to succeed.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Join a community of innovative partners who are transforming how businesses operate and helping them
                achieve more with Human + Machine collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Become a Partner Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-900">How to Become a Partner</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-12">
            We're always looking for innovative partners who share our vision of transforming work through Human +
            Machine collaboration. The process is simple:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center border-2 hover:border-blue-200 transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Reach Out</h3>
                <p className="text-gray-700">Tell us about your business and partnership interests</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-blue-200 transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Discovery Call</h3>
                <p className="text-gray-700">We'll discuss how we can work together to create value</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-blue-200 transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Get Started</h3>
                <p className="text-gray-700">Access resources, training, and support to launch</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">Ready to Partner with Jo?</h2>

          <Card className="border-2 hover:border-blue-200 transition-all hover:shadow-xl">
            <CardContent className="p-8 text-center">
              <Mail className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Let's explore how we can work together. Send us an email at{" "}
                <strong className="text-blue-600">partners@jofrom.io</strong> with information about your business and
                partnership interests.
              </p>
              <a href="mailto:partners@jofrom.io">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Partnership Team
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

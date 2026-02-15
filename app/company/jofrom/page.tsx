import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowLeft,
  ArrowRight,
  Cpu,
  BrainCircuit,
  ShieldCheck,
  Workflow,
  BarChart3,
  Layers,
  Network,
  Bot,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Jo from — The Technology | How Our Platform Works",
  description:
    "Dive deeper into Jo's technology stack. Learn how our platform builds specialized Human + Machine solutions that integrate seamlessly into regulated operations.",
  openGraph: {
    title: "Jo from — The Technology Behind the Platform",
    description:
      "Explore the architecture, models, and engineering principles powering Jo from for healthcare, energy, and manufacturing.",
    url: "https://www.jofrom.io/company/jofrom",
    type: "website",
  },
}

export default function JoFromPage() {
  const platformLayers = [
    {
      title: "Integration Layer",
      description:
        "Jo connects to your existing systems — EHRs, ERPs, SCADA, CMMS, and more — without ripping anything out. Our adapters normalize data across platforms so Jo from sees a unified picture of your operation.",
      icon: Network,
    },
    {
      title: "Intelligence Engine",
      description:
        "The core of Jo. Purpose-built models trained on domain-specific workflows for healthcare, energy, and manufacturing. Not a generic chatbot — a specialist that understands the language, regulations, and rhythms of your industry.",
      icon: BrainCircuit,
    },
    {
      title: "Orchestration Framework",
      description:
        "Jo doesn't just respond to prompts. It manages multi-step workflows: triaging intake forms, routing maintenance orders, flagging compliance gaps, and handing off to humans when judgment is needed.",
      icon: Workflow,
    },
    {
      title: "Compliance & Audit Layer",
      description:
        "Every action Jo takes is logged, traceable, and auditable. Built for regulated environments — SOC 2, HIPAA, and industry-specific standards are baked in, not bolted on.",
      icon: ShieldCheck,
    },
  ]

  const capabilities = [
    {
      title: "Domain-Specific Models",
      description:
        "Jo from isn't one model doing everything. We deploy specialized models fine-tuned for each role — nursing intake, equipment diagnostics, quality inspection — so accuracy stays high where it matters most.",
      icon: Cpu,
    },
    {
      title: "Human-in-the-Loop Design",
      description:
        "Every workflow has clearly defined escalation paths. Jo handles the routine; your team handles the exceptions. The boundary is explicit, auditable, and adjustable as trust builds over time.",
      icon: Bot,
    },
    {
      title: "Continuous Learning Pipeline",
      description:
        "Jo improves as it works. Performance data feeds back into the system — not to retrain blindly, but to surface patterns, flag drift, and recommend process adjustments to your operations team.",
      icon: BarChart3,
    },
    {
      title: "Modular Architecture",
      description:
        "Start with one Jo from department. Add more as you scale. Each module is independent but shares context through our orchestration layer, so the whole system gets smarter together.",
      icon: Layers,
    },
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
      <section className="py-16 sm:py-20 md:py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-blue-500/30 rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-purple-500/30 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-slate-500/20 rounded-full"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-4">The Technology</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance">
            Built for the work that{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              keeps the world running
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Jo from is not another chatbot. It is a platform for building, deploying, and managing specialized
            Human + Machine collaboration inside regulated operations.
          </p>
        </div>
      </section>

      {/* Platform Architecture */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-slate-900">Platform Architecture</h2>
          <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            Four layers working together to turn your operation into a coordinated human-machine system
          </p>

          <div className="space-y-6">
            {platformLayers.map((layer, index) => (
              <Card
                key={layer.title}
                className="border-2 hover:border-blue-200 transition-all hover:shadow-lg overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row items-stretch">
                    <div className="w-full md:w-20 bg-gradient-to-b md:bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center py-4 md:py-0">
                      <span className="text-white font-bold text-2xl">{index + 1}</span>
                    </div>
                    <div className="flex-1 p-6 sm:p-8 flex items-start gap-4 sm:gap-6">
                      <div className="h-12 w-12 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                        <layer.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">{layer.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{layer.description}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="py-8 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 shadow-lg"></div>
        </div>
      </div>

      {/* Core Capabilities */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-slate-900">Core Capabilities</h2>
          <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            The engineering principles that make Jo reliable enough for regulated work
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability) => (
              <Card
                key={capability.title}
                className="relative overflow-hidden border-2 hover:border-blue-200 transition-all hover:shadow-xl"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-10 translate-x-10 opacity-50"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <capability.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">{capability.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{capability.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="py-8 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 shadow-lg"></div>
        </div>
      </div>

      {/* How It Works in Practice */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-slate-900">How It Works in Practice</h2>
          <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            A Jo from deployment follows a clear, repeatable process
          </p>

          <div className="space-y-8">
            {[
              {
                step: "Map",
                detail:
                  "We instrument your workflows to see where time goes, where errors cluster, and where human skill is being wasted on mechanical tasks.",
              },
              {
                step: "Model",
                detail:
                  "We build a task allocation model specific to your operation — defining which tasks stay human, which go to Jo, and which require collaboration between the two.",
              },
              {
                step: "Deploy",
                detail:
                  "Jo from goes live alongside your team. It executes assigned tasks, logs every action, and escalates anything outside its defined scope.",
              },
              {
                step: "Measure",
                detail:
                  "Real-time dashboards track throughput, error rates, compliance adherence, and cost-per-task — giving you the data to expand, adjust, or optimize.",
              },
            ].map((item, index) => (
              <div key={item.step} className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{item.step}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            See the technology in action
          </h2>
          <p className="text-lg sm:text-xl mb-8 opacity-95 max-w-3xl mx-auto leading-relaxed">
            Request a technical walkthrough or try Jo with a live demo tailored to your industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="hero" asChild>
              <Link href="https://demo.jofrom.io/">
                Try the Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="hero"
              className="border-white text-white hover:bg-white hover:text-blue-600"
              asChild
            >
              <Link href="/company/contact">
                Request a Walkthrough
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Menu,
  X,
  ArrowRight,
  Cpu,
  Stethoscope,
  Factory,
  Zap,
  MapPin,
  Clock,
  Shield,
  ChevronRight,
  Send,
  ArrowLeft,
  Wrench,
  HardHat,
  Cog,
  Fuel,
  Server,
  CircuitBoard,
  Activity,
  Thermometer,
  Hammer,
  Gauge,
  Bolt,
  Cable,
} from "lucide-react"
import { ParticleBackground } from "@/components/particle-background"
import { Logo } from "@/components/logo"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

const jobCategories = [
  {
    id: "engineering",
    title: "Engineering & Tech",
    subtitle: "SECTOR_01",
    description:
      "Deploy skilled engineers and technical specialists for infrastructure, software systems, and advanced technology projects.",
    image: "/images/hire-engineering.jpg",
    icon: Cpu,
    roles: [
      "Systems Engineers",
      "Field Technicians",
      "Network Architects",
      "DevOps Engineers",
      "Electrical Engineers",
      "QA Specialists",
    ],
    stat: "200+",
    statLabel: "Active Engineers",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    subtitle: "SECTOR_02",
    description:
      "Certified healthcare professionals for hospitals, clinics, and field medical operations across all specialties.",
    image: "/images/hire-healthcare.jpg",
    icon: Stethoscope,
    roles: [
      "Travel Nurses",
      "Medical Technologists",
      "Radiology Techs",
      "Respiratory Therapists",
      "Lab Technicians",
      "Clinical Specialists",
    ],
    stat: "500+",
    statLabel: "HC Professionals",
  },
  {
    id: "production",
    title: "Production & Manufacturing",
    subtitle: "SECTOR_03",
    description:
      "Experienced production operators and manufacturing specialists for high-output, compliance-driven environments.",
    image: "/images/hire-production.jpg",
    icon: Factory,
    roles: [
      "Production Supervisors",
      "CNC Operators",
      "Quality Inspectors",
      "Assembly Technicians",
      "Process Engineers",
      "Maintenance Techs",
    ],
    stat: "350+",
    statLabel: "Production Crew",
  },
  {
    id: "energy",
    title: "Energy & Field Operations",
    subtitle: "SECTOR_04",
    description:
      "Certified field workers for energy infrastructure, utilities, and large-scale field deployment projects.",
    image: "/images/hire-energy.jpg",
    icon: Zap,
    roles: [
      "Lineworkers",
      "Solar Technicians",
      "Wind Turbine Techs",
      "Pipeline Engineers",
      "Safety Officers",
      "Field Coordinators",
    ],
    stat: "150+",
    statLabel: "Field Operators",
  },
]

const benefits = [
  {
    icon: Clock,
    title: "Rapid Deployment",
    description: "Contract workers onboarded and field-ready within 48 hours of assignment confirmation.",
  },
  {
    icon: Shield,
    title: "Compliance Verified",
    description: "All personnel pre-screened for industry certifications, background checks, and regulatory requirements.",
  },
  {
    icon: MapPin,
    title: "Nationwide Coverage",
    description: "Operational reach across all 50 states with local field teams and regional coordination centers.",
  },
  {
    icon: Cog,
    title: "Augmented by Jo",
    description: "Our AI platform handles scheduling, compliance tracking, and workforce optimization in real-time.",
  },
]

const processSteps = [
  {
    step: "01",
    title: "INITIATE",
    description: "Submit your workforce requirements through our mission briefing portal.",
  },
  {
    step: "02",
    title: "MATCH",
    description: "Our AI-augmented system identifies and vets the ideal contract specialists.",
  },
  {
    step: "03",
    title: "DEPLOY",
    description: "Workers are mobilized to your site with all credentials and clearances verified.",
  },
  {
    step: "04",
    title: "MONITOR",
    description: "Real-time performance tracking and workforce optimization through our platform.",
  },
]

export function HirePageClient() {
  const [scrolled, setScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState("engineering")
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const activeCat = jobCategories.find((c) => c.id === activeCategory) || jobCategories[0]

  return (
    <div className="min-h-screen bg-[#0a0e17] text-[#c8d6e5] font-sans selection:bg-cyan-900/50 selection:text-cyan-200">
      {/* Navigation */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0e17]/95 backdrop-blur-md border-b border-cyan-900/30"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <ArrowLeft
                size={18}
                className="text-cyan-400 group-hover:-translate-x-1 transition-transform"
              />
              <span className="text-sm font-mono text-cyan-400 tracking-wider uppercase">
                Mission Control
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {["sectors", "process", "benefits"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-xs font-mono uppercase tracking-[0.2em] text-[#5a6a7a] hover:text-cyan-400 transition-colors"
                >
                  {section}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("deploy")}
                className="px-5 py-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all"
              >
                Request Talent
              </button>
            </div>

            <button
              className="lg:hidden text-cyan-400"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#0a0e17]/98 backdrop-blur-md border-t border-cyan-900/30">
            <div className="px-4 py-4 space-y-2">
              {["sectors", "process", "benefits"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-4 py-3 text-xs font-mono uppercase tracking-[0.2em] text-[#5a6a7a] hover:text-cyan-400 transition-colors"
                >
                  {section}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("deploy")}
                className="block w-full px-4 py-3 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider text-center mt-4"
              >
                Request Talent
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hire-hero.jpg"
            alt="Space command center"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e17]/60 via-[#0a0e17]/80 to-[#0a0e17]" />
        </div>

        {/* Particle overlay */}
        <div className="absolute inset-0 opacity-40">
          <ParticleBackground particleCount={60} particleColor="rgba(34, 211, 238, 0.4)" />
        </div>

        {/* Scan line effect */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34, 211, 238, 0.1) 2px, rgba(34, 211, 238, 0.1) 4px)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="max-w-4xl">
            {/* Status indicator */}
            <div className="flex items-center gap-3 mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400" />
              </span>
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400">
                Recruitment Active // All Sectors Online
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Contract Workforce{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">
                Deployment
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#7a8a9a] leading-relaxed max-w-2xl mb-10">
              We deploy skilled contract workers for engineering, healthcare, production, and
              energy operations -- field-ready, compliance-verified, and augmented by our platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("deploy")}
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-cyan-500 text-[#0a0e17] font-bold text-sm uppercase tracking-wider hover:bg-cyan-400 transition-all"
              >
                Request Workers
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button
                onClick={() => scrollToSection("sectors")}
                className="flex items-center justify-center gap-3 px-8 py-4 border border-[#1e2a3a] text-[#7a8a9a] text-sm uppercase tracking-wider hover:border-cyan-500/30 hover:text-cyan-400 transition-all"
              >
                Browse Sectors
              </button>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t border-[#1e2a3a]">
              {[
                { value: "1,200+", label: "Active Workers" },
                { value: "48hr", label: "Deployment Time" },
                { value: "50", label: "States Covered" },
                { value: "99.2%", label: "Compliance Rate" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl md:text-3xl font-bold text-white font-mono">
                    {stat.value}
                  </div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[#5a6a7a] mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section id="sectors" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#1e2a3a]" />
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#5a6a7a]">
              Deployment Sectors
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#1e2a3a]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4 tracking-tight text-balance">
            Specialized Workforce Categories
          </h2>
          <p className="text-center text-[#5a6a7a] mb-16 max-w-xl mx-auto text-pretty">
            Select a sector to explore available contract roles and deployment capabilities.
          </p>

          {/* Category tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
            {jobCategories.map((cat) => {
              const Icon = cat.icon
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`group relative p-4 border transition-all text-left ${
                    activeCategory === cat.id
                      ? "bg-cyan-500/10 border-cyan-500/40 text-cyan-400"
                      : "bg-[#0d1321] border-[#1e2a3a] text-[#5a6a7a] hover:border-[#2e3a4a] hover:text-[#7a8a9a]"
                  }`}
                >
                  <Icon
                    size={20}
                    className={`mb-3 ${
                      activeCategory === cat.id ? "text-cyan-400" : "text-[#3a4a5a]"
                    }`}
                  />
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] mb-1 opacity-50">
                    {cat.subtitle}
                  </div>
                  <div className="text-sm font-semibold">{cat.title}</div>
                  {activeCategory === cat.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400" />
                  )}
                </button>
              )
            })}
          </div>

          {/* Active category detail */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={activeCat.image}
                alt={activeCat.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17] via-[#0a0e17]/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
                      {activeCat.subtitle}
                    </div>
                    <div className="text-2xl font-bold text-white">{activeCat.title}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-cyan-400 font-mono">
                      {activeCat.stat}
                    </div>
                    <div className="text-[10px] font-mono text-[#5a6a7a] uppercase tracking-wider">
                      {activeCat.statLabel}
                    </div>
                  </div>
                </div>
              </div>
              {/* Corner accents */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-cyan-500/30" />
              <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-cyan-500/30" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-cyan-500/30" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-cyan-500/30" />
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <p className="text-[#7a8a9a] leading-relaxed mb-8">{activeCat.description}</p>

                <div className="mb-8">
                  <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#5a6a7a] mb-4">
                    Available Roles
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {activeCat.roles.map((role) => (
                      <div
                        key={role}
                        className="flex items-center gap-2 text-sm text-[#7a8a9a] p-3 bg-[#0d1321] border border-[#1e2a3a]"
                      >
                        <ChevronRight size={14} className="text-cyan-500/50 flex-shrink-0" />
                        {role}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={() => scrollToSection("deploy")}
                className="group flex items-center justify-center gap-3 px-6 py-4 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-mono uppercase tracking-wider hover:bg-cyan-500/20 transition-all w-full"
              >
                Request {activeCat.title} Workers
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 relative">
        <div className="absolute inset-0 bg-[#0d1321]/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#1e2a3a]" />
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#5a6a7a]">
              Deployment Protocol
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#1e2a3a]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 tracking-tight text-balance">
            From Request to Deployment
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <div
                key={step.step}
                className="group relative p-6 bg-[#0a0e17] border border-[#1e2a3a] hover:border-cyan-500/30 transition-all"
              >
                {/* Step number */}
                <div className="text-4xl font-bold font-mono text-[#1e2a3a] group-hover:text-cyan-900/50 transition-colors mb-6">
                  {step.step}
                </div>
                <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-cyan-400 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-[#5a6a7a] leading-relaxed">{step.description}</p>
                {/* Connector */}
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-[#1e2a3a]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#1e2a3a]" />
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#5a6a7a]">
              Operational Advantages
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#1e2a3a]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 tracking-tight text-balance">
            Why Companies Deploy With Us
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <div
                  key={benefit.title}
                  className="group flex gap-6 p-6 bg-[#0d1321] border border-[#1e2a3a] hover:border-cyan-500/20 transition-all"
                >
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-cyan-500/20 bg-cyan-500/5 text-cyan-400">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-sm text-[#5a6a7a] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-[#0d1321]/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#1e2a3a]" />
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#5a6a7a]">
              Field Intelligence
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#1e2a3a]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6 tracking-tight text-balance">
            Built for Regulated Industries
          </h2>
          <p className="text-center text-[#5a6a7a] mb-16 max-w-xl mx-auto text-pretty">
            Thin margins, high stakes, essential work. We operate where compliance is non-negotiable.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: Wrench, label: "Maintenance" },
              { icon: HardHat, label: "Construction" },
              { icon: CircuitBoard, label: "Electronics" },
              { icon: Activity, label: "Clinical" },
              { icon: Fuel, label: "Oil & Gas" },
              { icon: Server, label: "Data Centers" },
              { icon: Thermometer, label: "HVAC" },
              { icon: Hammer, label: "Fabrication" },
              { icon: Gauge, label: "Utilities" },
              { icon: Bolt, label: "Electrical" },
              { icon: Cable, label: "Telecom" },
              { icon: Factory, label: "Processing" },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className="flex flex-col items-center justify-center p-5 bg-[#0a0e17] border border-[#1e2a3a] hover:border-cyan-500/20 transition-all group"
                >
                  <Icon
                    size={24}
                    className="text-[#3a4a5a] group-hover:text-cyan-400 transition-colors mb-3"
                  />
                  <span className="text-xs font-mono uppercase tracking-wider text-[#5a6a7a] group-hover:text-[#7a8a9a] transition-colors">
                    {item.label}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA / Deploy Section */}
      <section id="deploy" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <ParticleBackground particleCount={30} particleColor="rgba(34, 211, 238, 0.3)" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400" />
            </span>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400">
              Ready for Deployment
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight text-balance">
            Deploy Your Workforce Today
          </h2>
          <p className="text-lg text-[#5a6a7a] mb-10 max-w-xl mx-auto leading-relaxed text-pretty">
            Submit your mission parameters and we will match you with pre-vetted contract workers
            ready for immediate deployment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/company/contact"
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-cyan-500 text-[#0a0e17] font-bold text-sm uppercase tracking-wider hover:bg-cyan-400 transition-all w-full sm:w-auto"
            >
              <Send size={18} />
              Submit Request
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/solutions/consulting"
              className="flex items-center justify-center gap-3 px-8 py-4 border border-[#1e2a3a] text-[#7a8a9a] text-sm uppercase tracking-wider hover:border-cyan-500/30 hover:text-cyan-400 transition-all w-full sm:w-auto"
            >
              Learn About Staffing
            </Link>
          </div>

          {/* Terminal-style info */}
          <div className="mt-16 p-6 bg-[#0d1321] border border-[#1e2a3a] text-left font-mono text-xs">
            <div className="text-[#3a4a5a] mb-2">{"// deployment_parameters.config"}</div>
            <div className="space-y-1">
              <div>
                <span className="text-cyan-500">response_time</span>
                <span className="text-[#3a4a5a]">{" : "}</span>
                <span className="text-teal-300">{"\"< 24 hours\""}</span>
              </div>
              <div>
                <span className="text-cyan-500">minimum_deployment</span>
                <span className="text-[#3a4a5a]">{" : "}</span>
                <span className="text-teal-300">{"\"1 worker\""}</span>
              </div>
              <div>
                <span className="text-cyan-500">contract_types</span>
                <span className="text-[#3a4a5a]">{" : "}</span>
                <span className="text-teal-300">{"\"short-term | long-term | project-based\""}</span>
              </div>
              <div>
                <span className="text-cyan-500">coverage</span>
                <span className="text-[#3a4a5a]">{" : "}</span>
                <span className="text-teal-300">{"\"nationwide | 50 states\""}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

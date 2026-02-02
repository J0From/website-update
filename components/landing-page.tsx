"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Logo } from "@/components/logo"
import { Footer } from "@/components/footer"

export function LandingPage() {
  const [activeSection, setActiveSection] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  const sections = [
    { id: "hero", type: "hero" },
    { id: "human-machine", type: "statement" },
    { id: "bottlenecks", type: "statement-dark" },
    { id: "cta", type: "cta" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = containerRef.current.scrollTop
        const scrollHeight = containerRef.current.scrollHeight - containerRef.current.clientHeight
        const windowHeight = window.innerHeight
        const newActiveSection = Math.floor(scrollPosition / windowHeight)
        setActiveSection(Math.min(newActiveSection, sections.length - 1))
        setScrollProgress(scrollPosition / scrollHeight)
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("scroll", handleScroll)
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll)
      }
    }
  }, [sections.length])

  const handleNavClick = (index: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: index * window.innerHeight,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="h-screen w-screen overflow-hidden bg-black">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-4 sm:py-6 px-6 md:px-12 lg:px-24 bg-transparent">
        <div className="flex items-center">
          <Link href="/" className="text-xl sm:text-2xl md:text-3xl">
            <Logo width={24} height={24} />
          </Link>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <Link href="https://app.jofrom.io/auth">
            <Button variant="ghost" className="text-white hover:text-slate-200 text-sm sm:text-base px-3 sm:px-4">
              Login
            </Button>
          </Link>
          <Link href="/solutions/smb/purchase?billing=annual">
            <Button variant="gradient" className="text-sm sm:text-base px-3 sm:px-6">
              Sign Up
            </Button>
          </Link>
        </div>
      </nav>

      {/* Side Navigation Dots */}
      <nav className="fixed top-0 right-0 h-screen flex flex-col justify-center z-30 p-4">
        {sections.map((section, index) => (
          <button
            key={section.id}
            className={`w-3 h-3 rounded-full my-2 transition-all ${
              index === activeSection ? "bg-white scale-150" : "bg-gray-600"
            }`}
            onClick={() => handleNavClick(index)}
          />
        ))}
      </nav>

      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 h-0.5 bg-white z-30 transition-transform origin-left"
        style={{ transform: `scaleX(${scrollProgress})`, width: "100%" }}
      />

      {/* Scrollable Container */}
      <div ref={containerRef} className="h-full overflow-y-auto snap-y snap-mandatory">
        {/* Hero Section */}
        <section className="h-screen w-full snap-start flex items-center justify-center relative overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="/images/herro-20video.mov"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
          <div className="relative z-10 text-center px-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-8 flex items-center justify-center">
              <span>J</span>
              <div className="relative mx-2 inline-block" style={{ width: "0.6em", height: "0.6em" }}>
                <Image src="/qubit.png" alt="Qubit" fill className="brightness-0 invert object-contain" />
                <div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400"
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
                />
              </div>
              <span>from</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-slate-300 mb-12 max-w-3xl mx-auto">
              The right balance between Human + Machine
            </p>
            <Link href="/jo">
              <Button
                variant="gradient"
                size="lg"
                className="text-lg md:text-xl px-10 md:px-14 py-6 md:py-8"
              >
                Meet Jo
              </Button>
            </Link>
          </div>
        </section>

        {/* Human + Machine Section */}
        <section className="h-screen w-full snap-start flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight text-center">
              We help businesses strike the right balance between{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">
                Human + Machine
              </span>
              .
            </p>
          </div>
        </section>

        {/* Bottlenecks Section */}
        <section className="h-screen w-full snap-start flex items-center justify-center bg-black">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold leading-tight space-y-2">
              <p>
                Jo fixes{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  labor bottlenecks
                </span>{" "}
                in{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  highly regulated industries
                </span>
                ,
              </p>
              <p>
                so you{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  stay compliant
                </span>
                ,{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  cut costs
                </span>
                , and finally have
              </p>
              <p>
                enough hands to{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  get the work done
                </span>
                .
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="h-screen w-full snap-start flex flex-col bg-slate-900">
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center px-6">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8">
                Ready to get started?
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/enterprise">
                  <Button
                    variant="outline"
                    className="h-14 md:h-16 bg-transparent text-white border-white hover:bg-white hover:text-slate-900 px-10 md:px-14 text-lg md:text-xl font-semibold"
                  >
                    Enterprise
                  </Button>
                </Link>
                <Link href="/jo">
                  <Button
                    variant="gradient"
                    className="h-14 md:h-16 px-10 md:px-14 text-lg md:text-xl font-semibold"
                  >
                    Meet Jo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <Footer />
        </section>
      </div>
    </div>
  )
}

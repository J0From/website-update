"use client"

import PricingTable from "./components/pricing-table"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <Link href="/" className="text-2xl font-bold text-slate-900 flex items-center">
          J
          <div className="relative mx-1">
            <Image src="/qubit.png" alt="Qubit" width={20} height={20} className="brightness-0" />
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
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
        </Link>
      </nav>

      <PricingTable />
    </div>
  )
}

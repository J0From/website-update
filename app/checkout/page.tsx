"use client"

import type React from "react"

import { Suspense, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

function CheckoutContent() {
  const searchParams = useSearchParams()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const tierId = searchParams.get("tier")
  const billingCycle = (searchParams.get("billing") as "monthly" | "annual") || "monthly"

  const pricingData: Record<string, { name: string; agents: number; monthlyPrice: number; annualPrice: number }> = {
    starter: { name: "Starter", agents: 1, monthlyPrice: 25, annualPrice: 19 },
    growth: { name: "Growth", agents: 3, monthlyPrice: 75, annualPrice: 57 },
    professional: { name: "Professional", agents: 5, monthlyPrice: 100, annualPrice: 75 },
    enterprise: { name: "Enterprise", agents: 8, monthlyPrice: 150, annualPrice: 112 },
  }

  const selectedPlan = tierId ? pricingData[tierId] : null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name && email) {
      setIsSubmitted(true)
    }
  }

  if (!selectedPlan) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="pt-6 text-center">
            <p className="text-slate-600 mb-4">No plan selected</p>
            <Link href="/solutions/smb/purchase">
              <Button>Choose a Plan</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  const price = billingCycle === "annual" ? selectedPlan.annualPrice : selectedPlan.monthlyPrice
  const total = billingCycle === "annual" ? selectedPlan.annualPrice * 12 : selectedPlan.monthlyPrice

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 sm:p-6 max-w-6xl mx-auto">
        <Link href="/" className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center">
          J
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
        <Link href="/solutions/smb/purchase">
          <Button variant="ghost" className="gap-1 sm:gap-2 text-sm sm:text-base px-2 sm:px-4 text-slate-900">
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
            Back
          </Button>
        </Link>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Checkout Form */}
          <div className="order-2 lg:order-1">
            <Card className="shadow-lg h-full flex flex-col">
              <CardHeader>
                <h2 className="text-2xl font-bold text-slate-900">
                  {isSubmitted ? "Reservation Confirmed!" : "Complete Your Reservation"}
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  {isSubmitted ? "Check your email for next steps" : "Enter your details to reserve your spot"}
                </p>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-center">
                {isSubmitted ? (
                  <div className="py-8 space-y-6">
                    <div className="flex justify-center">
                      <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200 max-w-md">
                        <CardContent className="pt-6 text-center space-y-4">
                          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                            <Check className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-slate-900">Reservation Confirmed!</h3>
                            <p className="text-sm text-slate-600 mt-2">Check your email for next steps</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Michael Gary Scott"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="michael.scott@dundermifflin.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3"
                    >
                      Lets Go
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="order-1 lg:order-2">
            <Card className="shadow-lg sticky top-6 h-full">
              <CardHeader>
                <h2 className="text-2xl font-bold text-slate-900">Order Summary</h2>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-slate-900">{selectedPlan.name} Plan</h3>
                      <p className="text-sm text-slate-600">{selectedPlan.agents} Jos included</p>
                      <p className="text-sm text-slate-600">
                        {billingCycle === "annual" ? "Billed annually" : "Billed monthly"}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-slate-900">${price} USD</p>
                      <p className="text-sm text-slate-600">per month</p>
                    </div>
                  </div>

                  {billingCycle === "annual" && (
                    <div className="flex justify-between items-center py-3 bg-green-50 rounded-lg px-3">
                      <span className="text-sm text-green-700 font-medium">Annual discount applied</span>
                      <span className="text-sm text-green-700 font-semibold">
                        Save ${((selectedPlan.monthlyPrice - selectedPlan.annualPrice) * 12).toFixed(0)} USD/year
                      </span>
                    </div>
                  )}

                  <div className="border-t border-slate-200 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-slate-900">Total Due Today</span>
                      <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        ${total.toFixed(0)} USD
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-2">Taxes calculated at checkout</p>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-200">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600">Cancel anytime, no questions asked</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600">Secure SSL encrypted payment</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600">Instant access to all features</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100" />}>
      <CheckoutContent />
    </Suspense>
  )
}

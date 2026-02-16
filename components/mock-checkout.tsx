"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { CreditCard, Lock } from "lucide-react"
import Image from "next/image"

interface MockCheckoutProps {
    productId: string
}

export default function MockCheckout({ productId }: MockCheckoutProps) {
    const router = useRouter()
    const [isProcessing, setIsProcessing] = useState(false)
    const [formData, setFormData] = useState({
        email: "",
        cardNumber: "",
        expiry: "",
        cvc: "",
        name: "",
        country: "United States",
        zip: "",
    })

    const formatCardNumber = (value: string) => {
        const digits = value.replace(/\D/g, "").slice(0, 16)
        return digits.replace(/(\d{4})(?=\d)/g, "$1 ")
    }

    const formatExpiry = (value: string) => {
        const digits = value.replace(/\D/g, "").slice(0, 4)
        if (digits.length >= 3) {
            return `${digits.slice(0, 2)} / ${digits.slice(2)}`
        }
        return digits
    }

    const handleChange = (field: string, value: string) => {
        if (field === "cardNumber") {
            value = formatCardNumber(value)
        } else if (field === "expiry") {
            value = formatExpiry(value)
        } else if (field === "cvc") {
            value = value.replace(/\D/g, "").slice(0, 4)
        }
        setFormData((prev) => ({ ...prev, [field]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsProcessing(true)

        // Simulate payment processing
        await new Promise((resolve) => setTimeout(resolve, 2000))

        // Extract tier and billing from productId (e.g. "growth-annual")
        const [tier, billing] = productId.split("-")
        const mockSessionId = `mock_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`

        router.push(`/signup?tier=${tier}&billing=${billing}&paid=true&session_id=${mockSessionId}`)
    }

    const isFormValid =
        formData.email &&
        formData.cardNumber.replace(/\s/g, "").length >= 14 &&
        formData.expiry.replace(/\s\/\s/g, "").length === 4 &&
        formData.cvc.length >= 3 &&
        formData.name &&
        formData.zip

    return (
        <div className="w-full">
            {/* Stripe-like header bar */}
            <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Lock className="w-3.5 h-3.5 text-slate-400" />
                    <span className="text-xs text-slate-500 font-medium">Secure checkout</span>
                </div>
                <span className="text-xs text-slate-400">Powered by <span className="font-semibold text-slate-500">stripe</span></span>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-5">
                {/* Email */}
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700">Email</label>
                    <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="you@company.com"
                        className="w-full px-3 py-2.5 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white text-slate-900 placeholder:text-slate-400"
                    />
                </div>

                {/* Card Information */}
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700">Card information</label>
                    <div className="border border-slate-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all">
                        <div className="relative">
                            <input
                                type="text"
                                required
                                value={formData.cardNumber}
                                onChange={(e) => handleChange("cardNumber", e.target.value)}
                                placeholder="1234 1234 1234 1234"
                                className="w-full px-3 py-2.5 text-sm focus:outline-none bg-white text-slate-900 placeholder:text-slate-400 pr-20"
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
                                <div className="w-8 h-5 bg-gradient-to-r from-blue-700 to-blue-500 rounded-[3px] flex items-center justify-center">
                                    <span className="text-[7px] text-white font-bold tracking-wider">VISA</span>
                                </div>
                                <div className="w-8 h-5 bg-gradient-to-r from-red-500 to-orange-400 rounded-[3px] flex items-center justify-center">
                                    <div className="flex -space-x-1">
                                        <div className="w-3 h-3 rounded-full bg-red-600 opacity-80"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-400 opacity-80"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex border-t border-slate-300">
                            <input
                                type="text"
                                required
                                value={formData.expiry}
                                onChange={(e) => handleChange("expiry", e.target.value)}
                                placeholder="MM / YY"
                                className="w-1/2 px-3 py-2.5 text-sm focus:outline-none border-r border-slate-300 bg-white text-slate-900 placeholder:text-slate-400"
                            />
                            <input
                                type="text"
                                required
                                value={formData.cvc}
                                onChange={(e) => handleChange("cvc", e.target.value)}
                                placeholder="CVC"
                                className="w-1/2 px-3 py-2.5 text-sm focus:outline-none bg-white text-slate-900 placeholder:text-slate-400"
                            />
                        </div>
                    </div>
                </div>

                {/* Cardholder Name */}
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700">Cardholder name</label>
                    <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="Full name on card"
                        className="w-full px-3 py-2.5 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white text-slate-900 placeholder:text-slate-400"
                    />
                </div>

                {/* Country & ZIP */}
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700">Country or region</label>
                    <div className="border border-slate-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all">
                        <select
                            aria-label="Country or region"
                            value={formData.country}
                            onChange={(e) => handleChange("country", e.target.value)}
                            className="w-full px-3 py-2.5 text-sm focus:outline-none bg-white text-slate-900 appearance-none cursor-pointer"
                        >
                            <option>United States</option>
                            <option>Canada</option>
                            <option>United Kingdom</option>
                            <option>Australia</option>
                            <option>Germany</option>
                            <option>France</option>
                            <option>Other</option>
                        </select>
                        <input
                            type="text"
                            required
                            value={formData.zip}
                            onChange={(e) => handleChange("zip", e.target.value)}
                            placeholder="ZIP"
                            className="w-full px-3 py-2.5 text-sm focus:outline-none border-t border-slate-300 bg-white text-slate-900 placeholder:text-slate-400"
                        />
                    </div>
                </div>

                {/* Subscribe Button */}
                <button
                    type="submit"
                    disabled={!isFormValid || isProcessing}
                    className="w-full py-3 rounded-md text-sm font-semibold text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                    style={{
                        background: isProcessing
                            ? "linear-gradient(135deg, #4f46e5, #7c3aed)"
                            : isFormValid
                                ? "linear-gradient(135deg, #4f46e5, #7c3aed)"
                                : "#94a3b8",
                    }}
                >
                    {isProcessing ? (
                        <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                        </span>
                    ) : (
                        "Subscribe"
                    )}
                </button>

                {/* Terms */}
                <p className="text-[11px] text-slate-400 text-center leading-relaxed">
                    By confirming your subscription, you allow Jo from Corp. to charge you for future payments in accordance with their terms. You can always cancel your subscription.
                </p>
            </form>
        </div>
    )
}

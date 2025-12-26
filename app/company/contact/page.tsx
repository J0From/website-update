"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Mail, MapPin, Send } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Footer } from "@/components/footer"
import { sendContactFormEmail } from "@/app/actions/email"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const isFormValid = () => {
    return (
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.subject.trim() !== "" &&
      formData.message.trim() !== ""
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isFormValid()) {
      setIsSubmitting(true)

      try {
        // Send email notification
        const result = await sendContactFormEmail(formData)

        if (result.success) {
          setSubmitSuccess(true)
          // Reset form after 3 seconds
          setTimeout(() => {
            setFormData({ name: "", email: "", subject: "", message: "" })
            setSubmitSuccess(false)
          }, 3000)
        } else {
          console.error("[v0] Failed to send email:", result.message)
          alert("There was an error sending your message. Please try again or email us directly at hello@jofrom.io")
        }
      } catch (error) {
        console.error("[v0] Error submitting form:", error)
        alert("There was an error sending your message. Please try again or email us directly at hello@jofrom.io")
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 sm:p-6 max-w-7xl mx-auto">
        <Link href="/" className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-1">
          <span className="md:hidden">Jo from</span>
          <span className="hidden md:inline">J</span>
          <Image src="/qubit.png" alt="Qubit" width={20} height={20} />
        </Link>
        <Button variant="ghost" className="gap-2" asChild>
          <Link href="/">
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back</span>
          </Link>
        </Button>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">Get in Touch</h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Have questions about Jo? We'd love to hear from you. Send us a message and we'll respond as soon as
            possible.
          </p>
        </div>

        {/* Contact Section - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact Form */}
          <Card className="shadow-lg h-fit lg:h-full">
            <CardContent className="p-6 sm:p-8 h-full flex flex-col">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 flex-1 flex flex-col">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Your name"
                    className="w-full"
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your@email.com"
                    className="w-full"
                    required
                  />
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    placeholder="How can we help?"
                    className="w-full"
                    required
                  />
                </div>

                {/* Message */}
                <div className="space-y-2 flex-1">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us more about your inquiry..."
                    className="w-full min-h-[120px] h-full"
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={!isFormValid() || isSubmitting}
                  className={`w-full h-11 sm:h-12 transition-all duration-200 ${
                    isFormValid() && !isSubmitting
                      ? "bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white"
                      : "bg-slate-300 text-slate-500 cursor-not-allowed"
                  }`}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : submitSuccess ? (
                    "Message Sent!"
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="flex flex-col gap-6 sm:gap-8 h-fit lg:h-full">
            {/* Contact Details Card */}
            <Card className="shadow-lg flex-1">
              <CardContent className="p-6 sm:p-8 h-full flex flex-col justify-center">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">Contact Information</h2>
                <div className="space-y-4 sm:space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                      <a
                        href="mailto:hello@jofrom.io"
                        className="text-sm sm:text-base text-slate-600 hover:text-blue-600 transition-colors"
                      >
                        hello@jofrom.io
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Location</h3>
                      <p className="text-sm sm:text-base text-slate-600">
                        Atlanta, GA
                        <br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours Card */}
            <Card className="shadow-lg flex-1">
              <CardContent className="p-6 sm:p-8 h-full flex flex-col justify-center">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">Business Hours</h2>
                <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Monday - Friday</span>
                    <span className="font-semibold text-slate-900">9:00 AM - 5:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Saturday - Sunday</span>
                    <span className="font-semibold text-slate-900">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

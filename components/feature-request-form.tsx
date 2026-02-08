"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Lightbulb, Send, CheckCircle, DollarSign } from "lucide-react"

export default function FeatureRequestForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    department: "",
    featureTitle: "",
    description: "",
    useCase: "",
    priority: "",
  })

  const departments = [
    "Finance",
    "HR",
    "Accounting",
    "IT",
    "Support",
    "Marketing",
    "Operations",
    "Sales",
    "Legal",
    "Other",
  ]

  const priorities = ["Nice to have", "Would be helpful", "Important for our workflow", "Critical for our business"]

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Feature request submitted:", formData)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        company: "",
        department: "",
        featureTitle: "",
        description: "",
        useCase: "",
        priority: "",
      })
    }, 3000)
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
          <p className="text-gray-600 mb-4">
            Your feature request has been submitted successfully. Our product team will review it and consider it for
            future releases.
          </p>
          <p className="text-sm text-gray-500">We'll reach out if we need more details about your suggestion.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-8">
      {/* Pricing Banner */}
      <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
        <CardContent className="p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <DollarSign className="w-6 h-6 text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-900">Simple Pricing</h3>
          </div>
          <div className="text-4xl font-bold text-blue-600 mb-2">$5</div>
          <p className="text-lg text-gray-700 mb-4">per Jo from department, per month</p>
          <p className="text-gray-600 text-sm">
            Each Jo from department works 24/7 for less than the cost of a coffee. Scale up or down as your business
            grows.
          </p>
          <Button disabled className="mt-4 bg-gray-400 cursor-not-allowed opacity-60">
            Coming Soon
          </Button>
        </CardContent>
      </Card>

      {/* Feature Request Form */}
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Lightbulb className="w-6 h-6 text-yellow-500" />
            <CardTitle className="text-2xl font-bold text-gray-900">Suggest a Feature</CardTitle>
          </div>
          <p className="text-gray-600">
            Help us make Jo even better! Tell us what features would make your workflow more efficient.
          </p>
        </CardHeader>

        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Contact Information */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Your full name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  placeholder="Your company name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="department">Department *</Label>
                <Select value={formData.department} onValueChange={(value) => handleInputChange("department", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    {departments.map((dept) => (
                      <SelectItem key={dept} value={dept.toLowerCase()}>
                        {dept}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Feature Details */}
            <div className="space-y-2">
              <Label htmlFor="featureTitle">Feature Title *</Label>
              <Input
                id="featureTitle"
                type="text"
                value={formData.featureTitle}
                onChange={(e) => handleInputChange("featureTitle", e.target.value)}
                placeholder="Brief title for your feature idea"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Feature Description *</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                placeholder="Describe the feature in detail. What should it do? How should it work?"
                rows={4}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="useCase">Use Case & Benefits</Label>
              <Textarea
                id="useCase"
                value={formData.useCase}
                onChange={(e) => handleInputChange("useCase", e.target.value)}
                placeholder="How would this feature help your workflow? What problem does it solve? What time/effort would it save?"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="priority">Priority Level</Label>
              <Select value={formData.priority} onValueChange={(value) => handleInputChange("priority", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="How important is this feature?" />
                </SelectTrigger>
                <SelectContent>
                  {priorities.map((priority) => (
                    <SelectItem key={priority} value={priority.toLowerCase().replace(/\s+/g, "-")}>
                      {priority}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            >
              <Send className="w-4 h-4 mr-2" />
              Submit Feature Request
            </Button>
          </form>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>💡 Tip:</strong> The more specific you are about your use case and workflow, the better we can
              understand and prioritize your request!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Check, Users, Zap, Shield, Lock, Building, DollarSign } from "lucide-react"
import Image from "next/image"

export default function DesignKit() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Jo Design Kit</h1>
          <p className="text-slate-300">Complete style guide and component library</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        {/* Brand Identity */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Brand Identity</h2>

          {/* Logo */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Logo</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6">
                <CardContent className="p-0">
                  <h4 className="font-medium mb-4">Primary Logo</h4>
                  <div className="flex items-center text-4xl font-bold text-slate-900">
                    J
                    <div className="relative mx-2">
                      <Image src="/qubit.png" alt="Qubit" width={32} height={32} className="brightness-0" />
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
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 bg-slate-900">
                <CardContent className="p-0">
                  <h4 className="font-medium mb-4 text-white">Logo on Dark</h4>
                  <div className="flex items-center text-4xl font-bold text-white">
                    J
                    <div className="relative mx-2">
                      <Image src="/qubit.png" alt="Qubit" width={32} height={32} className="brightness-0" />
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
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <h4 className="font-medium mb-4">Brand Name</h4>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">Company: Jo Corporation</p>
                    <p className="text-sm text-gray-600">Tagline: Human + Machine</p>
                    <p className="text-sm text-gray-600">Description: Man + Machine</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Color Palette */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Color Palette</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Primary Colors */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-4">Primary</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded"></div>
                    <div>
                      <p className="font-medium">Blue 600</p>
                      <p className="text-sm text-gray-600">#2563eb</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-600 rounded"></div>
                    <div>
                      <p className="font-medium">Purple 600</p>
                      <p className="text-sm text-gray-600">#9333ea</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Secondary Colors */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-4">Secondary</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-slate-900 rounded"></div>
                    <div>
                      <p className="font-medium">Slate 900</p>
                      <p className="text-sm text-gray-600">#0f172a</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-slate-600 rounded"></div>
                    <div>
                      <p className="font-medium">Slate 600</p>
                      <p className="text-sm text-gray-600">#475569</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Accent Colors */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-4">Accent</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-500 rounded"></div>
                    <div>
                      <p className="font-medium">Red 500</p>
                      <p className="text-sm text-gray-600">#ef4444</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-600 rounded"></div>
                    <div>
                      <p className="font-medium">Green 600</p>
                      <p className="text-sm text-gray-600">#16a34a</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Neutral Colors */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-4">Neutral</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-50 rounded border"></div>
                    <div>
                      <p className="font-medium">Gray 50</p>
                      <p className="text-sm text-gray-600">#f9fafb</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-600 rounded"></div>
                    <div>
                      <p className="font-medium">Gray 600</p>
                      <p className="text-sm text-gray-600">#4b5563</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Typography */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Typography</h2>

          <Card className="p-8">
            <CardContent className="p-0">
              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold mb-4">Font Family</h3>
                  <p className="text-lg">Inter (Primary font for all text)</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-6">Headings</h3>
                  <div className="space-y-4">
                    <div>
                      <h1 className="text-6xl md:text-8xl font-bold text-slate-900">H1 - Hero</h1>
                      <p className="text-sm text-gray-600 mt-1">text-6xl md:text-8xl font-bold</p>
                    </div>
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">H2 - Section</h2>
                      <p className="text-sm text-gray-600 mt-1">text-3xl sm:text-4xl font-bold</p>
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900">H3 - Subsection</h3>
                      <p className="text-sm text-gray-600 mt-1">text-xl sm:text-2xl font-bold</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900">H4 - Card Title</h4>
                      <p className="text-sm text-gray-600 mt-1">text-lg font-semibold</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-6">Body Text</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-lg text-gray-600">
                        Large body text - Used for subtitles and important descriptions
                      </p>
                      <p className="text-sm text-gray-600 mt-1">text-lg text-gray-600</p>
                    </div>
                    <div>
                      <p className="text-base text-gray-700">Regular body text - Standard paragraph text</p>
                      <p className="text-sm text-gray-600 mt-1">text-base text-gray-700</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Small text - Captions and secondary information</p>
                      <p className="text-sm text-gray-600 mt-1">text-sm text-gray-600</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Buttons */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Buttons</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-4">Primary Buttons</h3>
                <div className="space-y-4">
                  <Button className="bg-slate-900 hover:bg-slate-800 text-white">
                    Primary Button
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button className="bg-red-500 hover:bg-red-600 text-white">CTA Button</Button>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                    Gradient Button
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-4">Secondary Buttons</h3>
                <div className="space-y-4">
                  <Button
                    variant="outline"
                    className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
                  >
                    Outline Button
                  </Button>
                  <Button variant="ghost" className="text-slate-700 hover:bg-slate-100">
                    Ghost Button
                  </Button>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
                    Colored Outline
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-4">Button Sizes</h3>
                <div className="space-y-4">
                  <Button className="bg-slate-900 hover:bg-slate-800 text-white">Small Button</Button>
                  <Button className="bg-slate-900 hover:bg-slate-800 text-white">Default Button</Button>
                  <Button className="bg-slate-900 hover:bg-slate-800 text-white">Large Button</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cards */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Cards</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Basic Card */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold mb-3">Basic Card</h3>
                <p className="text-gray-600 mb-4">Standard card with hover shadow effect</p>
                <div className="text-sm text-gray-500">hover:shadow-lg transition-shadow</div>
              </CardContent>
            </Card>

            {/* Feature Card */}
            <Card className="p-6 border-2 hover:border-blue-600 transition-colors">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white text-xl mb-4">
                  🎯
                </div>
                <h3 className="text-lg font-semibold mb-3">Feature Card</h3>
                <p className="text-gray-600 mb-4">Card with icon and colored border on hover</p>
                <div className="text-sm text-gray-500">border-2 hover:border-blue-600</div>
              </CardContent>
            </Card>

            {/* Department Card */}
            <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl">💰</div>
                  <h3 className="text-xl font-bold text-gray-900">Department</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Feature list item</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Another feature</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Icons */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Icons</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-4">Lucide Icons</h3>
                <div className="grid grid-cols-4 gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <ArrowRight className="w-6 h-6 text-slate-600" />
                    <span className="text-xs">ArrowRight</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Check className="w-6 h-6 text-green-600" />
                    <span className="text-xs">Check</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Users className="w-6 h-6 text-blue-600" />
                    <span className="text-xs">Users</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Zap className="w-6 h-6 text-purple-600" />
                    <span className="text-xs">Zap</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Shield className="w-6 h-6 text-red-600" />
                    <span className="text-xs">Shield</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Lock className="w-6 h-6 text-slate-600" />
                    <span className="text-xs">Lock</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Building className="w-6 h-6 text-gray-600" />
                    <span className="text-xs">Building</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <DollarSign className="w-6 h-6 text-green-600" />
                    <span className="text-xs">DollarSign</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-4">Emoji Icons</h3>
                <div className="grid grid-cols-4 gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-2xl">💰</span>
                    <span className="text-xs">Finance</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-2xl">👥</span>
                    <span className="text-xs">HR</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-2xl">💻</span>
                    <span className="text-xs">IT</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-2xl">📈</span>
                    <span className="text-xs">Marketing</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-2xl">⚙️</span>
                    <span className="text-xs">Operations</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-2xl">💼</span>
                    <span className="text-xs">Sales</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-2xl">🎧</span>
                    <span className="text-xs">Support</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-2xl">⚖️</span>
                    <span className="text-xs">Legal</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Gradients */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Gradients</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-4">Primary Gradient</h3>
                <div className="h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mb-3"></div>
                <p className="text-sm text-gray-600">from-blue-600 to-purple-600</p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-4">Hero Gradient</h3>
                <div className="h-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-lg mb-3"></div>
                <p className="text-sm text-gray-600">from-blue-600 via-purple-600 to-indigo-700</p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-4">Background Gradient</h3>
                <div className="h-20 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg mb-3 border"></div>
                <p className="text-sm text-gray-600">from-slate-50 to-slate-100</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Spacing */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Spacing</h2>

          <Card className="p-8">
            <CardContent className="p-0">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-4">Section Spacing</h3>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-mono bg-gray-100 px-2 py-1 rounded">py-16 sm:py-20</span> - Standard section
                      padding
                    </p>
                    <p>
                      <span className="font-mono bg-gray-100 px-2 py-1 rounded">py-12 sm:py-16</span> - Smaller section
                      padding
                    </p>
                    <p>
                      <span className="font-mono bg-gray-100 px-2 py-1 rounded">mb-12 sm:mb-16</span> - Section title
                      bottom margin
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Card Spacing</h3>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-mono bg-gray-100 px-2 py-1 rounded">p-4 sm:p-6</span> - Standard card
                      padding
                    </p>
                    <p>
                      <span className="font-mono bg-gray-100 px-2 py-1 rounded">p-6 sm:p-8</span> - Large card padding
                    </p>
                    <p>
                      <span className="font-mono bg-gray-100 px-2 py-1 rounded">gap-6 sm:gap-8</span> - Grid gaps
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Content Spacing</h3>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-mono bg-gray-100 px-2 py-1 rounded">mb-3 sm:mb-4</span> - Title bottom
                      margin
                    </p>
                    <p>
                      <span className="font-mono bg-gray-100 px-2 py-1 rounded">space-y-2 sm:space-y-3</span> - List
                      item spacing
                    </p>
                    <p>
                      <span className="font-mono bg-gray-100 px-2 py-1 rounded">gap-2 sm:gap-3</span> - Flex item gaps
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Responsive Breakpoints */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Responsive Breakpoints</h2>

          <Card className="p-8">
            <CardContent className="p-0">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-4">Tailwind Breakpoints</h3>
                    <div className="space-y-2 text-sm">
                      <p>
                        <span className="font-mono bg-gray-100 px-2 py-1 rounded">sm:</span> 640px and up
                      </p>
                      <p>
                        <span className="font-mono bg-gray-100 px-2 py-1 rounded">md:</span> 768px and up
                      </p>
                      <p>
                        <span className="font-mono bg-gray-100 px-2 py-1 rounded">lg:</span> 1024px and up
                      </p>
                      <p>
                        <span className="font-mono bg-gray-100 px-2 py-1 rounded">xl:</span> 1280px and up
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-4">Common Patterns</h3>
                    <div className="space-y-2 text-sm">
                      <p>
                        <span className="font-mono bg-gray-100 px-2 py-1 rounded">grid-cols-1 md:grid-cols-2</span>
                      </p>
                      <p>
                        <span className="font-mono bg-gray-100 px-2 py-1 rounded">text-base sm:text-lg</span>
                      </p>
                      <p>
                        <span className="font-mono bg-gray-100 px-2 py-1 rounded">px-4 sm:px-6</span>
                      </p>
                      <p>
                        <span className="font-mono bg-gray-100 px-2 py-1 rounded">max-w-6xl mx-auto</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Layout Patterns */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Layout Patterns</h2>

          <div className="space-y-8">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-4">Hero Section</h3>
                <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white p-8 rounded-lg">
                  <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-4">Hero Title</h1>
                    <p className="text-lg mb-6 opacity-90">Hero subtitle with description</p>
                    <Button className="bg-red-500 hover:bg-red-600 text-white">Call to Action</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-4">Feature Grid</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="w-8 h-8 bg-blue-600 rounded mx-auto mb-2"></div>
                    <h4 className="font-medium">Feature 1</h4>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="w-8 h-8 bg-purple-600 rounded mx-auto mb-2"></div>
                    <h4 className="font-medium">Feature 2</h4>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="w-8 h-8 bg-green-600 rounded mx-auto mb-2"></div>
                    <h4 className="font-medium">Feature 3</h4>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}

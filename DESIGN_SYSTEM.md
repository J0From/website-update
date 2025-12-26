# Jo From Design System

A comprehensive design kit for building the Jo From application and login pages that align with the website's brand identity.

---

## Brand Identity

### Brand Name
**Jo From** - Connecting departments with AI-powered solutions

### Tagline
"Human + Machine collaboration for modern businesses"

### Brand Voice
- Professional yet approachable
- Innovation-focused
- Empowering and transformative
- Clear and direct

---

## Color Palette

### Primary Colors

**Brand Gradient** (Signature)
- Blue to Purple: `from-blue-600 to-purple-600`
- Hex Values: `#2563EB → #9333EA`
- Usage: CTAs, headlines, featured elements, hero sections

**Dark Slate** (Primary Text & Backgrounds)
- Value: `slate-900`
- Hex: `#0F172A`
- Usage: Primary text, dark buttons, navigation

**White** (Base)
- Value: `white` or `slate-50`
- Hex: `#FFFFFF` or `#F8FAFC`
- Usage: Backgrounds, card surfaces, light text

### Secondary Colors

**Light Slate** (Backgrounds)
- Value: `slate-100`
- Hex: `#F1F5F9`
- Usage: Page backgrounds, subtle sections

**Medium Slate** (Borders & Dividers)
- Value: `slate-200` to `slate-300`
- Hex: `#E2E8F0` to `#CBD5E1`
- Usage: Borders, dividers, inactive states

**Muted Text**
- Value: `slate-600`
- Hex: `#475569`
- Usage: Secondary text, descriptions, labels

### Accent Colors

**Cyan-Pink Gradient** (Special Emphasis)
- Value: `from-cyan-300 to-pink-300`
- Hex: `#67E8F9 → #F9A8D4`
- Usage: Highlighted text within dark gradient backgrounds

**Blue Accent**
- Value: `blue-600`
- Hex: `#2563EB`
- Usage: Links, interactive elements, info states

**Purple Accent**
- Value: `purple-600`
- Hex: `#9333EA`
- Usage: Secondary CTAs, feature highlights

### Semantic Colors

**Success**
- Value: `green-600`
- Hex: `#16A34A`

**Warning**
- Value: `yellow-500`
- Hex: `#EAB308`

**Error**
- Value: `red-600`
- Hex: `#DC2626`

---

## Typography

### Font Family
**Inter** (Google Fonts)
- Primary font for all text
- Font weights: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)

### Type Scale

**Display Heading** (Hero)
\`\`\`css
text-6xl md:text-7xl lg:text-8xl
font-bold
text-slate-900
line-height: tight
\`\`\`

**Heading 1**
\`\`\`css
text-4xl md:text-5xl
font-bold
text-slate-900
\`\`\`

**Heading 2**
\`\`\`css
text-3xl md:text-4xl
font-bold
text-slate-900
\`\`\`

**Heading 3**
\`\`\`css
text-2xl md:text-3xl
font-bold
text-slate-900
\`\`\`

**Heading 4**
\`\`\`css
text-xl md:text-2xl
font-semibold
text-slate-900
\`\`\`

**Body Large**
\`\`\`css
text-lg md:text-xl
text-slate-600
leading-relaxed
\`\`\`

**Body Regular**
\`\`\`css
text-base
text-slate-600
leading-relaxed
\`\`\`

**Body Small**
\`\`\`css
text-sm
text-slate-500
leading-normal
\`\`\`

**Caption**
\`\`\`css
text-xs
text-slate-400
\`\`\`

### Gradient Text
Use for emphasis on key phrases:
\`\`\`css
bg-gradient-to-r from-blue-600 to-purple-600
bg-clip-text text-transparent
\`\`\`

---

## Spacing System

Use Tailwind's spacing scale consistently:

- `gap-2`: 8px - Tight spacing
- `gap-4`: 16px - Default spacing
- `gap-6`: 24px - Medium spacing
- `gap-8`: 32px - Large spacing
- `gap-12`: 48px - Section spacing
- `gap-16`: 64px - Major section spacing
- `gap-24`: 96px - Hero spacing

**Padding Scale:**
- `p-4`: 16px - Small containers
- `p-6`: 24px - Medium containers
- `p-8`: 32px - Large containers
- `p-12`: 48px - Section padding
- `p-16`: 64px - Hero padding

---

## Layout System

### Grid System
\`\`\`css
/* 3-column grid (default for feature cards) */
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6

/* 2-column grid */
grid grid-cols-1 md:grid-cols-2 gap-6

/* 4-column grid */
grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4
\`\`\`

### Flexbox Patterns
\`\`\`css
/* Centered content */
flex items-center justify-center

/* Space between */
flex items-center justify-between

/* Column layout */
flex flex-col gap-4

/* Responsive row to column */
flex flex-col md:flex-row gap-4
\`\`\`

### Container Widths
\`\`\`css
/* Standard content width */
max-w-6xl mx-auto px-6

/* Narrow content (forms) */
max-w-md mx-auto px-6

/* Wide content */
max-w-7xl mx-auto px-6
\`\`\`

---

## Components

### Buttons

**Primary Button** (Gradient)
\`\`\`tsx
<Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 px-6 py-3 text-base font-semibold">
  Get Started
</Button>
\`\`\`

**Secondary Button** (Dark)
\`\`\`tsx
<Button className="bg-slate-900 text-white hover:bg-slate-800 px-6 py-3 text-base font-semibold">
  Learn More
</Button>
\`\`\`

**Outline Button**
\`\`\`tsx
<Button variant="outline" className="border-slate-300 text-slate-900 hover:bg-slate-50 px-6 py-3 bg-transparent">
  Secondary Action
</Button>
\`\`\`

**Ghost Button**
\`\`\`tsx
<Button variant="ghost" className="text-slate-900 hover:text-slate-700 hover:bg-slate-100">
  Tertiary Action
</Button>
\`\`\`

### Cards

**Standard Card**
\`\`\`tsx
<Card className="border-2 hover:border-blue-200 transition-all bg-white">
  <CardContent className="p-8">
    {/* Content */}
  </CardContent>
</Card>
\`\`\`

**Featured Card** (with gradient accent)
\`\`\`tsx
<Card className="border-2 border-blue-300 bg-white relative overflow-hidden">
  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 opacity-10 blur-3xl" />
  <CardContent className="p-8 relative z-10">
    {/* Content */}
  </CardContent>
</Card>
\`\`\`

### Input Fields

**Text Input**
\`\`\`tsx
<Input 
  type="text"
  placeholder="Enter text"
  className="border-slate-200 focus:border-blue-600 focus:ring-blue-600"
/>
\`\`\`

**Form Layout**
\`\`\`tsx
<div className="space-y-4">
  <div className="space-y-2">
    <Label htmlFor="field" className="text-slate-700 font-medium">
      Field Label
    </Label>
    <Input id="field" className="border-slate-200" />
  </div>
</div>
\`\`\`

### Navigation

**Top Navigation**
\`\`\`tsx
<nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
  <Link href="/" className="text-2xl font-bold text-slate-900">
    Logo
  </Link>
  <div className="flex items-center gap-4">
    <Button variant="ghost">Login</Button>
    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      Sign Up
    </Button>
  </div>
</nav>
\`\`\`

---

## Sections

### Hero Section
\`\`\`tsx
<section className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h1 className="text-6xl md:text-8xl font-bold text-slate-900 mb-8">
      Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Headline
      </span>
    </h1>
    <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
      Subheading description text
    </p>
    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 h-14 px-10 text-lg">
      Call to Action
    </Button>
  </div>
</section>
\`\`\`

### Feature Section
\`\`\`tsx
<section className="py-16 px-6 bg-white">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-4">
      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Section Title
      </span>
    </h2>
    <p className="text-xl text-slate-600 text-center max-w-3xl mx-auto mb-12">
      Section description
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Feature cards */}
    </div>
  </div>
</section>
\`\`\`

### Gradient Banner Section
\`\`\`tsx
<section className="bg-gradient-to-r from-blue-600 to-purple-600 py-24">
  <div className="max-w-6xl mx-auto px-6">
    <p className="text-4xl md:text-5xl font-bold text-white leading-tight">
      Your message with{" "}
      <span className="bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">
        highlighted text
      </span>
    </p>
  </div>
</section>
\`\`\`

---

## Design Patterns

### Responsive Design
Always design mobile-first:
\`\`\`css
/* Mobile default */
text-base

/* Tablet */
md:text-lg

/* Desktop */
lg:text-xl
\`\`\`

### Hover States
\`\`\`css
/* Buttons */
hover:opacity-90
transition-all

/* Cards */
hover:border-blue-200
transition-all

/* Links */
hover:text-blue-600
transition-colors
\`\`\`

### Focus States
\`\`\`css
focus:ring-2 
focus:ring-blue-600 
focus:ring-offset-2
focus:outline-none
\`\`\`

### Transitions
Use consistent transition timing:
\`\`\`css
transition-all duration-300
transition-colors duration-200
transition-opacity duration-300
\`\`\`

---

## Iconography

### Icon Library
Use **Lucide React** icons:
\`\`\`tsx
import { Search, Lightbulb, Rocket, Check, X, Menu } from 'lucide-react'
\`\`\`

### Icon Sizing
- Small: `w-4 h-4` (16px)
- Medium: `w-6 h-6` (24px)
- Large: `w-8 h-8` (32px)
- Hero: `w-12 h-12` (48px)

### Icon Colors
- Primary: `text-slate-900`
- Secondary: `text-slate-600`
- On gradient: `text-white`
- Accent: `text-blue-600`

---

## Application Screens

### Login Page Pattern
\`\`\`tsx
<div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4">
  <Card className="w-full max-w-md">
    <CardContent className="p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Welcome Back
        </h1>
        <p className="text-slate-600">
          Sign in to your account
        </p>
      </div>
      <form className="space-y-6">
        {/* Form fields */}
        <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 h-12">
          Sign In
        </Button>
      </form>
    </CardContent>
  </Card>
</div>
\`\`\`

### Dashboard Pattern
\`\`\`tsx
<div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
  <nav className="bg-white border-b border-slate-200">
    {/* Navigation */}
  </nav>
  <main className="max-w-7xl mx-auto px-6 py-8">
    {/* Dashboard content */}
  </main>
</div>
\`\`\`

---

## Border Radius

Standard radius: `rounded-lg` (0.625rem / 10px)

- Cards: `rounded-lg`
- Buttons: `rounded-md`
- Inputs: `rounded-md`
- Icons containers: `rounded-full`
- Images: `rounded-lg` or `rounded-xl`

---

## Shadows

Use sparingly for depth:
\`\`\`css
/* Subtle */
shadow-sm

/* Medium */
shadow-md

/* Large (modals) */
shadow-lg

/* Cards on hover */
hover:shadow-lg
\`\`\`

---

## Accessibility

### Color Contrast
- Ensure text on gradient backgrounds meets WCAG AA standards
- Dark text on light backgrounds: minimum 4.5:1 ratio
- Light text on dark backgrounds: minimum 4.5:1 ratio

### Focus Indicators
All interactive elements must have visible focus states:
\`\`\`css
focus:ring-2 focus:ring-blue-600 focus:ring-offset-2
\`\`\`

### Semantic HTML
- Use proper heading hierarchy (h1 → h6)
- Use `<nav>`, `<main>`, `<section>`, `<article>` appropriately
- Include alt text for all images
- Use aria-labels for icon-only buttons

---

## Animation Guidelines

### Timing
- Fast interactions: 200ms
- Standard transitions: 300ms
- Complex animations: 500ms

### Easing
\`\`\`css
ease-in-out /* Default */
ease-out /* Entering */
ease-in /* Exiting */
\`\`\`

### Common Animations
\`\`\`css
/* Fade in */
opacity-0 transition-opacity duration-300 opacity-100

/* Scale up */
scale-95 transition-transform duration-200 scale-100

/* Slide up */
translate-y-4 transition-transform duration-300 translate-y-0
\`\`\`

---

## Usage Examples

### Login Page Example
\`\`\`tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4">
      <Card className="w-full max-w-md border-2 border-slate-200">
        <CardContent className="p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link href="/" className="text-3xl font-bold inline-flex items-center">
              <span className="text-slate-900">J</span>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">o</span>
              <span className="text-slate-900"> from</span>
            </Link>
          </div>
          
          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              Welcome Back
            </h1>
            <p className="text-slate-600">
              Sign in to continue to your account
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-700 font-medium">
                Email
              </Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="you@company.com"
                className="border-slate-200 focus:border-blue-600"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-slate-700 font-medium">
                Password
              </Label>
              <Input 
                id="password" 
                type="password"
                className="border-slate-200 focus:border-blue-600"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm text-slate-600">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <Link href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-700">
                Forgot password?
              </Link>
            </div>

            <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 h-12 text-base font-semibold">
              Sign In
            </Button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-sm text-slate-600">
              Don't have an account?{" "}
              <Link href="/signup" className="text-blue-600 hover:text-blue-700 font-semibold">
                Sign up
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
\`\`\`

---

## Quick Reference

### Most Used Classes
\`\`\`css
/* Backgrounds */
bg-gradient-to-br from-slate-50 to-slate-100
bg-gradient-to-r from-blue-600 to-purple-600
bg-white
bg-slate-900

/* Text */
text-slate-900
text-slate-600
text-white
bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent

/* Layout */
max-w-6xl mx-auto px-6
flex items-center justify-center
grid grid-cols-1 md:grid-cols-3 gap-8

/* Spacing */
py-16 px-6
space-y-6
gap-4

/* Interactive */
hover:opacity-90
transition-all duration-300
focus:ring-2 focus:ring-blue-600
\`\`\`

---

## Brand Assets

### Logo Usage
The Jo From logo uses:
- **J** in slate-900
- **qubit icon** with blue-purple gradient overlay
- **from** in slate-900

Logo spacing: minimum clear space of 0.5x the logo height on all sides

### Qubit Icon
Located at: `/qubit.png`
Applied with gradient overlay:
\`\`\`tsx
<div className="relative">
  <Image src="/qubit.png" alt="Qubit" width={24} height={24} className="brightness-0" />
  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
       style={{
         maskImage: `url('/qubit.png')`,
         maskSize: 'contain',
         maskRepeat: 'no-repeat',
       }} />
</div>
\`\`\`

---

This design system ensures consistency across all Jo From digital products. For questions or additions, refer to existing components in the codebase or consult with the design team.

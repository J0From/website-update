import type { Metadata } from "next"
import { HirePageClient } from "@/components/hire/hire-page-client"

export const metadata: Metadata = {
  title: "Hire Contract Workers | Jo from",
  description:
    "Deploy skilled contract workers for engineering, healthcare, production, and energy operations. Field-ready, compliance-verified, and enabled by our platform.",
  keywords: [
    "contract workers",
    "hire engineers",
    "healthcare staffing",
    "production workers",
    "energy field jobs",
    "contract staffing",
    "field technicians",
    "travel nurses",
    "manufacturing workers",
    "workforce deployment",
  ],
  openGraph: {
    title: "Hire Contract Workers | Jo from",
    description:
      "Deploy skilled contract workers for engineering, healthcare, production, and energy operations.",
    type: "website",
    url: "https://www.jofrom.io/hire",
    siteName: "Jo from",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Contract Workers | Jo from",
    description:
      "Deploy skilled contract workers for engineering, healthcare, production, and energy operations.",
  },
  alternates: {
    canonical: "https://www.jofrom.io/hire",
  },
}

export default function HirePage() {
  return <HirePageClient />
}

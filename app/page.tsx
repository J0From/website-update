import type { Metadata } from "next"
import { HomePageClient } from "./HomePageClient"

export const metadata: Metadata = {
  title: "Human + Machine | Jo from",
  description:
    "Jo from is a Staffing Firm. We place people and machines to fix labor bottlenecks in Healthcare, Energy, and Manufacturing.",
  keywords: [
    "human machine balance",
    "staffing firm",
    "labor bottleneck",
    "healthcare staffing",
    "energy staffing",
    "manufacturing staffing",
    "compliance solutions",
    "regulated industries",
    "workforce solutions",
  ],
  openGraph: {
    title: "Jo from | Human + Machine Staffing",
    description: "We place people and machines to fix labor bottlenecks in Healthcare, Energy, and Manufacturing.",
    type: "website",
    url: "https://www.jofrom.io",
    siteName: "Jo from",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jo from - Human + Machine Staffing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jo from | Human + Machine Staffing",
    description: "We place people and machines to fix labor bottlenecks in Healthcare, Energy, and Manufacturing.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.jofrom.io",
  },
}

export default function HomePage() {
  return <HomePageClient />
}

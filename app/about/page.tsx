import type { Metadata } from "next"
import { AboutPageClient } from "@/components/about-page-client"

export const metadata: Metadata = {
  title: "About Jo | The Future of Human + Machine Collaboration",
  description:
    "Learn about Jo's mission to redefine the future of work by creating a balance between human creativity and machine efficiency through our suite of intelligent digital coworkers.",
}

export default function AboutUsPage() {
  return <AboutPageClient />
}

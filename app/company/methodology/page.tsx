import type { Metadata } from "next"
import { MethodologyPageClient } from "./methodology-client"

export const metadata: Metadata = {
  title: "LABOR MAP™ Methodology | Jo",
  description:
    "Precision Labor Engineering for Regulated Operations. A systematic framework for allocating work between people and machines without breaking compliance, control, or accountability.",
}

export default function MethodologyPage() {
  return <MethodologyPageClient />
}

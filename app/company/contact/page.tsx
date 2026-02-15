import type { Metadata } from "next"
import ContactClientPage from "./client"

export const metadata: Metadata = {
  title: "Contact Jo | Get in Touch with Our Team | Human + Machine",
  description:
    "Have questions about Jo's Human + Machine workforce solutions? Contact our team for enterprise solutions, pricing, or support. Located in Atlanta, GA. Email: hello@jofrom.io",
  openGraph: {
    title: "Contact Jo | Get in Touch with Our Team",
    description: "Contact Jo for enterprise Human + Machine workforce solutions. Located in Atlanta, GA.",
    url: "https://www.jofrom.io/company/contact",
    type: "website",
  },
}

export default function ContactPage() {
  return <ContactClientPage />
}

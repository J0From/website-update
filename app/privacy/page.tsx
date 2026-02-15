import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Privacy Policy | Jo",
  description: "Privacy Policy for Jo - Your privacy is critically important to us.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/qubit.png" alt="Jo Logo" width={32} height={32} className="w-8 h-8" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Jo
              </span>
            </Link>
            <Link href="/">
              <Button variant="ghost">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-slate max-w-none">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Privacy Policy for Jo</h1>
          <p className="text-slate-600 mb-8">Last Updated: October 9, 2025</p>

          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            Welcome to Jo. Your privacy is critically important to us. This Privacy Policy explains how Jo From Corp.
            ("Jo," "we," "us," or "our") collects, uses, and discloses information about you when you access or use our
            website, our "Human + Machine" collaboration platform, and other online products and services (collectively,
            the "Services").
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Information We Collect</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We collect information you provide directly to us, information we collect automatically when you use our
              Services, and information we collect from other sources.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">a. Information You Provide to Us:</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              We collect information you provide directly when you use our Services. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
              <li>
                <strong>Account Information:</strong> When you sign up for Jo, we collect personal information such as
                your first name, last name, and email address.
              </li>
              <li>
                <strong>Business Information:</strong> During the onboarding process, we collect information about your
                business, including your role, company name, and industry.
              </li>
              <li>
                <strong>Communications:</strong> If you contact us directly, we may receive additional information about
                you such as your name, email address, the contents of the message and/or attachments you may send us,
                and any other information you may choose to provide.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">b. Information We Collect Automatically:</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              When you use our Services, we may automatically collect certain information, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
              <li>
                <strong>Usage Information:</strong> We log information about your use of the Services, including the
                type of browser you use, access times, pages viewed, your IP address, and the page you visited before
                navigating to our Services.
              </li>
              <li>
                <strong>Device Information:</strong> We collect information about the computer or mobile device you use
                to access our Services, including the hardware model, operating system and version, and unique device
                identifiers.
              </li>
              <li>
                <strong>Cookies and Other Tracking Technologies:</strong> We use various technologies to collect
                information, and this may include sending cookies to your computer or mobile device.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">c. Information from Third-Party Integrations:</h3>
            <p className="text-slate-700 leading-relaxed">
              If you choose to connect third-party applications to your Jo account (such as Slack, Google Drive, OpenAI,
              Salesforce, QuickBooks, etc.), we may receive information from those services, including authentication
              tokens, content, and data necessary to provide the requested services. The information we receive from
              these third parties is subject to their respective privacy policies.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We use the information we collect for various purposes, including to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>Provide, operate, and maintain our Services;</li>
              <li>Process transactions and send you related information, including confirmations and invoices;</li>
              <li>Send you technical notices, updates, security alerts, and support and administrative messages;</li>
              <li>Respond to your comments, questions, and requests and provide customer service;</li>
              <li>
                Communicate with you about products, services, offers, promotions, and events offered by Jo and others;
              </li>
              <li>Monitor and analyze trends, usage, and activities in connection with our Services;</li>
              <li>
                Improve our Services and develop new products, services, features, and functionality. This includes
                using data from our SMB user base to improve our core AI models, a key part of our virtuous cycle to
                enhance the product.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Share Your Information</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We may share the information we collect in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>
                <strong>With Third-Party Integrations:</strong> When you direct us to, we will share information with
                the third-party services you have connected to your account.
              </li>
              <li>
                <strong>With Vendors and Service Providers:</strong> We may share information with third-party vendors
                and service providers that need access to such information to carry out work on our behalf (e.g.,
                payment processors, cloud hosting providers).
              </li>
              <li>
                <strong>In Compliance with Laws:</strong> We may disclose your information if we believe disclosure is
                in accordance with, or required by, any applicable law, regulation, or legal process.
              </li>
              <li>
                <strong>For Business Transfers:</strong> We may share or transfer your information in connection with,
                or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a
                portion of our business to another company.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Security</h2>
            <p className="text-slate-700 leading-relaxed">
              We are committed to protecting your information. We implement and maintain appropriate technical and
              organizational measures to protect your data, in line with industry best practices and compliance
              standards such as SOC 2 Type II, ISO 27001, and others.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Your Data Rights and Choices</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Depending on your location, you may have certain rights under local data protection laws (such as GDPR and
              CCPA) regarding the personal information we hold about you. These may include the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
              <li>Access the personal information we hold about you.</li>
              <li>Request that we correct any inaccurate personal information.</li>
              <li>Request that we delete your personal information.</li>
              <li>Object to or restrict our processing of your personal information.</li>
            </ul>
            <p className="text-slate-700 leading-relaxed">
              You can usually access, correct, or delete your personal information by logging into your account settings
              and preferences.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Children's Privacy</h2>
            <p className="text-slate-700 leading-relaxed">
              Our Services are not intended for individuals under the age of 16. We do not knowingly collect personal
              information from children under 16.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Changes to This Privacy Policy</h2>
            <p className="text-slate-700 leading-relaxed">
              We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising
              the date at the top of the policy and, in some cases, we may provide you with additional notice (such as
              adding a statement to our homepage or sending you a notification).
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Contact Us</h2>
            <p className="text-slate-700 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:{" "}
              <a href="mailto:hello@jofrom.io" className="text-blue-600 hover:text-blue-700 underline">
                hello@jofrom.io
              </a>
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

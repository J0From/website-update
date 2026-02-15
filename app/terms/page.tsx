import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Terms of Service | Jo",
  description: "Terms of Service for Jo - Please read these terms carefully before using our services.",
}

export default function TermsPage() {
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
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Terms of Service</h1>
          <p className="text-slate-600 mb-8">Last Updated: October 9, 2025</p>

          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            Welcome to Jo. These Terms of Service ("Terms") govern your access to and use of the Jo platform, website,
            and services provided by Jo From Corp. ("Jo," "we," "us," or "our"). By accessing or using our Services, you
            agree to be bound by these Terms.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-700 leading-relaxed">
              By creating an account, accessing, or using the Jo platform, you acknowledge that you have read,
              understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these
              Terms, you may not access or use our Services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Description of Services</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Jo provides a Human + Machine collaboration platform that helps businesses streamline workflows, integrate
              with third-party applications, and optimize operations. Our Services include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>Human + Machine workflow management</li>
              <li>Integration with third-party business applications</li>
              <li>Custom department configuration and deployment</li>
              <li>Analytics and reporting tools</li>
              <li>Enterprise consulting and implementation services</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. User Accounts and Registration</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              To use certain features of Jo, you must register for an account. When you register, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Accept responsibility for all activities that occur under your account</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>
            <p className="text-slate-700 leading-relaxed">
              You must be at least 18 years old and have the legal authority to enter into these Terms on behalf of
              yourself or your organization.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Acceptable Use</h2>
            <p className="text-slate-700 leading-relaxed mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>Use the Services for any unlawful purpose or in violation of any applicable laws</li>
              <li>Interfere with or disrupt the integrity or performance of the Services</li>
              <li>Attempt to gain unauthorized access to the Services or related systems or networks</li>
              <li>Use the Services to transmit any viruses, malware, or other harmful code</li>
              <li>Reverse engineer, decompile, or disassemble any aspect of the Services</li>
              <li>Use the Services to compete with Jo or develop a competing product</li>
              <li>Share your account credentials with any third party</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Subscription and Payment</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Jo offers both subscription-based and enterprise pricing models:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
              <li>
                <strong>SMB Subscriptions:</strong> Monthly or annual subscriptions are billed in advance and will
                automatically renew unless canceled.
              </li>
              <li>
                <strong>Enterprise Agreements:</strong> Custom pricing and terms based on your organization's needs.
              </li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-4">
              You agree to pay all fees associated with your subscription. All fees are non-refundable except as
              required by law or as explicitly stated in your agreement with us.
            </p>
            <p className="text-slate-700 leading-relaxed">
              We reserve the right to modify our pricing with 30 days' notice. Price changes will not affect your
              current billing cycle.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Data and Privacy</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Our collection and use of personal information is described in our{" "}
              <Link href="/privacy" className="text-blue-600 hover:text-blue-700 underline">
                Privacy Policy
              </Link>
              . By using Jo, you consent to our privacy practices.
            </p>
            <p className="text-slate-700 leading-relaxed">
              You retain all rights to your data. We use aggregated, anonymized data from our user base to improve our
              AI models and Services. We will never sell your personal data to third parties.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Third-Party Integrations</h2>
            <p className="text-slate-700 leading-relaxed">
              Jo integrates with various third-party services (e.g., Slack, Google Drive, Salesforce, QuickBooks). Your
              use of these integrations is subject to the terms and privacy policies of those third-party providers. We
              are not responsible for the performance, availability, or practices of third-party services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Intellectual Property</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Jo and its original content, features, and functionality are and will remain the exclusive property of Jo
              From Corp. and its licensors. Our Services are protected by copyright, trademark, and other intellectual
              property laws.
            </p>
            <p className="text-slate-700 leading-relaxed">
              You are granted a limited, non-exclusive, non-transferable license to access and use the Services in
              accordance with these Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Limitation of Liability</h2>
            <p className="text-slate-700 leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, JO SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
              CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR
              INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM YOUR USE OF THE
              SERVICES.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Termination</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We may terminate or suspend your account and access to the Services at our sole discretion, without prior
              notice or liability, for any reason, including if you breach these Terms.
            </p>
            <p className="text-slate-700 leading-relaxed">
              You may cancel your subscription at any time through your account settings. Upon termination, your right
              to use the Services will immediately cease.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Changes to Terms</h2>
            <p className="text-slate-700 leading-relaxed">
              We reserve the right to modify these Terms at any time. If we make material changes, we will notify you by
              email or through a notice on our website. Your continued use of the Services after such modifications
              constitutes your acceptance of the updated Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Governing Law</h2>
            <p className="text-slate-700 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the State of Delaware,
              United States, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Contact Us</h2>
            <p className="text-slate-700 leading-relaxed">
              If you have any questions about these Terms, please contact us at:{" "}
              <a href="mailto:legal@jofrom.io" className="text-blue-600 hover:text-blue-700 underline">
                legal@jofrom.io
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

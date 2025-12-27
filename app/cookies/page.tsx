import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { Footer } from "@/components/footer"
import { Logo } from "@/components/logo"

export const metadata = {
  title: "Cookie Policy | Jo",
  description: "Cookie Policy for Jo - Learn about how we use cookies and similar technologies.",
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Logo width={32} height={32} />
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
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Cookie Policy</h1>
          <p className="text-slate-600 mb-8">Last Updated: October 9, 2025</p>

          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            This Cookie Policy explains how Jo From Corp. ("Jo," "we," "us," or "our") uses cookies and similar
            technologies when you visit our website and use our Services. This policy should be read together with our{" "}
            <Link href="/privacy" className="text-blue-600 hover:text-blue-700 underline">
              Privacy Policy
            </Link>
            .
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. What Are Cookies?</h2>
            <p className="text-slate-700 leading-relaxed">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website.
              They are widely used to make websites work more efficiently, provide a better user experience, and provide
              information to the owners of the site.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. How We Use Cookies</h2>
            <p className="text-slate-700 leading-relaxed mb-4">We use cookies for the following purposes:</p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">a. Essential Cookies</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              These cookies are necessary for the website to function and cannot be switched off in our systems. They
              are usually only set in response to actions made by you, such as setting your privacy preferences, logging
              in, or filling in forms.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
              <li>Authentication and security</li>
              <li>Session management</li>
              <li>Load balancing</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">b. Performance and Analytics Cookies</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              These cookies allow us to count visits and traffic sources so we can measure and improve the performance
              of our site. They help us know which pages are the most and least popular and see how visitors move around
              the site.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
              <li>Google Analytics</li>
              <li>Usage statistics</li>
              <li>Error reporting</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">c. Functionality Cookies</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              These cookies enable the website to provide enhanced functionality and personalization. They may be set by
              us or by third-party providers whose services we have added to our pages.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
              <li>User preferences and settings</li>
              <li>Language preferences</li>
              <li>Remember login details</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">d. Targeting and Advertising Cookies</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              These cookies may be set through our site by our advertising partners. They may be used to build a profile
              of your interests and show you relevant ads on other sites.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>Apollo.io tracking (for B2B marketing)</li>
              <li>Retargeting campaigns</li>
              <li>Conversion tracking</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Third-Party Cookies</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics,
              deliver advertisements, and so on. These third parties include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>
                <strong>Google Analytics:</strong> We use Google Analytics to understand how visitors use our site.
              </li>
              <li>
                <strong>Apollo.io:</strong> We use Apollo for B2B marketing and lead tracking.
              </li>
              <li>
                <strong>Social Media Platforms:</strong> We may use cookies from social media platforms for sharing
                functionality and advertising.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. How to Control Cookies</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences
              by:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
              <li>
                <strong>Cookie Banner:</strong> When you first visit our website, you will see a cookie banner allowing
                you to accept or reject non-essential cookies.
              </li>
              <li>
                <strong>Browser Settings:</strong> Most web browsers allow you to control cookies through their settings
                preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall
                user experience.
              </li>
            </ul>

            <p className="text-slate-700 leading-relaxed mb-4">
              To find out more about cookies, including how to see what cookies have been set and how to manage and
              delete them, visit:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>
                <a
                  href="https://www.allaboutcookies.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  www.allaboutcookies.org
                </a>
              </li>
              <li>
                <a
                  href="https://www.youronlinechoices.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  www.youronlinechoices.eu
                </a>{" "}
                (for users in Europe)
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Do Not Track Signals</h2>
            <p className="text-slate-700 leading-relaxed">
              Some browsers have a "Do Not Track" feature that lets you tell websites that you do not want to have your
              online activities tracked. At this time, we do not respond to browser "Do Not Track" signals.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Changes to This Cookie Policy</h2>
            <p className="text-slate-700 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other
              operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new
              Cookie Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Contact Us</h2>
            <p className="text-slate-700 leading-relaxed">
              If you have any questions about our use of cookies, please contact us at:{" "}
              <a href="mailto:privacy@jofrom.io" className="text-blue-600 hover:text-blue-700 underline">
                privacy@jofrom.io
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

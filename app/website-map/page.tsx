import Link from "next/link"
import { ArrowRight, Map } from "lucide-react"

export const metadata = {
    title: "Website Map | Human + Machine",
    description: "Overview of all pages on the Human + Machine website.",
}

export default function WebsiteMap() {
    const sections = [
        {
            title: "Company",
            links: [
                { name: "About Us", href: "/company/about" },
                { name: "Contact", href: "/company/contact" },
                { name: "Methodology", href: "/company/methodology" },
            ]
        },
        {
            title: "Solutions",
            links: [
                { name: "Operations", href: "/solutions/consulting/operations" },
                { name: "Growth", href: "/solutions/consulting/growth" },
                { name: "SMB Solutions", href: "/solutions/smb" },
                { name: "— Purchase", href: "/solutions/smb/purchase" },
                { name: "Enterprise", href: "/solutions/enterprise" },
            ]
        },
        {
            title: "Resources",
            links: [
                { name: "Integrations", href: "/integrations" },
            ]
        },
        {
            title: "Legal",
            links: [
                { name: "Privacy Policy", href: "/legal/privacy" },
                { name: "Terms of Service", href: "/legal/terms" },
                { name: "Cookie Policy", href: "/legal/cookies" },
            ]
        }
    ]

    return (
        <div className="min-h-screen bg-slate-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <div className="flex justify-center mb-6">
                        <div className="p-3 bg-blue-100 rounded-full">
                            <Map className="w-8 h-8 text-blue-600" />
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Website Map
                    </h1>
                    <p className="mt-4 text-lg leading-8 text-slate-600">
                        Navigate through our entire website structure.
                    </p>
                </div>

                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
                    {sections.map((section) => (
                        <div key={section.title} className="bg-white p-8 rounded-2xl shadow-sm ring-1 ring-slate-900/5 hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-6 border-b border-slate-100 pb-2">
                                {section.title}
                            </h3>
                            <ul role="list" className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="group flex items-center text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
                                        >
                                            <ArrowRight className="w-4 h-4 mr-2 text-slate-300 group-hover:text-blue-600 transition-colors opacity-0 group-hover:opacity-100" />
                                            <span className="-ml-6 group-hover:ml-0 transition-all duration-300">
                                                {link.name}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

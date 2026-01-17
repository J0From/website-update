import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import { CookieBanner } from "@/components/cookie-banner"
import { StructuredData } from "@/components/structured-data"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Human + Machine",
  description:
    "We help businesses strike the right balance between Human + Machine. Digital employees for healthcare, manufacturing, energy, and food processing. Stay compliant, cut costs, reduce labor bottlenecks.",
  keywords: [
    "human machine balance",
    "digital employees",
    "compliance solutions",
    "labor shortage solutions",
    "regulated industries",
    "workforce solutions",
  ],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  generator: "v0.app",
  openGraph: {
    title: "Human + Machine",
    description:
      "We help businesses strike the right balance between Human + Machine. Fix labor bottlenecks in regulated industries.",
    type: "website",
    url: "https://www.jofrom.io",
    siteName: "Jo",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Human + Machine",
    description:
      "We help businesses strike the right balance between Human + Machine. Fix labor bottlenecks in regulated industries.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here when available
    // google: 'your-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <StructuredData />
      </head>
      <body className={inter.className}>
        {children}
        <CookieBanner />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-LXZ15J9WXC" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LXZ15J9WXC');
          `}
        </Script>
        <Script id="apollo-tracking" strategy="afterInteractive">
          {`
            function initApollo(){
              var n=Math.random().toString(36).substring(7),
              o=document.createElement("script");
              o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,
              o.async=!0,
              o.defer=!0,
              o.onload=function(){
                window.trackingFunctions.onLoad({appId:"67bf83dfb3cf560011018a4f"})
              },
              document.head.appendChild(o)
            }
            initApollo();
          `}
        </Script>
        <Script
          src="https://brand.jofrom.io/js/external-tracking.js"
          data-tracking-id="tk_d578a68c1f514adcb5c4007bd9541703"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}

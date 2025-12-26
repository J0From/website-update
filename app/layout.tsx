import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import { CookieBanner } from "@/components/cookie-banner"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Human + Machine",
  description: "The future of Human + Machine is here. Join the revolution and be among the first to experience Jo.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className={inter.className}>
        {children}
        <CookieBanner />
        <Script id="apollo-tracking" strategy="afterInteractive">
          {`
            function initApollo(){
              var n=Math.random().toString(36).substring(7),
              o=document.createElement("script");
              o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,
              o.async=!0,
              o.defer=!0,
              o.onload=function(){
                window.trackingFunctions.onLoad({appId:"69289dfcfc5622002148dab7"})
              },
              document.head.appendChild(o)
            }
            initApollo();
          `}
        </Script>
      </body>
    </html>
  )
}

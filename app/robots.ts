import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/checkout/",
          "/success/",
          "/signup/",
          "/agent-selection/",
          "/business-type/",
          "/contact-info/",
        ],
      },
    ],
    sitemap: "https://get.jofrom.io/sitemap.xml",
  }
}

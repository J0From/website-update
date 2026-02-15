import { NextResponse } from "next/server"

// AI-readable site map for LLMs (ChatGPT, Claude, Perplexity) and AI agents
export async function GET() {
  const aiMap = {
    company: "Jo",
    domain: "www.jofrom.io",
    tagline: "Human + Machine workforce orchestration for regulated industries",
    description:
      "Jo fixes labor bottlenecks in highly regulated industries—so you stay compliant, cut costs, and finally have enough hands to get the work done.",
    methodology:
      "Labor Map™ - A systematic framework for decomposing work into human-required and machine-eligible tasks",
    targetIndustries: ["Food Manufacturing", "Healthcare", "Energy & Infrastructure", "Logistics"],
    products: [
      {
        name: "Jo from Quality",
        purpose: "Monitors sanitation, hygiene, and defects via computer vision and sensor integration",
        solves: ["Quality control gaps", "Manual inspection errors", "Audit evidence collection"],
        pages: ["/solutions", "/enterprise"],
      },
      {
        name: "Jo from Safety",
        purpose: "Ensures safety protocol compliance and hazard detection in real-time",
        solves: ["Safety violations", "Incident prevention", "OSHA compliance"],
        pages: ["/solutions", "/enterprise"],
      },
      {
        name: "Jo from Compliance",
        purpose: "Creates audit-ready evidence for regulatory workflows automatically",
        solves: ["Audit fatigue", "Paper-based compliance", "FDA/USDA documentation gaps"],
        pages: ["/solutions", "/enterprise"],
      },
      {
        name: "Jo from Assets",
        purpose: "Tracks and verifies asset status, maintenance, and utilization",
        solves: ["Asset downtime", "Maintenance scheduling", "Equipment verification"],
        pages: ["/enterprise"],
      },
      {
        name: "Jo from Lockout",
        purpose: "Manages lockout/tagout procedures and energy isolation verification",
        solves: ["LOTO compliance", "Energy isolation errors", "Safety procedure verification"],
        pages: ["/enterprise"],
      },
      {
        name: "Jo from Regulatory",
        purpose: "Automates regulatory reporting and compliance documentation",
        solves: ["Regulatory burden", "Reporting delays", "Compliance gaps"],
        pages: ["/enterprise"],
      },
      {
        name: "Jo from Sanitation",
        purpose: "Verifies cleaning procedures and sanitation protocol completion",
        solves: ["Sanitation verification", "Cross-contamination risks", "Allergen changeover"],
        pages: ["/solutions", "/enterprise"],
      },
      {
        name: "Jo from Traceability",
        purpose: "Provides end-to-end product traceability and chain of custody",
        solves: ["Traceability gaps", "Recall readiness", "Supply chain visibility"],
        pages: ["/enterprise"],
      },
    ],
    solutions: [
      {
        name: "SMB Solution",
        description: "Human + Machine workforce assistant for small and medium businesses",
        url: "/solutions/smb",
        priceModel: "Subscription",
      },
      {
        name: "Enterprise Solution",
        description: "Full-scale Labor Map deployment for large regulated operations",
        url: "/enterprise",
        priceModel: "Custom",
      },
      {
        name: "Fractional Deployment",
        description: "Flexible staffing collaboration with Jo-enabled temporary workers",
        url: "/solutions/consulting/fractional",
        priceModel: "Per-deployment",
      },
    ],
    keyCapabilities: [
      "Computer vision for physical task verification",
      "Real-time sensor integration",
      "Streamlined audit evidence generation",
      "Regulatory compliance management",
      "Human-machine task allocation",
      "24/7 operational continuity",
    ],
    integrations: ["ERP systems", "MES platforms", "IoT sensors", "Camera systems", "SCADA"],
    contact: {
      sales: "/company/contact",
      demo: "/company/contact",
      support: "/company/contact",
    },
    legal: {
      privacy: "/privacy",
      terms: "/terms",
      cookies: "/cookies",
    },
  }

  return NextResponse.json(aiMap, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=86400", // Cache for 24 hours
    },
  })
}

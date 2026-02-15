// Structured AI metadata for pages - helps LLMs understand page content
export interface AIMeta {
  entity: "SoftwareAgent" | "Service" | "Organization" | "Product"
  name: string
  description: string
  industry: string[]
  solves: string[]
  replaces?: string[]
  capabilities?: string[]
  integrates?: string[]
}

// Pre-defined AI metadata for key pages
export const aiMetaRegistry: Record<string, AIMeta> = {
  "/": {
    entity: "Organization",
    name: "Jo - Human + Machine",
    description:
      "Jo fixes labor bottlenecks in highly regulated industries—so you stay compliant, cut costs, and finally have enough hands to get the work done.",
    industry: ["Food Manufacturing", "Healthcare", "Energy & Infrastructure", "Logistics"],
    solves: ["Labor shortages", "Compliance gaps", "Audit fatigue", "Operational bottlenecks"],
    replaces: ["Manual logs", "Paper-based QA", "Clipboard compliance", "Spreadsheet tracking"],
  },
  "/solutions": {
    entity: "Service",
    name: "Jo Solutions",
    description: "Human + Machine workforce solutions for regulated industries of all sizes",
    industry: ["Food Manufacturing", "Healthcare", "Energy & Infrastructure"],
    solves: ["Workforce shortages", "Quality control", "Safety compliance", "Audit preparation"],
    capabilities: ["Computer vision", "Sensor integration", "Real-time monitoring", "Streamlined reporting"],
  },
  "/solutions/smb": {
    entity: "Product",
    name: "Jo for SMB",
    description: "Human + Machine workforce assistant designed for small and medium businesses in regulated industries",
    industry: ["Food Manufacturing", "Healthcare", "Logistics"],
    solves: ["Limited staff capacity", "Compliance burden", "Quality consistency"],
    replaces: ["Manual checklists", "Paper logs", "Reactive quality control"],
  },
  "/enterprise": {
    entity: "Service",
    name: "Jo Enterprise",
    description: "Full-scale Labor Map deployment for large regulated operations with custom integration",
    industry: ["Food Manufacturing", "Healthcare", "Energy & Infrastructure", "Pharmaceuticals"],
    solves: ["Enterprise-scale labor bottlenecks", "Multi-site compliance", "Complex regulatory requirements"],
    integrates: ["ERP systems", "MES platforms", "SCADA", "IoT networks"],
  },
  "/company/methodology": {
    entity: "Service",
    name: "Labor Map Methodology",
    description:
      "A systematic framework for decomposing organizational work into human-required and machine-eligible tasks",
    industry: ["Food Manufacturing", "Healthcare", "Energy & Infrastructure"],
    solves: ["Unclear automation boundaries", "Compliance risk in AI deployment", "Workforce planning"],
    capabilities: [
      "Organization mapping",
      "Task decomposition",
      "Human-machine allocation",
      "Graduated autonomy framework",
    ],
  },
  "/company/aboutus": {
    entity: "Organization",
    name: "About Jo",
    description: "The team and mission behind Jo - building the human + machine workforce of the future",
    industry: ["Food Manufacturing", "Healthcare", "Energy & Infrastructure"],
    solves: ["Understanding who Jo is", "Company background", "Team expertise"],
  },
}

// Helper to get AI meta for a page
export function getAIMeta(pathname: string): AIMeta | undefined {
  return aiMetaRegistry[pathname]
}

// Generate JSON-LD structured data from AI meta
export function generateStructuredData(meta: AIMeta, url: string) {
  const baseData = {
    "@context": "https://schema.org",
    "@type": meta.entity === "SoftwareAgent" ? "SoftwareApplication" : meta.entity,
    name: meta.name,
    description: meta.description,
    url: `https://www.jofrom.io${url}`,
    provider: {
      "@type": "Organization",
      name: "Jo",
      url: "https://www.jofrom.io",
    },
  }

  if (meta.entity === "SoftwareAgent" || meta.entity === "Product") {
    return {
      ...baseData,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Cloud-based",
    }
  }

  return baseData
}

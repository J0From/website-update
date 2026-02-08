// Department/Role constants used across the platform
export const ROLES = [
  "Legal",
  "Clinical",
  "Finance",
  "Engineering",
  "HR",
  "Production",
  "Accounting",
  "Nursing",
  "IT",
  "Maintenance",
  "Marketing",
  "Sanitation",
  "Sales",
  "Processing",
  "Support",
  "Operations",
  "Safety",
  "QA",
  "Compliance",
] as const

export type Role = (typeof ROLES)[number]

// Integration definitions
export interface Integration {
  id: string
  name: string
  category: string
  description: string
  icon: string
  popular: boolean
}

export const INTEGRATIONS: Integration[] = [
  {
    id: "slack",
    name: "Slack",
    category: "Communication",
    description: "Team messaging and notifications",
    icon: "💬",
    popular: true,
  },
  {
    id: "teams",
    name: "Microsoft Teams",
    category: "Communication",
    description: "Video calls and team collaboration",
    icon: "👥",
    popular: true,
  },
  {
    id: "google-drive",
    name: "Google Drive",
    category: "Storage",
    description: "Cloud file storage and sharing",
    icon: "📁",
    popular: true,
  },
  {
    id: "sharepoint",
    name: "SharePoint",
    category: "Storage",
    description: "Document management and collaboration",
    icon: "📋",
    popular: false,
  },
  {
    id: "claude",
    name: "Claude",
    category: "AI Assistant",
    description: "Advanced AI for complex reasoning",
    icon: "🤖",
    popular: true,
  },
  {
    id: "perplexity",
    name: "Perplexity",
    category: "AI Search",
    description: "AI-powered research and search",
    icon: "🔍",
    popular: false,
  },
  {
    id: "openai",
    name: "OpenAI",
    category: "AI Assistant",
    description: "GPT models for text generation",
    icon: "✨",
    popular: true,
  },
  {
    id: "gemini",
    name: "Google Gemini",
    category: "AI Assistant",
    description: "Google's multimodal AI assistant",
    icon: "💎",
    popular: false,
  },
  {
    id: "notebook-lm",
    name: "NotebookLM",
    category: "AI Research",
    description: "AI-powered note-taking and research",
    icon: "📝",
    popular: false,
  },
  {
    id: "notion",
    name: "Notion",
    category: "Productivity",
    description: "All-in-one workspace for notes and docs",
    icon: "📄",
    popular: true,
  },
  {
    id: "gmail",
    name: "Gmail",
    category: "Email",
    description: "Email management and workflows",
    icon: "📧",
    popular: true,
  },
  {
    id: "outlook",
    name: "Outlook",
    category: "Email",
    description: "Microsoft email and calendar",
    icon: "📮",
    popular: true,
  },
  {
    id: "salesforce",
    name: "Salesforce",
    category: "CRM",
    description: "Customer relationship management",
    icon: "🏢",
    popular: false,
  },
  {
    id: "hubspot",
    name: "HubSpot",
    category: "CRM",
    description: "Marketing and sales workflows",
    icon: "🎯",
    popular: false,
  },
  {
    id: "quickbooks",
    name: "QuickBooks",
    category: "Accounting",
    description: "Financial management and bookkeeping",
    icon: "💰",
    popular: false,
  },
  {
    id: "xero",
    name: "Xero",
    category: "Accounting",
    description: "Cloud-based accounting software",
    icon: "📊",
    popular: false,
  },
  {
    id: "asana",
    name: "Asana",
    category: "Project Management",
    description: "Task and project management",
    icon: "✅",
    popular: false,
  },
  {
    id: "trello",
    name: "Trello",
    category: "Project Management",
    description: "Visual project boards",
    icon: "📌",
    popular: false,
  },
  {
    id: "zapier",
    name: "Zapier",
    category: "Workflows",
    description: "Connect and streamline workflows",
    icon: "⚡",
    popular: false,
  },
  {
    id: "calendly",
    name: "Calendly",
    category: "Scheduling",
    description: "Meeting scheduling and coordination",
    icon: "📅",
    popular: false,
  },
  {
    id: "jira",
    name: "Jira",
    category: "Project Management",
    description: "Issue tracking and agile project management",
    icon: "🎯",
    popular: false,
  },
  {
    id: "n8n",
    name: "N8N",
    category: "Workflows",
    description: "Open-source workflow orchestration",
    icon: "🔗",
    popular: false,
  },
  {
    id: "monday",
    name: "Monday.com",
    category: "Project Management",
    description: "Work management platform",
    icon: "📋",
    popular: false,
  },
  {
    id: "airtable",
    name: "Airtable",
    category: "Database",
    description: "Flexible database and spreadsheet hybrid",
    icon: "🗃️",
    popular: false,
  },
  {
    id: "dropbox",
    name: "Dropbox",
    category: "Storage",
    description: "Cloud file storage and collaboration",
    icon: "📦",
    popular: false,
  },
]

// Business type definitions
export interface BusinessType {
  id: string
  title: string
  description: string
  features: string[]
  icon?: string
}

export const BUSINESS_TYPES: BusinessType[] = [
  {
    id: "startup",
    title: "Startup / Early Stage",
    description: "Building your foundation",
    features: [
      "Finance: Basic bookkeeping & payroll",
      "HR: Onboarding & policies",
      "Operations: Process documentation",
    ],
  },
  {
    id: "smb",
    title: "Small Business",
    description: "Scaling your operations",
    features: [
      "Finance: Budget tracking & forecasting",
      "HR: Rapid scaling support",
      "Operations: Workflow optimization",
    ],
  },
  {
    id: "mid-market",
    title: "Mid-Market",
    description: "Enterprise-grade Human + Machine",
    features: [
      "Finance: Multi-entity accounting",
      "HR: Workforce optimization",
      "Operations: Cross-department integration",
    ],
  },
]

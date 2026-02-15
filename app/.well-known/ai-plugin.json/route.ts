import { NextResponse } from "next/server"

// OpenAI ChatGPT Plugin / AI Agent discovery format
export async function GET() {
  const aiPlugin = {
    schema_version: "v1",
    name_for_human: "Jo - Human + Machine",
    name_for_model: "jo_workforce",
    description_for_human:
      "Jo fixes labor bottlenecks in highly regulated industries with Human + Machine workforce orchestration.",
    description_for_model:
      "Jo is a Human + Machine workforce orchestration platform for regulated industries (food manufacturing, healthcare, energy). It uses the Labor Map methodology to decompose work into human-required and machine-eligible tasks. Products include Jo from Quality, Safety, Compliance, Assets, Lockout, Regulatory, Sanitation, and Traceability. Use this to find information about workforce solutions, compliance solutions, and regulated industry operations.",
    auth: {
      type: "none",
    },
    api: {
      type: "openapi",
      url: "https://get.jofrom.io/ai-map.json",
    },
    logo_url: "https://get.jofrom.io/jo-logo.png",
    contact_email: "contact@jofrom.io",
    legal_info_url: "https://get.jofrom.io/terms",
  }

  return NextResponse.json(aiPlugin, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=86400",
    },
  })
}

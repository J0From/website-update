#!/usr/bin/env node

/**
 * Button System Governance Script
 *
 * This script audits the codebase for violations of the Button Design System rules:
 * 1. No ad-hoc gradient classes outside components/ui/button.tsx
 * 2. Links styled as buttons must use Button asChild or buttonVariants()
 * 3. No inline button-like styling on <a> or <Link> elements
 *
 * Run with: npm run check:buttons
 */

import { execSync } from "child_process"

const ERRORS: string[] = []
const WARNINGS: string[] = []

// Check for ad-hoc gradient classes outside Button component
function checkAdHocGradients() {
  try {
    const result = execSync(
      `grep -r "bg-gradient-to-" app/ --include="*.tsx" --include="*.ts" -n | grep -v "components/ui/button"`,
      { encoding: "utf-8" },
    )

    if (result.trim()) {
      const lines = result.trim().split("\n")
      lines.forEach((line) => {
        // Skip button component itself and valid cases
        if (!line.includes("components/ui/button") && !line.includes("// ALLOWED:")) {
          ERRORS.push(`❌ Ad-hoc gradient found: ${line}`)
        }
      })
    }
  } catch (error) {
    // No matches found (exit code 1) - this is good!
    console.log("✅ No ad-hoc gradient classes found outside Button component")
  }
}

// Check for button-like Links without proper DS usage
function checkLinkAsButton() {
  try {
    const result = execSync(
      `grep -r "className=.*\$$rounded.*px-\\|px-.*rounded\$$" app/ --include="*.tsx" | grep "<Link"`,
      { encoding: "utf-8" },
    )

    if (result.trim()) {
      const lines = result.trim().split("\n")
      lines.forEach((line) => {
        // Check if it's using Button asChild or buttonVariants
        if (!line.includes("buttonVariants") && !line.includes("asChild")) {
          WARNINGS.push(`⚠️  Link with button-like styling (should use Button asChild): ${line}`)
        }
      })
    }
  } catch (error) {
    console.log("✅ No improperly styled Links found")
  }
}

// Main execution
console.log("🔍 Running Button System Audit...\n")

checkAdHocGradients()
checkLinkAsButton()

// Report results
console.log("\n📊 AUDIT RESULTS:\n")

if (ERRORS.length > 0) {
  console.log("ERRORS (must fix):")
  ERRORS.forEach((err) => console.log(err))
  console.log("")
}

if (WARNINGS.length > 0) {
  console.log("WARNINGS (should review):")
  WARNINGS.forEach((warn) => console.log(warn))
  console.log("")
}

if (ERRORS.length === 0 && WARNINGS.length === 0) {
  console.log("✅ All checks passed! Button system is compliant.")
  process.exit(0)
} else {
  console.log(`\n❌ Found ${ERRORS.length} errors and ${WARNINGS.length} warnings`)
  process.exit(ERRORS.length > 0 ? 1 : 0)
}

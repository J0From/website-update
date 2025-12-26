#!/bin/bash
# Check for forbidden classes

FORBIDDEN="text-gray-|font-extrabold|font-black"
echo "Checking for forbidden classes ($FORBIDDEN) in app/..."

if grep -rE "$FORBIDDEN" app/ --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js"; then
  echo "❌ Found forbidden classes!"
  exit 1
else
  echo "✅ No forbidden classes found."
  exit 0
fi

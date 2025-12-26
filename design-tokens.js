// Jo Design System - JavaScript Design Tokens
// Use these tokens in your JavaScript applications

export const joTokens = {
  colors: {
    primary: {
      blue600: "#2563eb",
      purple600: "#9333ea",
    },
    secondary: {
      slate900: "#0f172a",
      slate600: "#475569",
      slate400: "#94a3b8",
      slate200: "#e2e8f0",
      slate100: "#f1f5f9",
    },
    accent: {
      red500: "#ef4444",
      green600: "#16a34a",
      yellow500: "#eab308",
    },
    neutral: {
      white: "#ffffff",
      black: "#000000",
      gray50: "#f9fafb",
      gray100: "#f3f4f6",
      gray900: "#111827",
    },
  },

  typography: {
    fontFamily: {
      primary: ["Inter", "system-ui", "sans-serif"],
    },
    fontSize: {
      hero: "6rem",
      section: "2.25rem",
      subsection: "1.5rem",
      body: "1rem",
      small: "0.875rem",
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
    },
  },

  spacing: {
    section: "4rem",
    card: "1.5rem",
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem",
  },

  borderRadius: {
    sm: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    full: "9999px",
  },

  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
  },

  transitions: {
    fast: "150ms ease-in-out",
    normal: "300ms ease-in-out",
    slow: "500ms ease-in-out",
  },

  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
}

// Helper functions for working with tokens
export const joHelpers = {
  // Get color value
  getColor: (path) => {
    const keys = path.split(".")
    let value = joTokens.colors
    for (const key of keys) {
      value = value[key]
      if (!value) return null
    }
    return value
  },

  // Get spacing value
  getSpacing: (key) => {
    return joTokens.spacing[key] || null
  },

  // Get font size value
  getFontSize: (key) => {
    return joTokens.typography.fontSize[key] || null
  },

  // Get font weight value
  getFontWeight: (key) => {
    return joTokens.typography.fontWeight[key] || null
  },

  // Get border radius value
  getBorderRadius: (key) => {
    return joTokens.borderRadius[key] || null
  },

  // Get shadow value
  getShadow: (key) => {
    return joTokens.shadows[key] || null
  },

  // Get transition value
  getTransition: (key) => {
    return joTokens.transitions[key] || null
  },

  // Get breakpoint value
  getBreakpoint: (key) => {
    return joTokens.breakpoints[key] || null
  },

  // Create CSS custom properties
  createCSSProperties: () => {
    const properties = {}

    // Colors
    Object.entries(joTokens.colors).forEach(([category, colors]) => {
      Object.entries(colors).forEach(([name, value]) => {
        properties[`--jo-color-${category}-${name}`] = value
      })
    })

    // Typography
    Object.entries(joTokens.typography.fontSize).forEach(([name, value]) => {
      properties[`--jo-font-size-${name}`] = value
    })

    Object.entries(joTokens.typography.fontWeight).forEach(([name, value]) => {
      properties[`--jo-font-weight-${name}`] = value
    })

    Object.entries(joTokens.typography.lineHeight).forEach(([name, value]) => {
      properties[`--jo-line-height-${name}`] = value
    })

    // Spacing
    Object.entries(joTokens.spacing).forEach(([name, value]) => {
      properties[`--jo-spacing-${name}`] = value
    })

    // Border Radius
    Object.entries(joTokens.borderRadius).forEach(([name, value]) => {
      properties[`--jo-border-radius-${name}`] = value
    })

    // Shadows
    Object.entries(joTokens.shadows).forEach(([name, value]) => {
      properties[`--jo-shadow-${name}`] = value
    })

    // Transitions
    Object.entries(joTokens.transitions).forEach(([name, value]) => {
      properties[`--jo-transition-${name}`] = value
    })

    return properties
  },

  // Apply CSS properties to document root
  applyCSSProperties: () => {
    const properties = joHelpers.createCSSProperties()
    const root = document.documentElement

    Object.entries(properties).forEach(([property, value]) => {
      root.style.setProperty(property, value)
    })
  },

  // Create media query helper
  mediaQuery: (breakpoint) => {
    const bp = joTokens.breakpoints[breakpoint]
    if (!bp) return null
    return `@media (min-width: ${bp})`
  },

  // Create gradient helper
  createGradient: (direction = "135deg", color1 = "primary.blue600", color2 = "primary.purple600") => {
    const c1 = joHelpers.getColor(color1)
    const c2 = joHelpers.getColor(color2)
    if (!c1 || !c2) return null
    return `linear-gradient(${direction}, ${c1} 0%, ${c2} 100%)`
  },
}

// React/Vue component helpers
export const joReactHelpers = {
  // Create theme provider context value
  createThemeContext: () => ({
    tokens: joTokens,
    helpers: joHelpers,
  }),

  // Create styled-components theme
  createStyledTheme: () => joTokens,

  // Create Tailwind config colors
  createTailwindColors: () => {
    const colors = {}
    Object.entries(joTokens.colors).forEach(([category, categoryColors]) => {
      colors[category] = categoryColors
    })
    return colors
  },
}

// Export default
export default {
  tokens: joTokens,
  helpers: joHelpers,
  react: joReactHelpers,
}

// Usage examples:
// import { joTokens, joHelpers } from './design-tokens.js';
//
// // Get a color
// const primaryBlue = joHelpers.getColor('primary.blue600');
//
// // Create a gradient
// const gradient = joHelpers.createGradient('135deg', 'primary.blue600', 'primary.purple600');
//
// // Apply CSS properties
// joHelpers.applyCSSProperties();

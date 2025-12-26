# Jo Design System Guidelines

## Overview
The Jo design system is built around the concept of **Human + Machine** collaboration, reflecting our brand's core philosophy through clean, modern design patterns that emphasize clarity, accessibility, and professional aesthetics.

## Brand Principles

### 1. Human-Centered Design
- Prioritize user experience and accessibility
- Use clear, readable typography
- Maintain consistent spacing and hierarchy

### 2. Professional & Trustworthy
- Clean, minimal aesthetic
- Consistent use of brand colors
- High-quality imagery and icons

### 3. Scalable & Flexible
- Responsive design patterns
- Modular component system
- Consistent spacing system

## Color Usage Guidelines

### Primary Colors
- **Blue (#2563eb)**: Primary actions, links, and brand elements
- **Purple (#9333ea)**: Secondary actions and gradient combinations
- **Slate (#0f172a)**: Text, borders, and neutral elements

### Accent Colors
- **Red (#ef4444)**: Call-to-action buttons and urgent actions
- **Green (#16a34a)**: Success states and positive indicators

### Color Combinations
- Use blue-to-purple gradients for brand elements
- Pair slate with blue for professional layouts
- Use red sparingly for high-impact CTAs

## Typography Guidelines

### Font Family
- **Primary**: Inter (all text)
- **Fallback**: System fonts (-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto)

### Hierarchy
1. **Hero Text**: 6xl-8xl, bold, for main headlines
2. **Section Headers**: 3xl-4xl, bold, for section titles
3. **Subsection Headers**: xl-2xl, bold, for card titles
4. **Body Text**: base-lg, regular, for content
5. **Caption Text**: sm, regular, for secondary info

### Best Practices
- Maintain consistent line heights
- Use appropriate font weights (400, 600, 700)
- Ensure sufficient contrast ratios (4.5:1 minimum)

## Component Guidelines

### Buttons
- **Primary**: Slate background for main actions
- **CTA**: Red background for conversion actions
- **Secondary**: Outline style for secondary actions
- **Ghost**: Minimal style for tertiary actions

### Cards
- Use consistent padding (1.5rem standard, 2rem large)
- Apply subtle shadows for depth
- Include hover states for interactive elements
- Maintain consistent border radius (0.75rem)

### Icons
- **Lucide React**: For UI elements and actions
- **Emojis**: For department and category representations
- **Size**: 16px-24px for inline, 32px+ for featured

## Layout Guidelines

### Grid System
- **Mobile**: Single column layout
- **Tablet**: 2-column grid
- **Desktop**: 3-4 column grid
- **Large Desktop**: Up to 4 columns maximum

### Spacing
- **Sections**: 4rem vertical padding (3rem on mobile)
- **Cards**: 1.5rem padding (2rem for large cards)
- **Elements**: 0.75rem-1rem gaps between related items

### Containers
- **Max Width**: 72rem (1152px)
- **Padding**: 1rem mobile, 1.5rem desktop
- **Centering**: mx-auto for horizontal centering

## Responsive Design

### Breakpoints
- **sm**: 640px (mobile landscape)
- **md**: 768px (tablet)
- **lg**: 1024px (desktop)
- **xl**: 1280px (large desktop)

### Mobile-First Approach
- Design for mobile first
- Progressive enhancement for larger screens
- Touch-friendly interactive elements (44px minimum)

## Accessibility Guidelines

### Color & Contrast
- Maintain WCAG AA contrast ratios (4.5:1)
- Don't rely solely on color to convey information
- Provide alternative text for images

### Keyboard Navigation
- Ensure all interactive elements are keyboard accessible
- Provide visible focus indicators
- Logical tab order

### Screen Readers
- Use semantic HTML elements
- Provide descriptive alt text
- Include ARIA labels where needed

## Animation Guidelines

### Transitions
- **Fast**: 150ms for small state changes
- **Normal**: 200ms for standard interactions
- **Slow**: 300ms for complex animations

### Easing
- Use ease-in-out for most transitions
- Respect prefers-reduced-motion settings
- Keep animations subtle and purposeful

## Content Guidelines

### Voice & Tone
- **Professional**: Clear, confident, authoritative
- **Approachable**: Friendly but not casual
- **Helpful**: Solution-focused and supportive

### Writing Style
- Use active voice
- Keep sentences concise
- Focus on benefits over features
- Use "Human + Machine" terminology consistently

## File Organization

### CSS Structure
\`\`\`
styles/
├── globals.css          # Global styles, Tailwind imports, and design tokens
└── tailwind.config.js   # Tailwind configuration with design tokens
\`\`\`

### Component Structure
\`\`\`
components/
├── ui/                  # Base UI components
├── layout/              # Layout components
├── sections/            # Page sections
└── forms/               # Form components
\`\`\`

### Design Tokens
\`\`\`
design-tokens.json       # Source of truth for all design tokens
tailwind.config.js       # Tailwind configuration using design tokens
\`\`\`

## Quality Assurance

### Testing Checklist
- [ ] Responsive design across all breakpoints
- [ ] Keyboard navigation functionality
- [ ] Screen reader compatibility
- [ ] Color contrast compliance
- [ ] Performance optimization
- [ ] Cross-browser compatibility

### Browser Support
- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Mobile**: iOS Safari, Chrome Mobile
- **Graceful Degradation**: Older browsers receive simplified experience

## Maintenance

### Regular Reviews
- Quarterly design system audits
- Component usage analysis
- Accessibility compliance checks
- Performance monitoring

### Updates
- Document all changes
- Maintain backward compatibility when possible
- Communicate updates to development team
- Update this documentation accordingly

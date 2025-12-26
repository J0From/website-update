# Jo Design System

A comprehensive design system for the Jo platform, providing consistent visual language and user experience across all products.

## Overview

The Jo Design System is built around the core philosophy of Human + Machine collaboration, reflecting trust, intelligence, and accessibility in every component.

## Quick Start

### For Developers

1. The design system is built with Tailwind CSS and design tokens from `design-tokens.json`

2. Use Tailwind utility classes in your components:
\`\`\`html
<button class="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
  Primary Button
</button>
<div class="bg-white rounded-xl shadow-md p-6">
  <h3 class="text-2xl font-semibold mb-4">Card Title</h3>
  <p class="text-slate-600 leading-relaxed">Card content</p>
</div>
\`\`\`

3. Design tokens are configured in `tailwind.config.js` and can be used directly:
\`\`\`html
<div class="bg-primary-blue text-white p-section">
  <!-- Uses design tokens from design-tokens.json -->
</div>
\`\`\`

### For Designers

1. Import design tokens into Figma:
   - Use the `design-tokens.json` file
   - Install the Figma Tokens plugin
   - Import the token file

2. Use the Sketch symbols:
   - Open `jo-design-system.sketch`
   - Use symbols from the library

## Design Tokens

All design tokens are defined in `design-tokens.json` and configured in `tailwind.config.js`.

### Colors

#### Primary Colors
- Blue 600: `#2563eb` - Primary brand color
- Purple 600: `#9333ea` - Secondary brand color

#### Secondary Colors
- Slate 900: `#0f172a` - Primary text
- Slate 600: `#475569` - Secondary text
- Slate 400: `#94a3b8` - Muted text
- Slate 200: `#e2e8f0` - Borders
- Slate 100: `#f1f5f9` - Light backgrounds

#### Accent Colors
- Red 500: `#ef4444` - Error states
- Green 600: `#16a34a` - Success states
- Yellow 500: `#eab308` - Warning states

### Typography

#### Font Family
- Primary: Inter, system-ui, sans-serif

#### Font Sizes
- Hero: 6rem (96px)
- Section: 2.25rem (36px)
- Subsection: 1.5rem (24px)
- Body: 1rem (16px)
- Small: 0.875rem (14px)

#### Font Weights
- Normal: 400
- Medium: 500
- Semibold: 600
- Bold: 700

### Spacing

- XS: 0.25rem (4px)
- SM: 0.5rem (8px)
- MD: 1rem (16px)
- LG: 1.5rem (24px)
- XL: 2rem (32px)
- 2XL: 3rem (48px)
- Section: 4rem (64px)
- Card: 1.5rem (24px)

### Border Radius

- SM: 0.25rem (4px)
- MD: 0.375rem (6px)
- LG: 0.5rem (8px)
- XL: 0.75rem (12px)
- Full: 9999px

## Components

### Logo

The Jo logo combines the letter "J" with a qubit symbol, representing the fusion of human intelligence and quantum computing.

\`\`\`html
<a href="#" class="inline-flex items-center gap-2 text-slate-900 font-bold text-2xl hover:opacity-80 transition-opacity">
  <span class="text-blue-600">J</span>
  <div class="relative w-6 h-6">
    <img src="/qubit.png" alt="Qubit" width="20" height="20">
  </div>
  <span>Jo</span>
</a>
\`\`\`

### Buttons

#### Primary Button
\`\`\`html
<button class="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
  Primary
</button>
\`\`\`

#### CTA Button
\`\`\`html
<button class="bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors">
  Get Started
</button>
\`\`\`

#### Outline Button
\`\`\`html
<button class="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors">
  Outline
</button>
\`\`\`

#### Ghost Button
\`\`\`html
<button class="text-slate-600 px-6 py-3 rounded-lg font-medium hover:bg-slate-100 hover:text-slate-900 transition-colors">
  Ghost
</button>
\`\`\`

### Cards

#### Basic Card
\`\`\`html
<div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
  <div class="p-6">
    <h3 class="text-2xl font-semibold mb-4">Title</h3>
    <p class="text-slate-600 leading-relaxed">Content</p>
  </div>
</div>
\`\`\`

#### Feature Card
\`\`\`html
<div class="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition-shadow">
  <h3 class="text-2xl font-semibold mb-4">Feature Title</h3>
  <p class="text-slate-600 leading-relaxed mb-6">Feature description</p>
  <button class="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
    Learn More
  </button>
</div>
\`\`\`

#### Department Card
\`\`\`html
<div class="jo-card-department">
  <h3 class="jo-heading-subsection">Department</h3>
  <p class="jo-text-body">Department description</p>
</div>
\`\`\`

### Typography

#### Headings
\`\`\`html
<h1 class="text-6xl md:text-8xl font-bold leading-tight">Hero Title</h1>
<h2 class="text-3xl md:text-4xl font-bold leading-tight">Section Title</h2>
<h3 class="text-xl md:text-2xl font-semibold leading-tight">Subsection Title</h3>
\`\`\`

#### Text
\`\`\`html
<p class="text-base md:text-lg text-slate-600 leading-relaxed">Body text</p>
<p class="text-sm text-slate-400">Small text</p>
\`\`\`

### Forms

#### Input Field
\`\`\`html
<div class="mb-6">
  <label class="block font-medium text-slate-900 mb-2" for="email">Email</label>
  <input type="email" id="email" class="w-full px-3 py-2 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 transition-colors" placeholder="Enter email">
</div>
\`\`\`

#### Select Field
\`\`\`html
<div class="mb-6">
  <label class="block font-medium text-slate-900 mb-2" for="select">Choose Option</label>
  <select id="select" class="w-full px-3 py-2 border-2 border-slate-200 rounded-lg bg-white focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 transition-colors">
    <option>Option 1</option>
    <option>Option 2</option>
  </select>
</div>
\`\`\`

#### Textarea
\`\`\`html
<div class="mb-6">
  <label class="block font-medium text-slate-900 mb-2" for="message">Message</label>
  <textarea id="message" class="w-full px-3 py-2 border-2 border-slate-200 rounded-lg resize-y min-h-[120px] focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 transition-colors" placeholder="Enter message"></textarea>
</div>
\`\`\`

### Layout

#### Container
\`\`\`html
<div class="max-w-6xl mx-auto px-4 sm:px-6">
  <!-- Content -->
</div>
\`\`\`

#### Section
\`\`\`html
<section class="py-16 md:py-24">
  <!-- Section content -->
</section>
\`\`\`

#### Grids
\`\`\`html
<!-- 2 Column Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div>Column 1</div>
  <div>Column 2</div>
</div>

<!-- 3 Column Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>

<!-- 4 Column Grid -->
<div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
  <div>Column 4</div>
</div>

<!-- 5 Column Grid (for agent selection) -->
<div class="jo-grid-5">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
  <div>Column 4</div>
  <div>Column 5</div>
</div>
\`\`\`

## Responsive Design

The design system uses a mobile-first approach with the following breakpoints:

- SM: 640px
- MD: 768px
- LG: 1024px
- XL: 1280px
- 2XL: 1536px

All components are responsive by default and adapt to different screen sizes.

## Accessibility

The design system follows WCAG 2.1 AA guidelines:

- Color contrast ratios meet AA standards
- Focus indicators are clearly visible
- Screen reader support with semantic HTML
- Reduced motion support for users with vestibular disorders
- High contrast mode support

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Usage Guidelines

### Brand Principles

1. Trust: Use consistent, professional styling
2. Intelligence: Leverage clean, modern design
3. Accessibility: Ensure all users can interact with content
4. Human + Machine: Balance automation with human touch

### Color Usage

- Use primary colors for key actions and branding
- Use secondary colors for text and backgrounds
- Use accent colors sparingly for status and feedback
- Maintain sufficient contrast for accessibility

### Typography Usage

- Use hero headings sparingly for main page titles
- Use section headings for major content sections
- Use subsection headings for content organization
- Keep body text readable with appropriate line height
- Use small text for captions and secondary information

### Button Usage

- Use primary buttons for main actions
- Use CTA buttons for conversion-focused actions
- Use outline buttons for secondary actions
- Use ghost buttons for subtle actions
- Use gradient buttons for special promotions

### Card Usage

- Use basic cards for general content containers
- Use feature cards for highlighting key features
- Use department cards for selectable options

## Maintenance

### Version Control

The design system follows semantic versioning:
- Major: Breaking changes
- Minor: New features, backward compatible
- Patch: Bug fixes, backward compatible

### Updates

1. Update design tokens first
2. Update component styles
3. Update documentation
4. Test across all supported browsers
5. Release new version

### Quality Assurance

Before releasing updates:
- Test all components in isolation
- Test responsive behavior
- Validate accessibility compliance
- Check browser compatibility
- Review with design team

## Support

For questions or issues with the design system:
- Create an issue in the project repository
- Contact the design team
- Refer to the design tokens in `design-tokens.json`

## License

© 2025 Jo Corporation. All rights reserved.

# Atoro AI Shield UI Component Library

This directory contains reusable UI components used across the Atoro AI Shield website, with a focus on consistent branding, accessibility, and developer experience.

## Components

### SectionHeader

A consistent header pattern for sections with badge, title, and description.

```tsx
import { SectionHeader } from '@/components/ui';

<SectionHeader 
  badgeText="Our Approach" 
  title="Comprehensive Security Testing"
  description="Our penetration tests go beyond automated scanning."
  textAlign="center" // or "left", "right"
/>
```

### FeatureCard

Card component for displaying features with an icon, title, and description.

```tsx
import { FeatureCard } from '@/components/ui';
import { Shield } from 'lucide-react';

<FeatureCard
  icon={Shield}
  title="Data Protection"
  description="Secure your sensitive data with our advanced encryption."
  iconColor="text-atoro-green"
/>
```

### BenefitItem

Component for displaying individual benefits with an icon, title, and description.

```tsx
import { BenefitItem } from '@/components/ui';

<BenefitItem
  title="Reduce Security Incidents"
  description="Proactively fix vulnerabilities before they can be exploited by attackers."
  vertical={false} // Default: horizontal layout
/>
```

### ProcessStep

Component for displaying individual steps in a process with a number, title, and description.

```tsx
import { ProcessStep } from '@/components/ui';

<ProcessStep
  stepNumber={1}
  title="Assessment"
  description="We evaluate your current security posture and requirements."
  isLast={false} // Set to true for the last step to hide the connector line
  layout="horizontal" // or "vertical"
/>
```

### TestimonialCard

Card component for displaying client testimonials with quote, author info, and star rating.

```tsx
import { TestimonialCard } from '@/components/ui';

<TestimonialCard
  testimonial={{
    quote: "Atoro's team was excellent to work with...",
    author: "Sarah Johnson",
    title: "CTO",
    company: "TechCorp",
    avatarSrc: "/avatars/sarah.png",
    rating: 4.5
  }}
  showRating={true}
/>
```

## Design Principles

These components follow these design principles:

1. **Consistency**: All components maintain consistent spacing, typography, and color usage
2. **Flexibility**: Components accept custom class names and allow overriding default styles
3. **Accessibility**: Appropriate ARIA attributes and semantic HTML are used
4. **TypeScript**: Strong typing with JSDoc comments for better developer experience
5. **Minimal Dependencies**: Components rely primarily on Tailwind CSS and Lucide icons

## Usage Guidelines

- Import components directly from `@/components/ui`
- Prefer using these components over creating custom one-off variations
- If you need functionality not provided, extend these components rather than creating duplicates
- Use TypeScript interfaces for component props
- Follow the established naming convention for new components

## Color Tokens

Components use these color tokens for consistency:

- `text-atoro-green`: Primary brand green for accents and interactive elements
- `text-atoro-teal`: Secondary teal color for supporting elements
- `text-atoro-blue`: Tertiary blue color for additional accents
- `bg-atoro-teal/10`: Light teal background for badges and highlights

## Adding New Components

When adding new components to this library:

1. Create a new file with PascalCase naming (e.g., `NewComponent.tsx`)
2. Define a clear TypeScript interface for props with JSDoc comments
3. Add comprehensive documentation in the component file
4. Export the component and its types in `index.ts`
5. Update this README with usage examples 
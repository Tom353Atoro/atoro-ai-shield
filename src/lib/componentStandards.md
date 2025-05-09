
# Component Standards & Best Practices

This document outlines the standards for creating and using components across the Atoro website.

## Component Architecture

We follow a hierarchical component architecture:

1. **Base Components**: Fundamental UI elements (buttons, inputs, etc.)
2. **Compound Components**: Combinations of base components (cards, forms, etc.)
3. **Section Components**: Page sections with specific layouts and purposes
4. **Layout Components**: Control the overall page structure
5. **Page Components**: Full pages assembled from sections

## Naming Conventions

- Use PascalCase for component names
- Base components: Simple descriptive names (Button, Input, etc.)
- Compound components: Descriptive of their purpose (Card, Form, etc.)
- Section components: Descriptive with "Section" suffix (HeroSection, etc.)
- Layout components: Descriptive of their layout purpose (ServiceLayout, etc.)
- Page components: Named after the page they represent (HomePage, etc.)

## File Organization

```
/components
  /ui                  # Base UI components
  /shared              # Shared components used across multiple pages
  /layout              # Layout components
  /[feature-name]      # Feature-specific components
  /[page-name]         # Page-specific components
```

## Component Creation Guidelines

1. **Props Interface**: Always define and export a props interface for each component
2. **Default Props**: Provide sensible defaults for optional props
3. **Design Tokens**: Use tokens from the designTokens.ts file for consistent styling
4. **Responsive Design**: All components should be responsive by default
5. **Accessibility**: Ensure all components are accessible (proper roles, labels, etc.)

## Reuse Guidelines

1. Look for existing components before creating new ones
2. Use composition to extend functionality rather than creating new variants
3. Consider using higher-order components or hooks for shared behavior

## CSS Methodology

We use Tailwind CSS with the following practices:

1. Use utility classes for one-off styling
2. Use the `cn()` utility for conditional class names
3. Use design tokens for colors, spacing, etc.
4. Extract common UI patterns into reusable components

## Testing Components

1. Test component rendering with different props
2. Test component interactions (clicks, form submissions, etc.)
3. Test component responsiveness across devices
4. Test component accessibility


/**
 * Design System
 * 
 * This file provides documentation and guidance for our component architecture.
 * It serves as a central reference for maintaining consistent UI patterns.
 */

import { tokens } from '@/lib/designTokens';

/**
 * Component Hierarchy
 * 
 * Our components are organized in a hierarchy:
 * 
 * 1. Base Components: Fundamental building blocks (buttons, inputs, etc.)
 * 2. Compound Components: Combinations of base components (forms, cards, etc.)
 * 3. Section Components: Page sections with specific layouts and purposes
 * 4. Layout Components: Control the overall page structure
 * 5. Page Components: Full pages assembled from sections
 */

export const componentCategories = {
  base: 'Basic UI elements',
  compound: 'Combinations of base components',
  section: 'Page sections with specific purposes',
  layout: 'Page structure components',
  page: 'Full pages assembled from sections',
};

/**
 * Component Naming Conventions
 * 
 * - Use PascalCase for component names
 * - Base components: Simple descriptive names (Button, Input, etc.)
 * - Compound components: Descriptive of their purpose (Card, Form, etc.)
 * - Section components: Descriptive with "Section" suffix (HeroSection, etc.)
 * - Layout components: Descriptive of their layout purpose (ServiceLayout, etc.)
 * - Page components: Named after the page they represent (HomePage, etc.)
 */

/**
 * Component Patterns
 * 
 * Common patterns for our components:
 */
export const componentPatterns = {
  hero: {
    description: 'Top section of a page that introduces the main concept',
    variants: ['Primary', 'Secondary', 'Minimal'],
    defaultBackground: tokens.gradients.heroDarkTeal,
  },
  cta: {
    description: 'Call-to-action sections that prompt user interaction',
    variants: ['Primary', 'Secondary', 'Newsletter'],
    defaultBackground: tokens.gradients.ctaLight,
  },
  services: {
    description: 'Sections that display our service offerings',
    variants: ['Grid', 'List', 'Featured'],
  },
  testimonials: {
    description: 'Sections that display client testimonials',
    variants: ['Carousel', 'Grid', 'Featured'],
  },
  content: {
    description: 'General content sections with text and optional media',
    variants: ['TextOnly', 'TextWithMedia', 'MediaWithText', 'TwoColumn'],
  }
};

/**
 * Spacing System
 * 
 * Consistent spacing throughout the application
 */
export const spacing = {
  section: {
    default: 'py-16',
    compact: 'py-12',
    minimal: 'py-8',
    spacious: 'py-20',
  },
  container: {
    default: 'max-w-6xl mx-auto px-4 sm:px-6 lg:px-8',
    narrow: 'max-w-4xl mx-auto px-4 sm:px-6',
    wide: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  },
  stack: {
    default: 'space-y-6',
    tight: 'space-y-4',
    loose: 'space-y-8',
    spacious: 'space-y-12',
  },
  inline: {
    default: 'space-x-4',
    tight: 'space-x-2',
    loose: 'space-x-6',
    spacious: 'space-x-8',
  },
};

export default {
  componentCategories,
  componentPatterns,
  spacing,
};

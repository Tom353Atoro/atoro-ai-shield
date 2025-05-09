
/**
 * Design Tokens
 * 
 * This file contains the design tokens used throughout the application.
 * Using these tokens ensures consistency across the UI.
 */

export const colors = {
  // Brand colors
  brand: {
    teal: 'text-atoro-teal',
    green: 'text-atoro-green',
    blue: 'text-atoro-blue',
    darkTeal: 'text-atoro-dark-teal',
    lightGreen: 'text-atoro-light-green',
    lightBlue: 'text-atoro-light-blue',
  },
  
  // Background colors with opacity variants
  bg: {
    teal: 'bg-atoro-teal',
    green: 'bg-atoro-green',
    blue: 'bg-atoro-blue',
    darkTeal: 'bg-atoro-dark-teal',
    lightGreen: 'bg-atoro-light-green',
    lightBlue: 'bg-atoro-light-blue',
    tealLight: 'bg-atoro-teal/10',
    greenLight: 'bg-atoro-green/10',
    blueLight: 'bg-atoro-blue/10',
  },
  
  // Border colors with opacity variants
  border: {
    teal: 'border-atoro-teal',
    green: 'border-atoro-green',
    blue: 'border-atoro-blue',
    greenLight: 'border-atoro-green/30',
    blueLight: 'border-atoro-blue/30',
    tealLight: 'border-atoro-teal/30',
  },
  
  // Text colors
  text: {
    dark: 'text-gray-900',
    body: 'text-gray-700',
    muted: 'text-gray-600',
    light: 'text-gray-500',
    white: 'text-white',
  },
};

export const gradients = {
  heroTeal: 'bg-gradient-to-br from-atoro-teal to-black',
  heroDarkTeal: 'bg-gradient-to-br from-atoro-dark-teal to-black',
  sectionTeal: 'bg-gradient-to-br from-atoro-teal to-atoro-dark-teal',
  ctaLight: 'bg-gradient-to-br from-atoro-blue/10 to-atoro-green/10',
};

export const spacing = {
  section: {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-20',
  },
  container: {
    sm: 'max-w-4xl',
    md: 'max-w-5xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
  },
};

export const shadows = {
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  hover: 'hover:shadow-md',
};

export const animations = {
  hover: 'transition-all',
  transform: 'transition-transform',
  colors: 'transition-colors',
};

export const tokens = {
  colors,
  gradients,
  spacing,
  shadows,
  animations,
};

export default tokens;

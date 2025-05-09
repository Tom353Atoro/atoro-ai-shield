
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
    white: 'bg-white',
    gray50: 'bg-gray-50',
    gray100: 'bg-gray-100',
  },
  
  // Border colors with opacity variants
  border: {
    teal: 'border-atoro-teal',
    green: 'border-atoro-green',
    blue: 'border-atoro-blue',
    greenLight: 'border-atoro-green/30',
    blueLight: 'border-atoro-blue/30',
    tealLight: 'border-atoro-teal/30',
    gray100: 'border-gray-100',
    gray200: 'border-gray-200',
  },
  
  // Text colors
  text: {
    dark: 'text-gray-900',
    body: 'text-gray-700',
    muted: 'text-gray-600',
    light: 'text-gray-500',
    white: 'text-white',
    teal: 'text-atoro-teal',
    green: 'text-atoro-green',
    blue: 'text-atoro-blue',
  },
  
  // Hover states
  hover: {
    teal: 'hover:text-atoro-teal',
    green: 'hover:text-atoro-green',
    blue: 'hover:text-atoro-blue',
    bgTealLight: 'hover:bg-atoro-teal/20',
    bgGreenLight: 'hover:bg-atoro-green/20',
    bgBlueLight: 'hover:bg-atoro-blue/20',
    borderTealLight: 'hover:border-atoro-teal/50',
    borderGreenLight: 'hover:border-atoro-green/50',
    borderBlueLight: 'hover:border-atoro-blue/50',
  }
};

export const gradients = {
  heroTeal: 'bg-gradient-to-br from-atoro-teal to-black',
  heroDarkTeal: 'bg-gradient-to-br from-atoro-dark-teal to-black',
  sectionTeal: 'bg-gradient-to-br from-atoro-teal to-atoro-dark-teal',
  sectionBlue: 'bg-gradient-to-br from-atoro-blue/90 to-atoro-teal',
  sectionGreen: 'bg-gradient-to-br from-atoro-green to-atoro-teal',
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
  padding: {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  },
  margin: {
    sm: 'm-4',
    md: 'm-6',
    lg: 'm-8',
    xl: 'm-10',
  },
  gap: {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-10',
  }
};

export const shadows = {
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  hover: 'hover:shadow-md',
  focus: 'focus:shadow-lg',
};

export const animations = {
  hover: 'transition-all',
  transform: 'transition-transform',
  colors: 'transition-colors',
  scale: 'hover:scale-105 transition-transform duration-200',
  pulse: 'animate-pulse',
  fadeIn: 'animate-fade-in',
};

export const tokens = {
  colors,
  gradients,
  spacing,
  shadows,
  animations,
};

export default tokens;

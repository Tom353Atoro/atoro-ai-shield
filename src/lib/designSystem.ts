
/**
 * Design System
 * 
 * This file contains design system utilities for consistent spacing and styling
 */

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

export const typography = {
  heading: {
    h1: 'text-3xl md:text-4xl lg:text-5xl font-bold',
    h2: 'text-2xl md:text-3xl font-bold',
    h3: 'text-xl md:text-2xl font-bold',
    h4: 'text-lg md:text-xl font-semibold',
    h5: 'text-lg font-semibold',
    h6: 'text-base font-semibold',
  },
  body: {
    lg: 'text-lg',
    base: 'text-base',
    sm: 'text-sm',
    xs: 'text-xs',
  }
};

export const elevation = {
  none: '',
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
  inner: 'shadow-inner',
};

export const corner = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  full: 'rounded-full',
};

export default {
  spacing,
  typography,
  elevation,
  corner,
};

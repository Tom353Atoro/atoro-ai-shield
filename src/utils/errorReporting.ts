/**
 * Centralized error reporting utility for the application
 * 
 * This module provides functions for logging and reporting errors to various
 * services depending on the environment.
 */

/**
 * User info that can be attached to error reports
 */
interface UserInfo {
  id?: string;
  email?: string;
  role?: string;
  [key: string]: any;
}

/**
 * Additional context that can be attached to error reports
 */
interface ErrorContext {
  location?: string;
  componentName?: string;
  action?: string;
  metadata?: Record<string, any>;
  [key: string]: any;
}

/**
 * Configuration for error reporting
 */
interface ErrorReportingConfig {
  /** Whether to include user information in error reports */
  includeUserInfo: boolean;
  /** Whether to include URL and route information */
  includeRouteInfo: boolean;
  /** Whether to include browser and device information */
  includeDeviceInfo: boolean;
  /** Maximum depth for serializing objects */
  maxDepth: number;
  /** Custom error severity levels to use */
  severityLevels: string[];
}

// Default configuration
const defaultConfig: ErrorReportingConfig = {
  includeUserInfo: true,
  includeRouteInfo: true,
  includeDeviceInfo: true,
  maxDepth: 5,
  severityLevels: ['info', 'warning', 'error', 'critical']
};

// Global configuration
let config: ErrorReportingConfig = { ...defaultConfig };

/**
 * Configure the error reporting system
 */
export function configureErrorReporting(newConfig: Partial<ErrorReportingConfig>): void {
  config = { ...config, ...newConfig };
}

/**
 * Gets the current user's information if available
 */
function getUserInfo(): UserInfo | null {
  // In a real application, this would get user info from a auth context/store
  // For now, we'll return null or mock data
  return null;
}

/**
 * Gets the current route information
 */
function getRouteInfo(): Record<string, string> {
  return {
    url: window.location.href,
    path: window.location.pathname,
    referrer: document.referrer
  };
}

/**
 * Gets browser and device information
 */
function getDeviceInfo(): Record<string, string> {
  return {
    userAgent: navigator.userAgent,
    language: navigator.language,
    screenSize: `${window.screen.width}x${window.screen.height}`,
    viewport: `${window.innerWidth}x${window.innerHeight}`
  };
}

/**
 * Formats an error for logging
 */
function formatError(
  error: Error | string,
  context?: ErrorContext,
  severity: string = 'error'
): Record<string, any> {
  const formattedError: Record<string, any> = {
    timestamp: new Date().toISOString(),
    severity,
    message: typeof error === 'string' ? error : error.message,
  };

  // Add error details if it's an Error object
  if (error instanceof Error) {
    formattedError.name = error.name;
    formattedError.stack = error.stack;
  }

  // Add context if provided
  if (context) {
    formattedError.context = context;
  }

  // Add user info if enabled
  if (config.includeUserInfo) {
    const userInfo = getUserInfo();
    if (userInfo) {
      formattedError.user = userInfo;
    }
  }

  // Add route info if enabled
  if (config.includeRouteInfo) {
    formattedError.route = getRouteInfo();
  }

  // Add device info if enabled
  if (config.includeDeviceInfo) {
    formattedError.device = getDeviceInfo();
  }

  return formattedError;
}

/**
 * Log an error to the console with additional context
 */
export function logError(
  error: Error | string,
  context?: ErrorContext,
  severity: string = 'error'
): void {
  const formattedError = formatError(error, context, severity);
  
  // Log to console in development
  if (import.meta.env.DEV) {
    console.error('[ErrorReporting]', formattedError);
  }
}

/**
 * Report an error to an error tracking service
 */
export function reportError(
  error: Error | string,
  context?: ErrorContext,
  severity: string = 'error'
): void {
  const formattedError = formatError(error, context, severity);
  
  // In development, just log to console
  if (import.meta.env.DEV) {
    console.error('[ErrorReporting]', formattedError);
    return;
  }

  // In production, send to an error tracking service
  // This would be implemented with your chosen error tracking service
  if (import.meta.env.PROD) {
    try {
      // Example of how this would be implemented with a service like Sentry
      // Sentry.captureException(error, {
      //   level: severity,
      //   extra: { ...formattedError }
      // });
      
      // Or for custom error reporting endpoints
      // fetch('/api/error-reporting', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formattedError)
      // });
    } catch (reportingError) {
      // Fallback logging if reporting fails
      console.error('[ErrorReporting] Failed to report error:', reportingError);
      console.error('Original error:', formattedError);
    }
  }
}

/**
 * Handle React error boundary errors
 */
export function handleBoundaryError(
  error: Error, 
  errorInfo: React.ErrorInfo, 
  componentName?: string
): void {
  const context: ErrorContext = {
    componentName,
    componentStack: errorInfo.componentStack,
    type: 'react-error-boundary'
  };
  
  reportError(error, context, 'error');
}

export default {
  logError,
  reportError,
  handleBoundaryError,
  configureErrorReporting
}; 
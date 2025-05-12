import React, { Component, ErrorInfo, ReactNode, useState } from 'react';

interface EnhancedErrorBoundaryProps {
  /** React node to render when an error occurs */
  fallback?: ReactNode;
  /** Optional custom fallback component that receives error details and retry function */
  FallbackComponent?: React.ComponentType<FallbackProps>;
  /** Component tree that the error boundary wraps */
  children: ReactNode;
  /** Optional callback for error handling */
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  /** Whether to show detailed error information in development mode */
  showDetails?: boolean;
  /** Whether to provide a retry button */
  canRetry?: boolean;
  /** Optional error message to display instead of generic one */
  errorMessage?: string;
}

interface EnhancedErrorBoundaryState {
  /** Whether an error has occurred */
  hasError: boolean;
  /** The error that occurred */
  error?: Error;
  /** Error info containing component stack */
  errorInfo?: ErrorInfo;
}

export interface FallbackProps {
  /** The error that occurred */
  error: Error | undefined;
  /** Error information including component stack */
  errorInfo: ErrorInfo | undefined;
  /** Function to reset the error state and retry rendering the component */
  resetError: () => void;
  /** In development mode, pass true to show detailed error information */
  isDevelopment: boolean;
}

/**
 * Default fallback component that displays an error message and retry button
 */
const DefaultFallback: React.FC<FallbackProps> = ({ 
  error, 
  errorInfo, 
  resetError, 
  isDevelopment 
}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="text-red-600 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <h2 className="text-xl font-bold text-gray-900 mb-2">An Error Occurred</h2>
      <p className="text-gray-600 mb-4">
        Something went wrong while rendering this component.
      </p>
      <div className="flex flex-wrap gap-3 mb-4">
        <button 
          onClick={resetError}
          className="bg-atoro-teal hover:bg-atoro-teal/90 text-white px-4 py-2 rounded font-medium"
        >
          Try Again
        </button>
        
        {isDevelopment && (
          <button 
            onClick={() => setShowDetails(!showDetails)}
            className="border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded font-medium"
          >
            {showDetails ? 'Hide Details' : 'Show Details'}
          </button>
        )}
      </div>
      
      {isDevelopment && showDetails && (
        <div className="mt-4 p-4 bg-gray-100 rounded overflow-auto max-h-60 text-left">
          <p className="font-bold mb-2">Error: {error?.message}</p>
          <p className="text-sm font-mono whitespace-pre-wrap">
            {errorInfo?.componentStack}
          </p>
        </div>
      )}
    </div>
  );
};

/**
 * EnhancedErrorBoundary - An advanced error boundary component with detailed error
 * information, retry functionality, and customizable error handling.
 */
class EnhancedErrorBoundary extends Component<EnhancedErrorBoundaryProps, EnhancedErrorBoundaryState> {
  constructor(props: EnhancedErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
    this.resetError = this.resetError.bind(this);
  }

  static getDerivedStateFromError(error: Error): EnhancedErrorBoundaryState {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Update state with error info for displaying stack traces
    this.setState({ errorInfo });
    
    // Log error to console
    console.error('EnhancedErrorBoundary caught an error:', error);
    console.error('Component Stack:', errorInfo.componentStack);
    
    // Call onError callback if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  resetError() {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  }

  render(): ReactNode {
    const { hasError, error, errorInfo } = this.state;
    const { 
      children,
      fallback, 
      FallbackComponent,
      showDetails = false,
      canRetry = true 
    } = this.props;

    if (hasError) {
      // If a custom FallbackComponent is provided, use it
      if (FallbackComponent) {
        return (
          <FallbackComponent 
            error={error} 
            errorInfo={errorInfo} 
            resetError={this.resetError}
            isDevelopment={import.meta.env.DEV && showDetails}
          />
        );
      }
      
      // If a simple fallback is provided, use it
      if (fallback) {
        return fallback;
      }
      
      // Otherwise use the default fallback component
      return (
        <DefaultFallback 
          error={error} 
          errorInfo={errorInfo} 
          resetError={this.resetError}
          isDevelopment={import.meta.env.DEV && showDetails}
        />
      );
    }

    // Render children if there's no error
    return children;
  }
}

export default EnhancedErrorBoundary; 
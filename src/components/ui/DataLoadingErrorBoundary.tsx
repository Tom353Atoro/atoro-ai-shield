import React from 'react';
import EnhancedErrorBoundary, { FallbackProps } from './EnhancedErrorBoundary';

interface DataLoadingErrorBoundaryProps {
  /** Component tree that the error boundary wraps */
  children: React.ReactNode;
  /** Optional callback for error handling */
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
  /** The resource being loaded (e.g., "testimonials", "blog posts") */
  resourceName?: string;
  /** Optional CSS class for the container */
  className?: string;
}

/**
 * Custom fallback for data loading errors
 */
const DataLoadingFallback: React.FC<FallbackProps & { resourceName?: string }> = ({ 
  resetError,
  isDevelopment,
  error,
  errorInfo,
  resourceName = 'data' 
}) => {
  const [showDetails, setShowDetails] = React.useState(false);

  return (
    <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
      <div className="text-amber-500 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">Unable to load {resourceName}</h3>
      <p className="text-gray-600 mb-4">
        There was a problem loading this content. You can try again or check back later.
      </p>
      <div className="flex flex-wrap gap-3">
        <button 
          onClick={resetError}
          className="bg-atoro-teal hover:bg-atoro-teal/90 text-white px-4 py-2 rounded text-sm font-medium"
        >
          Try Again
        </button>
        
        {isDevelopment && (
          <button 
            onClick={() => setShowDetails(!showDetails)}
            className="border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded text-sm font-medium"
          >
            {showDetails ? 'Hide Error Details' : 'Show Error Details'}
          </button>
        )}
      </div>
      
      {isDevelopment && showDetails && (
        <div className="mt-4 p-3 bg-gray-100 rounded text-xs font-mono overflow-auto max-h-40">
          <p className="font-bold">{error?.name}: {error?.message}</p>
          <pre className="mt-2 whitespace-pre-wrap">{errorInfo?.componentStack}</pre>
        </div>
      )}
    </div>
  );
};

/**
 * DataLoadingErrorBoundary - A specialized error boundary for components that load data
 * 
 * This component provides a targeted error UI for data loading failures with
 * retry functionality and appropriate messaging.
 */
const DataLoadingErrorBoundary: React.FC<DataLoadingErrorBoundaryProps> = ({ 
  children, 
  onError,
  resourceName,
  className 
}) => {
  return (
    <div className={className}>
      <EnhancedErrorBoundary
        onError={onError}
        showDetails={true}
        FallbackComponent={(props) => (
          <DataLoadingFallback {...props} resourceName={resourceName} />
        )}
      >
        {children}
      </EnhancedErrorBoundary>
    </div>
  );
};

export default DataLoadingErrorBoundary; 
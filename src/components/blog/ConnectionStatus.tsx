
import React from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle, RefreshCw, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ConnectionStatusProps {
  connectionStatus: {
    checked: boolean;
    connected: boolean;
    error?: any;
  };
  isRetrying: boolean;
  handleRetry: () => Promise<void>;
}

const ConnectionStatus: React.FC<ConnectionStatusProps> = ({
  connectionStatus,
  isRetrying,
  handleRetry
}) => {
  if (!connectionStatus.checked || isRetrying) {
    return <div className="text-center py-4">Checking Sanity connection...</div>;
  }

  if (!connectionStatus.connected) {
    return (
      <Alert variant="destructive" className="mb-6">
        <AlertTriangle className="h-5 w-5" />
        <AlertTitle>Sanity Connection Error</AlertTitle>
        <AlertDescription>
          <p className="mb-3">
            Could not connect to your Sanity project. Please check your project configuration.
          </p>
          
          <div className="space-y-2 mb-4">
            <p><strong>Project ID:</strong> 6fq80c4a</p>
            <p><strong>Dataset:</strong> production</p>
            <p><strong>API Version:</strong> 2023-05-08 (downgraded from 2025-05-08 as a test)</p>
          </div>
          
          <Alert variant="outline" className="mb-4">
            <Info className="h-4 w-4" />
            <AlertDescription className="text-sm">
              <strong>Troubleshooting tips:</strong>
              <ul className="list-disc pl-5 mt-2">
                <li>Verify that your Sanity project is active and accessible</li>
                <li>Check if CORS origins are properly configured in Sanity</li>
                <li>Try using an older API version (currently testing with 2023-05-08)</li>
                <li>Confirm that your dataset contains content</li>
              </ul>
            </AlertDescription>
          </Alert>
          
          <Button 
            variant="outline" 
            onClick={handleRetry} 
            className="mt-4"
            disabled={isRetrying}
          >
            {isRetrying ? (
              <>
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                Connecting...
              </>
            ) : (
              <>
                <RefreshCw className="mr-2 h-4 w-4" />
                Try Again
              </>
            )}
          </Button>
        </AlertDescription>
      </Alert>
    );
  }

  return null;
};

export default ConnectionStatus;

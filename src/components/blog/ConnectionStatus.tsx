
import React from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle, RefreshCw } from 'lucide-react';
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
          <div className="space-y-2">
            <p><strong>Project ID:</strong> 6fq80c4a</p>
            <p><strong>Dataset:</strong> production</p>
            <p><strong>API Version:</strong> 2025-05-08</p>
          </div>
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

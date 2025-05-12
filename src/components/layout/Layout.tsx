import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import ErrorBoundary from '@/components/ui/ErrorBoundary';

interface LayoutProps {
  children: React.ReactNode;
  withoutFooter?: boolean;
}

// Layout-specific error fallback that preserves navigation
const LayoutErrorFallback: React.FC = () => (
  <div className="min-h-[50vh] flex items-center justify-center p-6">
    <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg text-center">
      <div className="text-amber-500 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <h2 className="text-xl font-bold text-gray-900 mb-3">Content Error</h2>
      <p className="text-gray-600 mb-6">We're having trouble displaying this content. Please try refreshing the page.</p>
      <button 
        onClick={() => window.location.reload()}
        className="inline-block bg-atoro-teal hover:bg-atoro-teal/90 text-white font-medium px-4 py-2 rounded"
      >
        Refresh Page
      </button>
    </div>
  </div>
);

const Layout: React.FC<LayoutProps> = ({ children, withoutFooter = false }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        <ErrorBoundary fallback={<LayoutErrorFallback />}>
          {children}
        </ErrorBoundary>
      </main>
      {!withoutFooter && <Footer />}
    </div>
  );
};

export default Layout;

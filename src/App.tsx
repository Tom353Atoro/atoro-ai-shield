
import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import ErrorBoundary from '@/components/ui/ErrorBoundary'
import Index from '@/pages/Index'
import Contact from '@/pages/Contact'
import StaticBlog from '@/pages/StaticBlog'
import Resources from '@/pages/Resources'
import Testimonials from '@/pages/Testimonials'
import NotFound from '@/pages/NotFound'
import CyberSecurity from '@/pages/CyberSecurity'
import Iso27001Service from '@/pages/Iso27001Service'
import PenetrationTesting from '@/pages/PenetrationTesting'
import Soc2 from '@/pages/Soc2'
import DataPrivacy from '@/pages/DataPrivacy'
import GDPRCompliance from '@/pages/GDPRCompliance'
import EURepresentative from '@/pages/EURepresentative'
import AIGovernance from '@/pages/AIGovernance'
import ISO42001 from '@/pages/ISO42001'
import AIRiskAssessment from '@/pages/AIRiskAssessment'
import SecurityTeamService from '@/pages/SecurityTeamService'
import Whitepapers from '@/pages/resources/Whitepapers'
import CaseStudies from '@/pages/resources/CaseStudies'
import ToolsTemplates from '@/pages/resources/ToolsTemplates'
import Webinars from '@/pages/resources/Webinars'
import CaseStudy from '@/pages/CaseStudy'
import ISO27701 from '@/pages/ISO27701'
import VDPO from '@/pages/VDPO'
import VAIGO from '@/pages/VAIGO'

// Development-only imports
// These imports are conditionally included based on environment
const DevOnlyComponents = import.meta.env.DEV
  ? {
      TestimonialCarouselDemo: React.lazy(() => import('@/pages/TestimonialCarouselDemo')),
      DesignSystem: React.lazy(() => import('@/pages/DesignSystem'))
    }
  : null;

// Root level fallback UI for catastrophic errors
const AppErrorFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg text-center">
      <div className="text-red-600 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <h1 className="text-2xl font-bold text-gray-900 mb-3">Something Went Wrong</h1>
      <p className="text-gray-600 mb-6">We apologize for the inconvenience. Our team has been notified and is working to fix the issue.</p>
      <a 
        href="/"
        className="inline-block bg-atoro-teal hover:bg-atoro-teal/90 text-white font-medium px-6 py-2 rounded"
      >
        Return to Home
      </a>
    </div>
  </div>
);

// Error logging function
const logError = (error: Error, errorInfo: React.ErrorInfo) => {
  // Log to console in development
  console.error('Application Error:', error);
  console.error('Component Stack:', errorInfo.componentStack);
  
  // In production, you would send this to your error tracking service
  if (import.meta.env.PROD) {
    // Example: Send to error tracking service
    // errorTrackingService.captureException(error, { extra: errorInfo });
  }
};

function App() {
  return (
    <ErrorBoundary fallback={<AppErrorFallback />} onError={logError}>
      <Routes>
        {/* Production Routes */}
        <Route path="/" element={<Index />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<StaticBlog />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/whitepapers" element={<Whitepapers />} />
        <Route path="/resources/case-studies" element={<CaseStudies />} />
        <Route path="/resources/tools-templates" element={<ToolsTemplates />} />
        <Route path="/resources/webinars" element={<Webinars />} />
        <Route path="/services/cyber-security" element={<CyberSecurity />} />
        <Route path="/services/cyber-security/iso-27001" element={<Iso27001Service />} />
        <Route path="/services/cyber-security/penetration-testing" element={<PenetrationTesting />} />
        <Route path="/services/cyber-security/soc2" element={<Soc2 />} />
        <Route path="/services/cyber-security/security-team-aas" element={<SecurityTeamService />} />
        <Route path="/services/data-privacy" element={<DataPrivacy />} />
        <Route path="/services/data-privacy/gdpr-compliance" element={<GDPRCompliance />} />
        <Route path="/services/data-privacy/eu-representative" element={<EURepresentative />} />
        <Route path="/services/data-privacy/iso-27701" element={<ISO27701 />} />
        <Route path="/services/data-privacy/vdpo" element={<VDPO />} />
        <Route path="/services/ai-governance" element={<AIGovernance />} />
        <Route path="/services/ai-governance/iso-42001" element={<ISO42001 />} />
        <Route path="/services/ai-governance/ai-risk-assessment" element={<AIRiskAssessment />} />
        <Route path="/services/ai-governance/vaigo" element={<VAIGO />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/resources/case-studies/iso-42001" element={<CaseStudy />} />
        
        {/* Development-only Routes - Properly wrapped with conditional rendering */}
        {import.meta.env.DEV && DevOnlyComponents && (
          <React.Fragment>
            <Route 
              path="/dev/testimonial-demo" 
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <DevOnlyComponents.TestimonialCarouselDemo />
                </React.Suspense>
              } 
            />
            <Route 
              path="/dev/design-system" 
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <DevOnlyComponents.DesignSystem />
                </React.Suspense>
              } 
            />
          </React.Fragment>
        )}
        
        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </ErrorBoundary>
  )
}

export default App

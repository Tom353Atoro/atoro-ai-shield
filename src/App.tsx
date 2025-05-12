import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
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

function App() {
  return (
    <>
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
        
        {/* Development-only Routes */}
        {import.meta.env.DEV && DevOnlyComponents && (
          <React.Suspense fallback={<div>Loading...</div>}>
            <Route path="/dev/testimonial-demo" element={<DevOnlyComponents.TestimonialCarouselDemo />} />
            <Route path="/dev/design-system" element={<DevOnlyComponents.DesignSystem />} />
          </React.Suspense>
        )}
        
        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App

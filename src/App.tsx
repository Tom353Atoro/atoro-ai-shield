
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import Index from '@/pages/Index'
import Contact from '@/pages/Contact'
import StaticBlog from '@/pages/StaticBlog'
import StaticBlogPost from '@/pages/StaticBlogPost'
import Blog from '@/pages/Blog'
import BlogPost from '@/pages/BlogPost'
import Resources from '@/pages/Resources'
import Testimonials from '@/pages/Testimonials'
import NotFound from '@/pages/NotFound'
import CyberSecurity from '@/pages/CyberSecurity'
import Iso27001Service from '@/pages/Iso27001Service'
import ISO27701 from '@/pages/ISO27701'
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
import TestimonialCarouselDemo from '@/pages/TestimonialCarouselDemo'
import DesignSystem from '@/pages/DesignSystem'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<StaticBlog />} />
        <Route path="/blog/:slug" element={<StaticBlogPost />} />
        <Route path="/dynamic-blog" element={<Blog />} />
        <Route path="/dynamic-blog/:slug" element={<BlogPost />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/whitepapers" element={<Whitepapers />} />
        <Route path="/resources/case-studies" element={<CaseStudies />} />
        <Route path="/resources/tools-templates" element={<ToolsTemplates />} />
        <Route path="/resources/webinars" element={<Webinars />} />
        <Route path="/services/cyber-security" element={<CyberSecurity />} />
        <Route path="/services/iso-27001" element={<Iso27001Service />} />
        <Route path="/services/iso-27701" element={<ISO27701 />} />
        <Route path="/services/cyber-security/penetration-testing" element={<PenetrationTesting />} />
        <Route path="/services/cyber-security/soc2" element={<Soc2 />} />
        <Route path="/services/data-privacy" element={<DataPrivacy />} />
        <Route path="/services/data-privacy/gdpr-compliance" element={<GDPRCompliance />} />
        <Route path="/services/data-privacy/eu-representative" element={<EURepresentative />} />
        <Route path="/services/ai-governance" element={<AIGovernance />} />
        <Route path="/services/ai-governance/iso-42001" element={<ISO42001 />} />
        <Route path="/services/ai-governance/ai-risk-assessment" element={<AIRiskAssessment />} />
        <Route path="/services/security-team-aas" element={<SecurityTeamService />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/testimonial-demo" element={<TestimonialCarouselDemo />} />
        <Route path="/design-system" element={<DesignSystem />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App


import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import StaticBlog from './pages/StaticBlog';
import StaticBlogPost from './pages/StaticBlogPost';
import CyberSecurity from './pages/CyberSecurity';
import Iso27001Service from './pages/Iso27001Service';
import DataPrivacy from './pages/DataPrivacy';
import AIGovernance from './pages/AIGovernance';
import PenetrationTesting from './pages/PenetrationTesting';
import Soc2 from './pages/Soc2';
import GDPRCompliance from './pages/GDPRCompliance';
import ISO27701 from './pages/ISO27701';
import EURepresentative from './pages/EURepresentative';
import Resources from './pages/Resources';
import SecurityTeamService from './pages/SecurityTeamService';

// Resource pages
import Whitepapers from './pages/resources/Whitepapers';
import ToolsTemplates from './pages/resources/ToolsTemplates';
import Webinars from './pages/resources/Webinars';
import CaseStudies from './pages/resources/CaseStudies';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<StaticBlog />} />
      <Route path="/blog/:slug" element={<StaticBlogPost />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/resources/whitepapers" element={<Whitepapers />} />
      <Route path="/resources/tools-templates" element={<ToolsTemplates />} />
      <Route path="/resources/webinars" element={<Webinars />} />
      <Route path="/resources/case-studies" element={<CaseStudies />} />
      <Route path="/services/cybersecurity" element={<CyberSecurity />} />
      <Route path="/services/iso27001" element={<Iso27001Service />} />
      <Route path="/services/security-team" element={<SecurityTeamService />} />
      <Route path="/services/data-privacy" element={<DataPrivacy />} />
      <Route path="/services/ai-governance" element={<AIGovernance />} />
      <Route path="/services/penetration-testing" element={<PenetrationTesting />} />
      <Route path="/services/soc2" element={<Soc2 />} />
      <Route path="/services/data-privacy/gdpr-compliance" element={<GDPRCompliance />} />
      <Route path="/services/data-privacy/iso-27701" element={<ISO27701 />} />
      <Route path="/services/data-privacy/eu-representative" element={<EURepresentative />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App

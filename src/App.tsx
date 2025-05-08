
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CyberSecurity from "./pages/CyberSecurity";
import DataPrivacy from "./pages/DataPrivacy";
import AIGovernance from "./pages/AIGovernance";
import SecurityTeamService from "./pages/SecurityTeamService";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import StaticBlog from "./pages/StaticBlog";
import StaticBlogPost from "./pages/StaticBlogPost";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Resources from "./pages/Resources";
import Webinars from "./pages/resources/Webinars";
import Whitepapers from "./pages/resources/Whitepapers";
import ToolsTemplates from "./pages/resources/ToolsTemplates";
import CaseStudies from "./pages/resources/CaseStudies";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/cyber-security" element={<CyberSecurity />} />
          <Route path="/services/data-privacy" element={<DataPrivacy />} />
          <Route path="/services/ai-governance" element={<AIGovernance />} />
          <Route path="/services/security-team-aas" element={<SecurityTeamService />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<StaticBlog />} />
          <Route path="/blog/:slug" element={<StaticBlogPost />} />
          <Route path="/dynamic-blog" element={<Blog />} />
          <Route path="/dynamic-blog/:slug" element={<BlogPost />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/webinars" element={<Webinars />} />
          <Route path="/resources/whitepapers" element={<Whitepapers />} />
          <Route path="/resources/tools-templates" element={<ToolsTemplates />} />
          <Route path="/resources/case-studies" element={<CaseStudies />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

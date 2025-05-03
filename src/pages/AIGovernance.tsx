
import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import TestimonialSection from '@/components/shared/TestimonialSection';
import HeroSection from '@/components/ai-governance/HeroSection';
import ServicesSection from '@/components/ai-governance/ServicesSection';
import FeaturedServiceSection from '@/components/ai-governance/FeaturedServiceSection';
import CTASection from '@/components/ai-governance/CTASection';

const AIGovernance = () => {
  // AI-specific testimonials
  const aiTestimonials = [
    {
      quote: "Atoro helped us implement a robust AI governance framework that aligns with emerging regulations. Their ISO 42001 guidance was invaluable for our AI-driven products.",
      author: "Jennifer Chen",
      title: "CTO",
      company: "NexusAI",
      rating: 5
    }, {
      quote: "The vAIGO service has been transformative, providing us with expert guidance on AI ethics and compliance without having to hire specialized staff. Worth every penny.",
      author: "Marcus Williams",
      title: "Head of Innovation",
      company: "DataSphere",
      rating: 4.5
    }, {
      quote: "Our AI risk assessment uncovered several potential bias issues before launch. Atoro's team provided practical solutions that improved our models while maintaining performance.",
      author: "Priya Sharma",
      title: "AI Product Manager",
      company: "TechVision",
      rating: 5
    }
  ];

  return (
    <ServiceLayout>
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section - Three Cards */}
      <ServicesSection />

      {/* ISO 42001 - Featured Service */}
      <FeaturedServiceSection />

      {/* Customer Testimonials - AI specific */}
      <TestimonialSection 
        testimonials={aiTestimonials} 
        title="What Our AI Governance Clients Say" 
        description="Read how we've helped companies like yours implement responsible AI practices." 
        variant="featured" 
        showRatings={true} 
        bgColor="bg-white" 
      />

      {/* CTA Section */}
      <CTASection />
    </ServiceLayout>
  );
};

export default AIGovernance;

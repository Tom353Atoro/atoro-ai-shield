
import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import HeroSection from '@/components/ai-governance/HeroSection';
import ClientSection from '@/components/ai-governance/ClientSection';
import ISO42001Section from '@/components/ai-governance/ISO42001Section';
import RiskAssessmentSection from '@/components/ai-governance/RiskAssessmentSection';
import FeaturedServiceSection from '@/components/ai-governance/FeaturedServiceSection';
import ServicesSection from '@/components/ai-governance/ServicesSection';
import TestimonialsSection from '@/components/ai-governance/TestimonialsSection';
import CTASection from '@/components/ai-governance/CTASection';

const AIGovernance = () => {
  return (
    <ServiceLayout>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Client Logos */}
      <ClientSection />
      
      {/* ISO42001 Section */}
      <ISO42001Section />
      
      {/* Risk Assessment Section */}
      <RiskAssessmentSection />
      
      {/* Featured Service Section */}
      <FeaturedServiceSection />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* CTA Section */}
      <CTASection />
    </ServiceLayout>
  );
};

export default AIGovernance;

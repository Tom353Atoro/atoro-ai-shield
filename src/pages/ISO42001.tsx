
import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import HeroSection from '@/components/iso42001/HeroSection';
import BenefitsSection from '@/components/iso42001/BenefitsSection';
import ISO42001Section from '@/components/ai-governance/ISO42001Section';
import TestimonialsSection from '@/components/iso42001/TestimonialsSection';
import CTASection from '@/components/iso42001/CTASection';

const ISO42001 = () => {
  return (
    <ServiceLayout>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Benefits Section */}
      <BenefitsSection />
      
      {/* Implementation Process Section */}
      <ISO42001Section />
      
      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* CTA Section */}
      <CTASection />
    </ServiceLayout>
  );
};

export default ISO42001;

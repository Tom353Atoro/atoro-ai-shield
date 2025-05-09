
import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import HeroSection from '@/components/ai-risk-assessment/HeroSection';
import ProcessSection from '@/components/ai-risk-assessment/ProcessSection';
import TestimonialsSection from '@/components/ai-risk-assessment/TestimonialsSection';
import CTASection from '@/components/ai-risk-assessment/CTASection';
import RiskAssessmentSection from '@/components/ai-governance/RiskAssessmentSection';

const AIRiskAssessment = () => {
  return (
    <ServiceLayout>
      {/* Hero Section */}
      <HeroSection />

      {/* Main Assessment Content */}
      <RiskAssessmentSection />
      
      {/* Process Section */}
      <ProcessSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* CTA Section */}
      <CTASection />
    </ServiceLayout>
  );
};

export default AIRiskAssessment;

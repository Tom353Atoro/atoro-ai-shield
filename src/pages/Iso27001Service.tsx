
import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import LogoBanner from '@/components/home/LogoBanner';
import CertificationLogos from '@/components/shared/CertificationLogos';

// Import ISO 27001 specific components
import HeroSection from '@/components/iso27001/HeroSection';
import BenefitsSection from '@/components/iso27001/BenefitsSection';
import ProcessSection from '@/components/iso27001/ProcessSection';
import ScopeSection from '@/components/iso27001/ScopeSection';
import CTASection from '@/components/iso27001/CTASection';
import FAQSection from '@/components/iso27001/FAQSection';
import TestimonialsSection from '@/components/iso27001/TestimonialsSection';

const Iso27001Service = () => {
  return (
    <ServiceLayout>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Client Logo Section */}
      <section className="py-12 bg-gray-50">
        <LogoBanner />
      </section>
      
      {/* Benefits Section */}
      <BenefitsSection />
      
      {/* Process Section */}
      <ProcessSection />
      
      {/* Scope Definition Section */}
      <ScopeSection />
      
      {/* Certification logos */}
      <section className="py-16 bg-white">
        <CertificationLogos 
          title="Industry-Standard Certifications" 
          description="Our security practices and implementation methodologies are backed by industry-recognized certifications."
        />
      </section>
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* CTA Section */}
      <CTASection />
    </ServiceLayout>
  );
};

export default Iso27001Service;

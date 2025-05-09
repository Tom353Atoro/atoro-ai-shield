
import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';

// Import refactored components
import HeroSection from '@/components/security-team-service/HeroSection';
import ClientLogoSection from '@/components/security-team-service/ClientLogoSection';
import ServiceDescription from '@/components/security-team-service/ServiceDescription';
import BenefitsSection from '@/components/security-team-service/BenefitsSection';
import MethodologySection from '@/components/security-team-service/MethodologySection';
import FeaturesSection from '@/components/security-team-service/FeaturesSection';
import TeamSection from '@/components/security-team-service/TeamSection';
import CertificationSection from '@/components/security-team-service/CertificationSection';
import TestimonialsSection from '@/components/security-team-service/TestimonialsSection';
import ContactSection from '@/components/security-team-service/ContactSection';
import FAQSection from '@/components/security-team-service/FAQSection';

const SecurityTeamService = () => {
  return (
    <ServiceLayout>
      {/* Hero Section */}
      <HeroSection />

      {/* Client Logo Section */}
      <ClientLogoSection />

      {/* Service Description */}
      <ServiceDescription />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Methodology Section */}
      <MethodologySection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Team Section */}
      <TeamSection />

      {/* Certification Logos Section */}
      <CertificationSection />

      {/* Testimonial section */}
      <TestimonialsSection />

      {/* Contact Form */}
      <ContactSection />

      {/* FAQ Section */}
      <FAQSection />
    </ServiceLayout>
  );
};

export default SecurityTeamService;

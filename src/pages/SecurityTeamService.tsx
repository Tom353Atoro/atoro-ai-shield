
import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import LogoBanner from '@/components/home/LogoBanner';
import TestimonialSection from '@/components/shared/TestimonialSection';
import CertificationLogos from '@/components/shared/CertificationLogos';

// Import refactored components
import HeroSection from '@/components/security-team-service/HeroSection';
import ServiceDescription from '@/components/security-team-service/ServiceDescription';
import BenefitsSection from '@/components/security-team-service/BenefitsSection';
import MethodologySection from '@/components/security-team-service/MethodologySection';
import FeaturesSection from '@/components/security-team-service/FeaturesSection';
import TeamSection from '@/components/security-team-service/TeamSection';
import ContactSection from '@/components/security-team-service/ContactSection';
import FAQSection from '@/components/security-team-service/FAQSection';

const SecurityTeamService = () => {
  // Service-specific testimonials
  const serviceTestimonials = [{
    quote: "Atoro's Security Team as a Service model gave us enterprise-grade protection without the overhead of building an in-house security department. It's been transformative for our compliance journey.",
    author: "Sarah Johnson",
    title: "COO",
    company: "DataShield",
    rating: 5
  }, {
    quote: "Working with Atoro for our SOC 2 compliance was seamless. Their team was responsive on Slack and guided us through the entire process, helping us achieve certification on our first attempt.",
    author: "David Rivera",
    title: "Head of Engineering",
    company: "SecureStack",
    rating: 5
  }, {
    quote: "Having Atoro manage our Drata implementation saved us countless hours and helped us close enterprise deals that required SOC 2 certification. Their expertise was invaluable.",
    author: "Michael Zhang",
    title: "CTO",
    company: "CloudSecure",
    rating: 4.5
  }];

  return (
    <ServiceLayout>
      {/* Hero Section */}
      <HeroSection />

      {/* Client Logo Section */}
      <section className="py-12 bg-gray-50">
        <LogoBanner />
      </section>

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
      <section className="py-16 bg-white">
        <CertificationLogos 
          title="Industry-Standard Certifications" 
          description="Our security practices and services are backed by industry-recognized certifications."
          className="bg-white" 
        />
      </section>

      {/* Testimonial section */}
      <TestimonialSection 
        testimonials={serviceTestimonials} 
        title="What Our Clients Say" 
        description="Read how we've helped companies like yours build world-class security programs" 
        variant="featured" 
        showRatings={true} 
        bgColor="bg-white" 
      />

      {/* Contact Form */}
      <ContactSection />

      {/* FAQ Section */}
      <FAQSection />
    </ServiceLayout>
  );
};

export default SecurityTeamService;

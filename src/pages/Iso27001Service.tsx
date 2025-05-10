
import React from 'react';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import Iso27001Overview from '@/components/iso27001/Iso27001Overview';
import BenefitsSection from '@/components/iso27001/BenefitsSection';
import ProcessSection from '@/components/iso27001/ProcessSection';
import ScopeSection from '@/components/iso27001/ScopeSection';
import FAQSection from '@/components/iso27001/FAQSection';
import CTASection from '@/components/iso27001/CTASection';
import CertificationLogos from '@/components/shared/CertificationLogos';

const Iso27001Service = () => {
  // ISO 27001 specific testimonials
  const testimonials = [
    {
      quote: "Atoro's ISO 27001 implementation service was transformative. Their streamlined approach helped us achieve certification in just 11 weeks.",
      author: "Michael Chen",
      title: "CTO",
      company: "CloudSecure",
      avatarSrc: "/lovable-uploads/273bf97c-b513-4a94-8fdd-7a5bc90eb254.png",
      rating: 5
    },
    {
      quote: "The ISO 27001 process with Atoro was incredibly efficient. Their team handled complex documentation and helped implement practical security controls.",
      author: "Sarah Johnson",
      title: "Head of Compliance",
      company: "DataShield",
      avatarSrc: "/lovable-uploads/2a43c2aa-a14c-448c-8429-8fb1d9c01ee3.png",
      rating: 4.5
    },
    {
      quote: "As a fast-growing startup, we needed to get ISO 27001 certified quickly. Atoro delivered a tailored implementation that matched our specific needs.",
      author: "David Rodriguez",
      title: "CEO",
      company: "SecureStack",
      avatarSrc: "/lovable-uploads/2ff67c0a-34c5-4cf0-83e9-3dbddc25b5ce.png",
      rating: 5
    }
  ];

  return (
    <ServicePageTemplate
      heroProps={{
        title: <><span className="text-atoro-green">Fast-track</span> Your ISO 27001 Certification</>,
        description: "Streamlined ISO 27001 implementation for SaaS companies. Get certified in half the time with our expert-led process.",
        primaryButtonText: "Start Your ISO 27001 Journey",
        primaryButtonLink: "/contact",
        secondaryButtonText: "Book a Consultation",
        secondaryButtonLink: "/contact",
        imageUrl: "/lovable-uploads/697c806d-2cfd-402a-8b50-65ceecb5c88c.png",
        badgeText: "ISO 27001 Implementation",
        backgroundClass: "bg-gradient-to-br from-atoro-teal to-atoro-blue"
      }}
      testimonials={testimonials}
      testimonialsTitle="What Our Clients Say"
      testimonialsDescription="Hear from SaaS companies that have successfully achieved ISO 27001 certification with our help."
      testimonialsBadgeText="ISO 27001 Excellence"
      serviceSections={
        <>
          {/* Overview Section - added first */}
          <Iso27001Overview />
          
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
        </>
      }
      faqSection={<FAQSection />}
      ctaSection={<CTASection />}
    />
  );
};

export default Iso27001Service;

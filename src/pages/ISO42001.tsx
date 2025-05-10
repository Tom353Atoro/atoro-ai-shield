
import React from 'react';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import ISO42001Overview from '@/components/iso42001/ISO42001Overview';
import BenefitsSection from '@/components/iso42001/BenefitsSection';
import ISO42001Section from '@/components/ai-governance/ISO42001Section';
import TestimonialsSection from '@/components/iso42001/TestimonialsSection';
import ISO42001CTASection from '@/components/iso42001/ISO42001CTASection';

const ISO42001 = () => {
  // ISO 42001 specific testimonials (extracted from TestimonialsSection)
  const testimonials = [
    {
      quote: "Atoro guided us through the entire ISO 42001 certification process with expertise and efficiency. Their approach made implementation straightforward.",
      author: "David Keller",
      title: "Chief AI Officer",
      company: "Neuron Analytics",
      rating: 5
    },
    {
      quote: "The ISO 42001 implementation program provided by Atoro was comprehensive and tailored to our specific needs.",
      author: "Sarah Johnson",
      title: "Head of Compliance",
      company: "TechForward",
      rating: 4.5
    }
  ];

  return (
    <ServicePageTemplate
      heroProps={{
        title: <><span className="text-atoro-green">ISO 42001</span> Implementation</>,
        description: "Deploy robust AI governance frameworks with our ISO 42001 implementation service, ensuring your AI systems meet international standards for trust and transparency.",
        primaryButtonText: "Book a Consultation",
        primaryButtonLink: "/contact",
        secondaryButtonText: "Learn More",
        badgeText: "AI Governance",
        backgroundClass: "bg-gradient-to-br from-atoro-teal to-atoro-blue"
      }}
      testimonials={testimonials}
      testimonialsBadgeText="ISO 42001 Success Stories"
      serviceSections={
        <>
          {/* Overview Section - added first */}
          <ISO42001Overview />
          
          {/* Benefits Section */}
          <BenefitsSection />
          
          {/* Implementation Process Section */}
          <ISO42001Section />
        </>
      }
      ctaSection={<ISO42001CTASection />}
    />
  );
};

export default ISO42001;

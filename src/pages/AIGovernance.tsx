
import React from 'react';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import ServicesSection from '@/components/ai-governance/ServicesSection';
import FeaturedServiceSection from '@/components/ai-governance/FeaturedServiceSection';
import ApproachSection from '@/components/ai-governance/ApproachSection';
import TestimonialsSection from '@/components/ai-governance/TestimonialsSection';
import CTASection from '@/components/ai-governance/CTASection';
import ClientSection from '@/components/ai-governance/ClientSection';

const AIGovernance = () => {
  // Extract testimonials from TestimonialsSection component
  const testimonials = [
    {
      quote: "Implementing AI governance with Atoro has transformed how we manage AI risks. Their expertise helped us build trust with customers and regulators.",
      author: "Sarah Chen",
      title: "Chief AI Officer",
      company: "TechInnovate",
      rating: 5
    },
    {
      quote: "Atoro's approach to AI governance is both practical and comprehensive. They helped us establish controls that align with our business objectives.",
      author: "Michael Johnson",
      title: "CTO",
      company: "DataFirst AI",
      rating: 4.5
    },
    {
      quote: "Their team's deep understanding of both AI technology and regulatory requirements was crucial in developing our governance framework.",
      author: "Elena Rodriguez",
      title: "Head of Compliance",
      company: "AI Solutions",
      rating: 5
    }
  ];

  return (
    <ServicePageTemplate
      heroProps={{
        title: <><span className="text-atoro-green">AI Governance</span> Solutions</>,
        description: "Build trust in your AI systems with comprehensive governance frameworks that ensure ethical, transparent, and compliant artificial intelligence.",
        primaryButtonText: "Schedule Consultation",
        primaryButtonLink: "/contact",
        badgeText: "AI Governance",
        backgroundClass: "bg-gradient-to-br from-atoro-purple to-atoro-blue"
      }}
      showClientLogos={true}
      testimonials={testimonials}
      testimonialsBadgeText="AI Governance Excellence"
      serviceSections={
        <>
          {/* Services Section */}
          <ServicesSection />
          
          {/* Featured Service Section */}
          <FeaturedServiceSection />
          
          {/* Approach Section */}
          <ApproachSection />
          
          {/* Client Logos - Custom Implementation */}
          <ClientSection />
        </>
      }
      ctaSection={<CTASection />}
    />
  );
};

export default AIGovernance;

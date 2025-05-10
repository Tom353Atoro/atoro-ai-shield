
import React from 'react';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import ProcessSection from '@/components/ai-risk-assessment/ProcessSection';
import TestimonialsSection from '@/components/ai-risk-assessment/TestimonialsSection';
import CTASection from '@/components/ai-risk-assessment/CTASection';
import RiskAssessmentSection from '@/components/ai-governance/RiskAssessmentSection';

const AIRiskAssessment = () => {
  // Extract testimonials from TestimonialsSection component
  const testimonials = [
    {
      quote: "Atoro's AI risk assessment helped us identify and mitigate risks we hadn't considered. Their expertise in both AI technology and governance was invaluable.",
      author: "Alex Chen",
      title: "CTO",
      company: "AI Innovations",
      rating: 5
    },
    {
      quote: "The structured approach to AI risk assessment provided clarity and direction for our compliance efforts.",
      author: "Sophia Rodriguez",
      title: "Head of Compliance",
      company: "DataTech Solutions",
      rating: 4.5
    }
  ];

  return (
    <ServicePageTemplate
      heroProps={{
        title: <><span className="text-atoro-green">AI Risk</span> Assessment</>,
        description: "Identify and mitigate risks in your AI systems with our comprehensive assessment methodology, ensuring compliance with emerging regulations and ethical standards.",
        primaryButtonText: "Schedule Assessment",
        primaryButtonLink: "/contact",
        secondaryButtonText: "Download Guide",
        secondaryButtonLink: "/resources/ai-risk-guide",
        badgeText: "AI Governance",
        backgroundClass: "bg-gradient-to-br from-atoro-purple to-atoro-blue"
      }}
      testimonials={testimonials}
      testimonialsBadgeText="AI Governance Excellence"
      serviceSections={
        <>
          {/* Main Assessment Content */}
          <RiskAssessmentSection />
          
          {/* Process Section */}
          <ProcessSection />
        </>
      }
      ctaSection={<CTASection />}
    />
  );
};

export default AIRiskAssessment;

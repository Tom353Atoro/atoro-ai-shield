
import React from 'react';
import { TestimonialItem } from '@/types';

// Add the missing clientSection property to the PillarPageTemplateProps interface
// This will fix the TypeScript errors in AIGovernance.tsx and DataPrivacy.tsx
interface PillarPageTemplateProps {
  heroProps: {
    title: React.ReactNode;
    description: string;
    primaryButtonText: string;
    primaryButtonLink: string;
    badgeText?: string;
    backgroundClass?: string;
    imageUrl?: string; // Making imageUrl optional
  };
  testimonials: TestimonialItem[];
  testimonialsTitle?: string;
  testimonialsDescription?: string;
  testimonialsBadgeText?: string;
  featuredServiceSection: React.ReactNode;
  servicesSection: React.ReactNode;
  approachSection: React.ReactNode;
  ctaSection: React.ReactNode;
  clientSection?: React.ReactNode; // Add the missing property
}

const PillarPageTemplate = ({
  heroProps,
  testimonials,
  testimonialsTitle,
  testimonialsDescription,
  testimonialsBadgeText,
  featuredServiceSection,
  servicesSection,
  approachSection,
  ctaSection,
  clientSection
}: PillarPageTemplateProps) => {
  // Component implementation would go here
  return (
    <div>
      {/* Hero section */}
      <div className="hero">
        <h1>{heroProps.title}</h1>
        <p>{heroProps.description}</p>
      </div>
      
      {/* Featured Service Section */}
      {featuredServiceSection}
      
      {/* Services Section */}
      {servicesSection}
      
      {/* Approach Section */}
      {approachSection}
      
      {/* Testimonials */}
      <div className="testimonials">
        {testimonialsBadgeText && <span className="badge">{testimonialsBadgeText}</span>}
        {testimonialsTitle && <h2>{testimonialsTitle}</h2>}
        {testimonialsDescription && <p>{testimonialsDescription}</p>}
        {/* Testimonial items would be rendered here */}
      </div>
      
      {/* Client Section if provided */}
      {clientSection}
      
      {/* CTA Section */}
      {ctaSection}
    </div>
  );
};

export default PillarPageTemplate;

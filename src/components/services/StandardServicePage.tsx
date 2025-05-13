
import React from 'react';
import Layout from '@/components/layout/Layout';
import { SEOProps, ClientLogoItem, TestimonialItem } from '@/types';
import UnifiedHero, { UnifiedHeroProps } from '@/components/shared/UnifiedHero';
import ClientLogos from '@/components/shared/ClientLogos';
import AnimatedTestimonials from '@/components/shared/AnimatedTestimonials';
import { tokens } from '@/lib/designTokens';

export interface StandardServicePageProps {
  seo?: SEOProps;
  heroProps: UnifiedHeroProps;
  clientLogos?: ClientLogoItem[];
  clientLogosTitle?: string;
  clientLogosDescription?: string;
  clientLogosBgColor?: string;
  showClientLogos?: boolean;
  testimonials?: TestimonialItem[];
  testimonialsTitle?: string;
  testimonialsDescription?: string;
  testimonialsBadgeText?: string;
  testimonialsBgColor?: string;
  children: React.ReactNode;
}

const StandardServicePage: React.FC<StandardServicePageProps> = ({
  seo,
  heroProps,
  clientLogos,
  clientLogosTitle,
  clientLogosDescription,
  clientLogosBgColor = "bg-gray-50",
  showClientLogos = true,
  testimonials,
  testimonialsTitle = "What Our Clients Say",
  testimonialsDescription = "Hear from our satisfied clients",
  testimonialsBadgeText = "Testimonials",
  testimonialsBgColor = "bg-white",
  children,
}) => {
  // Ensure consistent hero background gradient
  const heroBackground = heroProps.backgroundClass || tokens.gradients.heroDarkTeal;
  
  return (
    <Layout>
      {/* Hero Section */}
      <UnifiedHero
        {...heroProps}
        backgroundClass={heroBackground}
      />

      {/* Client Logos Section */}
      {showClientLogos && clientLogos && clientLogos.length > 0 && (
        <ClientLogos
          logos={clientLogos}
          title={clientLogosTitle}
          description={clientLogosDescription}
          bgColor={clientLogosBgColor}
        />
      )}

      {/* Main Content */}
      {children}

      {/* Testimonials Section */}
      {testimonials && testimonials.length > 0 && (
        <AnimatedTestimonials
          testimonials={testimonials}
          title={testimonialsTitle}
          description={testimonialsDescription}
          badgeText={testimonialsBadgeText}
          bgColor={testimonialsBgColor}
        />
      )}
    </Layout>
  );
};

export default StandardServicePage;

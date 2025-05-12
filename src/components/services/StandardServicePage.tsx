import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import ClientLogos from '@/components/shared/ClientLogos';
import AnimatedTestimonials from '@/components/shared/AnimatedTestimonials';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/badge';
import ErrorBoundary from '@/components/ui/ErrorBoundary';
import {
  ServiceHeroProps,
  TestimonialItem,
  ClientLogoItem,
  ServiceSectionProps,
  ServicePageProps,
  ErrorBoundaryProps
} from '@/types';

// Service Section Wrapper Component
export const ServiceSection: React.FC<ServiceSectionProps> = ({ 
  id, 
  className = "py-12 bg-white", 
  children 
}) => {
  return (
    <section id={id} className={className}>
      <Container>
        {children}
      </Container>
    </section>
  );
};

// The Hero Section Component
const ServiceHero: React.FC<ServiceHeroProps> = ({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  imageUrl,
  badgeText,
  backgroundClass = "bg-gradient-to-br from-atoro-teal to-black"
}) => {
  return (
    <section className={`pt-16 pb-8 text-white relative overflow-hidden ${backgroundClass}`}>
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="absolute inset-0 bg-grid-white/10"></div>
      </div>
      
      <Container>
        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
          <div>
            {badgeText && (
              <Badge className="mb-4 bg-atoro-green/20 text-atoro-green hover:bg-atoro-green/30">
                {badgeText}
              </Badge>
            )}
            <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className="text-lg mb-6 opacity-90">
              {description}
            </p>
            <div className="flex flex-wrap gap-3">
              {primaryButtonText && (
                <a 
                  href={primaryButtonLink || "/contact"}
                  className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green px-4 py-2 rounded font-medium inline-block"
                  aria-label={primaryButtonText}
                >
                  {primaryButtonText}
                </a>
              )}
              
              {secondaryButtonText && (
                <a 
                  href={secondaryButtonLink || "#"}
                  className="border border-white text-white hover:bg-white/10 px-4 py-2 rounded font-medium inline-block"
                  aria-label={secondaryButtonText}
                >
                  {secondaryButtonText}
                </a>
              )}
            </div>
          </div>
          
          {imageUrl && (
            <div className="hidden md:block">
              <img 
                src={imageUrl}
                alt="Service illustration" 
                className="object-cover w-full rounded-lg" 
                loading="eager" // Critical above-the-fold image
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

/**
 * StandardServicePage - A standardized template for service pages
 * 
 * This component provides a consistent structure for all service pages
 * with typed props and proper error handling.
 */
const StandardServicePage: React.FC<ServicePageProps> = ({
  // SEO & Metadata
  seo,
  
  // Hero Section
  heroProps,
  
  // Client Logos Section
  showClientLogos = true,
  clientLogos,
  clientLogosTitle = "Trusted by Leading Organizations",
  clientLogosDescription = "We've helped companies across industries strengthen their security posture",
  clientLogosBgColor = "bg-gray-50",
  
  // Main Content
  overviewSection,
  benefitsSection,
  processSection,
  additionalSections = [],
  
  // Testimonials
  testimonials,
  testimonialsTitle = "What Our Clients Say",
  testimonialsDescription = "Read how we've helped companies like yours achieve their goals",
  testimonialsBadgeText = "Success Stories",
  testimonialsBgColor = "bg-white",
  
  // FAQ and CTA
  faqSection,
  ctaSection
}) => {
  // In a real implementation, we would use Next.js Head or other meta tag component
  // to set SEO metadata based on the seo prop
  
  return (
    <ErrorBoundary fallback={<ServiceErrorFallback />}>
      <ServiceLayout>
        {/* Title and meta tags would go here in a real implementation */}
        {/* <Head>
          <title>{seo.pageTitle}</title>
          <meta name="description" content={seo.metaDescription} />
          {seo.canonicalUrl && <link rel="canonical" href={seo.canonicalUrl} />}
          {seo.ogImageUrl && <meta property="og:image" content={seo.ogImageUrl} />}
        </Head> */}

        {/* Hero Section */}
        <ServiceHero {...heroProps} />

        {/* Client Logo Section */}
        {showClientLogos && clientLogos && clientLogos.length > 0 && (
          <section className={`py-12 ${clientLogosBgColor}`}>
            <ClientLogos 
              logos={clientLogos}
              title={clientLogosTitle}
              description={clientLogosDescription}
              bgColor={clientLogosBgColor}
            />
          </section>
        )}

        {/* Main Content Sections */}
        <ErrorBoundary fallback={<SectionErrorFallback sectionName="Overview" />}>
          {overviewSection}
        </ErrorBoundary>
        
        {benefitsSection && (
          <ErrorBoundary fallback={<SectionErrorFallback sectionName="Benefits" />}>
            {benefitsSection}
          </ErrorBoundary>
        )}
        
        {processSection && (
          <ErrorBoundary fallback={<SectionErrorFallback sectionName="Process" />}>
            {processSection}
          </ErrorBoundary>
        )}
        
        {/* Additional custom sections */}
        {additionalSections.map((section, index) => (
          <ErrorBoundary 
            key={`additional-section-${index}`}
            fallback={<SectionErrorFallback sectionName={`Additional Section ${index + 1}`} />}
          >
            {section}
          </ErrorBoundary>
        ))}

        {/* Testimonials Section */}
        {testimonials && testimonials.length > 0 && (
          <ErrorBoundary fallback={<SectionErrorFallback sectionName="Testimonials" />}>
            <AnimatedTestimonials 
              testimonials={testimonials} 
              title={testimonialsTitle} 
              description={testimonialsDescription} 
              badgeText={testimonialsBadgeText}
              bgColor={testimonialsBgColor}
            />
          </ErrorBoundary>
        )}

        {/* FAQ Section */}
        {faqSection && (
          <ErrorBoundary fallback={<SectionErrorFallback sectionName="FAQ" />}>
            {faqSection}
          </ErrorBoundary>
        )}

        {/* CTA Section */}
        {ctaSection && (
          <ErrorBoundary fallback={<SectionErrorFallback sectionName="CTA" />}>
            {ctaSection}
          </ErrorBoundary>
        )}
      </ServiceLayout>
    </ErrorBoundary>
  );
};

// Custom error fallback components
const ServiceErrorFallback: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center p-8">
      <h1 className="text-2xl font-bold text-red-600 mb-4">Service Page Error</h1>
      <p className="mb-4">We're sorry, but there was an error loading this service page.</p>
      <a href="/" className="text-atoro-teal hover:text-atoro-green">
        Return to Home
      </a>
    </div>
  </div>
);

const SectionErrorFallback: React.FC<{ sectionName: string }> = ({ sectionName }) => (
  <section className="py-12 bg-gray-50">
    <Container>
      <div className="border border-red-200 rounded-lg p-6 bg-red-50">
        <h3 className="text-red-600 font-medium mb-2">
          {sectionName} Section Error
        </h3>
        <p className="text-gray-700">
          We encountered an issue loading this section. Please try refreshing the page.
        </p>
      </div>
    </Container>
  </section>
);

export default StandardServicePage; 
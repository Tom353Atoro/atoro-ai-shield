
import React, { ReactNode } from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import ClientLogos from '@/components/services/ClientLogos';
import AnimatedTestimonials from '@/components/shared/AnimatedTestimonials';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/badge';
import ErrorBoundary from '@/components/ui/ErrorBoundary';
import EnhancedErrorBoundary from '@/components/ui/EnhancedErrorBoundary';
import { handleBoundaryError } from '@/utils/errorReporting';
import {
  ServiceHeroProps,
  TestimonialItem,
  ClientLogoItem,
  ServiceSectionProps,
  ServicePageProps,
  ErrorBoundaryProps,
  SEOProps
} from '@/types';
import SEO from '@/components/shared/SEO';

export interface ServiceSection extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  className?: string;
  children: ReactNode;
}

export const ServiceSection: React.FC<ServiceSection> = ({ 
  children, 
  id, 
  className = '',
  ...props 
}) => {
  return (
    <section id={id} className={className} {...props}>
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

/**
 * Error handler for service page components
 */
const handleServicePageError = (error: Error, errorInfo: React.ErrorInfo, pageName?: string) => {
  handleBoundaryError(error, errorInfo, `ServicePage:${pageName || 'Unknown'}`);
};

export interface StandardServicePageProps {
  seo: SEOProps;
  heroProps: ServiceHeroProps;
  
  // Client logos section
  clientLogos?: ClientLogoItem[];
  clientLogosTitle?: string;
  clientLogosDescription?: string;
  
  // Content sections
  overviewSection?: ReactNode;
  benefitsSection?: ReactNode;
  processSection?: ReactNode;
  additionalSections?: ReactNode[];
  faqSection?: ReactNode;
  ctaSection?: ReactNode;
  
  // Standard testimonials section
  testimonials?: TestimonialItem[];
  testimonialsTitle?: string;
  testimonialsDescription?: string;
  testimonialsBadgeText?: string;
  testimonialsBgColor?: string;
  
  // Custom testimonials section (overrides standard section)
  testimonialsSectionOverride?: ReactNode;
  
  // Children elements
  children?: ReactNode;
}

/**
 * StandardServicePage Component
 * 
 * A standardized page template for all service pages with consistent
 * structure and styling.
 */
const StandardServicePage: React.FC<StandardServicePageProps> = ({
  seo,
  heroProps,
  clientLogos,
  clientLogosTitle,
  clientLogosDescription,
  overviewSection,
  benefitsSection,
  processSection,
  additionalSections,
  faqSection,
  ctaSection,
  testimonials,
  testimonialsTitle,
  testimonialsDescription,
  testimonialsBadgeText,
  testimonialsBgColor = "bg-white",
  testimonialsSectionOverride,
  children
}) => {
  return (
    <>
      <SEO {...seo} />
      
      <EnhancedErrorBoundary 
        fallback={<ServiceErrorFallback />} 
        onError={(error, errorInfo) => handleServicePageError(error, errorInfo)}
        showDetails={import.meta.env.DEV}
      >
        <ServiceLayout>
          {/* Hero Section */}
          <ErrorBoundary 
            fallback={<SectionErrorFallback sectionName="Hero" />}
            onError={(error, errorInfo) => handleServicePageError(error, errorInfo, "Hero")}
          >
            <ServiceHero {...heroProps} />
          </ErrorBoundary>

          {/* Client Logos */}
          {clientLogos && (
            <ErrorBoundary 
              fallback={<SectionErrorFallback sectionName="Client Logos" />}
              onError={(error, errorInfo) => handleServicePageError(error, errorInfo, "ClientLogos")}
            >
              <section className={`py-12 bg-gray-50`}>
                <ClientLogos 
                  logos={clientLogos}
                  title={clientLogosTitle}
                  description={clientLogosDescription}
                />
              </section>
            </ErrorBoundary>
          )}

          {/* Overview Section */}
          <ErrorBoundary 
            fallback={<SectionErrorFallback sectionName="Overview" />}
            onError={(error, errorInfo) => handleServicePageError(error, errorInfo, "Overview")}
          >
            {overviewSection}
          </ErrorBoundary>
          
          {/* Benefits Section */}
          {benefitsSection && (
            <ErrorBoundary 
              fallback={<SectionErrorFallback sectionName="Benefits" />}
              onError={(error, errorInfo) => handleServicePageError(error, errorInfo, "Benefits")}
            >
              {benefitsSection}
            </ErrorBoundary>
          )}
          
          {/* Process Section */}
          {processSection && (
            <ErrorBoundary 
              fallback={<SectionErrorFallback sectionName="Process" />}
              onError={(error, errorInfo) => handleServicePageError(error, errorInfo, "Process")}
            >
              {processSection}
            </ErrorBoundary>
          )}
          
          {/* Custom children content if provided */}
          {children && (
            <ErrorBoundary 
              fallback={<SectionErrorFallback sectionName="Custom Content" />}
              onError={(error, errorInfo) => handleServicePageError(error, errorInfo, "CustomContent")}
            >
              {children}
            </ErrorBoundary>
          )}
          
          {/* Testimonials Section */}
          {testimonialsSectionOverride ? (
            testimonialsSectionOverride
          ) : testimonials && testimonials.length > 0 ? (
            <ErrorBoundary 
              fallback={<SectionErrorFallback sectionName="Testimonials" />}
              onError={(error, errorInfo) => handleServicePageError(error, errorInfo, "Testimonials")}
            >
              <AnimatedTestimonials 
                testimonials={testimonials} 
                title={testimonialsTitle || "What Our Clients Say"}
                description={testimonialsDescription || "Hear from organizations that have worked with us."}
                badgeText={testimonialsBadgeText || "Testimonials"}
                bgColor={testimonialsBgColor}
              />
            </ErrorBoundary>
          ) : null}
          
          {/* Additional Sections */}
          {additionalSections && additionalSections.map((section, index) => (
            <ErrorBoundary 
              key={`additional-section-${index}`}
              fallback={<SectionErrorFallback sectionName={`Additional Section ${index + 1}`} />}
              onError={(error, errorInfo) => handleServicePageError(error, errorInfo, `AdditionalSection${index}`)}
            >
              {section}
            </ErrorBoundary>
          ))}
          
          {/* FAQ Section */}
          {faqSection && (
            <ErrorBoundary 
              fallback={<SectionErrorFallback sectionName="FAQ" />}
              onError={(error, errorInfo) => handleServicePageError(error, errorInfo, "FAQ")}
            >
              {faqSection}
            </ErrorBoundary>
          )}
          
          {/* CTA Section */}
          {ctaSection && (
            <ErrorBoundary 
              fallback={<SectionErrorFallback sectionName="CTA" />}
              onError={(error, errorInfo) => handleServicePageError(error, errorInfo, "CTA")}
            >
              {ctaSection}
            </ErrorBoundary>
          )}
        </ServiceLayout>
      </EnhancedErrorBoundary>
    </>
  );
};

export default StandardServicePage; 

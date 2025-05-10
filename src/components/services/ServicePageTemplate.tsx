
import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import LogoBanner from '@/components/home/LogoBanner';
import ClientLogos from '@/components/shared/ClientLogos';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/badge';
import AnimatedTestimonials from '@/components/shared/AnimatedTestimonials';

interface ServiceHeroProps {
  title: React.ReactNode;
  description: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  imageUrl?: string;
  badgeText?: string;
  backgroundClass?: string;
}

interface TestimonialProps {
  quote: string;
  author: string;
  title: string;
  company: string;
  rating: number;
  avatarSrc?: string;
}

interface ServicePageTemplateProps {
  heroProps: ServiceHeroProps;
  showClientLogos?: boolean;
  clientLogosData?: Array<{
    id: number | string;
    name: string;
    imagePath: string;
  }>;
  clientLogosTitle?: string;
  clientLogosDescription?: string;
  clientLogosBgColor?: string;
  serviceSections: React.ReactNode;
  testimonials?: TestimonialProps[];
  testimonialsTitle?: string;
  testimonialsDescription?: string;
  testimonialsBadgeText?: string;
  testimonialsBgColor?: string;
  faqSection?: React.ReactNode;
  ctaSection?: React.ReactNode;
  children?: React.ReactNode;
}

const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({
  heroProps,
  showClientLogos = true,
  clientLogosData,
  clientLogosTitle = "Trusted by Leading Organizations",
  clientLogosDescription = "We've helped companies across industries strengthen their security posture",
  clientLogosBgColor = "bg-gray-50",
  serviceSections,
  testimonials,
  testimonialsTitle = "What Our Clients Say",
  testimonialsDescription = "Read how we've helped companies like yours achieve their goals",
  testimonialsBadgeText = "Success Stories",
  testimonialsBgColor = "bg-white",
  faqSection,
  ctaSection,
  children,
}) => {
  // Default hero background if none provided
  const backgroundClass = heroProps.backgroundClass || "bg-gradient-to-br from-atoro-teal to-black";
  
  return (
    <ServiceLayout>
      {/* Hero Section */}
      <section className={`pt-16 pb-8 text-white relative overflow-hidden ${backgroundClass}`}>
        <div className="absolute inset-0 opacity-20 z-0">
          <div className="absolute inset-0 bg-grid-white/10"></div>
        </div>
        
        <Container>
          <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              {heroProps.badgeText && (
                <Badge className="mb-4 bg-atoro-green/20 text-atoro-green hover:bg-atoro-green/30">
                  {heroProps.badgeText}
                </Badge>
              )}
              <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl">
                {heroProps.title}
              </h1>
              <p className="text-lg mb-6 opacity-90">
                {heroProps.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {heroProps.primaryButtonText && (
                  <a 
                    href={heroProps.primaryButtonLink || "/contact"}
                    className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green px-4 py-2 rounded font-medium inline-block"
                  >
                    {heroProps.primaryButtonText}
                  </a>
                )}
                
                {heroProps.secondaryButtonText && (
                  <a 
                    href={heroProps.secondaryButtonLink || "#"}
                    className="border border-white text-white hover:bg-white/10 px-4 py-2 rounded font-medium inline-block"
                  >
                    {heroProps.secondaryButtonText}
                  </a>
                )}
              </div>
            </div>
            
            {heroProps.imageUrl && (
              <div className="hidden md:block">
                <img 
                  alt="Service illustration" 
                  className="object-cover w-full rounded-lg" 
                  src={heroProps.imageUrl} 
                />
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Client Logo Section */}
      {showClientLogos && (
        <section className={`py-12 ${clientLogosBgColor}`}>
          {clientLogosData ? (
            <ClientLogos 
              logos={clientLogosData}
              title={clientLogosTitle}
              description={clientLogosDescription}
              bgColor={clientLogosBgColor}
            />
          ) : (
            <LogoBanner />
          )}
        </section>
      )}

      {/* Main Service Content Sections */}
      {serviceSections}
      
      {/* Additional custom content if provided */}
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

      {/* FAQ Section if provided */}
      {faqSection}

      {/* CTA Section if provided */}
      {ctaSection}
    </ServiceLayout>
  );
};

export default ServicePageTemplate;

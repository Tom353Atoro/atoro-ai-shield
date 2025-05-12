
import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TestimonialsSection from '@/components/common/TestimonialsSection';

interface HeroProps {
  title: ReactNode;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  badgeText: string;
  imageUrl?: string; // Make imageUrl optional
  backgroundClass?: string;
}

interface PillarPageTemplateProps {
  heroProps: HeroProps;
  testimonials: Array<{
    quote: string;
    author: string;
    title: string;
    company: string;
    rating: number;
  }>;
  testimonialsTitle: string;
  testimonialsDescription: string;
  testimonialsBadgeText: string;
  servicesSection: ReactNode;
  featuredServiceSection: ReactNode;
  approachSection: ReactNode;
  ctaSection: ReactNode;
}

const PillarPageTemplate: React.FC<PillarPageTemplateProps> = ({
  heroProps,
  testimonials,
  testimonialsTitle,
  testimonialsDescription,
  testimonialsBadgeText,
  servicesSection,
  featuredServiceSection,
  approachSection,
  ctaSection,
}) => {
  return (
    <>
      <Helmet>
        <title>Atoro | {heroProps.badgeText}</title>
        <meta name="description" content={heroProps.description} />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className={`relative py-20 ${heroProps.backgroundClass || 'bg-gray-900'}`}>
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                  <div className="inline-block px-3 py-1 mb-4 rounded-full bg-opacity-20 bg-white text-white text-sm font-medium">
                    {heroProps.badgeText}
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                    {heroProps.title}
                  </h1>
                  <p className="text-lg text-gray-300 mb-8 max-w-2xl">
                    {heroProps.description}
                  </p>
                  <a
                    href={heroProps.primaryButtonLink}
                    className="inline-flex items-center px-6 py-3 bg-atoro-green text-white font-medium rounded-lg hover:bg-opacity-90 transition-all"
                  >
                    {heroProps.primaryButtonText}
                  </a>
                </div>
                {heroProps.imageUrl && (
                  <div className="lg:w-1/2">
                    <img
                      src={heroProps.imageUrl}
                      alt={typeof heroProps.title === 'string' ? heroProps.title : 'Hero image'}
                      className="w-full h-auto rounded-xl shadow-2xl"
                    />
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Services Section */}
          {servicesSection}

          {/* Featured Service Section */}
          {featuredServiceSection}

          {/* Approach Section */}
          {approachSection}

          {/* Testimonials Section */}
          <TestimonialsSection
            testimonials={testimonials}
            title={testimonialsTitle}
            description={testimonialsDescription}
            badgeText={testimonialsBadgeText}
          />

          {/* CTA Section */}
          {ctaSection}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PillarPageTemplate;

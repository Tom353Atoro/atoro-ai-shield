
import React from 'react';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/shared/SEO';
import { SEOProps } from '@/types';
import { HeroProps } from '@/types/service-page';

interface StandardServicePageProps {
  seo: SEOProps;
  heroProps: HeroProps;
  children: React.ReactNode;
}

/**
 * StandardServicePage Component
 * 
 * A consistent page template for all service pages.
 * This component handles the layout, SEO, hero section, and provides slots for other service sections.
 */
const StandardServicePage: React.FC<StandardServicePageProps> = ({
  seo,
  heroProps,
  children
}) => {
  return (
    <Layout>
      <SEO title={seo.pageTitle} description={seo.metaDescription} />
      {/* Service Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            {heroProps.badgeText && (
              <div className="inline-block px-3 py-1 bg-blue-600 bg-opacity-20 text-blue-300 rounded-full text-sm font-medium mb-4">
                {heroProps.badgeText}
              </div>
            )}
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{heroProps.title}</h1>
            <p className="text-xl text-gray-300 mb-8">{heroProps.description}</p>
            <div className="flex flex-wrap gap-4">
              {heroProps.primaryButtonText && (
                <a 
                  href={heroProps.primaryButtonLink || '/contact'} 
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md font-medium transition-colors"
                >
                  {heroProps.primaryButtonText}
                </a>
              )}
              {heroProps.secondaryButtonText && (
                <a 
                  href={heroProps.secondaryButtonLink || '#'} 
                  className="px-6 py-3 bg-transparent border border-gray-300 hover:bg-gray-800 rounded-md font-medium transition-colors"
                >
                  {heroProps.secondaryButtonText}
                </a>
              )}
            </div>
          </div>
          <div className="mt-8 md:mt-0 flex justify-center">
            {heroProps.imageUrl && (
              <img 
                src={heroProps.imageUrl} 
                alt={`${heroProps.title} illustration`} 
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            )}
          </div>
        </div>
      </section>

      {/* Render child sections */}
      {children}
    </Layout>
  );
};

export default StandardServicePage;

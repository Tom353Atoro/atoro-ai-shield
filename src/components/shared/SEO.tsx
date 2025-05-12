import React from 'react';
import { Helmet } from 'react-helmet';
import { SEOProps } from '@/types';

/**
 * SEO Component
 * 
 * Handles all SEO metadata for pages including title, meta description,
 * canonical URL, OG image, and structured data.
 * 
 * @example
 * ```tsx
 * <SEO
 *   pageTitle="Service Page | Atoro AI Shield"
 *   metaDescription="Description for search engines"
 *   canonicalUrl="https://www.atoroaishield.com/services/example"
 *   ogImageUrl="/images/og-image.jpg"
 * />
 * ```
 */
const SEO: React.FC<SEOProps> = ({
  pageTitle,
  metaDescription,
  canonicalUrl,
  ogImageUrl,
  structuredData,
}) => {
  const siteName = "Atoro AI Shield";
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      
      {/* Canonical Link */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:site_name" content={siteName} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      {ogImageUrl && <meta property="og:image" content={ogImageUrl} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {ogImageUrl && <meta name="twitter:image" content={ogImageUrl} />}
      
      {/* Structured Data / JSON-LD */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO; 
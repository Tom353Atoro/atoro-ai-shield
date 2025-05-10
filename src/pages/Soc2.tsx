
import React from 'react';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import Soc2Overview from '@/components/soc2/Soc2Overview';
import Soc2Benefits from '@/components/soc2/Soc2Benefits';
import Soc2Process from '@/components/soc2/Soc2Process';
import Soc2CTASection from '@/components/soc2/Soc2CTASection';
import Soc2FAQSection from '@/components/soc2/Soc2FAQSection';

const Soc2 = () => {
  // SOC 2 specific testimonials
  const soc2Testimonials = [
    {
      quote: "Atoro guided us through the entire SOC 2 certification process with a hands-on approach. Their team were thorough, kept us informed throughout, and ensured we were fully prepared for the certification audit.",
      author: "Henrik Dannert",
      title: "CEO",
      company: "Heartpace",
      rating: 5
    }, {
      quote: "The Atoro team were fantastic to work with - they kept us organised and communicated effectively over Slack, email, and weekly check-ins so that we could meet our target deadline to be GDPR compliant within 12 weeks.",
      author: "Vanessa Liu",
      title: "CEO",
      company: "Sugarwork",
      rating: 4.5
    }, {
      quote: "They are professional, knowledgeable, and responsive. We consistently felt confident in their strong expertise and appreciated their guidance throughout the entire SOC2 certification process.",
      author: "Camil Blanaru",
      title: "CTO",
      company: "Prezly BV",
      rating: 5
    }
  ];
  
  return (
    <ServicePageTemplate
      heroProps={{
        title: <><span className="text-atoro-green">Achieve</span> SOC 2 Compliance</>,
        description: "Streamline your SOC 2 audit with our expert guidance and automated platform. Get compliant faster and build trust with your customers.",
        primaryButtonText: "Get Started",
        primaryButtonLink: "/contact",
        secondaryButtonText: "Download SOC 2 Guide",
        secondaryButtonLink: "/resources/soc2-guide",
        badgeText: "SOC 2 Compliance",
        imageUrl: "/lovable-uploads/5c1f26c2-fb1a-41c2-9088-86b87a45c090.png",
        backgroundClass: "bg-gradient-to-br from-atoro-teal to-black"
      }}
      testimonials={soc2Testimonials}
      testimonialsTitle="What Our Clients Say"
      testimonialsDescription="Read how we've helped organizations achieve SOC 2 compliance and build trust with their customers."
      testimonialsBadgeText="Client Testimonials"
      serviceSections={
        <>
          {/* Overview Section - comes first */}
          <Soc2Overview />
          
          {/* Benefits Section */}
          <Soc2Benefits />
          
          {/* Process Section */}
          <Soc2Process />
        </>
      }
      faqSection={<Soc2FAQSection />}
      ctaSection={<Soc2CTASection />}
    />
  );
};

export default Soc2;

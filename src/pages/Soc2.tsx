import React from 'react';
import { Shield, CheckCircle, Clock, FileText, Users, BadgeCheck } from 'lucide-react';
import StandardServicePage from '@/components/services/StandardServicePage';
import StandardOverviewSection from '@/components/services/StandardOverviewSection';
import StandardBenefitsSection from '@/components/services/StandardBenefitsSection';
import StandardProcessSection from '@/components/services/StandardProcessSection';
import StandardFAQSection from '@/components/services/StandardFAQSection';
import StandardCTASection from '@/components/services/StandardCTASection';
import {
  TestimonialItem,
  ClientLogoItem,
  OverviewFeature,
  BenefitItem,
  ProcessStep,
  FAQItem,
  SEOProps
} from '@/types';

/**
 * SOC 2 Service Page
 * 
 * Standardized implementation of the SOC 2 compliance service page using the
 * established component architecture.
 */
const Soc2: React.FC = () => {
  // SEO metadata
  const seoData: SEOProps = {
    pageTitle: "SOC 2 Compliance & Certification | Atoro AI Shield",
    metaDescription: "Streamline your SOC 2 audit with our expert guidance and automated platform. Get compliant faster and build trust with your customers.",
    canonicalUrl: "https://www.atoroaishield.com/services/cyber-security/soc2",
    ogImageUrl: "/lovable-uploads/5c1f26c2-fb1a-41c2-9088-86b87a45c090.png"
  };

  // SOC 2 specific testimonials
  const testimonials: TestimonialItem[] = [
    {
      quote: "Atoro guided us through the entire SOC 2 certification process with a hands-on approach. Their team were thorough, kept us informed throughout, and ensured we were fully prepared for the certification audit.",
      author: "Henrik Dannert",
      title: "CEO",
      company: "Heartpace",
      avatarSrc: "/lovable-uploads/273bf97c-b513-4a94-8fdd-7a5bc90eb254.png",
      rating: 5
    }, 
    {
      quote: "The Atoro team were fantastic to work with - they kept us organised and communicated effectively over Slack, email, and weekly check-ins so that we could meet our target deadline to be GDPR compliant within 12 weeks.",
      author: "Vanessa Liu",
      title: "CEO",
      company: "Sugarwork",
      avatarSrc: "/lovable-uploads/2a43c2aa-a14c-448c-8429-8fb1d9c01ee3.png",
      rating: 4.5
    }, 
    {
      quote: "They are professional, knowledgeable, and responsive. We consistently felt confident in their strong expertise and appreciated their guidance throughout the entire SOC2 certification process.",
      author: "Camil Blanaru",
      title: "CTO",
      company: "Prezly BV",
      avatarSrc: "/lovable-uploads/2ff67c0a-34c5-4cf0-83e9-3dbddc25b5ce.png",
      rating: 5
    }
  ];
  
  // Client logos data
  const clientLogos: ClientLogoItem[] = [
    {
      id: 1,
      name: "Heartpace",
      imagePath: "/lovable-uploads/273bf97c-b513-4a94-8fdd-7a5bc90eb254.png",
      altText: "Heartpace logo"
    },
    {
      id: 2,
      name: "Sugarwork",
      imagePath: "/lovable-uploads/67e0fd6c-3db8-4cd6-a32b-c0841aa5535e.png",
      altText: "Sugarwork logo"
    },
    {
      id: 3,
      name: "Prezly",
      imagePath: "/lovable-uploads/697c806d-2cfd-402a-8b50-65ceecb5c88c.png",
      altText: "Prezly logo"
    },
    {
      id: 4,
      name: "TechSecure",
      imagePath: "/lovable-uploads/9b3556f3-0651-4ed7-b0d6-42ede4d99feb.png",
      altText: "TechSecure logo"
    },
    {
      id: 5,
      name: "CloudData",
      imagePath: "/lovable-uploads/5c1f26c2-fb1a-41c2-9088-86b87a45c090.png",
      altText: "CloudData logo"
    }
  ];
  
  // Overview section features
  const overviewFeatures: OverviewFeature[] = [
    {
      icon: Shield,
      title: "Security Controls",
      description: "SOC 2 ensures your service providers securely manage your data to protect the interests of your organization and the privacy of its clients.",
      iconColor: "text-atoro-blue"
    },
    {
      icon: CheckCircle,
      title: "Trust Service Criteria",
      description: "The framework covers five trust principles: Security, Availability, Processing Integrity, Confidentiality, and Privacy.",
      iconColor: "text-atoro-green"
    },
    {
      icon: Clock,
      title: "Type 1 vs Type 2",
      description: "Type 1 assesses controls at a point in time, while Type 2 verifies controls have been operating effectively over a period (usually 6-12 months).",
      iconColor: "text-atoro-teal"
    }
  ];

  // Benefits section data
  const benefits: BenefitItem[] = [
    {
      title: "Enhanced Security Posture",
      description: "Implement robust controls that protect your data and systems from threats."
    },
    {
      title: "Customer Trust",
      description: "Show potential clients your commitment to security and data protection."
    },
    {
      title: "Competitive Advantage",
      description: "Stand out from competitors who haven't achieved SOC 2 compliance."
    },
    {
      title: "Enterprise Readiness",
      description: "Meet the security requirements of larger enterprise customers."
    },
    {
      title: "Simplified Compliance",
      description: "Streamline multiple compliance requirements with a single framework."
    },
    {
      title: "Risk Reduction",
      description: "Identify and mitigate security risks before they impact your business."
    }
  ];

  // Process steps data
  const processSteps: ProcessStep[] = [
    {
      stepNumber: 1,
      title: "Gap Assessment",
      description: "Identify areas where your current security practices fall short of SOC 2 requirements."
    },
    {
      stepNumber: 2,
      title: "Controls Implementation",
      description: "Implement the necessary controls to meet the SOC 2 Trust Service Criteria."
    },
    {
      stepNumber: 3,
      title: "Audit Preparation",
      description: "Prepare for your SOC 2 audit with our expert guidance and automated platform."
    },
    {
      stepNumber: 4,
      title: "Certification",
      description: "Successfully complete your audit and achieve SOC 2 certification."
    }
  ];

  // FAQ section data
  const faqs: FAQItem[] = [
    {
      question: "How long does the SOC 2 certification process take?",
      answer: "The SOC 2 certification process typically takes 3-6 months, depending on your organization's size, complexity, and readiness. With our streamlined approach, we can help you achieve certification in as little as 12 weeks."
    },
    {
      question: "What's the difference between SOC 2 Type 1 and Type 2?",
      answer: "SOC 2 Type 1 assesses if your security controls are properly designed at a point in time. SOC 2 Type 2 verifies that these controls have been operating effectively over a period of time (usually 6-12 months)."
    },
    {
      question: "Do we need to implement all five Trust Service Criteria?",
      answer: "No, only the Security criterion is mandatory. You can select additional criteria (Availability, Processing Integrity, Confidentiality, Privacy) based on your business needs and customer requirements."
    },
    {
      question: "How much does SOC 2 certification cost?",
      answer: "The cost varies based on your organization's size, complexity, and the scope of your audit. Our team can provide a personalized quote after an initial assessment."
    },
    {
      question: "How often do we need to renew SOC 2 certification?",
      answer: "SOC 2 reports are typically valid for 12 months. After that, you'll need to undergo a new audit to maintain your certification."
    }
  ];

  return (
    <StandardServicePage
      seo={seoData}
      
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
      
      clientLogos={clientLogos}
      clientLogosTitle="Trusted by Leading SaaS Companies"
      clientLogosDescription="We've helped organizations across industries achieve SOC 2 compliance and build trust with their customers"
      
      overviewSection={
        <StandardOverviewSection
          badgeText="Understanding SOC 2"
          title="What is SOC 2?"
          description="SOC 2 (System and Organization Controls 2) is a widely recognized auditing standard developed by the American Institute of Certified Public Accountants (AICPA) that ensures service providers securely manage customer data."
          features={overviewFeatures}
        />
      }
      
      benefitsSection={
        <StandardBenefitsSection
          badgeText="Why SOC 2"
          title="Benefits of SOC 2 Compliance"
          description="SOC 2 certification offers multiple benefits for your business, from enhanced security to increased customer trust."
          benefits={benefits}
          imageUrl="/lovable-uploads/soc2-benefits.png"
          imageAlt="SOC 2 benefits illustration"
        />
      }
      
      processSection={
        <StandardProcessSection
          badgeText="Our Approach"
          title="Our 4-Step SOC 2 Implementation Process"
          description="A streamlined approach that makes SOC 2 compliance achievable in weeks, not months."
          steps={processSteps}
        />
      }
      
      testimonials={testimonials}
      testimonialsTitle="What Our Clients Say"
      testimonialsDescription="Read how we've helped organizations achieve SOC 2 compliance and build trust with their customers."
      testimonialsBadgeText="Client Testimonials"
      
      faqSection={
        <StandardFAQSection
          badgeText="SOC 2 FAQ"
          title="Frequently Asked Questions"
          description="Find answers to common questions about SOC 2 compliance and our implementation service."
          faqs={faqs}
        />
      }
      
      ctaSection={
        <StandardCTASection
          badgeText="Get Started"
          title={<>Ready to <span className="text-atoro-green">Achieve</span> SOC 2 Compliance?</>}
          description="Contact us today to learn how our SOC 2 service can help you streamline the compliance process and build trust with your customers."
          primaryButtonText="Get a Free Consultation"
          primaryButtonLink="/contact"
          secondaryButtonText="Download SOC 2 Checklist"
          secondaryButtonLink="/resources/soc2-checklist"
          imageUrl="/lovable-uploads/soc2-cta.png"
        />
      }
    />
  );
};

export default Soc2;

import React from 'react';
import { Shield, FileKey, CheckCircle } from 'lucide-react';
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
 * GDPR Compliance Service Page
 * 
 * Standardized implementation of the GDPR Compliance service page using the
 * established component architecture.
 */
const GDPRCompliance: React.FC = () => {
  // SEO metadata
  const seoData: SEOProps = {
    pageTitle: "GDPR Compliance Services for SaaS Companies | Atoro AI Shield",
    metaDescription: "Transform complex GDPR requirements into practical, business-friendly solutions that protect user data while enabling your business to thrive in the European market.",
    canonicalUrl: "https://www.atoroaishield.com/services/data-privacy/gdpr-compliance",
    ogImageUrl: "/lovable-uploads/62277257-f565-473b-943c-a6746c4c657b.jpg"
  };

  // GDPR specific testimonials
  const testimonials: TestimonialItem[] = [
    {
      quote: "Atoro's GDPR implementation saved us countless hours and helped us avoid potential fines. Their expertise in applying the regulations to our specific business was invaluable.",
      author: "Maria Schmidt",
      title: "DPO",
      company: "DataTrust Inc",
      avatarSrc: "/lovable-uploads/273bf97c-b513-4a94-8fdd-7a5bc90eb254.png",
      rating: 5
    }, 
    {
      quote: "The GDPR gap analysis Atoro performed was thorough and pragmatic. We now have a clear roadmap to compliance that aligns with our business goals.",
      author: "Thomas Beaumont",
      title: "CIO",
      company: "CloudSecure",
      avatarSrc: "/lovable-uploads/2a43c2aa-a14c-448c-8429-8fb1d9c01ee3.png",
      rating: 4.5
    }, 
    {
      quote: "Working with Atoro on our GDPR compliance program gave us confidence when expanding into European markets. Their ongoing support has been excellent.",
      author: "Sarah Johnson",
      title: "General Counsel",
      company: "TechInnovate",
      avatarSrc: "/lovable-uploads/2ff67c0a-34c5-4cf0-83e9-3dbddc25b5ce.png",
      rating: 5
    }
  ];
  
  // Client logos data
  const clientLogos: ClientLogoItem[] = [
    {
      id: 1,
      name: "TechCorp",
      imagePath: "/lovable-uploads/273bf97c-b513-4a94-8fdd-7a5bc90eb254.png",
      altText: "TechCorp logo"
    },
    {
      id: 2,
      name: "Innovex",
      imagePath: "/lovable-uploads/67e0fd6c-3db8-4cd6-a32b-c0841aa5535e.png",
      altText: "Innovex logo"
    },
    {
      id: 3,
      name: "DataFlow",
      imagePath: "/lovable-uploads/697c806d-2cfd-402a-8b50-65ceecb5c88c.png",
      altText: "DataFlow logo"
    },
    {
      id: 4,
      name: "SecureTech",
      imagePath: "/lovable-uploads/9b3556f3-0651-4ed7-b0d6-42ede4d99feb.png",
      altText: "SecureTech logo"
    },
    {
      id: 5,
      name: "CloudNet",
      imagePath: "/lovable-uploads/5c1f26c2-fb1a-41c2-9088-86b87a45c090.png",
      altText: "CloudNet logo"
    }
  ];
  
  // Overview section features
  const overviewFeatures: OverviewFeature[] = [
    {
      icon: Shield,
      title: "Gap Analysis",
      description: "Thorough assessment of your current practices against GDPR requirements to identify compliance gaps.",
      iconColor: "text-atoro-green"
    },
    {
      icon: FileKey,
      title: "Policy Framework",
      description: "Development of all required policies, procedures, and documentation to demonstrate compliance.",
      iconColor: "text-atoro-teal"
    },
    {
      icon: Shield,
      title: "Implementation",
      description: "Practical implementation of necessary technical and organizational measures to protect personal data.",
      iconColor: "text-atoro-blue"
    }
  ];

  // Benefits section data
  const benefits: BenefitItem[] = [
    {
      title: "Avoid Significant Fines",
      description: "Prevent potential fines up to €20 million or 4% of global revenue for GDPR non-compliance."
    },
    {
      title: "Build Customer Trust",
      description: "Strengthen relationships with your European customers and partners through robust privacy practices."
    },
    {
      title: "Enable Data Transfers",
      description: "Streamline international data transfers with appropriate safeguards and legal frameworks."
    },
    {
      title: "Competitive Advantage",
      description: "Differentiate your business with strong privacy practices that go beyond minimum compliance."
    },
    {
      title: "Legal Risk Reduction",
      description: "Minimize the risk of regulatory investigations, enforcement actions, and litigation."
    },
    {
      title: "Business Continuity",
      description: "Maintain uninterrupted business operations in European markets with compliant data practices."
    }
  ];

  // Process steps data
  const processSteps: ProcessStep[] = [
    {
      stepNumber: 1,
      title: "Assessment",
      description: "Identify existing compliance gaps, unique risk factors, and organizational needs."
    },
    {
      stepNumber: 2,
      title: "Planning",
      description: "Develop a tailored roadmap with priorities based on risk level and business impact."
    },
    {
      stepNumber: 3,
      title: "Implementation",
      description: "Deploy policies, procedures, and technical measures to achieve compliance."
    },
    {
      stepNumber: 4,
      title: "Maintenance",
      description: "Ongoing support, training, and updates to ensure continued compliance with GDPR requirements."
    }
  ];

  // FAQ section data
  const faqs: FAQItem[] = [
    {
      question: "Does my company need to comply with GDPR?",
      answer: "Your company must comply with GDPR if it processes personal data of individuals in the EU, regardless of your company's location. This applies if you offer goods or services to EU residents or monitor their behavior. Even companies with no EU presence may need to comply if they process EU personal data."
    },
    {
      question: "What are the penalties for non-compliance with GDPR?",
      answer: "GDPR violations can result in significant penalties. Serious infringements can lead to fines of up to €20 million or 4% of global annual revenue, whichever is higher. Less severe violations may incur fines up to €10 million or 2% of global annual revenue. Authorities typically consider factors like the nature of the violation, preventive measures taken, and cooperation when determining penalties."
    },
    {
      question: "How long does it take to become GDPR compliant?",
      answer: "The timeline for achieving GDPR compliance varies based on your organization's size, complexity, and current privacy practices. For small to medium-sized organizations with relatively straightforward data processing activities, the process typically takes 3-6 months. Larger enterprises or those with complex data processing may require 6-12 months. Our approach focuses on prioritizing high-risk areas first while developing a comprehensive compliance program."
    },
    {
      question: "Do we need to appoint a Data Protection Officer (DPO)?",
      answer: "Under GDPR, you must appoint a Data Protection Officer if: (1) you're a public authority, (2) your core activities require regular and systematic monitoring of individuals on a large scale, or (3) your core activities involve processing special categories of data or data relating to criminal convictions on a large scale. Even if not mandatory, appointing a DPO can demonstrate commitment to compliance. We offer Virtual DPO services for organizations that need expertise without hiring a full-time DPO."
    },
    {
      question: "Do we need an EU representative if we're not based in the EU?",
      answer: "If your organization is not established in the EU but is subject to GDPR (because you offer goods/services to EU residents or monitor their behavior), you generally must appoint an EU representative. This representative serves as a point of contact for supervisory authorities and data subjects. Exceptions exist for occasional processing that doesn't include special categories of data and is unlikely to pose risks to individuals. We can provide EU Representative services or help determine if you qualify for an exception."
    }
  ];

  return (
    <StandardServicePage
      seo={seoData}
      
      heroProps={{
        title: <><span className="text-atoro-green">GDPR Compliance</span> for SaaS Companies</>,
        description: "Transform complex GDPR requirements into practical, business-friendly solutions that protect user data while enabling your business to thrive in the European market.",
        primaryButtonText: "Schedule GDPR Assessment",
        primaryButtonLink: "/contact",
        secondaryButtonText: "Learn More",
        secondaryButtonLink: "/resources/gdpr-guide",
        imageUrl: "/lovable-uploads/62277257-f565-473b-943c-a6746c4c657b.jpg",
        badgeText: "GDPR Compliance",
        backgroundClass: "bg-gradient-to-br from-atoro-teal to-black"
      }}
      
      clientLogos={clientLogos}
      clientLogosTitle="Trusted by Leading SaaS Companies"
      clientLogosDescription="We've helped companies of all sizes achieve and maintain GDPR compliance"
      
      overviewSection={
        <StandardOverviewSection
          badgeText="Our Approach"
          title="Comprehensive GDPR Implementation"
          description="Our GDPR services focus on practical implementation that balances compliance requirements with business needs, ensuring you meet regulations without unnecessary operational burden."
          features={overviewFeatures}
        />
      }
      
      benefitsSection={
        <StandardBenefitsSection
          badgeText="GDPR Fundamentals"
          title="Benefits of GDPR Compliance"
          description="Implementing GDPR delivers tangible benefits that go beyond just regulatory compliance."
          benefits={benefits}
          imageUrl="/lovable-uploads/gdpr-benefits.png"
          imageAlt="GDPR compliance benefits illustration"
        />
      }
      
      processSection={
        <StandardProcessSection
          badgeText="Our Process"
          title="GDPR Compliance Journey"
          description="Our structured approach guides you through the entire GDPR compliance process, from initial assessment to ongoing compliance."
          steps={processSteps}
        />
      }
      
      testimonials={testimonials}
      testimonialsTitle="What Our Clients Say"
      testimonialsDescription="Read how we've helped companies achieve GDPR compliance while growing their business."
      testimonialsBadgeText="GDPR Success Stories"
      
      faqSection={
        <StandardFAQSection
          badgeText="FAQ"
          title="GDPR Compliance FAQs"
          description="Get answers to common questions about GDPR compliance requirements and implementation."
          faqs={faqs}
        />
      }
      
      ctaSection={
        <StandardCTASection
          badgeText="Get Started"
          title={<>Ready to <span className="text-atoro-green">Ensure</span> GDPR Compliance?</>}
          description="Whether you're just starting your GDPR journey or need to improve your existing compliance program, our team of experts can guide you through the process."
          primaryButtonText="Schedule a Consultation"
          primaryButtonLink="/contact"
          secondaryButtonText="Download GDPR Readiness Checklist"
          secondaryButtonLink="/resources/gdpr-checklist"
          imageUrl="/lovable-uploads/gdpr-cta.png"
        />
      }
    />
  );
};

export default GDPRCompliance;

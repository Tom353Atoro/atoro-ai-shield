
import React from 'react';
import StandardServicePage from '@/components/services/StandardServicePage';
import StandardFAQSection from '@/components/services/StandardFAQSection';
import StandardCTASection from '@/components/services/StandardCTASection';
import { SEOProps } from '@/types';

const PenetrationTesting: React.FC = () => {
  // SEO metadata
  const seoData: SEOProps = {
    pageTitle: "Penetration Testing Services | Atoro AI Shield",
    metaDescription: "Identify and remediate security vulnerabilities before attackers exploit them. Our expert-led penetration testing simulates real-world attacks on your systems.",
    canonicalUrl: "https://www.atoroaishield.com/services/cyber-security/penetration-testing",
    ogImageUrl: "/lovable-uploads/penetration-testing-hero.jpg"
  };

  // Penetration testing specific testimonials
  const testimonials = [
    {
      quote: "Atoro's penetration testers found critical vulnerabilities our internal team had missed. Their remediation guidance was practical and effective.",
      author: "Michael Chen",
      title: "CTO",
      company: "FinSecure",
      rating: 5
    },
    {
      quote: "The detailed reporting and risk prioritization helped us focus our security efforts where they mattered most.",
      author: "Sarah Johnson",
      title: "CISO",
      company: "MedTech Solutions",
      rating: 4.5
    },
    {
      quote: "We've been using Atoro for annual penetration tests for three years. Each time, their thorough methodology uncovers new potential vulnerabilities as our systems evolve.",
      author: "David Rodriguez",
      title: "Security Director",
      company: "DataSphere",
      rating: 5
    }
  ];

  // Client logos
  const clientLogos = [
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

  return (
    <StandardServicePage
      seo={seoData}
      
      heroProps={{
        title: <><span className="text-atoro-green">Penetration</span> Testing</>,
        description: "Identify and remediate security vulnerabilities before attackers exploit them. Our expert-led penetration testing simulates real-world attacks on your systems.",
        primaryButtonText: "Schedule a Penetration Test",
        primaryButtonLink: "/contact",
        secondaryButtonText: "Learn More",
        secondaryButtonLink: "/resources/pentest-guide",
        badgeText: "Security Testing",
        imageUrl: "/lovable-uploads/penetration-testing-hero.jpg",
        backgroundClass: "bg-gradient-to-br from-atoro-blue to-black",
        subtitle: "Find Security Weaknesses Before Attackers Do" // Added subtitle to match UnifiedHeroProps
      }}
      
      clientLogos={clientLogos}
      clientLogosTitle="Trusted by Security-Conscious Organizations"
      clientLogosDescription="Organizations that rely on our penetration testing expertise"
      
      testimonials={testimonials}
      testimonialsTitle="What Our Penetration Testing Clients Say"
      testimonialsDescription="Hear from organizations that have strengthened their security posture with our penetration testing services"
      testimonialsBadgeText="Client Testimonials"
    >
      {/* Main content will be imported from external components */}
      
      {/* FAQ Section */}
      <StandardFAQSection
        badgeText="FAQ"
        title="Frequently Asked Questions"
        description="Get answers to common questions about our penetration testing services"
        faqs={[
          {
            question: "What is penetration testing?",
            answer: "Penetration testing, also known as ethical hacking, is a simulated cyber attack against your computer system, network, or web application to identify exploitable vulnerabilities. Unlike vulnerability scanning, penetration testing involves active exploitation of vulnerabilities to demonstrate how an attacker might gain access to your systems or data."
          },
          {
            question: "How often should we conduct penetration tests?",
            answer: "Most organizations should conduct penetration tests at least annually, but more frequent testing is recommended if you: 1) Release new major applications or infrastructure, 2) Make significant changes to your existing systems, 3) Establish new offices or data centers, 4) Apply major security patches, or 5) Are in a highly regulated industry. Some compliance frameworks like PCI DSS require annual penetration testing."
          },
          {
            question: "What's the difference between automated scanning and penetration testing?",
            answer: "Automated vulnerability scanning uses tools to identify known vulnerabilities in your systems but often produces false positives and lacks context. Penetration testing combines automated tools with human expertise to actually exploit vulnerabilities, chain multiple weaknesses together, and determine their real-world impact. Our penetration testers can identify complex vulnerabilities that automated tools miss."
          },
          {
            question: "What types of penetration testing do you offer?",
            answer: "We offer a comprehensive range of penetration testing services, including: 1) Network penetration testing (internal and external), 2) Web application penetration testing, 3) Mobile application penetration testing, 4) Cloud infrastructure penetration testing, 5) API security testing, 6) Social engineering assessments, and 7) Red team exercises. We customize our approach based on your specific security needs and objectives."
          }
        ]}
        className="bg-gray-50"
      />
      
      {/* CTA Section */}
      <StandardCTASection
        badgeText="Get Started"
        title="Ready to Identify Your Security Vulnerabilities?"
        description="Schedule a penetration test to discover and address security weaknesses before attackers exploit them."
        primaryButtonText="Schedule a Consultation"
        primaryButtonLink="/contact"
        id="cta-section"
      />
    </StandardServicePage>
  );
};

export default PenetrationTesting;

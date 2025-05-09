
import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { Container } from '@/components/ui/Container';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, FileSearch, Lock } from 'lucide-react';
import { tokens } from '@/lib/designTokens';
import TestimonialSection from '@/components/shared/TestimonialSection';
import LogoCarousel from '@/components/shared/LogoCarousel';

// Import standardized service components
import ServiceHeroSection from '@/components/services/ServiceHeroSection';
import ServiceSectionWrapper from '@/components/services/ServiceSectionWrapper';
import ServiceFeatureGrid from '@/components/services/ServiceFeatureGrid';
import ServiceCard from '@/components/services/ServiceCard';
import ServiceFeaturedSection from '@/components/services/ServiceFeaturedSection';

const CyberSecurity = () => {
  // Security-specific testimonials
  const securityTestimonials = [
    {
      quote: "Atoro's security assessment identified critical vulnerabilities our internal team had missed. Their remediation guidance was clear and actionable, significantly improving our security posture.",
      author: "Michael Zhang",
      title: "CTO",
      company: "CloudSecure",
      rating: 5
    }, {
      quote: "The Security Team as a Service model gave us enterprise-grade protection without the overhead of building an in-house security department. It's been transformative for our compliance journey.",
      author: "Sarah Johnson",
      title: "COO",
      company: "DataShield",
      rating: 4.5
    }, {
      quote: "Working with Atoro for our SOC 2 compliance was seamless. They guided us through the entire process and helped us achieve certification on our first attempt.",
      author: "David Rivera",
      title: "Head of Engineering",
      company: "SecureStack",
      rating: 5
    }
  ];

  // Client logos for carousel
  const clientLogos = [
    {
      id: 1,
      name: "DataCorp",
      imagePath: "/lovable-uploads/273bf97c-b513-4a94-8fdd-7a5bc90eb254.png"
    },
    {
      id: 2,
      name: "Innovex",
      imagePath: "/lovable-uploads/67e0fd6c-3db8-4cd6-a32b-c0841aa5535e.png"
    },
    {
      id: 3,
      name: "PrivacyTech",
      imagePath: "/lovable-uploads/697c806d-2cfd-402a-8b50-65ceecb5c88c.png"
    },
    {
      id: 4,
      name: "SecureTech",
      imagePath: "/lovable-uploads/9b3556f3-0651-4ed7-b0d6-42ede4d99feb.png"
    },
    {
      id: 5,
      name: "CloudNet",
      imagePath: "/lovable-uploads/5c1f26c2-fb1a-41c2-9088-86b87a45c090.png"
    }
  ];
  
  // Service card data
  const serviceCards = [
    {
      title: "Penetration Testing",
      description: "Identify vulnerabilities in your application with thorough security testing by our experts.",
      icon: <Shield className="text-atoro-green" />,
      linkText: "Learn more",
      linkUrl: "/services/cyber-security/penetration-testing"
    }, 
    {
      title: "ISO 27001 Implementation",
      description: "Structured approach to implementing the ISO 27001 framework for information security.",
      icon: <FileSearch className="text-atoro-green" />,
      linkText: "Learn more", 
      linkUrl: "/services/iso-27001"
    }, 
    {
      title: "SOC 2 Readiness",
      description: "Prepare your organization for SOC 2 certification with our comprehensive audit readiness program.",
      icon: <Lock className="text-atoro-green" />,
      linkText: "Learn more",
      linkUrl: "/services/cyber-security/soc2"
    }
  ];

  // Featured service data
  const featuredServiceFeatures = [
    "On-demand security expertise", 
    "Continuous threat monitoring", 
    "Regular security assessments", 
    "Incident response support"
  ];

  const featuredServiceChallenges = [
    { number: "1", text: "Keeping up with evolving security threats" },
    { number: "2", text: "Meeting enterprise client security requirements" },
    { number: "3", text: "Balancing security with development velocity" },
    { number: "4", text: "Achieving compliance without dedicated resources" }
  ];
  
  return (
    <ServiceLayout>
      {/* Hero Section */}
      <ServiceHeroSection
        title="Move Fast with Confidence"
        highlightText=""
        description="In the SaaS world, a single security slip-up can break customer trust. Our holistic cyber security solutions help you move quickly without compromising safety."
        primaryButtonText="Book a Security Assessment"
        primaryButtonLink="/contact"
        backgroundClass={tokens.gradients.heroDarkTeal}
        imageUrl="/lovable-uploads/62277257-f565-473b-943c-a6746c4c657b.jpg"
        imageAlt="Cyber security data visualization"
      />

      {/* Client logos */}
      <LogoCarousel 
        logos={clientLogos} 
        title="Trusted by Leading Organizations" 
        description="We've helped companies across industries strengthen their security posture"
        className="bg-gray-50"
      />

      {/* Services Section */}
      <ServiceSectionWrapper
        title="Comprehensive Security Solutions"
        description="Embed protection into your development lifecycle without slowing you down. Reduce breach risks, accelerate compliance, and build customer trust."
        badgeText="Our Services"
        badgeClassName="bg-atoro-teal/10 text-atoro-teal hover:bg-atoro-teal/20"
        className={tokens.spacing.section.md}
        bgColor={tokens.colors.bg.white}
        centered={true}
      >
        <ServiceFeatureGrid columns={3} gap="md" maxWidth="max-w-5xl" centered={true}>
          {serviceCards.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              linkText={service.linkText}
              linkUrl={service.linkUrl}
              hoverEffect={true}
            />
          ))}
        </ServiceFeatureGrid>
      </ServiceSectionWrapper>

      {/* Security Team as a Service - Featured Service */}
      <ServiceFeaturedSection
        badgeText="Featured Service"
        title="Security Team as a Service"
        description="Get a dedicated virtual security department without the overhead of building an in-house team. Our experts become an extension of your organization, providing ongoing security oversight and guidance."
        features={featuredServiceFeatures}
        challenges={featuredServiceChallenges}
        ctaText="Learn More"
        ctaLink="/services/security-team-aas"
        backgroundClass={tokens.gradients.sectionTeal}
      />

      {/* Customer Testimonials - Security specific */}
      <TestimonialSection 
        testimonials={securityTestimonials} 
        title="What Our Security Clients Say" 
        description="Read how we've helped companies like yours strengthen their security posture." 
        variant="featured" 
        showRatings={true} 
        bgColor="bg-white" 
      />

      {/* CTA Section */}
      <ServiceSectionWrapper
        className={tokens.spacing.section.md}
        bgColor={tokens.colors.bg.greenLight}
      >
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="mb-4">Secure Your Foundation</h2>
          <p className="text-gray-700 mb-6">
            Even if you're a startup, your security can be enterprise-grade. Let our experts help you
            strengthen your cyber defenses without slowing down your innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green" asChild>
              <Link to="/contact">Book a Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-atoro-teal text-atoro-teal hover:bg-atoro-teal/5" asChild>
              <Link to="/resources/security-assessment">Get a Free Security Checklist</Link>
            </Button>
          </div>
        </div>
      </ServiceSectionWrapper>
    </ServiceLayout>
  );
};

export default CyberSecurity;

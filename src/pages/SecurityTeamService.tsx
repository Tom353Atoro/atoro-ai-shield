import React from 'react';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import SecurityTeamOverview from '@/components/security-team/SecurityTeamOverview';
import SecurityTeamBenefits from '@/components/security-team/SecurityTeamBenefits';
import SecurityTeamProcess from '@/components/security-team/SecurityTeamProcess';
import SecurityTeamCTA from '@/components/security-team/SecurityTeamCTA';
import SecurityTeamFAQ from '@/components/security-team/SecurityTeamFAQ';
import AnimatedTestimonials from '@/components/shared/AnimatedTestimonials';
import TeamSection from '@/components/security-team-service/TeamSection';
import CertificationSection from '@/components/security-team-service/CertificationSection';

const SecurityTeamService = () => {
  // Security Team specific testimonials
  const securityTeamTestimonials = [
    {
      quote: "Atoro's security team has become an extension of our company. Their expertise helped us navigate complex compliance requirements while maintaining our development velocity.",
      author: "Michael Chen",
      title: "CTO",
      company: "FinTech Solutions",
      rating: 5
    }, {
      quote: "Having access to Atoro's security experts has been transformative for our business. We get enterprise-level security capabilities without the overhead of building a team from scratch.",
      author: "Sarah Johnson",
      title: "CEO",
      company: "HealthData Corp",
      rating: 4.5
    }, {
      quote: "What's impressed me most is how Atoro's security team understands our business objectives. They don't just focus on security for security's sake - they align it with our growth goals.",
      author: "David Williams",
      title: "COO",
      company: "CloudScale Systems",
      rating: 5
    }
  ];
  
  return (
    <ServicePageTemplate
      heroProps={{
        title: <><span className="text-atoro-green">Expert</span> Security Team On Demand</>,
        description: "Access dedicated security expertise without the cost and complexity of building an in-house team. Scale security capabilities as your business grows.",
        primaryButtonText: "Get Security Support",
        primaryButtonLink: "/contact",
        secondaryButtonText: "Learn More",
        secondaryButtonLink: "/resources/security-team-guide",
        imageUrl: "/lovable-uploads/security-team-service.png",
        badgeText: "Security Team as a Service",
        backgroundClass: "bg-gradient-to-br from-atoro-dark-teal to-black"
      }}
      serviceSections={
        <>
          {/* Overview Section */}
          <SecurityTeamOverview />
          
          {/* Benefits Section */}
          <SecurityTeamBenefits />
          
          {/* Process Section */}
          <SecurityTeamProcess />
          
          {/* Testimonials after process */}
          <AnimatedTestimonials 
            testimonials={securityTeamTestimonials} 
            title="What Our Clients Say"
            description="Hear from organizations that have strengthened their security with our dedicated team service."
            badgeText="Client Testimonials"
            bgColor="bg-white"
          />
          
          {/* Team Section - Keep this from the original */}
          <TeamSection />
          
          {/* Certification Section - Keep this from the original */}
          <CertificationSection />
        </>
      }
      testimonials={undefined} // Don't use the template's built-in testimonials section
      faqSection={<SecurityTeamFAQ />}
      ctaSection={<SecurityTeamCTA />}
    />
  );
};

export default SecurityTeamService; 
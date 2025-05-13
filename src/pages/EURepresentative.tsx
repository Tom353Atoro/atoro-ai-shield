
import React from 'react';
import StandardServicePage from '@/components/services/StandardServicePage';
import SectionWrapper from '@/components/shared/SectionWrapper';
import ServiceCTASection from '@/components/services/ServiceCTASection';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Shield } from 'lucide-react';
import { tokens } from '@/lib/designTokens';

const EURepresentative = () => {
  // EU Representative specific testimonials
  const euRepTestimonials = [
    {
      quote: "As a US-based company selling to EU customers, Atoro's EU Representative service gave us peace of mind knowing we're meeting our GDPR Article 27 obligations without the complexity of setting up a European entity.",
      author: "Rebecca Johnson",
      title: "COO",
      company: "CloudSoftware Inc",
      rating: 5
    }, {
      quote: "Atoro quickly stepped in as our EU Representative when we realized this was a requirement. Their team's responsiveness to regulatory inquiries has been excellent.",
      author: "David Chen",
      title: "General Counsel",
      company: "DataFlow Systems",
      rating: 4.5
    }, {
      quote: "Having Atoro as our EU Representative has simplified our GDPR compliance and given our European customers confidence in working with us. It's a cost-effective solution to a critical compliance requirement.",
      author: "Sophia Williams",
      title: "Privacy Officer",
      company: "GlobalTech Solutions",
      rating: 5
    }
  ];

  // Client logos
  const clientLogos = [
    {
      id: 1,
      name: "SaasCorp",
      imagePath: "/lovable-uploads/273bf97c-b513-4a94-8fdd-7a5bc90eb254.png"
    },
    {
      id: 2,
      name: "TechInnovate",
      imagePath: "/lovable-uploads/67e0fd6c-3db8-4cd6-a32b-c0841aa5535e.png"
    },
    {
      id: 3,
      name: "DataFlow",
      imagePath: "/lovable-uploads/697c806d-2cfd-402a-8b50-65ceecb5c88c.png"
    },
    {
      id: 4,
      name: "GlobalSoft",
      imagePath: "/lovable-uploads/9b3556f3-0651-4ed7-b0d6-42ede4d99feb.png"
    },
    {
      id: 5,
      name: "CloudSecure",
      imagePath: "/lovable-uploads/5c1f26c2-fb1a-41c2-9088-86b87a45c090.png"
    }
  ];
  
  return (
    <StandardServicePage
      heroProps={{
        title: "Service",
        highlightText: "EU Representative",
        subtitle: "Meet your GDPR Article 27 obligations with our dedicated EU Representative service, designed specifically for non-EU organizations that process European personal data.",
        primaryButtonText: "Appoint Atoro as Your EU Rep",
        primaryButtonLink: "/contact",
        imageUrl: "/lovable-uploads/62277257-f565-473b-943c-a6746c4c657b.jpg",
        backgroundClass: tokens.gradients.heroDarkTeal,
      }}
      clientLogos={clientLogos}
      clientLogosTitle="Trusted by Global Companies"
      clientLogosDescription="Non-EU organizations that rely on Atoro for their EU Representative needs"
      testimonials={euRepTestimonials}
      testimonialsTitle="What Our Clients Say"
      testimonialsDescription="Non-EU companies that rely on our EU Representative service"
      testimonialsBadgeText="Client Testimonials"
    >
      {/* What is an EU Representative Section */}
      <SectionWrapper
        title="What is an EU Representative?"
        description="Under GDPR Article 27, organizations without an establishment in the EU but processing EU resident data must designate an official representative within an EU member state."
        badgeText="Understanding GDPR Requirements"
        bgColor="bg-white"
        spacingSize="lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Who Needs an EU Representative?</h3>
            <p className="text-gray-600 mb-4">
              Your organization needs an EU Representative if:
            </p>
            <ul className="space-y-3">
              {[
                "Your organization is established outside the EU",
                "You offer goods or services to individuals in the EU",
                "You monitor the behavior of individuals in the EU",
                "You don't have an office, branch or other establishment in the EU"
              ].map((point, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-atoro-green mt-0.5 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">What Does an EU Representative Do?</h3>
            <ul className="space-y-3">
              {[
                "Acts as your point of contact for data subjects and supervisory authorities in the EU",
                "Maintains a record of your processing activities",
                "Cooperates with supervisory authorities on your behalf",
                "Receives and forwards any official communication from EU data protection authorities",
                "Represents your organization in case of GDPR inquiries or investigations"
              ].map((point, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-atoro-green mt-0.5 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      {/* Our Service Section */}
      <SectionWrapper
        title="Our EU Representative Service"
        description="Atoro provides a comprehensive EU Representative service that ensures your full compliance with GDPR Article 27."
        badgeText="Our Offering"
        bgColor={tokens.gradients.sectionTeal}
        spacingSize="lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[{
            icon: <Users className="text-atoro-green" />,
            title: "Official Designation",
            description: "Formal appointment as your EU Representative in compliance with GDPR Article 27."
          }, {
            icon: <Shield className="text-atoro-green" />,
            title: "Communication Management",
            description: "Receipt and forwarding of all communications from EU authorities and data subjects."
          }, {
            icon: <Users className="text-atoro-green" />,
            title: "Records Maintenance",
            description: "Maintenance of your processing records and documentation as required by Article 30."
          }].map((service, index) => (
            <div key={index} className="bg-white/10 p-6 rounded-lg border border-white/20 hover:bg-white/15 transition-colors">
              <div className="mb-4 flex justify-center">
                <div className="p-3 bg-white/10 rounded-lg">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center text-white">{service.title}</h3>
              <p className="text-center text-sm text-white opacity-90">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green" asChild>
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>
      </SectionWrapper>

      {/* Process Section */}
      <SectionWrapper
        title="Getting Started is Easy"
        description="Our streamlined process makes appointing Atoro as your EU Representative quick and straightforward."
        badgeText="Simple Process"
        bgColor="bg-white"
        spacingSize="lg"
      >
        <div className="grid md:grid-cols-4 gap-8">
          {[{
            number: "01",
            title: "Initial Consultation",
            description: "We assess your specific EU Representative requirements."
          }, {
            number: "02",
            title: "Service Agreement",
            description: "We prepare and finalize a simple service agreement."
          }, {
            number: "03",
            title: "Documentation",
            description: "We collect necessary information about your processing activities."
          }, {
            number: "04",
            title: "Appointment",
            description: "We formally establish our role as your EU Representative."
          }].map((step, index) => <div key={index} className="relative">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-atoro-green/10 text-atoro-green flex items-center justify-center font-semibold mr-3">
                  {step.number}
                </div>
                <h3 className="font-semibold">{step.title}</h3>
              </div>
              <p className="text-gray-600 text-sm pl-14">{step.description}</p>
              {index < 3 && <div className="hidden md:block absolute top-5 left-5 w-[calc(100%-10px)] h-0.5 bg-atoro-green/10"></div>}
            </div>)}
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <ServiceCTASection
        title="Appoint Your EU Representative Today"
        description="Ensure your GDPR compliance with our professional EU Representative service. Get started quickly with a simple, cost-effective solution."
        primaryButtonText="Request a Quote"
        primaryButtonLink="/contact"
        secondaryButtonText="Download EU Rep Guide"
        secondaryButtonLink="/resources/eu-rep-guide"
        backgroundClass="bg-gradient-to-br from-atoro-blue/10 to-atoro-green/10"
      />
    </StandardServicePage>
  );
};

export default EURepresentative;

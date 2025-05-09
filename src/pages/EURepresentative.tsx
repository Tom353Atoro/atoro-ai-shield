
import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, CheckCircle, ArrowRight, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import TestimonialSection from '@/components/shared/TestimonialSection';
import LogoCarousel from '@/components/shared/LogoCarousel';

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
    <ServiceLayout>
      {/* Hero Section */}
      <section className="pt-16 pb-8 bg-gradient-to-br from-atoro-teal to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 z-0">
          <div className="absolute inset-0 bg-grid-white/10"></div>
        </div>
        
        <Container>
          <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl">
                <span className="text-atoro-green">EU Representative</span> Service
              </h1>
              <p className="text-lg mb-6 opacity-90">
                Meet your GDPR Article 27 obligations with our dedicated EU Representative service, 
                designed specifically for non-EU organizations that process European personal data.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green" asChild>
                  <Link to="/contact">Appoint Atoro as Your EU Rep</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img alt="EU Representative service illustration" className="object-cover w-full rounded-lg" src="/lovable-uploads/62277257-f565-473b-943c-a6746c4c657b.jpg" />
            </div>
          </div>
        </Container>
      </section>

      {/* Client logos */}
      <LogoCarousel 
        logos={clientLogos} 
        title="Trusted by Global Companies" 
        description="Non-EU organizations that rely on Atoro for their EU Representative needs"
        className="bg-gray-50"
      />

      {/* What is an EU Representative Section */}
      <section className="py-12 bg-white">
        <Container>
          <div className="text-center mb-10">
            <Badge className="mb-3 bg-atoro-teal/10 text-atoro-teal hover:bg-atoro-teal/20">Understanding GDPR Requirements</Badge>
            <h2 className="mb-3">What is an EU Representative?</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Under GDPR Article 27, organizations without an establishment in the EU but processing EU resident data 
              must designate an official representative within an EU member state.
            </p>
          </div>

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
        </Container>
      </section>

      {/* Our Service Section */}
      <section className="py-16 bg-gradient-to-br from-atoro-teal to-atoro-dark-teal text-white">
        <Container>
          <div className="text-center mb-10">
            <Badge className="mb-3 bg-white/10 text-white hover:bg-white/20">Our Offering</Badge>
            <h2 className="mb-3 text-white">Our EU Representative Service</h2>
            <p className="text-white opacity-90 max-w-2xl mx-auto">
              Atoro provides a comprehensive EU Representative service that ensures your full compliance with GDPR Article 27.
            </p>
          </div>

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
                <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
                <p className="text-center text-sm opacity-90">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green" asChild>
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <Badge className="mb-3 bg-atoro-teal/10 text-atoro-teal hover:bg-atoro-teal/20">Simple Process</Badge>
            <h2 className="mb-3">Getting Started is Easy</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our streamlined process makes appointing Atoro as your EU Representative quick and straightforward.
            </p>
          </div>

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
        </Container>
      </section>

      {/* Customer Testimonials */}
      <TestimonialSection 
        testimonials={euRepTestimonials} 
        title="What Our Clients Say" 
        description="Non-EU companies that rely on our EU Representative service" 
        variant="featured" 
        showRatings={true} 
        bgColor="bg-gray-50" 
      />

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-br from-atoro-blue/10 to-atoro-green/10">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="mb-4">Appoint Your EU Representative Today</h2>
            <p className="text-gray-700 mb-6">
              Ensure your GDPR compliance with our professional EU Representative service.
              Get started quickly with a simple, cost-effective solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green" asChild>
                <Link to="/contact">Request a Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-atoro-teal text-atoro-teal hover:bg-atoro-teal/5" asChild>
                <Link to="/resources/eu-rep-guide">Download EU Rep Guide</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </ServiceLayout>
  );
};

export default EURepresentative;

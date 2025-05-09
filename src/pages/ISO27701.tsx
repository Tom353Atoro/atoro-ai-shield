
import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, CheckCircle, ArrowRight, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import TestimonialSection from '@/components/shared/TestimonialSection';
import LogoCarousel from '@/components/shared/LogoCarousel';

const ISO27701 = () => {
  // ISO 27701 specific testimonials
  const isoTestimonials = [
    {
      quote: "Atoro's ISO 27701 implementation process was structured and efficient. Their team's expertise helped us extend our existing ISO 27001 certification with minimal disruption.",
      author: "James Wilson",
      title: "Information Security Officer",
      company: "DataSecure Technologies",
      rating: 5
    }, {
      quote: "The gap assessment provided by Atoro gave us clear visibility into what we needed to address for ISO 27701. Their guidance throughout the certification process was invaluable.",
      author: "Elena Martinez",
      title: "Privacy Director",
      company: "CloudPrivacy Solutions",
      rating: 4.5
    }, {
      quote: "Implementing ISO 27701 with Atoro has significantly streamlined our approach to privacy management and helped us meet multiple compliance requirements simultaneously.",
      author: "Michael Chang",
      title: "CTO",
      company: "SecureData Systems",
      rating: 5
    }
  ];

  // Client logos
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
                <span className="text-atoro-green">ISO 27701</span> Implementation & Certification
              </h1>
              <p className="text-lg mb-6 opacity-90">
                Extend your information security management system with robust privacy controls through 
                ISO 27701 implementation, demonstrating your commitment to protecting personal data.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green" asChild>
                  <Link to="/contact">Get ISO 27701 Ready</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img alt="ISO 27701 certification illustration" className="object-cover w-full rounded-lg" src="/lovable-uploads/9f3d1218-65c3-4355-b308-c4b8da789cc6.jpg" />
            </div>
          </div>
        </Container>
      </section>

      {/* Client logos */}
      <LogoCarousel 
        logos={clientLogos} 
        title="Trusted by Leading Organizations" 
        description="We've helped companies across industries achieve ISO 27701 certification"
        className="bg-gray-50"
      />

      {/* Main Features Section */}
      <section className="py-12 bg-white">
        <Container>
          <div className="text-center mb-10">
            <Badge className="mb-3 bg-atoro-teal/10 text-atoro-teal hover:bg-atoro-teal/20">Our Approach</Badge>
            <h2 className="mb-3">ISO 27701 Implementation Process</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              As an extension of ISO 27001, ISO 27701 adds privacy-specific requirements to create a comprehensive 
              Privacy Information Management System (PIMS).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[{
              icon: <Shield className="text-atoro-green" />,
              title: "Gap Assessment",
              description: "Evaluate your current ISO 27001 implementation against ISO 27701 requirements to identify privacy-specific gaps."
            }, {
              icon: <FileText className="text-atoro-green" />,
              title: "PIMS Development",
              description: "Develop and implement the additional controls and documentation required for a complete Privacy Information Management System."
            }, {
              icon: <Shield className="text-atoro-green" />,
              title: "Certification Support",
              description: "Prepare for and guide you through the certification audit process with our experienced consultants."
            }].map((service, index) => <Card key={index} className="border border-gray-100 hover:border-atoro-green/30 hover:shadow-md transition-all overflow-hidden group h-full">
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-atoro-teal/5 rounded-lg">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
                  <p className="text-gray-600 text-center text-sm">{service.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-atoro-teal to-atoro-dark-teal text-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-4 bg-white/10 text-white hover:bg-white/20">Key Benefits</Badge>
              <h2 className="text-white mb-4">Why Implement ISO 27701?</h2>
              <p className="text-lg mb-6 opacity-90">
                ISO 27701 certification offers numerous advantages for organizations handling personal data.
              </p>
              
              <ul className="space-y-3 mb-6">
                {[
                  "Demonstrate compliance with multiple privacy regulations (GDPR, CCPA, etc.)",
                  "Build upon existing ISO 27001 investment and infrastructure",
                  "Improve stakeholder trust and confidence in your privacy practices",
                  "Streamline compliance efforts across multiple regulations",
                  "Reduce the risk of privacy breaches and associated penalties",
                  "Create competitive differentiation in privacy-conscious markets"
                ].map((principle, index) => <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-atoro-green flex-shrink-0" />
                    <span>{principle}</span>
                  </li>)}
              </ul>
              
              <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green" asChild>
                <Link to="/contact">
                  Start Your ISO 27701 Journey
                </Link>
              </Button>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-semibold mb-5">ISO 27701 Implementation Timeline</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border border-atoro-green flex items-center justify-center flex-shrink-0">
                    <span className="text-atoro-green">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Months 1-2: Gap Analysis</h4>
                    <p className="text-sm opacity-80">Assessment of existing privacy controls against ISO 27701</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border border-atoro-green flex items-center justify-center flex-shrink-0">
                    <span className="text-atoro-green">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Months 3-5: Implementation</h4>
                    <p className="text-sm opacity-80">Development of policies, procedures, and technical controls</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border border-atoro-green flex items-center justify-center flex-shrink-0">
                    <span className="text-atoro-green">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Month 6: Internal Audit</h4>
                    <p className="text-sm opacity-80">Verification of compliance through internal assessments</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border border-atoro-green flex items-center justify-center flex-shrink-0">
                    <span className="text-atoro-green">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Months 7-8: Certification Audit</h4>
                    <p className="text-sm opacity-80">External auditor assessment and certification</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Customer Testimonials */}
      <TestimonialSection 
        testimonials={isoTestimonials} 
        title="What Our Clients Say" 
        description="Read how we've helped organizations implement ISO 27701 and strengthen their privacy posture." 
        variant="featured" 
        showRatings={true} 
        bgColor="bg-white" 
      />

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-br from-atoro-blue/10 to-atoro-green/10">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="mb-4">Ready to Implement ISO 27701?</h2>
            <p className="text-gray-700 mb-6">
              Whether you already have ISO 27001 or are starting fresh, our expert consultants can guide you through 
              the entire ISO 27701 implementation and certification process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green" asChild>
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-atoro-teal text-atoro-teal hover:bg-atoro-teal/5" asChild>
                <Link to="/resources/iso-27701-guide">Download ISO 27701 Guide</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </ServiceLayout>
  );
};

export default ISO27701;

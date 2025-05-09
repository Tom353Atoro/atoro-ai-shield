
import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileKey, CheckCircle, ArrowRight, Brain, FileText, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import TestimonialSection from '@/components/shared/TestimonialSection';
import LogoCarousel from '@/components/shared/LogoCarousel';

const ISO42001 = () => {
  // ISO 42001 specific testimonials
  const isoTestimonials = [
    {
      quote: "Atoro's ISO 42001 implementation approach helped us establish a robust AI governance framework that impressed our enterprise clients and regulators alike.",
      author: "Jennifer Chen",
      title: "CTO",
      company: "NexusAI",
      rating: 5
    }, {
      quote: "Implementing ISO 42001 with Atoro has given us a competitive advantage in the AI space. Their expertise in both AI and compliance was invaluable.",
      author: "Marcus Williams",
      title: "Head of Innovation",
      company: "DataSphere",
      rating: 4.5
    }, {
      quote: "The structured approach Atoro took to ISO 42001 implementation helped us navigate this new standard efficiently and effectively.",
      author: "Priya Sharma",
      title: "AI Ethics Officer",
      company: "TechVision",
      rating: 5
    }
  ];

  // Client logos
  const clientLogos = [
    {
      id: 1,
      name: "AICorp",
      imagePath: "/lovable-uploads/273bf97c-b513-4a94-8fdd-7a5bc90eb254.png"
    },
    {
      id: 2,
      name: "Innovex",
      imagePath: "/lovable-uploads/67e0fd6c-3db8-4cd6-a32b-c0841aa5535e.png"
    },
    {
      id: 3,
      name: "DataFlow",
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
                <span className="text-atoro-green">ISO 42001</span> Implementation & Certification
              </h1>
              <p className="text-lg mb-6 opacity-90">
                Navigate the world's first international standard for AI management systems with our
                expert guidance, establishing robust AI governance that builds trust and ensures compliance.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green" asChild>
                  <Link to="/contact">Get ISO 42001 Ready</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img alt="ISO 42001 certification illustration" className="object-cover w-full rounded-lg" src="/lovable-uploads/9f3d1218-65c3-4355-b308-c4b8da789cc6.jpg" />
            </div>
          </div>
        </Container>
      </section>

      {/* Client logos */}
      <LogoCarousel 
        logos={clientLogos} 
        title="Trusted by Leading AI Organizations" 
        description="We've helped companies across industries implement responsible AI practices"
        className="bg-gray-50"
      />

      {/* Main Features Section */}
      <section className="py-12 bg-white">
        <Container>
          <div className="text-center mb-10">
            <Badge className="mb-3 bg-atoro-teal/10 text-atoro-teal hover:bg-atoro-teal/20">Our Approach</Badge>
            <h2 className="mb-3">ISO 42001 Implementation Process</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our structured approach to ISO 42001 implementation helps organizations establish effective AI governance
              frameworks that align with international standards and regulatory requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[{
              icon: <Search className="text-atoro-green" />,
              title: "Gap Assessment",
              description: "Evaluate your current AI governance practices against ISO 42001 requirements to identify areas for improvement."
            }, {
              icon: <FileText className="text-atoro-green" />,
              title: "Framework Development",
              description: "Create a comprehensive AI governance framework with policies, procedures, and controls tailored to your organization."
            }, {
              icon: <Brain className="text-atoro-green" />,
              title: "Implementation Support",
              description: "Guide your team through the implementation process with expert advice and practical tools."
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
              <h2 className="text-white mb-4">Why Implement ISO 42001?</h2>
              <p className="text-lg mb-6 opacity-90">
                ISO 42001 certification demonstrates your commitment to responsible AI practices and provides a structured approach to AI governance.
              </p>
              
              <ul className="space-y-3 mb-6">
                {[
                  "Demonstrate compliance with international AI governance standards",
                  "Build trust with customers, partners, and regulators",
                  "Establish clear accountability and risk management processes",
                  "Enhance your competitive advantage in the AI market",
                  "Address ethical concerns in AI development and deployment",
                  "Prepare for emerging AI regulations globally"
                ].map((principle, index) => <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-atoro-green flex-shrink-0" />
                    <span>{principle}</span>
                  </li>)}
              </ul>
              
              <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green" asChild>
                <Link to="/contact">
                  Start Your ISO 42001 Journey
                </Link>
              </Button>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-semibold mb-5">ISO 42001 Key Components</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border border-atoro-green flex items-center justify-center flex-shrink-0">
                    <span className="text-atoro-green">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium">AI Governance Structure</h4>
                    <p className="text-sm opacity-80">Clear roles, responsibilities, and decision-making processes</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border border-atoro-green flex items-center justify-center flex-shrink-0">
                    <span className="text-atoro-green">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Risk Management Framework</h4>
                    <p className="text-sm opacity-80">Systematic approach to identifying and mitigating AI risks</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border border-atoro-green flex items-center justify-center flex-shrink-0">
                    <span className="text-atoro-green">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Ethical AI Principles</h4>
                    <p className="text-sm opacity-80">Guidelines for responsible AI development and use</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border border-atoro-green flex items-center justify-center flex-shrink-0">
                    <span className="text-atoro-green">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Documentation & Transparency</h4>
                    <p className="text-sm opacity-80">Comprehensive records of AI systems and decisions</p>
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
        description="Read how we've helped organizations implement ISO 42001 and strengthen their AI governance." 
        variant="featured" 
        showRatings={true} 
        bgColor="bg-white" 
      />

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-br from-atoro-blue/10 to-atoro-green/10">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="mb-4">Ready to Implement ISO 42001?</h2>
            <p className="text-gray-700 mb-6">
              Whether you're just starting your AI governance journey or looking to achieve certification, our expert consultants can guide you through the entire process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green" asChild>
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-atoro-teal text-atoro-teal hover:bg-atoro-teal/5" asChild>
                <Link to="/resources/iso-42001-guide">Download ISO 42001 Guide</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </ServiceLayout>
  );
};

export default ISO42001;

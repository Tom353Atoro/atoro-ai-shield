
import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileKey, CheckCircle, ArrowRight, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import TestimonialSection from '@/components/shared/TestimonialSection';
import LogoCarousel from '@/components/shared/LogoCarousel';

const GDPRCompliance = () => {
  // GDPR specific testimonials
  const gdprTestimonials = [
    {
      quote: "Atoro's GDPR implementation saved us countless hours and helped us avoid potential fines. Their expertise in applying the regulations to our specific business was invaluable.",
      author: "Maria Schmidt",
      title: "DPO",
      company: "DataTrust Inc",
      rating: 5
    }, {
      quote: "The GDPR gap analysis Atoro performed was thorough and pragmatic. We now have a clear roadmap to compliance that aligns with our business goals.",
      author: "Thomas Beaumont",
      title: "CIO",
      company: "CloudSecure",
      rating: 4.5
    }, {
      quote: "Working with Atoro on our GDPR compliance program gave us confidence when expanding into European markets. Their ongoing support has been excellent.",
      author: "Sarah Johnson",
      title: "General Counsel",
      company: "TechInnovate",
      rating: 5
    }
  ];

  // Client logos
  const clientLogos = [
    {
      id: 1,
      name: "TechCorp",
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
                <span className="text-atoro-green">GDPR Compliance</span> for SaaS Companies
              </h1>
              <p className="text-lg mb-6 opacity-90">
                Transform complex GDPR requirements into practical, business-friendly solutions that protect 
                user data while enabling your business to thrive in the European market.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green" asChild>
                  <Link to="/contact">Schedule GDPR Assessment</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img alt="GDPR compliance illustration" className="object-cover w-full rounded-lg" src="/lovable-uploads/62277257-f565-473b-943c-a6746c4c657b.jpg" />
            </div>
          </div>
        </Container>
      </section>

      {/* Client logos */}
      <LogoCarousel 
        logos={clientLogos} 
        title="Trusted by Leading SaaS Companies" 
        description="We've helped companies of all sizes achieve and maintain GDPR compliance"
        className="bg-gray-50"
      />

      {/* Main Features Section */}
      <section className="py-12 bg-white">
        <Container>
          <div className="text-center mb-10">
            <Badge className="mb-3 bg-atoro-teal/10 text-atoro-teal hover:bg-atoro-teal/20">Our Approach</Badge>
            <h2 className="mb-3">Comprehensive GDPR Implementation</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our GDPR services focus on practical implementation that balances compliance requirements with 
              business needs, ensuring you meet regulations without unnecessary operational burden.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[{
              icon: <Shield className="text-atoro-green" />,
              title: "Gap Analysis",
              description: "Thorough assessment of your current practices against GDPR requirements to identify compliance gaps."
            }, {
              icon: <FileKey className="text-atoro-green" />,
              title: "Policy Framework",
              description: "Development of all required policies, procedures, and documentation to demonstrate compliance."
            }, {
              icon: <Shield className="text-atoro-green" />,
              title: "Implementation",
              description: "Practical implementation of necessary technical and organizational measures to protect personal data."
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

      {/* GDPR Key Principles */}
      <section className="py-16 bg-gradient-to-br from-atoro-teal to-atoro-dark-teal text-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-4 bg-white/10 text-white hover:bg-white/20">GDPR Fundamentals</Badge>
              <h2 className="text-white mb-4">Key GDPR Principles</h2>
              <p className="text-lg mb-6 opacity-90">
                Our implementation focuses on embedding these core GDPR principles into your operations, ensuring compliance by design.
              </p>
              
              <ul className="space-y-3 mb-6">
                {[
                  "Lawfulness, fairness and transparency",
                  "Purpose limitation",
                  "Data minimization",
                  "Accuracy",
                  "Storage limitation",
                  "Integrity and confidentiality",
                  "Accountability"
                ].map((principle, index) => <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-atoro-green flex-shrink-0" />
                    <span>{principle}</span>
                  </li>)}
              </ul>
              
              <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green" asChild>
                <Link to="/contact">
                  Get Started
                </Link>
              </Button>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-semibold mb-5">GDPR Compliance Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border border-atoro-green flex items-center justify-center flex-shrink-0">
                    <span className="text-atoro-green">1</span>
                  </div>
                  <span>Avoid potential fines up to €20 million or 4% of global revenue</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border border-atoro-green flex items-center justify-center flex-shrink-0">
                    <span className="text-atoro-green">2</span>
                  </div>
                  <span>Build trust with your European customers and partners</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border border-atoro-green flex items-center justify-center flex-shrink-0">
                    <span className="text-atoro-green">3</span>
                  </div>
                  <span>Streamline international data transfers</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border border-atoro-green flex items-center justify-center flex-shrink-0">
                    <span className="text-atoro-green">4</span>
                  </div>
                  <span>Differentiate your business with strong privacy practices</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Customer Testimonials */}
      <TestimonialSection 
        testimonials={gdprTestimonials} 
        title="What Our Clients Say" 
        description="Read how we've helped companies achieve GDPR compliance while growing their business." 
        variant="featured" 
        showRatings={true} 
        bgColor="bg-white" 
      />

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-br from-atoro-blue/10 to-atoro-green/10">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="mb-4">Ready to Ensure GDPR Compliance?</h2>
            <p className="text-gray-700 mb-6">
              Whether you're just starting your GDPR journey or need to improve your existing compliance program,
              our team of experts can guide you through the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green" asChild>
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-atoro-teal text-atoro-teal hover:bg-atoro-teal/5" asChild>
                <Link to="/resources/gdpr-checklist">Download GDPR Readiness Checklist</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </ServiceLayout>
  );
};

export default GDPRCompliance;

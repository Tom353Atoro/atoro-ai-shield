
import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, FileCode, Settings, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import TestimonialSection from '@/components/shared/TestimonialSection';

const AIGovernance = () => {
  // AI-specific testimonials
  const aiTestimonials = [
    {
      quote: "Atoro helped us implement a robust AI governance framework that aligns with emerging regulations. Their ISO 42001 guidance was invaluable for our AI-driven products.",
      author: "Jennifer Chen",
      title: "CTO",
      company: "NexusAI",
      rating: 5
    }, {
      quote: "The vAIGO service has been transformative, providing us with expert guidance on AI ethics and compliance without having to hire specialized staff. Worth every penny.",
      author: "Marcus Williams",
      title: "Head of Innovation",
      company: "DataSphere",
      rating: 4.5
    }, {
      quote: "Our AI risk assessment uncovered several potential bias issues before launch. Atoro's team provided practical solutions that improved our models while maintaining performance.",
      author: "Priya Sharma",
      title: "AI Product Manager",
      company: "TechVision",
      rating: 5
    }
  ];

  return (
    <ServiceLayout>
      {/* Hero Section with improved contrast */}
      <section className="pt-16 pb-8 bg-gradient-to-br from-atoro-dark-teal to-black text-white relative overflow-hidden">
        {/* Light overlay pattern for visibility */}
        <div className="absolute inset-0 opacity-20 z-0">
          <div className="absolute inset-0 bg-grid-white/10"></div>
        </div>
        
        {/* Hero content with improved contrast */}
        <Container>
          <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl">
                <span className="text-atoro-green">Innovate</span> with Confidence
              </h1>
              <p className="text-lg mb-6 opacity-90">
                ISO 42001 certification support and virtual AI Governance Officer (vAIGO) services that keep your 
                machine-learning features ethical, secure, and compliant.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green">
                  AI Risk Assessment
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Explore AI Services
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img alt="AI governance visualization" className="object-cover w-full rounded-lg" src="/lovable-uploads/62277257-f565-473b-943c-a6746c4c657b.jpg" />
            </div>
          </div>
        </Container>
      </section>

      {/* Services Section - Three Cards */}
      <section className="py-12 bg-white">
        <Container>
          <div className="text-center mb-10">
            <Badge className="mb-3 bg-atoro-teal/10 text-atoro-teal hover:bg-atoro-teal/20">Our Services</Badge>
            <h2 className="mb-3">AI Governance Solutions</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our AI governance framework ensures your AI systems operate ethically, 
              transparently, and in compliance with emerging regulations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{
              icon: <Brain className="text-atoro-green" />,
              title: "AI Risk Assessment",
              description: "Comprehensive evaluation of AI systems for potential risks, biases, and compliance gaps.",
              link: "/services/ai-governance/risk-assessment"
            }, {
              icon: <FileCode className="text-atoro-green" />,
              title: "ISO 42001 Support",
              description: "Guidance for implementing the ISO standard for AI management systems.",
              link: "/services/ai-governance/iso-42001"
            }, {
              icon: <Settings className="text-atoro-green" />,
              title: "vAIGO Services",
              description: "Virtual AI Governance Officer to oversee your AI operations and compliance.",
              link: "/services/ai-governance/vaigo"
            }].map((service, index) => (
              <Card key={index} className="border border-gray-100 hover:border-atoro-green/30 hover:shadow-md transition-all overflow-hidden group h-full">
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-atoro-teal/5 rounded-lg">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
                  <p className="text-gray-600 text-center text-sm">{service.description}</p>
                </CardContent>
                <CardFooter className="pt-0 pb-5 flex justify-center">
                  <Button variant="ghost" size="sm" className="text-atoro-teal group-hover:text-atoro-green group-hover:bg-atoro-green/10 transition-colors" asChild>
                    <Link to={service.link} className="flex items-center gap-1">
                      Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* ISO 42001 - Featured Service */}
      <section className="py-16 bg-gradient-to-br from-atoro-teal to-atoro-dark-teal text-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-4 bg-white/10 text-white hover:bg-white/20">Featured Service</Badge>
              <h2 className="text-white mb-4">ISO 42001 Implementation</h2>
              <p className="text-lg mb-6 opacity-90">
                Establish a certified AI management system that demonstrates your commitment to responsible AI. 
                Our ISO 42001 implementation guidance helps you develop robust governance processes for your machine learning operations.
              </p>
              
              <ul className="space-y-3 mb-6">
                {[
                  "Comprehensive risk management framework", 
                  "Documented AI development lifecycle", 
                  "Ethical AI principles integration", 
                  "Regulatory compliance alignment"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-atoro-green flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green" asChild>
                <Link to="/services/ai-governance/iso-42001">
                  Learn More
                </Link>
              </Button>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-semibold mb-5">Common AI Governance Challenges</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border border-atoro-green flex items-center justify-center flex-shrink-0">
                    <span className="text-atoro-green">1</span>
                  </div>
                  <span>Keeping up with evolving AI regulations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border border-atoro-green flex items-center justify-center flex-shrink-0">
                    <span className="text-atoro-green">2</span>
                  </div>
                  <span>Identifying and mitigating AI bias and risks</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border border-atoro-green flex items-center justify-center flex-shrink-0">
                    <span className="text-atoro-green">3</span>
                  </div>
                  <span>Implementing comprehensive AI governance frameworks</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border border-atoro-green flex items-center justify-center flex-shrink-0">
                    <span className="text-atoro-green">4</span>
                  </div>
                  <span>Balancing innovation with compliance requirements</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Customer Testimonials - AI specific */}
      <TestimonialSection 
        testimonials={aiTestimonials} 
        title="What Our AI Governance Clients Say" 
        description="Read how we've helped companies like yours implement responsible AI practices." 
        variant="featured" 
        showRatings={true} 
        bgColor="bg-white" 
      />

      {/* CTA Section - More compact */}
      <section className="py-12 bg-gradient-to-br from-atoro-blue/10 to-atoro-green/10">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="mb-4">Ready for Responsible AI?</h2>
            <p className="text-gray-700 mb-6">
              Let our AI governance experts help you implement a framework that ensures your AI 
              systems are ethical, transparent, and compliant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green" asChild>
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-atoro-teal text-atoro-teal hover:bg-atoro-teal/5" asChild>
                <Link to="/resources/ai-governance">Download AI Governance Guide</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </ServiceLayout>
  );
};

export default AIGovernance;

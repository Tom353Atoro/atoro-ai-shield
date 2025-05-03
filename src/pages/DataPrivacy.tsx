import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, FileKey, Lock, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import TestimonialSection from '@/components/shared/TestimonialSection';

const DataPrivacy = () => {
  // Privacy-specific testimonials
  const privacyTestimonials = [
    {
      quote: "Atoro's vDPO service transformed our approach to data privacy. They helped us navigate complex regulations while maintaining our development velocity.",
      author: "Emma Richardson",
      title: "CTO",
      company: "DataFocus",
      rating: 5
    }, {
      quote: "Working with Atoro gave us the privacy expertise we needed without hiring a full-time DPO. Their team handled GDPR compliance end-to-end, saving us countless hours.",
      author: "Daniel Chen",
      title: "CEO",
      company: "UserFirst",
      rating: 4.5
    }, {
      quote: "The documentation and processes Atoro implemented for our privacy program impressed even our most demanding enterprise clients during security reviews.",
      author: "Sophie Martinez",
      title: "COO",
      company: "CloudPrivacy",
      rating: 5
    }
  ];
  
  return (
    <ServiceLayout>
      {/* Hero Section with improved contrast */}
      <section className="pt-16 pb-8 bg-gradient-to-br from-atoro-teal to-black text-white relative overflow-hidden">
        {/* Light overlay pattern for visibility */}
        <div className="absolute inset-0 opacity-20 z-0">
          <div className="absolute inset-0 bg-grid-white/10"></div>
        </div>
        
        {/* Hero content with improved contrast */}
        <Container>
          <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl">
                <span className="text-atoro-green">Privacy by Design</span>, Not Afterthought
              </h1>
              <p className="text-lg mb-6 opacity-90">
                Turn complex privacy regulations into a competitive advantage. Our data privacy solutions handle
                compliance while you focus on building your product.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green">
                  Request Privacy Assessment
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img alt="Data privacy visualization" className="object-cover w-full rounded-lg" src="/lovable-uploads/62277257-f565-473b-943c-a6746c4c657b.jpg" />
            </div>
          </div>
        </Container>
      </section>

      {/* Services Section - More compact */}
      <section className="py-12 bg-white">
        <Container>
          <div className="text-center mb-10">
            <Badge className="mb-3 bg-atoro-teal/10 text-atoro-teal hover:bg-atoro-teal/20">Our Services</Badge>
            <h2 className="mb-3">Comprehensive Privacy Solutions</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Navigate complex regulatory requirements with our end-to-end privacy services.
              Build trust with customers and meet compliance requirements without slowing innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{
              icon: <Shield className="text-atoro-green" />,
              title: "GDPR Compliance",
              description: "Complete implementation of GDPR requirements tailored to your SaaS business.",
              link: "/services/data-privacy/gdpr-compliance"
            }, {
              icon: <FileKey className="text-atoro-green" />,
              title: "Data Mapping",
              description: "Comprehensive inventory of personal data flows throughout your organization.",
              link: "/services/data-privacy/data-mapping"
            }, {
              icon: <Lock className="text-atoro-green" />,
              title: "DPIA & PIAs",
              description: "Thorough privacy impact assessments to identify and mitigate privacy risks early.",
              link: "/services/data-privacy/privacy-impact-assessments"
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
                <CardFooter className="pt-0 pb-5 flex justify-center">
                  <Button variant="ghost" size="sm" className="text-atoro-teal group-hover:text-atoro-green group-hover:bg-atoro-green/10 transition-colors" asChild>
                    <Link to={service.link} className="flex items-center gap-1">
                      Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>)}
          </div>
        </Container>
      </section>

      {/* Virtual DPO as a Service - Featured Service */}
      <section className="py-16 bg-gradient-to-br from-atoro-teal to-atoro-dark-teal text-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-4 bg-white/10 text-white hover:bg-white/20">Featured Service</Badge>
              <h2 className="text-white mb-4">Virtual Data Protection Officer</h2>
              <p className="text-lg mb-6 opacity-90">
                Get qualified privacy leadership without the cost of a full-time hire. Our vDPO service
                provides the expertise you need to navigate complex privacy regulations and protect your business.
              </p>
              
              <ul className="space-y-3 mb-6">
                {["Regulatory representation", "Compliance oversight", "Staff training", "Incident response"].map((feature, index) => <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-atoro-green flex-shrink-0" />
                    <span>{feature}</span>
                  </li>)}
              </ul>
              
              <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green" asChild>
                <Link to="/services/data-privacy/vdpo">
                  Learn More
                </Link>
              </Button>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-semibold mb-5">Common Privacy Challenges</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border border-atoro-green flex items-center justify-center flex-shrink-0">
                    <span className="text-atoro-green">1</span>
                  </div>
                  <span>Navigating complex and changing regulations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border border-atoro-green flex items-center justify-center flex-shrink-0">
                    <span className="text-atoro-green">2</span>
                  </div>
                  <span>Meeting data subject access request obligations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border border-atoro-green flex items-center justify-center flex-shrink-0">
                    <span className="text-atoro-green">3</span>
                  </div>
                  <span>Implementing privacy by design in development</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border border-atoro-green flex items-center justify-center flex-shrink-0">
                    <span className="text-atoro-green">4</span>
                  </div>
                  <span>Managing cross-border data transfers legally</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Customer Testimonials - Privacy specific */}
      <TestimonialSection testimonials={privacyTestimonials} title="What Our Privacy Clients Say" description="Read how we've helped companies like yours strengthen their privacy posture." variant="featured" showRatings={true} bgColor="bg-white" />

      {/* Process Section - Keep from original */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Data Privacy Implementation Process</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We take a systematic approach to building your privacy program, ensuring no detail is missed
              and compliance is achieved efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Assessment",
                description: "We conduct a comprehensive gap analysis against privacy requirements and assess your current data practices."
              },
              {
                number: "02",
                title: "Planning",
                description: "Our team develops a tailored roadmap for achieving compliance, prioritizing critical requirements."
              },
              {
                number: "03",
                title: "Implementation",
                description: "We execute the plan, drafting policies, setting up processes, and implementing technical measures."
              },
              {
                number: "04",
                title: "Maintenance",
                description: "Ongoing support ensures your privacy program adapts to regulatory changes and business growth."
              }
            ].map((step, index) => (
              <div key={index} className="border border-gray-100 rounded-lg p-8 relative hover:shadow-md transition-shadow bg-gradient-to-b from-white to-gray-50">
                <span className="absolute top-0 right-0 p-4 font-bold text-4xl text-gray-100">{step.number}</span>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section - More compact */}
      <section className="py-12 bg-gradient-to-br from-atoro-blue/10 to-atoro-green/10">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="mb-4">Turn Privacy into a Competitive Advantage</h2>
            <p className="text-gray-700 mb-6">
              With Atoro handling your data privacy, you can reassure customers and regulators alike – all while keeping
              your focus on building a great product. Schedule a call today to discuss your specific challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green" asChild>
                <Link to="/contact">Book a Free Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-atoro-teal text-atoro-teal hover:bg-atoro-teal/5" asChild>
                <Link to="/resources/privacy-assessment">Get a Free Privacy Checklist</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </ServiceLayout>
  );
};

export default DataPrivacy;

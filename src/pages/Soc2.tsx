
import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileKey, CheckCircle, ArrowRight, FileSearch, FileText, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import TestimonialSection from '@/components/shared/TestimonialSection';

const Soc2 = () => {
  // SOC 2 specific testimonials
  const soc2Testimonials = [
    {
      quote: "Atoro guided us through the entire SOC 2 process from gap assessment to final audit. We achieved Type 2 certification on our first attempt, which was crucial for our enterprise sales.",
      author: "Sophia Chen",
      title: "COO",
      company: "DataShield",
      rating: 5
    }, {
      quote: "What sets Atoro apart is their pragmatic approach to SOC 2. They helped us implement controls that strengthened our security without creating unnecessary operational overhead.",
      author: "James Wilson",
      title: "CTO",
      company: "TrustCloud",
      rating: 4.5
    }, {
      quote: "The SOC 2 readiness toolkit and guidance from Atoro cut our preparation time in half. Their expertise was invaluable throughout our compliance journey.",
      author: "Priya Sharma",
      title: "VP of Security",
      company: "SecureFlow",
      rating: 5
    }
  ];
  
  return (
    <ServiceLayout>
      {/* Hero Section */}
      <section className="pt-16 pb-8 bg-gradient-to-br from-atoro-dark-teal to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 z-0">
          <div className="absolute inset-0 bg-grid-white/10"></div>
        </div>
        
        <Container>
          <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl">
                <span className="text-atoro-green">SOC 2 Compliance</span> Without the Stress
              </h1>
              <p className="text-lg mb-6 opacity-90">
                From readiness assessment to successful audit, we guide you through the entire SOC 2 certification process, 
                helping you build trust with customers and accelerate your sales cycle.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green" asChild>
                  <Link to="/contact">Start Your SOC 2 Journey</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                alt="SOC 2 compliance illustration" 
                className="object-cover w-full rounded-lg" 
                src="/lovable-uploads/2ff67c0a-34c5-4cf0-83e9-3dbddc25b5ce.png" 
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-white">
        <Container>
          <div className="text-center mb-10">
            <Badge className="mb-3 bg-atoro-teal/10 text-atoro-teal hover:bg-atoro-teal/20">Our Services</Badge>
            <h2 className="mb-3">End-to-End SOC 2 Support</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We provide comprehensive services to help you achieve and maintain SOC 2 compliance, tailored to your company's size and maturity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[{
              icon: <FileSearch className="text-atoro-green" />,
              title: "Readiness Assessment",
              description: "Evaluate your current controls against SOC 2 requirements and identify gaps that need to be addressed."
            }, {
              icon: <FileKey className="text-atoro-green" />,
              title: "Policy Development",
              description: "Create and implement the necessary security policies and procedures required for SOC 2 compliance."
            }, {
              icon: <UserCheck className="text-atoro-green" />,
              title: "Audit Support",
              description: "Guide you through the audit process with preparation, evidence collection, and remediation support."
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

      {/* Process Section */}
      <section className="py-16 bg-atoro-teal/5">
        <Container>
          <div className="text-center mb-12">
            <Badge className="mb-3 bg-atoro-teal/10 text-atoro-teal hover:bg-atoro-teal/20">Our Process</Badge>
            <h2 className="mb-3">Your Path to SOC 2 Compliance</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our structured approach makes achieving SOC 2 compliance manageable and efficient.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[{
              number: "01",
              title: "Gap Assessment",
              description: "We evaluate your current security controls against SOC 2 requirements."
            }, {
              number: "02",
              title: "Remediation",
              description: "We help implement necessary controls and documentation to address identified gaps."
            }, {
              number: "03",
              title: "Evidence Collection",
              description: "We assist in gathering and organizing evidence needed for the audit."
            }, {
              number: "04",
              title: "Audit Support",
              description: "We provide guidance throughout the audit process, ensuring a smooth experience."
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

      {/* SOC 2 Trust Principles */}
      <section className="py-16 bg-gradient-to-br from-atoro-teal to-atoro-dark-teal text-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-4 bg-white/10 text-white hover:bg-white/20">Understanding SOC 2</Badge>
              <h2 className="text-white mb-4">The Five Trust Services Criteria</h2>
              <p className="text-lg mb-6 opacity-90">
                SOC 2 compliance is based on the following Trust Services Criteria established by AICPA.
                We'll help you implement controls to address all applicable criteria.
              </p>
              
              <ul className="space-y-3 mb-6">
                {[
                  "Security - Protection against unauthorized access",
                  "Availability - System availability for operation and use",
                  "Processing Integrity - System processing is complete and accurate",
                  "Confidentiality - Information designated as confidential is protected",
                  "Privacy - Personal information is collected and used in accordance with commitments"
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
              <h3 className="text-xl font-semibold mb-5">SOC 2 Advantages</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border border-atoro-green flex items-center justify-center flex-shrink-0">
                    <span className="text-atoro-green">1</span>
                  </div>
                  <span>Build customer trust and expedite security reviews</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border border-atoro-green flex items-center justify-center flex-shrink-0">
                    <span className="text-atoro-green">2</span>
                  </div>
                  <span>Demonstrate commitment to security and privacy</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border border-atoro-green flex items-center justify-center flex-shrink-0">
                    <span className="text-atoro-green">3</span>
                  </div>
                  <span>Gain competitive advantage in the marketplace</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border border-atoro-green flex items-center justify-center flex-shrink-0">
                    <span className="text-atoro-green">4</span>
                  </div>
                  <span>Strengthen your overall security posture</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Customer Testimonials */}
      <TestimonialSection 
        testimonials={soc2Testimonials} 
        title="What Our Clients Say" 
        description="Read how we've helped companies achieve SOC 2 compliance and accelerate their growth." 
        variant="featured" 
        showRatings={true} 
        bgColor="bg-white" 
      />

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-br from-atoro-blue/10 to-atoro-green/10">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="mb-4">Start Your SOC 2 Journey Today</h2>
            <p className="text-gray-700 mb-6">
              Whether you're just beginning to think about SOC 2 or ready to prepare for an audit,
              our team of experts can guide you through the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green" asChild>
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-atoro-teal text-atoro-teal hover:bg-atoro-teal/5" asChild>
                <Link to="/resources/soc2-checklist">Download SOC 2 Readiness Checklist</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </ServiceLayout>
  );
};

export default Soc2;


import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, FileSearch, ArrowRight, CheckCircle, Bug, Network, ServerCog } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedTestimonials from '@/components/shared/AnimatedTestimonials';

const PenetrationTesting = () => {
  // Penetration testing specific testimonials
  const pentestTestimonials = [
    {
      quote: "Atoro's penetration testing uncovered vulnerabilities our automated scans missed. Their detailed remediation steps helped us fix issues quickly and effectively.",
      author: "Alex Thompson",
      title: "CTO",
      company: "SecureStack",
      rating: 5
    }, {
      quote: "The penetration testing team at Atoro combines technical excellence with practical business context. They understand what matters most to our organization.",
      author: "Jennifer Wu",
      title: "CISO",
      company: "DataTrust",
      rating: 4.5
    }, {
      quote: "What impressed me most was the clear communication throughout the testing process. No technical jargon - just straightforward explanations of our security risks.",
      author: "Marcus Levi",
      title: "Head of DevOps",
      company: "CloudNative",
      rating: 5
    }
  ];
  
  return (
    <ServiceLayout>
      {/* Hero Section with improved contrast */}
      <section className="pt-16 pb-8 bg-gradient-to-br from-atoro-dark-teal to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 z-0">
          <div className="absolute inset-0 bg-grid-white/10"></div>
        </div>
        
        <Container>
          <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl">
                <span className="text-atoro-green">Uncover</span> What Attackers See
              </h1>
              <p className="text-lg mb-6 opacity-90">
                Our penetration testing services simulate real-world cyber attacks to identify vulnerabilities 
                before malicious actors can exploit them, protecting your business and customer data.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green" asChild>
                  <Link to="/contact">Schedule a Penetration Test</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                alt="Penetration testing visualization" 
                className="object-cover w-full rounded-lg" 
                src="/lovable-uploads/1b5ef3e0-1624-4c80-b9f0-33d25a819c7b.png"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Service Details */}
      <section className="py-12 bg-white">
        <Container>
          <div className="text-center mb-10">
            <Badge className="mb-3 bg-atoro-teal/10 text-atoro-teal hover:bg-atoro-teal/20">Our Approach</Badge>
            <h2 className="mb-3">Comprehensive Security Testing</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our penetration tests go beyond automated scanning to find the vulnerabilities that matter most to your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[{
              icon: <Bug className="text-atoro-green" />,
              title: "Web Application Testing",
              description: "Identify security flaws in your web applications, APIs, and customer-facing portals."
            }, {
              icon: <Network className="text-atoro-green" />,
              title: "Infrastructure Testing",
              description: "Secure your network, cloud infrastructure, and internal systems from potential breaches."
            }, {
              icon: <ServerCog className="text-atoro-green" />,
              title: "DevSecOps Integration",
              description: "Embed security testing into your CI/CD pipeline for continuous vulnerability detection."
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
            <h2 className="mb-3">How Our Penetration Testing Works</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our structured approach ensures thorough testing while keeping your business goals in focus.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[{
              number: "01",
              title: "Scoping & Planning",
              description: "We work with you to define the scope and objectives of the penetration test."
            }, {
              number: "02",
              title: "Reconnaissance & Testing",
              description: "Our experts use both automated tools and manual techniques to identify vulnerabilities."
            }, {
              number: "03",
              title: "Analysis & Reporting",
              description: "We provide a detailed report of findings with clear remediation recommendations."
            }, {
              number: "04",
              title: "Remediation Support",
              description: "We assist your team in addressing the identified vulnerabilities effectively."
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

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-atoro-teal to-atoro-dark-teal text-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-4 bg-white/10 text-white hover:bg-white/20">Benefits</Badge>
              <h2 className="text-white mb-4">Why Choose Our Penetration Testing</h2>
              <p className="text-lg mb-6 opacity-90">
                Our penetration testing services provide more than just a list of vulnerabilities. We deliver actionable insights that help you build a stronger security posture.
              </p>
              
              <ul className="space-y-3 mb-6">
                {[
                  "Experienced security professionals with industry certifications",
                  "Clear, business-focused reporting that prioritizes critical issues",
                  "Remediation guidance tailored to your technology stack",
                  "Compliance support for SOC 2, ISO 27001, and other frameworks"
                ].map((feature, index) => <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-atoro-green flex-shrink-0" />
                    <span>{feature}</span>
                  </li>)}
              </ul>
              
              <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green" asChild>
                <Link to="/contact">
                  Get Started
                </Link>
              </Button>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-semibold mb-5">Types of Testing We Offer</h3>
              <ul className="space-y-4">
                {[
                  "Black Box Testing - Simulating external attacker perspective",
                  "Gray Box Testing - Limited knowledge assessment",
                  "White Box Testing - Full system access for comprehensive review",
                  "Red Team Exercises - Advanced attack simulation scenarios"
                ].map((type, index) => <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border border-atoro-green flex items-center justify-center flex-shrink-0">
                    <span className="text-atoro-green">{index + 1}</span>
                  </div>
                  <span>{type}</span>
                </li>)}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Customer Testimonials */}
      <AnimatedTestimonials 
        testimonials={pentestTestimonials} 
        title="What Our Clients Say" 
        description="Read how our penetration testing has helped organizations improve their security posture." 
        variant="featured" 
        badgeText="Client Testimonials"
        bgColor="bg-white" 
      />

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-br from-atoro-blue/10 to-atoro-green/10">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="mb-4">Ready to Test Your Defenses?</h2>
            <p className="text-gray-700 mb-6">
              Schedule a consultation with our security experts to discuss how our penetration testing services can help secure your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green" asChild>
                <Link to="/contact">Book a Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-atoro-teal text-atoro-teal hover:bg-atoro-teal/5" asChild>
                <Link to="/resources/pentest-checklist">Download Testing Checklist</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </ServiceLayout>
  );
};

export default PenetrationTesting;

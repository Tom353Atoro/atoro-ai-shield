import React from 'react';
import Navbar from '@/components/layout/Navbar';
import { Container } from '@/components/ui/Container';
import Newsletter from '@/components/home/Newsletter';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, FileSearch, Lock, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import TestimonialSection from '@/components/shared/TestimonialSection';
import { AspectRatio } from '@/components/ui/aspect-ratio';
const CyberSecurity = () => {
  // Security-specific testimonials
  const securityTestimonials = [{
    quote: "Atoro's security assessment identified critical vulnerabilities our internal team had missed. Their remediation guidance was clear and actionable, significantly improving our security posture.",
    author: "Michael Zhang",
    title: "CTO",
    company: "CloudSecure",
    rating: 5
  }, {
    quote: "The Security Team as a Service model gave us enterprise-grade protection without the overhead of building an in-house security department. It's been transformative for our compliance journey.",
    author: "Sarah Johnson",
    title: "COO",
    company: "DataShield",
    rating: 4.5
  }, {
    quote: "Working with Atoro for our SOC 2 compliance was seamless. They guided us through the entire process and helped us achieve certification on our first attempt.",
    author: "David Rivera",
    title: "Head of Engineering",
    company: "SecureStack",
    rating: 5
  }];
  return <div className="flex min-h-screen flex-col">
      <Navbar />
      
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
                <span className="text-atoro-green">Move Fast</span> with Confidence
              </h1>
              <p className="text-lg mb-6 opacity-90">
                In the SaaS world, a single security slip-up can break customer trust. 
                Our holistic cyber security solutions help you move quickly without compromising safety.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green">
                  Book a Security Assessment
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img alt="Cyber security data visualization" className="object-cover w-full rounded-lg" src="/lovable-uploads/62277257-f565-473b-943c-a6746c4c657b.jpg" />
            </div>
          </div>
        </Container>
      </section>

      {/* Services Section - More compact */}
      <section className="py-12 bg-white">
        <Container>
          <div className="text-center mb-10">
            <Badge className="mb-3 bg-atoro-teal/10 text-atoro-teal hover:bg-atoro-teal/20">Our Services</Badge>
            <h2 className="mb-3">Comprehensive Security Solutions</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Embed protection into your development lifecycle without slowing you down.
              Reduce breach risks, accelerate compliance, and build customer trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{
            icon: <Shield className="text-atoro-green" />,
            title: "Penetration Testing",
            description: "Identify vulnerabilities in your application with thorough security testing by our experts.",
            link: "/services/cyber-security/penetration-testing"
          }, {
            icon: <FileSearch className="text-atoro-green" />,
            title: "ISO 27001 Implementation",
            description: "Structured approach to implementing the ISO 27001 framework for information security.",
            link: "/services/cyber-security/iso-27001"
          }, {
            icon: <Lock className="text-atoro-green" />,
            title: "SOC 2 Readiness",
            description: "Prepare your organization for SOC 2 certification with our comprehensive audit readiness program.",
            link: "/services/cyber-security/soc2"
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

      {/* Security Team as a Service - Featured Service */}
      <section className="py-16 bg-gradient-to-br from-atoro-teal to-atoro-dark-teal text-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-4 bg-white/10 text-white hover:bg-white/20">Featured Service</Badge>
              <h2 className="text-white mb-4">Security Team as a Service</h2>
              <p className="text-lg mb-6 opacity-90">
                Get a dedicated virtual security department without the overhead of building an in-house team. 
                Our experts become an extension of your organization, providing ongoing security oversight and guidance.
              </p>
              
              <ul className="space-y-3 mb-6">
                {["On-demand security expertise", "Continuous threat monitoring", "Regular security assessments", "Incident response support"].map((feature, index) => <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-atoro-green flex-shrink-0" />
                    <span>{feature}</span>
                  </li>)}
              </ul>
              
              <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green" asChild>
                <Link to="/services/security-team-aas">
                  Learn More
                </Link>
              </Button>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-semibold mb-5">Common Security Challenges</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border border-atoro-green flex items-center justify-center flex-shrink-0">
                    <span className="text-atoro-green">1</span>
                  </div>
                  <span>Keeping up with evolving security threats</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border border-atoro-green flex items-center justify-center flex-shrink-0">
                    <span className="text-atoro-green">2</span>
                  </div>
                  <span>Meeting enterprise client security requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border border-atoro-green flex items-center justify-center flex-shrink-0">
                    <span className="text-atoro-green">3</span>
                  </div>
                  <span>Balancing security with development velocity</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border border-atoro-green flex items-center justify-center flex-shrink-0">
                    <span className="text-atoro-green">4</span>
                  </div>
                  <span>Achieving compliance without dedicated resources</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Customer Testimonials - Security specific */}
      <TestimonialSection testimonials={securityTestimonials} title="What Our Security Clients Say" description="Read how we've helped companies like yours strengthen their security posture." variant="featured" showRatings={true} bgColor="bg-white" />

      {/* CTA Section - More compact */}
      <section className="py-12 bg-gradient-to-br from-atoro-blue/10 to-atoro-green/10">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="mb-4">Secure Your Foundation</h2>
            <p className="text-gray-700 mb-6">
              Even if you're a startup, your security can be enterprise-grade. Let our experts help you
              strengthen your cyber defenses without slowing down your innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green" asChild>
                <Link to="/contact">Book a Free Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-atoro-teal text-atoro-teal hover:bg-atoro-teal/5" asChild>
                <Link to="/resources/security-assessment">Get a Free Security Checklist</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Newsletter />
      <Footer />
    </div>;
};
export default CyberSecurity;
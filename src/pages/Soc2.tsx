import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Check, CheckCircle, Shield, FileText, Clock, ArrowRight } from 'lucide-react';
import LogoBanner from '@/components/home/LogoBanner';
import AnimatedTestimonials from '@/components/shared/AnimatedTestimonials';

const Soc2 = () => {
  // SOC 2 specific testimonials
  const soc2Testimonials = [
    {
      quote: "Atoro guided us through the entire SOC 2 certification process with a hands-on approach. Their team were thorough, kept us informed throughout, and ensured we were fully prepared for the certification audit.",
      author: "Henrik Dannert",
      title: "CEO",
      company: "Heartpace",
      rating: 5
    }, {
      quote: "The Atoro team were fantastic to work with - they kept us organised and communicated effectively over Slack, email, and weekly check-ins so that we could meet our target deadline to be GDPR compliant within 12 weeks.",
      author: "Vanessa Liu",
      title: "CEO",
      company: "Sugarwork",
      rating: 4.5
    }, {
      quote: "They are professional, knowledgeable, and responsive. We consistently felt confident in their strong expertise and appreciated their guidance throughout the entire SOC2 certification process.",
      author: "Camil Blanaru",
      title: "CTO",
      company: "Prezly BV",
      rating: 5
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
                <span className="text-atoro-green">Achieve</span> SOC 2 Compliance
              </h1>
              <p className="text-lg mb-6 opacity-90">
                Streamline your SOC 2 audit with our expert guidance and automated platform. 
                Get compliant faster and build trust with your customers.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green" asChild>
                  <Link to="/contact">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-atoro-teal text-atoro-teal hover:bg-atoro-teal/5" asChild>
                  <Link to="/resources/soc2-guide">Download SOC 2 Guide</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img alt="SOC 2 compliance illustration" className="object-cover w-full rounded-lg" src="/lovable-uploads/5c1f26c2-fb1a-41c2-9088-86b87a45c090.png" />
            </div>
          </div>
        </Container>
      </section>

      {/* Client logos */}
      <section className="py-12 bg-gray-50">
        <LogoBanner />
      </section>

      {/* What is SOC 2 Section */}
      <section className="py-12 bg-white">
        <Container>
          <div className="text-center mb-10">
            <Badge className="mb-3 bg-atoro-teal/10 text-atoro-teal hover:bg-atoro-teal/20">Understanding SOC 2</Badge>
            <h2 className="mb-3">What is SOC 2?</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              SOC 2 (System and Organization Controls 2) is a widely recognized auditing standard 
              developed by the American Institute of Certified Public Accountants (AICPA). 
              It ensures your service providers securely manage your data to protect the interests of your organization 
              and the privacy of its clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border border-gray-100 hover:border-atoro-green/30 hover:shadow-md transition-all overflow-hidden group h-full">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">SOC 2 Trust Service Criteria</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-atoro-green mt-0.5 flex-shrink-0" />
                    <span>Security: Protect system resources against unauthorized access.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-atoro-green mt-0.5 flex-shrink-0" />
                    <span>Availability: Ensure the system is available for operation and use as agreed.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-atoro-green mt-0.5 flex-shrink-0" />
                    <span>Processing Integrity: Ensure system processing is complete, valid, accurate, timely, and authorized.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-atoro-green mt-0.5 flex-shrink-0" />
                    <span>Confidentiality: Protect confidential information from unauthorized access.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-atoro-green mt-0.5 flex-shrink-0" />
                    <span>Privacy: Handle personal information in conformity with your privacy notice.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-100 hover:border-atoro-green/30 hover:shadow-md transition-all overflow-hidden group h-full">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Why SOC 2 Matters</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-atoro-green mt-0.5 flex-shrink-0" />
                    <span>Build Trust: Demonstrate your commitment to data security and privacy.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-atoro-green mt-0.5 flex-shrink-0" />
                    <span>Meet Customer Requirements: Many enterprises require SOC 2 compliance from their vendors.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-atoro-green mt-0.5 flex-shrink-0" />
                    <span>Gain Competitive Advantage: Stand out from competitors who lack SOC 2 certification.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-atoro-green mt-0.5 flex-shrink-0" />
                    <span>Improve Security Posture: Strengthen your internal controls and reduce the risk of data breaches.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-atoro-green mt-0.5 flex-shrink-0" />
                    <span>Ensure Business Continuity: Protect your operations and maintain customer confidence.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 bg-atoro-teal/5">
        <Container>
          <div className="text-center mb-12">
            <Badge className="mb-3 bg-atoro-teal/10 text-atoro-teal hover:bg-atoro-teal/20">Our Approach</Badge>
            <h2 className="mb-3">Streamlined SOC 2 Compliance</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We simplify the SOC 2 process with our expert guidance and automated platform, 
              helping you achieve compliance quickly and efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[{
              icon: <FileText className="text-atoro-green" />,
              title: "Gap Assessment",
              description: "Identify areas where your current security practices fall short of SOC 2 requirements."
            }, {
              icon: <Shield className="text-atoro-green" />,
              title: "Controls Implementation",
              description: "Implement the necessary controls to meet the SOC 2 Trust Service Criteria."
            }, {
              icon: <Clock className="text-atoro-green" />,
              title: "Audit Preparation",
              description: "Prepare for your SOC 2 audit with our expert guidance and automated platform."
            }].map((step, index) => <Card key={index} className="border border-gray-100 hover:border-atoro-green/30 hover:shadow-md transition-all overflow-hidden group h-full">
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-atoro-teal/5 rounded-lg">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">{step.title}</h3>
                  <p className="text-gray-600 text-center text-sm">{step.description}</p>
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
              <Badge className="mb-4 bg-white/10 text-white hover:bg-white/20">Benefits</Badge>
              <h2 className="text-white mb-4">Why Choose Our SOC 2 Service</h2>
              <p className="text-lg mb-6 opacity-90">
                Our SOC 2 service provides more than just compliance. We help you build a stronger security posture and gain a competitive advantage.
              </p>
              
              <ul className="space-y-3 mb-6">
                {[
                  "Expert guidance from experienced SOC 2 professionals",
                  "Automated platform to streamline the compliance process",
                  "Customized solutions tailored to your specific needs",
                  "Ongoing support to maintain compliance and improve security"
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
              <h3 className="text-xl font-semibold mb-5">SOC 2 Compliance Checklist</h3>
              <ul className="space-y-4">
                {[
                  "Define your system boundary",
                  "Select the applicable Trust Service Criteria",
                  "Conduct a gap assessment",
                  "Implement the necessary controls",
                  "Prepare for your SOC 2 audit",
                  "Obtain your SOC 2 report"
                ].map((item, index) => <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border border-atoro-green flex items-center justify-center flex-shrink-0">
                    <span className="text-atoro-green">{index + 1}</span>
                  </div>
                  <span>{item}</span>
                </li>)}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Customer Testimonials */}
      <AnimatedTestimonials 
        testimonials={soc2Testimonials} 
        title="What Our Clients Say" 
        description="Read how we've helped organizations achieve SOC 2 compliance and build trust with their customers." 
        variant="featured" 
        badgeText="Client Testimonials"
        bgColor="bg-white" 
      />

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-br from-atoro-blue/10 to-atoro-green/10">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="mb-4">Ready to Achieve SOC 2 Compliance?</h2>
            <p className="text-gray-700 mb-6">
              Contact us today to learn how our SOC 2 service can help you streamline the compliance process 
              and build trust with your customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green" asChild>
                <Link to="/contact">Get a Free Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-atoro-teal text-atoro-teal hover:bg-atoro-teal/5" asChild>
                <Link to="/resources/soc2-checklist">Download SOC 2 Checklist</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </ServiceLayout>
  );
};

export default Soc2;

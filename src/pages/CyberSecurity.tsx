
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import { Container } from '@/components/ui/Container';
import Newsletter from '@/components/home/Newsletter';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, FileSearch, Lock, Users } from 'lucide-react';

const CyberSecurity = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-atoro-teal to-atoro-dark-teal text-white">
        <Container>
          <div className="max-w-3xl">
            <h1 className="mb-6">Cyber Security for SaaS</h1>
            <p className="text-xl mb-8 opacity-90">
              Proactive penetration testing, ISO 27001 implementation, SOC 2 readiness, 
              and continuous vCISO oversight that harden your cloud stack without slowing deployment.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green">
                Book a Security Assessment
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Security Solutions
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="mb-4">Proactive SaaS Security</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Our cyber security solutions are designed specifically for SaaS companies, 
              focusing on the unique challenges of cloud-based applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="text-atoro-green" />,
                title: "Penetration Testing",
                description: "Identify vulnerabilities in your application with thorough security testing by our experts."
              },
              {
                icon: <FileSearch className="text-atoro-green" />,
                title: "ISO 27001 Implementation",
                description: "Structured approach to implementing the ISO 27001 framework for information security."
              },
              {
                icon: <Lock className="text-atoro-green" />,
                title: "SOC 2 Readiness",
                description: "Prepare your organization for SOC 2 certification with our comprehensive audit readiness program."
              },
              {
                icon: <Users className="text-atoro-green" />,
                title: "vCISO Services",
                description: "Get the expertise of a Chief Information Security Officer without the full-time cost."
              }
            ].map((feature, index) => (
              <Card key={index} className="border-gray-100 hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-atoro-teal/5 rounded-lg">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">{feature.title}</h3>
                  <p className="text-gray-600 text-center">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Our Security Process</h2>
              <p className="text-lg text-gray-700 mb-8">
                We follow a methodical approach to securing your SaaS application and infrastructure, 
                ensuring complete coverage of all potential vulnerabilities.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    number: "01",
                    title: "Assessment",
                    description: "Comprehensive evaluation of your current security posture."
                  },
                  {
                    number: "02",
                    title: "Implementation",
                    description: "Strategic deployment of security measures and protocols."
                  },
                  {
                    number: "03",
                    title: "Monitoring",
                    description: "Continuous oversight to detect and respond to threats."
                  },
                  {
                    number: "04",
                    title: "Improvement",
                    description: "Regular reviews and updates to strengthen your security."
                  }
                ].map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-atoro-green rounded-full flex items-center justify-center text-atoro-teal font-bold">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-atoro-blue/10 p-8 rounded-lg border border-atoro-blue/20">
              <h3 className="text-2xl font-semibold mb-6">Compliance Frameworks</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-atoro-green rounded-full"></div>
                  <span className="font-medium">ISO 27001</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-atoro-green rounded-full"></div>
                  <span className="font-medium">SOC 2</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-atoro-green rounded-full"></div>
                  <span className="font-medium">GDPR</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-atoro-green rounded-full"></div>
                  <span className="font-medium">HIPAA</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-atoro-green rounded-full"></div>
                  <span className="font-medium">PCI DSS</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-atoro-green rounded-full"></div>
                  <span className="font-medium">CCPA</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-atoro-blue/10 to-atoro-green/10">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="mb-6">Ready to Secure Your SaaS Platform?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Book a no-obligation security assessment with our team and discover how we can help
              strengthen your application's defenses against modern threats.
            </p>
            <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green">
              Schedule Your Assessment
            </Button>
          </div>
        </Container>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default CyberSecurity;

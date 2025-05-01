
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import { Container } from '@/components/ui/Container';
import Newsletter from '@/components/home/Newsletter';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, FileSearch, Lock, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CyberSecurity = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-atoro-teal to-atoro-dark-teal text-white">
        <Container>
          <div className="max-w-3xl">
            <h1 className="mb-6">Move Fast with Confidence</h1>
            <p className="text-xl mb-8 opacity-90">
              In the SaaS world, a single security slip-up can break customer trust or halt a big deal. 
              Our holistic cyber security solutions help you move quickly without compromising safety.
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

      {/* Why Choose Atoro Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-atoro-teal/10 text-atoro-teal hover:bg-atoro-teal/20">Why Choose Atoro</Badge>
            <h2 className="mb-4">SaaS Security Without Compromise</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Atoro's cyber security services embed protection into your development lifecycle without slowing you down.
              We serve as your on-demand security team, helping you reduce the risk of breaches, accelerate compliance,
              and build trust with enterprise customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="text-atoro-green" />,
                title: "Penetration Testing",
                description: "Identify vulnerabilities in your application with thorough security testing by our experts.",
                link: "/services/cyber-security/penetration-testing"
              },
              {
                icon: <FileSearch className="text-atoro-green" />,
                title: "ISO 27001 Implementation",
                description: "Structured approach to implementing the ISO 27001 framework for information security.",
                link: "/services/cyber-security/iso-27001"
              },
              {
                icon: <Lock className="text-atoro-green" />,
                title: "SOC 2 Readiness",
                description: "Prepare your organization for SOC 2 certification with our comprehensive audit readiness program.",
                link: "/services/cyber-security/soc2"
              }
            ].map((service, index) => (
              <Card key={index} className="border border-gray-100 hover:border-atoro-green/30 hover:shadow-md transition-all overflow-hidden group">
                <CardContent className="pt-6">
                  <div className="mb-5 flex justify-center">
                    <div className="p-3 bg-atoro-teal/5 rounded-lg">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">{service.title}</h3>
                  <p className="text-gray-600 text-center">{service.description}</p>
                </CardContent>
                <CardFooter className="pt-0 pb-6 flex justify-center">
                  <Button variant="ghost" className="text-atoro-teal group-hover:text-atoro-green group-hover:bg-atoro-green/10 transition-colors" asChild>
                    <Link to={service.link} className="flex items-center gap-2">
                      Learn more <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-atoro-green/10 text-atoro-green hover:bg-atoro-green/20">Key Outcomes</Badge>
            <h2 className="mb-4">Security That Drives Business Growth</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Our approach to security creates tangible business value, helping you build trust faster and scale with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Holistic Defense",
                description: "Identify and fix vulnerabilities across your applications, cloud infrastructure, and internal processes before attackers find them.",
                icon: <Shield className="h-6 w-6 text-atoro-green" />
              },
              {
                title: "Compliance-Ready Systems",
                description: "We align your security controls with industry standards (SOC 2, ISO 27001) as we strengthen them, preparing you for audits and due diligence.",
                icon: <FileSearch className="h-6 w-6 text-atoro-green" />
              },
              {
                title: "SaaS-Focused Strategies",
                description: "Security tailored to your tech stack and workflow – ensuring DevSecOps best practices and cloud-native security measures.",
                icon: <Lock className="h-6 w-6 text-atoro-green" />
              },
              {
                title: "Continuous Monitoring",
                description: "Cyber threats constantly evolve; we make sure your defenses do too through ongoing monitoring and periodic security health checks.",
                icon: <Users className="h-6 w-6 text-atoro-green" />
              },
            ].map((benefit, index) => (
              <Card key={index} className="border-0 shadow-none bg-white">
                <CardContent className="p-8 flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-atoro-green/10 rounded-full flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Security Team as a Service */}
      <section className="py-20 bg-gradient-to-br from-atoro-teal to-atoro-dark-teal text-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-white/10 text-white hover:bg-white/20">Featured Service</Badge>
              <h2 className="text-white mb-6">Security Team as a Service</h2>
              <p className="text-lg mb-8 opacity-90">
                Get a dedicated virtual security department without the overhead of building an in-house team. 
                Our experts become an extension of your organization, providing ongoing security oversight and guidance.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "On-demand security expertise",
                  "Continuous threat monitoring",
                  "Regular security assessments",
                  "Incident response support"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-atoro-green flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green" asChild>
                <Link to="/services/security-team-aas">
                  Learn More
                </Link>
              </Button>
            </div>
            
            <div className="bg-white/10 p-8 rounded-lg border border-white/20">
              <h3 className="text-2xl font-semibold mb-6">Common Security Challenges</h3>
              <ul className="space-y-5">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-atoro-blue/10 to-atoro-green/10">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="mb-6">Secure Your Foundation</h2>
            <p className="text-lg text-gray-700 mb-8">
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
    </div>
  );
};

export default CyberSecurity;

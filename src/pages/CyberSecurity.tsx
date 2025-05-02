
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import { Container } from '@/components/ui/Container';
import Newsletter from '@/components/home/Newsletter';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, FileSearch, Lock, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import TrustFactorsGrid from '@/components/shared/TrustFactorsGrid';
import PillarsSection from '@/components/home/PillarsSection';
import ServicesGrid from '@/components/services/ServicesGrid';

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

      {/* Services Grid - replacing the "Why Choose Atoro" section */}
      <ServicesGrid 
        title="Our Cyber Security Services"
        description="Atoro's cyber security services embed protection into your development lifecycle without slowing you down."
      />

      {/* Trust Factors Grid */}
      <TrustFactorsGrid />

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

      {/* Include the PillarsSection here to show all services */}
      <PillarsSection />

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

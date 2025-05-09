
import React from 'react';
import Layout from '@/components/layout/Layout';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceCTA from '@/components/services/ServiceCTA';
import TestimonialSection from '@/components/shared/TestimonialSection';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';
import ISO42001Section from '@/components/ai-governance/ISO42001Section';

const testimonials = [
  {
    quote: "Atoro guided us through the entire ISO 42001 certification process with expertise and efficiency. Their framework approach made implementation straightforward.",
    author: "David Keller",
    title: "Chief AI Officer",
    company: "Neuron Analytics",
    rating: 5
  },
  {
    quote: "The ISO 42001 implementation program provided by Atoro was comprehensive and tailored to our specific needs. They truly understand AI governance.",
    author: "Sarah Johnson",
    title: "Head of Compliance",
    company: "TechForward",
    rating: 4.5
  }
];

const ISO42001 = () => {
  return (
    <Layout>
      <ServiceHero 
        title="ISO 42001 Implementation"
        subtitle="Build trust in your AI systems with the world's first international standard for AI management. Our implementation services guide you through certification."
        primaryButtonText="Get ISO 42001 Ready"
        primaryButtonLink="#contact"
        backgroundColorClass="bg-gradient-to-br from-atoro-teal to-atoro-dark-teal"
      />
      
      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-10">
            <Badge className="mb-2 bg-atoro-teal/10 text-atoro-teal">ISO 42001 Benefits</Badge>
            <h2 className="text-3xl font-bold mb-3">Why Implement ISO 42001?</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              ISO 42001 provides a framework for responsible AI management that builds trust and ensures compliance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Business Benefits</h3>
              <ul className="space-y-3">
                {[
                  "Demonstrate AI trustworthiness to customers and partners",
                  "Align with EU AI Act requirements and global regulations",
                  "Reduce risks associated with AI system failures",
                  "Create competitive differentiation in the market"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-atoro-green flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Technical Benefits</h3>
              <ul className="space-y-3">
                {[
                  "Establish consistent AI development lifecycle processes",
                  "Improve data governance and quality control",
                  "Enhance monitoring of AI system performance",
                  "Incorporate ethical considerations into AI design"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-atoro-blue flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Implementation Process Section */}
      <ISO42001Section />
      
      {/* Testimonials */}
      <TestimonialSection 
        testimonials={testimonials}
        title="ISO 42001 Success Stories"
        description="See how we've helped companies achieve ISO 42001 certification"
        variant="carousel"
        showRatings={true}
        bgColor="bg-gray-50"
      />
      
      {/* CTA Section */}
      <ServiceCTA 
        title="Ready for ISO 42001 Certification?"
        description="Let our experts guide you through the implementation process from gap assessment to certification."
        primaryButtonText="Start ISO 42001 Implementation"
        primaryButtonId="iso42001-implementation-btn"
        secondaryButtonText="Download ISO 42001 Guide"
        secondaryButtonLink="/resources/iso42001-guide"
      />
    </Layout>
  );
};

export default ISO42001;

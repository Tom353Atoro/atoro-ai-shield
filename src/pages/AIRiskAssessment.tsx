
import React from 'react';
import Layout from '@/components/layout/Layout';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceCTA from '@/components/services/ServiceCTA';
import RiskAssessmentSection from '@/components/ai-governance/RiskAssessmentSection';
import TestimonialSection from '@/components/shared/TestimonialSection';
import { Container } from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, ShieldAlert, Lightbulb } from 'lucide-react';
import ServiceCard from '@/components/services/ServiceCard';

const testimonials = [
  {
    quote: "The AI risk assessment identified crucial compliance gaps we would have missed. Atoro's methodical approach saved us from potential regulatory issues.",
    author: "Thomas Grant",
    title: "CIO",
    company: "Algorythm",
    rating: 5
  },
  {
    quote: "Comprehensive yet practical - their assessment translated complex AI risks into clear action items our development team could implement.",
    author: "Leila Martinez",
    title: "VP Engineering",
    company: "DataPoint",
    rating: 4.5
  }
];

const AIRiskAssessment = () => {
  return (
    <Layout>
      <ServiceHero 
        title="AI Risk Assessment"
        subtitle="Comprehensive evaluation of your AI systems for potential ethical, legal, and operational risks with actionable remediation plans."
        primaryButtonText="Schedule Assessment"
        primaryButtonLink="#contact"
        secondaryButtonText="Learn About ISO 42001"
        secondaryButtonLink="/services/ai-governance/iso-42001"
        backgroundColorClass="bg-gradient-to-br from-atoro-blue/90 to-atoro-teal"
      />

      {/* Main Assessment Content */}
      <RiskAssessmentSection />
      
      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Our Assessment Process</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our structured approach ensures we identify and address all potential risks in your AI systems
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  step: 1,
                  title: "Discovery & Analysis",
                  description: "We examine your AI systems, data sources, and decision-making processes to identify key risk areas.",
                  icon: <FileText className="h-6 w-6 text-atoro-blue" />
                },
                {
                  step: 2,
                  title: "Risk Evaluation",
                  description: "We assess identified risks against regulatory requirements and industry best practices.",
                  icon: <ShieldAlert className="h-6 w-6 text-atoro-blue" />
                },
                {
                  step: 3,
                  title: "Recommendations",
                  description: "We deliver practical, prioritized recommendations to mitigate risks and improve AI governance.",
                  icon: <Lightbulb className="h-6 w-6 text-atoro-blue" />
                }
              ].map((step) => (
                <ServiceCard
                  key={step.step}
                  title={`${step.step}. ${step.title}`}
                  description={step.description}
                  icon={step.icon}
                  iconContainerClassName="p-3 bg-atoro-blue/10 rounded-lg"
                />
              ))}
            </div>
          </div>
        </Container>
      </section>
      
      {/* Testimonials Section */}
      <TestimonialSection 
        testimonials={testimonials}
        title="Assessment Outcomes"
        description="Our AI risk assessments deliver tangible results for SaaS companies"
        variant="grid"
        showRatings={true}
        bgColor="bg-white"
      />
      
      {/* CTA Section */}
      <ServiceCTA 
        title="Ready to Assess Your AI Risk?"
        description="Get a complete evaluation of your AI systems and clear recommendations for improvement."
        primaryButtonText="Schedule an Assessment"
        primaryButtonId="ai-risk-assessment-btn"
      />
    </Layout>
  );
};

export default AIRiskAssessment;

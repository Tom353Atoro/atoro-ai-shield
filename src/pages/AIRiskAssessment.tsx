
import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, FileSearch, CheckCircle, ArrowRight, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import TestimonialSection from '@/components/shared/TestimonialSection';

const AIRiskAssessment = () => {
  // AI Risk Assessment specific testimonials
  const riskAssessmentTestimonials = [
    {
      quote: "Atoro's AI risk assessment uncovered potential bias issues in our ML models before deployment. Their remediation guidance helped us avoid regulatory and reputational issues.",
      author: "Sarah Johnson",
      title: "AI Product Manager",
      company: "TechVision",
      rating: 5
    }, {
      quote: "The structured assessment approach helped us understand our AI systems' risks in the context of the EU AI Act. Their expertise in both technology and regulation was invaluable.",
      author: "Michael Zhang",
      title: "Chief Technology Officer",
      company: "DataSphere",
      rating: 4.5
    }, {
      quote: "Atoro provided practical, actionable recommendations that strengthened our AI governance without slowing down our innovation process.",
      author: "Elena Rodriguez",
      title: "Director of Data Science",
      company: "InnovateAI",
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
                <span className="text-atoro-green">AI Risk Assessment</span> & Compliance
              </h1>
              <p className="text-lg mb-6 opacity-90">
                Identify, evaluate, and mitigate risks in your AI systems with our comprehensive assessment services, 
                ensuring compliance with emerging regulations and industry best practices.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green" asChild>
                  <Link to="/contact">Schedule an Assessment</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                alt="AI risk assessment visualization" 
                className="object-cover w-full rounded-lg" 
                src="/lovable-uploads/1b5ef3e0-1624-4c80-b9f0-33d25a819c7b.png" 
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
            <h2 className="mb-3">Comprehensive AI Risk Management</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our structured approach to AI risk assessment helps organizations identify and address potential issues
              before they impact your business or customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[{
              icon: <Brain className="text-atoro-green" />,
              title: "EU AI Act Assessment",
              description: "Evaluate your AI systems against EU AI Act requirements and develop a compliance roadmap."
            }, {
              icon: <FileSearch className="text-atoro-green" />,
              title: "AI System Audit",
              description: "In-depth technical and ethical review of your AI models, data, and documentation."
            }, {
              icon: <Shield className="text-atoro-green" />,
              title: "Risk Mitigation Planning",
              description: "Develop practical strategies to address identified risks while maintaining system performance."
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
            <h2 className="mb-3">AI Risk Assessment Methodology</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our structured approach ensures comprehensive evaluation of AI risks across technical, ethical, and regulatory dimensions.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[{
              number: "01",
              title: "System Inventory",
              description: "Document all AI systems, their purposes, data sources, and potential impact levels."
            }, {
              number: "02",
              title: "Risk Identification",
              description: "Analyze systems for potential ethical, technical, and regulatory risks."
            }, {
              number: "03",
              title: "Impact Assessment",
              description: "Evaluate the potential consequences of identified risks to individuals and organizations."
            }, {
              number: "04",
              title: "Mitigation Planning",
              description: "Develop practical strategies to address and minimize identified risks."
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

      {/* Risk Categories Section */}
      <section className="py-16 bg-gradient-to-br from-atoro-teal to-atoro-dark-teal text-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-4 bg-white/10 text-white hover:bg-white/20">Risk Categories</Badge>
              <h2 className="text-white mb-4">AI Risks We Assess</h2>
              <p className="text-lg mb-6 opacity-90">
                Our comprehensive assessment methodology evaluates AI systems across multiple risk dimensions to ensure responsible deployment.
              </p>
              
              <ul className="space-y-3 mb-6">
                {[
                  "Bias and fairness issues in AI models and training data",
                  "Privacy and data protection concerns",
                  "Transparency and explainability limitations",
                  "Security vulnerabilities and potential adversarial attacks",
                  "Regulatory non-compliance risks",
                  "Ethical implications of AI system decisions"
                ].map((risk, index) => <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-atoro-green flex-shrink-0" />
                    <span>{risk}</span>
                  </li>)}
              </ul>
              
              <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green" asChild>
                <Link to="/contact">
                  Get Started
                </Link>
              </Button>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-semibold mb-5">EU AI Act Risk Categories</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border border-atoro-green flex items-center justify-center flex-shrink-0">
                    <span className="text-atoro-green">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Unacceptable Risk AI</h4>
                    <p className="text-sm opacity-80">Systems posing threats to safety, rights, or democracy</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border border-atoro-green flex items-center justify-center flex-shrink-0">
                    <span className="text-atoro-green">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium">High-Risk AI</h4>
                    <p className="text-sm opacity-80">Systems with significant potential impact on health, safety or rights</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border border-atoro-green flex items-center justify-center flex-shrink-0">
                    <span className="text-atoro-green">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Limited Risk AI</h4>
                    <p className="text-sm opacity-80">Systems requiring specific transparency obligations</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border border-atoro-green flex items-center justify-center flex-shrink-0">
                    <span className="text-atoro-green">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Minimal Risk AI</h4>
                    <p className="text-sm opacity-80">Systems with minimal or no risk to rights or safety</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Customer Testimonials */}
      <TestimonialSection 
        testimonials={riskAssessmentTestimonials} 
        title="What Our Clients Say" 
        description="Read how our AI risk assessments have helped organizations implement responsible AI practices." 
        variant="featured" 
        showRatings={true} 
        bgColor="bg-white" 
      />

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-br from-atoro-blue/10 to-atoro-green/10">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="mb-4">Ready to Assess Your AI Risks?</h2>
            <p className="text-gray-700 mb-6">
              Our expert team can help you identify and address potential risks in your AI systems, ensuring compliance
              with regulations and building trust with your stakeholders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green" asChild>
                <Link to="/contact">Book a Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-atoro-teal text-atoro-teal hover:bg-atoro-teal/5" asChild>
                <Link to="/resources/ai-risk-checklist">Download AI Risk Checklist</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </ServiceLayout>
  );
};

export default AIRiskAssessment;

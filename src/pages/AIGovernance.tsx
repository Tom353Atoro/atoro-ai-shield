import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, FileCode, Settings, BookOpen, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIGovernance = () => {
  return (
    <ServiceLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-atoro-teal to-atoro-dark-teal text-white">
        <Container>
          <div className="max-w-3xl">
            <h1 className="mb-6">Innovate with Confidence</h1>
            <p className="text-xl mb-8 opacity-90">
              ISO 42001 certification support and virtual AI Governance Officer (vAIGO) services that keep your 
              machine-learning features ethical, secure, and compliant.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green">
                AI Risk Assessment
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Explore AI Services
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-atoro-teal/10 text-atoro-teal hover:bg-atoro-teal/20">Why Choose Atoro</Badge>
            <h2 className="mb-4">AI Governance Solutions</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Our AI governance framework ensures your AI systems operate ethically, 
              transparently, and in compliance with emerging regulations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Brain className="text-atoro-green" />,
                title: "AI Risk Assessment",
                description: "Comprehensive evaluation of AI systems for potential risks and biases.",
                link: "/services/ai-governance/risk-assessment"
              },
              {
                icon: <FileCode className="text-atoro-green" />,
                title: "ISO 42001 Support",
                description: "Guidance for implementing the ISO standard for AI management systems.",
                link: "/services/ai-governance/iso-42001"
              },
              {
                icon: <Settings className="text-atoro-green" />,
                title: "vAIGO Services",
                description: "Virtual AI Governance Officer to oversee your AI operations and compliance.",
                link: "/services/ai-governance/vaigo"
              },
              {
                icon: <BookOpen className="text-atoro-green" />,
                title: "AI Ethics Framework",
                description: "Development of customized AI ethics principles and guidelines.",
                link: "/services/ai-governance/ethics-framework"
              }
            ].map((service, index) => (
              <Card key={index} className="border-gray-100 hover:shadow-md transition-shadow group">
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-gradient-to-br from-atoro-green/10 to-atoro-blue/10 rounded-lg">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
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

      {/* Why AI Governance Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-atoro-green/10 text-atoro-green hover:bg-atoro-green/20">Key Outcomes</Badge>
            <h2 className="mb-4">Why AI Governance Matters</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              As AI becomes central to SaaS offerings, proper governance ensures your systems 
              remain transparent, fair, and compliant with rapidly evolving regulations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-8">
                As AI becomes central to SaaS offerings, proper governance ensures your systems 
                remain transparent, fair, and compliant with rapidly evolving regulations.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Regulatory Compliance",
                    description: "Stay ahead of AI regulations like the EU AI Act and similar frameworks."
                  },
                  {
                    title: "Risk Mitigation",
                    description: "Identify and address potential biases and ethical issues in your AI systems."
                  },
                  {
                    title: "Customer Trust",
                    description: "Build confidence in your AI-powered features through transparency."
                  },
                  {
                    title: "Sustainable Innovation",
                    description: "Create a foundation for responsible AI development and deployment."
                  }
                ].map((reason, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-atoro-green to-atoro-blue rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{reason.title}</h3>
                      <p className="text-gray-600">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-atoro-teal/5 to-atoro-blue/5 p-8 rounded-lg border border-atoro-blue/20">
              <h3 className="text-2xl font-semibold mb-6">AI Governance Framework</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">1. Assessment</h4>
                  <p className="text-gray-600">Evaluate AI systems for risks, biases, and compliance gaps</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">2. Policy Development</h4>
                  <p className="text-gray-600">Create tailored AI ethics and governance policies</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">3. Implementation</h4>
                  <p className="text-gray-600">Deploy governance processes and oversight mechanisms</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">4. Monitoring</h4>
                  <p className="text-gray-600">Ongoing assessment and continuous improvement</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">5. Certification</h4>
                  <p className="text-gray-600">Achieve ISO 42001 and other relevant certifications</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Service - vAIGO */}
      <section className="py-20 bg-gradient-to-br from-atoro-teal to-atoro-dark-teal text-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-white/10 text-white hover:bg-white/20">Featured Service</Badge>
              <h2 className="text-white mb-6">Virtual AI Governance Officer</h2>
              <p className="text-lg mb-8 opacity-90">
                Our vAIGO service provides ongoing AI governance expertise without the need for specialized in-house staff. 
                Get a dedicated virtual AI ethics officer to help you navigate the complex world of responsible AI.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Continuous AI risk monitoring",
                  "Regular AI system audits and assessments",
                  "Guidance on AI regulations and compliance",
                  "AI ethics advisory and stakeholder communication"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-atoro-green flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green" asChild>
                <Link to="/services/ai-governance/vaigo">
                  Learn More About vAIGO
                </Link>
              </Button>
            </div>
            
            <div className="bg-white/10 p-8 rounded-lg border border-white/20">
              <h3 className="text-2xl font-semibold mb-6">Common AI Governance Challenges</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border border-atoro-green flex items-center justify-center flex-shrink-0">
                    <span className="text-atoro-green">1</span>
                  </div>
                  <span>Keeping up with evolving AI regulations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border border-atoro-green flex items-center justify-center flex-shrink-0">
                    <span className="text-atoro-green">2</span>
                  </div>
                  <span>Identifying and mitigating AI bias and risks</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border border-atoro-green flex items-center justify-center flex-shrink-0">
                    <span className="text-atoro-green">3</span>
                  </div>
                  <span>Implementing comprehensive AI governance frameworks</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border border-atoro-green flex items-center justify-center flex-shrink-0">
                    <span className="text-atoro-green">4</span>
                  </div>
                  <span>Balancing innovation with compliance requirements</span>
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
            <h2 className="mb-6">Ready for Responsible AI?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Let our AI governance experts help you implement a framework that ensures your AI 
              systems are ethical, transparent, and compliant.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-atoro-green to-atoro-blue text-white hover:opacity-90">
              Schedule AI Governance Consultation
            </Button>
          </div>
        </Container>
      </section>

      <Newsletter />
      <Footer />
    </ServiceLayout>
  );
};

export default AIGovernance;

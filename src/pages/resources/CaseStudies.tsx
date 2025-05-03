
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Container } from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, ArrowRight, Building } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const CaseStudies = () => {
  // Sample case studies data - in a real app, these would come from an API or CMS
  const securityCaseStudies = [
    {
      id: 1,
      title: "How FinTech Startup Achieved SOC 2 in Just 90 Days",
      summary: "Learn how we helped a rapidly growing fintech startup implement the necessary controls and documentation to achieve SOC 2 Type 2 compliance in record time.",
      industry: "FinTech",
      results: [
        "SOC 2 Type 2 compliance achieved in 90 days",
        "Security posture improved by 78%",
        "Successfully closed 3 enterprise deals requiring compliance",
      ],
      image: "/lovable-uploads/62277257-f565-473b-943c-a6746c4c657b.jpg",
      link: "/resources/case-studies/fintech-soc2",
    },
    {
      id: 2,
      title: "Building a Security Program from the Ground Up for B2B SaaS",
      summary: "Case study on how we established a comprehensive security program for a B2B SaaS company, enabling them to meet customer security requirements and accelerate sales.",
      industry: "B2B SaaS",
      results: [
        "Comprehensive security program implemented in 6 months",
        "Sales cycle reduced by 45% by proactively addressing security concerns",
        "Passed 100% of customer security reviews post-implementation",
      ],
      image: "/lovable-uploads/62277257-f565-473b-943c-a6746c4c657b.jpg",
      link: "/resources/case-studies/b2b-security-program",
    },
  ];

  const privacyCaseStudies = [
    {
      id: 3,
      title: "GDPR Remediation for Global SaaS Platform",
      summary: "How we helped a SaaS company with users across 30+ countries achieve GDPR compliance through a structured assessment and remediation program.",
      industry: "Global SaaS",
      results: [
        "Identified and remediated 24 high-risk GDPR compliance gaps",
        "Implemented comprehensive data mapping and retention policies",
        "Established automated DSR handling process, reducing response time by 85%",
      ],
      image: "/lovable-uploads/62277257-f565-473b-943c-a6746c4c657b.jpg",
      link: "/resources/case-studies/global-saas-gdpr",
    },
    {
      id: 4,
      title: "Healthcare App Privacy Framework Implementation",
      summary: "Case study on developing a robust privacy framework for a healthcare application handling sensitive patient data across multiple jurisdictions.",
      industry: "Healthcare Technology",
      results: [
        "Developed compliant privacy framework covering HIPAA, GDPR, and state regulations",
        "Implemented privacy-by-design methodology for product development",
        "Created comprehensive DPIAs and legitimate interest assessments",
      ],
      image: "/lovable-uploads/62277257-f565-473b-943c-a6746c4c657b.jpg",
      link: "/resources/case-studies/healthcare-privacy-framework",
    },
  ];

  const aiCaseStudies = [
    {
      id: 5,
      title: "AI Ethics Framework for EdTech Platform",
      summary: "How we developed and implemented an AI ethics framework for an education technology platform using machine learning to personalize learning experiences.",
      industry: "Education Technology",
      results: [
        "Created comprehensive AI ethics framework aligned with IEEE standards",
        "Implemented transparency measures for algorithm-based decisions",
        "Established ongoing monitoring program for algorithmic bias",
      ],
      image: "/lovable-uploads/62277257-f565-473b-943c-a6746c4c657b.jpg",
      link: "/resources/case-studies/edtech-ai-ethics",
    },
    {
      id: 6,
      title: "EU AI Act Compliance for Enterprise AI Solution",
      summary: "Case study on preparing a high-risk AI system for compliance with the EU AI Act through systematic risk management and documentation.",
      industry: "Enterprise Software",
      results: [
        "Completed full AI Act risk assessment and compliance gap analysis",
        "Implemented required technical documentation and monitoring systems",
        "Developed compliant AI system lifecycle management process",
      ],
      image: "/lovable-uploads/62277257-f565-473b-943c-a6746c4c657b.jpg",
      link: "/resources/case-studies/eu-ai-act-compliance",
    },
  ];

  const CaseStudyCard = ({ caseStudy }: { caseStudy: any }) => (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="h-48 relative overflow-hidden">
        <img 
          src={caseStudy.image} 
          alt={caseStudy.title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 text-sm font-medium">
          <Building className="h-4 w-4 text-atoro-blue" />
          {caseStudy.industry}
        </div>
      </div>
      <CardContent className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3">{caseStudy.title}</h3>
        <p className="text-gray-600 mb-4">{caseStudy.summary}</p>
        
        <div className="mb-6 flex-grow">
          <h4 className="font-semibold text-sm mb-2 text-atoro-teal">Key Results:</h4>
          <ul className="space-y-1">
            {caseStudy.results.map((result: string, index: number) => (
              <li key={index} className="text-sm flex items-start">
                <span className="text-atoro-teal mr-2">•</span>
                {result}
              </li>
            ))}
          </ul>
        </div>
        
        <Button variant="outline" className="w-full mt-auto border-atoro-teal text-atoro-teal hover:bg-atoro-teal/10" asChild>
          <a href={caseStudy.link} className="flex items-center justify-center">
            Read Full Case Study
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-16 pb-12 bg-gradient-to-br from-atoro-blue/10 to-atoro-teal/10">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Client Success Stories
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Real-world examples of how we've helped organizations strengthen their security, privacy, and AI governance.
            </p>
          </div>
        </Container>
      </section>

      {/* Case Studies Tabs */}
      <section className="py-16">
        <Container>
          <Tabs defaultValue="all" className="mb-12">
            <div className="flex justify-center">
              <TabsList className="grid grid-cols-4 w-fit">
                <TabsTrigger value="all">All Case Studies</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="privacy">Privacy</TabsTrigger>
                <TabsTrigger value="ai">AI Governance</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...securityCaseStudies, ...privacyCaseStudies, ...aiCaseStudies]
                  .slice(0, 6)
                  .map((study) => (
                    <CaseStudyCard key={study.id} caseStudy={study} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="security" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {securityCaseStudies.map((study) => (
                  <CaseStudyCard key={study.id} caseStudy={study} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="privacy" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {privacyCaseStudies.map((study) => (
                  <CaseStudyCard key={study.id} caseStudy={study} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ai" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {aiCaseStudies.map((study) => (
                  <CaseStudyCard key={study.id} caseStudy={study} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-atoro-teal to-atoro-blue text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Become Our Next Success Story?
            </h2>
            <p className="mb-8 opacity-90">
              Let our team help you strengthen your security, privacy, or AI governance program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-atoro-teal hover:bg-white/90">
                Schedule a Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View All Case Studies
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default CaseStudies;

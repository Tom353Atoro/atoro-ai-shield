
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Container } from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download } from 'lucide-react';

const Whitepapers = () => {
  // Sample whitepapers - in a real app, these would come from an API or CMS
  const securityWhitepapers = [
    {
      id: 1,
      title: "Securing SaaS Applications: A Comprehensive Guide",
      description: "This whitepaper outlines essential security controls for SaaS products, covering authentication, authorization, data protection, and infrastructure security.",
      pdfLink: "/downloads/securing-saas-applications.pdf",
      coverImage: "/lovable-uploads/62277257-f565-473b-943c-a6746c4c657b.jpg",
      readTime: "15 min read",
      date: "April 2025",
    },
    {
      id: 2,
      title: "Incident Response Playbook for SaaS Companies",
      description: "A detailed guide on establishing an effective incident response program, including detection, analysis, containment, and recovery procedures.",
      pdfLink: "/downloads/incident-response-playbook.pdf",
      coverImage: "/lovable-uploads/62277257-f565-473b-943c-a6746c4c657b.jpg",
      readTime: "20 min read",
      date: "March 2025",
    },
  ];

  const privacyWhitepapers = [
    {
      id: 3,
      title: "GDPR Compliance for SaaS: Implementation Guide",
      description: "Practical steps for implementing GDPR requirements in SaaS products, covering data mapping, policies, procedures, and technical controls.",
      pdfLink: "/downloads/gdpr-implementation-guide.pdf",
      coverImage: "/lovable-uploads/62277257-f565-473b-943c-a6746c4c657b.jpg",
      readTime: "25 min read",
      date: "April 2025",
    },
    {
      id: 4,
      title: "Global Privacy Regulations: A Comparative Analysis",
      description: "An analysis of key privacy regulations worldwide, including GDPR, CCPA, LGPD, and PIPL, highlighting similarities and differences.",
      pdfLink: "/downloads/global-privacy-regulations.pdf",
      coverImage: "/lovable-uploads/62277257-f565-473b-943c-a6746c4c657b.jpg",
      readTime: "30 min read",
      date: "February 2025",
    },
  ];

  const aiWhitepapers = [
    {
      id: 5,
      title: "AI Governance Framework for SaaS Products",
      description: "A framework for implementing responsible AI governance in SaaS products, covering risk assessment, transparency, and accountability.",
      pdfLink: "/downloads/ai-governance-framework.pdf",
      coverImage: "/lovable-uploads/62277257-f565-473b-943c-a6746c4c657b.jpg",
      readTime: "22 min read",
      date: "April 2025",
    },
    {
      id: 6,
      title: "Navigating the EU AI Act: Compliance Guide",
      description: "A comprehensive guide to understanding and implementing the requirements of the EU AI Act for SaaS companies.",
      pdfLink: "/downloads/eu-ai-act-guide.pdf",
      coverImage: "/lovable-uploads/62277257-f565-473b-943c-a6746c4c657b.jpg",
      readTime: "28 min read",
      date: "March 2025",
    },
  ];

  const WhitepaperCategory = ({ title, whitepapers, bgColor }: { title: string; whitepapers: any[]; bgColor: string }) => (
    <section className={`py-16 ${bgColor}`}>
      <Container>
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <FileText className="h-5 w-5 text-atoro-teal" />
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whitepapers.map((paper) => (
            <Card key={paper.id} className="overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-1/3 h-48 md:h-auto relative">
                <img 
                  src={paper.coverImage} 
                  alt={paper.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <CardContent className="p-6 md:w-2/3 flex flex-col">
                <div>
                  <div className="text-sm text-gray-500 mb-2 flex items-center justify-between">
                    <span>{paper.date}</span>
                    <span>{paper.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{paper.title}</h3>
                  <p className="text-gray-600 mb-4">{paper.description}</p>
                </div>
                <div className="mt-auto">
                  <Button className="w-full md:w-auto bg-atoro-teal hover:bg-atoro-teal/90">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-16 pb-12 bg-gradient-to-br from-atoro-blue/10 to-atoro-teal/10">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Security & Privacy Whitepapers
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              In-depth research and guidance on security, privacy, and AI governance for SaaS companies.
            </p>
          </div>
        </Container>
      </section>

      <WhitepaperCategory 
        title="Security Whitepapers" 
        whitepapers={securityWhitepapers} 
        bgColor="bg-white" 
      />
      
      <WhitepaperCategory 
        title="Privacy Whitepapers" 
        whitepapers={privacyWhitepapers} 
        bgColor="bg-gray-50" 
      />
      
      <WhitepaperCategory 
        title="AI Governance Whitepapers" 
        whitepapers={aiWhitepapers} 
        bgColor="bg-white" 
      />

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-atoro-blue to-atoro-teal text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Need Custom Research or Guidance?
            </h2>
            <p className="mb-8 opacity-90">
              Our security and privacy experts can provide personalized guidance for your specific challenges.
            </p>
            <Button size="lg" className="bg-white text-atoro-teal hover:bg-white/90">
              Contact Our Team
            </Button>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default Whitepapers;

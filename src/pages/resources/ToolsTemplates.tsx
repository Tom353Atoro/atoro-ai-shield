
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Container } from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileCheck, FileText } from 'lucide-react';

const ToolsTemplates = () => {
  // Sample resources data - in a real app, these would come from an API or CMS
  const securityTools = [
    {
      id: 1,
      title: "Security Controls Matrix",
      description: "A comprehensive spreadsheet of security controls mapped to common frameworks like SOC 2, ISO 27001, and NIST CSF.",
      fileType: "Excel",
      fileSize: "125 KB",
      downloadLink: "/downloads/security-controls-matrix.xlsx",
      icon: FileCheck,
      category: "Template",
    },
    {
      id: 2,
      title: "Incident Response Plan Template",
      description: "A customizable template for creating an effective security incident response plan.",
      fileType: "Word",
      fileSize: "45 KB",
      downloadLink: "/downloads/incident-response-template.docx",
      icon: FileText,
      category: "Template",
    },
    {
      id: 3,
      title: "Vendor Security Assessment Questionnaire",
      description: "A detailed questionnaire for evaluating the security posture of your vendors and service providers.",
      fileType: "Excel",
      fileSize: "78 KB",
      downloadLink: "/downloads/vendor-security-questionnaire.xlsx",
      icon: FileCheck,
      category: "Tool",
    },
  ];

  const privacyTools = [
    {
      id: 4,
      title: "Data Processing Agreement (DPA) Template",
      description: "GDPR-compliant DPA template for processing customer data, ready to be customized for your organization.",
      fileType: "Word",
      fileSize: "68 KB",
      downloadLink: "/downloads/dpa-template.docx",
      icon: FileText,
      category: "Template",
    },
    {
      id: 5,
      title: "Data Protection Impact Assessment (DPIA) Template",
      description: "A structured template for conducting DPIAs as required under GDPR and other privacy regulations.",
      fileType: "Word",
      fileSize: "52 KB",
      downloadLink: "/downloads/dpia-template.docx",
      icon: FileText,
      category: "Template",
    },
    {
      id: 6,
      title: "Privacy Policy Generator",
      description: "An interactive tool to create a customized privacy policy for your website or application.",
      fileType: "Web Tool",
      fileSize: "Online",
      downloadLink: "/tools/privacy-policy-generator",
      icon: FileCheck,
      category: "Tool",
    },
  ];

  const aiTools = [
    {
      id: 7,
      title: "AI Risk Assessment Framework",
      description: "A structured framework for identifying and mitigating risks in AI systems across various dimensions.",
      fileType: "PDF",
      fileSize: "420 KB",
      downloadLink: "/downloads/ai-risk-framework.pdf",
      icon: FileCheck,
      category: "Framework",
    },
    {
      id: 8,
      title: "Model Documentation Template",
      description: "A template for documenting AI models, including purpose, training data, performance metrics, and limitations.",
      fileType: "Word",
      fileSize: "38 KB",
      downloadLink: "/downloads/model-documentation-template.docx",
      icon: FileText,
      category: "Template",
    },
    {
      id: 9,
      title: "AI Governance Policy Template",
      description: "A customizable template for creating an internal AI governance policy for your organization.",
      fileType: "Word",
      fileSize: "56 KB",
      downloadLink: "/downloads/ai-governance-policy.docx",
      icon: FileText,
      category: "Template",
    },
  ];

  const ToolCategory = ({ title, tools, bgColor }: { title: string; tools: any[]; bgColor: string }) => (
    <section className={`py-16 ${bgColor}`}>
      <Container>
        <h2 className="text-2xl font-bold mb-8">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <Card key={tool.id} className="h-full flex flex-col">
              <CardContent className="p-6 flex-grow flex flex-col">
                <div className="mb-4 p-2 rounded-lg bg-atoro-teal/10 w-10 h-10 flex items-center justify-center">
                  <tool.icon className="h-5 w-5 text-atoro-teal" />
                </div>
                <div className="text-sm font-medium text-atoro-blue mb-2">{tool.category}</div>
                <h3 className="text-xl font-bold mb-2">{tool.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{tool.description}</p>
                <div className="mt-auto">
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <span>{tool.fileType}</span>
                    <span>{tool.fileSize}</span>
                  </div>
                  <Button className="w-full bg-atoro-teal hover:bg-atoro-teal/90">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resource
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
      <section className="pt-16 pb-12 bg-gradient-to-br from-atoro-green/10 to-atoro-teal/10">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Tools & Templates
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Free downloadable resources to help you implement robust security, privacy, and AI governance programs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-atoro-teal hover:bg-atoro-teal/90" asChild>
                <a href="#security">Security Tools</a>
              </Button>
              <Button size="lg" className="bg-atoro-blue hover:bg-atoro-blue/90" asChild>
                <a href="#privacy">Privacy Tools</a>
              </Button>
              <Button size="lg" className="bg-atoro-green hover:bg-atoro-green/90" asChild>
                <a href="#ai">AI Governance Tools</a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <div id="security">
        <ToolCategory 
          title="Security Tools & Templates" 
          tools={securityTools} 
          bgColor="bg-white" 
        />
      </div>

      <div id="privacy">
        <ToolCategory 
          title="Privacy Tools & Templates" 
          tools={privacyTools} 
          bgColor="bg-gray-50" 
        />
      </div>

      <div id="ai">
        <ToolCategory 
          title="AI Governance Tools & Templates" 
          tools={aiTools} 
          bgColor="bg-white" 
        />
      </div>

      {/* Request Custom Tools Section */}
      <section className="py-16 bg-gradient-to-r from-atoro-teal to-atoro-blue text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Need a Custom Tool or Template?
            </h2>
            <p className="mb-8 opacity-90">
              Our team can develop customized tools and templates tailored to your organization's specific needs.
            </p>
            <Button size="lg" className="bg-white text-atoro-teal hover:bg-white/90">
              Request Custom Resource
            </Button>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default ToolsTemplates;

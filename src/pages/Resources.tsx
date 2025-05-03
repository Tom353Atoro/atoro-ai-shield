
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Container } from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShieldCheck, LockKeyhole, Brain, FileText, FileCheck, Download, BookOpen } from 'lucide-react';

const Resources = () => {
  // Sample resources - in a real app, these would come from a CMS or API
  const securityResources = [
    {
      id: 1,
      title: 'SOC 2 Readiness Assessment',
      type: 'Checklist',
      description: 'A comprehensive checklist to evaluate your readiness for SOC 2 certification.',
      icon: FileCheck,
      color: 'bg-blue-50 text-blue-600',
      link: '/resources/security/soc2-readiness-checklist',
    },
    {
      id: 2,
      title: 'Incident Response Plan Template',
      type: 'Template',
      description: 'A customizable template for creating an effective security incident response plan.',
      icon: FileText,
      color: 'bg-blue-50 text-blue-600',
      link: '/resources/security/incident-response-template',
    },
    {
      id: 3,
      title: 'Security Controls Guide for SaaS Startups',
      type: 'Guide',
      description: 'Essential security controls every SaaS startup should implement from day one.',
      icon: BookOpen,
      color: 'bg-blue-50 text-blue-600',
      link: '/resources/security/saas-security-controls-guide',
    },
  ];

  const privacyResources = [
    {
      id: 4,
      title: 'Data Processing Agreement Template',
      type: 'Template',
      description: 'GDPR-compliant DPA template for processing customer data.',
      icon: FileText, 
      color: 'bg-green-50 text-green-600',
      link: '/resources/privacy/dpa-template',
    },
    {
      id: 5,
      title: 'GDPR Readiness Assessment',
      type: 'Assessment',
      description: 'Evaluate your organization\'s compliance with GDPR requirements.',
      icon: FileCheck,
      color: 'bg-green-50 text-green-600',
      link: '/resources/privacy/gdpr-assessment',
    },
    {
      id: 6,
      title: 'Privacy Policy Generator',
      type: 'Tool',
      description: 'Create a customized privacy policy for your website or application.',
      icon: Download,
      color: 'bg-green-50 text-green-600',
      link: '/resources/privacy/policy-generator',
    },
  ];

  const aiResources = [
    {
      id: 7,
      title: 'AI Risk Assessment Framework',
      type: 'Framework',
      description: 'A structured approach to identify and mitigate risks in AI systems.',
      icon: FileCheck,
      color: 'bg-teal-50 text-teal-600',
      link: '/resources/ai-governance/risk-assessment-framework',
    },
    {
      id: 8,
      title: 'AI Ethics Guidelines',
      type: 'Guidelines',
      description: 'Ethical considerations and best practices for AI development.',
      icon: BookOpen,
      color: 'bg-teal-50 text-teal-600',
      link: '/resources/ai-governance/ethics-guidelines',
    },
    {
      id: 9,
      title: 'ISO 42001 Implementation Guide',
      type: 'Guide',
      description: 'Step-by-step guide to implementing ISO 42001 AI management system.',
      icon: FileText,
      color: 'bg-teal-50 text-teal-600',
      link: '/resources/ai-governance/iso-42001-guide',
    },
  ];

  const ResourceSection = ({ title, icon, resources, bgColor }: { 
    title: string; 
    icon: React.ReactNode; 
    resources: any[];
    bgColor: string;
  }) => (
    <section className={`py-16 ${bgColor}`}>
      <Container>
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-white rounded-lg shadow-sm">
            {icon}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <Link to={resource.link} key={resource.id} className="group">
              <Card className="h-full transition-all duration-300 group-hover:shadow-md overflow-hidden">
                <div className="h-1 w-full bg-gradient-to-r from-atoro-blue to-atoro-green"></div>
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg ${resource.color} flex items-center justify-center mb-4`}>
                    <resource.icon className="w-6 h-6" />
                  </div>
                  <div className="text-sm font-medium text-atoro-blue mb-2">{resource.type}</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-atoro-teal transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {resource.description}
                  </p>
                  <div className="text-atoro-teal font-medium">
                    Access resource →
                  </div>
                </CardContent>
              </Card>
            </Link>
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
              Security & Privacy Resources
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Free tools, templates, checklists, and guides to strengthen your security, privacy, and AI governance programs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-atoro-teal hover:bg-atoro-teal/90" asChild>
                <a href="#security">Security Resources</a>
              </Button>
              <Button size="lg" className="bg-atoro-green hover:bg-atoro-green/90 text-atoro-teal" asChild>
                <a href="#privacy">Privacy Resources</a>
              </Button>
              <Button size="lg" variant="outline" className="border-atoro-teal text-atoro-teal hover:bg-atoro-teal/10" asChild>
                <a href="#ai">AI Governance Resources</a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Security Resources Section */}
      <div id="security">
        <ResourceSection 
          title="Security Resources" 
          icon={<ShieldCheck className="w-6 h-6 text-atoro-blue" />} 
          resources={securityResources} 
          bgColor="bg-white"
        />
      </div>

      {/* Privacy Resources Section */}
      <div id="privacy">
        <ResourceSection 
          title="Privacy Resources" 
          icon={<LockKeyhole className="w-6 h-6 text-atoro-green" />} 
          resources={privacyResources} 
          bgColor="bg-gray-50"
        />
      </div>

      {/* AI Governance Resources Section */}
      <div id="ai">
        <ResourceSection 
          title="AI Governance Resources" 
          icon={<Brain className="w-6 h-6 text-atoro-teal" />} 
          resources={aiResources} 
          bgColor="bg-white"
        />
      </div>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-br from-atoro-teal to-atoro-blue text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Get Access to Premium Resources
            </h2>
            <p className="mb-8 opacity-90">
              Subscribe to our newsletter to receive exclusive resources, templates, and guides directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-atoro-teal hover:bg-white/90">
                Join Our Newsletter
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default Resources;

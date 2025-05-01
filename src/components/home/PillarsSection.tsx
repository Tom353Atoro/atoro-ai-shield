
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const PillarsSection = () => {
  const pillars = [
    {
      title: 'Cyber Security',
      description: 'Proactive penetration testing, ISO 27001 implementation, SOC 2 readiness, and continuous vCISO oversight that harden your cloud stack without slowing deployment.',
      link: '/services/cyber-security',
      color: 'from-atoro-blue/10 to-atoro-blue/5',
      borderColor: 'border-atoro-blue/20',
    },
    {
      title: 'Data Privacy',
      description: 'GDPR programs, DPO-as-a-Service, and automated privacy ops that turn regulatory complexity into a competitive edge.',
      link: '/services/data-privacy',
      color: 'from-atoro-green/10 to-atoro-green/5',
      borderColor: 'border-atoro-green/20',
    },
    {
      title: 'AI Governance',
      description: 'ISO 42001 certification support and virtual AI Governance Officer (vAIGO) services that keep your machine-learning features ethical, secure, and compliant.',
      link: '/services/ai-governance',
      color: 'from-atoro-teal/10 to-atoro-blue/5',
      borderColor: 'border-atoro-teal/20',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Our Three Integrated Pillars</h2>
          <p className="text-lg text-gray-700">
            We protect and empower SaaS businesses through three tightly integrated service pillars, designed to work together seamlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={pillar.title}
              className={cn(
                "relative rounded-2xl border p-6 shadow-sm transition-all duration-300",
                "hover:shadow-md hover:translate-y-[-4px]",
                "bg-gradient-to-br",
                pillar.color,
                pillar.borderColor
              )}
            >
              <div className="mb-4 text-xl font-bold">{pillar.title}</div>
              <p className="text-gray-700 mb-6">{pillar.description}</p>
              
              <Link 
                to={pillar.link}
                className="inline-flex items-center text-atoro-teal hover:text-atoro-blue transition-colors group"
              >
                Learn more
                <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PillarsSection;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { ArrowRight, Network, Link as LinkIcon, Share } from 'lucide-react';
import { cn } from '@/lib/utils';

const PillarsSection = () => {
  const [hoveredPillar, setHoveredPillar] = useState<string | null>(null);

  const pillars = [
    {
      id: 'cyber',
      title: 'Cyber Security',
      description: 'Proactive penetration testing, ISO 27001 implementation, SOC 2 readiness, and continuous vCISO oversight that harden your cloud stack without slowing deployment.',
      link: '/services/cyber-security',
      color: 'from-atoro-blue/20 to-atoro-blue/10',
      borderColor: 'border-atoro-blue/30',
      position: 'left',
    },
    {
      id: 'privacy',
      title: 'Data Privacy',
      description: 'GDPR programs, DPO-as-a-Service, and automated privacy ops that turn regulatory complexity into a competitive edge.',
      link: '/services/data-privacy',
      color: 'from-atoro-green/20 to-atoro-green/10',
      borderColor: 'border-atoro-green/30',
      position: 'top',
    },
    {
      id: 'ai',
      title: 'AI Governance',
      description: 'ISO 42001 certification support and virtual AI Governance Officer (vAIGO) services that keep your machine-learning features ethical, secure, and compliant.',
      link: '/services/ai-governance',
      color: 'from-atoro-teal/20 to-atoro-blue/10',
      borderColor: 'border-atoro-teal/30',
      position: 'right',
    },
  ];

  const getConnectionClassName = (pillarId: string) => {
    if (hoveredPillar === null) return 'connection opacity-70';
    if (hoveredPillar === pillarId) return 'connection opacity-100 pulse';
    return 'connection opacity-30';
  };

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Our Three Integrated Pillars</h2>
          <p className="text-lg text-gray-700">
            We protect and empower SaaS businesses through three tightly integrated service pillars, designed to work together seamlessly.
          </p>
        </div>

        <div className="relative honeycomb-container mx-auto max-w-5xl">
          {/* Connection lines with icons */}
          <div className={getConnectionClassName('cyber-privacy')}>
            <div className="connection-line left-to-top">
              <div className="icon-container">
                <Network size={20} className="text-atoro-blue" />
              </div>
            </div>
          </div>
          
          <div className={getConnectionClassName('privacy-ai')}>
            <div className="connection-line top-to-right">
              <div className="icon-container">
                <LinkIcon size={20} className="text-atoro-green" />
              </div>
            </div>
          </div>
          
          <div className={getConnectionClassName('cyber-ai')}>
            <div className="connection-line left-to-right">
              <div className="icon-container">
                <Share size={20} className="text-atoro-teal" />
              </div>
            </div>
          </div>

          {/* Hexagonal cards */}
          <div className="honeycomb">
            {pillars.map((pillar) => (
              <div 
                key={pillar.id}
                className={cn(
                  "hexagon",
                  `hexagon-${pillar.position}`,
                  "bg-gradient-to-br",
                  pillar.color,
                  pillar.borderColor,
                  hoveredPillar === pillar.id ? 'scale-105 z-10' : '',
                  hoveredPillar !== null && hoveredPillar !== pillar.id ? 'opacity-80' : ''
                )}
                onMouseEnter={() => setHoveredPillar(pillar.id)}
                onMouseLeave={() => setHoveredPillar(null)}
              >
                <div className="hexagon-content">
                  <div className="mb-3 text-xl font-bold">{pillar.title}</div>
                  <p className="text-gray-700 mb-4 text-sm">{pillar.description}</p>
                  
                  <Link 
                    to={pillar.link}
                    className="inline-flex items-center text-atoro-teal hover:text-atoro-blue transition-colors group"
                  >
                    Learn more
                    <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PillarsSection;

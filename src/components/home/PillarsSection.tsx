
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
      icon: Network,
      position: 'bottom-left',
    },
    {
      id: 'privacy',
      title: 'Data Privacy',
      description: 'GDPR programs, DPO-as-a-Service, and automated privacy ops that turn regulatory complexity into a competitive edge.',
      link: '/services/data-privacy',
      color: 'from-atoro-green/20 to-atoro-green/10',
      borderColor: 'border-atoro-green/30',
      icon: LinkIcon,
      position: 'top',
    },
    {
      id: 'ai',
      title: 'AI Governance',
      description: 'ISO 42001 certification support and virtual AI Governance Officer (vAIGO) services that keep your machine-learning features ethical, secure, and compliant.',
      link: '/services/ai-governance',
      color: 'from-atoro-teal/20 to-atoro-teal/10',
      borderColor: 'border-atoro-teal/30',
      icon: Share,
      position: 'bottom-right',
    },
  ];

  const getConnectionClasses = (fromId: string, toId: string) => {
    const isActive = hoveredPillar === fromId || hoveredPillar === toId || hoveredPillar === null;
    return cn(
      "connection-line absolute",
      isActive ? "opacity-100" : "opacity-30",
      hoveredPillar === fromId || hoveredPillar === toId ? "active pulse" : "",
      `${fromId}-${toId}`,
    );
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Our Three Integrated Pillars</h2>
          <p className="text-lg text-gray-700">
            We protect and empower SaaS businesses through three tightly integrated service pillars, designed to work together seamlessly.
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="honeycomb-container">
            {/* Connection lines */}
            <div className={getConnectionClasses('cyber', 'privacy')}>
              <Network className="connection-icon cyber-privacy-icon" size={20} />
            </div>
            <div className={getConnectionClasses('privacy', 'ai')}>
              <LinkIcon className="connection-icon privacy-ai-icon" size={20} />
            </div>
            <div className={getConnectionClasses('cyber', 'ai')}>
              <Share className="connection-icon cyber-ai-icon" size={20} />
            </div>

            {/* Hexagon cards */}
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
                    hoveredPillar === pillar.id ? "active z-10" : "",
                    hoveredPillar !== null && hoveredPillar !== pillar.id ? "opacity-80" : "",
                  )}
                  onMouseEnter={() => setHoveredPillar(pillar.id)}
                  onMouseLeave={() => setHoveredPillar(null)}
                >
                  <div className="hexagon-content">
                    <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                    <p className="text-gray-700 mb-4 text-sm">{pillar.description}</p>
                    <Link
                      to={pillar.link}
                      className="inline-flex items-center text-atoro-teal hover:text-atoro-blue transition-colors group"
                    >
                      Learn more
                      <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  <div className="hexagon-icon">
                    <pillar.icon size={30} className="text-white/30" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PillarsSection;

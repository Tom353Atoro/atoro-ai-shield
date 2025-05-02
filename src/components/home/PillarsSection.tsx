import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { ArrowRight, Network, Link as LinkIcon, Share } from 'lucide-react';
import { cn } from '@/lib/utils';
const PillarsSection = () => {
  const [hoveredPillar, setHoveredPillar] = useState<string | null>(null);
  const pillars = [{
    id: 'cyber',
    title: 'Cyber Security',
    description: 'Proactive penetration testing, ISO 27001 implementation, SOC 2 readiness, and continuous vCISO oversight that harden your cloud stack without slowing deployment.',
    link: '/services/cyber-security',
    color: 'from-atoro-blue/20 to-atoro-blue/10',
    borderColor: 'border-atoro-blue/30',
    icon: Network,
    position: 'bottom-left'
  }, {
    id: 'privacy',
    title: 'Data Privacy',
    description: 'GDPR programs, DPO-as-a-Service, and automated privacy ops that turn regulatory complexity into a competitive edge.',
    link: '/services/data-privacy',
    color: 'from-atoro-green/20 to-atoro-green/10',
    borderColor: 'border-atoro-green/30',
    icon: LinkIcon,
    position: 'top'
  }, {
    id: 'ai',
    title: 'AI Governance',
    description: 'ISO 42001 certification support and virtual AI Governance Officer (vAIGO) services that keep your machine-learning features ethical, secure, and compliant.',
    link: '/services/ai-governance',
    color: 'from-atoro-teal/20 to-atoro-teal/10',
    borderColor: 'border-atoro-teal/30',
    icon: Share,
    position: 'bottom-right'
  }];
  const getConnectionClasses = (fromId: string, toId: string) => {
    const isActive = hoveredPillar === fromId || hoveredPillar === toId || hoveredPillar === null;
    return cn("connection-line absolute", isActive ? "opacity-100" : "opacity-30", hoveredPillar === fromId || hoveredPillar === toId ? "active pulse" : "", `${fromId}-${toId}`);
  };
  return;
};
export default PillarsSection;
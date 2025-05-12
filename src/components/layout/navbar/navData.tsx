import React from 'react';
import { Shield, FileKey, Brain, Users } from 'lucide-react';
import { NavLink } from './types';

export const navLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  {
    name: 'Services',
    href: '/services',
    dropdown: true,
    items: [
      { 
        name: 'Cyber Security', 
        href: '/services/cyber-security',
        description: 'Proactive security for your SaaS business.',
        icon: <Shield className="h-5 w-5 text-atoro-green" />
      },
      { 
        name: 'Data Privacy', 
        href: '/services/data-privacy',
        description: 'Navigate GDPR with confidence and ease.',
        icon: <FileKey className="h-5 w-5 text-atoro-blue" />
      },
      { 
        name: 'AI Governance', 
        href: '/services/ai-governance',
        description: 'Ensure ethical AI practices and compliance.',
        icon: <Brain className="h-5 w-5 text-atoro-teal" />
      },
      { 
        name: 'Security Team as a Service', 
        href: '/services/cyber-security/security-team-aas', 
        featured: true,
        description: 'Your dedicated virtual security department.',
        icon: <Users className="h-5 w-5 text-atoro-green" />
      },
    ],
  },
  {
    name: 'Resources',
    href: '/resources',
    dropdown: true,
    items: [
      { name: 'Whitepapers', href: '/resources/whitepapers' },
      { name: 'Webinars', href: '/resources/webinars' },
      { name: 'Case Studies', href: '/resources/case-studies' },
      { name: 'Tools & Templates', href: '/resources/tools-templates' },
    ],
  },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

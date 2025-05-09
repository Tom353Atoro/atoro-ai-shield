
import React from 'react';
import { Container } from '@/components/ui/Container';
import { Shield, Clock, Users, BadgeCheck, FileCheck, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BenefitCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description, icon, className }) => {
  return (
    <div className={cn("bg-white p-6 rounded-xl shadow-sm border border-gray-100", className)}>
      <div className="bg-atoro-blue/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Enhanced Security Posture",
      description: "Implement robust controls that protect your data and systems from evolving threats.",
      icon: <Shield className="h-6 w-6 text-atoro-blue" />
    },
    {
      title: "Accelerated Certification",
      description: "Cut certification time by 50% with our streamlined approach and expert guidance.",
      icon: <Clock className="h-6 w-6 text-atoro-green" />
    },
    {
      title: "Competitive Advantage",
      description: "Stand out to enterprise clients by demonstrating your commitment to security.",
      icon: <Globe className="h-6 w-6 text-atoro-teal" />
    },
    {
      title: "Increased Customer Trust",
      description: "Build stronger relationships with customers through proven security practices.",
      icon: <Users className="h-6 w-6 text-atoro-blue" />
    },
    {
      title: "Simplified Compliance",
      description: "Meet multiple regulatory requirements with a single comprehensive framework.",
      icon: <FileCheck className="h-6 w-6 text-atoro-green" />
    },
    {
      title: "Risk Reduction",
      description: "Identify and mitigate security risks before they impact your business.",
      icon: <BadgeCheck className="h-6 w-6 text-atoro-teal" />
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Benefits of ISO 27001 Certification</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ISO 27001 certification offers multiple benefits for your SaaS business, from enhanced security to increased customer trust.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BenefitsSection;

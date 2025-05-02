
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { Shield, FileText, Lock, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ServiceItem {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  link: string;
}

interface ServicesGridProps {
  title?: string;
  description?: string;
  services?: ServiceItem[];
  className?: string;
  titleClassName?: string;
}

const defaultServices: ServiceItem[] = [
  {
    id: 'penetration-testing',
    icon: Shield,
    title: 'Penetration Testing',
    description: 'Identify vulnerabilities in your application with thorough security testing by our experts.',
    link: '/services/cyber-security/penetration-testing'
  },
  {
    id: 'iso-27001',
    icon: FileText,
    title: 'ISO 27001 Implementation',
    description: 'Structured approach to implementing the ISO 27001 framework for information security.',
    link: '/services/cyber-security/iso-27001'
  },
  {
    id: 'soc2',
    icon: Lock,
    title: 'SOC 2 Readiness',
    description: 'Prepare your organization for SOC 2 certification with our comprehensive audit readiness program.',
    link: '/services/cyber-security/soc2'
  }
];

const ServicesGrid: React.FC<ServicesGridProps> = ({
  title = "SaaS Security Without Compromise",
  description = "Atoro's cyber security services embed protection into your development lifecycle without slowing you down.",
  services = defaultServices,
  className,
  titleClassName
}) => {
  return (
    <section className={cn("py-16 bg-white", className)}>
      <Container>
        {(title || description) && (
          <div className="text-center mb-16">
            {title && <h2 className={cn("mb-4", titleClassName)}>{title}</h2>}
            {description && (
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id} 
                className="border border-gray-100 rounded-lg p-8 flex flex-col items-center text-center hover:shadow-md transition-all"
              >
                <div className="mb-5 bg-gray-50 p-4 rounded-lg">
                  <Icon className="h-8 w-8 text-atoro-green" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="mt-auto">
                  <Link 
                    to={service.link}
                    className="inline-flex items-center text-atoro-teal hover:text-atoro-blue transition-colors group"
                  >
                    Learn more
                    <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ServicesGrid;

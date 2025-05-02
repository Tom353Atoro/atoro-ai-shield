
import React from 'react';
import { Check, Clock, FileText, CreditCard } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export interface TrustFactor {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  iconColor?: string;
}

interface TrustFactorsGridProps {
  title?: string;
  factors?: TrustFactor[];
  className?: string;
}

const defaultFactors: TrustFactor[] = [
  {
    id: 'compliance',
    title: 'Done-for-You Compliance',
    description: 'We write your policies, run your internal audit, and lead the certification process—end-to-end.',
    icon: Check,
    iconColor: 'text-atoro-green'
  },
  {
    id: 'automation',
    title: 'Human-Led Automation',
    description: 'We set up Drata and other tools, then guide the process with consultants, not just software.',
    icon: FileText,
    iconColor: 'text-atoro-teal'
  },
  {
    id: 'disruption',
    title: 'Minimal Disruption',
    description: 'Your team keeps shipping. We handle external audits, evidence reviews, and timelines.',
    icon: Clock,
    iconColor: 'text-atoro-green'
  },
  {
    id: 'pricing',
    title: 'Flat Monthly Pricing',
    description: 'One clear fee. No billing surprises, ever.',
    icon: CreditCard,
    iconColor: 'text-atoro-teal'
  }
];

const TrustFactorsGrid: React.FC<TrustFactorsGridProps> = ({
  title = "Why Scaling SaaS Teams Trust Atoro",
  factors = defaultFactors,
  className
}) => {
  return (
    <section className={cn("py-20 bg-gray-50", className)}>
      <Container>
        <div className="text-center mb-16">
          <h2 className="mb-6">{title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {factors.map((factor) => {
            const Icon = factor.icon;
            return (
              <Card key={factor.id} className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="p-8">
                  <div className="mb-5">
                    <div className="p-2 bg-gray-50 inline-block rounded-full">
                      <Icon className={cn("h-6 w-6", factor.iconColor || "text-atoro-teal")} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{factor.title}</h3>
                  <p className="text-gray-600">{factor.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default TrustFactorsGrid;


import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { tokens } from '@/lib/designTokens';

export interface Challenge {
  number: string;
  text: string;
}

export interface ServiceFeaturedProps {
  badgeText?: string;
  title: string;
  description: string;
  features: string[];
  challenges: Challenge[];
  ctaText: string;
  ctaLink: string;
  className?: string;
  backgroundClass?: string;
  challengesSectionTitle?: string;
}

const ServiceFeaturedSection: React.FC<ServiceFeaturedProps> = ({
  badgeText = "Featured Service",
  title,
  description,
  features,
  challenges,
  ctaText,
  ctaLink,
  className,
  backgroundClass = tokens.gradients.sectionTeal,
  challengesSectionTitle = "Common Challenges"
}) => {
  return (
    <section className={cn("py-16 text-white", backgroundClass, className)}>
      <Container>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Badge className="mb-4 bg-white/10 text-white hover:bg-white/20">{badgeText}</Badge>
            <h2 className="text-white mb-4">{title}</h2>
            <p className="text-lg mb-6 opacity-90">
              {description}
            </p>
            
            <ul className="space-y-3 mb-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-atoro-green flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green" asChild>
              <Link to={ctaLink}>
                {ctaText}
              </Link>
            </Button>
          </div>
          
          <div className="bg-white/10 p-6 rounded-lg border border-white/20">
            <h3 className="text-xl font-semibold mb-5">{challengesSectionTitle}</h3>
            <ul className="space-y-4">
              {challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border border-atoro-green flex items-center justify-center flex-shrink-0">
                    <span className="text-atoro-green">{challenge.number}</span>
                  </div>
                  <span>{challenge.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServiceFeaturedSection;

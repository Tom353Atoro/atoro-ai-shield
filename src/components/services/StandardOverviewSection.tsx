import React from 'react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ServiceSection } from './StandardServicePage';
import { OverviewFeature, OverviewSectionProps } from '@/types';

/**
 * StandardOverviewSection - A standardized component for service overview sections
 * 
 * This component provides a consistent layout for describing a service
 * with a title, description, and key features.
 */
const StandardOverviewSection: React.FC<OverviewSectionProps> = ({
  badgeText,
  title,
  description,
  features,
  className = "bg-white",
  id = "overview"
}) => {
  return (
    <ServiceSection id={id} className={`py-12 ${className}`}>
      <div className="text-center mb-10">
        {badgeText && (
          <Badge className="mb-3 bg-atoro-teal/10 text-atoro-teal hover:bg-atoro-teal/20">
            {badgeText}
          </Badge>
        )}
        <h2 className="mb-3">{title}</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          const iconColor = feature.iconColor || "text-atoro-teal";
          const iconBgColor = feature.iconBgColor || "bg-atoro-teal/5";
          
          return (
            <Card 
              key={`feature-${index}`}
              className="border border-gray-100 hover:border-atoro-green/30 hover:shadow-md transition-all overflow-hidden group h-full"
            >
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className={`p-3 rounded-lg ${iconBgColor}`}>
                    <Icon className={iconColor} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </ServiceSection>
  );
};

export default StandardOverviewSection; 
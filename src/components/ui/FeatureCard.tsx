import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

/**
 * Props for the FeatureCard component
 * @property {LucideIcon} icon - Lucide icon component to display
 * @property {string} title - Feature title
 * @property {string} description - Feature description
 * @property {string} iconColor - CSS class for icon color (e.g., "text-atoro-green")
 * @property {string} iconBgColor - CSS class for icon background color (default: "bg-atoro-teal/5")
 * @property {string} className - Optional additional CSS classes
 */
export interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor: string;
  iconBgColor?: string;
  className?: string;
}

/**
 * FeatureCard Component
 * 
 * A card component for displaying features with an icon, title, and description.
 * Used extensively in service overview sections.
 * 
 * @example
 * ```tsx
 * <FeatureCard
 *   icon={Shield}
 *   title="Data Protection"
 *   description="Secure your sensitive data with our advanced encryption."
 *   iconColor="text-atoro-green"
 * />
 * ```
 */
const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  iconColor,
  iconBgColor = 'bg-atoro-teal/5',
  className = '',
}) => {
  return (
    <Card className={`border border-gray-100 hover:border-atoro-green/30 hover:shadow-md transition-all overflow-hidden group h-full ${className}`}>
      <CardContent className="pt-6">
        <div className="mb-4 flex justify-center">
          <div className={`p-3 ${iconBgColor} rounded-lg`}>
            <Icon className={iconColor} />
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
        <p className="text-gray-600 text-center text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard; 
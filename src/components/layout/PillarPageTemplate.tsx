
// Add the missing clientSection property to the PillarPageTemplateProps interface
// This will fix the TypeScript errors in AIGovernance.tsx and DataPrivacy.tsx
interface PillarPageTemplateProps {
  heroProps: {
    title: React.ReactNode;
    description: string;
    primaryButtonText: string;
    primaryButtonLink: string;
    badgeText?: string;
    backgroundClass?: string;
    imageUrl?: string; // Making imageUrl optional
  };
  testimonials: TestimonialItem[];
  featuredServiceSection: React.ReactNode;
  servicesSection: React.ReactNode;
  approachSection: React.ReactNode;
  ctaSection: React.ReactNode;
  clientSection?: React.ReactNode; // Add the missing property
}

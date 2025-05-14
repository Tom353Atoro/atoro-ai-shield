
import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

// These are the missing interfaces that will be re-exported in index.ts
export interface OverviewFeature {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor?: string;
  iconBgColor?: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  icon?: ReactNode;
  highlightColor?: string;
}

export interface ProcessStep {
  stepNumber?: number;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string | ReactNode;
}

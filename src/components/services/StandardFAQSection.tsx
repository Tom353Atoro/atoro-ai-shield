import React from 'react';
import { Badge } from '@/components/ui/badge';
import { ServiceSection } from './StandardServicePage';
import { Disclosure } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

export interface StandardFAQSectionProps {
  badgeText?: string;
  title: string;
  description?: string;
  faqs: FAQItem[];
  className?: string;
  id?: string;
}

/**
 * StandardFAQSection - A standardized component for service FAQ sections
 * 
 * This component provides a consistent layout for showing frequently asked questions
 * with expandable/collapsible answers.
 */
const StandardFAQSection: React.FC<StandardFAQSectionProps> = ({
  badgeText = "FAQ",
  title = "Frequently Asked Questions",
  description,
  faqs,
  className = "bg-gray-50", 
  id = "faq"
}) => {
  return (
    <ServiceSection id={id} className={`py-16 ${className}`}>
      <div className="text-center mb-10">
        {badgeText && (
          <Badge className="mb-3 bg-atoro-teal/10 text-atoro-teal hover:bg-atoro-teal/20">
            {badgeText}
          </Badge>
        )}
        <h2 className="mb-3">{title}</h2>
        {description && (
          <p className="text-gray-700 max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Disclosure key={`faq-${index}`} as="div" className="bg-white rounded-lg shadow-sm overflow-hidden">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-6 py-4 text-left font-medium text-atoro-dark-teal focus:outline-none focus:ring-2 focus:ring-atoro-green/50">
                    <span>{faq.question}</span>
                    <ChevronDown 
                      className={`${open ? "transform rotate-180" : ""} w-5 h-5 text-atoro-green transition-transform duration-200`} 
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-6 pb-4 pt-2 text-gray-600">
                    {typeof faq.answer === 'string' ? (
                      <p>{faq.answer}</p>
                    ) : (
                      faq.answer
                    )}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </ServiceSection>
  );
};

export default StandardFAQSection; 
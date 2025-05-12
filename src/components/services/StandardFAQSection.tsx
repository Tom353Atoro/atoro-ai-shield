
import React from 'react';
import { FAQSectionProps } from '@/types';
import ServiceSection from './ServiceSection';

const StandardFAQSection: React.FC<FAQSectionProps> = ({
  badgeText,
  title,
  description,
  faqs,
  className,
  id
}) => {
  return (
    <ServiceSection id={id} className={className || ''}>
      <div className="max-w-4xl mx-auto">
        {badgeText && (
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            {badgeText}
          </div>
        )}
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        {description && <p className="text-xl text-gray-600 mb-8">{description}</p>}
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <div className="text-gray-600">{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </ServiceSection>
  );
};

export default StandardFAQSection;

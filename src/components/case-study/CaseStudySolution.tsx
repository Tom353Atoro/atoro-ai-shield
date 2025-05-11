
import React from 'react';
import { Container } from '@/components/ui/Container';
import SectionWrapper from '@/components/shared/SectionWrapper';

const CaseStudySolution = () => {
  return (
    <SectionWrapper
      title="The Solution"
      description="A strategic approach to achieving ISO 42001 certification with expert partners"
      badgeText="Approach"
      className="py-16"
      bgColor="bg-white"
    >
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-atoro-teal">Expert Partnership</h3>
          <p className="text-gray-700 mb-4">
            Atoro partnered with accredited auditor <span className="font-semibold">A-LIGN</span> to transform the ISO 42001 audit process from a compliance exercise into a strategic growth opportunity. This collaboration allowed Atoro to:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-atoro-green mr-2">•</span>
              <span>Receive expert guidance on interpreting the new standard</span>
            </li>
            <li className="flex items-start">
              <span className="text-atoro-green mr-2">•</span>
              <span>Validate existing AI governance practices</span>
            </li>
            <li className="flex items-start">
              <span className="text-atoro-green mr-2">•</span>
              <span>Enhance AI risk assessment methodologies</span>
            </li>
          </ul>
          
          <img 
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
            alt="Team of professionals reviewing AI governance documentation" 
            className="mt-6 w-full h-64 object-cover rounded-lg shadow-sm"
          />
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4 text-atoro-teal">Automated Compliance</h3>
          <p className="text-gray-700 mb-4">
            Leveraging <span className="font-semibold">Vanta</span> automation technology allowed Atoro to significantly reduce the manual burden of evidence collection and administrative overhead. Key benefits included:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-atoro-green mr-2">•</span>
              <span>Continuous monitoring of AI system performance</span>
            </li>
            <li className="flex items-start">
              <span className="text-atoro-green mr-2">•</span>
              <span>Automated evidence collection for audit requirements</span>
            </li>
            <li className="flex items-start">
              <span className="text-atoro-green mr-2">•</span>
              <span>Streamlined documentation of AI risk assessments</span>
            </li>
            <li className="flex items-start">
              <span className="text-atoro-green mr-2">•</span>
              <span>Integration with existing ISO 27001 compliance processes</span>
            </li>
          </ul>
          
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
            alt="Computer screen showing compliance automation dashboard" 
            className="mt-6 w-full h-64 object-cover rounded-lg shadow-sm"
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CaseStudySolution;

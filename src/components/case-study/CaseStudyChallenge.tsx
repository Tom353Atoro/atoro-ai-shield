
import React from 'react';
import { Container } from '@/components/ui/Container';
import { Shield } from 'lucide-react';
import SectionWrapper from '@/components/shared/SectionWrapper';

const CaseStudyChallenge = () => {
  return (
    <SectionWrapper
      title="The Challenge"
      description="Navigating the evolving landscape of AI governance presented unique challenges that required innovative solutions."
      badgeText="Challenges"
      badgeClassName="bg-atoro-teal/10 text-atoro-teal"
      className="py-16"
      bgColor="bg-gray-50"
    >
      <div className="max-w-3xl mx-auto">
        <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
          <div className="flex items-start mb-6">
            <div className="mr-4 bg-atoro-teal/10 p-3 rounded-full">
              <Shield className="h-6 w-6 text-atoro-teal" />
            </div>
            <h3 className="text-xl font-semibold text-atoro-teal">Key Challenges</h3>
          </div>
          
          <ul className="space-y-4 pl-6">
            <li className="flex items-start">
              <span className="inline-block bg-atoro-teal/10 text-atoro-teal rounded-full p-1 mr-3 mt-1">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <span className="text-gray-700">Rapidly evolving EU AI Act created new compliance pressures.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block bg-atoro-teal/10 text-atoro-teal rounded-full p-1 mr-3 mt-1">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <span className="text-gray-700">Clients needed proof that AI tools were deployed ethically and securely.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block bg-atoro-teal/10 text-atoro-teal rounded-full p-1 mr-3 mt-1">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <span className="text-gray-700">Need to integrate AI governance with existing cybersecurity frameworks.</span>
            </li>
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CaseStudyChallenge;

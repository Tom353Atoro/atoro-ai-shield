
import React from 'react';
import { Container } from '@/components/ui/Container';
import SectionWrapper from '@/components/shared/SectionWrapper';

const CaseStudyAbout = () => {
  return (
    <SectionWrapper
      title="About Atoro"
      className="py-16"
      bgColor="bg-gray-50"
      centered={true}
      spacingSize="compact"
    >
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <img 
            src="/lovable-uploads/8d13129b-c156-4ec7-b2ef-bbd0364fb711.png" 
            alt="Atoro Logo" 
            className="h-12"
          />
        </div>
        
        <p className="text-lg text-gray-700">
          Atoro is a cyber-compliance agency that builds and manages security and compliance programmes for tech-first companies, covering ISO 42001, ISO 27001, SOC 2 and more.
        </p>
        
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-atoro-green/10 flex items-center justify-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-atoro-green">
                <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
                <path d="m19.7 10.7-.1-.1"></path>
                <path d="m19.7 13.4-.1.1"></path>
                <path d="m21.2 12.5-.2-.2"></path>
                <path d="m8 17.5-.2.2"></path>
                <path d="m4.9 13.4-.1.1"></path>
                <path d="m4.3 10.7-.1-.1"></path>
                <path d="m2.7 11.8.2.2"></path>
                <path d="m16 17.5.2.2"></path>
                <path d="M12 20v1"></path>
                <path d="M12 3v1"></path>
                <circle cx="12" cy="12" r="9"></circle>
              </svg>
            </div>
            <h3 className="font-semibold text-atoro-teal">ISO 42001</h3>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-atoro-blue/10 flex items-center justify-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-atoro-blue">
                <rect x="3" y="11" width="18" height="10" rx="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <h3 className="font-semibold text-atoro-teal">ISO 27001</h3>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-atoro-teal/10 flex items-center justify-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-atoro-teal">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3 className="font-semibold text-atoro-teal">SOC 2</h3>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-atoro-green/10 flex items-center justify-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-atoro-green">
                <path d="M16 16v-3a2 2 0 0 0-2-2h-1v-2a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v9"></path>
                <path d="M18 8h-7"></path>
                <path d="M18 5h-4"></path>
                <rect width="16" height="16" x="4" y="4" rx="2"></rect>
              </svg>
            </div>
            <h3 className="font-semibold text-atoro-teal">GDPR</h3>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CaseStudyAbout;

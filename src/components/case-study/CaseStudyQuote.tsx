
import React from 'react';
import { Container } from '@/components/ui/Container';
import SectionWrapper from '@/components/shared/SectionWrapper';

const CaseStudyQuote = () => {
  return (
    <SectionWrapper
      className="py-16"
      bgColor="bg-white"
      spacingSize="default"
    >
      <div className="max-w-4xl mx-auto">
        <blockquote className="bg-gradient-to-br from-atoro-teal to-atoro-blue rounded-lg p-8 text-white shadow-lg relative">
          <svg 
            className="absolute top-4 left-4 text-white opacity-20"
            width="40" 
            height="40" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M10 11H6C5.46957 11 4.96086 10.7893 4.58579 10.4142C4.21071 10.0391 4 9.53043 4 9V7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H8C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7M19 15H15C14.4696 15 13.9609 14.7893 13.5858 14.4142C13.2107 14.0391 13 13.5304 13 13V7C13 6.46957 13.2107 5.96086 13.5858 5.58579C13.9609 5.21071 14.4696 5 15 5H17C17.5304 5 18.0391 5.21071 18.4142 5.58579C18.7893 5.96086 19 6.46957 19 7M10 15H6C5.46957 15 4.96086 14.7893 4.58579 14.4142C4.21071 14.0391 4 13.5304 4 13V11M19 11H15C14.4696 11 13.9609 10.7893 13.5858 10.4142C13.2107 10.0391 13 9.53043 13 9V7M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
          
          <div className="relative z-10">
            <p className="text-lg md:text-xl italic mb-6 leading-relaxed">
              "This certification isn't just about validating our approach — it's about setting new standards for how consultants can leverage artificial and human intelligence to deliver deeper insights and a more responsive service."
            </p>
            
            <footer className="flex items-center">
              <div className="w-12 h-12 bg-atoro-green/30 rounded-full mr-4 flex items-center justify-center text-white font-bold">
                TM
              </div>
              <div>
                <p className="font-bold">Tom McNamara</p>
                <p className="text-white/80 text-sm">Founder & CEO, Atoro</p>
              </div>
            </footer>
          </div>
        </blockquote>
      </div>
    </SectionWrapper>
  );
};

export default CaseStudyQuote;

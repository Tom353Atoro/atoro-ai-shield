
import React from 'react';
import UnifiedHero from '@/components/shared/UnifiedHero';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <>
      <UnifiedHero 
        layout="centered"
        enableCyclingText={true}
        cyclingWords={["Cybersecurity", "Privacy", "AI Governance"]}
        title="for Fast-Growing SaaS"
        subtitle="Europe's first ISO 42001 certified AI security consultancy, uniting cyber security, data privacy, and AI governance under one fixed-price, outcome-driven model."
        primaryButtonText="Book a Call"
        primaryButtonLink="#"
        primaryButtonId="hero-book-call-btn"
        secondaryButtonText="Explore Services"
        secondaryButtonLink="/services"
        backgroundClass="bg-gradient-to-br from-white to-gray-50"
      />
      
      <div className="bg-gray-50 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-atoro-teal/5 border border-atoro-teal/10 rounded-lg p-4 flex flex-col sm:flex-row items-center justify-between">
            <div className="flex-1 text-center sm:text-left mb-4 sm:mb-0">
              <p className="text-sm font-medium text-atoro-teal">
                <span className="bg-atoro-green/20 text-atoro-green px-2 py-1 rounded-full text-xs mr-2">NEW</span>
                We're Europe's first ISO 42001-certified cyber-compliance agency
              </p>
            </div>
            <Link to="/case-study-iso42001" className="text-sm font-medium text-atoro-green hover:text-atoro-teal transition-colors inline-flex items-center">
              Read the case study
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

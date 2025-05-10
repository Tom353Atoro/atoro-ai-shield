
import React from 'react';
import UnifiedHero from '@/components/shared/UnifiedHero';

const Hero = () => {
  return <UnifiedHero 
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
  />;
};

export default Hero;

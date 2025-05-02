
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import PillarsSection from '@/components/home/PillarsSection';
import FlagshipService from '@/components/home/FlagshipService';
import Partners from '@/components/home/Partners';
import AboutAtoro from '@/components/home/AboutAtoro';
import ThoughtLeadership from '@/components/home/ThoughtLeadership';
import Testimonials from '@/components/home/Testimonials';
import Newsletter from '@/components/home/Newsletter';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <PillarsSection />
        <FlagshipService />
        <Partners />
        <AboutAtoro />
        <ThoughtLeadership />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

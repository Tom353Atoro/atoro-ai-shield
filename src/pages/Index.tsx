
import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import AboutAtoro from '@/components/home/AboutAtoro';
import PillarsSection from '@/components/home/PillarsSection';
import FlagshipService from '@/components/home/FlagshipService';
import Testimonials from '@/components/home/Testimonials';
import LogoBanner from '@/components/home/LogoBanner';
import Partners from '@/components/home/Partners';
import StaticThoughtLeadership from '@/components/home/StaticThoughtLeadership';
import Newsletter from '@/components/home/Newsletter';

export default function Index() {
  return (
    <Layout>
      <Hero />
      <AboutAtoro />
      <LogoBanner />
      <PillarsSection />
      <Partners />
      <FlagshipService />
      <Testimonials />
      <StaticThoughtLeadership />
      <Newsletter />
    </Layout>
  );
}

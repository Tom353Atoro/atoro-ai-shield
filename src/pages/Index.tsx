
import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import LogoBanner from '@/components/home/LogoBanner';
import ServicePillarsTabbed from '@/components/home/ServicePillarsTabbed';
import FlagshipService from '@/components/home/FlagshipService';
import Partners from '@/components/home/Partners';
import AboutAtoro from '@/components/home/AboutAtoro';
import StaticThoughtLeadership from '@/components/home/StaticThoughtLeadership';
import Testimonials from '@/components/home/Testimonials';
import Newsletter from '@/components/home/Newsletter';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <LogoBanner />
      <ServicePillarsTabbed />
      <FlagshipService />
      <Partners />
      <AboutAtoro />
      <StaticThoughtLeadership />
      <Testimonials />
      <Newsletter />
    </Layout>
  );
};

export default Index;

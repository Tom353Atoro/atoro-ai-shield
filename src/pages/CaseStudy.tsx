
import React from 'react';
import Layout from '@/components/layout/Layout';
import CaseStudyHero from '@/components/case-study/CaseStudyHero';
import CaseStudyOverview from '@/components/case-study/CaseStudyOverview';
import CaseStudyChallenge from '@/components/case-study/CaseStudyChallenge';
import CaseStudySolution from '@/components/case-study/CaseStudySolution';
import CaseStudyResults from '@/components/case-study/CaseStudyResults';
import CaseStudyQuote from '@/components/case-study/CaseStudyQuote';
import CaseStudyAbout from '@/components/case-study/CaseStudyAbout';
import CaseStudyCTA from '@/components/case-study/CaseStudyCTA';
import { Helmet } from 'react-helmet';

const CaseStudy = () => {
  return (
    <Layout>
      <Helmet>
        <title>Case Study: Atoro — Europe's First ISO 42001-Certified Consultancy</title>
        <meta 
          name="description" 
          content="How Atoro partnered with A-LIGN and Vanta to become the first European consultancy to achieve ISO 42001, setting the bar for responsible AI compliance."
        />
      </Helmet>
      
      <main>
        <CaseStudyHero />
        <CaseStudyOverview />
        <CaseStudyChallenge />
        <CaseStudySolution />
        <CaseStudyResults />
        <CaseStudyQuote />
        <CaseStudyAbout />
        <CaseStudyCTA />
      </main>
    </Layout>
  );
};

export default CaseStudy;

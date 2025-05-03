
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Container } from '@/components/ui/Container';
import ContactHero from '@/components/contact/ContactHero';
import ContactContent from '@/components/contact/ContactContent';

const Contact = () => {
  return (
    <Layout>
      <ContactHero />
      <ContactContent />
    </Layout>
  );
};

export default Contact;

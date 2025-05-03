
import React from 'react';
import { Container } from '@/components/ui/Container';

const ContactHero = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-atoro-teal to-atoro-dark-teal text-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Get in Touch</h1>
          <p className="text-xl text-atoro-light-green mb-8 animate-slide-up">
            We're here to answer your questions and help secure your organization's future.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default ContactHero;

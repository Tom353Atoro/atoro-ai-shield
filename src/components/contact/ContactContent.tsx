
import React from 'react';
import { Container } from '@/components/ui/Container';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';

const ContactContent = () => {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-12">
          <ContactInfo />
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactContent;


import React from 'react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/badge';

const FAQSection = () => {
  const faqs = [{
    question: "How quickly can we achieve compliance with your service?",
    answer: "Most clients achieve SOC 2 Type 1 within 60-90 days and ISO 27001 certification within 4-6 months. This is significantly faster than the typical 9-12 month timeline for companies building in-house programs."
  }, {
    question: "Do we need to hire any internal security staff?",
    answer: "No, our service is designed to be comprehensive. We provide all necessary security expertise, from strategic leadership (vCISO) to hands-on implementation. You'll need to assign an internal point of contact, but they typically spend less than 5 hours per week coordinating with our team."
  }, {
    question: "How does pricing work?",
    answer: "We offer transparent, flat-rate monthly pricing based on your company size and specific compliance requirements. There are no hidden fees or surprise costs. Compared to hiring a minimal in-house team (CISO, security engineer, compliance manager), our service typically saves 60-70% annually."
  }, {
    question: "What happens during a security emergency?",
    answer: "Your service includes incident response support. Our team is available 24/7 for security emergencies through our dedicated incident hotline. We work with you to contain, investigate, and remediate security incidents, as well as manage any necessary communications."
  }, {
    question: "Can you support multiple compliance frameworks simultaneously?",
    answer: "Yes, our methodology is designed to efficiently achieve multiple certifications with shared controls and evidence. Most clients pursue SOC 2 and ISO 27001 simultaneously, with GDPR, HIPAA, or other frameworks layered on as needed."
  }];
  
  return (
    <section className="py-16 bg-white relative">
      <Container>
        <div className="text-center mb-12">
          <Badge className="mb-2 bg-atoro-teal/10 text-atoro-teal">Common Questions</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;

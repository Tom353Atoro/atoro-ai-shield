import React from 'react';
import { Container } from '@/components/ui/Container';
import { Disclosure } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const ISO27701FAQ = () => {
  const faqs = [
    {
      question: "What is ISO 27701 and how does it relate to ISO 27001?",
      answer: "ISO 27701 is a privacy extension to ISO 27001, which creates a Privacy Information Management System (PIMS) that builds upon your existing Information Security Management System (ISMS). While ISO 27001 focuses on managing information security risks, ISO 27701 adds privacy-specific controls to help organizations protect personal data and demonstrate compliance with privacy regulations like GDPR."
    },
    {
      question: "Do we need ISO 27001 certification before pursuing ISO 27701?",
      answer: "Yes, ISO 27701 is designed as an extension to ISO 27001. You must have an operational ISO 27001-compliant ISMS before you can implement ISO 27701. If you don't have ISO 27001 yet, we can help you implement both standards concurrently, though they will be certified separately."
    },
    {
      question: "How long does ISO 27701 certification typically take?",
      answer: "For organizations that already have ISO 27001 certification, implementing and certifying for ISO 27701 typically takes 3-6 months. The timeline varies based on your organization's size, complexity, the maturity of your current privacy practices, and how well-established your ISO 27001 ISMS is. We offer accelerated implementation programs that can reduce this timeline while maintaining certification readiness."
    },
    {
      question: "How does ISO 27701 help with GDPR compliance?",
      answer: "ISO 27701 was designed with GDPR requirements in mind and provides a structured framework for implementing many GDPR principles. While certification alone doesn't guarantee full GDPR compliance, it demonstrates that you have a systematic approach to privacy management. ISO 27701 covers data processing roles (controller/processor), data subject rights, privacy by design principles, and documentation requirements that align with GDPR's accountability principle."
    },
    {
      question: "What are the business benefits of ISO 27701 certification?",
      answer: "ISO 27701 certification provides multiple benefits: (1) Enhances trust with customers and partners by demonstrating commitment to privacy protection, (2) Streamlines compliance with multiple privacy regulations beyond GDPR, including CCPA and LGPD, (3) Creates competitive advantage, particularly in privacy-sensitive industries or when working with European clients, (4) Reduces the risk of privacy breaches and associated penalties, and (5) Improves organizational efficiency by integrating privacy and security management."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <Badge className="mb-3 bg-atoro-teal/10 text-atoro-teal hover:bg-atoro-teal/20">FAQ</Badge>
          <h2 className="mb-3">ISO 27701 Certification FAQs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about ISO 27701 privacy management certification
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <Disclosure key={index} as="div" className="py-4">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between text-left">
                    <span className="font-medium text-lg text-gray-900">{faq.question}</span>
                    <ChevronDown
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-atoro-teal`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="pt-3 text-gray-600">
                    {faq.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ISO27701FAQ; 

import React from 'react';
import { Container } from '@/components/ui/Container';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How long does the ISO 27001 certification process typically take?",
      answer: "While ISO 27001 certification typically takes 6-12 months for most organizations, our streamlined approach can help you achieve certification in as little as 12 weeks. This accelerated timeline is possible because of our pre-built policy templates, implementation expertise, and dedicated support throughout the process."
    },
    {
      question: "Is ISO 27001 certification mandatory for SaaS companies?",
      answer: "ISO 27001 certification is not legally mandatory for most SaaS companies, but it is increasingly becoming a business requirement. Many enterprise clients now require their vendors to have ISO 27001 certification before signing contracts, making it essential for SaaS companies looking to grow their enterprise customer base."
    },
    {
      question: "How much does ISO 27001 implementation typically cost?",
      answer: "The cost of ISO 27001 implementation varies depending on your organization's size, complexity, and existing security controls. Our service provides a predictable, fixed-fee approach with transparent pricing. We offer different packages starting from $25,000, and we'd be happy to provide a detailed quote during our initial consultation."
    },
    {
      question: "What resources will we need to dedicate internally?",
      answer: "Our approach minimizes the burden on your internal team. You'll need to assign a project sponsor (typically a CTO or CISO) and allocate approximately 5-10 hours per week from relevant team members. We handle the heavy lifting of documentation, control implementation guidance, and audit preparation."
    },
    {
      question: "How does ISO 27001 compare to SOC 2?",
      answer: "ISO 27001 is an international standard focusing on information security management systems, while SOC 2 is a US-based framework focused on service organizations' controls. ISO 27001 is more prescriptive and globally recognized, while SOC 2 is more flexible. Many organizations pursue both certifications, and our implementation approach can support a combined effort."
    },
    {
      question: "What happens after we achieve certification?",
      answer: "ISO 27001 certification requires ongoing maintenance and annual surveillance audits. Our service includes 12 months of post-certification support to help you maintain compliance, address any new requirements, and prepare for surveillance audits. We also offer extended maintenance packages for organizations seeking longer-term support."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our ISO 27001 implementation service.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg mb-4">Still have questions?</p>
          <button className="text-atoro-blue font-medium hover:underline">
            Contact our ISO 27001 specialists →
          </button>
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;

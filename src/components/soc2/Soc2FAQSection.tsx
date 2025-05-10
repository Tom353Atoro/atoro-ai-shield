
import React from 'react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Soc2FAQSection = () => {
  const faqs = [
    {
      question: "How long does the SOC 2 certification process take?",
      answer: "The SOC 2 certification process typically takes 3-6 months, depending on your organization's size, complexity, and readiness. With our streamlined approach, we can help you achieve certification in as little as 12 weeks."
    },
    {
      question: "What's the difference between SOC 2 Type 1 and Type 2?",
      answer: "SOC 2 Type 1 assesses if your security controls are properly designed at a point in time. SOC 2 Type 2 verifies that these controls have been operating effectively over a period of time (usually 6-12 months)."
    },
    {
      question: "Do we need to implement all five Trust Service Criteria?",
      answer: "No, only the Security criterion is mandatory. You can select additional criteria (Availability, Processing Integrity, Confidentiality, Privacy) based on your business needs and customer requirements."
    },
    {
      question: "How much does SOC 2 certification cost?",
      answer: "The cost varies based on your organization's size, complexity, and the scope of your audit. Our team can provide a personalized quote after an initial assessment."
    },
    {
      question: "How often do we need to renew SOC 2 certification?",
      answer: "SOC 2 reports are typically valid for 12 months. After that, you'll need to undergo a new audit to maintain your certification."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <Badge className="mb-3 bg-atoro-teal/10 text-atoro-teal hover:bg-atoro-teal/20">FAQ</Badge>
          <h2 className="mb-3">Frequently Asked Questions</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Find answers to common questions about SOC 2 compliance and our implementation service.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
};

export default Soc2FAQSection;

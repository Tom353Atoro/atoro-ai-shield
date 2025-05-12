import React from 'react';
import { Container } from '@/components/ui/Container';
import { Disclosure } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const GDPRFAQ = () => {
  const faqs = [
    {
      question: "Does my company need to comply with GDPR?",
      answer: "Your company must comply with GDPR if it processes personal data of individuals in the EU, regardless of your company's location. This applies if you offer goods or services to EU residents or monitor their behavior. Even companies with no EU presence may need to comply if they process EU personal data."
    },
    {
      question: "What are the penalties for non-compliance with GDPR?",
      answer: "GDPR violations can result in significant penalties. Serious infringements can lead to fines of up to €20 million or 4% of global annual revenue, whichever is higher. Less severe violations may incur fines up to €10 million or 2% of global annual revenue. Authorities typically consider factors like the nature of the violation, preventive measures taken, and cooperation when determining penalties."
    },
    {
      question: "How long does it take to become GDPR compliant?",
      answer: "The timeline for achieving GDPR compliance varies based on your organization's size, complexity, and current privacy practices. For small to medium-sized organizations with relatively straightforward data processing activities, the process typically takes 3-6 months. Larger enterprises or those with complex data processing may require 6-12 months. Our approach focuses on prioritizing high-risk areas first while developing a comprehensive compliance program."
    },
    {
      question: "Do we need to appoint a Data Protection Officer (DPO)?",
      answer: "Under GDPR, you must appoint a Data Protection Officer if: (1) you're a public authority, (2) your core activities require regular and systematic monitoring of individuals on a large scale, or (3) your core activities involve processing special categories of data or data relating to criminal convictions on a large scale. Even if not mandatory, appointing a DPO can demonstrate commitment to compliance. We offer Virtual DPO services for organizations that need expertise without hiring a full-time DPO."
    },
    {
      question: "Do we need an EU representative if we're not based in the EU?",
      answer: "If your organization is not established in the EU but is subject to GDPR (because you offer goods/services to EU residents or monitor their behavior), you generally must appoint an EU representative. This representative serves as a point of contact for supervisory authorities and data subjects. Exceptions exist for occasional processing that doesn't include special categories of data and is unlikely to pose risks to individuals. We can provide EU Representative services or help determine if you qualify for an exception."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <Badge className="mb-3 bg-atoro-teal/10 text-atoro-teal hover:bg-atoro-teal/20">FAQ</Badge>
          <h2 className="mb-3">GDPR Compliance FAQs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about GDPR compliance requirements and implementation
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

export default GDPRFAQ; 
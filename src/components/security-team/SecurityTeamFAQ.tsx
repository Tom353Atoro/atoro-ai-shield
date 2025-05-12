import React from 'react';
import { Container } from '@/components/ui/Container';
import { Disclosure } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const SecurityTeamFAQ = () => {
  const faqs = [
    {
      question: "What roles are typically included in the Security Team service?",
      answer: "Our Security Team as a Service typically includes a range of security professionals based on your needs, such as a Fractional CISO, security engineers, compliance specialists, security analysts, penetration testers, and security architects. We assemble the right team based on your specific security requirements and business objectives."
    },
    {
      question: "How much does the Security Team service cost?",
      answer: "Our pricing is flexible and based on the specific security capabilities your organization needs. We offer tiered packages starting from basic security oversight to comprehensive security management. This approach ensures you get the right level of security expertise without overinvesting in unnecessary resources."
    },
    {
      question: "Can your security team help with compliance requirements?",
      answer: "Yes, our security teams have extensive experience with various compliance frameworks including SOC 2, ISO 27001, GDPR, HIPAA, and PCI DSS. We can help you implement the necessary controls, prepare documentation, and guide you through the certification process."
    },
    {
      question: "How does the security team integrate with our existing staff?",
      answer: "We design our service to complement your existing team. Our security professionals work collaboratively with your staff, providing guidance, training, and support while respecting your organization's culture and processes. We use your preferred communication tools and adapt to your workflows for seamless integration."
    },
    {
      question: "Can we scale the service up or down as needed?",
      answer: "Absolutely. One of the key benefits of our Security Team as a Service is flexibility. You can scale services up during high-demand periods (such as product launches or compliance initiatives) and scale back during normal operations. Our engagement model allows for adjustments with reasonable notice."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <Badge className="mb-3 bg-atoro-teal/10 text-atoro-teal hover:bg-atoro-teal/20">FAQ</Badge>
          <h2 className="mb-3">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about our Security Team as a Service
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

export default SecurityTeamFAQ; 
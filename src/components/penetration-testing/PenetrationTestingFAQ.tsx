import React from 'react';
import { Container } from '@/components/ui/Container';
import { Disclosure } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const PenetrationTestingFAQ = () => {
  const faqs = [
    {
      question: "What types of penetration testing do you offer?",
      answer: "We offer a comprehensive range of penetration testing services including web application testing, network infrastructure testing, cloud security testing, mobile application testing, API security testing, and social engineering assessments. We can customize our approach based on your specific security needs and compliance requirements."
    },
    {
      question: "How long does a typical penetration test take?",
      answer: "The duration of a penetration test depends on the scope and complexity of the systems being tested. A focused test of a single application might take 1-2 weeks, while a comprehensive assessment of an entire infrastructure could take 3-4 weeks. We'll provide a clear timeline during the scoping phase of the project."
    },
    {
      question: "What deliverables will we receive after the penetration test?",
      answer: "You'll receive a comprehensive report that includes an executive summary, detailed findings with severity ratings, exploitation proof where applicable, clear remediation recommendations, and technical details for your security team. We also offer a post-assessment consultation to explain findings and answer questions."
    },
    {
      question: "How frequently should we conduct penetration tests?",
      answer: "We recommend conducting penetration tests at least annually, after major infrastructure or application changes, before major product launches, and to validate remediation efforts after previous assessments. Many compliance frameworks require annual testing, but organizations with rapidly evolving technology environments may benefit from more frequent assessments."
    },
    {
      question: "How do you ensure our systems remain operational during testing?",
      answer: "We take a careful approach to penetration testing that prioritizes system availability. Before beginning any testing, we establish clear scope boundaries, testing windows, and emergency contacts. We use techniques that minimize the risk of disruption and can perform testing during off-hours for critical systems if needed."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <Badge className="mb-3 bg-atoro-teal/10 text-atoro-teal hover:bg-atoro-teal/20">FAQ</Badge>
          <h2 className="mb-3">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about our penetration testing services
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

export default PenetrationTestingFAQ; 
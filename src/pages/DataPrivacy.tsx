import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { Container } from '@/components/ui/Container';
import Newsletter from '@/components/home/Newsletter';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FileKey, Database, Flag, Calendar, CheckCircle, Shield, Bell, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const DataPrivacy = () => {
  return (
    <ServiceLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-atoro-teal to-atoro-dark-teal text-white">
        <Container>
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold">GDPR Compliance: We Do The Work</h1>
            <p className="text-xl mb-8 opacity-90">
              Turn regulatory complexity into a competitive edge with our comprehensive data privacy solutions 
              that handle the burden of compliance for your SaaS business.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green">
                Request Privacy Assessment
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Pain Point & Solution Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-red-50 p-8 rounded-lg border border-red-100">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">The Pain Point</h2>
              <p className="text-gray-700 mb-4">
                Navigating GDPR is daunting for any SaaS handling personal data. There's a mountain of requirements – privacy notices, data mapping, processor agreements, breach notifications, EU representation, and more.
              </p>
              <p className="text-gray-700 mb-4">
                For founders and CTOs unfamiliar with legal terminology, it's easy to feel lost. Hiring a lawyer or a full compliance team might be out of reach, yet the fear of heavy fines or losing customer trust looms large.
              </p>
              <p className="text-gray-700">
                Many SaaS leaders simply don't have the time or expertise to ensure every GDPR box is ticked, especially while trying to scale their product.
              </p>
            </div>
            
            <div className="bg-green-50 p-8 rounded-lg border border-green-100">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Atoro's Solution</h2>
              <p className="text-gray-700 mb-4">
                Unlike traditional consultants who might just give you advice or a to-do list, we actually roll up our sleeves and execute the GDPR tasks for you. Our dedicated privacy engineers and legal experts will:
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-atoro-blue flex-shrink-0 mt-0.5" />
                  <span>Assess your current compliance state</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-atoro-blue flex-shrink-0 mt-0.5" />
                  <span>Draft policies and Data Protection Agreements</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-atoro-blue flex-shrink-0 mt-0.5" />
                  <span>Set up processes for Data Subject Requests</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-atoro-blue flex-shrink-0 mt-0.5" />
                  <span>Train your team on GDPR principles</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-atoro-blue flex-shrink-0 mt-0.5" />
                  <span>Act as your EU Representative for GDPR if needed</span>
                </li>
              </ul>
              
              <p className="text-gray-700 mt-4">
                With Atoro, you essentially gain a fractional Data Protection Office that handles privacy, so you can focus on your core business without worry.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Key Benefits</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Our privacy solutions are designed to deliver concrete business value beyond mere compliance, 
              providing real operational advantages for your SaaS business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8 text-atoro-blue" />,
                title: "Complete End-to-End Compliance",
                description: "We handle every aspect of GDPR readiness from gap analysis to implementation. By the end, you'll have fully operational privacy processes in place, from handling user data requests to breach response."
              },
              {
                icon: <Database className="h-8 w-8 text-atoro-green" />,
                title: "SaaS-Specific Expertise",
                description: "We specialize in SaaS data flows and tailor solutions to match your company's scale. Our experience with 50+ SaaS companies means we've seen your issues and know the best practices to address them."
              },
              {
                icon: <FileKey className="h-8 w-8 text-atoro-teal" />,
                title: "Automation-First Approach",
                description: "We leverage tools to automate privacy compliance tasks, from scanning personal data to tracking consent across your application. Fewer spreadsheets, more intelligent monitoring."
              },
              {
                icon: <Bell className="h-8 w-8 text-atoro-blue" />,
                title: "Dedicated Support & DPO Services",
                description: "Get ongoing support with experts just a Slack message away. We can also serve formally as your outsourced Data Protection Officer, providing official oversight and contact for regulators."
              },
              {
                icon: <Globe className="h-8 w-8 text-atoro-green" />,
                title: "Global Privacy Alignment",
                description: "While focusing on GDPR, we ensure your privacy program satisfies other regions too, like CCPA. You'll be ahead of the curve globally, not just ticking the box for Europe."
              },
              {
                icon: <Flag className="h-8 w-8 text-atoro-teal" />,
                title: "ISO27701 Readiness",
                description: "Our privacy framework prepares your organization for ISO27701 certification, the international standard for privacy information management, building trust with enterprise customers."
              }
            ].map((benefit, index) => (
              <Card key={index} className="border-gray-100 hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-8">
                  <div className="mb-5 flex justify-center">
                    <div className="p-4 bg-gray-50 rounded-full">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our GDPR Compliance Process</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We take a systematic approach to building your privacy program, ensuring no detail is missed
              and compliance is achieved efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Assessment",
                description: "We conduct a comprehensive gap analysis against GDPR requirements and assess your current data practices."
              },
              {
                number: "02",
                title: "Planning",
                description: "Our team develops a tailored roadmap for achieving compliance, prioritizing critical requirements."
              },
              {
                number: "03",
                title: "Implementation",
                description: "We execute the plan, drafting policies, setting up processes, and implementing technical measures."
              },
              {
                number: "04",
                title: "Maintenance",
                description: "Ongoing support ensures your privacy program adapts to regulatory changes and business growth."
              }
            ].map((step, index) => (
              <div key={index} className="border border-gray-100 rounded-lg p-8 relative hover:shadow-md transition-shadow bg-gradient-to-b from-white to-gray-50">
                <span className="absolute top-0 right-0 p-4 font-bold text-4xl text-gray-100">{step.number}</span>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-atoro-blue/10 to-atoro-green/10">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Eliminate GDPR Compliance Anxiety</h2>
            <p className="text-lg text-gray-700 mb-8">
              With Atoro handling your GDPR compliance, you can reassure customers and regulators alike – all while keeping
              your focus on building a great product. Schedule a call today to discuss your specific challenges.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-atoro-blue text-white hover:bg-atoro-blue/90">
                Schedule a Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-atoro-blue text-atoro-blue hover:bg-atoro-blue/10">
                Download GDPR Checklist
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Client Results Grid */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Trusted by SaaS Leaders</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              See how we've helped SaaS companies across various industries achieve peace of mind with their 
              data privacy compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((testimonial) => (
              <Card key={testimonial} className="border-gray-100">
                <CardContent className="pt-8 pb-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-semibold">Company Name</h4>
                      <p className="text-sm text-gray-500">Industry</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "Atoro took the GDPR burden off our shoulders completely. Their team handled everything from policy drafting to implementation, allowing us to focus on our product while staying compliant."
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <Link to="/resources/case-studies" className="text-atoro-blue hover:underline font-medium flex items-center">
                      Read full case study
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Common questions about our GDPR compliance services and how we can help your SaaS business.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Do we need to comply with GDPR if we're not based in the EU?",
                answer: "Yes, if you offer goods or services to individuals in the EU or monitor their behavior, GDPR applies regardless of your company's location. We can help determine your specific obligations and act as your EU representative if needed."
              },
              {
                question: "How long does it take to become GDPR compliant with Atoro?",
                answer: "Our typical implementation timeline is 6-8 weeks, though this varies based on your organization's size and complexity. We prioritize critical compliance items to reduce risk quickly while working through the complete program."
              },
              {
                question: "Can you handle our DPO requirements?",
                answer: "Yes, we offer outsourced Data Protection Officer services, providing you with qualified privacy leadership without the cost of a full-time hire. Our DPO service includes regulatory representation, compliance oversight, and staff training."
              },
              {
                question: "What makes Atoro different from other privacy consultants?",
                answer: "Unlike traditional consultants who provide recommendations that you must implement, we handle the actual implementation for you. We specialize in SaaS businesses, use an automation-first approach, and provide ongoing support beyond the initial setup."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-atoro-blue text-atoro-blue hover:bg-atoro-blue/5">
              View All FAQs
            </Button>
          </div>
        </Container>
      </section>

      <Newsletter />
      <Footer />
    </ServiceLayout>
  );
};

export default DataPrivacy;

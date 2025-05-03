
import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ServiceDescription = () => {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-2 bg-atoro-teal/10 text-atoro-teal">Our Approach</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Security Excellence Without the Overhead</h2>
          </div>
          
          <div className="space-y-6 text-lg text-gray-700">
            <p>
              For SaaS companies scaling quickly, building an in-house security team is expensive, time-consuming, and pulls focus from your core business. Our Security Team as a Service model provides all the expertise you need without the overhead costs and management challenges.
            </p>
            <p>
              We embed directly with your team, handling everything from policy creation and security reviews to compliance automation and audit management. Your dedicated security experts become an extension of your organization, providing both strategic guidance and hands-on implementation.
            </p>
            <p>
              While you focus on growing your business, we ensure your security and compliance foundations are solid, helping you confidently pursue enterprise deals that have stringent security requirements. From ISO 27001 to SOC 2 to GDPR, we've got you covered.
            </p>
          </div>
          
          <div className="mt-10 text-center">
            <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green">
              Book Your Security Consultation
            </Button>
            <p className="mt-2 text-sm text-gray-500">Limited availability for Q2 onboarding</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServiceDescription;

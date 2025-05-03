
import React from 'react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';
import ContactForm from '@/components/services/ContactForm';

const ContactSection = () => {
  return (
    <section className="py-16 bg-gray-50" id="contact">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <Badge className="mb-3 bg-atoro-teal/10 text-atoro-teal">Get Started</Badge>
            <h2 className="text-3xl font-bold mb-4">Schedule Your Security Assessment</h2>
            <p className="text-lg text-gray-700 mb-6">
              Take the first step toward comprehensive security coverage and compliance readiness. Our team will conduct a thorough assessment of your current security posture.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-2">
                <Check className="text-atoro-green" />
                <span>No-obligation consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-atoro-green" />
                <span>Custom implementation roadmap</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-atoro-green" />
                <span>Detailed compliance gap analysis</span>
              </div>
            </div>
            
            <div className="p-4 bg-atoro-green/10 rounded-lg border border-atoro-green/20 text-sm">
              <p className="font-medium text-atoro-teal">Limited Availability</p>
              <p>We're currently accepting new clients for Q2 onboarding. Schedule today to reserve your spot.</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;

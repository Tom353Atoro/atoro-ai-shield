
import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { Calendar, Mail } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-atoro-teal to-atoro-blue text-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Strengthen Your Security Posture with ISO 27001?
          </h2>
          
          <p className="text-lg mb-8 opacity-90">
            Join the growing number of SaaS companies that trust Atoro to guide their ISO 27001 implementation journey. Get certified in half the time with our expert-led process.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Button>
            
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Mail className="mr-2 h-5 w-5" />
              Request Detailed Brochure
            </Button>
          </div>
          
          <p className="mt-8 text-sm opacity-80">
            Book your free 30-minute consultation and discover how we can help you achieve ISO 27001 certification.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/badge';

const SecurityTeamProcess = () => {
  return (
    <section className="py-16 bg-atoro-teal/5">
      <Container>
        <div className="text-center mb-12">
          <Badge className="mb-3 bg-atoro-teal/10 text-atoro-teal hover:bg-atoro-teal/20">Our Methodology</Badge>
          <h2 className="mb-3">How Our Security Team Service Works</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We follow a structured approach to integrate seamlessly with your organization and deliver maximum security value.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default SecurityTeamProcess; 
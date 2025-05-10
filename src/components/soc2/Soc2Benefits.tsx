
import React from 'react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';
import ServiceSectionWrapper from '@/components/services/ServiceSectionWrapper';

const Soc2Benefits = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-atoro-teal to-atoro-dark-teal text-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Badge className="mb-4 bg-white/10 text-white hover:bg-white/20">Benefits</Badge>
            <h2 className="text-white mb-4">Why Choose Our SOC 2 Service</h2>
            <p className="text-lg mb-6 opacity-90">
              Our SOC 2 service provides more than just compliance. We help you build a stronger security posture and gain a competitive advantage.
            </p>
            
            <ul className="space-y-3 mb-6">
              {[
                "Expert guidance from experienced SOC 2 professionals",
                "Automated platform to streamline the compliance process",
                "Customized solutions tailored to your specific needs",
                "Ongoing support to maintain compliance and improve security"
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-atoro-green flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white/10 p-6 rounded-lg border border-white/20">
            <h3 className="text-xl font-semibold mb-5">SOC 2 Compliance Checklist</h3>
            <ul className="space-y-4">
              {[
                "Define your system boundary",
                "Select the applicable Trust Service Criteria",
                "Conduct a gap assessment",
                "Implement the necessary controls",
                "Prepare for your SOC 2 audit",
                "Obtain your SOC 2 report"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border border-atoro-green flex items-center justify-center flex-shrink-0">
                    <span className="text-atoro-green">{index + 1}</span>
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Soc2Benefits;

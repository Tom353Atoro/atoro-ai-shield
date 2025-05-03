
import React from 'react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { DollarSign, Clock, Check, Users } from 'lucide-react';

const BenefitsSection = () => {
  // Benefits data
  const benefits = [{
    id: "cost-savings",
    title: "70% Cost Reduction",
    description: "Eliminate the expense of hiring, training and retaining an in-house security team while gaining access to a broader range of expertise.",
    icon: <DollarSign className="h-10 w-10 text-atoro-green" />
  }, {
    id: "speed",
    title: "Accelerated Compliance",
    description: "Achieve certifications in 60-90 days rather than 6-12 months, unlocking enterprise deals that require formal compliance.",
    icon: <Clock className="h-10 w-10 text-atoro-green" />
  }, {
    id: "done-for-you",
    title: "Fully Managed Solution",
    description: "We handle everything from policy creation to audits while your team stays focused on building your core product.",
    icon: <Check className="h-10 w-10 text-atoro-green" />
  }, {
    id: "growth",
    title: "Unlock Enterprise Deals",
    description: "Remove security objections from your sales cycle and confidently pursue larger clients with stringent vendor requirements.",
    icon: <Users className="h-10 w-10 text-atoro-green" />
  }];
  
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <Badge className="mb-2 bg-atoro-teal/10 text-atoro-teal">Why Choose Us</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Executive Benefits</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our service delivers measurable business value with clear ROI for your executive team
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map(benefit => <Card key={benefit.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>)}
        </div>
      </Container>
    </section>
  );
};

export default BenefitsSection;

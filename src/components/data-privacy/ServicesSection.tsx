
import React from 'react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Shield, FileKey, Lock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  return (
    <section className="py-12 bg-white">
      <Container>
        <div className="text-center mb-10">
          <Badge className="mb-3 bg-atoro-teal/10 text-atoro-teal hover:bg-atoro-teal/20">Our Services</Badge>
          <h2 className="mb-3">Comprehensive Privacy Solutions</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Navigate complex regulatory requirements with our end-to-end privacy services.
            Build trust with customers and meet compliance requirements without slowing innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[{
            icon: <Shield className="text-atoro-green" />,
            title: "GDPR Compliance",
            description: "Complete implementation of GDPR requirements tailored to your SaaS business.",
            link: "/services/data-privacy/gdpr-compliance"
          }, {
            icon: <FileKey className="text-atoro-green" />,
            title: "Data Mapping",
            description: "Comprehensive inventory of personal data flows throughout your organization.",
            link: "/services/data-privacy/data-mapping"
          }, {
            icon: <Lock className="text-atoro-green" />,
            title: "DPIA & PIAs",
            description: "Thorough privacy impact assessments to identify and mitigate privacy risks early.",
            link: "/services/data-privacy/privacy-impact-assessments"
          }].map((service, index) => <Card key={index} className="border border-gray-100 hover:border-atoro-green/30 hover:shadow-md transition-all overflow-hidden group h-full">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-atoro-teal/5 rounded-lg">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center text-sm">{service.description}</p>
              </CardContent>
              <CardFooter className="pt-0 pb-5 flex justify-center">
                <Button variant="ghost" size="sm" className="text-atoro-teal group-hover:text-atoro-green group-hover:bg-atoro-green/10 transition-colors" asChild>
                  <Link to={service.link} className="flex items-center gap-1">
                    Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>)}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;

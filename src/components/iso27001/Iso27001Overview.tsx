
import React from 'react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, LockKeyhole, FileCheck } from 'lucide-react';

const Iso27001Overview = () => {
  return (
    <section className="py-12 bg-white">
      <Container>
        <div className="text-center mb-10">
          <Badge className="mb-3 bg-atoro-teal/10 text-atoro-teal hover:bg-atoro-teal/20">Understanding ISO 27001</Badge>
          <h2 className="mb-3">What is ISO 27001?</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            ISO 27001 is the international standard for information security management. 
            It provides a framework for establishing, implementing, maintaining, and continually 
            improving an information security management system (ISMS) within your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border border-gray-100 hover:border-atoro-green/30 hover:shadow-md transition-all overflow-hidden group h-full">
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <div className="p-3 bg-atoro-teal/5 rounded-lg">
                  <Shield className="text-atoro-blue" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Comprehensive Protection</h3>
              <p className="text-gray-600 text-center text-sm">
                ISO 27001 helps you protect all forms of information, whether digital, 
                cloud-based, or physical, through a comprehensive risk management approach.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-gray-100 hover:border-atoro-green/30 hover:shadow-md transition-all overflow-hidden group h-full">
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <div className="p-3 bg-atoro-teal/5 rounded-lg">
                  <LockKeyhole className="text-atoro-green" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Business Enabler</h3>
              <p className="text-gray-600 text-center text-sm">
                Far from being just a compliance checklist, ISO 27001 is a business enabler 
                that helps you win more clients and access global markets.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-gray-100 hover:border-atoro-green/30 hover:shadow-md transition-all overflow-hidden group h-full">
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <div className="p-3 bg-atoro-teal/5 rounded-lg">
                  <FileCheck className="text-atoro-teal" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Proven Framework</h3>
              <p className="text-gray-600 text-center text-sm">
                The standard provides a proven framework that helps you identify, analyze, and implement 
                controls to mitigate information security risks.
              </p>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default Iso27001Overview;

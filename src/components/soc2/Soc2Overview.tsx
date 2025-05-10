
import React from 'react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const Soc2Overview = () => {
  return (
    <section className="py-12 bg-white">
      <Container>
        <div className="text-center mb-10">
          <Badge className="mb-3 bg-atoro-teal/10 text-atoro-teal hover:bg-atoro-teal/20">Understanding SOC 2</Badge>
          <h2 className="mb-3">What is SOC 2?</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            SOC 2 (System and Organization Controls 2) is a widely recognized auditing standard 
            developed by the American Institute of Certified Public Accountants (AICPA). 
            It ensures your service providers securely manage your data to protect the interests of your organization 
            and the privacy of its clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border border-gray-100 hover:border-atoro-green/30 hover:shadow-md transition-all overflow-hidden group h-full">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">SOC 2 Trust Service Criteria</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-atoro-green mt-0.5 flex-shrink-0" />
                  <span>Security: Protect system resources against unauthorized access.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-atoro-green mt-0.5 flex-shrink-0" />
                  <span>Availability: Ensure the system is available for operation and use as agreed.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-atoro-green mt-0.5 flex-shrink-0" />
                  <span>Processing Integrity: Ensure system processing is complete, valid, accurate, timely, and authorized.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-atoro-green mt-0.5 flex-shrink-0" />
                  <span>Confidentiality: Protect confidential information from unauthorized access.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-atoro-green mt-0.5 flex-shrink-0" />
                  <span>Privacy: Handle personal information in conformity with your privacy notice.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border border-gray-100 hover:border-atoro-green/30 hover:shadow-md transition-all overflow-hidden group h-full">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Why SOC 2 Matters</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-atoro-green mt-0.5 flex-shrink-0" />
                  <span>Build Trust: Demonstrate your commitment to data security and privacy.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-atoro-green mt-0.5 flex-shrink-0" />
                  <span>Meet Customer Requirements: Many enterprises require SOC 2 compliance from their vendors.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-atoro-green mt-0.5 flex-shrink-0" />
                  <span>Gain Competitive Advantage: Stand out from competitors who lack SOC 2 certification.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-atoro-green mt-0.5 flex-shrink-0" />
                  <span>Improve Security Posture: Strengthen your internal controls and reduce the risk of data breaches.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-atoro-green mt-0.5 flex-shrink-0" />
                  <span>Ensure Business Continuity: Protect your operations and maintain customer confidence.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default Soc2Overview;

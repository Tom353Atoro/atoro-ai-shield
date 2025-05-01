
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import { Container } from '@/components/ui/Container';
import Newsletter from '@/components/home/Newsletter';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FileKey, Database, Flag, Calendar } from 'lucide-react';

const DataPrivacy = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-atoro-teal to-atoro-dark-teal text-white">
        <Container>
          <div className="max-w-3xl">
            <h1 className="mb-6">Data Privacy Solutions</h1>
            <p className="text-xl mb-8 opacity-90">
              GDPR programs, DPO-as-a-Service, and automated privacy ops that turn regulatory 
              complexity into a competitive edge for your SaaS business.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green">
                Request Privacy Assessment
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Privacy Solutions
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="mb-4">Comprehensive Data Privacy Services</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Our privacy solutions are designed to help SaaS companies navigate the complex landscape
              of data protection regulations around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FileKey className="text-atoro-blue" />,
                title: "GDPR Compliance",
                description: "Comprehensive implementation of GDPR requirements for your SaaS business."
              },
              {
                icon: <Database className="text-atoro-blue" />,
                title: "DPO-as-a-Service",
                description: "Expert Data Protection Officer services without the overhead of a full-time hire."
              },
              {
                icon: <Flag className="text-atoro-blue" />,
                title: "Privacy Operations",
                description: "Streamlined processes for managing data requests, breaches, and compliance."
              },
              {
                icon: <Calendar className="text-atoro-blue" />,
                title: "Privacy by Design",
                description: "Build privacy principles into your products from conception through deployment."
              }
            ].map((feature, index) => (
              <Card key={index} className="border-gray-100 hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-atoro-blue/5 rounded-lg">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">{feature.title}</h3>
                  <p className="text-gray-600 text-center">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-atoro-green/10 p-8 rounded-lg border border-atoro-green/20">
              <h3 className="text-2xl font-semibold mb-6">Global Privacy Regulations</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-atoro-blue rounded-full"></div>
                  <span className="font-medium">GDPR (EU)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-atoro-blue rounded-full"></div>
                  <span className="font-medium">CCPA/CPRA (California)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-atoro-blue rounded-full"></div>
                  <span className="font-medium">LGPD (Brazil)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-atoro-blue rounded-full"></div>
                  <span className="font-medium">PIPEDA (Canada)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-atoro-blue rounded-full"></div>
                  <span className="font-medium">PDPA (Singapore)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-atoro-blue rounded-full"></div>
                  <span className="font-medium">Privacy Act (Australia)</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6">Why Data Privacy Matters</h2>
              <p className="text-lg text-gray-700 mb-8">
                Strong data privacy practices are not just about compliance—they build trust with your customers 
                and protect your business from costly breaches and penalties.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Build Customer Trust",
                    description: "Show your commitment to protecting user data and privacy."
                  },
                  {
                    title: "Reduce Legal Risk",
                    description: "Minimize exposure to fines and legal actions through proper compliance."
                  },
                  {
                    title: "Streamline Operations",
                    description: "Efficient data management improves overall business operations."
                  },
                  {
                    title: "Competitive Advantage",
                    description: "Stand out in the market with strong privacy credentials."
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-atoro-blue rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-atoro-blue/10 to-atoro-green/10">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="mb-6">Simplify Your Privacy Compliance</h2>
            <p className="text-lg text-gray-700 mb-8">
              Our team of privacy experts will help you navigate the complex regulatory landscape and 
              implement practical solutions that work for your business.
            </p>
            <Button size="lg" className="bg-atoro-blue text-white hover:bg-atoro-blue/90">
              Get Privacy Consultation
            </Button>
          </div>
        </Container>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default DataPrivacy;


import React from 'react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, CircuitBoard, Scale } from 'lucide-react';

const ISO42001Overview = () => {
  return (
    <section className="py-12 bg-white">
      <Container>
        <div className="text-center mb-10">
          <Badge className="mb-3 bg-atoro-teal/10 text-atoro-teal hover:bg-atoro-teal/20">Understanding ISO 42001</Badge>
          <h2 className="mb-3">What is ISO 42001?</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            ISO 42001 is the world's first global standard for artificial intelligence management systems. 
            It provides a framework for organizations to demonstrate responsible and ethical AI governance, 
            ensuring your AI systems are trustworthy, transparent, and aligned with regulations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border border-gray-100 hover:border-atoro-green/30 hover:shadow-md transition-all overflow-hidden group h-full">
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <div className="p-3 bg-atoro-teal/5 rounded-lg">
                  <Brain className="text-atoro-blue" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Ethical AI Development</h3>
              <p className="text-gray-600 text-center text-sm">
                ISO 42001 provides a structured approach to developing and deploying AI systems that are 
                ethical, unbiased, and responsible.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-gray-100 hover:border-atoro-green/30 hover:shadow-md transition-all overflow-hidden group h-full">
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <div className="p-3 bg-atoro-teal/5 rounded-lg">
                  <Scale className="text-atoro-green" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Regulatory Alignment</h3>
              <p className="text-gray-600 text-center text-sm">
                Stay ahead of emerging AI regulations like the EU AI Act by implementing a 
                governance framework that aligns with global best practices.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-gray-100 hover:border-atoro-green/30 hover:shadow-md transition-all overflow-hidden group h-full">
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <div className="p-3 bg-atoro-teal/5 rounded-lg">
                  <CircuitBoard className="text-atoro-teal" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Integrated Framework</h3>
              <p className="text-gray-600 text-center text-sm">
                ISO 42001 integrates with existing management systems like ISO 27001, 
                providing a cohesive approach to managing AI and information security.
              </p>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default ISO42001Overview;

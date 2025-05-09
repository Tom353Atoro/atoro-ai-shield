
import React from 'react';
import { Container } from '@/components/ui/Container';
import { Check, X } from 'lucide-react';

const ScopeSection = () => {
  const includedItems = [
    "Comprehensive gap analysis and implementation plan",
    "Full set of security policies and procedures",
    "Risk assessment methodology and implementation",
    "Security awareness training materials",
    "Implementation of required security controls",
    "Internal audit program setup",
    "Certification readiness assessment",
    "Support during certification audit",
    "Post-certification maintenance guidance",
    "12 months of continuous support"
  ];
  
  const excludedItems = [
    "Hardware or software purchases",
    "Physical security infrastructure implementation",
    "Third-party audit fees",
    "Technical security testing (can be added)",
    "End-user security awareness training delivery"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What's Included in Our ISO 27001 Service</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Clear scope definition to ensure you know exactly what to expect from our ISO 27001 implementation service.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* Included Items */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-6 text-atoro-green flex items-center">
              <Check className="mr-2 h-6 w-6" /> What's Included
            </h3>
            <ul className="space-y-4">
              {includedItems.map((item, index) => (
                <li key={index} className="flex">
                  <Check className="h-5 w-5 text-atoro-green mr-3 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Excluded Items */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-6 text-gray-500 flex items-center">
              <X className="mr-2 h-6 w-6" /> What's Not Included
            </h3>
            <ul className="space-y-4">
              {excludedItems.map((item, index) => (
                <li key={index} className="flex">
                  <X className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-100">
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> We can provide custom quotes for excluded items if needed. Please discuss your specific requirements during consultation.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ScopeSection;

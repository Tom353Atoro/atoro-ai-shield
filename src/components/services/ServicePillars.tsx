
import React, { useState } from 'react';
import { Shield, FileCheck, Users, Lock, CodeXml } from 'lucide-react';
import { cn } from '@/lib/utils';

const ServicePillars = () => {
  const [activePillar, setActivePillar] = useState<string | null>("security-operations");
  
  const pillars = [
    {
      id: "security-operations",
      title: "Security Operations",
      description: "Day-to-day monitoring, incident response, and security controls management",
      icon: Shield,
      color: "text-atoro-green",
      position: "top"
    },
    {
      id: "governance",
      title: "Governance & Risk",
      description: "Policy development, risk assessments, and security strategy",
      icon: FileCheck,
      color: "text-atoro-blue",
      position: "bottom-left"
    },
    {
      id: "compliance",
      title: "Compliance",
      description: "ISO 27001, SOC 2, GDPR, and other regulatory frameworks",
      icon: Users,
      color: "text-atoro-teal",
      position: "bottom-right"
    }
  ];

  const handlePillarClick = (id: string) => {
    setActivePillar(id);
  };

  // Define the positions for each pillar in the layout
  const getPositionClass = (position: string) => {
    switch (position) {
      case "top": return "md:col-span-2 md:col-start-2";
      case "bottom-left": return "md:col-span-2 md:col-start-1";
      case "bottom-right": return "md:col-span-2 md:col-start-3";
      default: return "";
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          const isActive = activePillar === pillar.id;
          
          return (
            <div 
              key={pillar.id}
              className={cn(
                "bg-white border rounded-lg p-6 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer",
                getPositionClass(pillar.position),
                isActive ? "border-l-4 border-l-atoro-green" : "border-gray-200"
              )}
              onClick={() => handlePillarClick(pillar.id)}
            >
              <div className="hexagon-content">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                  <Icon className={`h-8 w-8 ${pillar.color}`} />
                </div>
                <p className="text-gray-600 mb-4">{pillar.description}</p>
                
                <div className="mt-4">
                  <ul className="space-y-2">
                    {pillar.id === "security-operations" && (
                      <>
                        <li className="flex items-center gap-2">
                          <CodeXml className="h-4 w-4 text-atoro-green" />
                          <span className="text-sm">Vulnerability Management</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CodeXml className="h-4 w-4 text-atoro-green" />
                          <span className="text-sm">Security Monitoring</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CodeXml className="h-4 w-4 text-atoro-green" />
                          <span className="text-sm">Incident Response</span>
                        </li>
                      </>
                    )}
                    
                    {pillar.id === "governance" && (
                      <>
                        <li className="flex items-center gap-2">
                          <CodeXml className="h-4 w-4 text-atoro-blue" />
                          <span className="text-sm">Policy Management</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CodeXml className="h-4 w-4 text-atoro-blue" />
                          <span className="text-sm">Risk Assessment</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CodeXml className="h-4 w-4 text-atoro-blue" />
                          <span className="text-sm">Security Roadmap</span>
                        </li>
                      </>
                    )}
                    
                    {pillar.id === "compliance" && (
                      <>
                        <li className="flex items-center gap-2">
                          <CodeXml className="h-4 w-4 text-atoro-teal" />
                          <span className="text-sm">SOC 2 Certification</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CodeXml className="h-4 w-4 text-atoro-teal" />
                          <span className="text-sm">ISO 27001 Certification</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CodeXml className="h-4 w-4 text-atoro-teal" />
                          <span className="text-sm">GDPR Compliance</span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicePillars;

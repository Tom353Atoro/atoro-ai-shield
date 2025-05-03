
import React, { useState } from 'react';
import { Shield, FileCheck, Users, Lock, CodeXml } from 'lucide-react';

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
  
  const connections = [
    {
      id: "ops-gov",
      from: "security-operations",
      to: "governance",
      className: "cyber-privacy",
      iconClassName: "cyber-privacy-icon"
    },
    {
      id: "gov-comp",
      from: "governance",
      to: "compliance",
      className: "privacy-ai",
      iconClassName: "privacy-ai-icon"
    },
    {
      id: "ops-comp",
      from: "security-operations",
      to: "compliance",
      className: "cyber-ai",
      iconClassName: "cyber-ai-icon"
    }
  ];

  const handlePillarClick = (id: string) => {
    setActivePillar(id);
  };

  const getConnectionClasses = (connection: any) => {
    const isActive = 
      connection.from === activePillar || 
      connection.to === activePillar;
    
    return `connection-line ${connection.className} ${isActive ? 'active' : ''}`;
  };

  // Define the positions for each pillar in the honeycomb layout
  const getPositionClass = (position: string) => {
    switch (position) {
      case "top": return "hexagon-top";
      case "bottom-left": return "hexagon-bottom-left";
      case "bottom-right": return "hexagon-bottom-right";
      default: return "";
    }
  };

  return (
    <div className="honeycomb-container">
      <div className="honeycomb">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          const isActive = activePillar === pillar.id;
          
          return (
            <div 
              key={pillar.id}
              className={`hexagon ${getPositionClass(pillar.position)} ${isActive ? 'active' : ''}`}
              onClick={() => handlePillarClick(pillar.id)}
            >
              <div className="hexagon-content">
                <div>
                  <Icon className={`h-10 w-10 ${pillar.color} hexagon-icon`} />
                  <h3 className="text-2xl font-bold mt-8 mb-4">{pillar.title}</h3>
                  <p className="text-gray-600">{pillar.description}</p>
                </div>
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
        
        {/* Connection lines */}
        {connections.map((connection) => (
          <div 
            key={connection.id} 
            className={getConnectionClasses(connection)}
            aria-hidden="true"
          >
            <div className={`connection-icon ${connection.iconClassName}`}>
              <CodeXml className="h-4 w-4 text-atoro-teal" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePillars;

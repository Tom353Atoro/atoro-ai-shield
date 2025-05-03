
import React from 'react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/badge';
import TeamMemberCard from '@/components/services/TeamMemberCard';

const TeamSection = () => {
  // Team members data
  const teamMembers = [{
    name: "Alex Morgan",
    title: "Lead Security Architect",
    photo: "/lovable-uploads/team-member-1.png",
    credentials: "CISSP, CISM, 15+ years in enterprise security"
  }, {
    name: "Sophia Chen",
    title: "Compliance Specialist",
    photo: "/lovable-uploads/team-member-2.png",
    credentials: "ISO 27001 LA, CISA, Former Big 4 Auditor"
  }, {
    name: "Marcus Johnson",
    title: "Penetration Test Lead",
    photo: "/lovable-uploads/team-member-3.png",
    credentials: "OSCP, CEH, 10+ years in offensive security"
  }];
  
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <Badge className="mb-2 bg-atoro-teal/10 text-atoro-teal">Meet Your Team</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Security Experts at Your Service</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Experienced professionals with the specialized skills you need
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {teamMembers.map((member, index) => <TeamMemberCard key={index} member={member} />)}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg font-medium mb-4">Certifications our team holds:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="text-sm py-1 px-3">CISSP</Badge>
            <Badge className="text-sm py-1 px-3">CISM</Badge>
            <Badge className="text-sm py-1 px-3">ISO 27001 LA</Badge>
            <Badge className="text-sm py-1 px-3">CISA</Badge>
            <Badge className="text-sm py-1 px-3">OSCP</Badge>
            <Badge className="text-sm py-1 px-3">CEH</Badge>
            <Badge className="text-sm py-1 px-3">AWS Security Specialist</Badge>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TeamSection;

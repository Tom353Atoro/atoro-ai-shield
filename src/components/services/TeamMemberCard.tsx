
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface TeamMember {
  name: string;
  title: string;
  photo: string;
  credentials: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-[1/1] overflow-hidden">
        <img 
          src={member.photo || "/placeholder.svg"} 
          alt={member.name}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold">{member.name}</h3>
        <p className="text-atoro-teal font-medium mb-3">{member.title}</p>
        <p className="text-gray-600 text-sm">{member.credentials}</p>
      </CardContent>
    </Card>
  );
};

export default TeamMemberCard;

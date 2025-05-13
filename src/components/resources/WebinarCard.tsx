
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Video, ExternalLink } from 'lucide-react';

interface WebinarCardProps {
  id: number | string;
  title: string;
  date: string;
  presenter: string;
  description: string;
  thumbnail?: string;
  recordingUrl?: string;
  time?: string;
}

const WebinarCard: React.FC<WebinarCardProps> = ({
  id,
  title,
  date,
  presenter,
  description,
  thumbnail,
  recordingUrl,
  time
}) => {
  // For upcoming webinars (with time but no recording)
  if (time && !recordingUrl) {
    return (
      <Card key={id} className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col">
        <CardContent className="p-6 flex-grow flex flex-col">
          <div>
            <div className="font-bold mb-1">{date}</div>
            <div className="text-sm text-gray-500 mb-3">{time}</div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600 mb-3">{description}</p>
            <div className="text-sm font-medium mb-4">
              Presenter: {presenter}
            </div>
          </div>
          <div className="mt-auto">
            <Button className="w-full bg-atoro-teal hover:bg-atoro-teal/90">
              Register Now
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }
  
  // For past webinars (with recording)
  return (
    <Card key={id} className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={thumbnail || "/lovable-uploads/62277257-f565-473b-943c-a6746c4c657b.jpg"} 
          alt={title} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
            <Video className="mr-2 h-5 w-5" />
            Watch Recording
          </Button>
        </div>
      </div>
      <CardContent className="p-6 flex-grow flex flex-col">
        <div>
          <div className="text-sm text-gray-500 mb-2">{date}</div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="text-sm font-medium mb-4">
            Presented by: {presenter}
          </div>
        </div>
        <div className="mt-auto">
          <Button variant="link" className="p-0 text-atoro-blue hover:text-atoro-teal" asChild>
            <a href={recordingUrl}>
              Watch Recording
              <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default WebinarCard;

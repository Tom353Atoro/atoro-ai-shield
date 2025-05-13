
import React from 'react';
import { Container } from '@/components/ui/Container';
import { Logos3 } from '@/components/ui/logos3';
import { cn } from '@/lib/utils';
import { ClientLogoItem } from '@/types';

interface ClientLogosProps {
  logos: ClientLogoItem[];
  title?: string;
  description?: string;
  bgColor?: string;
  className?: string;
}

const ClientLogos: React.FC<ClientLogosProps> = ({
  logos,
  title = "Trusted by Leading Organizations",
  description = "Companies that rely on our services",
  bgColor = "bg-gray-50",
  className
}) => {
  return (
    <section className={cn(bgColor, "py-12", className)}>
      <Container>
        <Logos3
          heading={title}
          description={description}
          logos={logos}
          bgColor={bgColor}
        />
      </Container>
    </section>
  );
};

export default ClientLogos;

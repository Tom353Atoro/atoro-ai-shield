
import React from 'react';
import CertificationLogos from '@/components/shared/CertificationLogos';

const CertificationSection = () => {
  return (
    <section className="py-16 bg-white">
      <CertificationLogos 
        title="Industry-Standard Certifications" 
        description="Our security practices and services are backed by industry-recognized certifications."
        className="bg-white" 
      />
    </section>
  );
};

export default CertificationSection;

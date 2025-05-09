
// This file now re-exports SectionWrapper as ServiceSectionWrapper for backward compatibility
// New components should use SectionWrapper directly

import React from 'react';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { type SectionWrapperProps } from '@/components/shared/SectionWrapper';

// Re-export the SectionWrapper component as ServiceSectionWrapper
const ServiceSectionWrapper: React.FC<SectionWrapperProps> = (props) => {
  console.warn('ServiceSectionWrapper is deprecated, use SectionWrapper instead');
  return <SectionWrapper {...props} />;
};

export default ServiceSectionWrapper;

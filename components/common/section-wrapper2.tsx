'use client';

import React from 'react';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

/**
 * SectionContainer - Ensures consistent alignment with navbar
 * 
 * Usage:
 * <SectionContainer>
 *   <YourContent />
 * </SectionContainer>
 * 
 * Props:
 * - children: Content to wrap
 * - className: Additional Tailwind classes
 * - fullWidth: If true, uses full viewport width (for backgrounds)
 */
const SectionContainer: React.FC<SectionContainerProps> = ({ 
  children, 
  className = '',
  fullWidth = false 
}) => {
  if (fullWidth) {
    return (
      <div className={className}>
        <div className="mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 lg:pt-16 max-w-[67rem]">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={`max-w-[67rem] mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

export default SectionContainer;
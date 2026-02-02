'use client';

import React from 'react';
// import Image from 'next/image';

const HowItWorksSection = () => {
//   const steps = [
//     {
//       id: 1,
//       title: 'Connect Your CRM',
//       description: 'Securely connects to your CRM and supporting GTM systems',
//       icon: '/assets/icons/database-icon.svg', // Placeholder path
//       position: 'left',
//     },
//     {
//       id: 2,
//       title: 'Ingest Revenue Data',
//       description: 'Accounts, contacts, opportunities, and signals update continuously',
//       icon: '/assets/icons/cloud-icon.svg', // Placeholder path
//       position: 'bottom',
//     },
//     {
//       id: 3,
//       title: 'Apply Intelligence',
//       description: 'Calculate signals, clean data, enrich records, and add context',
//       icon: '/assets/icons/sparkles-icon.svg', // Placeholder path
//       position: 'middle',
//     },
//     {
//       id: 4,
//       title: 'Deliver Intelligence',
//       description: 'Insights appear directly inside CRM, outreach tools, and dashboards',
//       icon: '/assets/icons/target-icon.svg', // Placeholder path
//       position: 'top-right',
//     },
//   ];

  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-dark mb-4 sm:mb-6">
            How Pipeline Works
          </h2>
          <p className="text-lg sm:text-xl text-text-light max-w-3xl mx-auto">
            A simple platform that turns revenue data into actionable intelligence
          </p>
        </div>

        {/* Flow Diagram */}
        <div className="relative">
          
          {/* Background Flow Line - Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Replace with actual SVG path/image */}
            <div className="relative w-full h-full max-w-5xl">
              <svg 
                viewBox="0 0 1200 600" 
                className="w-full h-full opacity-30"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Purple flowing line - placeholder path */}
                <path
                  d="M 100 300 Q 300 450, 500 500 T 900 350 Q 1000 250, 1100 200"
                  stroke="url(#purpleGradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="#7C3AED" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#6D28D9" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
              </svg>
              {/* Note: Replace this SVG with actual image: */}
              {/* <Image src="/assets/flow-line.svg" alt="" fill className="object-contain" /> */}
            </div>
          </div>

          {/* Steps Grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-x-20 lg:gap-y-20">
            
            {/* Step 1 - Top Left */}
            <div className="flex flex-col items-start">
              <div className="flex items-start gap-4 mb-4">
                {/* Icon Container */}
                <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-purple-50 rounded-2xl flex items-center justify-center">
                  {/* Placeholder - Replace with actual icon */}
                  <div className="w-8 h-8 bg-gradient-purple rounded-lg opacity-80"></div>
                  {/* <Image src="/assets/icons/database-icon.svg" alt="" width={32} height={32} /> */}
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-text-dark mb-2">
                Connect Your CRM
              </h3>
              <p className="text-base sm:text-lg text-text-light leading-relaxed">
                Securely connects to your CRM and supporting GTM systems
              </p>
            </div>

            {/* Step 4 - Top Right */}
            <div className="flex flex-col items-start md:items-end md:text-right">
              <div className="flex items-start gap-4 mb-4 md:flex-row-reverse">
                <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-purple-50 rounded-2xl flex items-center justify-center">
                  <div className="w-8 h-8 bg-gradient-purple rounded-lg opacity-80"></div>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-text-dark mb-2">
                Deliver Intelligence
              </h3>
              <p className="text-base sm:text-lg text-text-light leading-relaxed">
                Insights appear directly inside CRM, outreach tools, and dashboards
              </p>
            </div>

            {/* Step 2 - Bottom Left */}
            <div className="flex flex-col items-start">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-purple-50 rounded-2xl flex items-center justify-center">
                  <div className="w-8 h-8 bg-gradient-purple rounded-lg opacity-80"></div>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-text-dark mb-2">
                Ingest Revenue Data
              </h3>
              <p className="text-base sm:text-lg text-text-light leading-relaxed">
                Accounts, contacts, opportunities, and signals update continuously
              </p>
            </div>

            {/* Step 3 - Bottom Right */}
            <div className="flex flex-col items-start md:items-end md:text-right">
              <div className="flex items-start gap-4 mb-4 md:flex-row-reverse">
                <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-purple-50 rounded-2xl flex items-center justify-center">
                  <div className="w-8 h-8 bg-gradient-purple rounded-lg opacity-80"></div>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-text-dark mb-2">
                Apply Intelligence
              </h3>
              <p className="text-base sm:text-lg text-text-light leading-relaxed">
                Calculate signals, clean data, enrich records, and add context
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;
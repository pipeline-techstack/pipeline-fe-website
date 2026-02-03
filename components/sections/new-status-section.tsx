'use client';

import React from 'react';
import {Inter} from 'next/font/google'

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const StatsSection = () => {
  const stats = [
    {
      value: '3x',
      label: 'Fast Planning Cycle',
    },
    {
      value: '90%',
      label: 'CRM Data Accuracy',
    },
    {
      value: '10+hrs',
      label: 'Saved Weekly per Team',
    },
  ];

  return (
    <section className="bg-white py-10 border-[#C4C4C4]/50 border-b w-full">
      <div className="mx-auto px-6 sm:px-8 lg:px-12 max-w-4xl">
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
            >
              {/* Value */}
              <h3 className={`${inter.className} antialiased text-3xl font-bold text-text-dark inter`}>
                {stat.value}
              </h3>
              
              {/* Label */}
              <p className="font-normal text-text-light text-base sm:text-lg">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
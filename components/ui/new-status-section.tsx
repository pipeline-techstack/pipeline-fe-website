'use client';

import React from 'react';

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
    <section className="w-full bg-white py-10 shadow-sm">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
            >
              {/* Value */}
              <h3 className="text-3xl font-bold text-text-dark">
                {stat.value}
              </h3>
              
              {/* Label */}
              <p className="text-base sm:text-lg text-text-light font-normal">
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
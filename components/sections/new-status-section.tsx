"use client";

import React from "react";
import { Inter } from "next/font/google";
import { CountAnimation } from "../ui/count-animation";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const StatsSection = () => {
  const stats = [
    {
      value: 3,
      text: "x",
      label: "Fast Planning Cycle",
    },
    {
      value: 90,
      text: "%",
      label: "CRM Data Accuracy",
    },
    {
      value: 10,
      text: "+hrs",
      label: "Saved Weekly per Team",
    },
  ];

  return (
    <section className="bg-white py-10 border-[#C4C4C4]/50 border-b w-full">
      <div className="mx-auto px-6 sm:px-8 lg:px-12 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              {/* Value */}
              <div
                className={`${inter.className} antialiased text-3xl font-bold text-text-dark inter`}
              >
                <div className="flex justify-center">
                  <CountAnimation number={stat.value} className="" />
                  {stat.text}
                </div>
              </div>

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

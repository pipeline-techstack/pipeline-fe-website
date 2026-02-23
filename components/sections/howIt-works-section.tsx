"use client";

import React from "react";
import HeaderOrIntro from "../common/header-intro";
import SectionContainer from "../common/section-wrapper2";
import { HowItWorksSectionProps } from "@/lib/types";
import Image from "next/image";



export default function HowItWorksSection({
  heading,
  subheading,
  steps,
}: HowItWorksSectionProps) {
  return (
    <SectionContainer className="bg-[#FAFAFA] pb-24" fullWidth>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <HeaderOrIntro
            title={{
              text: heading,
              highlight: " Works",
            }}
            subtitle={
              <>
                <span className="block">{subheading}</span>
                <span className="block mt-1"></span>
              </>
            }
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-[#D4C2FF] 
              bg-white p-8 transition-all duration-300
              hover:shadow-purple-glow hover:-translate-y-1"
            >
              {/* Top Row */}
              <div className="flex items-start gap-4 mb-6">
                {/* Number Badge */}
                <Image
                  className="w-15 h-12 rounded-xl flex items-center justify-center text-white font-semibold text-lg  bg-gradient-purple transition-all duration-300 group-hover:bg-gradient-purple-hover"
                  src={step.img}
                  alt="no."
                />

                <h3 className="text-lg font-semibold text-text-dark leading-snug">
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-text-light text-sm mb-6">{step.description}</p>

              {/* Bullets */}
              <ul className="space-y-2 text-sm text-text-light">
                {step.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-[#6d6b7c]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

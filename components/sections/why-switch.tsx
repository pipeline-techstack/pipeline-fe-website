"use client";

import React from "react";
import {
  AlertTriangle,
  DollarSign,
  Ban,
  Globe,
  WandSparkles,
} from "lucide-react";
import SectionCard from "../common/sections/section-card";
import HeaderOrIntro from "../common/header-intro";
import SectionContainer from "../common/sections/section-container";
import Logo from "../common/logo";

const WhySwitch = () => {
  const items = [
    {
      icon: <AlertTriangle className="size-6" />,
      title: "Enrichment tools got too complex to operate",
    },
    {
      icon: <DollarSign className="size-6" />,
      title: "Credit-based pricing got too expensive at scale",
    },
    {
      icon: <Ban className="size-6" />,
      title: "Bad data kept leaking into revenue decisions",
    },
  ];

  return (
    <SectionContainer>
      <div>
        {/* Header */}
        <HeaderOrIntro
          badge={{
            text: "What's changed",
            icon: <Globe className="size-4" />,
          }}
          title={{
            text: "Why teams switch to Pipeline AI",
            highlight: "Pipeline AI",
          }}
        />

        {/* Cards */}
        <div className="gap-6 grid grid-cols-1 lg:grid-cols-3">
          {items.map((item, index) => (
            <SectionCard key={index} icon={item.icon} title={item.title} />
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-center items-center mt-12 text-center">
          <div className="flex justify-center items-center gap-2">
            <Logo width={40} height={40} className="mb-0" />
            <p className="ml-2 font-semibold text-gray-900 text-2xl">
              <span className="text-primary">Pipeline AI</span> fixes all three.
            </p>
            <WandSparkles className="mx-3 size-4 text-gray-500" />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default WhySwitch;

"use client";

import React from "react";
import SectionContainer from "../common/sections/section-container";
import HeaderOrIntro from "../common/header-intro";
import { AlertTriangle, Clock, Sparkle, Workflow } from "lucide-react";
import SectionCard from "../common/sections/section-card";
import Marquee from "react-fast-marquee";

const Solutions = () => {
  const items = [
    {
      icon: <Sparkle className="size-6" />,
      title: "Real-time enrichment",
      description: "Keeps active records fresh as teams work them.",
    },
    {
      icon: <Clock className="size-6" />,
      title: "Scheduled enrichment",
      description: "Automatically refreshes data on a defined cadence.",
    },
    {
      icon: <AlertTriangle className="size-6" />,
      title: "AI-driven scoring",
      description: "Prioritizes accounts and contacts most likely to convert.",
    },
    {
      icon: <Workflow className="size-6" />,
      title: "Automated workflows",
      description: "Continuous workflows across your CRM and GTM stack.",
    },
  ];

  return (
    <SectionContainer>
      <HeaderOrIntro
        title={{
          text: "Pipeline AI is not a one-time cleanup tool",
          highlight: "cleanup tool",
        }}
        subtitle="It is a continuous revenue data system."
      />

      <div className="relative mt-12 w-full overflow-hidden">
        <Marquee
          speed={40}
          pauseOnHover
          gradient
          gradientWidth={80}
          gradientColor="rgb(255,255,255)"
        >
          {items.map((item, index) => (
            <div key={index} className="mx-4 w-[280px] sm:w-[300px]">
              <SectionCard
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </SectionContainer>
  );
};

export default Solutions;

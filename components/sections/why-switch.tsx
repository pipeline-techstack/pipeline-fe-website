"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
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
      <Card className="shadow-none border-none">
        <CardContent className="p-0">
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
            <p className="font-semibold text-gray-900 text-2xl">
              <span className="text-primary">Pipeline AI</span> fixes all three.
            </p>
            <WandSparkles className="mx-3 size-4 text-gray-500" />
          </div>
        </CardContent>
      </Card>
    </SectionContainer>
  );
};

export default WhySwitch;

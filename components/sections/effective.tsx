"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Search, Building2, FastForward } from "lucide-react";

import enrichLeftImage from "../../assets/effectiveImages/enrich-left.png";
import enrichRightImage from "../../assets/effectiveImages/enrich-right.png";
import researchLeftImage from "../../assets/effectiveImages/research-left.png";
import researchRightImage from "../../assets/effectiveImages/research-right.png";
import enterLeftImage from "../../assets/effectiveImages/enter-left.png";
import enterRightImage from "../../assets/effectiveImages/enter-right.png";

type TabId = "enrichment" | "research" | "enterprise";

interface ContentItem {
  title: string;
  description: string;
  rightImage: StaticImageData;
  leftImage: StaticImageData;
  quote?: string;
}

const EffectiveSection = () => {
  const [activeTab, setActiveTab] = useState<TabId>("research");

  const tabs = [
    {
      id: "research" as TabId,
      label: "RESEARCH",
      icon: <Search className="size-4" />,
    },
    {
      id: "enterprise" as TabId,
      label: "ENTERPRISE",
      icon: <Building2 className="size-4" />,
    },
    {
      id: "enrichment" as TabId,
      label: "ENRICHMENT",
      icon: <Database className="size-4" />,
    },
  ];

  const content: Record<TabId, ContentItem> = {
    research: {
      title: "LLM-powered deep research",
      description:
        "Pipeline uses advanced LLM reasoning, inspired by Perplexity and OpenAI’s RAG framework, to analyze public signals and surface strategic, non-obvious insights that help reps lead with relevance.",
      quote:
        "This company recently hired a Director of RevOps with Outreach experience, suggesting a motion shift from Salesloft to Outreach.",
      rightImage: researchRightImage,
      leftImage: researchLeftImage,
    },
    enterprise: {
      title: "Enterprise ready delivery",
      description:
        "Every insight, contact, and personalized message is formatted and pushed directly into your existing systems — including Outreach, Salesloft, Gong Engage, and Salesforce. No copy-paste. No workflow disruption. Just execution-ready content where your reps already work.",
      rightImage: enterRightImage,
      leftImage: enterLeftImage,
    },
    enrichment: {
      title: "Best-in-class enrichment",
      description:
        "Our 15-source enrichment waterfall provides unmatched accuracy across emails and phone numbers, validated in real time at every layer. This leads to higher connect rates, fewer bounces, and more coverage — especially on leads other tools miss.",
      rightImage: enrichRightImage,
      leftImage: enrichLeftImage,
    },
  };

  const current = content[activeTab];

  return (
    <div className="bg-gray-50 w-full">
      <div className="bg-gradient-to-br from-gray-300 via-purple-500/40 to-primary p-[1px] rounded-3xl">
        <Card className="bg-white/85 backdrop-blur-md border border-white/10 rounded-[calc(theme(borderRadius.3xl)-3px)]">
          <CardContent className="p-4 sm:p-6 lg:p-12">
            {/* Header */}
            <div className="mb-8 sm:mb-12 text-center">
              <Badge
                variant="outline"
                className="bg-white mb-6 px-4 py-2 border-primary/40 rounded-full font-medium text-primary uppercase"
              >
                <FastForward className="mr-2 size-6" />
                <span> Precision</span>
              </Badge>
              <h2 className="font-bold text-gray-900 text-2xl sm:text-3xl lg:text-4xl">
                What makes this <span className="text-primary">effective?</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-gray-600 text-sm sm:text-base">
                Automated enrichment, AI-driven insights, and seamless delivery for smarter outreach.
              </p>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-8 sm:mb-12">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? "bg-primary text-white shadow"
                      : "bg-white/80 text-gray-600 hover:bg-gray-200 border"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
              {/* Left Column */}
              <div className="lg:col-span-4 w-full">
                <div className="bg-white/70 p-4 sm:p-6 border rounded-2xl">
                  <span className="flex items-center">
                    {tabs.find((tab) => tab.id === activeTab)?.icon}
                  </span>
                  <h3 className="my-3 sm:my-4 font-semibold text-gray-900 text-lg sm:text-2xl">
                    {current.title}
                  </h3>
                  <p className="mb-3 sm:mb-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                    {current.description}
                  </p>
                  {activeTab === "research" && current.quote && (
                    <p className="text-gray-700 text-sm sm:text-base italic">
                      &ldquo;{current.quote}&rdquo;
                    </p>
                  )}
                </div>
                <Image
                  src={current.leftImage}
                  alt={`${current.title} process`}
                  className="my-4 rounded-xl w-full object-contain"
                  width={500}
                  height={300}
                  priority
                />
              </div>
              {/* Right Column */}
              <div className="lg:col-span-8 w-full">
                <Image
                  src={current.rightImage}
                  alt={`${current.title} screenshot`}
                  className="rounded-xl w-full object-contain"
                  width={1200}
                  height={800}
                  priority
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EffectiveSection;

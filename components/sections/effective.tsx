"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Search, Building2 } from "lucide-react";

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
  features: string[];
  rightImage: StaticImageData;
  leftImage: StaticImageData;
  quote?: string;
}

const EffectiveSection = () => {
  const [activeTab, setActiveTab] = useState<TabId>("enrichment");

  const tabs = [
    {
      id: "enrichment" as TabId,
      label: "ENRICHMENT",
      icon: <Database className="w-4 h-4" />,
    },
    {
      id: "research" as TabId,
      label: "RESEARCH",
      icon: <Search className="w-4 h-4" />,
    },
    {
      id: "enterprise" as TabId,
      label: "ENTERPRISE",
      icon: <Building2 className="w-4 h-4" />,
    },
  ];

  const content: Record<TabId, ContentItem> = {
    enrichment: {
      title: "Best-in-class enrichment",
      description:
        "Our 15-provider waterfall gives you unmatched phone and email accuracy, with real-time validation at every layer.",
      features: ["Cross check with 15 sources", "97% Accuracy"],
      rightImage: enrichRightImage,
      leftImage: enrichLeftImage,
    },
    research: {
      title: "LLM-powered deep research",
      description:
        "Inspired by Perplexity and OpenAI's Retrieval-Augmented Generation (RAG), Pipeline performs reasoning across live public data to derive non-obvious insights like:",
      quote:
        "This company recently hired a Director of RevOps with Outreach experience, suggesting a motion shift from Salesloft to Outreach.",
      features: ["Signal fetch", "AI model", "Data Generation"],
      rightImage: researchRightImage,
      leftImage: researchLeftImage,
    },
    enterprise: {
      title: "Enterprise ready delivery",
      description:
        "Output is formatted and delivered into your existing systems—Outreach, Gong Engage, Salesforce—ready for action.",
      features: ["CRM integrate", "AI process shown", "Real time update"],
      rightImage: enterRightImage,
      leftImage: enterLeftImage,
    },
  };

  const current = content[activeTab];

  return (
    <div className="bg-gray-50 px-6 md:px-20 xl:px-48 py-16">
      <div className="bg-gradient-to-br from-gray-300/70 via-secondary to-primary/70 shadow-lg p-[1px] rounded-3xl">
        <Card className="bg-white/85 backdrop-blur-md border border-white/10 rounded-[calc(theme(borderRadius.3xl)-3px)]">
          <CardContent className="p-8 md:p-12">
            {/* Header */}
            <div className="text-center mb-12">
              <Badge className="bg-white mb-4 px-4 py-2 border-primary/40 rounded-full text-primary uppercase font-medium">
                ▶▶ Precision
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900">
                What makes this{" "}
                <span className="text-blue-600">effective?</span>
              </h2>
              <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
                Automated enrichment, AI-driven insights, and seamless delivery for smarter outreach.
              </p>
            </div>

            {/* Tabs */}
            <div className="flex justify-center gap-3 flex-wrap mb-12">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? "bg-blue-600 text-white shadow"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Main Grid */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <h3 className="text-2xl font-semibold flex items-center gap-2 text-gray-900 mb-4">
                  {tabs.find((tab) => tab.id === activeTab)?.icon}
                  {current.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {current.description}
                </p>

                {activeTab === "research" && current.quote && (
                  <div className="bg-gray-50 p-5 border-l-4 border-blue-600 rounded-xl shadow-sm mb-4">
                    <p className="italic text-gray-700">&ldquo;{current.quote}&rdquo;</p>
                  </div>
                )}

                <div className="flex flex-wrap gap-3 mb-6">
                  {current.features.map((feature, idx) => (
                    <Badge key={idx} className="bg-black text-white px-4 py-2 rounded-full text-sm">
                      {feature}
                    </Badge>
                  ))}
                </div>

                <Image
                  src={current.leftImage}
                  alt={`${current.title} process`}
                  className="rounded-xl shadow-md w-full max-w-md"
                />
              </div>

              {/* Right Image */}
              <div className="flex justify-center">
                <Image
                  src={current.rightImage}
                  alt={`${current.title} screenshot`}
                  className="rounded-xl shadow-xl w-full max-w-lg"
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

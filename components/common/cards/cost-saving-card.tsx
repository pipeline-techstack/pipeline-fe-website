"use client";

import React from "react";
import { CheckCircle, TrendingDown, DollarSign, BarChart3 } from "lucide-react";
import InfoCard from "./info-cards";
import IconList from "../icons/icon-list";
import Image from "next/image";
import costEffectiveImg from "../../../assets/cost-effective.png";
import costSavingLogos from "../../../assets/save-money-logos.png";

const CostSavingCards = () => {
  return (
    <div className="space-y-6 mt-12">
      {/* Top grouped card */}
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
        <InfoCard>
          <div>
            <h3 className="mb-4 font-semibold text-lg">On a 500k-record CRM</h3>

            <IconList
              items={[
                {
                  icon: <CheckCircle className="w-4 h-4" />,
                  text: "30–50% of records are typically outdated or unusable",
                },
                {
                  icon: <CheckCircle className="w-4 h-4" />,
                  text: "Traditional enrichment tools still charge for them",
                },
                {
                  icon: <CheckCircle className="w-4 h-4" />,
                  text: "Waste compounds month after month",
                },
              ]}
            />
          </div>
        </InfoCard>
        <InfoCard>
          <div>
            <h3 className="mb-4 font-semibold text-lg">
              Pipeline reduces enrichment volume
            </h3>

            <IconList
              items={[
                {
                  icon: <CheckCircle className="w-4 h-4" />,
                  text: "Deduplicating accounts and contacts",
                },
                {
                  icon: <CheckCircle className="w-4 h-4" />,
                  text: "Filtering out non-workable records",
                },
                {
                  icon: <CheckCircle className="w-4 h-4" />,
                  text: "Prioritizing what actually converts",
                },
              ]}
            />
          </div>
        </InfoCard>
      </div>

      {/* Bottom wide card */}
      <InfoCard>
        <div className="gap-6 grid grid-cols-1 lg:grid-cols-2">
          {/* Mock UI */}
          <Image
            src={costEffectiveImg}
            alt="Cost saving"
            width={500}
            height={500}
            className="mx-auto"
          />

          {/* Business impact */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="mb-4 font-semibold text-lg">Business impact</h3>

              <IconList
                items={[
                  {
                    icon: <TrendingDown className="w-4 h-4" />,
                    text: "50%+ reduction in enrichment spend",
                  },
                  {
                    icon: <DollarSign className="w-4 h-4" />,
                    text: "Lower SaaS costs without sacrificing quality",
                  },
                  {
                    icon: <BarChart3 className="w-4 h-4" />,
                    text: "Predictable costs as your CRM grows",
                  },
                ]}
              />
            </div>
            <div>
              <p className="mb-1">Pipeline AI reduces spend on</p>
              <Image
                src={costSavingLogos}
                alt="Cost saving"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </InfoCard>
    </div>
  );
};

export default CostSavingCards;

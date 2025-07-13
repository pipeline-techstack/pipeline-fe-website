"use client";
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Navigation,
  MessageSquare,
  SquareUser,
  WandSparkles,
} from "lucide-react";

const Solutions = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const solutions = [
    {
      icon: <WandSparkles className="size-6 text-primary/54" />,
      title: "Deep Research & Intelligent Scoring",
      description:
        "Pipeline scrapes job boards, LinkedIn, company websites, and other public data sources to uncover buying signals — including hiring activity, tech stack usage, team changes, product launches, GTM shifts, and funding events. Accounts and contacts are scored by fit and intent, giving your team a prioritized list with AI-generated insight summaries that would take hours to compile manually.",
    },
    {
      icon: <MessageSquare className="size-6 text-primary/54" />,
      title: "Personalized Multi-Channel Messaging",
      description:
        "Pipeline auto-generates personalized outreach based on each prospect’s live context — like job changes, tech stack, or team expansion and pushes it directly into your sales engagement platform, such as Outreach, Gong Engage, or Salesforce. Messaging stays relevant, and reps stay focused on high-intent selling.",
    },
    {
      icon: <SquareUser className="size-6 text-primary/54" />,
      title: "Contact Enrichment",
      description:
        "We use a 15-source waterfall to deliver verified emails and phone numbers for your key prospects — giving you more connects, fewer bounces, and better coverage than legacy databases like ZoomInfo.",
    },
  ];

  const toggleCard = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 w-full py-8 sm:py-12">
      <div className="bg-gradient-to-br from-gray-300 via-purple-500/40 to-primary p-[1px] rounded-3xl">
        <Card className="bg-white/85 backdrop-blur-md px-4 sm:px-6 lg:px-10 py-8 border border-white/10 rounded-[calc(theme(borderRadius.3xl)-3px)]">
          <CardContent className="p-0">
            {/* Header */}
            <div className="mb-10 sm:mb-12 text-center">
              <Badge
                variant="outline"
                className="bg-white mb-6 px-4 py-2 border-primary/40 rounded-full font-medium text-primary uppercase"
              >
                <Navigation className="mr-1 size-4" />
                <span>ACCELERATE</span>
              </Badge>
              <h2 className="mb-2 font-bold text-2xl sm:text-3xl lg:text-4xl">
                <span className="text-primary">Solutions</span>{" "}
                <span className="text-gray-900">we provide</span>
              </h2>
              <p className="mx-auto max-w-4xl text-gray-600 text-base sm:text-lg">
                Our platform handles account research, qualifies prospects, and
                delivers multi-touch personalized outreach all in one
                streamlined workflow, so your team can focus on high-intent
                selling.
              </p>
            </div>

            {/* Solutions Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {solutions.map((solution, index) => {
                const isOpen = openIndex === index;
                const shortText = solution.description.slice(0, 100);

                return (
                  <div
                    key={index}
                    onClick={() => toggleCard(index)}
                    tabIndex={0}
                    className={`space-y-4 bg-white/90 hover:shadow-md p-4 sm:p-5 border border-secondary rounded-lg transition cursor-pointer outline-none focus:ring-2 focus:ring-primary`}
                  >
                    {/* Icon */}
                    <div className="flex justify-center items-center size-8">
                      {solution.icon}
                    </div>

                    {/* Title */}
                    <h3 className="font-semibold text-gray-900 text-lg sm:text-xl text-center">
                      {solution.title}
                    </h3>

                    {/* Description with animation */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out`}
                      style={{
                        maxHeight: isOpen ? 500 : 56, // 56px fits ~2 lines
                        opacity: isOpen ? 1 : 0.85,
                      }}
                    >
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        {isOpen ? solution.description : `${shortText}...`}
                      </p>
                    </div>

                    <span className="block text-center font-medium text-primary text-sm sm:text-base">
                      {isOpen ? "Show less" : "Read more"}
                    </span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Solutions;

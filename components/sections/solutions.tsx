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
      icon: <SquareUser className="size-6 text-primary/54" />,
      title: "Contact enrichment",
      description:
        "We use a 15-provider waterfall to surface the most accurate contact information—emails and phone numbers—for your target buyers. That means fewer bounces, more connects, and better results than static databases like ZoomInfo.",
    },
    {
      icon: <WandSparkles className="size-6 text-primary/54" />,
      title: "Deep research & scoring",
      description:
        "Pipeline scrapes job boards, LinkedIn, and company sites to uncover live buying signals—hiring activity, tech stack usage, budget shifts, go-to-market changes—and scores every account and contact based on fit and intent. You get a prioritized list with AI-generated insight summaries that would take hours to compile manually.",
    },
    {
      icon: <MessageSquare className="size-6 text-primary/54" />,
      title: "Personalized messaging",
      description:
        "Pipeline auto-generates outreach tailored to the contact’s live context—tech stack, team changes, job postings—and pushes it directly into your existing engagement platforms like Outreach, Gong Engage, or Salesforce. Reps stay focused, and outreach stays relevant.",
    },
  ];

  const toggleCard = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 px-6 md:px-20 xl:px-48">
      <div className="bg-gradient-to-br from-gray-300/70 via-secondary to-primary/70 shadow-lg p-[1px] rounded-3xl">
        <Card className="bg-white/85 backdrop-blur-md p-8 border border-white/10 rounded-[calc(theme(borderRadius.3xl)-3px)]">
          <CardContent className="p-0">
            {/* Header */}
            <div className="mb-12">
              <Badge
                variant="outline"
                className="bg-white mb-6 px-4 py-2 border-primary/40 rounded-full font-medium text-primary uppercase"
              >
                <Navigation className="mr-1 size-4" />
                <span> ACCELERATE</span>
              </Badge>
              <h2 className="mb-2 font-bold text-4xl">
                <span className="text-primary">Solutions</span>{" "}
                <span className="text-gray-900">we provide</span>
              </h2>
              <p className="max-w-3xl text-gray-600 text-lg">
                The product automates research, qualification, and personalized
                outreach so sales teams can focus on closing deals — not busy
                work.
              </p>
            </div>

            {/* Solutions Grid */}
            <div className="gap-8 grid md:grid-cols-3">
              {solutions.map((solution, index) => {
                const isOpen = openIndex === index;
                const shortText = solution.description.slice(0, 100);

                return (
                  <div
                    key={index}
                    onClick={() => toggleCard(index)}
                    className="space-y-4 bg-secondary/20 hover:bg-secondary/30 p-4 border border-secondary/25 rounded-lg transition cursor-pointer"
                  >
                    {/* Icon */}
                    <div className="flex justify-center items-center size-8">
                      {solution.icon}
                    </div>

                    {/* Title */}
                    <h3 className="font-medium text-gray-900 text-xl">
                      {solution.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {isOpen ? solution.description : `${shortText}...`}
                    </p>

                    <span className="font-medium text-primary text-sm">
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

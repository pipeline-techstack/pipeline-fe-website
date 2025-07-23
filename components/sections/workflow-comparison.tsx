"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GitBranch, GitBranchPlus } from "lucide-react";

import fragmentedImage from "../../assets/workflow-comparison/fragmented-icons.png";
import unifiedImage from "../../assets/workflow-comparison/unified-icons.png";

type BadgeVariant = "secondary" | "outline" | "default" | "destructive";

interface WorkflowItem {
  badge: {
    icon: React.ReactNode;
    text: string;
    variant: BadgeVariant;
  };
  title: string;
  subtitle: string;
  description: string;
  image: StaticImageData;
  bgColor: string;
  textColor: string;
  subtitleColor: string;
}

const workflows: WorkflowItem[] = [
  {
    badge: {
      icon: <GitBranch className="w-3 h-3" />,
      text: "DETACHED",
      variant: "secondary",
    },
    title: "Fragmented",
    subtitle: "workflow",
    description:
      "Manual research, scattered data, and constant app-switching drag down productivity.",
    image: fragmentedImage,
    bgColor: "bg-white",
    textColor: "text-primary",
    subtitleColor: "text-gray-700",
  },
  {
    badge: {
      icon: <GitBranchPlus className="w-3 h-3" />,
      text: "ATTACHED",
      variant: "outline",
    },
    title: "Unified by",
    subtitle: "Pipeline",
    description:
      "Automate research, validate contacts, and deliver personalized outreach — all in one streamlined platform.",
    image: unifiedImage,
    bgColor: "bg-primary",
    textColor: "text-white",
    subtitleColor: "text-white",
  },
];

const WorkflowComparison = () => {
  return (
    <div className="bg-gray-50 w-full">
      <div className="mx-auto">
        <div className="gap-6 sm:gap-8 grid md:grid-cols-2">
          {workflows.map((workflow, index) => (
            <div
              key={index}
              className={`rounded-3xl p-[1px] ${
                index === 0
                  ? "bg-gradient-to-br from-gray-300 via-purple-500/40 to-primary"
                  : "bg-primary/70"
              }`}
            >
              <Card
                className={`${
                  index === 0
                    ? "bg-white/85 backdrop-blur-md border border-white/10"
                    : "bg-primary/70 text-white border-none"
                } p-6 sm:p-8 h-full rounded-[calc(theme(borderRadius.3xl)-3px)]`}
              >
                <CardContent className="flex flex-col p-0 h-full">
                  {/* Badge */}
                  <div className="mb-4">
                    <Badge
                      variant="outline"
                      className="bg-white mb-4 px-4 py-2 border-primary/40 rounded-full font-medium text-primary uppercase"
                    >
                      {workflow.badge.icon}
                      <span className="ml-1">{workflow.badge.text}</span>
                    </Badge>
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-3 ${workflow.textColor}`}
                  >
                    {workflow.title}{" "}
                    <span className={`font-bold ${workflow.subtitleColor}`}>
                      {workflow.subtitle}
                    </span>
                  </h3>

                  {/* Description */}
                  <p
                    className={`leading-relaxed mb-6 text-sm sm:text-base ${
                      index === 0 ? "text-gray-600" : "text-white"
                    }`}
                  >
                    {workflow.description}
                  </p>

                  {/* Image */}
                  <div className="flex flex-1 justify-center items-center w-full">
                    <Image
                      src={workflow.image}
                      alt={`${workflow.title} ${workflow.subtitle}`}
                      className="mx-auto w-full max-w-[300px] sm:max-w-[350px] h-auto object-contain"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkflowComparison;

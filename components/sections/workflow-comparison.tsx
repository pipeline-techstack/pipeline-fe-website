import React from "react";
import Image, { StaticImageData } from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import fragmentedImage from "../../assets/fragmented-icons.png";
import unifiedImage from "../../assets/unified-icons.png";
import { GitBranch, GitMerge } from "lucide-react";

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
    textColor: "text-blue-600",
    subtitleColor: "text-[#4c4d4e]",
  },
  {
    badge: {
      icon: <GitMerge className="w-3 h-3" />,
      text: "ATTACHED",
      variant: "outline",
    },
    title: "Unified by",
    subtitle: "Pipeline",
    description:
      "Automate research, validate contacts, and deliver personalized outreach — all in one streamlined platform.",
    image: unifiedImage,
    bgColor: "bg-[#4741A6]",
    textColor: "text-white",
    subtitleColor: "text-[#D6D4FF]",
  },
];

const WorkflowComparison = () => {
  return (
    <div className="bg-[#F9FAFF] px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {workflows.map((workflow, index) => (
            <Card
              key={index}
              className={`${workflow.bgColor} border-[#E5E7EB] shadow-sm h-full`}
            >
              <CardContent className="p-6 h-full flex flex-col">
                {/* Badge */}
                <div className="mb-4">
                  <Badge
                    variant={workflow.badge.variant}
                    className={`${
                      index === 0
                        ? "bg-[#F3F4F6] border-[#E5E7EB] text-[#6B7280]"
                        : "bg-white border-[#E0E7FF] text-[#4741A6]"
                    } px-3 py-1 rounded-full text-[10px] font-medium tracking-wide flex items-center`}
                  >
                    {workflow.badge.icon}
                    <span className="ml-1">{workflow.badge.text}</span>
                  </Badge>
                </div>

                {/* Title */}
                <h3
                  className={`text-3xl font-bold leading-tight mb-3 ${workflow.textColor}`}
                >
                  {workflow.title}{" "}
                  <span className={`font-bold ${workflow.subtitleColor}`}>
                    {workflow.subtitle}
                  </span>
                </h3>

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed mb-8 ${
                    index === 0 ? "text-[#6B7280]" : "text-[#E4E2FF]"
                  }`}
                >
                  {workflow.description}
                </p>

                {/* Image */}
                <div className="w-full flex-1 flex items-center justify-center">
                  <Image
                    src={workflow.image}
                    alt={`${workflow.title} ${workflow.subtitle}`}
                    className="mx-auto w-full max-w-[400px] h-auto object-contain"
                  />

                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkflowComparison;
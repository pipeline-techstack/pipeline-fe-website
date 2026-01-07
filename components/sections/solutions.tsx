import React from "react";
import SectionContainer from "../common/sections/section-container";
import HeaderOrIntro from "../common/header-intro";
import {
  AlertTriangle,
  Clock,
  Sparkle,
  WandSparkles,
  Workflow,
} from "lucide-react";
import SectionCard from "../common/sections/section-card";

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
      description:
        "We help design workflows that run continuously across your CRM and GTM stack.",
    },
  ];

  return (
    <SectionContainer>
      <HeaderOrIntro
        badge={{
          text: "WHAT PIPELINE AI DOES",
          icon: <WandSparkles className="size-4" />,
        }}
        title={{
          text: "Pipeline is not a one-time cleanup tool",
        }}
        subtitle="It is a continuous revenue data system."
      />
      <div className="gap-6 grid grid-cols-1 lg:grid-cols-2 px-24">
        {items.map((item, index) => (
          <SectionCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default Solutions;

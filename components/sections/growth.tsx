"use client";

import React from "react";
import {
  Wrench,
  Layers,
  RefreshCcw,
  Filter,
  CheckCircle,
  RotateCcw,
  File,
  Copy,
  Clock,
  Workflow,
  PencilRuler,
  MoonIcon,
  BookCheckIcon,
} from "lucide-react";
import SectionContainer from "../common/sections/section-container";
import ProblemCard from "../common/probem-card";
import HeaderOrIntro from "../common/header-intro";

const Growth = () => {
  return (
    <SectionContainer bgColor="#F5F7FF">
      <HeaderOrIntro
        badge={{
          text: "Friction",
          icon: <File className="size-4" />,
        }}
        title={{
          text: "The core problems with CRM enrichment",
        }}
        subtitle="Complex workflows and credit-heavy pricing make enrichment harder than it should be."
      />

      {/* Cards */}
      <div className="gap-8 grid grid-cols-1 md:grid-cols-2">
        <ProblemCard
          number={1}
          title="Too much complexity"
          problems={[
            {
              icon: <Wrench className="size-4 text-gray-500" />,
              text: "Manual workflows and constant tuning",
            },
            {
              icon: <Layers className="size-4 text-gray-500" />,
              text: "Multiple tools stitched together",
            },
            {
              icon: <RefreshCcw className="size-4 text-gray-500" />,
              text: "Heavy RevOps maintenance",
            },
          ]}
          solutions={[
            {
              icon: <Workflow className="size-4" />,
              text: "Always-on workflows",
            },
            {
              icon: <PencilRuler className="size-4" />,
              text: "Minimal configuration",
            },
            {
              icon: <MoonIcon className="size-4" />,
              text: "Runs quietly in the background",
            },
          ]}
        />

        <ProblemCard
          number={2}
          title="Too expensive at scale"
          problems={[
            {
              icon: <Copy className="size-4 text-orange-600" />,
              text: "You pay for duplicates",
            },
            {
              icon: <Clock className="size-4 text-orange-600" />,
              text: "You pay for outdated records",
            },
            {
              icon: <RotateCcw className="size-4 text-orange-600" />,
              text: "You pay again when data goes stale",
            },
          ]}
          solutions={[
            {
              icon: <Filter className="size-4" />,
              text: "Validate before enriching",
            },
            {
              icon: <CheckCircle className="size-4" />,
              text: "Enrich only what’s workable",
            },
            {
              icon: <BookCheckIcon className="size-4" />,
              text: "Reduce enrichment volume by 50%+",
            },
          ]}
        />
      </div>
    </SectionContainer>
  );
};

export default Growth;

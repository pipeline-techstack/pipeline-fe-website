"use client";

import {
  Wrench,
  Layers,
  RefreshCcw,
  Copy,
  Clock,
  RotateCcw,
  Workflow,
  PencilRuler,
  MoonIcon,
  Filter,
  CheckCircle,
  BookCheckIcon,
} from "lucide-react";

import SectionContainer from "../common/sections/section-container";
import HeaderOrIntro from "../common/header-intro";
import ComparisonCard from "../common/cards/comparision-card";
import VsBadge from "../common/vs-badge";

const Growth = () => {
  return (
    <SectionContainer bgColor="#F5F7FF">
      <HeaderOrIntro
        title={{ text: "How Pipeline AI Is Different", highlight: "Different" }}
        subtitle="A simpler system that runs continuously - without the overhead."
      />

      <div className="relative gap-16 grid grid-cols-1 md:grid-cols-2 mt-12">
        {/* VS */}
        <VsBadge />

        {/* WITHOUT PIPELINE */}
        <ComparisonCard
          title="Enrichment platforms are too complex to manage and too expensive to scale."
          badge="WITHOUT PIPELINE"
          items={[
            {
              icon: <Wrench className="size-4 text-gray-400" />,
              text: "Manual workflows and constant tuning",
            },
            {
              icon: <Layers className="size-4 text-gray-400" />,
              text: "Multiple tools stitched together",
            },
            {
              icon: <RefreshCcw className="size-4 text-gray-400" />,
              text: "Heavy RevOps maintenance",
            },
            {
              icon: <Copy className="size-4 text-gray-400" />,
              text: "You pay for duplicates",
            },
            {
              icon: <Clock className="size-4 text-gray-400" />,
              text: "You pay for outdated records",
            },
            {
              icon: <RotateCcw className="size-4 text-gray-400" />,
              text: "You pay again when data goes stale",
            },
          ]}
        />

        {/* WITH PIPELINE */}
        <ComparisonCard
          variant="right"
          title="Pipeline solves the fragile complexity with quiet, continuous enrichment."
          badge="WITH PIPELINE"
          items={[
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

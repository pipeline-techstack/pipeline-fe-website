import React from "react";
import SectionContainer from "../common/sections/section-container";
import HeaderOrIntro from "../common/header-intro";
import { Database, RefreshCcw, Workflow } from "lucide-react";
import IconList from "../common/icons/icon-list";
import workingPeople from "../../assets/people-working.png";
import Image from "next/image";

const Scalable = () => {
  return (
    <SectionContainer bgColor="#F5F7FF">
      <HeaderOrIntro
        title={{
          text: "Built for scale. Supported for the long term",
          highlight: "long term",
        }}
        subtitle="Designed to disappear into your stack while handling scale, complexity, and change."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left image */}
        <div className="relative h-[260px] lg:h-full">
          <Image
            src={workingPeople}
            alt="Enterprise CRM team"
            fill
            className="rounded-md object-cover"
            priority
          />
        </div>
        <div className="flex flex-col justify-center bg-transparent p-8">
          <h3 className="mb-2 font-semibold text-gray-900 text-lg">
            Designed for enterprise-scale CRMs
          </h3>

          <p className="mb-6 text-gray-600 text-sm">
            Pipeline is built for teams managing hundreds of thousands to
            millions of records.
          </p>

          <IconList
            showDivider
            items={[
              {
                icon: <Database className="w-4 h-4" />,
                text: "Handles large CRMs without performance degradation",
              },
              {
                icon: <RefreshCcw className="w-4 h-4" />,
                text: "Built for recurring enrichment, not CSV uploads",
              },
              {
                icon: <Workflow className="w-4 h-4" />,
                text: "Fits cleanly into existing RevOps workflows",
              },
            ]}
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default Scalable;

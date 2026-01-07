import React from "react";
import SectionContainer from "../common/sections/section-container";
import HeaderOrIntro from "../common/header-intro";
import { ChartBar } from "lucide-react";

const Scalable = () => {
  return (
    <SectionContainer bgColor="#F5F7FF">
      <HeaderOrIntro
        badge={{
          text: "Scalable",
          icon: <ChartBar className="size-4" />,
        }}
        title={{
          text: "Built for scale. Supported for the long term",
        }}
        subtitle="Pipeline is designed to disappear into your stack while handling scale, complexity, and change."
      />
    </SectionContainer>
  );
};

export default Scalable;

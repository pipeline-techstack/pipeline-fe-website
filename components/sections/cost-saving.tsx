import React from "react";
import SectionContainer from "../common/sections/section-container";
import HeaderOrIntro from "../common/header-intro";
import { DollarSign } from "lucide-react";

const CostSaving = () => {
  return (
    <SectionContainer bgColor="#F5F7FF">
      <HeaderOrIntro
        badge={{
          text: "Cost Saving",
          icon: <DollarSign className="size-4" />,
        }}
        title={{
          text: "Cost saving at scale ",
        }}
        subtitle="Save over 50% on data costs at scale"
      />
    </SectionContainer>
  );
};

export default CostSaving;

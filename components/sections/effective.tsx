import React from "react";
import SectionContainer from "../common/sections/section-container";
import HeaderOrIntro from "../common/header-intro";
import CostSavingCards from "../common/cards/cost-saving-card";

const Effective = () => {
  return (
    <SectionContainer>
      <HeaderOrIntro
        title={{
          text: "Cost saving at scale",
          highlight: "scale",
        }}
        subtitle="Save over 50% on data costs at scale."
      />
      <CostSavingCards />
    </SectionContainer>
  );
};

export default Effective;

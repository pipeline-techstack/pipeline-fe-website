import React from "react";
import SectionContainer from "../common/sections/section-container";
import HeaderOrIntro from "../common/header-intro";

const CostSaving = () => {
  return (
    <SectionContainer>
      <HeaderOrIntro
        title={{
          text: "Pipeline AI is not a one-time cleanup tool",
          highlight: "cleanup Tool",
        }}
        subtitle="It is a continuous revenue data system."
      />
    </SectionContainer>
  );
};

export default CostSaving;

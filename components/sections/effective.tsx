import React from "react";
import SectionContainer from "../common/sections/section-container";
import HeaderOrIntro from "../common/header-intro";
import { FastForward } from "lucide-react";

const Effective = () => {
  return (
    <SectionContainer>
      <HeaderOrIntro
        badge={{
          text: "Efficiency",
          icon: <FastForward className="size-4" />,
        }}
        title={{
          text: "How Pipeline AI is different",
          highlight: "Pipeline AI",
        }}
      />
    </SectionContainer>
  );
};

export default Effective;

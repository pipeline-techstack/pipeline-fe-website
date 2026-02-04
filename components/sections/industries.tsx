"use client";
import React from "react";
import HeaderOrIntro from "../common/header-intro";
import CardCarousel from "../common/cards/card-carousel";
import SectionContainer from "../common/section-wrapper2";

const IndustriesSection = () => {
  return (
    <div className="bg-[#FAFAFA] pb-12 sm:pb-16 lg:pb-20">
      <SectionContainer className="bg-[#FAFAFA]" fullWidth>
        <HeaderOrIntro
          title={{
            text: "Built for CROs and RevOps Teams",
            highlight: "Teams",
          }}
          subtitle={
            <>
              <span className="block">
                Supporting the people responsible for driving revenue
                performance
              </span>
              <span className="block mt-1">across the organization</span>
            </>
          }
        />
      </SectionContainer>

      <CardCarousel />
    </div>
  );
};

export default IndustriesSection;

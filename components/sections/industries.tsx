"use client";
import React from "react";
import HeaderOrIntro from "../common/header-intro";
import CardCarousel from "../common/cards/card-carousel";

const IndustriesSection = () => {
  return (
    <div className="bg-[#FAFAFA]">
      <HeaderOrIntro
        title={{
          text: "Built for CROs and RevOps Teams",
          highlight: "Teams",
        }}
        subtitle={
          <>
            <span className="block">
              Supporting the people responsible for driving revenue performance
            </span>
            <span className="block mt-1">across the organization</span>
          </>
        }
      />

      <div>
        <CardCarousel />
      </div>
    </div>
  );
};

export default IndustriesSection;

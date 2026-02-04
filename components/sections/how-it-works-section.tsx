"use client";

import React from "react";
// import HeaderOrIntro from '../common/header-intro';
import SectionContainer from "../common/section-wrapper2";
import Image from "next/image";
import one from "../../assets/new/1.png";
import two from "../../assets/new/2.png";
import three from "../../assets/new/3.png";
import four from "../../assets/new/4.png";
import line from "../../assets/new/line-img.png";
import HeaderOrIntro from "../common/header-intro";
import oneicon from "../../assets/new/one-icon.png";
import twoicon from "../../assets/new/two-icon.png";
import threeicon from "../../assets/new/three-icon.png";
import fouricon from "../../assets/new/four-icon.png";
import gridImg from "../../assets/new/grid.png";

const HowItWorksSection = () => {
  const steps = [
    {
      id: 1,
      image: one,
      title: "Connect Your CRM",
      description: "Securely connects to your CRM and supporting GTM systems",
      groupPosition: "left-[3%] top-10",
      align: "left",
      icon: oneicon,
    },
    {
      id: 2,
      image: two,
      title: "Ingest Revenue Data",
      description:
        "Accounts, contacts, opportunities, and signals update continuously",
      groupPosition: "left-[25%] top-80",
      align: "left",
      icon:twoicon
    },
    {
      id: 3,
      image: three,
      title: "Apply Intelligence",
      description:
        "Calculate signals, clean data, enrich records, and add context",
      groupPosition: "left-[55%] top-68",
      align: "left",
      icon:threeicon
    },
    {
      id: 4,
      image: four,
      title: "Deliver Intelligence",
      description:
        "Insights appear directly inside CRM, outreach tools, and dashboards",
      groupPosition: "left-[70%] top-20",
      align: "left",
      icon:fouricon
    },
  ];

  return (
    <SectionContainer className="mx-auto">
      <div className="relative my-12 sm:my-16 lg:my-20">
        {/* Header */}
        <HeaderOrIntro
          title={{ text: "How Pipeline Works", highlight: "Works" }}
          subtitle={
            <span className="block">
              A simple platform that turns revenue data into actionable
              intelligence
            </span>
          }
        />

        {/* ================= MOBILE VIEW ================= */}
        <div className="md:hidden relative mt-16">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[36px] top-0 bottom-0 w-[2px] bg-gradient-purple " />

          <div className="flex flex-col gap-10 pl-14">
            {steps.map((step) => (
              <div
                key={step.id}
                className="relative bg-white rounded-2xl border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.06)] px-6 py-5"
              >
                {/* Timeline Icon */}
                <div className="absolute -left-[42px] top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center">
                  <Image
                    src={step.icon}
                    alt=""
                    width={22}
                    height={22}
                  />
                </div>

                {/* Big Faded Number (CENTERED) */}
                {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-[110px] h-[110px] opacity-[0.08] relative">
                    <Image
                      src={step.image}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                </div> */}

                {/* Content */}
                <h3 className="relative z-10 text-[15px] font-extrabold text-text-dark mb-2">
                  {step.title}
                </h3>

                <p className="relative z-10 text-text-light text-[13px] leading-relaxed max-w-[92%]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ====================================================== */}
        {/* =============== DESKTOP VERSION (UNCHANGED) ========== */}
        {/* ====================================================== */}

        <div className="hidden md:block">
          {/* ================= GRID BACKGROUND LAYER ================= */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute right-25 top-30 w-[80%] h-[30%]">
              <Image
                src={gridImg}
                alt=""
                fill
                className="object-cover opacity-100"
                priority
              />
            </div>
          </div>

          {/* ================= FLOW CANVAS ================= */}
          <div className="relative h-[350px] z-10">
            {/* Curved Line */}
            <div className="absolute inset-0 pointer-events-none max-w-[85%]">
              <Image
                src={line}
                alt=""
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* ================= STEPS ================= */}
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`absolute z-20 ${step.groupPosition} max-w-[260px] ${
                  step.align === "right" ? "text-right" : "text-left"
                }`}
              >
                {/* Optional small icon above step 1 */}
                {index === 0 && (
                  <div className="mb-3">
                    <Image src={step.icon} alt="" width={54} height={54} />
                  </div>
                )}

                {/* Text + Number */}
                <div className="relative">
                  {/* Big Faded Number */}
                  <div className="absolute -top-14 left-30">
                    <div className="w-[110px] h-[110px] relative">
                      <Image
                        src={step.image}
                        alt=""
                        fill
                        className="object-contain opacity-100"
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-md font-extrabold text-text-dark mb-2 relative z-10">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-light relative z-10 text-[12px] max-w-[78%]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default HowItWorksSection;

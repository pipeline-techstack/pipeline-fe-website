"use client";

import Image from "next/image";
import SectionContainer from "../common/section-wrapper2";
import img from "../../assets/new/outbound/platform-img.png";
import HeaderOrIntro from "../common/header-intro";
import { PlatfromPerformanceProps } from "@/lib/types";

const PlatformPerformanceSection = (props: PlatfromPerformanceProps) => {
  return (
    // <section className="w-full bg-gradient-to-br from-gray-50 to-white py-16 sm:py-20 lg:py-20 overflow-hidden">
      <SectionContainer className="pb-20 bg-[#FAFAFA]" fullWidth>
        {/* Section Heading */}
        <HeaderOrIntro
          title={{
            text: props.heading,
            highlight: " Performance",
          }}
          subtitle={<></>}
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.5fr]  lg:gap-2 items-center">
          {/* Left Column - Stats & Info */}
          <div className="space-y-8 lg:space-y-6">
            {/* Stats Cards */}
            <div className="space-y-6">
              {props.stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 px-3 py-6 border border-gray-100 text-center w-[80%]"
                >
                  <h3 className="text-4xl sm:text-3xl font-bold text-text-dark mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-base sm:text-md text-text-light">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* This represents section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-text-dark">
                This represents:
              </h3>
              <ul className="space-y-3">
                {props.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="relative w-4 h-4 rounded-full bg-gradient-purple flex items-center justify-center shadow-purple-glow mt-1">
                      <svg
                        className="w-3 h-3 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 5.29a1 1 0 010 1.42l-7.25 7.25a1 1 0 01-1.42 0l-3.25-3.25a1 1 0 111.42-1.42l2.54 2.54 6.54-6.54a1 1 0 011.42 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-base text-text-light">
                      {achievement}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Description */}
            <div className="pt-4">
              <p className="text-base sm:text-md text-text-dark leading-relaxed text-text-dark font-semibold">
                Outbound Intelligence is built for companies that treat outbound
                as a serious revenue channel.
              </p>
            </div>
          </div>

          {/* Right Column - Image with Floating Cards */}
          <div className="relative w-full h-full">
            {/* Main Image Container */}
            <div className="relative w-full h-full mx-auto">
              {/* Background Gradient Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-purple-50 rounded-full scale-100 blur-3xl opacity-40 w-full h-full" />

              {/* Image Placeholder */}
              <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden">
                {/* Uncomment when you have the image: */}
                <Image
                  src={img}
                  alt="Platform Performance"
                  fill
                  className="object-cover scale-100"
                />
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    // </section>
  );
};

export default PlatformPerformanceSection;

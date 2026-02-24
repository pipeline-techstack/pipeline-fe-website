"use client";

import Image from "next/image";
import SectionContainer from "../common/section-wrapper2";
import img from "../../assets/new/outbound/platform-img.png";
import HeaderOrIntro from "../common/header-intro";
import { PlatfromPerformanceProps } from "@/lib/types";
import { useEffect, useRef, useState } from "react";

const PlatformPerformanceSection = (props: PlatfromPerformanceProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <SectionContainer className="pb-20 bg-[#FAFAFA]" fullWidth>
      {/* Section Heading */}
      <HeaderOrIntro
        title={{
          text: props.heading,
          highlight: " Performance",
        }}
        subtitle={<></>}
      />

      <div
        ref={sectionRef}
        className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.5fr]  lg:gap-2 items-center"
      >
        {/* Left Column - Stats & Info */}
        <div className="space-y-8 lg:space-y-6">
          {/* Stats Cards */}
          <div className="space-y-6 w-full flex flex-col items-center">
            {props.stats.map((stat, index) => (
              <div
                key={index}
                className={`
                bg-white rounded-2xl shadow-lg hover:shadow-xl
                transition-all duration-700 ease-out
                px-3 py-6 border border-gray-100 text-center w-[80%]
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
                style={{ transitionDelay: `${index * 120}ms` }}
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
                <li
                  key={index}
                  className={`
                  flex items-start gap-3
                  transition-all duration-700 ease-out
                  ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}
                `}
                  style={{ transitionDelay: `${index * 120 + 300}ms` }}
                >
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
          <div
            className={`
            pt-4 transition-all duration-700 ease-out
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
            style={{ transitionDelay: "600ms" }}
          >
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
            <div
              className={`
              relative w-full h-full mx-auto
              transition-all duration-1000 ease-out
              ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
            `}
            >
              {/* Uncomment when you have the image: */}
              <Image
                src={img}
                alt="Platform Performance"
                fill
                className="object-cover scale-100 transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default PlatformPerformanceSection;

"use client";
import { TrustedIndustriesSectionProps } from "@/lib/types";
import SectionContainer from "../common/section-wrapper2";
import HeaderOrIntro from "../common/header-intro";
import Image from "next/image";

export default function TrustedIndustriesSection({
  badgeText,
  heading,
  subheading,
  industries,
}: TrustedIndustriesSectionProps) {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <SectionContainer>
        <div className="text-center">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="py-4 px-3 rounded-full border border-gray-300">
              <span
                className="px-4 py-2 text-xs font-semibold rounded-full border uppercase tracking-wider sm:text-[16px]"
                style={{
                  color: "var(--gradient-purple-start)",
                  borderColor: "var(--gradient-purple-start)",
                //   backgroundColor: "rgba(93, 95, 239, 0.05)",
                }}
              >
                {badgeText}
              </span>
            </div>
          </div>

          {/* Heading */}
          <HeaderOrIntro
            title={{
              text: heading,
              highlight: " Companies",
            }}
            subtitle={
              <>
                <span className="block">{subheading}</span>
                <span className="block mt-1"></span>
              </>
            }
          />

          {/* Grid */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-[70%] mx-auto">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="w-full h-[160px] rounded-2xl text-white flex flex-col items-center justify-center shadow-lg hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
                style={{
                  background: "var(--gradient-card-dark)",
                }}
              >
                {/* Icon */}
                <div className="backdrop-blur-sm p-4 rounded-xl flex items-center justify-center">
                  <Image
                    src={industry.icon}
                    alt={industry.title}
                    className="p-1 flex items-center justify-center"
                  />
                </div>

                {/* Title */}
                <p className="text-base font-medium text-center px-10 leading-snug">
                  {industry.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

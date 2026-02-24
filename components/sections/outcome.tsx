"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SectionContainer from "../common/section-wrapper2";
import img from "../../assets/new/outbound/outcome-img.png";
import HeaderOrIntro from "../common/header-intro";
import { OutcomeProps } from "@/lib/types";

const OutcomeSection = (props: OutcomeProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.25 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <SectionContainer className="pt-20">
      {/* Section Header */}
      <div ref={sectionRef}>
        <HeaderOrIntro
          title={{
            text: "",
            highlight: props.heading,
          }}
          subtitle="Outbound Intelligence is built around one clear objective:"
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-5 items-center">
          {/* Left Column - Image */}
          <div
            className={`
            relative flex justify-center lg:justify-start -mt-22
            transition-all duration-1000 ease-out
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
          >
            <div className="relative flex w-full  aspect-[4/5] items-center">
              <div className="relative w-full h-[67%] overflow-hidden rounded-2x">
                <Image
                  src={img}
                  alt="Team meeting"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="space-y-10 sm:-mt-25 -mt-10 sm:mb-0 mb-5">
            {props.outcomes.map((outcome, index) => (
              <div
                key={index}
                className={`
                flex items-start gap-2
                transition-all duration-700 ease-out hover:translate-x-1
                ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}
              `}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Image src={outcome.icon} alt="icon" width={60} height={60} />
                {/* Content */}
                <div>
                  <h3 className="text-2xl font-bold text-text-dark mb-1">
                    {outcome.percentage}
                  </h3>

                  <h4 className="text-lg font-semibold text-text-dark mb-1">
                    {outcome.title}
                  </h4>

                  <p className="text-sm text-text-light max-w-md">
                    {outcome.description}
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

export default OutcomeSection;

"use client"

import HeaderOrIntro from "@/components/common/header-intro";
import SectionContainer from "@/components/common/section-wrapper2";
import { VisibilityProps } from "@/lib/types";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function VisibilityPerformanceSection({
  heading,
  subtitle,
  items,
  autoInterval = 3000,
  img
}: VisibilityProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasEntered, setHasEntered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Detect scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto loop
  useEffect(() => {
    if (!hasEntered) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, autoInterval);

    return () => clearInterval(interval);
  }, [hasEntered, items.length, autoInterval]);

  return (
    <SectionContainer>
      <div ref={sectionRef} className="py-20">

        {/* Header */}
          <HeaderOrIntro
            title={{
              text: "",
              highlight: heading,
            }}
            subtitle={subtitle}
          />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-6 relative">

            {items.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  className="relative border-b border-gray-200 pb-6 cursor-pointer"
                  onClick={() => setActiveIndex(index)}
                >
                  {/* Purple Progress Line */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gray-200">
                    <div
                      className={`h-full bg-gradient-purple transition-all duration-[3000ms] ease-linear`}
                      style={{
                        width: isActive ? "100%" : "0%",
                        transitionDuration: `${autoInterval}ms`,
                      }}
                    />
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white">
                        <Image
                        src={item.icon}
                        alt="icon"/>
                      </div>
                      <h3 className="text-lg font-semibold text-text-dark">
                        {item.title}
                      </h3>
                    </div>

                    <ChevronDown
                      className={`transition-transform duration-300 ${
                        isActive ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isActive ? "max-h-40 mt-1" : "max-h-0"
                    }`}
                  >
                    <p className="text-text-light text-sm pr-6 pl-16">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT SIDE - IMAGE PLACEHOLDER */}
          <div className="relative w-full h-[480px] flex items-center justify-center">
            <Image src={img} alt="img" className="rounded-2xl"/>
          </div>

        </div>
      </div>
    </SectionContainer>
  );
}
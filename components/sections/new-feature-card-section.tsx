"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import SectionContainer from "../common/section-wrapper2";
import rec1 from "../../assets/new/rec1.png";
import rec2 from "../../assets/new/rec2.png";
import rec3 from "../../assets/new/rec3.png";
import HeaderOrIntro from "../common/header-intro";

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      category: "FORECAST INTELLIGENCE",
      categoryColor: "#6366F1",
      title: "Clarity Around the Numbers Leadership Reviews",
      description: `Revenue performance reflects dozens of underlying signals. Forecast Intelligence brings these together and adds context around the numbers CROs and RevOps teams review each week.`,
      image: rec1,
      imageAlt: "Forecast Intelligence",
      whatYouGain: {
        title: "What You Gain",
        points: [
          "Earlier awareness of changes in trajectory",
          "More confident, internal conversations",
          "Better preparedness for forecast reviews",
        ],
      },
      bulletPoints: [
        "Surfaces what is influencing revenue performance",
        "Highlights emerging shifts in pipeline behavior",
        "Flags where attention may be required",
      ],
      reverse: false,
    },
    {
      id: 2,
      category: "REVENUE PLANNING INTELLIGENCE",
      categoryColor: "#6366F1",
      title: "Plans That Hold as Reality Evolves",
      description:
        "Revenue plans rely on assumptions around capacity, quotas, incentives, and timing. Revenue Planning Intelligence helps leadership teams evaluate these assumptions using real performance signals.",
      image: rec2,
      imageAlt: "Revenue Planning Intelligence",
      whatYouGain: {
        title: "What You Gain",
        points: [
          "Faster planning cycles",
          "Clearer decision trade-offs",
          "Stronger alignment between plans and execution",
        ],
      },
      bulletPoints: [
        "Clarifies how capacity and coverage affect outcomes",
        "Highlights trade-offs across hiring and quota scenarios",
        "Surfaces how incentive structures influence behavior",
      ],
      reverse: true,
    },
    {
      id: 3,
      category: "CRM INTELLIGENCE",
      categoryColor: "#6366F1",
      title: "Execution That Stays Aligned as You Scale",
      description:
        "As revenue organizations grow, signals fragment across systems and teams. GTM Intelligence connects these signals to provide consistent context across the go-to-market engine.",
      image: rec3,
      imageAlt: "CRM Intelligence",
      whatYouGain: {
        title: "What You Gain",
        points: [
          "More reliable revenue data",
          "Clearer priorities across teams",
          "Improved productivity and focus",
        ],
      },
      bulletPoints: [
        "Keeps CRM data accurate and consistent",
        "Adds up-to-date context to accounts and contacts",
        "Highlights intent, engagement, and activity patterns",
      ],
      reverse: false,
    },
  ];

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const cardTop = rect.top;
        const cardHeight = rect.height;

        // Calculate how far the card has scrolled into view
        const startOffset = windowHeight * 0.2; // 20% delay

        const scrollProgress = Math.max(
          0,
          Math.min(
            1,
            (windowHeight - cardTop - startOffset) / (windowHeight * 0.5),
          ),
        );

        // Apply blur to previous cards
        if (index > 0) {
          const prevCard = cardRefs.current[index - 1];
          if (prevCard) {
            const blur = scrollProgress * 8; // Max 8px blur
            const scale = 1 - scrollProgress * 0.05; // Slight scale down
            prevCard.style.filter = `blur(${blur}px)`;
            prevCard.style.transform = `scale(${scale})`;
            prevCard.style.opacity = `${1 - scrollProgress * 0.3}`;
          }
        }

        // Stick current card at top
        if (cardTop <= 100 && cardTop >= -cardHeight) {
          card.style.position = "sticky";
          card.style.top = "100px";
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <SectionContainer>
        {/* Header (unchanged) */}
        <HeaderOrIntro
          title={{
            text: "What Pipeline Intelligence Covers",
            highlight: "Covers",
          }}
          subtitle={
            <span className="block">
              Intelligence across the core responsibilities of revenue
              leadership
            </span>
          }
        />
        <div className="space-y-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="relative transition-all duration-300 ease-out"
              style={{
                marginBottom: index < features.length - 1 ? "2rem" : "0",
              }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-[#D4C2FF] shadow-lg overflow-hidden">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-8 sm:p-10 lg:p-12 ${
                    feature.reverse ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  {/* Text Content */}
                  <div
                    className={`space-y-6 ${feature.reverse ? "lg:col-start-2" : ""}`}
                  >
                    {/* Category */}
                    <div className="flex items-center gap-2">
                      {/* <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: feature.categoryColor }}
                      /> */}
                      <span
                        className="text-xs sm:text-sm font-semibold uppercase tracking-wider"
                        style={{ color: feature.categoryColor }}
                      >
                        <span>➝ </span>
                        {feature.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl lg:text-2xl font-bold text-text-dark leading-tight max-w-[80%]">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base sm:text-md text-text-light leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Bullet Points */}
                    <ul className="space-y-3">
                      {feature.bulletPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3 ">
                          <div
                            className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                            style={{
                              backgroundColor: `${feature.categoryColor}20`,
                            }}
                          >
                            <div
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: feature.categoryColor }}
                            />
                          </div>
                          <span className="text-sm sm:text-base text-text-light border-b border-gray-300">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Image Container */}
                  <div
                    className={`relative ${feature.reverse ? "lg:col-start-1 lg:row-start-1" : ""}`}
                  >
                    <div className="relative rounded-2xl overflow-hidden bg-gray-200 aspect-[4/3]">
                      <Image
                        src={feature.image}
                        alt={feature.imageAlt}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Floating "What You Gain" Card */}
                    <div className="absolute bottom-4 right-4 bg-white rounded-xl shadow-xl p-5 max-w-xs border border-gray-100">
                      <h4 className="text-sm font-semibold text-text-dark mb-3">
                        {feature.whatYouGain.title}
                      </h4>
                      <ul className="space-y-2">
                        {feature.whatYouGain.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span
                              className="w-2 h-2 rounded-full mt-2"
                              style={{ backgroundColor: feature.categoryColor }}
                            />
                            <span className="text-xs sm:text-sm text-text-light leading-snug border-b border-gray-200">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
};

export default FeaturesSection;

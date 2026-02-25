import React, { useState } from "react";
import FeatureCard from "./feature-card";
import {
  ArrowLeft,
  ArrowRight,
  BarChart,
  CalculatorIcon,
  Database,
  Eye,
  Sparkle,
  Users,
} from "lucide-react";
import ExpandedFeatureCard from "./expanded-feature-card";
import card1 from "../../../assets/industrites/card1.png";
import card2 from "../../../assets/industrites/card2.png";
import card3 from "../../../assets/industrites/card3.png";
import card4 from "../../../assets/industrites/card4.png";
import card5 from "../../../assets/industrites/card5.png";
import card6 from "../../../assets/industrites/card6.png";
import GlassIcon from "../glasseffect/glass-icon";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const cards = [
  {
    icon: <BarChart size={20} />,
    title: "Weekly Forecast Calls",
    description: "Clear signals and context for confident forecast discussions",
    summary:
      "Pipeline surfaces reliable, real-time signals and surrounding context so forecast conversations are grounded in facts. Every discussion is anchored in what is actually happening across accounts and pipelines.",
    image: card1, // Add your image path here
  },
  {
    icon: <Eye size={18} />,
    title: "Pipeline & Deal Reviews",
    description:
      "Visibility into what's changing and where attention is required",
    summary:
      "Instead of static reports, Pipeline highlights meaningful changes as they occur, making it clear where momentum is building, where risk is emerging, and which areas need immediate focus from your team.",
    image: card2,
  },
  {
    icon: <CalculatorIcon size={18} />,
    title: "Revenue Planning",
    description: "Accurate evaluation of capacity, quotas, and incentives",
    summary:
      "Pipeline helps leaders assess team capacity, quota coverage, and incentive alignment based on live engagement and performance signals, ensuring planning decisions reflect reality.",
    image: card3,
  },
  {
    icon: <Database size={18} />,
    title: "CRM Data Quality",
    description:
      "Automated data cleaning, standardization, and enrichment at scale",
    summary:
      "Data hygiene runs continuously in the background, automatically removing noise, normalizing fields, and enriching records so teams operate from a clean, consistent, and trustworthy foundation.",
    image: card4,
  },
  {
    icon: <Users size={18} />,
    title: "GTM Execution",
    description:
      "Aligned execution across Sales, Marketing, and Customer Success",
    summary:
      "Pipeline creates a shared operational view across go-to-market teams, ensuring Sales, Marketing, and CS act on the same signals, priorities, and definitions at every stage of the customer lifecycle.",
    image: card5,
  },
  {
    icon: <Sparkle size={18} />,
    title: "Intelligence & Direction",
    description:
      "Actionable insights delivered directly into existing workflows",
    summary:
      "Insights don't live in dashboards that teams forget to check. Pipeline pushes relevant intelligence into the tools your teams already use, enabling faster decisions and immediate action.",
    image: card6,
  },
];

const VISIBLE_CARDS = 4;

const CardCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const prevBtnRef = useRef<HTMLButtonElement | null>(null);
  const [cardOffset, setCardOffset] = useState(0);

  const prevSlide = () => {
    if (activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  const nextSlide = () => {
    console.log("activeIndex", activeIndex);
    if (activeIndex < cards.length - 1) {
      setActiveIndex((prev) => prev + 1);
    }
  };

  const handleCardClick = (index: number) => {
    setExpandedIndex(index);
  };

  useEffect(() => {
    const calculateOffset = () => {
      if (!prevBtnRef.current) return;

      const rect = prevBtnRef.current.getBoundingClientRect();
      setCardOffset(rect.left);
    };

    calculateOffset();
    window.addEventListener("resize", calculateOffset);

    return () => window.removeEventListener("resize", calculateOffset);
  }, []);

  const visibleCards = cards.slice(activeIndex, activeIndex + VISIBLE_CARDS);
  const isMobile = useIsMobile();
  const disabled = isMobile ? cards.length - 1 : cards.length / 2;

  return (
    <div className="">
      {/* Header + Nav */}
      <div className="flex justify-between items-center mx-auto mb-6 pl-4 sm:pl-6 lg:pl-8 max-w-[67rem]">
        <div className="flex justify-between gap-3 w-full">
          <Button
            onClick={prevSlide}
            disabled={activeIndex === 0}
            ref={prevBtnRef}
          >
            <GlassIcon
              icon={<ArrowLeft size={16} />}
              className="rounded-full"
            />
          </Button>

          <Button onClick={nextSlide} disabled={activeIndex === disabled}>
            <GlassIcon icon={<ArrowRight size={16} />} />
          </Button>
        </div>
      </div>

      {/* Card */}
      <div
          style={activeIndex === 0 ? { marginLeft: cardOffset } : undefined}
        className={`transition-all duration-500 ease-out ${
          activeIndex === 0 ? "pl-2 sm:pl-4 lg:pl-6" : "pl-0"
        }`}
      >
        <div className={`flex gap-6 overflow-hidden `}>
          {visibleCards.map((card, i) => {
            const globalIndex = (activeIndex + i) % cards.length;
            const isExpanded = expandedIndex === globalIndex;

            if (!isMobile && isExpanded) {
              return (
                <div key={`expanded-${globalIndex}`}>
                  <ExpandedFeatureCard
                    icon={card.icon}
                    title={card.title}
                    description={card.description}
                    image={card.image}
                  />
                </div>
              );
            }

            return (
              <FeatureCard
                key={`card-${globalIndex}`}
                icon={card.icon}
                title={card.title}
                description={card.description}
                summary={card.summary}
                onClick={
                  !isMobile ? () => handleCardClick(globalIndex) : undefined
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;

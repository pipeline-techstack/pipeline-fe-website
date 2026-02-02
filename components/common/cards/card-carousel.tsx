import React, { useState } from "react";
import FeatureCard from "./feature-card";
import { ChartArea } from "lucide-react";

const CardCarousel = () => {
  const cards = [
    {
      icon: <ChartArea size={18} />,
      title: "Weekly Forecast Calls",
      description:
        "Clear signals and context for confident forecast discussions",
      summary:
        "Pipeline surfaces reliable, real-time signals and surrounding context so forecast conversations are grounded in facts, not assumptions. Every discussion is anchored in what is actually happening across accounts and pipelines.",
    },
    {
      icon: <ChartArea size={18} />,
      title: "Pipeline & Deal Reviews",
      description:
        "Visibility into what’s changing and where attention is required",
      summary:
        "Instead of static reports, Pipeline highlights meaningful changes as they occur, making it clear where momentum is building, where risk is emerging, and which areas need immediate focus from your team.",
    },
    {
      icon: <ChartArea size={18} />,
      title: "Revenue Planning",
      description: "Accurate evaluation of capacity, quotas, and incentives",
      summary:
        "Pipeline helps leaders assess team capacity, quota coverage, and incentive alignment based on live engagement and performance signals, ensuring planning decisions reflect reality, not outdated snapshots.",
    },
    {
      icon: <ChartArea size={18} />,
      title: "CRM Data Quality",
      description:
        "Automated data cleaning, standardization, and enrichment at scale",
      summary:
        "Data hygiene runs continuously in the background, automatically removing noise, normalizing fields, and enriching records so teams operate from a clean, consistent, and trustworthy foundation.",
    },
    {
      icon: <ChartArea size={18} />,
      title: "GTM Execution",
      description:
        "Aligned execution across Sales, Marketing, and Customer Success",
      summary:
        "Pipeline creates a shared operational view across go-to-market teams, ensuring Sales, Marketing, and CS act on the same signals, priorities, and definitions at every stage of the customer lifecycle.",
    },
    {
      icon: <ChartArea size={18} />,
      title: "Intelligence & Direction",
      description:
        "Actionable insights delivered directly into existing workflows",
      summary:
        "Insights don’t live in dashboards that teams forget to check. Pipeline pushes relevant intelligence into the tools your teams already use, enabling faster decisions and immediate action.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  const visibleCards = [
  cards[activeIndex],
  cards[(activeIndex + 1) % cards.length],
  cards[(activeIndex + 2) % cards.length],
];

  return (
    <div>
      {/* Header + Nav */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-3">
          <button
            onClick={prevSlide}
            className="flex justify-center items-center hover:bg-gray-100 border rounded-full w-9 h-9 transition"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="flex justify-center items-center hover:bg-gray-100 border rounded-full w-9 h-9 transition"
          >
            →
          </button>
        </div>
      </div>

      {/* Card */}
      <div className="flex gap-6 pl-60">
        {visibleCards.map((card, i) => (
          <FeatureCard
            key={i}
            icon={card.icon}
            title={card.title}
            description={card.description}
            summary={card.summary}
          />
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;

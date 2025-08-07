import React, { useState } from "react";

const growthSections = [
  {
    title: "75% reduction in research time per lead",
    description:
      "Reps save 35–45 minutes per account by letting Pipeline handle deep research, intent scoring, and insight summarization — freeing them to focus on qualified conversations.",
  },
  {
    title: "Push-ready personalization inside your sales stack",
    description:
      "Pipeline auto-generates personalized, context-rich messages and loads them directly into sales engagement platforms like Outreach, Salesloft, and Gong Engage — no manual input needed.",
  },

  {
    title: "40% more contact coverage than ZoomInfo",
    description:
      "Our 15-source contact waterfall finds accurate emails and phone numbers others miss — boosting connect rates and reducing bounce risk across your entire lead list.",
  },
];

const GrowthAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3 sm:space-y-4">
      {growthSections.map((section, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            onClick={() => setOpenIndex(index === openIndex ? null : index)}
            className={`group rounded-xl bg-white/80 hover:bg-[#F9FAFF]/80 backdrop-blur-sm transition cursor-pointer px-3 py-2 sm:px-5 sm:py-4 shadow-sm`}
          >
            <div className="flex items-start gap-3 sm:gap-5">
              {/* Animated vertical line */}
              <div className="flex flex-col items-center pt-1">
                <div
                  className={`w-[3px] rounded-full transition-all duration-300 ${
                    isOpen ? "bg-primary" : "bg-gray-300"
                  }`}
                  style={{
                    height: isOpen ? "80px" : "36px",
                  }}
                />
              </div>
              {/* Content */}
              <div className="flex-1">
                <h3 className="font-semibold text-gray-700 text-base sm:text-lg md:text-xl">
                  {section.title}
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-500 text-sm sm:text-base">
                    {section.description}
                  </p>
                </div>
              </div>
              {/* Arrow indicator */}
              <span
                className={`mt-1 ml-2 transition-transform duration-300 ${
                  isOpen ? "rotate-90 text-primary" : "rotate-0 text-gray-400"
                }`}
              >
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  className="inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GrowthAccordion;

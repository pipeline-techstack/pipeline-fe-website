import React, { useState } from "react";

const growthSections = [
  {
    title: "75% reduction in research time per lead",
    description:
      "Reps save 35–45 minutes per account by letting Pipeline handle deep research, intent scoring, and insight summarization — freeing them to focus on qualified conversations.",
  },
  {
    title: " Push-ready personalization inside your sales stack",
    description:
      "Pipeline auto-generates personalized, context-rich messages and loads them directly into sales engagement platforms like Outreach, Salesloft, and Gong Engage — no manual input needed.",
  },

  {
    title: " 40% more contact coverage than ZoomInfo",
    description:
      " Our 15-source contact waterfall finds accurate emails and phone numbers others miss — boosting connect rates and reducing bounce risk across your entire lead list.",
  },
];

const GrowthAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {growthSections.map((section, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            onClick={() => setOpenIndex(index === openIndex ? null : index)}
            className="px-4 py-3 rounded-md transition cursor-pointer"
          >
            <div className="flex items-start gap-3">
              {/* Line container that grows with content */}
              <div className="flex flex-col items-center pt-1">
                <div
                  className={`w-[3px] rounded-full ${
                    isOpen ? "bg-primary" : "bg-gray-300"
                  }`}
                  style={{
                    height: isOpen ? "90px" : "40px", // 48px ≈ h-12
                    transition: "height 0.3s",
                  }}
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="font-semibold text-gray-700 text-xl">
                  {section.title}
                </h3>

                {isOpen && (
                  <p className="mt-2 text-gray-500">{section.description}</p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GrowthAccordion;

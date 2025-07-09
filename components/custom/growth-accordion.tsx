import React, { useState } from "react";

const growthSections = [
  {
    title: "40% more contact coverage than Zoominfo",
    description:
      "Our 15-source contact waterfall finds valid emails and phone numbers other tools miss.",
  },
  {
    title: "Push-ready personalization into your sales stack",
    description:
      "Outreach-ready messages are automatically loaded into tools like Outreach and Gong Engage.",
  },
  {
    title: "75% reduction in research time",
    description:
      "Reps save 30–45 minutes per lead by letting Pipeline handle deep research and scoring.",
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

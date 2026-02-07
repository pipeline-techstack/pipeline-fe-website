"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, CircleQuestionMark } from "lucide-react";
import { Badge } from "../ui/badge";

const faqs = [
  {
    question: "Does Pipeline integrate with our existing sales tools?",
    answer:
      "Yes. We integrate directly with platforms like Outreach, salesloft, Gong Engage, Salesforce, and others — no workflow changes needed.",
  },
  {
    question: "Do you require access to our internal systems or CRM?",
    answer:
      " No. Pipeline operates independently and does not require access to your internal systems. We enrich and deliver everything externally.",
  },
  {
    question: "How is this different from ZoomInfo or Clay?",
    answer:
      " ZoomInfo gives you static data. Clay requires complex setup. Pipeline delivers live research, scoring, and personalized messaging — all in one click.",
  },
  {
    question: "What kind of insights does your platform provide?",
    answer:
      " We surface strategic signals — like hiring trends, tech shifts, funding events, and GTM priorities — tied to real buying intent.",
  },

  {
    question: "How accurate is your contact data?",
    answer:
      " We use a 15-source waterfall with real-time validation to ensure top-tier accuracy across emails and phone numbers.",
  },
  {
    question: "Is this secure and compliant for enterprise use?",
    answer:
      " Yes. We follow enterprise-grade data handling practices and never store or access your internal systems or customer data.",
  },
];

const Faq = () => {
  const [openItems, setOpenItems] = useState(new Set([0]));

  const toggleIndex = (index: number) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <div className="bg-gray-50 w-full">
      <div className="mx-auto">
        <div className="bg-gradient-to-br from-gray-300 via-purple-500/40 to-primary p-[1px] rounded-3xl">
          <Card className="bg-white/85 backdrop-blur-md border border-white/10 rounded-[calc(theme(borderRadius.3xl)-3px)]">
            <CardContent className="gap-6 grid md:grid-cols-2 p-6 sm:p-8">
              {/* Left Column */}
              <div className="top-8 sticky self-start">
                <Badge
                  variant="outline"
                  className="bg-white mb-6 px-4 py-2 border-primary/40 rounded-full font-medium text-primary uppercase"
                >
                  <CircleQuestionMark className="mr-2 size-6" />
                  <span> Faq</span>
                </Badge>
                <h2 className="font-bold text-[#111827] text-2xl sm:text-3xl lg:text-4xl leading-tight">
                  Need more <span className="text-primary">clarity?</span>
                </h2>
              </div>

              {/* Right Column */}
              <div className="space-y-4 md:col-span-2 w-full">
                {faqs.map((faq, index) => {
                  const isOpen = openItems.has(index);
                  return (
                    <div
                      key={index}
                      className={`border border-[#E5E7EB] rounded-2xl transition-all duration-300 overflow-hidden ${
                        isOpen
                          ? "bg-white/70 focus:backdrop-blur-sm"
                          : "bg-white/70 hover:bg-[#F9FAFF]/80 backdrop-blur-sm"
                      }`}
                    >
                      <button
                        onClick={() => toggleIndex(index)}
                        className="flex justify-between items-center px-5 sm:px-6 py-4 sm:py-5 w-full text-left transition-colors duration-200"
                      >
                        <span className="pr-4 font-medium text-gray-800 text-base sm:text-lg leading-relaxed">
                          {faq.question}
                        </span>
                        <Plus
                          className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${
                            isOpen ? "rotate-45" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`transition-all duration-300 ease-in-out ${
                          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        } overflow-hidden`}
                      >
                        <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-gray-600 text-sm sm:text-base leading-relaxed">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Faq;

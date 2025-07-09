"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, CircleQuestionMark } from "lucide-react";

const faqs = [
  {
    question: "How accurate is your contact data?",
    answer:
      "Our enrichment engine outperforms ZoomInfo by up to 40%, using a 15-source waterfall with fallback logic and real-time validation.",
  },
  {
    question: "What sales tools do you integrate with?",
    answer:
      "Outreach, Gong Engage, Salesforce, and more on the way.",
  },
  {
    question: "How do you personalize outreach?",
    answer:
      "Each message is generated based on the contact's company size, tech stack, recent hiring activity, leadership shifts, and job descriptions.",
  },
  {
    question: "What signals does Pipeline track?",
    answer:
      "Live hiring, tech stack adoption, job posts, funding, leadership moves, and sales tools being used.",
  },
  {
    question: "How long does it take to go live?",
    answer:
      "Setup takes less than 72 hours. Many teams are live in 1-2 days.",
  },
];

const Faq = () => {
  const [openItems, setOpenItems] = useState(new Set([0]));

  const toggleIndex = (index: number) => {
    setOpenItems(prev => {
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
    <div className="bg-gray-50 px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <Card className="bg-white p-8 border-primary/20">
          <CardContent className="grid lg:grid-cols-2 gap-12 lg:gap-16 p-0 items-start">
          {/* Left Column */}
          <div className="lg:sticky lg:top-8">
            <div className="inline-flex items-center border border-[#E5E7EB] text-sm px-4 py-2 rounded-full text-[#6B7280] font-medium mb-6">
              <CircleQuestionMark className="inline-block mr-2 w-4 h-4" />
              FAQs
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
              Need more <span className="text-[#4F46E5]">clarity?</span>
            </h2>
          </div>

          {/* Right Column */}
          <div className="space-y-4 w-full">
            {faqs.map((faq, index) => {
              const isOpen = openItems.has(index);
              return (
                <div
                  key={index}
                  className={`border border-[#E5E7EB] rounded-2xl transition-all duration-300 overflow-hidden ${
                    isOpen ? 'bg-[#F9FAFF] shadow-sm' : 'bg-white hover:bg-[#F9FAFF] hover:shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => toggleIndex(index)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors duration-200"
                  >
                    <span className="pr-4 text-base font-semibold text-[#111827] leading-relaxed">
                      {faq.question}
                    </span>
                    <Plus 
                      className={`w-5 h-5 text-[#6B7280] transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                    />
                  </button>
                  <div className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}>
                    <div className="px-6 pb-6 text-base text-[#6B7280] leading-relaxed">
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
  );
};

export default Faq;
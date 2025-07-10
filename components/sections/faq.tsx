"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, CircleQuestionMark } from "lucide-react";
import { Badge } from "../ui/badge";

const faqs = [
  {
    question: "How accurate is your contact data?",
    answer:
      "Our enrichment engine outperforms ZoomInfo by up to 40%, using a 15-source waterfall with fallback logic and real-time validation.",
  },
  {
    question: "What sales tools do you integrate with?",
    answer: "Outreach, Gong Engage, Salesforce, and more on the way.",
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
    <div className="bg-gray-50">
      <div className="mx-auto max-w-6xl">
        <div className="bg-gradient-to-br from-gray-300 via-purple-500/40 to-primary p-[1px] rounded-3xl">
          <Card className="bg-white/85 backdrop-blur-md border border-white/10 rounded-[calc(theme(borderRadius.3xl)-3px)]">
            <CardContent className="gap-8 grid md:grid-cols-2 p-6 sm:p-8">
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
              <div className="space-y-4 md:col-span-1 w-full">
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

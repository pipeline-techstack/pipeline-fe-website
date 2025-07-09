"use client";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ChartNoAxesCombined } from "lucide-react";
import growthImg from "../../assets/growth-section.png";
import Image from "next/image";
import GrowthAccordion from "../custom/growth-accordion";

const Growth = () => {
  return (
    <div className="bg-gray-50 px-6 md:px-20 xl:px-48 py-16">
      <div className="bg-gradient-to-br from-gray-300/70 via-secondary to-primary/70 shadow-lg p-[1px] rounded-3xl">
        <Card className="bg-white/85 backdrop-blur-md p-8 border border-white/10 rounded-[calc(theme(borderRadius.3xl)-3px)]">
          <CardContent className="p-0">
            {/* Header */}
            <div className="flex md:flex-row flex-col items-center gap-4 mb-12">
              {/* Left: Text Section */}
              <div className="flex-1">
                <Badge
                  variant="outline"
                  className="bg-white mb-6 px-4 py-2 border-primary/40 rounded-full font-medium text-primary uppercase"
                >
                  <ChartNoAxesCombined className="mr-1 size-4" />
                  <span>Growth</span>
                </Badge>
                <h2 className="mb-4 font-bold text-4xl">
                  <span className="text-gray-900">
                    See how Pipeline accelerates your{" "}
                  </span>
                  <span className="text-primary">sales growth</span>
                </h2>

                <GrowthAccordion />
              </div>

              {/* Right: Image */}
              <div className="flex-1">
                <Image
                  src={growthImg}
                  alt="Growth Illustration"
                  className="mx-auto w-full max-w-md"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Growth;

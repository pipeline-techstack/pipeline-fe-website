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
    <div className="bg-gray-50 w-full">
      <div className="bg-gradient-to-br from-gray-300 via-purple-500/40 to-primary p-[1px] rounded-3xl">

        <Card className="relative bg-white/85 backdrop-blur-md px-4 sm:px-6 lg:px-10 py-8 sm:py-12 border border-white/10 rounded-[calc(theme(borderRadius.3xl)-3px)]">
          <CardContent className="p-0">
            {/* Content Row */}
            <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-10">

              {/* Left: Text Section */}
              <div className="w-full md:w-1/2">
                <Badge
                  variant="outline"
                  className="bg-white mb-6 px-4 py-2 border-primary/40 rounded-full font-medium text-primary uppercase"
                >
                  <ChartNoAxesCombined className="mr-1 size-4" />
                  <span>Growth</span>
                </Badge>

                <h2 className="mb-4 font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight">
                  <span className="text-gray-900">
                    See how Pipeline accelerates your{" "}
                  </span>
                  <span className="text-primary">sales growth</span>
                </h2>

                <GrowthAccordion />
              </div>

              {/* Right: Image */}
              <div className="relative flex justify-center items-center w-full md:w-1/2 min-h-[220px] sm:min-h-[260px] md:min-h-[320px]">
                {/* Background behind the image */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0 bg-primary/10 rounded-t-2xl w-[70%] h-40 sm:h-56 md:h-64" />
                {/* Foreground Image */}
                <Image
                  src={growthImg}
                  alt="Growth Illustration"
                  className="z-10 relative w-full max-w-xs sm:max-w-sm md:max-w-md object-contain"
                  priority
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

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
    <div className="bg-gray-50">
      <div className="bg-gradient-to-br from-gray-300 via-purple-500/40 to-primary p-[1px] rounded-3xl">
        <Card className="relative bg-white/85 backdrop-blur-md p-8 pb-0 border border-white/10 rounded-[calc(theme(borderRadius.3xl)-3px)]">
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
              <div className="flex flex-1 justify-center items-center">
                {/* Background behind the image */}
                <div className="bottom-[-2px] z-0 absolute bg-primary/10 rounded-t-2xl w-[40%] h-72" />

                {/* The image */}
                <Image
                  src={growthImg}
                  alt="Growth Illustration"
                  className="bottom-[-2px] z-10 absolute mx-auto w-full max-w-md"
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

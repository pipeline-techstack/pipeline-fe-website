"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import bgImage from "../../assets/demo-bg.png";
import { CirclePlay } from "lucide-react";

const DemoFeature = () => {
  const handleRedirect = () => {
    window.open("https://sales.addpipeline.ai/signup", "_blank");
  };

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-6xl">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background Image */}
          <div
            className="z-0 absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${bgImage.src})`,
            }}
          />
          {/* Dark overlay for readability */}
          <div className="z-10 absolute inset-0 bg-black/40" />

          <Card className="z-20 relative bg-transparent shadow-none border-none rounded-3xl">
            <CardContent className="relative p-6 sm:p-10 md:p-12">
              <div className="flex md:flex-row flex-col items-center gap-10 md:gap-16">
                {/* Text Section */}
                <div className="flex-1 max-w-xl text-white md:text-left text-center">
                  <h2 className="mb-6 font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight">
                    Ready to supercharge your{" "}
                    <span className="text-white">sales team?</span>
                  </h2>

                  <div className="space-y-4 mb-8 text-white/90 text-sm sm:text-base leading-relaxed">
                    <p className="flex justify-center md:justify-start items-start">
                      <span className="mr-2 text-white/70">→</span>
                      Put outbound research, enrichment, and messaging on
                      autopilot.
                    </p>
                    <p className="flex justify-center md:justify-start items-start">
                      <span className="mr-2 text-white/70">→</span>
                      Signup to check what Pipeline has to offer for your team.
                    </p>
                  </div>

                  <div className="flex justify-center md:justify-start">
                    <Button
                      onClick={handleRedirect}
                      className="relative bg-white/10 backdrop-blur-md px-6 sm:px-8 py-3 sm:py-4 border border-white/20 hover:border-white/40 rounded-full overflow-hidden font-semibold text-white text-sm sm:text-base hover:scale-105 transition-all duration-300 transform"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-white via-white to-primary opacity-30 rounded-full pointer-events-none"></span>
                      <span className="z-10 relative flex items-center">
                        <CirclePlay className="inline-block mr-2 size-4" />
                        Sign up
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DemoFeature;

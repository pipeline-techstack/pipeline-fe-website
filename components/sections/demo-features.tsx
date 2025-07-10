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
        {/* Gradient wrapper for border */}
        <div className="rounded-3xl">
          <Card
            className="relative bg-white/85 backdrop-blur-md p-12 border border-white/10 rounded-[calc(theme(borderRadius.3xl)-3px)] overflow-hidden"
            style={{
              backgroundImage: `url(${bgImage.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <CardContent className="z-10 relative p-0">
              <div className="relative flex md:flex-row flex-col items-center gap-12">
                {/* Left Text */}
                <div className="flex-1 max-w-lg text-white">
                  <h2 className="mb-8 font-bold text-4xl leading-tight">
                    Ready to supercharge your{" "}
                    <span className="text-white">sales team?</span>
                  </h2>

                  <div className="space-y-6 mb-10 text-white/90 leading-relaxed">
                    <p className="flex items-start">
                      <span className="mr-3 text-white/70">→</span>
                      Put outbound research, enrichment, and messaging on
                      autopilot.
                    </p>
                    <p className="flex items-start">
                      <span className="mr-3 text-white/70">→</span>
                      Signup to to check what pipeline has to offer for your
                      team.
                    </p>
                  </div>

                  <Button
                    onClick={handleRedirect}
                    className="relative bg-white/10 backdrop-blur-md px-8 py-4 border border-white/20 hover:border-white/40 rounded-full overflow-hidden font-semibold text-white text-lg hover:scale-105 transition-all duration-300 transform"
                  >
                    {/* Gradient overlay */}
                    <span className="absolute inset-0 bg-gradient-to-r from-white via-white to-primary opacity-30 rounded-full pointer-events-none"></span>

                    {/* Button Content */}
                    <span className="z-10 relative flex items-center">
                      <CirclePlay className="inline-block mr-2 size-4" />
                      Sign up
                    </span>
                  </Button>
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

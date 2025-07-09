"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import demoImg from "../../assets/hero-image.png";
import bgImage from "../../assets/demo-bg.png"; 
import Image from "next/image";
import { Play } from "lucide-react";

const DemoFeature = () => {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-6xl">
        {/* Gradient wrapper for border */}
        <div className="bg-gradient-to-br from-gray-300/70 via-secondary to-primary/70 shadow-lg p-[1px] rounded-3xl">
          <Card
            className="relative bg-white/85 backdrop-blur-md p-12 border border-white/10 rounded-[calc(theme(borderRadius.3xl)-3px)] overflow-hidden"
            style={{
              backgroundImage: `url(${bgImage.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <CardContent className="p-0 relative z-10">
              <div className="flex md:flex-row flex-col items-center gap-12 relative">
                {/* Left Text */}
                <div className="flex-1 text-white max-w-lg">
                  <h2 className="text-5xl font-bold mb-8 leading-tight">
                    Ready to supercharge your{" "}
                    <span className="text-white">sales team?</span>
                  </h2>

                  <div className="text-white/90 space-y-6 text-xl mb-10 leading-relaxed">
                    <p className="flex items-start">
                      <span className="text-white/70 mr-3">→</span>
                      Put outbound research, enrichment, and messaging on autopilot.
                    </p>
                    <p className="flex items-start">
                      <span className="text-white/70 mr-3">→</span>
                      Book a 15-minute strategy call with our team — and see what Pipeline can do for you.
                    </p>
                  </div>

                  <Button className="bg-white text-indigo-600 hover:bg-white/90 font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <Play className="inline-block mr-1 w-5 h-5" />
                    Get a demo
                  </Button>
                </div>

                {/* Right Image */}
                <div className="flex-1 relative">
                  <div className="relative transform rotate-[10deg] scale-110 hover:rotate-[3deg] transition-all duration-500">
                    {/* Optional glow behind image */}
                    <div className="absolute inset-0 bg-indigo-300/30 rounded-2xl blur-xl scale-110 opacity-60 z-0" />
                    <Image
                      src={demoImg}
                      alt="Pipeline Demo Interface"
                      className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl relative z-10"
                    />
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

"use client";
import React from "react";
import Image from "next/image";
// Import your logos (you can replace with correct paths or use public folder URLs)
import adobe from "../../assets/companyLogos/adobe.png";
import google from "../../assets/companyLogos/google.png";
import cisco from "../../assets/companyLogos/cisco.png";
import dayforce from "../../assets/companyLogos/dayforce.png";
import docusign from "../../assets/companyLogos/docusign.png";
import elastic from "../../assets/companyLogos/elastic.png";
import gartner from "../../assets/companyLogos/gatner.png";
import harris from "../../assets/companyLogos/hails.png";

const logos = [
  adobe,
  google,
  cisco,
  dayforce,
  docusign,
  elastic,
  gartner,
  harris,
];

const MarqueSection = () => {
  return (
    <div className="bg-gray-50 py-12 w-full overflow-hidden">
      <div className="relative w-full">
        {/* Gradient overlays for smooth fade effect */}
        <div className="top-0 left-0 z-10 absolute bg-gradient-to-r from-white to-transparent w-20 h-full"></div>
        <div className="top-0 right-0 z-10 absolute bg-gradient-to-l from-white to-transparent w-20 h-full"></div>

        {/* Marquee container */}
        <div className="flex">
          {/* First set of logos */}
          <div className="flex gap-16 whitespace-nowrap animate-marquee">
            {logos.map((logo, idx) => (
              <div
                key={`first-${idx}`}
                className="relative flex-shrink-0 opacity-60 w-32 h-16 transition-all duration-300"
              >
                <Image
                  src={logo}
                  alt="Company Logo"
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          {/* Duplicate set for seamless loop */}
          <div className="flex gap-16 whitespace-nowrap animate-marquee">
            {logos.map((logo, idx) => (
              <div
                key={`second-${idx}`}
                className="relative flex-shrink-0 opacity-90 hover:opacity-100 w-32 h-16 transition-all duration-300"
              >
                <Image
                  src={logo}
                  alt="Company Logo"
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add the CSS animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }

        /* Pause animation on hover */
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default MarqueSection;

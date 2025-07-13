"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// Import logos
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

const MarqueeSection = () => {
  return (
    <div className="bg-gray-50 dark:bg-black py-6 sm:py-8 w-full overflow-hidden">
      <div className="relative">
        <Marquee
          speed={60}
          pauseOnHover={true}
          className="gap-2"
          gradient={true}
          gradientWidth={60}
          gradientColor="rgb(249,250,255)" 
        >
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center opacity-90 hover:opacity-100 mx-6 sm:mx-8 md:mx-10 transition duration-300"
            >
              <Image
                src={logo}
                alt="Company Logo"
                width={110}
                height={48}
                className="object-contain w-20 sm:w-24 md:w-28 h-12 sm:h-14 md:h-16"
                sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 112px"
                priority={idx < 4}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeSection;

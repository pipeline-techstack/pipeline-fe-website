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
import hubspot from "../../assets/companyLogos/hubspot.png";
import intuit from "../../assets/companyLogos/intuit.png";
import nutanix from "../../assets/companyLogos/nutanix.png";
import oracle from "../../assets/companyLogos/oracle.png";
import salesforce from "../../assets/companyLogos/salesforce.png";

const logos = [
  adobe,
  google,
  cisco,
  dayforce,
  docusign,
  elastic,
  gartner,
  harris,
  hubspot,
  intuit,
  nutanix,
  oracle,
  salesforce,
];

const MarqueeSection = () => {
  return (
    <div className="bg-gray-50 dark:bg-black pt-24 pb-0 w-full overflow-hidden">
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
              className="relative opacity-90 hover:opacity-100 mx-8 w-24 h-16 transition duration-300"
            >
              <Image
                src={logo}
                alt="Company Logo"
                width={110}
                height={48}
                className="w-20 sm:w-24 md:w-28 h-12 sm:h-14 md:h-16 object-contain"
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

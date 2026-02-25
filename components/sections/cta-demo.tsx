"use client";

import { CTADemoProps } from "@/lib/types";
import { useEffect, useState } from "react";

function CTADemo({ page }: { page: string }) {
  const [data, setData] = useState<CTADemoProps>({
    heading: "",
    subheading: "",
  });
  useEffect(() => {
    if (page === "revenue") {
      setData({
        heading: "Designed for CRO and RevOps Teams",
        subheading:
          "Built for teams accountable for revenue outcomes.",
      });
    } else {
      setData({
        heading: "Turn LinkedIn Into Your Most Predictable Pipeline Channel",
        subheading:
          "Start generating high-intent conversations with the right decision-makers, consistently and measurably.",
      });
    }
  }, [page]);

  return (
    <section
      className="
        w-full 
       bg-gradient-purple
        py-6 sm:py-8 lg:py-20
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        {/* Heading */}
        <h3
          className="
            text-white 
            font-semibold 
            text-sm sm:text-base lg:text-[36px]
            mb-1
          "
        >
          {data.heading}
        </h3>

        {/* Subtext */}
        <p
          className="
            text-[#ECECEC]
            text-[0.5rem] 
            sm:text-[16px]
          "
        >
          {data.subheading}
        </p>
      </div>
    </section>
  );
}

export default CTADemo;

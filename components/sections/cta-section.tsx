import React from "react";
import ellipse from "../../assets/new/Ellipse.png";
import Link from "next/link";
import SectionContainer from "../common/section-wrapper2";
import Image from "next/image";

function CTA() {
  return (
    <section className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-15 w-full">
      <SectionContainer>
        {/* Purple Gradient Card */}
        <div
          className="
        relative bg-gradient-purple
        rounded-2xl sm:rounded-[32px]
        px-6 sm:px-12 lg:px-16
        py-10 sm:py-16 lg:py-15
        overflow-hidden
      "
        >
          {/* Decorative Ellipse - Top Left */}
          <div className="top-0 left-0 absolute opacity-20 w-32 sm:w-40 lg:w-48 h-32 sm:h-40 lg:h-48 pointer-events-none">
            <div className="border-[3px] border-white rounded-full w-full h-full -translate-x-1/2 -translate-y-1/2 transform" />
          </div>

          {/* Decorative Ellipse - Bottom Right */}
          <div className="absolute bottom-0 right-0 w-40 sm:w-56 lg:w-34 h-40 sm:h-56 lg:h-22 pointer-events-none">
            <Image src={ellipse} alt="" fill className="object-contain" />
          </div>

          {/* Content */}
          <div className="z-10 relative mx-auto max-w-4xl text-center">
            {/* Heading */}
            <h2
              className="
            text-xl sm:text-4xl lg:text-5xl xl:text-[2.2rem]
            font-bold text-white
            mb-5 sm:mb-6
            leading-tight
          "
            >
              Stay Ahead as Revenue Evolves
            </h2>

            {/* Description */}
            <p
              className="
            text-sm sm:text-[16px]
            text-white/90
            mb-6 sm:mb-10 lg:mb-5
            leading-relaxed
            max-w-[40rem]
            mx-auto
          "
            >
              Pipeline helps CROs and RevOps teams understand what&rsquo;s
              changing beneath the numbers and decide where to focus next, by
              turning CRM data into clear, actionable intelligence.
            </p>

            {/* CTA Button */}
            <Link href={"/demo"}>
              <button
                className="
            bg-white text-text-dark
            w-full sm:w-auto
            px-6 py-3 sm:px-8 sm:py-4
            rounded-xl
            text-sm sm:text-lg
            font-semibold
            hover:shadow-xl hover:scale-105
            transition-all duration-300
          "
              >
                See How Pipeline Fits Into Your RevOps Stack
              </button>
            </Link>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export default CTA;

import React from "react";

function CTADemo() {
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
          Designed for CRO and RevOps Teams
        </h3>

        {/* Subtext */}
        <p
          className="
            text-[#ECECEC]
            text-[0.5rem] 
            sm:text-[16px]
          "
        >
          Built for teams accountable for revenue outcomes, not vanity metrics.
        </p>
      </div>
    </section>
  );
}

export default CTADemo;

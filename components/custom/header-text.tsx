import React from "react";

const HeaderText = () => {
  return (
    <div className="max-w-4xl w-full px-4 mx-auto">
      <h1 className="font-bold text-gray-900 text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight md:leading-[78.6px] tracking-[-0.04em]">
        Real-time AI Insights & <br className="hidden sm:block" />
        Targeted <span className="text-primary">Outreach</span>
      </h1>
      <p className="mt-3 sm:mt-4 text-gray-700 text-base sm:text-lg md:text-xl">
        AI that delivers real-time account insights, scores and qualifies leads with up to <strong>92%</strong> accuracy, generates personalized outreach in under <strong>6 seconds</strong>, and leverages dynamic, intent-driven data — helping enterprise teams engage the right decision-makers at high-intent accounts up to <strong>3×</strong> faster and boost conversion rates by <strong>28%</strong>.
      </p>


    </div>
  );
};

export default HeaderText;

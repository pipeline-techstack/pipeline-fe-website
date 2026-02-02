import React from "react";
import GlassIcon from "../glasseffect/glass-icon";

const FeatureCard = ({ icon, title, description, summary }) => {
  return (
    <div className="flex flex-col gap-4 bg-[#2B2846] p-6 border border-white/5 rounded-2xl w-3xl max-w-3xl h-4xl max-h-4xl transition">
      {/* Icon */}
      <GlassIcon icon={icon} size={48} />

      {/* Content */}
      <div>
        <h4 className="mb-2 font-semibold text-white text-lg">{title}</h4>
        <p className="text-[#BCBCBC] text-sm leading-relaxed">{description}</p>
        <p className="mt-3 text-[#BCBCBC] text-sm leading-relaxed">{summary}</p>
      </div>
    </div>
  );
};

export default FeatureCard;

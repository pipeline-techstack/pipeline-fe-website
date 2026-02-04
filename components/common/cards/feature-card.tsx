import React from "react";
import GlassIcon from "../glasseffect/glass-icon";
import { FeatureCardProps } from "./expanded-feature-card";

interface FeatureCardClickProps extends FeatureCardProps {
  onClick?: () => void;
}
const FeatureCard: React.FC<FeatureCardClickProps> = ({
  icon,
  title,
  description,
  summary,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col justify-center gap-4 bg-[#2B2846] p-6 border border-white/5 rounded-2xl w-xs sm:w-sm min-w-xs sm:min-w-sm min-h-[400px]"
    >
      <GlassIcon icon={icon} />

      <div>
        <h4 className="mb-2 font-semibold text-white text-xl">{title}</h4>
        <p className="text-[#BCBCBC] text-sm leading-relaxed">{description}</p>
        <p className="mt-3 text-[#BCBCBC] text-sm leading-relaxed">{summary}</p>
      </div>
    </div>
  );
};

export default FeatureCard;

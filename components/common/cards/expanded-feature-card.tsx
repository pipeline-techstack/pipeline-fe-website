"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import GlassIcon from "../glasseffect/glass-icon";

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  summary?: string;
  image?: StaticImageData;
  className?: string;
}

const ExpandedFeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  image,
  className,
}) => {
  return (
    <div
      className={clsx(
        "relative rounded-2xl overflow-hidden",
        "bg-gradient-to-br from-[#E9ECFF] via-[#CEBDFF] to-[#E9ECFF]",
        "p-4 md:p-6",
        "min-h-[400px] min-w-2xl w-2xl",
        "flex justify-between gap-12",
        className,
      )}
    >
      {/* Icon */}
      <div className="flex flex-col justify-between max-w-[280px]">
        <div>
          <GlassIcon icon={icon} />

          {/* Text Content */}
          <div className="z-10 flex-1 mt-3">
            <h4 className="mb-2 font-bold text-text-dark text-xl">{title}</h4>
          </div>
        </div>
        <p className="max-w-[220px] text-gray-700 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {image && (
        <div className="top-0 right-0 absolute w-[80%] h-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain object-right"
          />
        </div>
      )}
    </div>
  );
};

export default ExpandedFeatureCard;

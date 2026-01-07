"use client";

import React from "react";
import SectionBadge from "./sections/section-badge";
import SectionHeader from "./sections/section-header";

interface HeaderOrIntroProps {
  badge?: {
    text: string;
    icon?: React.ReactNode;
  };
  title: {
    text: string;
    highlight?: string;
  };
  subtitle?: string;
  className?: string;
}

const HeaderOrIntro: React.FC<HeaderOrIntroProps> = ({
  badge,
  title,
  subtitle,
  className,
}) => {
  return (
    <div
      className={[
        "flex flex-col items-center justify-center gap-4 text-center mb-10",
        className,
      ].join(" ")}
    >
      {/* Badge */}
      {badge && (
        <SectionBadge
          text={badge.text}
          icon={badge.icon}
        />
      )}

      {/* Header */}
      <SectionHeader
        text={title.text}
        highlight={title.highlight}
      />

      {/* Subtitle / Intro */}
      {subtitle && (
        <p className="max-w-2xl text-gray-600 text-sm sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default HeaderOrIntro;

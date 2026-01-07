"use client";

import React from "react";
import clsx from "clsx";

interface SectionHeaderProps {
  text: string;
  highlight?: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  text,
  highlight,
  className,
}) => {
  if (!highlight) {
    return (
      <h2
        className={clsx(
          "font-bold text-gray-900 text-3xl sm:text-4xl leading-tight",
          className
        )}
      >
        {text}
      </h2>
    );
  }

  const parts = text.split(highlight);

  return (
    <h2
      className={clsx(
        "font-bold text-gray-900 text-3xl sm:text-4xl leading-tight",
        className
      )}
    >
      {parts[0]}
      <span className="text-primary">{highlight}</span>
      {parts[1]}
    </h2>
  );
};

export default SectionHeader;

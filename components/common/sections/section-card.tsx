"use client";

import React from "react";
import GlassIcon from "../glasseffect/glass-icon";

interface SectionCardProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
}

const SectionCard: React.FC<SectionCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-white shadow-lg p-8 border rounded-lg">
      <GlassIcon icon={icon} />

      <p className="mt-6 font-medium text-gray-900 text-base">{title}</p>

      {description && (
        <p className="mt-2 text-gray-600 text-sm">{description}</p>
      )}
    </div>
  );
};

export default SectionCard;

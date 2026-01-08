"use client";

import React from "react";
import GlassContainer from "./glass-container";

interface GlassIconProps {
  icon: React.ReactNode;
  size?: number;
  iconClassName?: string;
}

const GlassIcon: React.FC<GlassIconProps> = ({
  icon,
  size = 48,
  iconClassName = "",
}) => {
  return (
    <GlassContainer
      className="flex justify-center items-center"
      style={{ width: size, height: size }}
    >
      <span className={`text-white ${iconClassName}`}>
        {icon}
      </span>
    </GlassContainer>
  );
};

export default GlassIcon;

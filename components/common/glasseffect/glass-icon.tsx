"use client";

import React from "react";
import GlassContainer from "./glass-container";

interface GlassIconProps {
  icon: React.ReactNode;
  size?: number;
}

const GlassIcon: React.FC<GlassIconProps> = ({ icon, size = 48 }) => {
  return (
    <GlassContainer
      className="flex justify-center items-center size-12"
      style={{ width: size, height: size }}
    >
      <span className="text-white">{icon}</span>
    </GlassContainer>
  );
};

export default GlassIcon;

"use client";

import React from "react";
import clsx from "clsx";

interface BackgroundIconProps {
  icon: React.ReactNode;
  size?: number;
  className?: string;
}

const BackgroundIcon: React.FC<BackgroundIconProps> = ({
  icon,
  size = 24,
  className,
}) => {
  return (
    <div
      className={clsx(
        "flex justify-center items-center bg-primary/10 rounded-sm",
        className
      )}
      style={{ width: size, height: size }}
    >
      <span className="text-primary">{icon}</span>
    </div>
  );
};

export default BackgroundIcon;

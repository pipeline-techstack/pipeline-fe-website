"use client";

import React from "react";
import clsx from "clsx";

type BackgroundIconVariant = "primary" | "secondary";

interface BackgroundIconProps {
  icon: React.ReactNode;
  size?: number;
  variant?: BackgroundIconVariant;
  className?: string;
}

const variantStyles: Record<BackgroundIconVariant, string> = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-gray-100 text-gray-600",
};

const BackgroundIcon: React.FC<BackgroundIconProps> = ({
  icon,
  size = 24,
  variant = "primary",
  className,
}) => {
  return (
    <div
      className={clsx(
        "flex justify-center items-center rounded-sm",
        variantStyles[variant],
        className
      )}
      style={{ width: size, height: size }}
    >
      {icon}
    </div>
  );
};

export default BackgroundIcon;

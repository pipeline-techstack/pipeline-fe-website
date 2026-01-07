"use client";

import React from "react";
import clsx from "clsx";

interface GlassContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const GlassContainer: React.FC<GlassContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={clsx(
        "relative rounded-lg overflow-hidden",
        "bg-gradient-to-br from-blue-600 via-blue-700 to-primary",
        className
      )}
    >
      {/* Glassmorphic overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />

      {/* Border effect */}
      <div className="absolute inset-0 border-2 border-white/40 rounded-lg pointer-events-none" />

      {/* Content */}
      <div className="z-10 relative">{children}</div>
    </div>
  );
};

export default GlassContainer;

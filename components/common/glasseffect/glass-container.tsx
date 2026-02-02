"use client";

import React from "react";
import clsx from "clsx";

interface GlassContainerProps extends React.HTMLAttributes<HTMLDivElement> {
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
        "relative rounded-md overflow-hidden",
        "bg-gradient-purple",
        className,
      )}
    >
      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(0deg, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Glassmorphic overlay - top highlight */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-transparent pointer-events-none" />

      {/* Subtle inner shadow for depth */}
      {/* <div 
        className="absolute inset-0 rounded-[28%] pointer-events-none"
        style={{
          boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.3), inset 0 -1px 2px rgba(0,0,0,0.1)'
        }}
      /> */}

      {/* Border effect - softer, more subtle */}
      {/* <div className="absolute inset-0 border border-white/20 rounded-[28%] pointer-events-none" /> */}

      {/* Content */}
      <div className="z-10 relative">{children}</div>
    </div>
  );
};

export default GlassContainer;

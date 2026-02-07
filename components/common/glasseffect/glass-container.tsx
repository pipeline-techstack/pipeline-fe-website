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
        "relative bg-gradient-purple rounded-md overflow-hidden",
        className
      )}
    >
      {/* grid */}
      <div
        className="absolute inset-0 opacity-10 rounded-inherit pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(0deg, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      />

      {/* highlight */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-transparent rounded-inherit pointer-events-none" />

      <div className="z-10 relative">{children}</div>
    </div>
  );
};


export default GlassContainer;

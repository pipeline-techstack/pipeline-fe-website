"use client";
import React from "react";
interface SectionContainerProps {
  children: React.ReactNode;
  bgColor?: string; // optional custom bg color class or CSS value
}
const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  bgColor,
}) => {
  // Determine background color class or inline style
  const bgClass = bgColor ? "#F5F7FF" : "bg-white"; // default tailwind white bg class if no color passed
  // If bgColor looks like a Tailwind class (starts with "bg-"), use it as class
  // Otherwise, apply as inline style fallback
  const isTailwindClass = bgColor?.startsWith("bg-");

  // Check if background is white to add grid
  const isWhiteBg =
    !bgColor ||
    bgColor === "bg-white" ||
    bgColor === "#ffffff" ||
    bgColor === "white";

  return (
    <section
      className={`${bgClass} px-3 md:px-48 xl:px-56 py-16 md:py-20 xl:py-24 relative`}
      style={isTailwindClass ? undefined : { backgroundColor: bgColor }}
    >
      {isWhiteBg && (
        <div
          className="top-0 right-0 left-0 absolute pointer-events-none"
          style={{
            height: "200px",
            left: "15%",
            right: "15%",
            backgroundImage: `
linear-gradient(to right, #c2c1c0 1px, transparent 1px),
linear-gradient(to bottom, #c2c1c0 1px, transparent 1px)
`,
            backgroundSize: "100px 70px",
            backgroundPosition: "100px 50px",
            opacity: 0.3,
            filter: "blur(0.5px)",
            maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, transparent 100%)",
          }}
        />
      )}
      <div className="z-10 relative mx-auto max-w-6xl">{children}</div>
    </section>
  );
};
export default SectionContainer;

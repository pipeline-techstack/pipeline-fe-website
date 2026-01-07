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
  const bgClass = bgColor
    ? "#F5F7FF"
    : "bg-white"; // default tailwind white bg class if no color passed

  // If bgColor looks like a Tailwind class (starts with "bg-"), use it as class
  // Otherwise, apply as inline style fallback

  const isTailwindClass = bgColor?.startsWith("bg-");

  return (
    <section
      className={`${bgClass} px-3 md:px-48 xl:px-56 py-16`}
      style={isTailwindClass ? undefined : { backgroundColor: bgColor }}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
};

export default SectionContainer;

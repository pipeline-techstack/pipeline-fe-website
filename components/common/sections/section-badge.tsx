"use client";

import React from "react";
import { Badge } from "../../ui/badge";

interface SectionBadgeProps {
  icon?: React.ReactNode;
  text: string;
  className?: string;
}

const SectionBadge: React.FC<SectionBadgeProps> = ({
  icon,
  text,
  className,
}) => {
  return (
    <Badge
      variant="outline"
      className={[
        "px-4 py-2 rounded-full font-medium uppercase inline-flex items-center gap-1 border-none",
        "bg-primary/10 backdrop-blur-md text-primary", // semi-transparent + blur
        className,
      ].join(" ")}
      style={{
        WebkitBackdropFilter: "blur(6px)", // Safari support
      }}
    >
      {icon && <span className="size-4">{icon}</span>}
      {text}
    </Badge>
  );
};

export default SectionBadge;

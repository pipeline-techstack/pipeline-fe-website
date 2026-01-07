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
        "bg-primary/10 px-4 py-2 rounded-full font-medium text-primary uppercase inline-flex items-center gap-1",
        className,
      ].join(" ")}
    >
      {icon && <span className="size-4">{icon}</span>}
      {text}
    </Badge>
  );
};

export default SectionBadge;

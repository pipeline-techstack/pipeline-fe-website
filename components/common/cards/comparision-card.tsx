"use client";

import React from "react";
import clsx from "clsx";
import SectionBadge from "../sections/section-badge";
import IconList from "../icons/icon-list";


interface Item {
  icon: React.ReactNode;
  text: string;
}

interface ComparisonCardProps {
  title: string;
  badge: string;
  items: Item[];
  variant?: "left" | "right";
}

const ComparisonCard: React.FC<ComparisonCardProps> = ({
  title,
  badge,
  items,
  variant = "left",
}) => {
  const isRight = variant === "right";

  return (
    <div
      className={clsx(
        "relative bg-white p-[1px] border rounded-md",
        isRight
          ? "bg-gradient-to-br from-primary/20 via-white to-pink-200 shadow-sm"
          : "border-gray-200"
      )}
    >
      <div className="flex flex-col gap-4 bg-white p-6 rounded-md h-full">
        <h3 className="font-semibold text-gray-900">{title}</h3>

        <div className="mb-2">
          <SectionBadge
            text={badge}
            variant={isRight ? "primary" : "secondary"}
          />
        </div>

        <IconList
          items={items}
          variant={isRight ? "primary" : "secondary"}
          showDivider
        />
      </div>
    </div>
  );
};

export default ComparisonCard;

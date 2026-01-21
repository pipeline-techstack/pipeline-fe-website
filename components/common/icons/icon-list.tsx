"use client";

import React from "react";
import clsx from "clsx";
import BackgroundIcon from "@/components/common/background-icon";

interface IconListItem {
  icon: React.ReactNode;
  text: string;
}

interface IconListProps {
  items: IconListItem[];
  variant?: "primary" | "secondary";
  showDivider?: boolean;
}

const IconList: React.FC<IconListProps> = ({
  items,
  variant = "primary",
  showDivider = false,
}) => {
  return (
    <ul className="space-y-4">
      {items.map((item, idx) => (
        <li
          key={idx}
          className={clsx(
            "relative flex items-start gap-3",
            showDivider && "pb-3"
          )}
        >
          <BackgroundIcon icon={item.icon} variant={variant} />

          <span>{item.text}</span>

          {showDivider && idx < items.length - 1 && (
            <div className="right-6 bottom-0 left-6 absolute bg-gradient-to-r from-transparent via-gray-200 to-transparent h-px" />
          )}
        </li>
      ))}
    </ul>
  );
};

export default IconList;

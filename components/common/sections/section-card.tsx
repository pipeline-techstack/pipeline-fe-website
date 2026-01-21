"use client";

import React from "react";
import GlassIcon from "../glasseffect/glass-icon";
import { Card, CardContent } from "@/components/ui/card";

interface SectionCardProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
}

const SectionCard: React.FC<SectionCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <Card className="shadow-md rounded-md">
      <CardContent className="p-6">
        <GlassIcon icon={icon} />

        <p className="mt-5 font-medium text-gray-900 text-base">{title}</p>

        {description && ( 
          <p className="mt-2 text-gray-600 text-sm">{description}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default SectionCard;

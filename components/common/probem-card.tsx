"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import BackgroundIcon from "./background-icon";
import GlassIcon from "./glasseffect/glass-icon";

interface ListItem {
  icon: React.ReactNode;
  text: string;
}

interface ProblemCardProps {
  number: number;
  title: string;
  problems: ListItem[];
  solutions: ListItem[];
}

const ProblemCard: React.FC<ProblemCardProps> = ({
  number,
  title,
  problems,
  solutions,
}) => {
  return (
<Card >

      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4 font-semibold">
          <GlassIcon icon={number} iconClassName="text-xl" />
          <h3 className="text-gray-900 text-xl">{title}</h3>
        </div>

        {/* Problems */}
        <ul className="space-y-4 mb-6">
          {problems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-gray-700">
              {item.icon}
              <span>{item.text}</span>
            </li>
          ))}
        </ul>

        {/* Solutions */}
        <div className="bg-primary/5 p-4 border border-primary/20 rounded-lg">
          <p className="mb-3 font-medium text-primary">Pipeline’s approach</p>

          <ul className="space-y-4">
            {solutions.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <BackgroundIcon icon={item.icon} size={28} />
                <span className="text-gray-800">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProblemCard;

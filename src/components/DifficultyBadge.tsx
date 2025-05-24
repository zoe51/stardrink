
import React from "react";
import { Badge } from "@/components/ui/badge";

interface DifficultyBadgeProps {
  level: "L1" | "L2" | "L3" | "L4";
  name: string;
}

const DifficultyBadge: React.FC<DifficultyBadgeProps> = ({ level, name }) => {
  const getBadgeStyle = () => {
    switch (level) {
      case "L1":
        return "bg-emerald-500 hover:bg-emerald-600";
      case "L2":
        return "bg-blue-500 hover:bg-blue-600";
      case "L3":
        return "bg-purple-600 hover:bg-purple-700";
      case "L4":
        return "bg-orange-600 hover:bg-orange-700";
      default:
        return "bg-gray-500 hover:bg-gray-600";
    }
  };

  return (
    <Badge className={`${getBadgeStyle()} text-white px-2 py-1`}>
      {level} - {name}
    </Badge>
  );
};

export default DifficultyBadge;

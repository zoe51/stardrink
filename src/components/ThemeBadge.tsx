
import React from "react";
import { Badge } from "@/components/ui/badge";

interface ThemeBadgeProps {
  category: "neon" | "cyber" | "dao" | "layer2" | "defi" | "privacy";
  theme: string;
}

const ThemeBadge: React.FC<ThemeBadgeProps> = ({ category, theme }) => {
  const getBadgeStyle = () => {
    switch (category) {
      case "neon":
        return "bg-cyan-600 hover:bg-cyan-700 text-white";
      case "cyber":
        return "bg-pink-600 hover:bg-pink-700 text-white";
      case "dao":
        return "bg-indigo-600 hover:bg-indigo-700 text-white";
      case "layer2":
        return "bg-amber-600 hover:bg-amber-700 text-white";
      case "defi":
        return "bg-green-600 hover:bg-green-700 text-white";
      case "privacy":
        return "bg-slate-600 hover:bg-slate-700 text-white";
      default:
        return "bg-gray-600 hover:bg-gray-700 text-white";
    }
  };

  const getCategoryLabel = () => {
    switch (category) {
      case "neon":
        return "Neon Distilled Series";
      case "cyber":
        return "Cyber Cocktail Series";
      case "dao":
        return "DAO Neural Tea Series";
      case "layer2":
        return "Layer 2 Quantum Coffee";
      case "defi":
        return "DeFi Strategy Fermented Series";
      case "privacy":
        return "Privacy Encrypted Ice Series";
      default:
        return category;
    }
  };

  return (
    <Badge className={`${getBadgeStyle()} px-2 py-1`}>
      {getCategoryLabel()}: {theme}
    </Badge>
  );
};

export default ThemeBadge;

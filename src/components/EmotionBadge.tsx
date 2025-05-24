
import React from "react";
import { Emotion } from "../types/drink";

interface EmotionBadgeProps {
  emotion: Emotion;
}

const EmotionBadge: React.FC<EmotionBadgeProps> = ({ emotion }) => {
  return (
    <div 
      className="inline-flex items-center px-3 py-1 rounded-full glass-effect"
      style={{ borderColor: `${emotion.color}40`, boxShadow: `0 0 5px ${emotion.color}80` }}
    >
      <div 
        className="w-3 h-3 rounded-full mr-2" 
        style={{ backgroundColor: emotion.color }}
      ></div>
      <span className="text-sm font-medium">{emotion.name}</span>
      <span className="ml-1 text-xs opacity-70">({emotion.intensity})</span>
    </div>
  );
};

export default EmotionBadge;

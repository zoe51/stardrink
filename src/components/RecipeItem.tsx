
import React from "react";
import { Recipe } from "../types/drink";

interface RecipeItemProps {
  recipe: Recipe;
}

const RecipeItem: React.FC<RecipeItemProps> = ({ recipe }) => {
  return (
    <div className="flex justify-between items-center py-2 border-b border-white/10">
      <span className="text-white/90">{recipe.ingredient}</span>
      <span className="text-cyber-purple font-mono">{recipe.amount}</span>
    </div>
  );
};

export default RecipeItem;

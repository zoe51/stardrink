
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDrinkById, purchaseDrink } from "../data/drinksData";
import { Drink } from "../types/drink";
import DrinkBottle from "../components/DrinkBottle";
import EmotionBadge from "../components/EmotionBadge";
import RecipeItem from "../components/RecipeItem";
import { Button } from "@/components/ui/button";
import { Wine, ShoppingCart } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const DrinkDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [drink, setDrink] = useState<Drink | null>(null);
  const [loading, setLoading] = useState(true);
  const [purchasing, setPurchasing] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (id) {
      const foundDrink = getDrinkById(id);
      setDrink(foundDrink || null);
      setLoading(false);
    }
  }, [id]);

  const handlePurchase = async () => {
    if (!drink) return;
    
    setPurchasing(true);
    try {
      await purchaseDrink(drink.id);
      toast({
        title: "Purchase successful!",
        description: `You've purchased ${drink.name}. Generating your drink experience...`,
      });
      setTimeout(() => {
        navigate(`/generate/${drink.id}`);
      }, 1500);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Purchase failed",
        description: "There was an error processing your purchase.",
      });
      setPurchasing(false);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="w-20 h-20 border-4 border-cyber-purple rounded-full border-t-transparent animate-spin"></div>
      </div>
    );
  }

  if (!drink) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4 text-glow">Drink Not Found</h1>
        <p className="mb-8">The digital beverage you're looking for doesn't exist in our reality.</p>
        <Button onClick={() => navigate("/drinks")}>Browse Drinks</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="glass-effect rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 flex items-center justify-center">
            <div className="max-w-sm">
              <DrinkBottle drink={drink} className="scale-125 mx-auto" />
            </div>
          </div>
          
          <div className="p-8 flex flex-col">
            <h1 className="text-4xl font-bold mb-2 text-glow">{drink.name}</h1>
            <p className="text-xl mb-4 text-white/70">{drink.flavor}</p>
            <p className="mb-6">{drink.description}</p>
            
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-3">Emotional Experience</h3>
              <div className="flex flex-wrap gap-2">
                {drink.emotions.map((emotion, index) => (
                  <EmotionBadge key={index} emotion={emotion} />
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-3">Digital Recipe</h3>
              <div className="glass-effect rounded-lg p-4">
                {drink.recipe.map((item, index) => (
                  <RecipeItem key={index} recipe={item} />
                ))}
              </div>
            </div>
            
            <div className="mt-auto flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="text-2xl font-bold text-cyber-pink">{drink.price.toFixed(2)} STAK</div>
                <div className="flex items-center">
                  <Wine size={18} className="mr-1 text-cyber-purple" />
                  <span>{drink.consumptionCount} sips</span>
                </div>
              </div>
              
              <Button 
                onClick={handlePurchase}
                disabled={purchasing}
                className="bg-gradient-to-r from-cyber-purple to-cyber-pink hover:opacity-90"
              >
                <ShoppingCart className="mr-2" size={16} />
                {purchasing ? "Processing..." : "Purchase"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinkDetail;

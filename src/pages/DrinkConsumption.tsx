
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { consumeDrink, getDrinkById } from "../data/drinksData";
import { Drink, SipResult } from "../types/drink";
import { Button } from "@/components/ui/button";
import { Wine, Share2, Star } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import EmotionBadge from "../components/EmotionBadge";

const DrinkConsumption = () => {
  const { id } = useParams<{ id: string }>();
  const [drink, setDrink] = useState<Drink | null>(null);
  const [remainingSips, setRemainingSips] = useState(0);
  const [loading, setLoading] = useState(true);
  const [consuming, setConsuming] = useState(false);
  const [currentSip, setCurrentSip] = useState<SipResult | null>(null);
  const [showEmotionEffect, setShowEmotionEffect] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (id) {
      const foundDrink = getDrinkById(id);
      setDrink(foundDrink || null);
      
      // Get the remaining sips from localStorage (in a real app this would come from API)
      const userDrinksJson = localStorage.getItem("userPurchasedDrinks");
      if (userDrinksJson) {
        const userDrinks = JSON.parse(userDrinksJson);
        const userDrink = userDrinks.find((d: any) => d.id === id);
        if (userDrink) {
          setRemainingSips(userDrink.remainingSips);
        }
      }
      
      setLoading(false);
    }
  }, [id]);

  const handleConsume = async () => {
    if (!drink || consuming || remainingSips <= 0) return;
    
    setConsuming(true);
    try {
      const result = await consumeDrink(drink.id);
      setCurrentSip(result);
      setRemainingSips(prev => Math.max(0, prev - 1));
      
      // Show the emotion effect
      setShowEmotionEffect(true);
      setTimeout(() => {
        setShowEmotionEffect(false);
      }, 4000);
      
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Consumption failed",
        description: "There was an error consuming your drink.",
      });
    } finally {
      setConsuming(false);
    }
  };

  const handleShare = () => {
    // In a real app, this would open a share dialog
    toast({
      title: "Share your experience",
      description: "Sharing functionality would be implemented here.",
    });
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
    <div className="min-h-screen cyber-grid pb-20">
      {/* Emotion effect overlay */}
      {showEmotionEffect && currentSip && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
          style={{ 
            background: `radial-gradient(circle, ${currentSip.emotion.color}40 0%, transparent 70%)`,
          }}
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4 animate-glow" style={{ textShadow: `0 0 10px ${currentSip.emotion.color}` }}>
              {currentSip.emotion.name}
            </h2>
            <p className="text-xl max-w-md animate-pulse">{currentSip.message}</p>
          </div>
        </div>
      )}
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="glass-effect rounded-2xl p-8 mb-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-2 text-glow">{drink.name}</h1>
              <p className="text-xl mb-6 text-white/70">{drink.flavor}</p>
              
              <div className="mb-8">
                <div 
                  className={`w-48 h-48 mx-auto rounded-full overflow-hidden border-2 ${currentSip ? "border-cyber-pink neon-border-pink" : "border-cyber-purple"}`}
                >
                  <div className={`w-full h-full ${drink.backgroundStyle} relative`}>
                    {/* Bubbles animation */}
                    <div className="absolute w-3 h-3 rounded-full bg-white/30 animate-float" style={{ left: '20%', top: '10%', animationDelay: '0s' }}></div>
                    <div className="absolute w-4 h-4 rounded-full bg-white/30 animate-float" style={{ left: '70%', top: '30%', animationDelay: '0.5s' }}></div>
                    <div className="absolute w-5 h-5 rounded-full bg-white/30 animate-float" style={{ left: '40%', top: '60%', animationDelay: '1s' }}></div>
                    <div className="absolute w-3 h-3 rounded-full bg-white/30 animate-float" style={{ left: '25%', top: '80%', animationDelay: '1.5s' }}></div>
                  </div>
                </div>
                
                {/* Glow effect */}
                <div className={`mt-4 mx-auto w-40 h-8 ${drink.backgroundStyle} opacity-40 blur-xl rounded-full`}></div>
              </div>
              
              <div className="flex justify-center items-center gap-3 mb-6">
                {Array(drink.consumptionCount).fill(0).map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-3 h-3 rounded-full ${i < remainingSips ? 'bg-cyber-purple' : 'bg-white/20'}`}
                  ></div>
                ))}
              </div>
              
              <div className="flex justify-center gap-3">
                <Button
                  onClick={handleConsume}
                  disabled={consuming || remainingSips <= 0}
                  className="bg-gradient-to-r from-cyber-purple to-cyber-pink hover:opacity-90 px-8"
                >
                  <Wine className="mr-2" size={16} />
                  {consuming ? "Sipping..." : remainingSips > 0 ? "Take a Sip" : "Finished"}
                </Button>
                <Button
                  onClick={handleShare}
                  variant="outline"
                  className="border-white/20 hover:bg-white/10"
                >
                  <Share2 size={16} />
                </Button>
              </div>
            </div>
            
            {currentSip && (
              <div className="glass-effect rounded-xl p-6 text-center max-w-md mx-auto">
                <div className="flex justify-center mb-4">
                  <EmotionBadge emotion={currentSip.emotion} />
                </div>
                <p className="text-lg">{currentSip.message}</p>
              </div>
            )}
            
            {remainingSips === 0 && !currentSip && (
              <div className="text-center">
                <p className="mb-4">You've finished this digital drink!</p>
                <Button onClick={() => navigate("/drinks")} className="bg-cyber-blue hover:bg-cyber-blue/80">
                  <Star size={16} className="mr-2" />
                  Browse More Drinks
                </Button>
              </div>
            )}
          </div>
          
          {/* Emotional history - would be implemented in a real app */}
          <div className="glass-effect rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4 text-center">Emotion History</h2>
            <p className="text-center text-white/70">Your emotional journey with this drink would be displayed here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinkConsumption;

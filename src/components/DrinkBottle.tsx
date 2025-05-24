
import React from "react";
import { Drink } from "../types/drink";

interface DrinkBottleProps {
  drink: Drink;
  className?: string;
  onClick?: () => void;
}

const DrinkBottle: React.FC<DrinkBottleProps> = ({ drink, className = "", onClick }) => {
  return (
    <div 
      className={`relative w-full h-60 cursor-pointer transition-transform hover:scale-105 ${className}`}
      onClick={onClick}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* Cocktail glass stem */}
        <div className="w-2 h-16 bg-white/30 backdrop-blur-sm rounded-sm border border-white/40 z-10 mt-32"></div>
        
        {/* Cocktail glass base */}
        <div className="w-12 h-3 bg-white/30 backdrop-blur-sm rounded-full border border-white/40 z-10 mt-1"></div>
        
        {/* Inverted triangle cocktail glass */}
        <div className={`w-32 h-32 ${drink.backgroundStyle} glass-effect backdrop-blur-md border border-white/40 relative overflow-hidden`}
             style={{
               clipPath: "polygon(20% 0%, 80% 0%, 50% 100%)",
               marginTop: "-52px"
             }}>
          {/* Liquid effect with bubbles */}
          <div className="absolute inset-0">
            <div className="absolute w-2 h-2 rounded-full bg-white/40 animate-float" style={{ left: '30%', top: '20%', animationDelay: '0s' }}></div>
            <div className="absolute w-1.5 h-1.5 rounded-full bg-white/30 animate-float" style={{ left: '60%', top: '35%', animationDelay: '0.7s' }}></div>
            <div className="absolute w-2.5 h-2.5 rounded-full bg-white/35 animate-float" style={{ left: '45%', top: '55%', animationDelay: '1.2s' }}></div>
            <div className="absolute w-1 h-1 rounded-full bg-white/25 animate-float" style={{ left: '35%', top: '70%', animationDelay: '1.8s' }}></div>
            <div className="absolute w-2 h-2 rounded-full bg-white/40 animate-float" style={{ left: '55%', top: '45%', animationDelay: '2.3s' }}></div>
          </div>
          
          {/* Glass rim highlight */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-white/20 rounded-t"></div>
        </div>
      </div>
      
      {/* Glow effect */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-8 ${drink.backgroundStyle} opacity-40 blur-xl rounded-full`}></div>
    </div>
  );
};

export default DrinkBottle;

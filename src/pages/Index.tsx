
import React from "react";
import { Link } from "react-router-dom";
import { drinks } from "../data/drinksData";
import DrinkBottle from "../components/DrinkBottle";
import { Wine, Shield, Zap, Coins } from "lucide-react";

const Index = () => {
  // Get the specific drinks in the requested order: DeFi liquidity lager, Cairo synthesis cocktail, zero-knowledge bourbon, cross-chain bridge bourbon
  const featuredDrinks = [
    drinks.find(drink => drink.id === "cyber-dream"), // DeFi Liquidity Lager
    drinks.find(drink => drink.id === "crypto-shield"), // Cairo Synthesis Cocktail
    drinks.find(drink => drink.id === "zero-knowledge"), // Zero-Knowledge Bourbon
    drinks.find(drink => drink.id === "binary-bliss") // Cross-Chain Bridge Bourbon
  ].filter(Boolean);

  return (
    <div className="min-h-screen cyber-grid pb-20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-glow">
            Drink to Learn<span className="text-cyber-pink">.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 mb-8">
            Experience a digital bar where every drink unlocks a piece of the Web3 universe, powered by Starknet.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/drinks" 
              className="px-8 py-3 rounded-full bg-gradient-to-r from-cyber-purple to-cyber-pink text-white font-medium hover:opacity-90 transition-opacity"
            >
              Mix Your First Elixir
            </Link>
            <a 
              href="#starknet" 
              className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-medium hover:bg-white/5 transition"
            >
              Explore Knowledge Stream
            </a>
          </div>
        </div>
      </div>

      {/* Featured Drinks */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center text-glow">Freshly Synthesized Elixirs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredDrinks.map((drink) => (
            <Link to={`/drink/${drink.id}`} key={drink.id}>
              <div className="glass-effect rounded-xl p-4 h-full hover:neon-border transition-all">
                <DrinkBottle drink={drink} />
                <div className="pt-4 text-center">
                  <h3 className="text-xl font-bold mb-1">{drink.name}</h3>
                  <p className="text-white/60 mb-3">{drink.flavor}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Wine size={16} className="mr-1 text-cyber-purple" />
                      <span className="text-sm">{drink.consumptionCount}</span>
                    </div>
                    <div className="text-lg font-bold text-cyber-pink">
                      {drink.price.toFixed(2)} STAK
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Starknet Section */}
      <div id="starknet" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-glow">Powered by the Starknet Grid</h2>
          <p className="text-xl text-white/70 mb-16 text-center">
            StarDrink leverages Starknet's cutting-edge Layer 2 technology for seamless, low-cost interactions and a revolutionary user experience.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="glass-effect rounded-xl p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyber-purple/20 flex items-center justify-center">
                <Shield size={32} className="text-cyber-purple" />
              </div>
              <h3 className="text-xl font-bold mb-3">Account Abstraction</h3>
              <p className="text-white/70">Experience Web3 without the friction. Seamless onboarding, potential for social recovery, and flexible transaction options.</p>
            </div>
            
            <div className="glass-effect rounded-xl p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyber-pink/20 flex items-center justify-center">
                <Zap size={32} className="text-cyber-pink" />
              </div>
              <h3 className="text-xl font-bold mb-3">Dynamic Drink NFTs</h3>
              <p className="text-white/70">Each elixir is a unique, evolving NFT on Starknet. Its attributes change with your journey, tracked on-chain.</p>
            </div>
            
            <div className="glass-effect rounded-xl p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyber-orange/20 flex items-center justify-center">
                <Coins size={32} className="text-cyber-orange" />
              </div>
              <h3 className="text-xl font-bold mb-3">STAK Token Transactions</h3>
              <p className="text-white/70">Acquire premium elixirs using STAK tokens. Experience fast, low-cost transactions on Starknet's scalable Layer 2.</p>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              to="/drinks" 
              className="px-8 py-3 rounded-full bg-gradient-to-r from-cyber-purple to-cyber-pink text-white font-medium hover:opacity-90 transition-opacity"
            >
              Explore All Drinks
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

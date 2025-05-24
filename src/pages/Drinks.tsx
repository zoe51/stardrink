import React from "react";
import { Link } from "react-router-dom";
import { drinks } from "../data/drinksData";
import DrinkBottle from "../components/DrinkBottle";
import { Wine } from "lucide-react";
import DifficultyBadge from "../components/DifficultyBadge";
import ThemeBadge from "../components/ThemeBadge";
import { Card, CardContent } from "@/components/ui/card";

const Drinks = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-2 text-glow">Digital Drinks</h1>
      <p className="text-xl text-white/70 mb-8">Browse our collection of mind-altering digital beverages</p>
      
      <div className="mb-10 glass-effect p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-4 text-cyber-pink">Difficulty Levels</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card className="bg-emerald-900/20 border-emerald-500/30">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold text-emerald-400 mb-2">L1 - Novice (Synthetic Recipe)</h3>
              <p className="text-white/70 text-sm">Foundational entry-level knowledge for beginners</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-900/20 border-blue-500/30">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">L2 - Practitioner (Vintage Recipe)</h3>
              <p className="text-white/70 text-sm">Intermediate difficulty, requires some practical experience</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-900/20 border-purple-500/30">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold text-purple-400 mb-2">L3 - Expert (Master Recipe)</h3>
              <p className="text-white/70 text-sm">Advanced complex content for experienced users</p>
            </CardContent>
          </Card>
          <Card className="bg-orange-900/20 border-orange-500/30">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold text-orange-400 mb-2">L4 - Pioneer (Legendary Recipe)</h3>
              <p className="text-white/70 text-sm">Highest difficulty, cutting-edge innovative content</p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-cyber-purple">Drink Series Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="bg-cyan-900/20 border-cyan-500/30">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Neon Distilled Series</h3>
              <p className="text-white/70 text-sm">Blockchain fundamentals and core concepts</p>
            </CardContent>
          </Card>
          <Card className="bg-pink-900/20 border-pink-500/30">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold text-pink-400 mb-2">Cyber Cocktail Series</h3>
              <p className="text-white/70 text-sm">Smart contract development and DApps</p>
            </CardContent>
          </Card>
          <Card className="bg-indigo-900/20 border-indigo-500/30">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold text-indigo-400 mb-2">DAO Neural Tea Series</h3>
              <p className="text-white/70 text-sm">Decentralized governance and DAOs</p>
            </CardContent>
          </Card>
          <Card className="bg-amber-900/20 border-amber-500/30">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-2">Layer 2 Quantum Coffee</h3>
              <p className="text-white/70 text-sm">Layer 2 technology and scalability solutions</p>
            </CardContent>
          </Card>
          <Card className="bg-green-900/20 border-green-500/30">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold text-green-400 mb-2">DeFi Strategy Fermented Series</h3>
              <p className="text-white/70 text-sm">Web3 finance and DeFi protocols</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-900/20 border-slate-500/30">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold text-slate-400 mb-2">Privacy Encrypted Ice Series</h3>
              <p className="text-white/70 text-sm">Security and privacy technologies</p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {drinks.map((drink) => (
          <Link to={`/drink/${drink.id}`} key={drink.id}>
            <div className="glass-effect rounded-xl p-4 h-full hover:neon-border transition-all">
              <DrinkBottle drink={drink} />
              <div className="pt-4 text-center">
                <h3 className="text-xl font-bold mb-1">{drink.name}</h3>
                
                <div className="mb-3 flex justify-center">
                  <DifficultyBadge level={drink.difficultyLevel} name={drink.difficultyName} />
                </div>
                
                <div className="mb-4">
                  <ThemeBadge category={drink.themeCategory} theme={drink.theme} />
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Wine size={16} className="mr-1 text-cyber-purple" />
                    <span className="text-sm">{drink.consumptionCount} sips</span>
                  </div>
                  <div className="text-lg font-bold text-cyber-pink">
                    {drink.price.toFixed(2)} <span className="text-xs">STAK</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Drinks;

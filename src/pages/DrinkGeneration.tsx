
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDrinkById } from "../data/drinksData";
import { Drink } from "../types/drink";
import { Progress } from "@/components/ui/progress";

// Generation phases
const PHASES = [
  {
    name: "Initializing Molecular Structure",
    duration: 3000,
  },
  {
    name: "Synthesizing Digital Ingredients",
    duration: 4000,
  },
  {
    name: "Calibrating Emotional Resonance",
    duration: 3500,
  },
  {
    name: "Crystallizing Neural Patterns",
    duration: 3000,
  },
  {
    name: "Finalizing Quantum Stabilization",
    duration: 2500,
  },
];

const DrinkGeneration = () => {
  const { id } = useParams<{ id: string }>();
  const [drink, setDrink] = useState<Drink | null>(null);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [complete, setComplete] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const foundDrink = getDrinkById(id);
      setDrink(foundDrink || null);
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    if (!drink) return;

    // Handle the generation simulation
    let phaseTimeout: NodeJS.Timeout;
    let progressInterval: NodeJS.Timeout;

    const runPhase = (phaseIndex: number) => {
      if (phaseIndex >= PHASES.length) {
        setComplete(true);
        return;
      }

      setCurrentPhase(phaseIndex);
      setProgress(0);

      const phase = PHASES[phaseIndex];
      const stepTime = phase.duration / 100;

      progressInterval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + 1;
          if (newProgress >= 100) {
            clearInterval(progressInterval);
            phaseTimeout = setTimeout(() => runPhase(phaseIndex + 1), 500);
          }
          return newProgress;
        });
      }, stepTime);
    };

    // Start the generation process
    runPhase(0);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(phaseTimeout);
    };
  }, [drink]);

  useEffect(() => {
    if (complete && id) {
      const redirectTimeout = setTimeout(() => {
        navigate(`/consume/${id}`);
      }, 1500);

      return () => clearTimeout(redirectTimeout);
    }
  }, [complete, id, navigate]);

  if (loading || !drink) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="w-20 h-20 border-4 border-cyber-purple rounded-full border-t-transparent animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="h-screen flex items-center justify-center cyber-grid">
      <div className="w-full max-w-md p-6 glass-effect rounded-2xl">
        <h1 className="text-2xl font-bold mb-6 text-center text-glow">
          {complete ? "Generation Complete!" : "Generating Your Digital Drink"}
        </h1>

        <div className="mb-8 relative">
          <div className={`w-40 h-40 mx-auto rounded-full overflow-hidden border-2 ${complete ? "border-cyber-pink neon-border-pink" : "border-cyber-purple"}`}>
            <div className={`w-full h-full ${drink.backgroundStyle} relative`}>
              {/* Pour animation */}
              <div 
                className={`absolute bottom-0 left-0 right-0 ${drink.backgroundStyle} animate-pour`} 
                style={{ height: complete ? "100%" : `${Math.min(progress * 5, 100)}%` }}
              >
                {/* Bubbles animation */}
                <div className="absolute w-2 h-2 rounded-full bg-white/30 animate-float" style={{ left: '20%', top: '10%', animationDelay: '0s' }}></div>
                <div className="absolute w-3 h-3 rounded-full bg-white/30 animate-float" style={{ left: '70%', top: '30%', animationDelay: '0.5s' }}></div>
                <div className="absolute w-2 h-2 rounded-full bg-white/30 animate-float" style={{ left: '40%', top: '60%', animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
          
          {/* Glow effect */}
          <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-8 ${drink.backgroundStyle} opacity-40 blur-xl rounded-full`}></div>
        </div>

        <div className="mb-4 text-center">
          <h2 className="text-lg font-medium mb-2">{drink.name}</h2>
          {!complete && (
            <>
              <p className="text-white/70 text-sm mb-4">{PHASES[currentPhase].name}</p>
              <Progress value={progress} className="h-2 mb-2" />
              <p className="text-xs text-white/50">{progress}% complete</p>
            </>
          )}
          
          {complete && (
            <p className="text-cyber-pink animate-pulse">Redirecting to your drink experience...</p>
          )}
        </div>

        {/* Binary data visualization - decorative */}
        <div className="glass-effect rounded p-3 overflow-hidden">
          <div className="text-xs font-mono text-white/30 h-20 overflow-hidden">
            {Array(20).fill(0).map((_, i) => (
              <div key={i}>
                {Array(40).fill(0).map((_, j) => (
                  <span key={j} className={Math.random() > 0.5 ? "text-cyber-purple/60" : "text-cyber-pink/40"}>
                    {Math.random() > 0.5 ? "1" : "0"}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinkGeneration;

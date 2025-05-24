
export interface Emotion {
  name: string;
  description: string;
  intensity: number; // 1-10
  color: string; // CSS color
}

export interface Recipe {
  ingredient: string;
  amount: string;
}

export interface Drink {
  id: string;
  name: string;
  description: string;
  flavor: string;
  consumptionCount: number;
  price: number;
  imageUrl: string;
  backgroundStyle: string; // CSS class
  emotions: Emotion[];
  recipe: Recipe[];
  difficultyLevel: "L1" | "L2" | "L3" | "L4";
  difficultyName: string;
  theme: string;
  themeCategory: "neon" | "cyber" | "dao" | "layer2" | "defi" | "privacy";
}

export interface PurchasedDrink extends Drink {
  purchaseDate: Date;
  remainingSips: number;
}

export interface SipResult {
  emotion: Emotion;
  message: string;
}

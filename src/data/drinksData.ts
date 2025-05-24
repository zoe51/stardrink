
import { Drink } from "../types/drink";

export const drinks: Drink[] = [
  {
    id: "neon-burst",
    name: "NFT Collector's Champagne",
    description: "Introduce the definition of the rules for creating, managing, and transferring unique digital assets.",
    flavor: "Non-Fungible Token Standards",
    consumptionCount: 4,
    price: 8.99,
    imageUrl: "/drink-neon.png",
    backgroundStyle: "bg-drink-blue",
    difficultyLevel: "L1",
    difficultyName: "Novice (Synthetic Recipe)",
    theme: "Blockchain Fundamentals",
    themeCategory: "neon",
    emotions: [
      {
        name: "Understanding",
        description: "Clear comprehension of NFT technology.",
        intensity: 8,
        color: "#9b87f5"
      },
      {
        name: "Innovation",
        description: "Appreciation for digital ownership revolution.",
        intensity: 7,
        color: "#1EAEDB"
      },
      {
        name: "Creativity",
        description: "Inspiration for digital asset creation.",
        intensity: 9,
        color: "#F97316"
      }
    ],
    recipe: [
      { ingredient: "ERC-721", amount: "Token Standard" },
      { ingredient: "ERC-1155", amount: "Multi-Token Standard" },
      { ingredient: "SPL Token-2022", amount: "Solana Program Library" },
      { ingredient: "IPFS", amount: "Decentralized Storage" }
    ]
  },
  {
    id: "cyber-dream",
    name: "DeFi Liquidity Lager",
    description: "Explore the fundamentals of decentralized finance and automated market makers that enable permissionless trading.",
    flavor: "Automated Market Makers",
    consumptionCount: 4,
    price: 12.99,
    imageUrl: "/drink-dream.png",
    backgroundStyle: "bg-drink-pink",
    difficultyLevel: "L2",
    difficultyName: "Practitioner (Vintage Recipe)",
    theme: "Smart Contracts & DApps",
    themeCategory: "cyber",
    emotions: [
      {
        name: "Liquidity",
        description: "Understanding of market depth and flow.",
        intensity: 9,
        color: "#D946EF"
      },
      {
        name: "Yield",
        description: "Appreciation for passive income generation.",
        intensity: 8,
        color: "#9b87f5"
      },
      {
        name: "Efficiency",
        description: "Recognition of automated trading benefits.",
        intensity: 7,
        color: "#1EAEDB"
      }
    ],
    recipe: [
      { ingredient: "Uniswap V3", amount: "Concentrated Liquidity" },
      { ingredient: "Curve Finance", amount: "Stable Swaps" },
      { ingredient: "Balancer", amount: "Weighted Pools" },
      { ingredient: "SushiSwap", amount: "Community DEX" }
    ]
  },
  {
    id: "glitch-fizz",
    name: "Layer 2 Quantum Coffee",
    description: "Master the architecture of blockchain scaling solutions that reduce costs and increase transaction throughput.",
    flavor: "Scaling Solutions Architecture",
    consumptionCount: 4,
    price: 9.99,
    imageUrl: "/drink-glitch.png",
    backgroundStyle: "bg-drink-purple",
    difficultyLevel: "L3",
    difficultyName: "Expert (Master Recipe)",
    theme: "On-chain Governance & DAO",
    themeCategory: "dao",
    emotions: [
      {
        name: "Scalability",
        description: "Vision for blockchain mass adoption.",
        intensity: 8,
        color: "#D946EF"
      },
      {
        name: "Speed",
        description: "Appreciation for instant transactions.",
        intensity: 7,
        color: "#8B5CF6"
      },
      {
        name: "Efficiency",
        description: "Understanding of cost optimization.",
        intensity: 9,
        color: "#F97316"
      }
    ],
    recipe: [
      { ingredient: "Polygon", amount: "Plasma Sidechains" },
      { ingredient: "Arbitrum", amount: "Optimistic Rollups" },
      { ingredient: "zkSync", amount: "ZK Rollups" },
      { ingredient: "Lightning", amount: "Payment Channels" }
    ]
  },
  {
    id: "binary-bliss",
    name: "Cross-Chain Bridge Bourbon",
    description: "Learn how different blockchains communicate and transfer assets through sophisticated bridging protocols.",
    flavor: "Cross-Chain Interoperability",
    consumptionCount: 4,
    price: 7.99,
    imageUrl: "/drink-binary.png",
    backgroundStyle: "bg-drink-orange",
    difficultyLevel: "L4",
    difficultyName: "Pioneer (Legendary Recipe)",
    theme: "Layer 2 Scaling Solutions",
    themeCategory: "layer2",
    emotions: [
      {
        name: "Connection",
        description: "Understanding multi-chain ecosystems.",
        intensity: 9,
        color: "#1EAEDB"
      },
      {
        name: "Interoperability",
        description: "Appreciation for blockchain unity.",
        intensity: 8,
        color: "#F97316"
      },
      {
        name: "Bridging",
        description: "Mastery of cross-chain protocols.",
        intensity: 8,
        color: "#8B5CF6"
      }
    ],
    recipe: [
      { ingredient: "Cosmos IBC", amount: "Inter-Blockchain Communication" },
      { ingredient: "Polkadot", amount: "Parachain Bridges" },
      { ingredient: "Chainlink CCIP", amount: "Cross-Chain Protocol" },
      { ingredient: "LayerZero", amount: "Omnichain Protocol" }
    ]
  },
  {
    id: "defi-elixir",
    name: "DeFi Elixir",
    description: "Deep dive into yield farming strategies and liquidity provision mechanisms that power decentralized finance.",
    flavor: "Yield Farming Berry & Liquidity Mint",
    consumptionCount: 4,
    price: 14.99,
    imageUrl: "/drink-defi.png",
    backgroundStyle: "bg-drink-green",
    difficultyLevel: "L3",
    difficultyName: "Expert (Master Recipe)",
    theme: "Staking & Yield Optimization",
    themeCategory: "defi",
    emotions: [
      {
        name: "Farming",
        description: "Mastery of yield generation strategies.",
        intensity: 8,
        color: "#10B981"
      },
      {
        name: "Staking",
        description: "Understanding network security rewards.",
        intensity: 9,
        color: "#8B5CF6"
      },
      {
        name: "Compounding",
        description: "Appreciation for exponential growth.",
        intensity: 7,
        color: "#1EAEDB"
      }
    ],
    recipe: [
      { ingredient: "Compound", amount: "Lending Protocol" },
      { ingredient: "Aave", amount: "Flash Loans" },
      { ingredient: "Yearn Finance", amount: "Vault Strategies" },
      { ingredient: "Convex", amount: "Boosted Rewards" }
    ]
  },
  {
    id: "crypto-shield",
    name: "Cairo Synthesis Cocktail",
    description: "Master the Cairo programming language for building efficient and secure smart contracts on StarkNet.",
    flavor: "Cairo Programming Basics",
    consumptionCount: 4,
    price: 16.99,
    imageUrl: "/drink-privacy.png",
    backgroundStyle: "bg-drink-slate",
    difficultyLevel: "L4",
    difficultyName: "Pioneer (Legendary Recipe)",
    theme: "Zero-Knowledge Proofs & Privacy",
    themeCategory: "privacy",
    emotions: [
      {
        name: "Programming",
        description: "Mastery of smart contract development.",
        intensity: 9,
        color: "#475569"
      },
      {
        name: "Efficiency",
        description: "Understanding of optimized execution.",
        intensity: 8,
        color: "#6366F1"
      },
      {
        name: "Security",
        description: "Appreciation for provable correctness.",
        intensity: 9,
        color: "#1E293B"
      }
    ],
    recipe: [
      { ingredient: "Cairo Syntax", amount: "Programming Language" },
      { ingredient: "StarkNet", amount: "ZK Rollup Platform" },
      { ingredient: "STARK Proofs", amount: "Scalable Verification" },
      { ingredient: "Felts", amount: "Field Elements" }
    ]
  },
  {
    id: "zero-knowledge",
    name: "Zero-Knowledge Bourbon",
    description: "Master cryptographic protocols that allow proving knowledge without revealing the actual information.",
    flavor: "Cryptographic Proof Systems",
    consumptionCount: 4,
    price: 18.99,
    imageUrl: "/drink-zk.png",
    backgroundStyle: "bg-drink-purple",
    difficultyLevel: "L3",
    difficultyName: "Expert (Master Recipe)",
    theme: "Zero-Knowledge Proofs & Privacy",
    themeCategory: "privacy",
    emotions: [
      {
        name: "Privacy",
        description: "Understanding selective information disclosure.",
        intensity: 9,
        color: "#8B5CF6"
      },
      {
        name: "Verification",
        description: "Mastery of proof systems.",
        intensity: 8,
        color: "#10B981"
      },
      {
        name: "Cryptography",
        description: "Appreciation for mathematical security.",
        intensity: 9,
        color: "#6366F1"
      }
    ],
    recipe: [
      { ingredient: "zk-SNARKs", amount: "Succinct Proofs" },
      { ingredient: "zk-STARKs", amount: "Transparent Proofs" },
      { ingredient: "Bulletproofs", amount: "Range Proofs" },
      { ingredient: "Commitment Schemes", amount: "Hiding Values" }
    ]
  }
];

export const getUserDrinks = (): Drink[] => {
  // In a real app, this would fetch from an API/backend
  const userDrinksJson = localStorage.getItem("userDrinks");
  return userDrinksJson ? JSON.parse(userDrinksJson) : [];
};

export const getDrinkById = (id: string): Drink | undefined => {
  return drinks.find(drink => drink.id === id);
};

export const purchaseDrink = (drinkId: string): Promise<PurchasedDrink> => {
  // Mock API call
  return new Promise((resolve) => {
    const drink = getDrinkById(drinkId);
    if (!drink) {
      throw new Error("Drink not found");
    }
    
    // In a real app, this would be handled by the backend
    setTimeout(() => {
      const purchasedDrink = {
        ...drink,
        purchaseDate: new Date(),
        remainingSips: drink.consumptionCount
      };
      
      // Save to local storage for persistence
      const userDrinksJson = localStorage.getItem("userPurchasedDrinks");
      const userDrinks = userDrinksJson ? JSON.parse(userDrinksJson) : [];
      userDrinks.push(purchasedDrink);
      localStorage.setItem("userPurchasedDrinks", JSON.stringify(userDrinks));
      
      resolve(purchasedDrink);
    }, 1500);
  });
};

export const getUserPurchasedDrinks = () => {
  const userDrinksJson = localStorage.getItem("userPurchasedDrinks");
  return userDrinksJson ? JSON.parse(userDrinksJson) : [];
};

export const consumeDrink = (drinkId: string): Promise<SipResult> => {
  return new Promise((resolve) => {
    const userDrinksJson = localStorage.getItem("userPurchasedDrinks");
    const userDrinks = userDrinksJson ? JSON.parse(userDrinksJson) : [];
    const drinkIndex = userDrinks.findIndex((d: PurchasedDrink) => d.id === drinkId);
    
    if (drinkIndex === -1) {
      throw new Error("Purchased drink not found");
    }
    
    const drink = userDrinks[drinkIndex];
    
    if (drink.remainingSips <= 0) {
      throw new Error("No sips remaining");
    }
    
    drink.remainingSips -= 1;
    userDrinks[drinkIndex] = drink;
    localStorage.setItem("userPurchasedDrinks", JSON.stringify(userDrinks));
    
    const currentSipIndex = drink.consumptionCount - drink.remainingSips - 1;
    
    // Educational content for each drink based on their recipe
    const educationalContent: { [key: string]: { title: string; content: string }[] } = {
      "neon-burst": [
        {
          title: "ERC-721",
          content: "ERC-721 is the standard for representing ownership of non-fungible tokens (NFTs). Each token has a unique identifier and can represent ownership of digital or physical assets, making every token distinct and non-interchangeable."
        },
        {
          title: "ERC-1155",
          content: "ERC-1155 is a multi-token standard that allows for the creation of both fungible and non-fungible tokens within a single smart contract. This reduces gas costs and enables batch transfers of multiple token types."
        },
        {
          title: "SPL Token-2022",
          content: "Solana Program Library Token-2022 is an enhanced token program supporting advanced features like transfer fees, confidential transfers, permanent delegate authority, and metadata extensions for improved token functionality."
        },
        {
          title: "IPFS",
          content: "InterPlanetary File System (IPFS) is a distributed protocol for storing and accessing files, websites, and data. It uses content-addressing to uniquely identify files, making it ideal for storing NFT metadata and images."
        }
      ],
      "cyber-dream": [
        {
          title: "Uniswap V3",
          content: "Uniswap V3 introduces concentrated liquidity, allowing liquidity providers to allocate capital within specific price ranges. This increases capital efficiency and can generate higher fees for active liquidity management."
        },
        {
          title: "Curve Finance",
          content: "Curve Finance specializes in stablecoin trading with low slippage. It uses bonding curves optimized for assets with similar values, making it ideal for trading between stablecoins and similar assets."
        },
        {
          title: "Balancer",
          content: "Balancer is an automated market maker that allows pools with multiple tokens and custom weightings. It functions as both a DEX and an automated portfolio manager, enabling complex trading strategies."
        },
        {
          title: "SushiSwap",
          content: "SushiSwap is a community-driven DEX that forked from Uniswap, adding features like yield farming, lending (Kashi), and cross-chain functionality while distributing governance tokens to liquidity providers."
        }
      ],
      "glitch-fizz": [
        {
          title: "Polygon",
          content: "Polygon is a Layer 2 scaling solution using Plasma sidechains and PoS consensus. It processes transactions off the main Ethereum chain while periodically committing transaction batches to Ethereum for security."
        },
        {
          title: "Arbitrum",
          content: "Arbitrum uses Optimistic Rollups, assuming transactions are valid by default and only running fraud proofs when challenged. This approach significantly reduces gas costs while maintaining Ethereum's security guarantees."
        },
        {
          title: "zkSync",
          content: "zkSync implements ZK Rollups using zero-knowledge proofs to verify transaction validity. It bundles hundreds of transactions into a single proof, achieving high throughput with mathematical security guarantees."
        },
        {
          title: "Lightning Network",
          content: "Lightning Network creates payment channels between users, enabling instant, low-cost Bitcoin transactions. Channels can be linked to form a network, allowing payments through intermediary nodes."
        }
      ],
      "binary-bliss": [
        {
          title: "Cosmos IBC",
          content: "Inter-Blockchain Communication (IBC) protocol enables different blockchains in the Cosmos ecosystem to transfer tokens and data. It provides a standardized way for sovereign blockchains to communicate securely."
        },
        {
          title: "Polkadot",
          content: "Polkadot's parachain architecture allows multiple specialized blockchains to run in parallel while sharing security. Cross-chain messaging enables parachains to interact and share functionality seamlessly."
        },
        {
          title: "Chainlink CCIP",
          content: "Cross-Chain Interoperability Protocol (CCIP) provides a universal standard for cross-chain communication. It enables secure token transfers and arbitrary messaging between different blockchain networks."
        },
        {
          title: "LayerZero",
          content: "LayerZero is an omnichain interoperability protocol that enables applications to move data and tokens across different blockchains seamlessly, creating truly unified multi-chain experiences."
        }
      ],
      "defi-elixir": [
        {
          title: "Compound",
          content: "Compound is a lending protocol where users can supply assets to earn interest or borrow against collateral. Interest rates are determined algorithmically based on supply and demand for each asset."
        },
        {
          title: "Aave",
          content: "Aave pioneered flash loans - uncollateralized loans that must be repaid within the same transaction. It also offers variable and stable interest rates, giving borrowers flexibility in their DeFi strategies."
        },
        {
          title: "Yearn Finance",
          content: "Yearn Finance automates yield farming through Vaults that implement optimal strategies for different assets. It automatically compounds rewards and shifts between protocols to maximize yields for users."
        },
        {
          title: "Convex",
          content: "Convex Finance boosts Curve rewards by locking CRV tokens permanently and redistributing boosted rewards to liquidity providers. It simplifies Curve farming while maximizing returns through collective boost power."
        }
      ],
      "crypto-shield": [
        {
          title: "Cairo Syntax",
          content: "Cairo is a programming language for writing provable programs. Its syntax is designed for creating smart contracts that can generate STARK proofs, enabling scalable and verifiable computation."
        },
        {
          title: "StarkNet",
          content: "StarkNet is a permissionless decentralized ZK-Rollup operating as an Ethereum Layer 2. It uses Cairo language and STARK proofs to enable massive scale for applications without compromising security."
        },
        {
          title: "STARK Proofs",
          content: "STARK (Scalable Transparent Argument of Knowledge) proofs are cryptographic proofs that are quantum-resistant and don't require a trusted setup. They enable verification of computation integrity at scale."
        },
        {
          title: "Felts",
          content: "Field elements (felts) are the basic data type in Cairo, representing integers in a finite field. All Cairo computations operate on felts, enabling efficient proof generation for mathematical operations."
        }
      ],
      "zero-knowledge": [
        {
          title: "zk-SNARKs",
          content: "Zero-Knowledge Succinct Non-Interactive Arguments of Knowledge allow proving possession of certain information without revealing it. They're succinct (small proof size) and enable privacy-preserving verification."
        },
        {
          title: "zk-STARKs",
          content: "Zero-Knowledge Scalable Transparent Arguments of Knowledge are quantum-resistant and don't require trusted setup. They offer better scalability than SNARKs but with larger proof sizes."
        },
        {
          title: "Bulletproofs",
          content: "Bulletproofs are short non-interactive zero-knowledge proofs that don't require a trusted setup. They're particularly efficient for range proofs, proving that a value lies within a specific range without revealing it."
        },
        {
          title: "Commitment Schemes",
          content: "Commitment schemes allow committing to a value while keeping it hidden, then later revealing it with proof of correctness. They're fundamental building blocks for many cryptographic protocols and zero-knowledge systems."
        }
      ]
    };
    
    const drinkContent = educationalContent[drink.id] || [];
    const currentKnowledge = drinkContent[currentSipIndex] || drinkContent[0];
    
    if (currentKnowledge) {
      setTimeout(() => {
        resolve({
          emotion: {
            name: "Learning",
            description: `Understanding ${currentKnowledge.title}`,
            intensity: 8,
            color: "#9b87f5"
          },
          message: currentKnowledge.content
        });
      }, 1000);
    } else {
      // Fallback for drinks without specific content
      const randomEmotionIndex = Math.floor(Math.random() * drink.emotions.length);
      const emotion = drink.emotions[randomEmotionIndex];
      
      setTimeout(() => {
        resolve({
          emotion,
          message: `You experience ${emotion.name.toLowerCase()}: ${emotion.description.toLowerCase()}`
        });
      }, 1000);
    }
  });
};

interface PurchasedDrink extends Drink {
  purchaseDate: Date;
  remainingSips: number;
}

export interface SipResult {
  emotion: {
    name: string;
    description: string;
    intensity: number;
    color: string;
  };
  message: string;
}

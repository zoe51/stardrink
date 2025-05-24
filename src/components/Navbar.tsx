
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Wine, Wallet, Check, AlertTriangle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import walletService from "@/services/walletService";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(true);
  const location = useLocation();
  const { toast } = useToast();
  
  useEffect(() => {
    // Check if MetaMask is installed
    setIsMetaMaskInstalled(walletService.isMetaMaskInstalled());
    
    // Setup event listeners for wallet changes
    if (walletService.isMetaMaskInstalled()) {
      walletService.onAccountsChanged((accounts) => {
        if (accounts.length === 0) {
          // User disconnected their wallet
          setIsWalletConnected(false);
          setWalletAddress("");
          toast({
            title: "Wallet Disconnected",
            description: "Your wallet has been disconnected.",
          });
        } else {
          // Account changed
          setWalletAddress(accounts[0]);
          toast({
            title: "Account Changed",
            description: `Connected to ${walletService.formatAddress(accounts[0])}`
          });
        }
      });
      
      walletService.onChainChanged((chainId) => {
        toast({
          title: "Network Changed",
          description: `Switched to chain ID: ${chainId}`
        });
      });
    }
    
    // Cleanup listeners on component unmount
    return () => {
      walletService.removeListeners();
    };
  }, [toast]);
  
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Drinks", path: "/drinks" },
  ];
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleConnectWallet = async () => {
    if (isWalletConnected) {
      // Disconnect wallet (UI only, MetaMask doesn't have a disconnect method)
      const state = walletService.disconnectWallet();
      setIsWalletConnected(state.isConnected);
      setWalletAddress(state.address);
      toast({
        title: "Wallet Disconnected",
        description: "Your wallet has been disconnected from this site.",
      });
    } else {
      if (!isMetaMaskInstalled) {
        toast({
          title: "MetaMask Not Installed",
          description: "Please install MetaMask extension to connect your wallet.",
          variant: "destructive"
        });
        return;
      }
      
      try {
        // Connect to real wallet using MetaMask
        const state = await walletService.connectWallet();
        setIsWalletConnected(state.isConnected);
        setWalletAddress(state.address);
        toast({
          title: "Wallet Connected!",
          description: `Connected to ${walletService.formatAddress(state.address)}`,
        });
      } catch (error) {
        console.error("Error connecting wallet:", error);
        toast({
          title: "Connection Failed",
          description: "Failed to connect to your wallet. Please try again.",
          variant: "destructive"
        });
      }
    }
  };

  const formatAddress = (address: string) => {
    return walletService.formatAddress(address);
  };
  
  return (
    <nav className="bg-black/30 backdrop-blur-md border-b border-white/10 fixed w-full z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <Wine size={24} className="text-cyber-purple mr-2" />
            <span className="text-xl font-bold text-glow">Stardrink</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors ${
                    isActive(link.path)
                      ? "text-cyber-pink"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Connect Wallet Button (Desktop) */}
          <div className="hidden md:block">
            <button 
              onClick={handleConnectWallet}
              className={`flex items-center px-4 py-2 rounded-full transition-all ${
                !isMetaMaskInstalled
                  ? "bg-yellow-600 hover:bg-yellow-700"
                  : isWalletConnected 
                    ? "bg-green-600 hover:bg-green-700" 
                    : "bg-gradient-to-r from-cyber-purple to-cyber-pink hover:opacity-90"
              } text-white`}
            >
              {!isMetaMaskInstalled ? (
                <>
                  <AlertTriangle size={16} className="mr-2" />
                  Install MetaMask
                </>
              ) : isWalletConnected ? (
                <>
                  <Check size={16} className="mr-2" />
                  {formatAddress(walletAddress)}
                </>
              ) : (
                <>
                  <Wallet size={16} className="mr-2" />
                  Connect Wallet
                </>
              )}
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-effect border-t border-white/10">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 ${
                  isActive(link.path)
                    ? "text-cyber-pink"
                    : "text-white/70 hover:text-white"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button 
              onClick={() => {
                handleConnectWallet();
                setIsMobileMenuOpen(false);
              }}
              className={`flex items-center w-full py-2 transition-colors ${
                !isMetaMaskInstalled
                  ? "text-yellow-400"
                  : isWalletConnected 
                    ? "text-green-400" 
                    : "text-white/70 hover:text-white"
              }`}
            >
              {!isMetaMaskInstalled ? (
                <>
                  <AlertTriangle size={16} className="mr-2" />
                  Install MetaMask
                </>
              ) : isWalletConnected ? (
                <>
                  <Check size={16} className="mr-2" />
                  {formatAddress(walletAddress)}
                </>
              ) : (
                <>
                  <Wallet size={16} className="mr-2" />
                  Connect Wallet
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

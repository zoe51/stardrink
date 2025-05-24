import { ethers } from 'ethers';

// Extend Window interface to include ethereum property
declare global {
  interface Window {
    ethereum?: any;
  }
}

export interface WalletState {
  isConnected: boolean;
  address: string;
  chainId?: string;
  provider?: ethers.providers.Web3Provider;
  signer?: ethers.Signer;
}

class WalletService {
  // Check if MetaMask is installed
  isMetaMaskInstalled(): boolean {
    return typeof window !== 'undefined' && !!window.ethereum;
  }

  // Connect to MetaMask wallet
  async connectWallet(): Promise<WalletState> {
    if (!this.isMetaMaskInstalled()) {
      throw new Error('MetaMask is not installed');
    }

    try {
      // Request account access
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send('eth_requestAccounts', []);
      
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      const network = await provider.getNetwork();
      
      return {
        isConnected: true,
        address,
        chainId: network.chainId.toString(),
        provider,
        signer
      };
    } catch (error) {
      console.error('Error connecting to wallet:', error);
      throw error;
    }
  }

  // Disconnect wallet (for UI state management)
  disconnectWallet(): WalletState {
    return {
      isConnected: false,
      address: '',
    };
  }

  // Format address for display (e.g., 0x1234...5678)
  formatAddress(address: string): string {
    if (!address) return '';
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }

  // Listen for account changes
  onAccountsChanged(callback: (accounts: string[]) => void): void {
    if (this.isMetaMaskInstalled()) {
      window.ethereum.on('accountsChanged', callback);
    }
  }

  // Listen for chain changes
  onChainChanged(callback: (chainId: string) => void): void {
    if (this.isMetaMaskInstalled()) {
      window.ethereum.on('chainChanged', callback);
    }
  }

  // Remove listeners
  removeListeners(): void {
    if (this.isMetaMaskInstalled()) {
      window.ethereum.removeAllListeners('accountsChanged');
      window.ethereum.removeAllListeners('chainChanged');
    }
  }
}

export default new WalletService();

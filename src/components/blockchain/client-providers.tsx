"use client";

import StarknetProvider from "../blockchain/StarknetProviders";
import { WalletProvider } from "../blockchain/wallet-connect-context";


export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <StarknetProvider>
      <WalletProvider>

          {children}

      </WalletProvider>
    </StarknetProvider>
  );
} 

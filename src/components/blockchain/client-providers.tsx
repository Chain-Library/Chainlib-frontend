"use client";

import StarknetProvider from "../blockchain/StarknetProviders";
import { WalletProvider } from "../blockchain/WalletProvider";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StarknetProvider>
      <WalletProvider>{children}</WalletProvider>
    </StarknetProvider>
  );
}

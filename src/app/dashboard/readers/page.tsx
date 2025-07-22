"use-client";
import StarknetProvider from "@/components/blockchain/StarknetProviders";
import { WalletProvider } from "@/components/blockchain/wallet-connect-context";
import { Header } from "@/components/dashboard/header";
// import { useState } from "react";
export default function DashboardHome() {
  return (
    <>
      <StarknetProvider>
        <WalletProvider>
         
          <Header title="Dashboard" />
          <div className="space-y-6">
            <div className="flex flex-col items-center justify-center h-screen">
              <h1 className="text-2xl font-bold text-gray-800">
                Reader Dashboard
              </h1>
              <p className="text-gray-600 mt-2">
                Welcome to your personalized reading space!
              </p>
            </div>
          </div>
        </WalletProvider>
      </StarknetProvider>
    </>
  );
}

"use client";
import StatCard from "@/components/analytics/StatCard";
import { stats } from "@/assets/data/dummyData";
import Transactions from "@/components/analytics/Transactions";
import PayoutRequests from "@/components/analytics/PayoutRequests";
import TrendingBooks from "@/components/analytics/TrendingBooks";
import TopAuthors from "@/components/analytics/TopAuthors";
import StarknetProvider from "@/components/blockchain/StarknetProviders";
import { WalletProvider } from "@/components/blockchain/wallet-connect-context";
import { Header } from "@/components/dashboard/header";

export default function DashboardHome() {
  return (
    <>
      <StarknetProvider>
        <WalletProvider>
          <Header title="Dashboard" />
          <div className="bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <StatCard key={index} {...stat} />
                ))}
              </div>
              <div className="mt-6">
                <Transactions />
              </div>
              <PayoutRequests />
              <TrendingBooks />
              <TopAuthors />
            </div>
          </div>
        </WalletProvider>
      </StarknetProvider>
    </>
  );
}

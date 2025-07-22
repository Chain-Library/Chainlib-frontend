"use-client";
import { Header } from "@/components/dashboard/header";
// import { useState } from "react";
export default function DashboardHome() {
    // const [isWalletConnected, setIsWalletConnected] = useState(true);
    // const handleDisconnect = () => {
    //   setIsWalletConnected(false);
    // };
  return (
    <>
    {/* onDisconnect={handleDisconnect} */}
    <Header title="Reading Stats"  />
      <div className="space-y-6">
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-gray-800">Reading stats</h1>
        <p className="text-gray-600 mt-2">Welcome to your personalized reading space!</p>
      </div>
    </div>
    </>
  
  );
}






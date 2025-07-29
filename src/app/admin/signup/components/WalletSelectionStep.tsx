import React, { useState, useEffect } from "react";
import { Wallet } from "lucide-react";
import { SignInStep } from "@/lib/types";
import BackButton from "./BackButton";
import { useWalletContext } from "@/components/blockchain/WalletProvider";
import { useConnect, useAccount, Connector } from "@starknet-react/core";
import { StarknetkitConnector, useStarknetkitConnectModal } from "starknetkit";
import { WebWalletConnector } from "starknetkit/webwallet";

interface WalletSelectionStepProps {
  onBack: () => void;
  onStepChange: (step: SignInStep) => void;
}



export default function WalletSelectionStep({
  onBack,
  onStepChange,
}: WalletSelectionStepProps) {
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionError, setConnectionError] = useState("");
  
  const { connect, connectors } = useConnect();
  const { isConnected, address } = useAccount();
  const { connectWallet } = useWalletContext();

  // Customize WebWalletConnector with an icon
  const customizedConnectors = connectors.map((connector) => {
    if (connector instanceof WebWalletConnector) {
      return new WebWalletConnector({});
    }
    return connector;
  });

  const { starknetkitConnectModal } = useStarknetkitConnectModal({
    connectors: customizedConnectors as StarknetkitConnector[],
  });

  const handleWalletConnect = async (connector: Connector) => {
    try {
      setIsConnecting(true);
      setConnectionError("");
      setSelectedWallet(connector.id);
      
      await connect({ connector });
      
      // Wait a bit for connection to establish
      setTimeout(() => {
        if (isConnected) {
          onStepChange("success");
        }
      }, 1000);
    } catch (error) {
      console.error("Connection failed:", error);
      setConnectionError("Failed to connect wallet. Please try again.");
      setSelectedWallet(null);
    } finally {
      setIsConnecting(false);
    }
  };

  const handleStarknetkitConnect = async () => {
    try {
      setIsConnecting(true);
      setConnectionError("");
      
      const { connector } = await starknetkitConnectModal();
      if (connector) {
        await connect({ connector: connector as Connector });
        setTimeout(() => {
          if (isConnected) {
            onStepChange("success");
          }
        }, 1000);
      }
    } catch (error) {
      console.error("Connection failed:", error);
      setConnectionError("Failed to connect wallet. Please try again.");
    } finally {
      setIsConnecting(false);
    }
  };

  // // Check if already connected
  // useEffect(() => {
  //   if (isConnected && address) {
  //     onStepChange("success");
  //   }
  // }, [isConnected, address, onStepChange]);



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-inter">
      <div className="bg-white rounded-xl shadow p-6 max-w-xl w-full mx-auto">
        <BackButton onBack={onBack} />

        <h2 className="text-2xl font-bold text-[#5D5D5D] mb-1">Welcome Back</h2>

        <p className="text-[#5D5D5D] text-base mb-6">
          Connect to your registered wallet address to sign in
        </p>
        
        {connectionError && (
          <div className="bg-red-50 border border-red-200 rounded-md p-3 mb-6">
            <p className="text-red-600 text-sm">{connectionError}</p>
          </div>
        )}
        
        <div className="flex flex-col gap-4">
          {/* Available Wallets */}
          <div className="space-y-3">
            {connectors.map((connector) => (
              <button
                key={connector.id}
                onClick={() => handleWalletConnect(connector)}
                disabled={isConnecting}
                className={`w-full flex items-center justify-between p-4 border rounded-lg transition-all hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed ${
                  selectedWallet === connector.id ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-lg">
                    <img src={connector.icon as string} alt="" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-[#5D5D5D]">
                      {connector.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {connector.available() ? 'Available' : 'Install Required'}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {isConnecting && selectedWallet === connector.id ? (
                    <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <button className="text-base px-4 py-1.5 bg-blue-100 text-[#0F265C] rounded-full font-medium hover:bg-blue-200 transition">
                      Connect
                    </button>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
        
        <div className="mt-6">
          <p className="text-sm text-center text-[#3D3D3D]">
            By connecting your wallet, you agree to our{" "}
            <a href="#" className="text-[#096CFF] hover:underline">Terms and Conditions</a> and our{" "}
            <a href="#" className="text-[#096CFF] hover:underline">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
}

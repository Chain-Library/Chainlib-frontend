import React, { useRef, useEffect, useState } from "react";
import {
  useAccount,
  useConnect,
  useDisconnect,
  Connector,
} from "@starknet-react/core";
import { AccountTypeModal } from "./account-type-modal";
import { StarknetkitConnector, useStarknetkitConnectModal } from "starknetkit";
import { WebWalletConnector } from "starknetkit/webwallet";
import { MoreVertical } from "lucide-react";
import Image from "next/image";

type ConnectButtonVariant = "default" | "navbar";

interface ConnectButtonProps {
  variant?: ConnectButtonVariant;
  isOpen: boolean;
  isClosed?: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSelect: (walletId: string) => void;
  showAddress?: boolean;
  className?: string;
}

export function ConnectButton({
  isOpen,
  setIsModalOpen,
  showAddress = false,
  className = "",
}: ConnectButtonProps) {
  const { connect, connectors } = useConnect();
  const { isConnected, address } = useAccount();
  const { disconnect } = useDisconnect();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFirstTimeUser, setIsFirstTimeUser] = useState(false);
  const [selectedAccountType, setSelectedAccountType] = useState<
    "readers" | "writers" | null
  >(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Customize WebWalletConnector with an icon
  const customizedConnectors = connectors.map((connector) => {
    if (connector instanceof WebWalletConnector) {
      // Recreate the connector with the same network and new icon
      return new WebWalletConnector({});
    }
    return connector;
  });

  const { starknetkitConnectModal } = useStarknetkitConnectModal({
    connectors: customizedConnectors as StarknetkitConnector[],
  });

  const handleConnect = async () => {
    try {
      const { connector } = await starknetkitConnectModal();
      if (connector) {
        await connect({ connector: connector as Connector });
        setIsFirstTimeUser(true); // Trigger AccountTypeModal after connection
      }
    } catch (error) {
      console.error("Connection failed:", error);
    }
  };
  useEffect(() => {
    if (isOpen && !isConnected) {
      handleConnect();
      //to prevent retrigerring
      setIsModalOpen(false);
    }
  }, [isOpen]);

  const handleAccountCreation = () => {
    if (selectedAccountType) {
      console.log(`Creating ${selectedAccountType} account`);
      setIsFirstTimeUser(false);
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // If showAddress is true and wallet is connected, show the wallet address
  if (showAddress && isConnected && address) {
    return (
      <div className="relative" ref={dropdownRef}>
        <div
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0d0e24] border border-gray-800 cursor-pointer hover:border-gray-600 transition-colors ${className}`}
        >
          <div className="h-8 w-8 rounded-full border-2 border-teal-500 overflow-hidden">
            <Image
              src="/Avater.svg"
              alt="Wallet Avatar"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
          <span className="text-white font-medium">
            {address.slice(0, 6)}…{address.slice(-4)}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsDropdownOpen(!isDropdownOpen);
            }}
            className="h-8 w-8 p-0 text-gray-400 hover:text-white transition-colors"
          >
            <MoreVertical size={16} />
          </button>
        </div>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-blue-600 border border-blue-800 overflow-hidden z-50">
            <div className="py-1">
              <button
                onClick={() => {
                  disconnect();
                  setIsDropdownOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-blue-700 transition-colors"
              >
                Disconnect
              </button>
            </div>
          </div>
        )}

        <AccountTypeModal
          isOpen={isFirstTimeUser}
          onClose={() => setIsFirstTimeUser(false)}
          selectedType={selectedAccountType}
          onSelectType={setSelectedAccountType}
          onSubmit={handleAccountCreation}
        />
      </div>
    );
  }

  // Default behavior for connection modal
  return (
    <div className="relative" ref={dropdownRef}>
      <AccountTypeModal
        isOpen={isFirstTimeUser}
        onClose={() => setIsFirstTimeUser(false)}
        selectedType={selectedAccountType}
        onSelectType={setSelectedAccountType}
        onSubmit={handleAccountCreation}
      />
    </div>
  );
}

"use client";

import React, { useState, useRef, useEffect } from "react";
import { useAccount, useDisconnect } from "@starknet-react/core";
import { MoreVertical } from "lucide-react";
import Image from "next/image";
import WalletDisconnectModal from "./Wallet-disconnect-modal";

interface WalletDisplayProps {
  variant?: "default" | "compact" | "minimal";
  showDropdown?: boolean;
  className?: string;
  onDisconnect?: () => void;
}

export function WalletDisplay({
  variant = "default",
  showDropdown = true,
  className = "",
  onDisconnect,
}: WalletDisplayProps) {
  const { isConnected, address } = useAccount();
  const { disconnect } = useDisconnect();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDisconnectModalOpen, setIsDisconnectModalOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
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

  if (!isConnected || !address) {
    return null;
  }

  const handleDisconnect = () => {
    disconnect();
    setIsDisconnectModalOpen(false);
    onDisconnect?.();
  };

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}…${addr.slice(-4)}`;
  };

  if (variant === "minimal") {
    return (
      <span className={`text-sm text-gray-600 ${className}`}>
        {formatAddress(address)}
      </span>
    );
  }

  if (variant === "compact") {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <div className="h-6 w-6 rounded-full border border-teal-500 overflow-hidden">
          <Image
            src="/Avater.svg"
            alt="Wallet Avatar"
            width={24}
            height={24}
            className="object-cover"
          />
        </div>
        <span className="text-sm font-medium text-gray-700">
          {formatAddress(address)}
        </span>
      </div>
    );
  }

  // Default variant
  return (
    <div className="relative" ref={dropdownRef}>
      <div
        onClick={() => showDropdown && setIsDropdownOpen(!isDropdownOpen)}
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
        <span className="text-white font-medium">{formatAddress(address)}</span>
        {showDropdown && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsDropdownOpen(!isDropdownOpen);
            }}
            className="h-8 w-8 p-0 text-gray-400 hover:text-white transition-colors"
          >
            <MoreVertical size={16} />
          </button>
        )}
      </div>

      {/* Dropdown Menu */}
      {showDropdown && isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-blue-600 border border-blue-800 overflow-hidden z-50">
          <div className="py-1">
            <button
              onClick={() => setIsDisconnectModalOpen(true)}
              className="w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-blue-700 transition-colors"
            >
              Disconnect
            </button>
          </div>
        </div>
      )}

      <WalletDisconnectModal
        isOpen={isDisconnectModalOpen}
        onClose={() => setIsDisconnectModalOpen(false)}
        onDisconnect={handleDisconnect}
      />
    </div>
  );
}

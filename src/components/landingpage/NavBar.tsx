"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Image4 from "@/assets/Images/ImageLogo.png";
import { useState, useRef, useEffect } from "react";
import {  MoreVertical } from "lucide-react";
import AnimationWrapper from "@/components/motion/Animation-wrapper";
import WalletConnectModal from "../blockchain/Wallet-connect-modal";
import WalletDisconnectModal from "../blockchain/Wallet-disconnect-modal";

// starknet imports
import { useWalletContext } from "../blockchain/WalletProvider";

const NavBar = () => {
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
  const [isDisconnectModalOpen, setIsDisconnectModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { account, connectWallet, disconnectWallet, connectors } =
    useWalletContext();

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

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleWalletSelect = (walletId: string) => {
    const connector = connectors.find((c) => c.id === walletId);
    if (connector) {
      connectWallet(connector); // invoke Starknet-React’s useConnect() :contentReference[oaicite:3]{index=3}
    }
    setIsConnectModalOpen(false);
  };

  const handleConnectWallet = () => {
    setIsConnectModalOpen(true);
  };

  const handleWalletClick = () => {
    setIsDisconnectModalOpen(true);
  };

  const handleDisconnect = () => {
    disconnectWallet(); // real Starknet-React disconnect :contentReference[oaicite:4]{index=4}
    setIsDisconnectModalOpen(false);
  };

  return (
    <>
      <div className="flex justify-between h-16 items-center px-10 sticky top-0 left-0 bg-white">
        <div className="flex items-center">
          <Link href="/">
            <span className="flex items-center cursor-pointer">
              <Image
                src={Image4}
                alt="Logo"
                width={24}
                height={24}
                className="h-9 w-9"
              />
              <span className="ml-2 text-[#0F265C] text-lg font-medium">
                ChainLib
              </span>
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="text-gray-500 font-medium hover:text-gray-900"
          >
            Home
          </Link>
          <Link
            href="/books"
            className="text-gray-500 font-medium hover:text-gray-900"
          >
            Books
          </Link>
          <Link
            href="/how-it-works"
            className="text-gray-500 font-medium hover:text-gray-900"
          >
            How It Works
          </Link>
          <Link
            href="/about-us"
            className="text-gray-500 font-medium  hover:text-gray-900"
          >
            About ChainLib
          </Link>
        </nav>

        {/* <div className="hidden md:flex items-center space-x-4">
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-sm font-medium">
            Log In
        </button>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
            Sign Up
        </button>
    </div> */}

        {/* Wallet Connection Button or Connected Wallet */}
        <div className="hidden md:block">
          <AnimationWrapper variant="slideLeft">
            {!account ? (
              <button
                onClick={handleConnectWallet}
                className="px-5 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-900 z-100  transition-colors"
              >
                Connect Wallet
              </button>
            ) : (
              <div className="relative" ref={dropdownRef}>
                <div
                  onClick={handleWalletClick}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0d0e24] border border-gray-800 cursor-pointer hover:border-gray-600 transition-colors"
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
                    {account.slice(0, 6)}…{account.slice(-4)}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDropdown();
                    }}
                    className="h-8 w-8 p-0 text-gray-400 hover:text-white transition-colors"
                  >
                    <MoreVertical size={16} />
                  </button>
                </div>

                {/* Custom Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-blue-600 border border-blue-800 overflow-hidden">
                    <div className="py-1">
                      <button
                        onClick={handleWalletClick}
                        className="w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-blue-600 transition-colors"
                      >
                        Disconnect
                      </button>
                      <Link
                        href="/sign-in"
                        className="w-full block text-left px-4 py-2 text-sm text-gray-200 hover:bg-blue-600 transition-colors"
                      >
                        Sign in
                      </Link>
                  
                    </div>
                  </div>
                )}
              </div>
            )}
          </AnimationWrapper>
        </div>
      </div>
      <WalletConnectModal
        isOpen={isConnectModalOpen}
        onClose={() => setIsConnectModalOpen(false)}
        onSelect={handleWalletSelect}
      />
      <WalletDisconnectModal
        isOpen={isDisconnectModalOpen}
        onClose={() => setIsDisconnectModalOpen(false)}
        onDisconnect={handleDisconnect}
      />
    </>
  );
};

export default NavBar;



"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Image4 from "@/assets/Images/ImageLogo.png";
import { useState, useRef, useEffect} from "react";
import { MoreVertical } from "lucide-react";
import AnimationWrapper from "@/components/motion/Animation-wrapper";
import WalletDisconnectModal from "../blockchain/Wallet-disconnect-modal";
import { ConnectButton } from "../../components/blockchain/connect-button";
// starknet imports
import { useWalletContext } from "../blockchain/WalletProvider";
import { useAccount, useDisconnect } from "@starknet-react/core";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const NavBar = () => {
  const pathname = usePathname();
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
  const [isDisconnectModalOpen, setIsDisconnectModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { account } = useAccount();
  const path = usePathname();

  const dropdownRef = useRef<HTMLDivElement>(null);
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Books", href: "/books" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "About ChainLib", href: "/about-us" },
  ];

  const { connectWallet, disconnectWallet, connectors } = useWalletContext();
  const { disconnect } = useDisconnect();
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

  const handleWalletClickDisconnect = () => {
    setIsDisconnectModalOpen(true);
  };

  const handleDisconnect = () => {
    disconnect(); // real Starknet-React disconnect :contentReference[oaicite:4]{index=4}
    setIsDisconnectModalOpen(false);
  };

  if (path.includes("dashboard")) {
    return;
  }

  return (
    <>
      <div className="flex justify-between py-4 items-center px-[60px] z-[50] sticky top-0 left-0 bg-white border-b-[#E7E7E7] border-b-1">
        <Link href="/">
          <span className="flex items-center cursor-pointer space-x-2">
            <Image
              src={Image4}
              alt="Logo"
              width={36}
              height={36}
              className="h-9 w-9"
            />
            <span className="text-[#0F265C] text-xl leading-[26px] font-bold">
              ChainLib
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex space-x-6 text-[#5D5D5D] text-sm cursor-pointer">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={clsx(
                "hover:text-gray-900 py-2 px-4 rounded-[16px]",
                pathname === href && "bg-[#EDF7FF]"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

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
                  onClick={handleWalletClickDisconnect}
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
                    {account?.address.slice(0, 6)}…{account?.address.slice(-4)}
                  </span>
                  <button className="h-8 w-8 p-0 text-gray-400 hover:text-white transition-colors">
                    <MoreVertical size={16} />
                  </button>
                </div>

                {/* Custom Dropdown Menu */}
                {/* {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-blue-600 border border-blue-800 overflow-hidden">
                    <div className="py-1">
                      <button
                        onClick={handleWalletClickDisconnect}
                        className="w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-blue-600 transition-colors"
                      >
                        Disconnect
                      </button>
                    </div>
                  </div>
                )} */}
              </div>
            )}
          </AnimationWrapper>
        </div>
      </div>
      <ConnectButton
        isOpen={isConnectModalOpen}
        onSelect={handleWalletSelect}
        setIsModalOpen={setIsConnectModalOpen}
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

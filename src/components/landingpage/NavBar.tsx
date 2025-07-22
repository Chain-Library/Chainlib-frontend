"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MoreVertical, Menu, X } from "lucide-react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import AnimationWrapper from "@/components/motion/Animation-wrapper";
import WalletConnectModal from "../blockchain/Wallet-connect-modal";
import WalletDisconnectModal from "../blockchain/Wallet-disconnect-modal";
import { useWalletContext } from "../blockchain/WalletProvider";
import Image4 from "@/assets/Images/ImageLogo.png";
// Click outside hook — allows ref.current to be null
function useClickOutside<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  handler: () => void,
  active: boolean
) {
  useEffect(() => {
    if (!active) return;
    function handleClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [active, handler, ref]);
}

const NavBar = () => {
  const pathname = usePathname();
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
  const [isDisconnectModalOpen, setIsDisconnectModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);         // desktop
  const [mobileOpen, setMobileOpen] = useState(false);                // mobile
  const dropdownRef = useRef<HTMLDivElement | null>(null);            // desktop
  const mobileDrawerRef = useRef<HTMLDivElement | null>(null);        // mobile

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Books", href: "/books" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "About ChainLib", href: "/about-us" },
  ];

  const { account, connectWallet, disconnectWallet, connectors } =
    useWalletContext();

  // Close dropdown on outside click (desktop)
  useClickOutside(dropdownRef, () => setIsDropdownOpen(false), isDropdownOpen);

  // Close mobile drawer on outside click (mobile)
  useClickOutside(mobileDrawerRef, () => setMobileOpen(false), mobileOpen);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
    setIsDropdownOpen(false);
  }, [pathname]);

  // Wallet handlers
  const handleWalletSelect = (walletId: string) => {
    const connector = connectors.find((c) => c.id === walletId);
    if (connector) connectWallet(connector);
    setIsConnectModalOpen(false);
  };
  const handleConnectWallet = () => setIsConnectModalOpen(true);
  const handleWalletClick = () => setIsDisconnectModalOpen(true);
  const handleDisconnect = () => {
    disconnectWallet();
    setIsDisconnectModalOpen(false);
  };

  // Hide NavBar on dashboard pages
  if (pathname.includes("dashboard")) {
    return null;
  }

  return (
    <>
      {/* NavBar Container */}
      <header>
        <div className="flex justify-between items-center py-4   z-[50] sticky top-0 left-0 bg-white border-b-[#E7E7E7] border-b-1 md:px-[60px] px-5">
          {/* Logo & Brand */}
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

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex space-x-6 text-[#5D5D5D] text-sm">
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

          {/* Desktop Wallet Button / Avatar */}
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
                      onClick={e => {
                        e.stopPropagation();
                        setIsDropdownOpen((v) => !v);
                      }}
                      className="h-8 w-8 p-0 text-gray-400 hover:text-white transition-colors"
                    >
                      <MoreVertical size={16} />
                    </button>
                  </div>
                  {/* Desktop Dropdown */}
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

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Drawer */}
        <nav
          ref={mobileDrawerRef}
          className={clsx(
            "md:hidden fixed inset-y-0 right-0 w-4/5 max-w-xs bg-white shadow-lg transform transition-transform duration-300 z-50 mt-18 flex flex-col",
            mobileOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <ul className="flex flex-col gap-2 mt-10 px-6">
            {navItems.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={clsx(
                    "block w-full rounded-lg py-3 px-4 text-base font-medium",
                    pathname === href
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-700 hover:bg-gray-100"
                  )}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="mt-auto px-6 pb-10">
            {!account ? (
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  setIsConnectModalOpen(true);
                }}
                className="w-full py-2 px-4 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-800 transition-colors"
              >
                Connect Wallet
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  setIsDisconnectModalOpen(true);
                }}
                className="w-full py-2 px-4 rounded-full bg-gray-100 text-gray-800 font-medium hover:bg-gray-200 transition-colors"
              >
                Disconnect {account.slice(0, 6)}…{account.slice(-4)}
              </button>
            )}
          </div>
        </nav>
        {/* Mobile Backdrop */}
        {mobileOpen && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30"
            aria-hidden="true"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </header>

      {/* Wallet Modals */}
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

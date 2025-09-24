"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Bell } from "lucide-react";
import Image from "next/image";
import WalletDisconnectModal from "../../components/blockchain/Wallet-disconnect-modal";
import { useWalletContext } from "../blockchain/WalletProvider";
import user from "../../../public/user1.svg";
import check from "../../../public/check.svg";

interface HeaderProps {
  title: string | React.ReactNode;
}

export function Header({ title }: HeaderProps) {
  const [isDisconnectModalOpen, setIsDisconnectModalOpen] = useState(false);
  const router = useRouter();
  const { account, disconnectWallet } = useWalletContext();

  const handleProfileClick = () => {
    setIsDisconnectModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsDisconnectModalOpen(false);
  };

  const handleDisconnect = () => {
    // Disconnect from wallet
    disconnectWallet();

    // Clear any authentication tokens or user data
    localStorage.removeItem("walletAddress");
    localStorage.removeItem("userToken");

    // Close the modal
    setIsDisconnectModalOpen(false);

    // Navigate to home page
    router.push("/");

    console.log("User disconnected and redirected to home");
  };

  return (
    <>
      <header className="bg-white px-4 py-2 z-50 fixed w-full border-b top-0 border-[#e7e7e7] flex items-center justify-between">
        <h1 className="md:text-xl text-base font-semibold text-[#000b21]">
          {title}
        </h1>

        <div className="flex items-center gap-4 space-x-3">
          <div className="relative">
            <Bell className="text-[#5d5d5d] cursor-pointer" size={20} />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#ff5c5c] rounded-full"></div>
          </div>
          <div
            className="flex items-center gap-2 border p-1 border-[#E7E7E7] rounded mr-72 cursor-pointer"
            onClick={handleProfileClick}
          >
            <div className="w-8 h-8 rounded-sm bg-[#dba736] flex items-center justify-center overflow-hidden">
              <Image
                src={user}
                alt="Profile"
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
            <div className="text-sm">
              <div className="flex items-center gap-1">
                <span className="font-medium">Joseph Yanum</span>
                <Image src={check} alt="Profile" className="object-cover" />
              </div>
              {account ? (
                <span className="text-[#888888] text-xs">
                  {account.slice(0, 6)}…{account.slice(-4)}
                </span>
              ) : (
                <span className="text-[#888888] text-xs">@joeyyanum</span>
              )}
            </div>
          </div>
        </div>
      </header>

      <WalletDisconnectModal
        isOpen={isDisconnectModalOpen}
        onClose={handleCloseModal}
        onDisconnect={handleDisconnect}
      />
    </>
  );
}

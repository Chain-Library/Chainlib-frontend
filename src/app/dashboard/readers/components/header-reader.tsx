"use client";

import { Bell } from "lucide-react";
import Image from "next/image";
import { useWalletContext } from "@/components/blockchain/WalletProvider";
import user from "../../../../../public/user1.svg";
import check from "../../../../../public/check.svg";
import Logo from "../../../../../public/logo.svg";

export function HeaderReader() {
  const { account } = useWalletContext();

  return (
    <header className="bg-white px-4 py-2 z-50 fixed w-full border-b top-0 border-[#e7e7e7] flex justify-between items-center">
      {/* Left Side - Logo */}
      <div className="flex items-center">
        <Image
          src={Logo}
          alt="Brand logo"
          width={36}
          height={36}
          className="h-9 w-9 rounded-full"
        />
      </div>

      {/* Right Side - Notification and User */}
      <div className="flex items-center gap-2 border p-1 border-[#E7E7E7] rounded">
        <div className="relative">
          <Bell className="text-[#5d5d5d] cursor-pointer" size={20} />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#ff5c5c] rounded-full"></div>
        </div>
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
            <Image
              src={check}
              alt="Verified"
              className="object-cover"
              width={32}
            />
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
    </header>
  );
}

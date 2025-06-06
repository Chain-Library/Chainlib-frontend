"use client"

import type React from "react"

import Image from "next/image"
import { Input } from "../ui/input"
import { handlePaste } from "../../lib/utils"

export interface WalletAddressType {
  braavos: string
  argent: string
}

interface LinkWalletProps {
  walletAddress: WalletAddressType
  setWalletAddress: React.Dispatch<React.SetStateAction<WalletAddressType>>
}

export default function LinkWallet({ walletAddress, setWalletAddress }: LinkWalletProps) {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    const { name, value } = target

    setWalletAddress((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <section className="w-full mx-auto flex items-start flex-col gap-6 bg-[var(--color-background)] shadow-[0px_4px_12px_#1212120A] rounded-lg p-4">
      <div className="w-full flex items-center justify-between gap-10">
        <h1 className="text-[var(--color-neutral-300)] text-lg font-bold">Link Wallet</h1>
        <span className="text-xs font-normal text-[var(--color-neutral-600)] block rounded-lg bg-[var(--color-neutral-100)] px-3 py-1.5">
          Change Wallet Address
        </span>
      </div>

      <form className="w-full flex flex-col items-start gap-6">
        <div className="w-full flex flex-col gap-3.5 items-start">
          <div className="w-full flex gap-10 items-center">
            <div className="flex items-center gap-2">
              <Image src={"/braavos.svg"} alt="Wallet Icon" width={14} height={14} className="w-6 h-6" />
              <p className="text-sm font-bold text-[var(--color-neutral-600)]">
                Braavos <span className="font-normal">(Starknet)</span>
              </p>
            </div>
          </div>

          <div className="w-full border-[1px] border-[var(--color-neutral-100)] rounded-lg py-3.5 px-4 flex items-center justify-between gap-10">
            <Input
              name="braavos"
              type="text"
              placeholder="Enter wallet address"
              value={walletAddress.braavos}
              onChange={handleChange}
              className="border-none outline-none ring-0 focus:ring-0 focus:outline-none focus:border-none shadow-none text-sm font-normal text-[var(--color-neutral-300)] w-full"
            />
            <button
              onClick={() => handlePaste("braavos", setWalletAddress)}
              type="button"
              className="text-sm font-normal text-[var(--color-neutral-400)] flex items-center justify-center gap-2 hover:text-[var(--color-neutral-300)] transition-colors"
            >
              <Image src="/paste-icon.svg" alt="button-icon" width={20} height={20} />
              Paste
            </button>
          </div>
        </div>

        <div className="w-full flex flex-col gap-3.5 items-start">
          <div className="w-full flex gap-10 items-center">
            <div className="flex items-center gap-2">
              <Image src={"/stark.svg"} alt="Wallet Icon" width={14} height={14} className="w-6 h-6" />
              <p className="text-sm font-bold text-[var(--color-neutral-600)]">
                Argent <span className="font-normal">(Starknet)</span>
              </p>
            </div>
          </div>

          <div className="w-full border-[1px] border-[var(--color-neutral-100)] rounded-lg py-3.5 px-4 flex items-center justify-between gap-10">
            <Input
              name="argent"
              type="text"
              placeholder="Enter wallet address"
              value={walletAddress.argent}
              onChange={handleChange}
              className="border-none outline-none ring-0 focus:ring-0 focus:outline-none focus:border-none shadow-none text-sm font-normal text-[var(--color-neutral-300)] w-full"
            />
            <button
              onClick={() => handlePaste("argent", setWalletAddress)}
              type="button"
              className="text-sm font-normal text-[var(--color-neutral-400)] flex items-center justify-center gap-2 hover:text-[var(--color-neutral-300)] transition-colors"
            >
              <Image src="/paste-icon.svg" alt="button-icon" width={20} height={20} />
              Paste
            </button>
          </div>
        </div>
      </form>
    </section>
  )
}

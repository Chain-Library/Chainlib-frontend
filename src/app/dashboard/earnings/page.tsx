"use client"


import EarningsSummary from "@/components/ dashboard-earnings/EarningSummary"
import LinkWallet from "@/components/ dashboard-earnings/LinkWallet"
import type { EarningTab } from "@/lib/interfaces/EarningTabInterface"
import { useEffect, useState } from "react"

const earningsSumaryDetails: EarningTab[] = [
  { title: "Current Balance", amount: 3150.0, border: "border-[var(--color-primary-100)]" },
  { title: "Pending Payout", amount: 100.06, border: "border-[#2396413D]" },
  { title: "Total Payout", amount: 2500.01, border: "border-[#822ECB3D]" },
  { title: "Total Earned", amount: 2730.19, border: "border-[var(--color-primary-100)]" },
]

function EarningsPage() {
  const [walletAddress, setWalletAddress] = useState({
    braavos: "",
    argent: "",
  })

  const ADDRESS_KEY = "walletAddressKey"

  // This function loads saved addresses
  useEffect(() => {
    const savedAddresses = localStorage.getItem(ADDRESS_KEY)
    if (savedAddresses) {
      try {
        const parsedAddresses = JSON.parse(savedAddresses)
        setWalletAddress(parsedAddresses)
      }
      catch (error) {
        console.error("Failed to parse saved addresses:", error)
      }
    }
  }, [])


  // this function saves wallet address to local storage
  useEffect(() => {
    if (walletAddress.braavos || walletAddress.argent) {
      localStorage.setItem(ADDRESS_KEY, JSON.stringify(walletAddress))
    }
  }, [walletAddress])

  return (
    <div className="flex flex-col gap-8 w-full px-6 py-8 mx-auto">
      <EarningsSummary earningsSumaryDetails={earningsSumaryDetails} />
      <LinkWallet walletAddress={walletAddress} setWalletAddress={setWalletAddress} />
    </div>
  )
}

export default EarningsPage

"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { PaymentPropInterface } from "@/lib/interfaces/PaymentPropInterface"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import type React from "react"
import { useState } from "react"
import type { WalletAddressType } from "./LinkWallet"

interface RequestPaymentModalProps {
  paymentDetails: PaymentPropInterface
  setPaymentDetails: React.Dispatch<React.SetStateAction<PaymentPropInterface>>
  walletAddress: WalletAddressType
  setOpenRequestModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function RequestPaymentModal({paymentDetails, setPaymentDetails, walletAddress, setOpenRequestModal,}: RequestPaymentModalProps) {
  const [selectedWallet, setSelectedWallet] = useState<"argent" | "braavos">("argent")
  const [currentStep, setCurrentStep] = useState("1")

  const maxBalance = 1793

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/[^\d.]/g, "")
    const numericValue = Number.parseFloat(value) || 0


    const finalValue = Math.min(numericValue, maxBalance)

    setPaymentDetails((prev) => ({
      ...prev,
      amount: finalValue,
    }))
  }

  const handleMaxClick = () => {
    setPaymentDetails((prev) => ({
      ...prev,
      amount: maxBalance,
    }))
  }

  const handleWalletChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const wallet = event.target.value as "argent" | "braavos"
    setSelectedWallet(wallet)

    setPaymentDetails((prev) => ({
      ...prev,
      walletAddress: walletAddress[wallet] || "",
      selectedWallet: wallet,
    }))
  }

  const truncateWalletAddress = (address: string) => {
    if (!address || address.length < 12) return address
    return address.slice(0, 5) + "....." + address.slice(-6)
  }

  const currentWalletAddress = walletAddress[selectedWallet] || ""
  const truncatedAddress = truncateWalletAddress(currentWalletAddress)



  const submitRequest = () => {
    alert("Confirmed")
    setPaymentDetails({
      amount: 0,
      wallet: "",
      walletAddress: ""
    })
    setOpenRequestModal(false)
  }

  return (
    <div
      onClick={() => setOpenRequestModal(false)}
      className="w-full h-screen fixed top-0 left-0 bg-black/50 px-5 py-10 z-50"
    >
      <div className="w-full h-full flex items-center justify-center py-7 px-5 overflow-x-hidden relative">



        <div
          onClick={(e) => e.stopPropagation()}
          className={`w-full max-w-[621px] bg-[#ffffff] min-w-[300px] flex flex-col py-4 px-6 gap-4 rounded-2xl transform duration-150 ease-in-out absolute ${ currentStep === "1" ? "translate-x-0" : "translate-x-[-300%] " }`}
        >
          <button
            onClick={() => setOpenRequestModal(false)}
            className="ml-auto h-10 w-10 bg-[#F6F6F6] flex items-center justify-center rounded-lg text-[#B0B0B0]"
          >
            <X />
          </button>

          <h1 className="text-[#888888] text-lg font-bold mx-auto">Request Payment</h1>

          <form className="w-full flex flex-col items-start gap-8">
            <div className="w-full flex items-center justify-between gap-10">
              <h2 className="text-[#888888] font-medium text-sm">Current Balance Subtotal</h2>
              <h3 className="text-base text-[#454545] font-bold flex items-center gap-1 ">
                <Image src={"/stark.svg"} alt="icon" width={10} height={10} className="w-4 h-4" />
                {maxBalance} <span className="text-sm font-normal">STRK</span>
              </h3>
            </div>

            <div className="w-full flex flex-col gap-3.5 items-start">
              <div className="w-full flex items-center justify-between gap-10">
                <h2 className="text-[#5D5D5D] font-normal text-sm">Enter Amount</h2>
                <h3 className="text-xs text-[#5D5D5D] font-normal">($12 USDT)</h3>
              </div>

              <div className="w-full flex items-center gap-2.5 py-3.5 px-4 rounded-lg border-[1px] border-[#E7E7E7]">
                <Image src={"/stark.svg"} alt={"token icon"} width={10} height={10} />
                <Input
                  name="amount"
                  value={paymentDetails.amount ? paymentDetails.amount.toString() : ""}
                  onChange={handleAmountChange}
                  placeholder="0"
                  type="text"
                  className="outline-none border-none flex-1 shadow-none focus:border-none focus:shadow-none focus:outline-none p-0"
                />
                <span className="text-[#5D5D5D] text-sm">STRK</span>
                <Button
                  type="button"
                  variant={"ghost"}
                  onClick={handleMaxClick}
                  className="ml-auto bg-[#F6F6F6] py-1 px-4 text-xs font-normal text-[#5D5D5D] hover:bg-[#E7E7E7]"
                >
                  Max
                </Button>
              </div>

              <div className="w-full flex flex-col gap-3 items-start">
                <h4 className="text-[#5D5D5D] text-sm font-normal">Destination wallet address</h4>
                <div className="w-full flex items-center justify-between gap-10">
                  <select
                    name="selectedWallet"
                    id="selectedWallet"
                    value={ selectedWallet}
                    onChange={handleWalletChange}
                    className="flex-1 py-3 px-5 border border-[#E7E7E7] rounded-lg bg-white text-[#5D5D5D] text-sm focus:outline-none focus:border-[#096CFF]"
                  >
                    <option value="braavos"> Braavos</option>
                    <option value="argent"> Argent</option>
                  </select>

                  <span className="text-[#5D5D5D] text-sm font-normal bg-[#EDF7FF] py-2 px-3 rounded-3xl min-w-[120px] text-center">
                    {currentWalletAddress ? truncatedAddress : "--"}
                  </span>
                </div>
              </div>
            </div>
          </form>

          <Button
          onClick={() => setCurrentStep("2")}
            type="button"
            disabled={!paymentDetails.amount || paymentDetails.amount <= 0}
            className="text-sm w-full font-normal text-white px-8 py-5 bg-[linear-gradient(180deg,_#096CFF_40.7%,_#054199_180.61%)] hover:opacity-90 disabled:opacity-50"
          >
            Request Payment
          </Button>
        </div>






         <div
          onClick={(e) => e.stopPropagation()}
          className={`w-full max-w-[621px] bg-[#ffffff] min-w-[300px] flex flex-col py-4 px-6 gap-4 rounded-2xl transform duration-150 ease-in-out absolute ${ currentStep === "2" ? "translate-x-0" : "translate-x-[300%] " }`}
        >
          <button
            onClick={() => setOpenRequestModal(false)}
            className="ml-auto h-10 w-10 bg-[#F6F6F6] flex items-center justify-center rounded-lg text-[#B0B0B0]"
          >
            <X />
          </button>

          <h1 className="text-[#888888] text-lg font-bold mx-auto">Confirm Details</h1>

          <div className="w-full flex flex-col items-start gap-4 border-[1px] border-[#E7E7E7] p-4 rounded-lg ">
            <div className="w-full flex items-start justify-between gap-10 border-b-[1px] border-[#E7E7E7] px-0 py-2 pb-4 " >
              <h4 className="text-[#5D5D5D] font-normal text-sm " >Amount to be sent</h4>

              <div className="w-fit flex flex-col items-end gap-0.5 " >
                <h3 className="font-bold text-lg text-[#096CFF] flex items-center gap-1 " > <Image src={"/stark.svg"} alt="icon" width={10} height={10} className="w-4 h-4" />  {paymentDetails.amount} <span className="font-normal text-sm"> STRK</span></h3>
                <h6 className="font-normal text-xs text-[#5D5D5D] ">($12 USDT)</h6>

              </div>

            </div>


            <div  className="w-full flex items-start justify-between gap-10 border-b-[1px] border-[#E7E7E7] px-0 py-2">
              <h4  className="text-[#5D5D5D] font-normal text-sm " >Destination wallet address</h4>
                 <span className="text-[#5D5D5D] text-sm font-normal bg-[#EDF7FF] py-2 px-3 rounded-3xl min-w-[120px] text-center">
                    {currentWalletAddress ? truncatedAddress : "--"}
                  </span>
            </div>


            <div  className="w-full flex items-start justify-between gap-10 border-b-[1px] border-[#E7E7E7] px-0 py-2">
              <h4  className="text-[#5D5D5D] font-normal text-sm " >Gas fees</h4>
              <h6  className=" text-[#096CFF] font-normal text-sm flex items-center gap-1 "> <Image src={"/stark.svg"} alt="icon" width={10} height={10} className="w-3 h-3" />  8 STRK</h6>
            </div>



            <div  className="w-full flex items-start justify-between gap-10 ">
              <h4  className="text-[#5D5D5D] font-normal text-sm " >Estimated time of delivery</h4>
              <h6 className=" text-[#5D5D5D] font-normal text-sm " >24-48 Hours</h6>

            </div>

          </div>

          <Button
          onClick={submitRequest}
            type="submit"
            className="text-sm w-full font-normal text-white px-8 py-5 bg-[linear-gradient(180deg,_#096CFF_40.7%,_#054199_180.61%)] hover:opacity-90 disabled:opacity-50"
          >
          Confirm
          </Button>
        </div>
      </div>
    </div>
  )
}

import React from "react";
import { ChevronLeft } from "lucide-react";
import { SignInStep } from "@/lib/types";
import BackButton from "./BackButton";
import MetaMaskIcon from "@/components/svg/MetaMaskIcon";
import WalletConnectIcon from "@/components/svg/WalletConnectIcon";

interface WalletSelectionStepProps {
  onBack: () => void;
  onStepChange: (step: SignInStep) => void;
}



export default function WalletSelectionStep({
  onBack,
  onStepChange,
}: WalletSelectionStepProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-inter">
      <div className="bg-white rounded-xl shadow p-6 max-w-xl w-full mx-auto">
        <BackButton onBack={onBack} />

        <h2 className="text-2xl font-bold text-[#5D5D5D] mb-1">Welcome Back</h2>

        <p className="text-[#5D5D5D] text-base mb-6">
          Connect to your registered wallet address to Signin
        </p>

        <div className="flex flex-col gap-4 mt-6 b border border-[#E7E7E7] p-6 rounded-xl">
          <div
            onClick={() => onStepChange("qrCode")}
            className="rounded-lg border border-[#E7E7E7] p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition"
          >
            <div className="flex items-center gap-3">
              <MetaMaskIcon />
              <span className="text-base font-medium text-[#5D5D5D]">
                MetaMask
              </span>
            </div>
            <button className="text-base px-4 py-1.5 bg-blue-100 text-[#0F265C] rounded-full font-medium hover:bg-blue-200 transition">
              Connect
            </button>
          </div>
          <div
            onClick={() => onStepChange("qrCode")}
            className="rounded-lg border border-[#E7E7E7] p-4 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <WalletConnectIcon />
              <span className="text-base font-medium text-[#5D5D5D]">
                WalletConnect
              </span>
            </div>
            <button className="text-base px-4 py-1.5 bg-blue-100 text-[#0F265C] rounded-full font-medium hover:bg-blue-200 transition">
              Connect
            </button>
          </div>
        </div>

        <div className="px-12">
          <p className=" text-base text-center text-[#3D3D3D] mt-6">
            By connecting your wallet, you agree to our{" "}
            <a href="#">Terms and Conditions</a> and our{" "}
            <a href="#">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
}

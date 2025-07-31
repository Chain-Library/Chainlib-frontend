import React from "react";
import CheckIcon from "@/components/svg/CheckIcon";

interface SuccessStepProps {
  onProceed: () => void;
}

export default function SuccessStep({
  onProceed,
}: SuccessStepProps) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center font-inter">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md px-6 py-8 sm:px-10 sm:py-10 flex flex-col items-center ">
        <div className="flex flex-col items-center mb-8">
          <div className="w-30 h-30 flex items-center justify-center mb-8">
            <div className="w-30 h-30 rounded-full bg-blue-100 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center">
                <CheckIcon />
              </div>
            </div>
          </div>
          <div className="text-xl font-medium text-gray-800 text-center">
            Bravoos Wallet Connected
          </div>
        </div>
        <button
          onClick={onProceed}
          className="px-6 py-4 w-full rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Proceed
        </button>
      </div>
    </div>
  );
}

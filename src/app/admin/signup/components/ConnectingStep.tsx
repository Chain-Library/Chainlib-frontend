import { SignInStep } from '@/lib/types';
import React, { useEffect } from 'react';
import WalletIcon from '@/components/svg/WalletIcon';

interface Props {
    onBack: () => void;
    onStepChange: (step: SignInStep) => void;
}


export default function ConnectingStep({ onBack, onStepChange }: Props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onStepChange("signature");
    }, 3000);

    return () => clearTimeout(timer);
  }, [onStepChange]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center font-inter">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md px-6 py-8 sm:px-10 sm:py-10 flex flex-col items-center">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
            <WalletIcon />
          </div>
          <span className="text-xl font-bold text-gray-900">Braavos</span>
        </div>
        <div className="flex flex-col items-center mb-8">
          <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center mb-6">
            <div className="w-6 h-6 rounded-full bg-blue-600"></div>
          </div>
          <div className="text-base text-gray-500 text-center font-medium">Connecting to Wallet...</div>
        </div>
        <button
          onClick={() => onStepChange("signature")}
          className="w-full h-full py-3  bg-gradient-to-b  font-semibold text-base shadow-sm hover:from-blue-200 hover:to-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md bg-[linear-gradient(to_bottom,_#EDF7FF_100%,_#096CFF_30%)]
 hover:bg-gray-200"
        >
          Cancel
        </button>
      </div>
    </div>
  );
} 
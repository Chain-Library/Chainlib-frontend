"use client";
import React, { useState } from "react";
import { LinkIcon } from "lucide-react";
import GoogleIcon2 from "@/components/svg/GoogleIcon2";
import dynamic from "next/dynamic";
import { SignInStep } from "@/lib/types";
import QRCodeStep from "./components/QRCodeStep";
import ConnectingStep from "./components/ConnectingStep";
import SignatureStep from "./components/SignatureStep";
import SuccessStep from "./components/SuccessStep";

const EmailSignInStep = dynamic(() => import("./components/EmailSignInStep"), {
  ssr: false,
});

const WalletSelectionStep = dynamic(() => import("./components/WalletSelectionStep"), {
  ssr: false,
});

function Stepper({
  step,
  onStepChange,
}: {
  step: SignInStep;
  onStepChange: (step: SignInStep) => void;
}) {
  if (step === "emailSignIn") {
    return (
      <EmailSignInStep
        onBack={() => onStepChange("adminSignIn")}
        onStepChange={onStepChange}
      />
    );
  }
  if (step === "walletSelection") {
    return (
      <WalletSelectionStep
        onBack={() => onStepChange("emailSignIn")}
        onStepChange={onStepChange}
      />
    );
  }

  if (step === "qrCode") {
    return (
      <QRCodeStep onBack={() => onStepChange("walletSelection")} onStepChange={onStepChange} />
    );
  }

  if (step === "connecting") {
    return (
      <ConnectingStep
        onBack={() => onStepChange("walletSelection")}
        onStepChange={onStepChange}
      />
    );
  }

  if (step === "signature") {
    return (
      <SignatureStep
        onBack={() => onStepChange("walletSelection")}
        onStepChange={onStepChange}
      />
    );
  }

  if (step === "success") {
    return <SuccessStep onProceed={() => onStepChange("adminSignIn")} />;
  }

  return <AdminSignIn onStepChange={onStepChange} />;
}

function AdminSignIn({
  onStepChange,
}: {
  onStepChange: (step: SignInStep) => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-lg flex flex-col items-center">
        <h1 className="text-2xl text-gray-800 font-bold mb-6 text-center">
          How would you like to sign-in
        </h1>
        <div className="w-full flex flex-col gap-4 border rounded-xl p-4">
          <button
            className="flex items-center h-full gap-4 border rounded-md px-6 py-4 w-full transition hover:bg-gray-100 focus:outline-none"
            onClick={() => onStepChange("emailSignIn")}
          >
            <div className="flex items-center justify-center text-[#096CFF] bg-[#EDF7FF] rounded-full w-[32px] h-[32px] ">
              <GoogleIcon2 />
            </div>
            <span className="text-base font-medium text-gray-700">
              Sign-In using email
            </span>
          </button>
          <button
            className="flex items-center h-full gap-4 border rounded-md px-6 py-4 w-full transition hover:bg-gray-100 focus:outline-none"
            onClick={() => onStepChange("walletSelection")}
          >
            <div className="flex items-center justify-center text-[#096CFF] bg-[#EDF7FF] rounded-full w-[32px] h-[32px] ">
              <LinkIcon className="w-4 h-4" />
            </div>
            <span className="text-base font-medium text-gray-700">
              Sign-In using wallet address
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AdminSignInPage() {
  const [step, setStep] = useState<SignInStep>("adminSignIn");
  const handleStepChange = (newStep: SignInStep) => setStep(newStep);
  return <Stepper step={step} onStepChange={handleStepChange} />;
}

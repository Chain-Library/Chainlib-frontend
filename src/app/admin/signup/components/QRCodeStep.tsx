import React from "react";
import BackButton from "./BackButton";
import { SignInStep } from "@/lib/types";

interface QRCodeStepProps {
  onBack: () => void;
  onStepChange: (step: SignInStep) => void;
}

export default function QRCodeStep({ onBack, onStepChange }: QRCodeStepProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-lg flex flex-col ">
        <BackButton onBack={onBack} />

        <div className="flex items-center max-w-xs gap-x-1 mx-auto">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 ">
            <span className="text-white text-3xl font-bold">B</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">Braavos</div>
        </div>

        <div className="flex mt-8 gap-x-3 items-center rounded-lg max-w-xs mx-auto ">
          <div
            onClick={() => onStepChange("connecting")}
            className="bg-gray-300 cursor-pointer rounded-lg w-fit text-[#454545] px-6 py-3 text-base  text-center"
          >
            Website
          </div>
          <div className="bg-gray-100 rounded-lg w-fit text-[#454545] px-6 py-3 text-base  text-center">
            Mobile App
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className=" w-[180px] h-[180px]  mt-8  rounded-lg ">
            <img
              src="/qrcode.png"
              alt="QR Code"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="text-base text-gray-600 text-center mt-6">
          Scan to connect and log-In with Braavos app
        </div>
      </div>
    </div>
  );
}

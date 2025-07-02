"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import logo from "../../../../public/chainLib.svg";
import Image from "next/image";

interface EmailVerificationProps {
  email: string;
  onSubmit: () => void;
  onBack: () => void;
}

export default function EmailVerification({
  email,
  onSubmit,
  onBack,
}: EmailVerificationProps) {
  const [verificationCode, setVerificationCode] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [timeLeft, setTimeLeft] = useState(30);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);

      // Move to next input if current input is filled
      if (value !== "" && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === "Backspace" && index > 0 && verificationCode[index] === "") {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (verificationCode.every((digit) => digit !== "")) {
      onSubmit();
    }
  };

  const handleResend = () => {
    // Reset verification code
    setVerificationCode(["", "", "", "", "", ""]);
    // Reset timer
    setTimeLeft(30);
    // Focus first input
    inputRefs.current[0]?.focus();
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row">
      {/* Left side - Blue gradient background */}
      <div
        className="w-full md:w-2/5 p-2 flex flex-col items-start text-white relative rounded-md"
        style={{
          background: "linear-gradient(135deg, #096CFF 0%, #054199 100%)",
        }}
      >
        <div className="flex flex-col items-start py-6 px-3 justify-between h-4/5 relative">
          <div className="flex items-center mb-8">
            <div className="rounded-full mr-2">
              <Image
                src={logo}
                alt="chain lib"
                className="border rounded-full"
              />
            </div>
            <h1 className="text-2xl font-bold">ChainLib</h1>
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-start">
              Write. Connect. Impact.
            </h1>
            <p className="text-start text-sm md:text-base">
              From local readers to global fans, your story matters. We helps
              you reach more people, build your community, and leave your mark.
            </p>
          </div>
        </div>
        <div className="flex space-x-2 mt-16 mx-auto">
          <div className="w-8 h-1 bg-white rounded-full opacity-70"/>
          <div className="w-8 h-1 bg-white rounded-full opacity-70"/>
          <div className="w-8 h-1 bg-white rounded-full" />
        </div>
      </div>

      {/* Right side - Email verification form */}
      <div className="w-full md:w-3/5 bg-white p-4 md:p-8 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-500"
              onClick={onBack}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          </div>

          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Email Verification
            </h1>
            <p className="text-gray-600 text-sm">
              Enter the six-digit verification code has sent to{" "}
              <span className="text-blue-500">{email}</span>
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex justify-between gap-2">
              {verificationCode.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => {
                    inputRefs.current[index] = el;
                  }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-12 h-12 text-center text-xl border rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                />
              ))}
            </div>

            <div className="text-center text-sm">
              <p className="text-gray-500">
                Resend Code in:{" "}
                <span className="font-medium">{`00:${timeLeft
                  .toString()
                  .padStart(2, "0")}`}</span>
              </p>
            </div>

            <Button
              type="submit"
              className="w-full py-6"
              style={{
                background: "linear-gradient(to right, #096CFF, #054199)",
              }}
              disabled={!verificationCode.every((digit) => digit !== "")}
            >
              Continue
            </Button>

            <div className="text-center">
              <Button
                type="button"
                variant="link"
                className="text-blue-600"
                onClick={handleResend}
                disabled={timeLeft > 0}
              >
                Resend Code
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

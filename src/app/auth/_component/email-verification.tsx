"use client";

import { Button } from "@/components/ui/button";
import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react";

interface EmailVerificationProps {
  email: string;
  onSubmit: () => void;
}

export default function EmailVerification({
  email,
  onSubmit,

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
    e: KeyboardEvent<HTMLInputElement>
  ) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === "Backspace" && index > 0 && verificationCode[index] === "") {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: FormEvent) => {
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
    <>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Email Verification
        </h1>
        <p className="text-gray-600 text-sm">
          Enter the six-digit verification code has sent to{" "}
          <span className="text-blue-500">{email}</span>
        </p>
      </div>

      <form className="mt-20 md:mt-0 space-y-6" onSubmit={handleSubmit}>
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
    </>
  );
}

import React, { useState,  } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import BackButton from "./BackButton";
import { SignInStep } from "@/lib/types";


interface EmailSignInStepProps {
  onBack: () => void;
  onStepChange: (step: SignInStep) => void;
}

const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/i;

export default function EmailSignInStep({
  onBack,
  onStepChange,
}: EmailSignInStepProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (value.length === 0 || emailRegex.test(value)) {
      setEmailError("");
    } else {
      setEmailError("Please enter a valid email address");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return;
    } else {
      setEmailError("");
      onStepChange("success");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-inter">
      <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-xl">
        <BackButton onBack={onBack} />

        <h2 className="text-2xl font-inter font-semibold text-[#5D5D5D] mb-1">
          Welcome Back
        </h2>
        <p className="text-[#5D5D5D] text-base font-inter mb-8">
          Enter your registered email address and password
        </p>
        
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div>
            <label
              className="block text-[#5D5D5D] text-base font-inter mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="rounded-md border border-gray-300  py-2 w-full px-5 focus:outline-none focus:ring-2 focus:ring-blue-100  placeholder:text-[#B0B0B0] font-normal text-base h-[50px]"
              placeholder="Enter Email address"
              value={email}
              onChange={handleEmailChange}
              autoComplete="email"
            />
            {emailError && (
              <p className="text-base  text-red-500 mt-1">{emailError}</p>
            )}
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label
                className="block text-[#5D5D5D] text-base font-inter"
                htmlFor="password"
              >
                Password
              </label>
              <a
                href="#"
                className="text-[#096CFF] text-base font-inter hover:underline"
              >
                Forgot Password?
              </a>
            </div>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2">
                <Lock className="w-4 h-4 text-gray-400" />
              </span>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="rounded-md border border-gray-300 px-3 py-2 w-full pl-10 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-100  placeholder:text-[#B0B0B0] font-normal text-base h-[50px]"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4 text-gray-400" />
                ) : (
                  <Eye className="w-4 h-4 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#096CFF] text-white py-3 px-4 rounded-md font-inter font-medium text-base hover:bg-blue-700 transition-colors h-[50px]"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

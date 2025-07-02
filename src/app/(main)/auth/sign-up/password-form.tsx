"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import logo from "../../../../public/chainLib.svg";
import Image from "next/image";

interface PasswordFormProps {
  onSubmit: (password: string) => void;
  onBack: () => void;
}

export default function PasswordForm({ onSubmit, onBack }: PasswordFormProps) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    onSubmit(password);
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
              You Own Your Voice
            </h1>
            <p className="text-start text-sm md:text-base">
              No middlemen. No boundaries. With ChainLib, your content stays
              yours. Publish with purpose and keep the rewards you earn.
            </p>
          </div>
        </div>
        <div className="flex space-x-2 mt-16 mx-auto">
          <div className="w-8 h-1 bg-white rounded-full opacity-70" />
          <div className="w-8 h-1 bg-white rounded-full" />
          <div className="w-8 h-1 bg-white rounded-full opacity-70" />
        </div>
      </div>

      {/* Right side - Password form */}
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
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Password</h1>
            <p className="text-gray-600 text-sm">
              Create a password to access your account. Make it something you
              can remember but hard for others to guess.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  className="w-full pr-10"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="confirmPassword"
                className="text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Enter Password"
                  className="w-full pr-10"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            {error && <p className="text-sm text-red-500">{error}</p>}

            <Button
              type="submit"
              className="w-full py-6"
              style={{
                background: "linear-gradient(to right, #096CFF, #054199)",
              }}
            >
              Continue
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

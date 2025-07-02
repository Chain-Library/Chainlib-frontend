"use client";

import type React from "react";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { TogglePassword } from "../component/toggle-password";
import logo from "../../../../public/chainLib.svg"
import Image from "next/image";
import GoogleIcon from "@/components/svg/googleIcon";
import AppleIcon from "@/components/svg/appleIcon";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    if (value && !validateEmail(value)) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email && !validateEmail(email)) {
      setIsEmailValid(false);
      return;
    }

    // Handle login logic here
    console.log("Form submitted");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white p-6">
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
              Your Stories Still Matter.
            </h1>
            <p className="text-start text-sm md:text-base">
              Your words have power. Your ideas have a place. Sign in to keep
              building the library only you can create. The world is still
              reading.
            </p>
          </div>
        </div>
        <div className="flex space-x-2 mt-16 mx-auto">
          <div className="w-8 h-1 bg-white rounded-full" />
        </div>
      </div>

      {/* Right side - Login form */}
      <div className="w-full md:w-3/5 p-4 md:p-8 flex items-center justify-center">
        <div className="w-full max-w-md text-[#3D3D3D]">
          <Link
            href="#"
            className="inline-flex items-center text-sm text-gray-500 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Link>

          <h1 className="text-2xl font-bold mb-2">Welcome Back</h1>
          <p className="text-gray-500 mb-8">
            Enter your registered email address and password to access your
            account.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <label htmlFor="email" className="text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter Email address"
                className={`w-full p-3 border ${
                  !isEmailValid ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                value={email}
                onChange={handleEmailChange}
              />
              {!isEmailValid && (
                <p className="text-red-500 text-xs">
                  Enter a valid email address
                </p>
              )}
            </div>

            <div className="space-y-1">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <Link
                  href="#"
                  className="text-sm text-blue-500 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                />
                <TogglePassword inputId="password" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 text-white font-medium rounded-md transition-colors"
              style={{ backgroundColor: "#096CFF" }}
            >
              Log In
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500 mb-4">Or Continue With</p>

            <div className="flex justify-center space-x-4">
              <button
                type="button"
                className="flex items-center justify-center w-1/2 py-2.5 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors gap-2"
              >
                <GoogleIcon />
                Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center w-1/2 py-2.5 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                <AppleIcon />
                Apple
              </button>
            </div>
          </div>

          <p className="text-sm text-center mt-8">
            Don &#39; t have an account?
            <Link
              href="/auth/sign-up"
              className="text-blue-500 hover:underline ml-1"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

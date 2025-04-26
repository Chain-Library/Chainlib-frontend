"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import GoogleIcon from "@/components/svg/googleIcon";
import AppleIcon from "@/components/svg/appleIcon";
import logo from "../../../../public/chainLib.svg";
import Image from "next/image";

interface SignUpFormProps {
  onSubmit: (data: {
    firstName: string;
    lastName: string;
    pseudonym: string;
    email: string;
  }) => void;
  defaultValues?: {
    firstName: string;
    lastName: string;
    pseudonym: string;
    email: string;
  };
}

export default function SignUpForm({
  onSubmit,
  defaultValues = { firstName: "", lastName: "", pseudonym: "", email: "" },
}: SignUpFormProps) {
  const [formData, setFormData] = useState(defaultValues);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (agreeToTerms) {
      onSubmit(formData);
    }
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
              It Starts With a Story
            </h1>
            <p className="text-start text-sm md:text-base">
              Every great book begins with a single idea. We give that idea a
              stage, a voice, and the freedom to reach the world.
            </p>
          </div>
        </div>
        <div className="flex space-x-2 mt-16 mx-auto">
          <div className="w-8 h-1 bg-white rounded-full" />
          <div className="w-8 h-1 bg-white rounded-full opacity-70" />
          <div className="w-8 h-1 bg-white rounded-full opacity-70" />
        </div>
      </div>

      {/* Right side - Sign up form */}
      <div className="w-full md:w-3/5 bg-white p-4 md:p-8 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <Button variant="ghost" size="sm" className="text-gray-500">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          </div>

          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Sign-up as Author
            </h1>
            <p className="text-gray-600 text-sm">
              Curious to see what &#39;s inside? we &#39;re excited to welcome
              you!
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="firstName"
                  className="text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter First Name"
                  className="w-full"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter Last Name"
                  className="w-full"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="pseudonym"
                className="text-sm font-medium text-gray-700"
              >
                Pseudonym (Optional)
              </label>
              <Input
                id="pseudonym"
                name="pseudonym"
                value={formData.pseudonym}
                onChange={handleChange}
                placeholder="Enter Pseudonym"
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email Address"
                className="w-full"
                required
              />
              <p className="text-xs text-gray-500">
                Enter a valid email address
              </p>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox
                id="terms"
                checked={agreeToTerms}
                onCheckedChange={(checked) =>
                  setAgreeToTerms(checked as boolean)
                }
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                Agree to ChainLib{" "}
                <Link href="#" className="text-blue-600 hover:underline">
                  Terms and Condition
                </Link>
              </label>
            </div>

            <Button
              type="submit"
              className="w-full py-6"
              style={{
                background: "linear-gradient(to right, #096CFF, #054199)",
              }}
              disabled={!agreeToTerms}
            >
              Continue
            </Button>

            <div className="text-center text-sm text-gray-500">
              Or Continue With
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                type="button"
                className="flex items-center justify-center space-x-2"
              >
                <GoogleIcon />
                <span>Google</span>
              </Button>

              <Button
                variant="outline"
                type="button"
                className="flex items-center justify-center space-x-2"
              >
                <AppleIcon />
                <span>Apple</span>
              </Button>
            </div>

            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link
                href="/auth/sign-in"
                className="text-blue-600 hover:underline"
              >
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

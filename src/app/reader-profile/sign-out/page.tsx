"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SignOutPage() {
  const router = useRouter();
  const [isSigningOut, setIsSigningOut] = useState(false);

  const handleSignOut = async () => {
    setIsSigningOut(true);

    // Simulate sign out process
    setTimeout(() => {
      console.log("User signed out");
      // Redirect to login or home page
      router.push("/auth/sign-in");
    }, 2000);
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <div className=" min-h-screen bg-white m-4 md:m-6 rounded-[8px]">
      {/* Mobile Header */}
      <div className="lg:hidden bg-gray-50 p-4 flex items-center gap-3">
        <button onClick={() => router.back()} className="p-1">
          <ArrowLeft size={20} className="text-gray-600" />
        </button>
        <h1 className="text-lg font-semibold text-gray-800">Sign Out</h1>
      </div>

      <div className="p-6 max-w-md mx-auto pt-12 bg-white">
        {/* Desktop Header */}
        <div className="hidden lg:flex items-start gap-3 mb-10">
          <h1 className="text-xl font-semibold text-gray-800">Sign Out</h1>
        </div>

        <div className="text-center space-y-6">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Are you sure you want to sign out?
            </h2>
            <p className="text-gray-600">
              You'll need to sign in again to access your account and reading
              progress.
            </p>
          </div>

          <div className="space-y-3">
            <button
              onClick={handleSignOut}
              disabled={isSigningOut}
              className="w-full py-3 px-6 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSigningOut ? "Signing Out..." : "Yes, Sign Out"}
            </button>
            <button
              onClick={handleCancel}
              disabled={isSigningOut}
              className="w-full py-3 px-6 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors disabled:opacity-50"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMobileMenu } from "@/hooks/useMobileMenu";

export default function SignOutPage() {
  const router = useRouter();
  const { openMobileMenu } = useMobileMenu();

  return (
    <div className=" min-h-screen bg-white m-4 md:m-6 rounded-[8px]">
      {/* Mobile Header */}
      <div className="lg:hidden bg-gray-50 p-4 flex items-center gap-3">
        <button onClick={openMobileMenu} className="p-1">
          <ArrowLeft size={20} className="text-gray-600" />
        </button>
        <h1 className="text-lg font-semibold text-gray-800">Sign Out</h1>
      </div>

      <div className="p-6 max-w-md mx-auto pt-12 bg-white text-center">
        {/* Desktop Header */}
        <div className="hidden lg:flex items-center justify-center gap-3 mb-10">
          <h1 className="text-xl font-semibold text-gray-800">Sign Out</h1>
        </div>
      </div>
    </div>
  );
}

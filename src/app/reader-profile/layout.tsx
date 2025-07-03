"use client";
import React, { createContext, useContext } from "react";
import { useState } from "react";
import { ArrowLeft, Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

// Create context
const MobileMenuContext = createContext<{
  openMobileMenu: () => void;
} | null>(null);

// Custom hook to use the context
export const useMobileMenu = () => {
  const context = useContext(MobileMenuContext);
  if (!context) {
    throw new Error("useMobileMenu must be used within ReaderProfileLayout");
  }
  return context;
};

interface ReaderProfileLayoutProps {
  children: React.ReactNode;
}

export default function ReaderProfileLayout({
  children,
}: ReaderProfileLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    {
      label: "Profile Details",
      href: "/reader-profile",
    },
    {
      label: "Following",
      href: "/reader-profile/following",
    },
    {
      label: "Preferences",
      href: "/reader-profile/preferences",
    },
    {
      label: "Privacy Settings",
      href: "/reader-profile/privacy",
    },
    {
      label: "Sign Out",
      href: "/reader-profile/sign-out",
    },
  ];

  return (
    <MobileMenuContext.Provider
      value={{ openMobileMenu: () => setIsMobileMenuOpen(true) }}
    >
      <div className="min-h-screen bg-gray-50">
        <div className="flex">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block w-64 min-h-screen">
            <div className="p-6">
              <nav className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-3 rounded-lg text-sm transition-colors ${
                      pathname === item.href
                        ? "bg-gray-200 text-gray-900 font-medium"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          <div
            className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
              isMobileMenuOpen
                ? " bg-transparent pointer-events-auto"
                : "bg-transparent pointer-events-none"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {/* Mobile Menu Panel */}
            <div
              className={`absolute p-4 z-50 top-16 right-0 bottom-0 w-full max-w-full bg-gray-50 shadow-xl transform transition-transform duration-300 ease-out ${
                isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 px-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold">Profile</h2>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1"
                >
                  <X size={20} className="text-gray-600" />
                </button>
              </div>
              <nav className="p-4 space-y-2 bg-white">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm transition-colors ${
                      pathname === item.href
                        ? "bg-gray-100 text-gray-900 font-medium"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">{children}</div>
        </div>
      </div>
    </MobileMenuContext.Provider>
  );
}

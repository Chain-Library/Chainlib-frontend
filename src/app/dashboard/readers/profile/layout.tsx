"use client";
import React, { useState } from "react";
import { X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { MobileMenuContext } from "@/hooks/useMobileMenu";
import NavBar from "@/components/landingpage/NavBar";

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
      href: "/dashboard/readers/profile",
    },
    {
      label: "Following",
      href: "/dashboard/readers/profile/following",
    },
    {
      label: "Preferences",
      href: "/dashboard/readers/profile/preferences",
    },
    {
      label: "Privacy Settings",
      href: "/dashboard/readers/profile/privacy",
    },
    {
      label: "Sign Out",
      href: "/dashboard/readers/profile/sign-out",
    },
  ];

  return (
    <MobileMenuContext.Provider
      value={{ openMobileMenu: () => setIsMobileMenuOpen(true) }}
    >
      <div className="min-h-screen bg-gray-50">
        <NavBar />
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

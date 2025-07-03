"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, Menu, X } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"

interface ReaderProfileLayoutProps {
  children: React.ReactNode
}

export default function ReaderProfileLayout({ children }: ReaderProfileLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

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
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      

      <div className="flex ">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-64  min-h-screen">
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
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50">
            <div className="bg-white w-80 h-full">
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <h2 className="text-lg font-semibold">Menu</h2>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-1">
                  <X size={20} className="text-gray-600" />
                </button>
              </div>
              <nav className="p-4 space-y-2">
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
        )}

        {/* Main Content */}
        <div className="flex-1">{children}</div>
      </div>
    </div>
  )
}

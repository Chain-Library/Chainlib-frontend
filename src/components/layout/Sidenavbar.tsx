"use client"

import type * as React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "../../lib/utils"

type SidebarItem = {
  icon: string
  label: string
  href: string
  badge?: number
}

export function Sidebar() {
  const pathname = usePathname()
  // Start with sidebar closed on mobile by default
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(true)

  // Check if we're on mobile screen size
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      setIsOpen(!mobile) // Open on desktop, closed on mobile
    }
    
    // Initial check
    checkScreenSize()
    
    // Add event listener
    window.addEventListener('resize', checkScreenSize)
    
    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const sidebarItems: SidebarItem[] = [
    {
      icon: "/dashboardIcon.svg",
      label: "Dashboard",
      href: "/author",
    },
    {
      icon: "/manageIcon.svg",
      label: "Manage Content",
      href: "/author/publish",
    },
    {
      icon: "/earningsIcon.svg",
      label: "Earnings",
      href: "/author/earnings",
    },
    {
      icon: "/analyticsIcon.svg",
      label: "Analytics panel",
      href: "/author/analytics",
    },
    {
      icon: "/readersIcon.svg",
      label: "Readers Feedback",
      href: "/author/feedback",
    },
    {
      icon: "/notificationIcon.svg",
      label: "Notification",
      href: "/notifications",
      badge: 1,
    },
    {
      icon: "/profileIcon.svg",
      label: "Profile",
      href: "/profile",
    },
    {
      icon: "/signoutIcon.svg",
      label: "Sign Out",
      href: "/signout",
    },
  ]

  return (
    <>
      {/* Toggle button for mobile */}
      <button
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-white md:hidden shadow-md"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle sidebar"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed top-0 left-0 h-screen bg-white border-r border-gray-100 z-40 transition-all duration-300 ease-in-out overflow-hidden",
          isOpen ? "translate-x-0 w-[225px]" : "-translate-x-full w-0",
          "md:translate-x-0 md:w-[225px] md:static"
        )}
      >
        <div className="p-4 flex items-center gap-2">
          <div className="w-10 h-10 flex items-center justify-center">
            <Image 
              src="/logo.png"
              alt="ChainLib Logo"
              width={40}
              height={40}
            />
          </div>
          <span className="font-semibold text-blue-900">ChainLib</span>
        </div>

        <nav className="flex-1 py-4">
          <ul className="space-y-1 px-2">
            {sidebarItems.map((item, index) => {
              const isActive = pathname === item.href;
              const isSignOut = item.label === "Sign Out";
              
              return (
                <li key={item.href} className={isSignOut ? "mt-4 pt-4 border-t border-[#EDF7FF]" : ""}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors",
                      isActive && "bg-[#096CFF] text-white hover:bg-[#096CFF] hover:text-white",
                    )}
                    onClick={() => isMobile && setIsOpen(false)}
                  >
                    <div className="w-5 h-5 relative">
                      <Image 
                        src={item.icon} 
                        alt={item.label} 
                        width={20} 
                        height={20}
                        className={isActive ? "brightness-0 invert" : ""}
                      />
                    </div>
                    <span>{item.label}</span>
                    {item.badge && (
                      <div className="ml-auto flex items-center justify-center w-5 h-5 rounded-full bg-red-500 text-white text-xs">
                        {item.badge}
                      </div>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
      
      {/* Overlay for mobile when sidebar is open */}
      {isOpen && isMobile && (
        <div 
          className="fixed inset-0 bg-[#096CFF]/30 bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

export default Sidebar;
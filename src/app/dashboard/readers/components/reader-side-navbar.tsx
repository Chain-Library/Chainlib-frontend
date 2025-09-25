"use client";

import {
  Bell,
  BookOpen,
  LayoutDashboard,
  MessageSquare,
  DoorClosed,
  User,
  ClipboardList,
  Heart,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { WalletDisplay } from "@/components/blockchain/WalletDisplay";

export function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      href: "/dashboard/readers",
    },
    {
      icon: BookOpen,
      label: "My Library",
      href: "/dashboard/readers/library",
    },
    {
      icon: DoorClosed,
      label: "Reading Stats",
      href: "/dashboard/readers/reading-stats",
    },
    {
      icon: Heart,
      label: "Wishlist",
      href: "/dashboard/readers/wishlist",
      badge: 4,
    },
    {
      icon: ClipboardList,
      label: "Trasactions",
      href: "/dashboard/readers/transactions",
    },
    {
      icon: MessageSquare,
      label: "Discussion & Clubs",
      href: "/dashboard/readers/discussions-and-clubs",
    },
    {
      icon: Bell,
      label: "Notification",
      href: "/dashboard/readers/notifications",
    },
    {
      icon: User,
      label: "Profile",
      href: "/dashboard/readers/profile",
    },
  ];

  return (
    <div className="w-64 bg-white border-r border-[#e7e7e7] h-screen fixed left-0 top-0">
      <div className="p-4 flex items-center gap-2 border-b border-[#e7e7e7]">
        <div className="w-8 h-8 rounded-full bg-[#0f265c] flex items-center justify-center">
          <span className="text-white text-sm font-bold">C</span>
        </div>
        <span className="font-semibold text-[#000b21]">ChainLib</span>
      </div>

      {/* Wallet Display */}
      <div className="p-4 border-b border-[#e7e7e7]">
        <WalletDisplay variant="compact" showDropdown={false} />
      </div>

      <nav className="p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={`flex items-center gap-3 p-3 rounded-md ${
                  pathname === item.href
                    ? "bg-[#096CFF] text-[#edf7ff]"
                    : "text-[#5d5d5d] hover:bg-[#f6f6f6]"
                }`}
              >
                <item.icon size={18} />
                <span className={pathname === item.href ? "font-medium" : ""}>
                  {item.label}
                </span>
                {item.badge && (
                  <div
                    className={`ml-auto w-5 h-5 ${
                      item.label == "Notification"
                        ? "bg-[#ff5c5c]"
                        : "bg-[#096CFF]"
                    }  rounded-full flex items-center justify-center`}
                  >
                    <span className="text-white text-xs">{item.badge}</span>
                  </div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

"use client";

import {
  Bell,
  BookOpen,
  DollarSign,
  LayoutDashboard,
  LineChart,
  // LogOut,
  User,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { WalletDisplay } from "../blockchain/WalletDisplay";

export function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      href: "/dashboard/writers",
    },
    {
      icon: BookOpen,
      label: "Manage Content",
      href: "/dashboard/writers/manage-content",
    },
    {
      icon: DollarSign,
      label: "Earnings",
      href: "/dashboard/writers/earnings",
    },
    {
      icon: LineChart,
      label: "Analytics panel",
      href: "/dashboard/writers/analytics",
    },
    {
      icon: MessageCircle,
      label: "Discussions & Clubs",
      href: "/dashboard/writers/discussions-and-clubs",
    },
    {
      icon: Bell,
      label: "Notification",
      href: "/dashboard/writers/notifications",
      badge: 1,
    },
    {
      icon: User,
      label: "Profile",
      href: "/dashboard/writers/profile",
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
          {/* <li className="mt-8">
            <Link
              href="/logout"
              className="flex items-center gap-3 p-3 text-[#5d5d5d] hover:bg-[#f6f6f6] rounded-md"
            >
              <LogOut size={18} />
              <span>Sign Out</span>
            </Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}

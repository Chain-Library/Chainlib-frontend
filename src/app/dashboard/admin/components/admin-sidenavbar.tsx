"use client";

import {
  LayoutDashboard,
  Users2,
  FileText,
  BarChart3,
  CalendarDays,
  Bell,
  MessagesSquare,
  User,
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
      href: "/dashboard/admin",
    },
    {
      icon: Users2,
      label: "User Management",
      href: "/dashboard/admin/user-management",
    },
    {
      icon: FileText,
      label: "Content Management",
      href: "/dashboard/admin/content-management",
    },
    {
      icon: BarChart3,
      label: "Analytics",
      href: "/dashboard/admin/analytics",
    },
    {
      icon: CalendarDays,
      label: "Trasactions",
      href: "/dashboard/admin/transactions",
    },

    {
      icon: Bell,
      label: "Notification",
      href: "/dashboard/admin/notifications",
    },
    {
      icon: MessagesSquare,
      label: "Community and Events",
      href: "/dashboard/admin/community-and-events",
    },
    {
      icon: User,
      label: "Profile",
      href: "/dashboard/admin/profile",
    },
  ];

  return (
    <div className="w-64 bg-white border-r border-[#e7e7e7] h-screen fixed left-0 top-0 text-sm">
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
                className={`flex items-center gap-3 p-[10px] rounded-md ${
                  pathname === item.href
                    ? "bg-[#096CFF] text-[#edf7ff]"
                    : "text-[#5d5d5d] hover:bg-[#f6f6f6]"
                }`}
              >
                <item.icon size={18} />
                <span className={pathname === item.href ? "font-medium" : ""}>
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

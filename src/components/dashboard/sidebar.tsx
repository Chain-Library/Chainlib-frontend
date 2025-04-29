"use client";

import {
  Bell,
  BookOpen,
  DollarSign,
  LayoutDashboard,
  LineChart,
  LogOut,
  MessageSquare,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      icon: BookOpen,
      label: "Manage Content",
      href: "/dashboard/manage-content",
    },
    {
      icon: DollarSign,
      label: "Earnings",
      href: "/dashboard/earnings",
    },
    {
      icon: LineChart,
      label: "Analytics panel",
      href: "/dashboard/analytics",
    },
    {
      icon: MessageSquare,
      label: "Readers Feedback",
      href: "/dashboard/feedback",
    },
    {
      icon: Bell,
      label: "Notification",
      href: "/dashboard/notifications",
      badge: 1,
    },
    {
      icon: User,
      label: "Profile",
      href: "/dashboard/profile",
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
                  <div className="ml-auto w-5 h-5 bg-[#ff5c5c] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">{item.badge}</span>
                  </div>
                )}
              </Link>
            </li>
          ))}
          <li className="mt-8">
            <Link
              href="/logout"
              className="flex items-center gap-3 p-3 text-[#5d5d5d] hover:bg-[#f6f6f6] rounded-md"
            >
              <LogOut size={18} />
              <span>Sign Out</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

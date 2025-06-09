"use client";

import Logo from "@/app/_components/Logo";
import { cn } from "@/lib/utils";
import {
  Bell,
  BookOpen,
  DollarSign,
  LayoutDashboard,
  LineChart,
  Menu,
  MessageSquare,
  User,
  X,
} from "lucide-react";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: BookOpen,
    label: "Manage Content",
    href: "manage-content",
  },
  {
    icon: DollarSign,
    label: "Earnings",
    href: "earnings",
  },
  {
    icon: LineChart,
    label: "Analytics panel",
    href: "analytics",
  },
  {
    icon: MessageSquare,
    label: "Readers Feedback",
    href: "feedback",
  },
  {
    icon: Bell,
    label: "Notification",
    href: "notifications",
    badge: 1,
  },
  {
    icon: User,
    label: "Profile",
    href: "profile",
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const params = useParams()
  const router = useRouter()

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

  // close after navigation
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])


  const authorId = params?.authorId

  return (
    <>
      {/* Toggle button for mobile */}
      <button
        className="fixed top-4 left-6 z-50 p-2 rounded-md bg-white md:hidden shadow-md"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle sidebar"
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Sidebar */}
      <aside className={cn("border-r border-neutral-100 bg-background h-screen fixed left-0 top-0 z-40 transition-all duration-300 ease-in-out overflow-hidden",
        isOpen ? "translate-x-0 w-64" : "-translate-x-full w-0",
        "md:translate-x-0 md:w-64 md:static")}>
        <Logo className="px-4 py-6.75 border-b border-neutral-100" />

        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.label} >
                <Link onMouseOver={() => { router.prefetch(item.href) }}
                  prefetch={true}
                  href={`/author/${authorId}/${item.href}`}
                  className={cn("flex items-center gap-3 p-3 rounded-md", pathname.split("/").at(-1) === item.href || pathname.split("/").at(-1) === authorId && item.href === "/" || ((pathname.split("/").at(-1) === "publications" || pathname.split("/").at(-1) === "publish") && item.href === "manage-content")
                    ? "bg-primary-600 text-primary-50"
                    : "text-neutral-600 hover:bg-neutral-50"
                  )}
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

  );
}

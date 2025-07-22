

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function ProfileSidebar() {
  const pathname = usePathname();

  const navItems = [

    {
 
      label: "Profile Details",
      href: "/dashboard/writers/profile",
    },
    {

      label: "Genre Specialization",
      href: "/dashboard/writers/profile/genre",
    },
    {
  
      label: "Password",
      href: "/dashboard/writers/profile/password",
    },
    {
  
      label: "Social",
      href: "/dashboard/writers/profile/social",
    },
  ];

  return (
    <div className="w-80 bg-[#F6F6F6] border-r border-[#F6F6F6] border h-screen">
      <div className="p-4 flex items-center">
        <span className="font-[700] ml-3 text-[#3D3D3D] text-[22px]">Profile</span>
      </div>

      <nav className="p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={`flex items-center gap-3 p-3 rounded-md ${
                  pathname === item.href
                    ? "bg-[#E7E7E7] text-[#5D5D5D]"
                    : "text-[#5d5d5d] hover:bg-[#f6f6f6]"
                }`}
              >
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

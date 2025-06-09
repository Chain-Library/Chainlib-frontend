"use client";

import PageDetail from "@/app/_components/PageDetail";
import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const navItems = [
  {
    label: "Profile Details",
    href: "my-profile",
  },
  {
    label: "Followers",
    href: "followers",
  },
  {
    label: "Genre Specialization",
    href: "genre",
  },
  {
    label: "Password",
    href: "password",
  },
  {
    label: "Social",
    href: "social",
  },
  {
    label: "Sign Out",
    href: "sign-out",
  },
];

export function ProfileSidebar() {
  const pathname = usePathname();
  const searchParam = useSearchParams()
  const router = useRouter()

  const handleClick = (href: string) => {
    const params = new URLSearchParams(
      searchParam instanceof URLSearchParams ? searchParam.toString() : ''
    );
    params.set("page", href);
    console.log(params.toString())
    router.push(pathname + "?" + params.toString())
  }

  return (
    <>
      <PageDetail title="Profile" />
      <nav className="size-full py-6 md:py-0 w-full md:w-48 xl:w-58 bg-[#F6F6F6] md:h-screen">

        <ul className="py-2 md:py-0 size-full md:border-r-neutral-300 md:border-r gap-2 flex flex-col">
          {navItems.map((item) => (
            <li onClick={() => handleClick(item.href)} key={item.label} className={cn(" w-full text-[#5D5D5D] text-body-large cursor-pointer p-4 md:p-0 md:py-3 font-normal text-start", searchParam.get("page") === item.href || (!searchParam.get("page") && item.href === "profile")
              && "md:px-3 md:rounded-base bg-neutral-100"
            )}>
              {item.label}
            </li>
          ))}
        </ul>
      </nav>
    </>

  );
}

"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function NavLink({ children, href }: { children: ReactNode, href: string }) {
    const pathname = usePathname()
    return (
        <Link href={href} className={`${pathname === href ? "bg-primary-50 text-secondary-950" : "text-neutral-600"} hover:bg-primary-50 cursor-pointer text-label-large rounded-large px-4 py-2`}>{children}</Link>
    )
}

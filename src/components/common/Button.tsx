"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

function Button({ children, href, className }: { className: string, children: ReactNode, href: string }) {
    const pathname = usePathname()
    return (
        <Link href={href} className={`${className} px-8 py-4 rounded-base flex items-center font-light justify-center text-label-large`}>
            <span> {children}</span>
        </Link>
    )
}



export default Button;
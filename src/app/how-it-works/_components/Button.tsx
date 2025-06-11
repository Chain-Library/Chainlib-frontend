import Link from "next/link";
import { ReactNode } from "react";

function Button({ children, href, className }: { className: string, children: ReactNode, href: string }) {
    return (
        <Link href={href} className={`px-8 py-4 rounded-base flex items-center font-light justify-center text-label-large ${className} `}>
            <span> {children}</span>
        </Link>
    )
}



export default Button;


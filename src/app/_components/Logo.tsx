import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
    return (
        <Link href="/" className={cn("flex gap-3.5 items-center cursor-pointer", className)}>
            <div className="size-8.5 md:size-[29.25px] relative">
                <Image src="/logo.svg" alt="The Chainlib Logo" className="rounded-full p-0 m-0" fill priority quality={100} />
            </div>
            <div className="text-logo font-bold text-primary-950">ChainLib</div>
        </Link>
    )
}

import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className="flex gap-3.5 items-center cursor-pointer">
            <Image src="./logo.svg" alt="The Chainlib Logo" className="relative rounded-full" width={29.25} height={29.25} />
            <div className="text-logo font-bold text-primary-950">ChainLib</div>
        </Link>
    )
}

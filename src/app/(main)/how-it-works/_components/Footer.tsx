import Link from "next/link";
import { BiLogoLinkedin, BiLogoTelegram } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "./Logo";

export interface IFooterLinks {
    link: string;
    href: string;
}

const FooterLink: IFooterLinks[] = [
    { link: "Explore", href: "/explore" },
    { link: "Home", href: "/" },
    { link: "Books", href: "/books" },
    { link: "How It Works", href: "/how-it-works" },
    { link: "About", href: "/about-us" },
    { link: "Legal", href: "/legal" },
    { link: "Privacy Policy", href: "/privacy-policy" },
    { link: "Terms Of Service", href: "/terms-of-service" },
];


export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="p-6 md:px-15 md:py-6 pt-8 border-t-1 border-neutral-100 flex flex-col md:flex-row items-start gap-10 md:items-center md:justify-between size-full">
            <div className="flex flex-col justify-between items-start gap-7">
                <Logo />
                <div className="hidden item-center gap-6 md:flex">
                    <div className="hover:bg-neutral-200 cursor-pointer rounded-full border grid place-content-center border-neutral-600 size-12.5">
                        <FaXTwitter size={24} />
                    </div>
                    <div className="hover:bg-neutral-200 cursor-pointer rounded-full border grid place-content-center border-neutral-600 size-12.5">
                        <BiLogoTelegram size={24} />
                    </div>
                    <div className="hover:bg-neutral-200 cursor-pointer rounded-full border grid place-content-center border-neutral-600 size-12.5">
                        <BiLogoLinkedin size={24} />
                    </div>
                </div>
                <div className="text-neutral-600 text-label-large hidden md:block">
                    <span>© {currentYear}</span>{" "}<span>ChainLib. All rights reserved</span>
                </div>
            </div>

            <div className="grid grid-rows-5 grid-flow-col gap-y-2 gap-x-18.5 place-content-start">
                {FooterLink.map(({ link, href }, index) => <Link className="hover:opacity-75 opacity-100 whitespace-nowrap text-neutral-600 text-body-large cursor-pointer" key={index} href={href}>{link}</Link>)}
            </div>

            <div className="space-y-4 md:hidden">
                <div className="flex item-center gap-6">
                    <div className="hover:bg-neutral-200 cursor-pointer rounded-full border grid place-content-center border-neutral-600 size-12.5">
                        <FaXTwitter size={24} />
                    </div>
                    <div className="hover:bg-neutral-200 cursor-pointer rounded-full border grid place-content-center border-neutral-600 size-12.5">
                        <BiLogoTelegram size={24} />
                    </div>
                    <div className="hover:bg-neutral-200 cursor-pointer rounded-full border grid place-content-center border-neutral-600 size-12.5">
                        <BiLogoLinkedin size={24} />
                    </div>
                </div>
                <div className="text-neutral-600 text-label-large md:hidden">
                    <span>2025</span>{" "}<span>ChainLib. All rights reserved</span>
                </div>
            </div>
        </footer>
    )
}

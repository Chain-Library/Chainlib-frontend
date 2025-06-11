"use client"

import Logo from "@/app/_components/Logo";
import { ReactNode, useState } from "react";
import Button from "../how-it-works/_components/Button";
import NavLink from "../how-it-works/_components/NavLink";
import NavMenuButton from "../how-it-works/_components/NavMenuButton";
import NavSearchBar from "../how-it-works/_components/NavSearchBar";
import PopupModal from "./PopupModal";

interface ILink {
    link: string;
    href: string;
}

interface NavbarProps {
    children?: ReactNode;
}

const links: ILink[] = [
    { link: "Home", href: "/" },
    { link: "Books", href: "/books" },
    { link: "How It Works", href: "/how-it-works" },
    { link: "About ChainLib", href: "/about-us" },
];


function Navbar({ children }: NavbarProps) {
    const [isVisible, setIsVisible] = useState(false)
    return (
        <>
            <PopupModal isVisible={isVisible} setIsVisible={setIsVisible} />
            <nav className="z-10 px-6 md:px-15 fixed top-0 left-0 bg-background w-full border-b-1 border-neutral-100">
                <div className="flex justify-between items-center py-6 ">
                    <Logo />

                    <div className="lg:contents hidden">
                        <div className="flex lg:gap-2 xl:gap-6">
                            {links.map(({ link, href }: ILink, index: number) => (<NavLink href={href} key={index}>{link}</NavLink>))}
                        </div>

                        <div className="flex items-center gap-2">
                            <NavSearchBar />
                            <Button className="cursor-pointer border border-neutral-600 text-neutral-500" href="/auth/sign-in">Login</Button>
                            <button className="cursor-pointer px-8 py-4 rounded-base flex items-center font-light justify-center text-label-large bg-primary-600 text-background" onClick={() => setIsVisible(true)}>SignUp</button>
                        </div>
                    </div>

                    <NavMenuButton />
                </div>
                {children}
            </nav>
        </>
    )
}

export default Navbar
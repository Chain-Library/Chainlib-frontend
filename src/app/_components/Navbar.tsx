import Logo from "@/app/_components/Logo";
import { ReactNode } from "react";
import Button from "../how-it-works/_components/Button";
import NavLink from "../how-it-works/_components/NavLink";
import NavMenuButton from "../how-it-works/_components/NavMenuButton";
import NavSearchBar from "../how-it-works/_components/NavSearchBar";

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
    return (
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
                        <Button className="cursor-pointer bg-primary-600 text-background" href="/auth/sign-up">SignUp</Button>
                    </div>
                </div>

                <NavMenuButton />
            </div>
            {children}
        </nav>
    )
}

export default Navbar
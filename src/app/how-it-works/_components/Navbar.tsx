
import Button from "./Button";
import Logo from "./Logo";
import NavLink from "./NavLink";
import NavMenuButton from "./NavMenuButton";
import NavSearchBar from "./NavSearchBar";

interface ILink {
    link: string;
    href: string;
}

const links: ILink[] = [
    { link: "Home", href: "/" },
    { link: "Books", href: "/books/bookId" },
    { link: "How It Works", href: "/how-it-works" },
    { link: "About ChainLib", href: "/about-us" },
];

function Navbar() {
    return (
        <nav className="z-10 flex p-6 md:px-15 md:py-6 fixed top-0 left-0 bg-background w-full justify-between items-center border-b-1 border-neutral-100">
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
        </nav>
    )
}

export default Navbar
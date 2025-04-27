import Button from "./Button";
import Logo from "./Logo";
import NavLink from "./NavLink";
import SearchBar from "./SearchBar";

interface ILink {
    link: string;
    href: string;
}

const links: ILink[] = [{ link: "Home", href: "/" }, { link: "Books", href: "/books/:bookId" }, { link: "How It Works", href: "/how-it-works" }, { link: "About ChainLib", href: "/about-chainlib" }]

function Navbar() {
    return (
        <nav className="z-10 flex px-15 fixed top-0 left-0 bg-background w-screen py-6 justify-between items-center border-b-1 border-neutral-100">
            <Logo />

            <div className="flex gap-6">
                {links.map(({ link, href }: ILink, index: number) => (<NavLink href={href} key={index}>{link}</NavLink>))}
            </div>

            <div className="flex items-center gap-2">
                <SearchBar />
                <Button className="cursor-pointer border-1 border-neutral-600 text-neutral-500" href="/login">Login</Button>
                <Button className="cursor-pointer bg-primary-600 text-background" href="/signup">SignUp</Button>
            </div>
        </nav>
    )
}

export default Navbar
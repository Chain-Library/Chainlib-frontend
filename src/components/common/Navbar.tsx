
import { links } from "@/data";
import { ILink } from "@/types";
import Button from "./Button";
import Logo from "./Logo";
import NavLink from "./NavLink";
import NavMenuButton from "./NavMenuButton";
import SearchBar from "./SearchBar";

function Navbar() {
    return (
        <nav className="z-10 flex p-6 md:px-15 md:py-6 fixed top-0 left-0 bg-background w-full justify-between items-center border-b-1 border-neutral-100">
            <Logo />

            <div className="lg:contents hidden">
                <div className="flex lg:gap-2 xl:gap-6">
                    {links.map(({ link, href }: ILink, index: number) => (<NavLink href={href} key={index}>{link}</NavLink>))}
                </div>

                <div className="flex items-center gap-2">
                    <SearchBar />
                    <Button className="cursor-pointer border-1 border-neutral-600 text-neutral-500" href="/login">Login</Button>
                    <Button className="cursor-pointer bg-primary-600 text-background" href="/signup">SignUp</Button>
                </div>
            </div>

            <NavMenuButton />
        </nav>
    )
}

export default Navbar
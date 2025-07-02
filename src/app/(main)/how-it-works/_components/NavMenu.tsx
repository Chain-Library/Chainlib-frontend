import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ILink } from "./types";

const animateFn = (variants: Variants, custom: number | null = null) => {
    return {
        initial: "initial",
        animate: "enter",
        exit: "exit",
        custom,
        variants,
    };
};

const links: ILink[] = [
    { link: "Home", href: "/" },
    { link: "Books", href: "/books/bookId" },
    { link: "How It Works", href: "/how-it-works" },
    { link: "About ChainLib", href: "/about-us" },
];

export default function NavMenu() {
    const opacity = {
        initial: {
            y: "100%",
        },
        animate: (i: number) => ({
            y: "0%",
            transition: { duration: 0.5, delay: 0.01 * i + 0.3 },
        }),
        exit: {
            y: "100%",
            transition: { duration: 0.2 },
        },
    };

    return (
        <motion.div initial={{ opacity: 0, y: "-100%", height: "0%" }}
            animate={{ opacity: 1, y: "0%", height: "100vh" }}
            exit={{ opacity: 0, y: "-100%", height: "0%" }}
            transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
            className="w-screen h-screen origin-top p-6 grid place-content-center absolute top-0 left-0 bg-background -z-10"
        >
            <div className="flex flex-col justify-baseline items-start gap-y-8">
                {links.map(({ link, href }, index) =>
                (<motion.div {...animateFn(opacity)}
                    className="text-display-medium" key={index}>
                    <Link href={href}>{link}</Link>
                </motion.div>)
                )}
            </div>
        </motion.div>
    )
}

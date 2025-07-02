"use client"

import { AnimatePresence } from "framer-motion"
import { useState } from "react"
import NavMenu from "./NavMenu"

export default function NavMenuButton() {
    const [openMenu, setOpenMenu] = useState(false)

    function handleMenuClick() {
        setOpenMenu(t => !t)
    }
    return (
        <>
            <button onClick={handleMenuClick} className="cursor-pointer lg:hidden flex flex-col gap-1 items-end justify-center w-13">
                <span className={`w-full h-1.5 rounded-base transition-all duration-300 ease-in-out bg-neutral-950 ${openMenu ? "translate-y-1.25 -rotate-45" : "translate-y-0 rotate-0"}`}></span>
                <span className={`w-4/5 h-1.5 rounded-base bg-neutral-950 ${openMenu ? "hidden" : "block"}`}></span>
                <span className={`h-1.5 rounded-base transition-all duration-300 ease-in-out bg-neutral-950 ${openMenu ? "w-full -translate-y-1.25 rotate-45" : "w-3/5 translate-y-0 rotate-0"}`}></span>
            </button>

            <AnimatePresence mode="wait">
                {openMenu && <NavMenu />}
            </AnimatePresence>
        </>
    )
}

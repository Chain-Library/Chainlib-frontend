"use client"

import clsx from "clsx"
import { useEffect, useRef, useState } from "react"
import { BiSolidSearch } from "react-icons/bi"

function SearchBar() {
    const [active, setActive] = useState(false)

    const buttonRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (buttonRef.current && !(buttonRef.current).contains(event.target as Node)) {
                setActive(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    return (
        <button ref={buttonRef} onClick={() => setActive(() => true)} className={clsx(
            "cursor-pointer hover:bg-neutral-50 border border-neutral-300 py-3 px-3.5 rounded-small flex items-center transition-all duration-300 ease-in-out",
            { "bg-neutral-50": active }
        )}>
            <BiSolidSearch size={24} />
            <div className={clsx(
                "overflow-hidden transition-all duration-300 ease-in-out",
                active ? "w-48 opacity-100 ml-3" : "w-0 opacity-0"
            )}>
                <input className="w-full bg-transparent outline-none placeholder:text-neutral-300 text-body-large font-light" placeholder="What are you looking for" autoFocus={active} />
            </div>
        </button>
    )
}

export default SearchBar

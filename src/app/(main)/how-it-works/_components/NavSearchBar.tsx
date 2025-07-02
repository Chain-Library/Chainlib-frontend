"use client"

import { cn } from "@/lib/utils"
import { FormEvent, useEffect, useRef, useState } from "react"
import { BiSolidSearch } from "react-icons/bi"

function NavSearchBar() {
    const [active, setActive] = useState(false)

    const searchRef = useRef<HTMLFormElement>(null)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (searchRef.current && !(searchRef.current).contains(event.target as Node)) {
                setActive(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        setActive(false)
    }

    return (
        <form onSubmit={handleSubmit} ref={searchRef} onClick={() => setActive(() => true)} className={cn(
            "cursor-pointer hover:bg-neutral-50 border border-neutral-300 py-3 px-3.5 rounded-small text-neutral-300 shadow-base flex items-center transition-all duration-300 ease-in-out",
            { "bg-neutral-50": active }
        )}>
            <BiSolidSearch size={24} />
            <div className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out",
                active ? "w-48 opacity-100 ml-3" : "w-0 opacity-0"
            )}>
                <input type="text" className="w-full bg-transparent outline-none placeholder:text-neutral-300 text-body-large text-neutral-900 font-light" placeholder="What are you looking for" autoFocus={active} />
            </div>
        </form>
    )
}

export default NavSearchBar
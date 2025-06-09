"use client"

import { usePathname, useRouter } from 'next/navigation'
import React, { ReactNode } from 'react'

export default function CustomLink({ children, classname, route }: { route: string, classname: string, children: ReactNode }) {

    const navigate = useRouter()
    const pathname = usePathname()
    const presentPath = pathname.split("/").at(-1)


    const handleClick = () => {
        if (!presentPath) return

        if (pathname.split("/").length === 3) {
            navigate.push(pathname + "/" + route)
        } else {
            navigate.push(pathname.replace(presentPath, route))
        }
    }

    return (
        <button onClick={handleClick} className={classname}>
            {children}
        </button>
    )
}

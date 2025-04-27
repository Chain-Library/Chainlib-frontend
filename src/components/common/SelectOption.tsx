"use client"

import { useState } from "react"

export default function SelectOption() {
    const [writerIsActive, setWriterIsActive] = useState(true)

    return (
        <div className="mt-10 flex justify-center items-center p-2 gap-2 border-1 rounded-x-large border-primary-100 shadow-base w-fit">
            <button onClick={() => setWriterIsActive(() => true)} className={`${writerIsActive ? "bg-primary-300" : "bg-primary-50"} text-body-medium font-light rounded-x-large px-6 flex justify-center cursor-pointer items-center py-3`} type="button">
                <span>For Writers</span>
            </button>
            <button onClick={() => setWriterIsActive(() => false)} className={`${!writerIsActive ? "bg-primary-300" : "bg-primary-50"} text-body-medium font-light rounded-x-large px-6 cursor-pointer flex justify-center items-center py-3`} type="button">
                <span>Readers</span>
            </button>
        </div>
    )
}

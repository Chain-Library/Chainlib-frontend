import { ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function PageDetail({ title, children }: { title: string, children?: React.ReactNode }) {
    const router = useRouter()
    const onClick = () => {
        router.back()
    }

    return (
        <div className="py-4 h-full flex justify-between items-center md:hidden">
            <div className="flex self-start items-center gap-4">
                <ChevronLeft onClick={onClick} className="size-6 text-neutral-400 cursor-pointer" />
                <h1 className="text-body-18px-large font-bold text-neutral-500">{title}</h1>
            </div>
            {children}
        </div>
    )
}

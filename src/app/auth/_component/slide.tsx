"use client"

import Logo from '@/app/_components/Logo';
import { cn } from '@/lib/utils';
import { IMessageCard } from "@/types/types";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useSearchParams } from 'next/navigation';

const SignInMessageCard: IMessageCard[] = [{
    step: 1, heading: "Your Stories Still Matter.", message: "Your words have power. Your ideas have a place. Sign in to keep building the library only you can create. The world is still reading."
}]

const SignUpMessageCards: IMessageCard[] = [{
    step: 1, heading: "It Starts With a Story", message: "Every great book begins with a single idea. We give that idea a stage, a voice, and the freedom to reach the world."
},
{ step: 2, heading: "You Own Your Voice", message: "No middlemen. No boundaries. With ChainLib, your content stays yours. Publish with purpose and keep the rewards you earn." }, {
    step: 3, heading: "Write. Connect. Impact."
    , message: "From local readers to global fans, your story matters. We helps you reach more people, build your community, and leave your mark."
}]


export default function Slide() {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const step = Number(searchParams.get("step") ?? 1)
    const messageCards: IMessageCard[] = pathname === "/sign-in" ? SignInMessageCard : SignUpMessageCards
    const messageCard = messageCards[step - 1]

    return (
        <>
            <div className="flex flex-col items-start justify-between h-full relative">
                <Logo className="mb-8" />

                <AnimatePresence mode='wait'>
                    <motion.div key={step}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.76, 1, 0.24, 0] }} className="text-start space-y-6">
                        <h1 className="text-headline-x-large font-bold">
                            {messageCard.heading}
                        </h1>
                        <p className="text-body-18px-large">
                            {messageCard.message}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="flex items-end space-x-4 mt-16 mx-auto">
                {Array.from({ length: messageCards.length }).map((_, index) => (<div key={index} className={cn("w-16 bg-primary-50 transition-all duration-200 ease-in-out rounded-full", (index + 1 > step) ? "opacity-50 h-1" : "opacity-100 h-1.5")} />))}
            </div>
        </>
    )
}



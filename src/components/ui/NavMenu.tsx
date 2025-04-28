import { AnimatePresence, motion } from "framer-motion"

export default function NavMenu() {
    return (
        <AnimatePresence mode="wait">
            <motion.div className="w-screen h-screen p-6 grid place-content-center absolute top-0 left-0 bg-background -z-10">NavMenu</motion.div>
        </AnimatePresence>
    )
}

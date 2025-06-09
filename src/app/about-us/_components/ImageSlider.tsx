"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function ImageSlider() {
    return (
        <motion.div className="w-full mx-auto h-24 md:h-46 mb-16 md:mb-20 flex items-center justify-center relative">
            <motion.div animate={{ height: "100%", origin: "center" }} transition={{ ease: [0.76, 0, 0.24, 1], delay: 0.4, duration: 1 }} viewport={{ once: true }} initial={{ height: 0 }} className="size-full inset-0 relative">
                <Image
                    src="/images/image.png"
                    alt="Diverse community of readers and writers"
                    fill
                    className="object-cover"
                />
            </motion.div>
        </motion.div>
    )
}

"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

export default function ImageSlider() {
    const [showSlider, setShowSlider] = useState(false)

    return (
        <motion.div className="w-full mx-auto h-24 md:h-46 mb-16 md:mb-20 flex items-center justify-center relative">
            <motion.div animate={{ height: "100%", origin: "center" }} transition={{
                ease: [0.76, 0, 0.24, 1], delay: 0.4, duration: 1, onComplete: () => setShowSlider(true),
            }} viewport={{ once: true }} initial={{ height: 0 }} className="size-full inset-0 relative">
                <motion.div
                    animate={
                        showSlider
                            ? {
                                x: ["0%", "-100%"],
                            }
                            : false
                    }
                    transition={
                        showSlider
                            ? {
                                x: {
                                    duration: 8,
                                    ease: "linear",
                                    repeat: Infinity,
                                    repeatType: "loop",
                                },
                            }
                            : {}
                    }
                    className="absolute top-0 left-0 h-full flex"
                    style={{ width: "200%", willChange: "transform" }}
                >
                    {/* Duplicate image for seamless loop */}
                    <div className="relative w-full h-full flex-shrink-0">
                        <Image
                            src="/images/image.png"
                            alt="Diverse community of readers and writers"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative w-full h-full flex-shrink-0">
                        <Image
                            src="/images/image.png"
                            alt=""
                            fill
                            className="object-cover"
                            aria-hidden
                        />
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

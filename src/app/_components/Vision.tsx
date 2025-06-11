"use client"

import { motion } from "framer-motion"

export default function Vision() {
    return (
        <>
            <motion.h1
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-headline-x-large leading-12.5 font-bold text-primary-950 text-left sm:text-center md:text-left"
            >
                <span>Building More</span>
                <br />
                <span>Than an <span className="text-primary-600">e-Library</span></span>
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-body-18px-large font-light text-left max-w-[34rem] sm:text-center md:text-left"
            >
                A decentralized world where stories live on-chain and creators stay in control. Powered by StarkNet, our platform gives writers the freedom to publish without intermediaries and gives readers direct access to original, verifiable content they can truly own.
            </motion.p></>
    )
}

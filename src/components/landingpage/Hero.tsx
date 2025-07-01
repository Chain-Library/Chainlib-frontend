"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const peopleImages = [
  { id: 1, src: "/hero1.png", alt: "Person 1" },
  { id: 2, src: "/hero2.png", alt: "Person 2" },
  { id: 3, src: "/hero3.png", alt: "Person 3" },
  { id: 4, src: "/hero4.png", alt: "Person 4" },
  { id: 5, src: "/hero5.png", alt: "Person 5" },
];

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-2xl md:text-5xl md:leading-15 font-bold mb-4 text-[#0F265C] max-w-[785px]"
      >
        <span className="text-[#096CFF]">A Decentralized Library</span> for the
        Future of Digital Publishing
      </motion.h1>

      <div className="flex mt-8 bg-transparent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <img src="/heroPeopleImage.svg" alt="" />
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
        className="text-[#0F265C] max-w-2xl mb-8 mt-4"
      >
        Own your stories, engage your readers, and earn from <br /> your content
        with blockchain transparency.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        viewport={{ once: true }}
        className="bg-[#096CFF] text-white font-semibold py-3 px-16 rounded-[12px]"
      >
        Get Started
      </motion.button>
    </section>
  );
}

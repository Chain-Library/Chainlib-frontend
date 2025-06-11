"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const peopleImages = [
  { id: 1, src: "/hero1.png", alt: "Person 1" },
  { id: 2, src: "/hero2.png", alt: "Person 2" },
  { id: 3, src: "/hero3.png", alt: "Person 3" },
  { id: 4, src: "/hero4.png", alt: "Person 4" },
  { id: 5, src: "/hero5.png", alt: "Person 5" },
];

export default function Hero() {

  useEffect(() => {
    window.addEventListener("load", () => window.resizeTo(window.innerWidth, window.innerHeight))

    return () => {
      window.removeEventListener("load", () => window.resizeTo(window.innerWidth, window.innerHeight))
    }
  }, [])


  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center text-center pb-16 mt-28 sm:mt-15 lg:mt-28 px-6 md:px-15">

      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-2xl md:text-5xl font-bold mb-4 text-[#0F265C]"
      >
        <span className="text-[#096CFF]">A Decentralized Library</span> for the <br /> Future of Digital Publishing
      </motion.h1>

      <div className="flex mt-8">
        {peopleImages.map((person, index) => (
          <motion.div
            key={person.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: index * 0.4 }}
            viewport={{ once: true }}
            className={`transform ${index === 0 || index === 4 ? "translate-y-8 translate-x-0" : index === 1 || index === 3 ? "translate-y-2" : ""
              }`}
          >
            <Image
              src={person.src}
              alt={person.alt}
              width={140}
              height={100}
              className="rounded"
            />
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
        className="text-gray-600 max-w-2xl mb-8 mt-10"
      >
        Own your stories, engage your readers, and earn from <br /> your content with blockchain transparency.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        viewport={{ once: true }}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-16 rounded-xl transition-all"
      >
        <Link href={"/auth/sign-up"}>
          Get Started
        </Link>
      </motion.button>

    </main>
  );
}

"use client"

import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ITextReveal {
  styles?: string;
  children: string
}

const SlideUp = {
  initial: {
    y: "200%",
  },
  open: (i: number) => ({
    y: "0%",
    transition: { duration: 0.6, delay: 0.01 * i },
  }),
  closed: {
    y: "200%",
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
  },
};

export default function TextReveal({
  styles,
  children
}: ITextReveal) {
  const textRef = useRef<HTMLElement>(null)
  const inView = useInView(textRef, { amount: 0.8, once: true, })
  return (
    <>
      {children.split(" ").map((word: string, index: number) => <span key={index}
        className={cn(styles ? styles : "", "relative mr-1 overflow-hidden inline-flex")}
      >
        <motion.span
          variants={SlideUp}
          custom={index}
          animate={inView ? "open" : "closed"}
          key={index}
          className="flex justify-center items-center"
        >
          {word}
        </motion.span>
      </span>)}
    </>
  );
}

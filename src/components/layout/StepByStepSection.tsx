"use client"

import { useRef, useState } from "react";
import LoginStep from "../common/LoginStep";
import SelectChoiceButton from "../common/SelectChoiceButton";
import SignupStep from "../common/SignupStep";

export default function StepByStepSection() {
  const [writerIsActive, setWriterIsActive] = useState(true)
  const writerRef = useRef<HTMLDivElement>(null)
  const readerRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (section: string) => {
    if (section === "writer") {
      writerRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      setWriterIsActive(() => true)
    } else {
      readerRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      setWriterIsActive(() => false)
    }
  };

  return (
    <section className="px-6 relative h-[44rem] sm:h-[34.25rem] overflow-y-auto md:px-15 w-full flex flex-col justify-start items-center scroll-smooth stepContainer">
      <SelectChoiceButton scrollToSection={scrollToSection} writerIsActive={writerIsActive} />

      {/* Signup steps */}
      <SignupStep writerRef={writerRef} />

      {/* Login Steps */}
      <LoginStep readerRef={readerRef} />
    </section>
  )
}

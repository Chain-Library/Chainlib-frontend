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
      writerRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      setWriterIsActive(() => true)
    } else {
      readerRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      setWriterIsActive(() => false)
    }
  };

  return (
    <main className="px-6 size-full md:px-15 w-full flex flex-col justify-start items-center">
      <div className="relative flex flex-col justify-start items-center">
        <SelectChoiceButton scrollToSection={scrollToSection} writerIsActive={writerIsActive} />

        {/* Signup steps */}
        <SignupStep writerRef={writerRef} />
      </div>

      {/* Login Steps */}
      <LoginStep readerRef={readerRef} />
    </main>
  )
}

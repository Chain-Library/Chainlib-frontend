// pages/StepperExample.tsx
import React from "react";
import { ProgressStepper } from "./ProgressStepper";

const steps = [
  { label: "Book Content" },
  { label: "Book Details" },
  { label: "Pricing" },
];

export default function StepperExample() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <ProgressStepper steps={steps} currentStep={2} />
    </div>
  );
}

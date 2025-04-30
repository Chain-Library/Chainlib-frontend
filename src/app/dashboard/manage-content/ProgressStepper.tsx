// components/ProgressStepper.tsx
import React from "react";

type Step = {
  label: string;
};

interface ProgressStepperProps {
  steps: Step[];
  currentStep: number; // 1-based index
}

export const ProgressStepper: React.FC<ProgressStepperProps> = ({
  steps,
  currentStep,
}) => {
  return (
    <div className="flex items-center justify-between w-full max-w-3xl mx-auto px-4 py-8 bg-gray-50">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isCompleted = stepNumber < currentStep;
        const isActive = stepNumber === currentStep;

        return (
          <div
            key={step.label}
            className="flex-1 flex flex-col items-center relative"
          >
            {/* Line connector */}
            {index !== 0 && (
              <div
                className={`absolute top-5 left-0 w-full h-0.5 z-0 ${
                  isCompleted ? "bg-blue-500" : "bg-gray-300"
                }`}
              />
            )}

            {/* Step circle */}
            <div
              className={`z-10 flex items-center justify-center w-8 h-8 rounded-full border-2 text-sm font-medium
              ${
                isCompleted
                  ? "bg-blue-500 text-white border-blue-500"
                  : isActive
                  ? "bg-white text-blue-500 border-blue-500"
                  : "bg-white text-gray-400 border-gray-300"
              }`}
            >
              {stepNumber}
            </div>

            {/* Label */}
            <div className="mt-2 text-sm text-gray-700">{step.label}</div>
          </div>
        );
      })}
    </div>
  );
};

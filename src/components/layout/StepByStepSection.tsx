import LoginStep from "../common/LoginStep";
import SelectChoiceButton from "../common/SelectChoiceButton";
import SignupStep from "../common/SignupStep";

export default function StepByStepSection() {
  return (
    <section className="p-6 md:px-15 md:py-6 pt-35 w-full flex flex-col justify-center items-center">
      <SelectChoiceButton />

      {/* Signup steps */}
      <SignupStep />

      {/* Login Steps */}
      <LoginStep />
    </section>
  )
}

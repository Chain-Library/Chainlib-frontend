"use client";
import { useState } from "react";
// import { useRouter } from "next/navigation";
import SignUpForm from "./signUp-form";
import PasswordForm from "./password-form";
import EmailVerification from "./email-verification";
import SuccessModal from "./success-modal";

export default function SignUpPage() {
  // const router = useRouter();
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    pseudonym: "",
    email: "example@gmail.com", // Default email for testing
    password: "",
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSignUpSubmit = (data: Partial<typeof userData>) => {
    setUserData({ ...userData, ...data });
    setStep(2);
  };

  const handlePasswordSubmit = (password: string) => {
    setUserData({ ...userData, password });
    setStep(3);
  };

  const handleVerificationSubmit = () => {
    setShowSuccessModal(true);
    // Hide modal after 3 seconds and redirect to dashboard or home
    setTimeout(() => {
      setShowSuccessModal(false);
      // router.push("/dashboard") // Uncomment when you have a dashboard page
    }, 3000);
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="min-h-screen w-full p-6">
      {step === 1 && (
        <SignUpForm onSubmit={handleSignUpSubmit} defaultValues={userData} />
      )}
      {step === 2 && (
        <PasswordForm onSubmit={handlePasswordSubmit} onBack={handleBack} />
      )}
      {step === 3 && (
        <EmailVerification
          email={userData.email}
          onSubmit={handleVerificationSubmit}
          onBack={handleBack}
        />
      )}
      {showSuccessModal && <SuccessModal />}
    </div>
  );
}


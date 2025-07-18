// app/manage-content/components/BookCreationFlow.tsx
import React, { useState } from "react";
import StepIndicator from "./StepIndicator";
import BookContentStep from "./BookContentStep";
import BookDetailsStep from "./BookDetailsStep";
import PricingStep from "./PricingStep";
import PreviewModal from "./PreviewModal";
import SuccessModal from "./SuccessModal";

interface BookCreationFlowProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

const BookCreationFlow: React.FC<BookCreationFlowProps> = ({
  currentStep,
  setCurrentStep,
}) => {
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    bookTitle: "",
    subtitle: "",
    language: "",
    isbn: "",
    authorName: "Joe Yanum",
    genres: [] as string[],
    tags: [] as string[],
    description: "",
    pricingOption: "one-time",
    price: "9.89",
    stark: "82.22",
    contributors: [] as Array<{ name: string; type: string; email?: string }>,
  });

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowPreviewModal(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      setCurrentStep(0);
    }
  };

  const handlePublish = () => {
    setShowPreviewModal(false);
    setShowSuccessModal(true);
  };

  const handleSuccessClose = () => {
    setShowSuccessModal(false);
    setCurrentStep(0);
  };

  return (
    <div className="w-full">
      <StepIndicator currentStep={currentStep} />

      <div className="mt-5">
        <h2 className="text-2xl font-semibold mb-6">E-Book</h2>

        {currentStep === 1 && (
          <BookContentStep
            formData={formData}
            setFormData={setFormData}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}

        {currentStep === 2 && (
          <BookDetailsStep
            formData={formData}
            setFormData={setFormData}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}

        {currentStep === 3 && (
          <PricingStep
            formData={formData}
            setFormData={setFormData}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}
      </div>

      {showPreviewModal && (
        <PreviewModal
          formData={formData}
          onClose={() => setShowPreviewModal(false)}
          onPublish={handlePublish}
        />
      )}

      {showSuccessModal && <SuccessModal onClose={handleSuccessClose} />}
    </div>
  );
};

export default BookCreationFlow;

"use client"

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import ContentInput from "./ContentInput";
import PreviewModal from "./PreviewModal";
import SuccessModal from "./SuccessModal";

interface IData {
  bookTitle: string;
  subtitle: string;
  language: string;
  isbn: string;
  authorName: string;
  genres: string[],
  seriesType: string,
  tags: string[],
  description: string;
  pricingOption: string
  price: string
  stark: string
  contributors: Array<{ name: string; type: string; email?: string }>,
}

interface PricingStepProps {
  formData: IData;
  setFormData: (data: object) => void;
  onBack: () => void;
  bookType: "Series" | "Exclusive NFT Edition" | "E-Book";
}

const PricingStep: React.FC<PricingStepProps> = ({
  formData,
  setFormData,
  onBack, bookType
}) => {
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handlePublish = () => {
    setShowPreviewModal(false);
    setShowSuccessModal(true);
  };

  return (
    <>
      {/* change to form later */}
      <div className="flex-1 col-span-7 max-w-[55vw] mx-auto w-full bg-white rounded-md">
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-neutral-300 mb-2">
            Pricing Options
          </h3>
          <p className="text-neutral-600 mb-6">Select Your Preferred Option</p>

          {/* Select pricing option */}
          <div className={cn("grid gap-4 mb-8", bookType?.toLowerCase() === "e-book" ? "grid-cols-2" : "grid-cols-1")}>
            {bookType?.toLowerCase() === "e-book" ? <>
              <PricingOption option="One-Time" setFormData={setFormData} formData={formData} icon="/pricing1.svg" message="Readers pay once to own your book forever" />
              <PricingOption option="subscription" setFormData={setFormData} formData={formData} icon="/pricing2.svg" message="Readers access your book as part of their active subscription" />
            </>
              : <ContentInput label="Number of Copies (Limited Edition)" placeholder="20" value="" onChange={(e) => setFormData({ noOfCopies: e.target.value })} />}
          </div>

          {/* Input the price */}
          <div
            className={`grid gap-6 ${formData.pricingOption.toLowerCase() === "one-time"
              ? "grid-cols-2"
              : "grid-cols-1"
              }`}
          >
            <PricingInput formData={formData} option="one-time" label="Set Price" icon="/coin1.svg" placeholder={
              formData.pricingOption.toLowerCase() === "one-time"
                ? formData.price
                : "No price input needed"
            }
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              } />

            {formData.pricingOption.toLowerCase() === "one-time" && (<PricingInput formData={formData} option="" label="Price in Stark (STRK)" icon="/coin2.svg" placeholder={formData.stark}
              onChange={(e) =>
                setFormData({ ...formData, stark: e.target.value })
              } />)}
          </div>

          {/* additional note */}
          <div className="mt-6 p-4 bg-[#EDF7FF] rounded-lg border border-[#096CFF]">
            {formData.pricingOption.toLowerCase() === "one-time" ? <p className="text-sm text-[#454545]">
              You&apos;ll receive <span className="font-semibold">80%</span> in
              royalties from each sale. We keep a small fee to maintain the
              platform and ensure smooth publishing for everyone.</p> : <p className="text-sm text-[#454545]">Readers pay a recurring fee to access books. You earn based on how many subscribers read your content each month.</p>}
          </div>
        </div>

        <div className="flex justify-between mt-8 p-6 space-x-6">
          <button
            onClick={onBack}
            className="px-4 w-full py-3 bg-[#edf7ff] text-[#236fea] cursor-pointer rounded-md hover:bg-[#d6ecff] transition-colors"
          >
            Previous Page
          </button>
          <button
            onClick={() => setShowPreviewModal(true)}
            className="px-4 w-full py-3 bg-[#236fea] text-white rounded-md cursor-pointer hover:bg-[#096cff] transition-colors"
          >
            Publish Book
          </button>
        </div>
      </div>

      {showPreviewModal && (
        <PreviewModal
          formData={undefined} // correct later
          onClose={() => setShowPreviewModal(false)}
          onPublish={handlePublish}
        />
      )}

      {showSuccessModal && <SuccessModal />}
    </>
  );
};


function PricingOption({ option, formData, message, setFormData, icon }: { option: string, formData: IData; message: string; setFormData: (d: object) => void; icon: string; }) {
  return (
    <button
      onClick={() => {
        setFormData({ pricingOption: option })
        console.log(option, formData.pricingOption)
      }
      }
      className={`py-4 px-2 border-1 cursor-pointer rounded-lg text-center ${formData.pricingOption.toLowerCase() === option.toLowerCase()
        ? "border-primary-800 bg-neutral-50 shadow-small"
        : "border-neutral-100"
        }`}
    >
      <div className="flex flex-col items-center gap-4 mb-2">
        <div className="relative size-10">
          <Image fill src={icon} alt="One-time Purchase" className="my-1.5" />
        </div>
        <span
          className={`font-medium text-neutral-900 ${formData.pricingOption === option.toLowerCase()
            ? "text-primary-600"
            : "text-neutral-900"
            } `}
        >
          {option.toLowerCase() === "one-time" ? "One-Time Purchase" : "Subscription Only"}
        </span>
      </div>
      <p className="text-sm text-neutral-600 ">
        {message}
      </p>
    </button>
  )
}

function PricingInput({ option, placeholder, formData, label, onChange, icon }: { option: string, formData: IData; label: string; placeholder: string; onChange: (d: ChangeEvent<HTMLInputElement>) => void; icon: string; }) {
  return <div className="relative">
    <label className="block text-label-large font-bold text-neutral-600 mb-2">
      {label}{" "}
      {formData.pricingOption.toLowerCase() === option.toLowerCase() ? "(USDC)" : ""}
    </label>
    <div className="relative flex items-center space-x-4">
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-600">
        <Image src={icon} width={24} height={24} alt="Coin1" />
      </div>
      <input
        type="number"
        value={""}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full relative pl-12 pr-4 py-3 border border-neutral-100 text-neutral-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-400"
      />
    </div>
  </div>
}


export default PricingStep;

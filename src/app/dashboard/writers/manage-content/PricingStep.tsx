"use client";

import React, { useState } from "react";
import ebook1 from "../../../../../public/ebook1.svg";
import pricing1 from "../../../../../public/pricing1.svg";
import pricing2 from "../../../../../public/pricing2.svg";
import coin1 from "../../../../../public/coin1.svg";
import coin2 from "../../../../../public/coin2.svg";
import play from "../../../../../public/play.svg";
import Image from "next/image";
import BookPreviewModal from "./book-preview-modal";

interface PricingStepProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formData: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setFormData: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}

const PricingStep: React.FC<PricingStepProps> = ({
  formData,
  setFormData,
  onNext,
  onBack,
}) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <div className="bg-[#f6f6f6]  ">
      <div className="flex gap-8 max-w-full mx-auto">
        {/* Book Cover Preview */}
        <div className="w-80">
          <div className="border-2 border-dashed border-[#4BB1FF] bg-[#EDF7FF] rounded-lg p-6 text-center h-[350px] flex flex-col items-center justify-center">
            <div className=" rounded flex items-center justify-center mb-4">
              <Image src={ebook1} alt="Create E-Book" />
            </div>
            <p className="text-sm text-[#5d5d5d]">Drag and drop or Click to</p>
            <p className="text-sm text-[#5d5d5d]">choose file from device</p>
          </div>
          <p className="text-sm text-[#888888] mt-2">
            Supported format: JPEG & PNG
          </p>

          <button
            onClick={() => setIsPreviewOpen(true)}
            className="w-full flex items-center justify-center space-x-2 cursor-pointer border border-[#888888] rounded-xl p-2.5 mt-8 text-[#888888]"
          >
            <Image src={play} alt="Pricing" />
            <span>Preview Book</span>
          </button>
        </div>

        {/* Pricing Options */}
        <div className="flex-1 bg-white">
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-[#B0B0B0] mb-2">
              Pricing Options
            </h3>
            <p className="text-[#5d5d5d] mb-6">Select Your Preferred Option</p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <button
                onClick={() =>
                  setFormData({ ...formData, pricingOption: "one-time" })
                }
                className={`p-4 border cursor-pointer rounded-lg text-center ${
                  formData.pricingOption === "one-time"
                    ? "border-[#236fea] bg-[#F6F6F6]"
                    : "border-[#e7e7e7]"
                }`}
              >
                <div className="flex flex-col items-center gap-3 mb-2">
                  <Image src={pricing1} alt="One-time Purchase my-1.5" />
                  <span
                    className={`font-medium text-[#3d3d3d] ${
                      formData.pricingOption === "one-time"
                        ? "text-[#096CFF]"
                        : "text-[#3d3d3d]"
                    } `}
                  >
                    One-time Purchase
                  </span>
                </div>
                <p className="text-sm text-[#5d5d5d] ">
                  Readers pay once to own your book forever
                </p>
              </button>

              <button
                onClick={() =>
                  setFormData({ ...formData, pricingOption: "subscription" })
                }
                className={`p-4 border text-center cursor-pointer rounded-lg ${
                  formData.pricingOption === "subscription"
                    ? "border-[#236fea] bg-[#F6F6F6]"
                    : "border-[#e7e7e7]"
                }`}
              >
                <div className="flex flex-col items-center gap-3 mb-2">
                  <Image src={pricing2} alt="Subscription Only my-1.5" />
                  <span
                    className={`font-medium text-[#3d3d3d] ${
                      formData.pricingOption === "subscription"
                        ? "text-[#096CFF]"
                        : "text-[#3d3d3d]"
                    } `}
                  >
                    Subscription Only
                  </span>
                </div>
                <p className="text-sm text-[#5d5d5d]">
                  Readers access your book as part of their active subscription
                </p>
              </button>
            </div>

            <div
              className={`grid gap-6 ${
                formData.pricingOption === "one-time"
                  ? "grid-cols-2"
                  : "grid-cols-1"
              }`}
            >
              <div>
                <label className="block text-sm font-semibold text-[#5D5D5D] mb-2">
                  Set Price{" "}
                  {formData.pricingOption === "one-time" ? "(USDC)" : ""}
                </label>
                <div className="relative flex items-center space-x-4">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#5d5d5d]">
                    <Image src={coin1} alt="Coin1" />
                  </span>
                  <input
                    type="text"
                    value={
                      formData.pricingOption === "one-time"
                        ? formData.price
                        : "No price input needed"
                    }
                    onChange={(e) =>
                      setFormData({ ...formData, price: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-3 border border-[#e7e7e7] text-[#B0B0B0] rounded-md focus:outline-none focus:ring-1 focus:ring-[#236fea]"
                  />
                </div>
              </div>

              {formData.pricingOption === "one-time" && (
                <div>
                  <label className="block text-sm font-semibold text-[#5d5d5d] mb-2">
                    Price in Stark (STRK)
                  </label>
                  <div className="relative flex items-center space-x-4">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <Image src={coin2} alt="Coin2" />
                    </span>
                    <input
                      type="text"
                      value={formData.stark}
                      onChange={(e) =>
                        setFormData({ ...formData, stark: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-3 border border-[#e7e7e7] text-[#B0B0B0] rounded-md focus:outline-none focus:ring-1 focus:ring-[#236fea]"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 p-4 bg-[#EDF7FF] rounded-lg border border-[#096CFF]">
              <p className="text-sm text-[#454545]">
                You&aposll receive <span className="font-semibold">80%</span> in
                royalties from each sale. We keep a small fee to maintain the
                platform and ensure smooth publishing for everyone.
              </p>
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
              onClick={onNext}
              className="px-4 w-full py-3 bg-[#236fea] text-white rounded-md cursor-pointer hover:bg-[#096cff] transition-colors"
            >
              Publish Book
            </button>
          </div>
        </div>
      </div>

      {/* Book Preview Modal */}
      <BookPreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        bookTitle={formData.bookTitle}
        authorName={formData.authorName}
      />
    </div>
  );
};

export default PricingStep;

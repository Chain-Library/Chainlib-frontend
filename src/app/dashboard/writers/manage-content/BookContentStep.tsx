"use client";

import type React from "react";
import { ChevronDown } from "lucide-react";
import ebook1 from "../../../../../public/ebook1.svg";
import ebook2 from "../../../../../public/ebook2.svg";
import Image from "next/image";

interface BookContentStepProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formData: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setFormData: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}

const BookContentStep: React.FC<BookContentStepProps> = ({
  formData,
  setFormData,
  onNext,
  onBack,
}) => {
  return (
    <div className="bg-[#f6f6f6] p-">
      <div className="flex gap-8 w-full mx-auto">
        {/* Book Cover Upload */}
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
        </div>

        {/* Form Fields */}
        <div className="flex-1 bg-white rounded-md">
          <div className="bg-white p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold text-[#B0B0B0] mb-6">
              Book Content
            </h3>

            <div className="space-y-8">
              <div>
                <label className="block text-sm font-medium text-[#5D5D5D] mb-2">
                  Book Title
                </label>
                <input
                  type="text"
                  placeholder="Paul Smart"
                  className="w-full p-3 border border-[#e7e7e7] rounded-md focus:outline-none focus:ring-1 focus:ring-[#236fea]"
                  value={formData.bookTitle}
                  onChange={(e) =>
                    setFormData({ ...formData, bookTitle: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#5d5d5d] mb-2">
                  Sub-title
                </label>
                <input
                  type="text"
                  placeholder="Paul"
                  className="w-full p-3 border border-[#e7e7e7] rounded-md focus:outline-none focus:ring-1 focus:ring-[#236fea]"
                  value={formData.subtitle}
                  onChange={(e) =>
                    setFormData({ ...formData, subtitle: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#5d5d5d] mb-2">
                  Language
                </label>
                <div className="relative">
                  <select
                    className="w-full p-3 border border-[#e7e7e7] rounded-md appearance-none focus:outline-none focus:ring-1 focus:ring-[#236fea]"
                    value={formData.language}
                    onChange={(e) =>
                      setFormData({ ...formData, language: e.target.value })
                    }
                  >
                    <option value="">Select Language</option>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <ChevronDown className="h-5 w-5 text-[#888888]" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#5d5d5d] mb-2">
                  Book ISBN <span className="text-[#888888]">(Optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="978-1-234-56789-7"
                  className="w-full p-3 border border-[#e7e7e7] rounded-md focus:outline-none focus:ring-1 focus:ring-[#236fea]"
                  value={formData.isbn}
                  onChange={(e) =>
                    setFormData({ ...formData, isbn: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold text-[#3d3d3d] mb-4">
              Manuscript
            </h3>
            <div className="border-2 border-dashed border-[#4BB1FF] bg-[#EDF7FF] rounded-lg p-8 text-center  flex flex-col items-center justify-center h-[150px]">
              <div className=" rounded flex items-center justify-center mb-4">
                <Image src={ebook2} alt="Create E-Book" />
              </div>
              <p className="text-sm text-[#5d5d5d]">
                Drag and drop or Click to
              </p>
              <p className="text-sm text-[#5d5d5d]">choose file from device</p>
            </div>
            <p className="text-xs text-[#888888] mt-2">
              Supported format: DOCX, PDF
            </p>
          </div>

          <div className="flex justify-between mt-8 p-6 space-x-6">
            <button
              onClick={onBack}
              className="w-full py-3 cursor-pointer bg-[#edf7ff] text-[#0F265C] rounded-md hover:bg-[#d6ecff] transition-colors"
            >
              Back
            </button>
            <button
              onClick={onNext}
              className=" w-full py-3 cursor-pointer bg-[#096cff] text-white rounded-md hover:bg-[#236fea] transition-colors"
            >
              Continue to Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookContentStep;

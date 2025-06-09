"use client";

import CustomLink from "@/app/_components/CustomLink";
import { ChevronDown } from "lucide-react";
import type React from "react";
import ContentInput from "./ContentInput";
import DragDropItem from "./DragDropItem";

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

interface BookContentStepProps {
  formData: IData;
  setFormData: (data: object) => void;
  onNext: () => void;
  bookType: "Series" | "Exclusive NFT Edition" | "E-Book";
}

const BookContentStep: React.FC<BookContentStepProps> = ({
  formData,
  setFormData, bookType,
  onNext,
}) => {
  return (
    // change to form later
    <div className="flex-1 col-span-7 max-w-[55vw] mx-auto w-full bg-white rounded-md">
      <div className="bg-white p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-[#B0B0B0] mb-6">
          Book Content
        </h3>

        <div className="space-y-8">
          {bookType === "Series" && (<ContentInput label="Series Type">
            <div className="relative">
              <select
                className="w-full p-3 border border-[#e7e7e7] rounded-md appearance-none focus:outline-none focus:ring-1 focus:ring-[#236fea]"
                value={formData.seriesType}
                onChange={(e) =>
                  setFormData({ seriesType: e.target.value })
                }
              >
                <option value="">Select Series Type</option>
                <option value="tragedy">Tragedy</option>
                <option value="romance">Romance</option>
                <option value="comedy">Comedy</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <ChevronDown className="h-5 w-5 text-[#888888]" />
              </div>
            </div>
          </ContentInput>)
          }

          <ContentInput label="Book Title" placeholder="Paul Smart" value={formData.bookTitle} onChange={(e) =>
            setFormData({ bookTitle: e.target.value })} />

          <ContentInput label="Sub-title"
            placeholder="Paul"
            value={formData.subtitle}
            onChange={(e) =>
              setFormData({ subtitle: e.target.value })
            }
          />

          <ContentInput label="Language">
            <div className="relative">
              <select
                className="w-full p-3 border border-[#e7e7e7] rounded-md appearance-none focus:outline-none focus:ring-1 focus:ring-[#236fea]"
                value={formData.language}
                onChange={(e) =>
                  setFormData({ language: e.target.value })
                }
              >
                <option value="">Select Language</option>
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <ChevronDown className="h-5 w-5 cursor-pointer text-[#888888]" />
              </div>
            </div>
          </ContentInput>

          <ContentInput label='Book ISBN <span className="text-[#888888]">(Optional)</span>'
            placeholder="978-1-234-56789-7"
            value={formData.isbn}
            onChange={(e) =>
              setFormData({ isbn: e.target.value })
            }
          />
        </div>
      </div>

      <DragDropItem message="Supported format: DOCX, PDF" heading="Manuscript" />

      {bookType === "Exclusive NFT Edition" && <DragDropItem heading='Add Bonus Content' message='e.g signed artwork, author message' button />}

      <div className="flex justify-between mt-8 p-6 space-x-6">
        <CustomLink
          route="manage-content"
          classname="w-full py-3 cursor-pointer bg-[#edf7ff] text-[#0F265C] rounded-md hover:bg-[#d6ecff] transition-colors"
        >
          Back
        </CustomLink>
        <button
          onClick={onNext}
          className=" w-full py-3 cursor-pointer bg-[#096cff] text-white rounded-md hover:bg-[#236fea] transition-colors"
        >
          Continue to Details
        </button>
      </div>
    </div>
  );
};

export default BookContentStep;

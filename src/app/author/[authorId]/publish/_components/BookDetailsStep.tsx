"use client";

import { AVAILABLE_GENRES, AVAILABLE_TAGS } from "@/data";
import { ChevronDown, X } from "lucide-react";
import Image from "next/image";
import type React from "react";
import { useState } from "react";
import ContentInput from "./ContentInput";
import ContributorDetailsModal from "./ContributorDetailsModal";
import ContributorTypeModal from "./ContributorTypeModal";

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

interface BookDetailsStepProps {
  formData: IData;
  setFormData: (data: object) => void;
  onNext: () => void;
  onBack: () => void;
  otherAuthors?: boolean
}

const BookDetailsStep: React.FC<BookDetailsStepProps> = ({
  formData,
  setFormData,
  onNext,
  onBack, otherAuthors = true,
}) => {
  const [showContributorTypeModal, setShowContributorTypeModal] =
    useState(false);
  const [showContributorDetailsModal, setShowContributorDetailsModal] =
    useState(false);
  const [selectedContributorType, setSelectedContributorType] = useState("");

  const handleSelectContributorType: (x: string) => void = (type: string) => {
    setSelectedContributorType(type);
    setShowContributorTypeModal(false);
    setShowContributorDetailsModal(true);
  };

  const handleAddContributor = (contributor: {
    name: string;
    email: string;
  }) => {
    setFormData({
      ...formData,
      contributors: [
        ...formData.contributors,
        { ...contributor, type: selectedContributorType },
      ],
    });
    setShowContributorDetailsModal(false);
  };

  return (
    // change to form later
    <div className="flex-1 col-span-7 max-w-[55vw] mx-auto w-full bg-white rounded-md">
      <div className="bg-white p-6 rounded-lg mb-6">
        <h3 className="text-lg font-semibold text-[#B0B0B0] mb-6">
          Book Details
        </h3>

        <div className="space-y-5">
          <ContentInput label="Author Name" value={formData.authorName} attr />

          {otherAuthors && <div>
            <label className="block text-sm font-medium text-neutral-600 mb-2">
              Contributing Authors
            </label>
            <div
              className="flex items-center w-full cursor-pointer  justify-between gap-2 mb-3 px-2.5 py-2 border border-[#e7e7e7] rounded-md text-sm text-neutral-600 hover:border-[#d6ecff] hover:bg-[#f8fbff] transition-colors"
              onClick={() => setShowContributorTypeModal(true)}
            >
              <button className="cursor-pointer">Add</button>
              <button
                onClick={() => setShowContributorTypeModal(true)}
                className="p-2 border border-[#e7e7e7] cursor-pointer rounded-md text-neutral-600 hover:border-[#d6ecff] hover:bg-[#f8fbff] transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 5V19"
                    stroke="text-neutral-600"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 12H19"
                    stroke="text-neutral-600"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="w-full grid grid-cols-3 gap-x-3.5 place-content-start items-center">
              {formData.contributors.map(
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (contributor: any, index: number) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 mb-2 bg-] rounded-full px-2 py-1 w-fit"
                  >
                    <Image
                      src="/user1.svg"
                      width={24}
                      height={24}
                      alt="avatar"
                      className="rounded-full"
                    />
                    <span className="text-sm text-neutral-900">
                      {contributor.name}
                    </span>
                    <button
                      onClick={() => {
                        const newContributors = formData.contributors.filter(
                          // eslint-disable-next-line @typescript-eslint/no-explicit-any
                          (_: any, i: number) => i !== index
                        );
                        setFormData({
                          ...formData,
                          contributors: newContributors,
                        });
                      }}
                      className="text-neutral-600 hover:text-neutral-900"
                    >
                      <X size={16} />
                    </button>
                  </div>
                )
              )}  </div>
          </div>}

          <ContentInput label="Genre">
            <div className="relative">
              <select
                className="w-full p-3 border border-[#e7e7e7] rounded-md appearance-none focus:outline-none focus:ring-1 focus:ring-[#236fea]"
                onChange={(e) => {
                  if (
                    e.target.value &&
                    !formData.genres.includes(e.target.value)
                  ) {
                    setFormData({
                      ...formData,
                      genres: [...formData.genres, e.target.value],
                    });
                  }
                }}
              >
                <option value="">Genres</option>
                {AVAILABLE_GENRES.map((genre, index) => <option key={index} value={genre}>{genre}</option>)}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <ChevronDown className="h-5 w-5 text-neutral-400" />
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {formData.genres.map((genre: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-] rounded-full text-sm flex items-center gap-1 text-neutral-900"
                >
                  {genre}
                  <button
                    onClick={() => {
                      setFormData({
                        ...formData,
                        genres: formData.genres.filter(
                          (g: string) => g !== genre
                        ),
                      });
                    }}
                    className="text-neutral-600 hover:text-neutral-900"
                  >
                    <X size={14} />
                  </button>
                </span>
              ))}
            </div>
          </ContentInput>


          <ContentInput label="Tags">
            <div className="relative">
              <select
                className="w-full p-3 border border-[#e7e7e7] rounded-md appearance-none focus:outline-none focus:ring-1 focus:ring-[#236fea]"
                onChange={(e) => {
                  if (
                    e.target.value &&
                    !formData.tags.includes(e.target.value)
                  ) {
                    setFormData({
                      ...formData,
                      tags: [...formData.tags, e.target.value],
                    });
                  }
                }}
              >
                <option value="">Select tag</option>
                {AVAILABLE_TAGS.map((tag, index) => <option key={index} value={tag}>{tag}</option>)}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <ChevronDown className="h-5 w-5 text-neutral-400" />
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {formData.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-] rounded-full text-sm flex items-center gap-1 text-neutral-900"
                >
                  {tag}
                  <button
                    onClick={() => {
                      setFormData({
                        ...formData,
                        tags: formData.tags.filter(
                          (t: string) => t !== tag
                        ),
                      });
                    }}
                    className="text-neutral-600 hover:text-neutral-900"
                  >
                    <X size={14} />
                  </button>
                </span>
              ))}
            </div>
          </ContentInput>

          <ContentInput label="Book Description">
            <textarea
              placeholder="Type here"
              className="w-full p-3 min-h-24 border border-neutral-100 rounded-md h-32 focus:outline-none focus:ring-1 focus:ring-[#236fea]"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </ContentInput>
        </div>
      </div>

      <div className="flex justify-between mt-8 p-6 space-x-6 bg-white rounded-bl-md rounded-br-md">
        <button
          onClick={onBack}
          className="px-4 w-full py-3 bg-] text-[#0F265C] rounded-md hover:bg-[#d6ecff] cursor-pointer transition-colors"
        >
          Previous Page
        </button>
        <button
          onClick={onNext}
          className="px-4 w-full py-3 bg-[#096cff] text-white rounded-md hover:bg-[#236fea] cursor-pointer transition-colors"
        >
          Continue
        </button>
      </div>

      {showContributorTypeModal && (
        <ContributorTypeModal
          onClose={() => setShowContributorTypeModal(false)}
          onSelect={handleSelectContributorType}
        />
      )}

      {showContributorDetailsModal && (
        <ContributorDetailsModal
          type={selectedContributorType}
          onClose={() => setShowContributorDetailsModal(false)}
          onAdd={handleAddContributor}
        />
      )}
    </div>
  );
};

export default BookDetailsStep;

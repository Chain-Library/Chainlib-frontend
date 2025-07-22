"use client";

import type React from "react";
import { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import ContributorTypeModal from "./ContributorTypeModal";
import ContributorDetailsModal from "./ContributorDetailsModal";
import ebook1 from "../../../../../public/ebook1.svg";
import user from "../../../../../public/ebook2.svg";
import Image from "next/image";

interface BookDetailsStepProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formData: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setFormData: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}

const BookDetailsStep: React.FC<BookDetailsStepProps> = ({
  formData,
  setFormData,
  onNext,
  onBack,
}) => {
  const [showContributorTypeModal, setShowContributorTypeModal] =
    useState(false);
  const [showContributorDetailsModal, setShowContributorDetailsModal] =
    useState(false);
  const [selectedContributorType, setSelectedContributorType] = useState("");

  const handleSelectContributorType = (type: string) => {
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
        </div>

        {/* Form Fields */}
        <div className="flex-1 bg-white rounded-md">
          <div className="bg-white p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold text-[#B0B0B0] mb-6">
              Book Details
            </h3>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-[#5d5d5d] mb-2">
                  Author Name
                </label>
                <input
                  type="text"
                  value={formData.authorName}
                  className="w-full p-3 border border-[#e7e7e7] rounded-md focus:outline-none focus:ring-1 focus:ring-[#236fea]"
                  readOnly
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#5d5d5d] mb-2">
                  Contributing Authors
                </label>
                <div
                  className="flex items-center w-full md:w-[300px] cursor-pointer  justify-between gap-2 mb-3 px-2.5 py-2 border border-[#e7e7e7] rounded-md text-sm text-[#5d5d5d] hover:border-[#d6ecff] hover:bg-[#f8fbff] transition-colors"
                  onClick={() => setShowContributorTypeModal(true)}
                >
                  <button className="cursor-pointer">Add</button>
                  <button
                    onClick={() => setShowContributorTypeModal(true)}
                    className="p-2 border border-[#e7e7e7] cursor-pointer rounded-md text-[#5d5d5d] hover:border-[#d6ecff] hover:bg-[#f8fbff] transition-colors"
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
                        stroke="#5d5d5d"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5 12H19"
                        stroke="#5d5d5d"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                {formData.contributors.map(
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  (contributor: any, index: number) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 mb-2 bg-[#edf7ff] rounded-full px-2 py-1 w-fit"
                    >
                      <Image
                        src={user}
                        width={24}
                        height={24}
                        alt="avatar"
                        className="rounded-full"
                      />
                      <span className="text-sm text-[#3d3d3d]">
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
                        className="text-[#5d5d5d] hover:text-[#3d3d3d]"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  )
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-[#5d5d5d] mb-2">
                  Genre
                </label>
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
                    <option value="Fiction">Fiction</option>
                    <option value="Drama">Drama</option>
                    <option value="Horror">Horror</option>
                    <option value="Romance">Romance</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <ChevronDown className="h-5 w-5 text-[#888888]" />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {formData.genres.map((genre: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#edf7ff] rounded-full text-sm flex items-center gap-1 text-[#3d3d3d]"
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
                        className="text-[#5d5d5d] hover:text-[#3d3d3d]"
                      >
                        <X size={14} />
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#5d5d5d] mb-2">
                  Tags
                </label>
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
                    <option value="Adventure">Adventure</option>
                    <option value="Sci-fi">Sci-fi</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Mystery">Mystery</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <ChevronDown className="h-5 w-5 text-[#888888]" />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {formData.tags.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#edf7ff] rounded-full text-sm flex items-center gap-1 text-[#3d3d3d]"
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
                        className="text-[#5d5d5d] hover:text-[#3d3d3d]"
                      >
                        <X size={14} />
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#5d5d5d] mb-2">
                  Book Description
                </label>
                <textarea
                  placeholder="Type here"
                  className="w-full p-3 border border-[#e7e7e7] rounded-md h-32 focus:outline-none focus:ring-1 focus:ring-[#236fea]"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-8 p-6 space-x-6 bg-white rounded-bl-md rounded-br-md">
            <button
              onClick={onBack}
              className="px-4 w-full py-3 bg-[#edf7ff] text-[#0F265C] rounded-md hover:bg-[#d6ecff] cursor-pointer transition-colors"
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
        </div>
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

"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import ebook1 from "../../../../../public/ebook1.svg";
import coin2 from "../../../../../public/coin2.svg";
import play from "../../../../../public/play.svg";
import check from "../../../../../public/check.svg";
import Image from "next/image";
import BookPreviewModal from "./book-preview-modal";

interface PreviewModalProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formData?: any;
  onClose: () => void;
  onPublish: () => void;
}

const PreviewModal: React.FC<PreviewModalProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  formData,
  onClose,
  onPublish,
}) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <div className="fixed inset-0 bg-[#000000d7] bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 w-[900px] max-w-[95vw] max-h-[90vh] overflow-auto">
        <div className="flex justify-end mb-4">
          <button
            onClick={onClose}
            className="text-gray-400 bg-[#f6f6f6] p-1 rounded cursor-pointer hover:text-gray-600"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-80">
            <div className="border-2 border-dashed border-[#4BB1FF] bg-[#EDF7FF] rounded-lg p-6 text-center h-[350px] flex flex-col items-center justify-center">
              <div className=" rounded flex items-center justify-center mb-4">
                <Image src={ebook1} alt="Create E-Book" />
              </div>
              <p className="text-sm text-[#5d5d5d]">
                Drag and drop or Click to
              </p>
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

          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-[#3d3d3d] mb-3">
              Native Invisibility
            </h2>

            <div className="flex items-center gap-2 mb-6">
              <span className="text-[#5d5d5d]">By Darrin Collins</span>
              <span className="bg-[#edf7ff] text-[#236fea] text-xs px-2 py-0.5 rounded-full flex items-center justify-center">
                <Image src={check} alt="Verified" className="mr-1" width={32} />
              </span>
            </div>

            <div className="mb-6">
              <span className="text-sm text-[#5d5d5d]">Access Type</span>
              <p className="font-medium bg-[#EDF7FF] p-2 rounded-4xl w-fit text-xs text-[#3d3d3d]">
                One time Purchase
              </p>
            </div>

            <div className="mb-6 text-[#000B21] flex items-center space-x-4">
              <div className="text-3xl font-bold mb-1">$12</div>
              <div className="flex items-center gap-2 ">
                <Image src={coin2} alt="Coin" />
                <span>193 STRK</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="border border-[#E7E7E7] rounded-lg p-2">
                <span className="text-sm text-[#5d5d5d] mb-2">Genre(s)</span>
                <div className="font-medium flex items-center text-[#3D3D3D] flex-wrap gap-1">
                  <span className="bg-[#F6F6F6] px-3 py-1 rounded-full text-xs">
                    Fiction
                  </span>
                  <span className="bg-[#F6F6F6] px-3 py-1 rounded-full text-xs">
                    Comic
                  </span>
                </div>
              </div>

              <div className="border border-[#E7E7E7] rounded-lg p-2">
                <span className="text-xs text-[#6D6D6D]">Page count</span>
                <p className="font-medium text-sm text-[#3d3d3d]">21 Pages</p>
              </div>

              <div className="border border-[#E7E7E7] rounded-lg p-2">
                <span className="text-xs text-[#5d5d5d]">Language</span>
                <p className="font-medium text-sm text-[#3d3d3d]">English</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="mb-6 border border-[#E7E7E7] rounded-lg px-4 p-2">
                <span className="text-xm text-[#5d5d5d]">Date published</span>
                <p className="font-medium text-sm text-[#3d3d3d]">
                  12 April, 2025
                </p>
              </div>

              <div className="mb-6 border border-[#E7E7E7] rounded-lg p-2">
                <span className="text-xs text-[#5d5d5d]">ISBN</span>
                <p className="font-medium text-sm text-[#3d3d3d]">
                  978-3-16-148410-0
                </p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-[#3d3d3d] mb-2">Description</h3>
              <p className="text-[#888888]">
                &quotNative Invisibility&quot delves into the complex and often
                insidious ways in which indigenous peoples and their unique
                experiences are rendered unseen and unheard in the modern era.
              </p>
              <button className="text-[#888888] border border-[#888888] p-1.5 px-2.5 rounded-md text-sm mt-2 hover:underline">
                Read More
              </button>
            </div>
            <div className="flex justify-end space-x-6 mt-8">
              <button
                onClick={onClose}
                className="px-4 w-full cursor-pointer py-3 bg-[#edf7ff] text-[#236fea] rounded-md hover:bg-[#d6ecff] transition-colors"
              >
                Back
              </button>
              <button
                onClick={onPublish}
                className="px-4 w-full cursor-pointer py-3 bg-[#236fea] text-white rounded-md hover:bg-[#096cff] transition-colors"
              >
                Publish Book
              </button>
            </div>
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

export default PreviewModal;

"use client";

import type React from "react";
import { X } from "lucide-react";
import create1 from "../../../../../public/create1.svg";
import create2 from "../../../../../public/create2.svg";
import create3 from "../../../../../public/create3.svg";
import Image from "next/image";

interface PublishTypeModalProps {
  onClose: () => void;
  onSelect: (type: string) => void;
}

const PublishTypeModal: React.FC<PublishTypeModalProps> = ({
  onClose,
  onSelect,
}) => {
  return (
    <div className="fixed inset-0 bg-[#000000d7] bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 w-[950px] max-w-[95vw]">
        <div className="flex justify-end mb-2">
          <button
            onClick={onClose}
            className="text-gray-400 border p-2 rounded-md hover:text-gray-600 cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-[#3d3d3d] mb-2">
            What Masterpiece Would You Like to Create
          </h2>
          <p className="text-[#5d5d5d]">
            Choose the type of story you&aposre ready to bring to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* E-Book Option */}
          <div className="flex relative flex-col border p-4 h-[380px] rounded-lg">
            <div className="bg-[#edf7ff] rounded-lg p-6 flex flex-col items-center mb-4 h-[180px] justify-center">
              <div className=" rounded flex items-center justify-center mb-2">
                <Image src={create1} alt="Create E-Book" />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-1">E-Book</h3>
            <p className="text-sm text-[#5d5d5d] mb-4">
              Publish a standalone digital book and make it instantly available
              to readers to use.
            </p>
            <button
              onClick={() => onSelect("e-book")}
              className="bg-[#236fea] hover:bg-[#096cff] text-white w-full py-2 rounded-md cursor-pointer"
            >
              Create e-Book
            </button>
          </div>

          {/* NFT Option */}
          <div className="flex flex-col border p-4 rounded-lg">
            <div className="bg-[#edf7ff] rounded-lg p-6 flex flex-col items-center mb-4 h-[180px] justify-center">
              <div className="w-14 h-14 flex items-center justify-center mb-2">
                <Image src={create2} alt="Create E-Book" />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-1">
              Exclusive NFT Edition
            </h3>
            <p className="text-sm text-[#5d5d5d] mb-4">
              Start a book series and release your story in multiple parts over
              time with chainlib.
            </p>
            <button
              onClick={() => onSelect("nft")}
              className="bg-[#236fea] hover:bg-[#096cff] text-white w-full py-2 rounded-md cursor-pointer"
            >
              Create Series
            </button>
          </div>

          {/* Series Option */}
          <div className="flex flex-col border p-4 rounded-lg">
            <div className="bg-[#edf7ff] rounded-lg p-6 flex flex-col items-center mb-4 h-[180px] justify-center">
              <div className="w-14 h-14 flex items-center justify-center mb-2">
                <Image src={create3} alt="Create E-Book" />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-1">Series</h3>
            <p className="text-sm text-[#5d5d5d] mb-4">
              Start a book series and release your story in multiple parts over
              time with chainlib.
            </p>
            <button
              onClick={() => onSelect("series")}
              className="bg-[#236fea] hover:bg-[#096cff] text-white w-full py-2 rounded-md cursor-pointer"
            >
              Create Series
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublishTypeModal;

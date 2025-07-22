"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import user from "../../../../../public/user1.svg";

interface ContributorDetailsModalProps {
  type: string;
  onClose: () => void;
  onAdd: (contributor: { name: string; email: string }) => void;
}

const ContributorDetailsModal: React.FC<ContributorDetailsModalProps> = ({
  type,
  onClose,
  onAdd,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="fixed inset-0 bg-[#000000d7] bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white relative rounded-lg p-6 sm:w-[600px] ">
        <div className="flex text-center justify-center items-center mb-6">
          <h2 className="text-xl font-semibold">Enter {type} Details</h2>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 absolute top-6 bg-[#f6f6f6] p-1 rounded right-6 cursor-pointer hover:text-gray-600"
        >
          <X size={20} />
        </button>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {type} name or Email Address
          </label>
          <input
            type="text"
            placeholder="Enter name or Email address"
            className="w-full p-3 border border-gray-200 rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <div className="flex items-center w-fit bg-[#EDF7FF] gap-3 p-2 border border-gray-200 rounded-md">
            <Image
              src={user}
              alt="avatar"
              className="rounded-full"
              width={32}
              height={32}
            />
            <div>
              <p className="font-medium text-sm">Joseph Yanum</p>
              <p className="text-xs text-gray-500">josephyanum75@gmail.com</p>
            </div>
          </div>
        </div>

        <button
          onClick={() =>
            onAdd({ name: "Joseph Yanum", email: "josephyanum75@gmail.com" })
          }
          className="w-full py-3 bg-[#096cff] text-white rounded-md cursor-pointer"
        >
          Add {type.slice(0, -1)}
        </button>
      </div>
    </div>
  );
};

export default ContributorDetailsModal;

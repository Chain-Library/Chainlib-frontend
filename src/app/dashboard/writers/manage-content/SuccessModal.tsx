import React from "react";
import success_done from "../../../../../public/Done.svg";
import { X } from "lucide-react";
import Image from "next/image";

interface SuccessModalProps {
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-[#000000d7] bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 w-[500px] text-center relative">
        <button
          onClick={onClose}
          className="absolute top-4 bg-[#f6f6f6] p-1 rounded cursor-pointer right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={20} />
        </button>

        <div className=" rounded-full flex items-center justify-center mx-auto mb-6">
          <Image
            src={success_done}
            alt="icon success"
            className=" text-blue-600"
          />
        </div>

        <h2 className="text-2xl font-semibold mb-4">
          Book Published Successfully!
        </h2>
        <p className="text-gray-600 mb-8">
          Your book is now live and ready to be discovered by readers around the
          world.
        </p>

        <button
          onClick={onClose}
          className="px-8 py-3 bg-[#096cff] cursor-pointer text-white rounded-md"
        >
          Return to Dashboard
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;

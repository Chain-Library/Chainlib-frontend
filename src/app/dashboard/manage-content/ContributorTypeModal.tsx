import React from "react";
import { X } from "lucide-react";

interface ContributorTypeModalProps {
  onClose: () => void;
  onSelect: (type: string) => void;
}

const ContributorTypeModal: React.FC<ContributorTypeModalProps> = ({
  onClose,
  onSelect,
}) => {
  return (
    <div className="fixed inset-0 bg-[#000000d7] bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[400px]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">
            Select the type of Contributor
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-2">
          <button
            onClick={() => onSelect("Co-authors")}
            className="w-full text-left border-b border-[#E7E7E7] px-4 py-3 hover:bg-gray-50 rounded-md cursor-pointer"
          >
            Co-authors
          </button>
          <button
            onClick={() => onSelect("Editors")}
            className="w-full text-left border-b border-[#E7E7E7] px-4 py-3 hover:bg-gray-50 rounded-md cursor-pointer"
          >
            Editors
          </button>
          <button
            onClick={() => onSelect("Illustrators")}
            className="w-full text-left border-b border-[#E7E7E7] px-4 py-3 hover:bg-gray-50 rounded-md cursor-pointer"
          >
            Illustrators
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContributorTypeModal;

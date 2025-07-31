import React, { useState } from "react";
import { X, ChevronDown } from "lucide-react";

type SuspendUserModalProps = {
  setShow: (show: boolean) => void;
};

export default function SuspendUserModal({ setShow }: SuspendUserModalProps) {
  const [reason, setReason] = useState("");
  const [duration, setDuration] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const durationOptions = [
    "1 Day",
    "3 Days",
    "1 Week",
    "2 Weeks",
    "1 Month",
    "3 Months",
    "6 Months",
    "1 Year",
    "Permanent",
  ];

  const handleDurationSelect = (selectedDuration: any) => {
    setDuration(selectedDuration);
    setIsDropdownOpen(false);
  };

  const handleSuspend = () => {
    console.log(
      "Suspending user with reason:",
      reason,
      "and duration:",
      duration
    );
    // Add your suspension logic here
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  if (!isModalOpen) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition-colors"
        >
          Open Suspend User Modal
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black opacity flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-auto">
        {/* Header */}
        <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Suspend User</h2>
          <button
            onClick={() => setShow(false)}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-4 space-y-4">
          {/* Blue info box */}
          <div className="bg-blue-50 border border-blue-200 rounded px-3 py-2">
            <p className="text-sm text-blue-800">
              Enter the reason you are suspending these user
            </p>
          </div>

          {/* Suspended by info */}
          <div>
            <p className="text-sm text-gray-600">
              Suspended by:{" "}
              <span className="text-gray-900">Ola***p@gmail.com</span>
            </p>
          </div>

          {/* Description field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Provide the reason for suspending this user"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
              rows={3}
            />
          </div>

          {/* Suspension Duration */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Suspension Duration
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex items-center justify-between"
              >
                <span className={duration ? "text-gray-900" : "text-gray-500"}>
                  {duration || "Select Duration"}
                </span>
                <ChevronDown
                  size={16}
                  className={`text-gray-400 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-48 overflow-y-auto">
                  {durationOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleDurationSelect(option)}
                      className="w-full px-3 py-2 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 text-sm"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer buttons */}
        <div className="px-6 py-4 flex space-x-3">
          <button
            onClick={handleCancel}
            className="flex-1 px-4 py-2 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors font-medium"
          >
            Cancel
          </button>
          <button
            onClick={handleSuspend}
            className="flex-1 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors font-medium"
          >
            Suspend
          </button>
        </div>
      </div>
    </div>
  );
}

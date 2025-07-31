"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface RejectModalProps {
  isOpen: boolean;
  rejectReason: string;
  setRejectReason: (reason: string) => void;
  onCancel: () => void;
  onSubmit: () => void;
}

export function RejectModal({
  isOpen,
  rejectReason,
  setRejectReason,
  onCancel,
  onSubmit,
}: RejectModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#0b0a0a9d] bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white rounded-lg p-3 sm:p-4 lg:p-6 w-full max-w-sm sm:max-w-lg">
        <div className="flex justify-between items-center mb-3 sm:mb-4">
          <h2 className="text-base sm:text-lg font-bold text-gray-900">
            Reject Publication
          </h2>
          <button
            onClick={onCancel}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>

        <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
          Enter the reason you are rejecting this book for publication
        </p>

        <div className="bg-gray-100 rounded-lg p-2 sm:p-3 mb-3 sm:mb-4">
          <p className="text-xs sm:text-sm text-gray-600">
            Rejected by: Ola**p@gmail.com
          </p>
        </div>

        <div className="mb-4 sm:mb-6">
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            placeholder="Provide the reason for rejection"
            value={rejectReason}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setRejectReason(e.target.value)
            }
            className="w-full min-h-[80px] sm:min-h-[100px] resize-none rounded-md border border-gray-300 px-2 sm:px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <Button
            variant="outline"
            onClick={onCancel}
            className="flex-1 border-blue-500 text-blue-500 hover:bg-blue-50 text-xs sm:text-sm"
          >
            Cancel
          </Button>
          <Button
            onClick={onSubmit}
            disabled={!rejectReason.trim()}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white text-xs sm:text-sm"
          >
            Reject
          </Button>
        </div>
      </div>
    </div>
  );
}

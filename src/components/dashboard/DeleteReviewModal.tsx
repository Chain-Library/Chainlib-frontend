"use client";

import React from "react";

interface DeleteReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  review?: {
    id: string;
    bookTitle: string;
    author: string;
    reviewerName: string;
    rating: number;
    reviewText: string;
  } | null;
}

const DeleteReviewModal: React.FC<DeleteReviewModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  review,
}) => {
  if (!isOpen || !review) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000098] bg-opacity-50">
      <div className="bg-white rounded-lg max-w-md w-full mx-4 p-6">
        {/* Warning Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
            <div className="w-20 h-20 bg-gray-600 rounded-full flex items-center justify-center">
              <div className="w-10 h-10 bg-gray-800 rounded-sm flex items-center justify-center">
                <span className="text-white text-xl font-bold">!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Warning Message */}
        <div className="text-center mb-8 px-8">
          <p className="text-gray-700 leading-relaxed">
            You are about to delete{" "}
            <span className="text-blue-600 font-medium">
              @{review.reviewerName}'s
            </span>{" "}
            Review on the book{" "}
            <span className="font-medium">
              {review.bookTitle} by {review.author}
            </span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={onConfirm}
            className="px-6 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors font-medium"
          >
            Delete
          </button>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteReviewModal;

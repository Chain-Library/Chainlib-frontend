"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FiUser, FiX } from 'react-icons/fi';

interface ProfileCompletionModalProps {
  isOpen: boolean;
  onClose: () => void;
  redirectTo?: string;
}

export default function ProfileCompletionModal({
  isOpen,
  onClose,
  redirectTo = '/author-profile/edit',
}: ProfileCompletionModalProps) {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    onClose();
    setIsVisible(false);
  };

  const handleComplete = () => {
    handleClose();
    router.push(redirectTo);
  };

  // When modal is open, prevent body scrolling
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/40 flex items-center justify-center z-[100] p-4 overflow-y-auto">
      <div
        className="bg-white rounded-lg p-6 max-w-md w-full mx-4 relative shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
          aria-label="Close"
        >
          <FiX size={20} />
        </button>

        <div className="flex flex-col items-center mb-6 pt-4">
          <div className="bg-blue-100 p-4 rounded-full mb-4">
            <FiUser className="w-10 h-10 text-blue-500" />
          </div>
          <h3 className="text-xl font-bold text-gray-800">Unlock Your Full Potential</h3>
          <p className="text-center text-gray-600 mt-2">
            You're almost there! Complete your profile so we can tailor your
            experience and connect you with the right opportunities.
          </p>
        </div>

        <div className="flex flex-col space-y-3">
          <button
            className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-colors"
            onClick={handleClose}
          >
            I'll do it later
          </button>
          <button
            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
            onClick={handleComplete}
          >
            Complete Profile
          </button>
        </div>
      </div>
    </div>
  );
}
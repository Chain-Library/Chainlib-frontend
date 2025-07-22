import React from "react";
import { cn } from "@/lib/utils"; 
type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  hideClose?: boolean;
};

export default function Modal({
  isOpen,
  onClose,
  children,
  className,
  hideClose = false,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 bg-opacity-10 flex items-center justify-center z-50 p-4"
      role="dialog"
      aria-modal="true"
    >
      <div
        className={cn(
          "bg-white rounded-xl max-w-xl w-full shadow-lg overflow-hidden",
          className
        )}
      >
        {!hideClose && (
          <header className="flex justify-end items-center p-4">
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="text-[#B0B0B0] flex items-center justify-center w-8 h-8 bg-[#F6F6F6] hover:text-gray-700 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </header>
        )}

        {children}
      </div>
    </div>
  );
}

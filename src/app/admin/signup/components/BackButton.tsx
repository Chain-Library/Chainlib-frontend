import React from 'react'
import { ChevronLeft } from 'lucide-react';

export default function BackButton({ onBack }: { onBack: () => void }) {
  return (
    <button
      type="button"
      className="flex items-center gap-1 mb-6 border-[#E7E7E7] border rounded-md w-fit px-2 py-1"
      onClick={onBack}
    >
      <ChevronLeft className="w-8 h-8 text-gray-300" />
      <span className="text-gray-500 text-base font-medium">Back</span>
    </button>
  );
}

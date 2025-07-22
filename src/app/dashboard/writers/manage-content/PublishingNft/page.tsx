"use client";

import type React from "react";
import { useState } from "react";
import BookContent from "./bookContent";
import BookDetails from "./bookDetail";
import Pricing from "./Pricing";

export default function BookNFTApp() {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookData, setBookData] = useState<BookData>({
    coverImage: '',
    bookTitle: '',
    subtitle: '',
    language: '',
    isbn: '',
    manuscript: '',
    bonusContent: '',
    authorName: '',
    genre: [],
    tags: [],
    description: '',
    copiesCount: 20,
    priceUSDC: 0.99,
    priceSTRK: 33.23
  });
  
  const updateBookData = (data: Partial<BookData>) => {
    setBookData({ ...bookData, ...data });
  };
  
  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log('Publishing book:', bookData);
      alert("Book published successfully!");
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  type BookData = {
    coverImage: string;
    bookTitle: string;
    subtitle: string;
    language: string;
    isbn: string;
    manuscript: string;
    bonusContent: string;
    authorName: string;
    genre: string[];
    tags: string[];
    description: string;
    copiesCount: number;
    priceUSDC: number;
    priceSTRK: number;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="flex justify-center mb-8">
        <div className="flex items-center w-full max-w-3xl">
          <div className={`flex flex-col items-center ${currentStep >= 1 ? 'text-blue-500' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
              1
            </div>
            <span className="text-sm mt-1">Book Content</span>
          </div>
          <div className={`flex-1 h-0.5 ${currentStep >= 2 ? 'bg-blue-500' : 'bg-gray-200'}`}></div>
          <div className={`flex flex-col items-center ${currentStep >= 2 ? 'text-blue-500' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 2 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
              2
            </div>
            <span className="text-sm mt-1">Book Details</span>
          </div>
          <div className={`flex-1 h-0.5 ${currentStep >= 3 ? 'bg-blue-500' : 'bg-gray-200'}`}></div>
          <div className={`flex flex-col items-center ${currentStep >= 3 ? 'text-blue-500' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 3 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
              3
            </div>
            <span className="text-sm mt-1">Pricing</span>
          </div>
        </div>
      </div>

      {currentStep === 1 && (
        <BookContent
          bookData={bookData}
          updateBookData={updateBookData}
          nextStep={nextStep}
        />
      )}

      {currentStep === 2 && (
        <BookDetails
          bookData={bookData}
          updateBookData={updateBookData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}

      {currentStep === 3 && (
        <Pricing
          bookData={bookData}
          updateBookData={updateBookData}
          prevStep={prevStep}
          publishBook={nextStep}
        />
      )}
    </div>
  );
}
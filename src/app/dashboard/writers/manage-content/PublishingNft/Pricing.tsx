"use client";

import type React from "react";
import Image from "next/image";
import basildocument from "../../../../../../public/basildocument.png";
import dollar from "../../../../../../public/dollar.svg";
import stark from "../../../../../../public/stark.svg";


type BookData = {
  copiesCount: number;
  priceUSDC: number;
  priceSTRK: number;
};

type PricingProps = {
  bookData: BookData;
  updateBookData: (data: Partial<BookData>) => void;
  prevStep: () => void;
  publishBook: () => void;
};

function Pricing({ bookData, updateBookData, prevStep, publishBook }: PricingProps): React.ReactElement {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-xl font-medium mb-6">Exclusive NFT Book</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="border-2 border-dashed border-blue-200 rounded-md p-4 flex flex-col items-center justify-center h-64 bg-blue-50">
            <Image
              src={basildocument}
              alt="document upload"
              width={20}
              height={10}
              className="w-15 h-10"
            />

            <p className="text-sm text-gray-500 text-center">
              Drag and drop or Click to<br />choose file from device
            </p>
          </div>
          <p className="text-xs text-gray-500 mt-2">Supported format: JPEG & PNG</p>

          <button className="w-full flex items-center justify-center bg-gray-100 text-gray-700 rounded-md py-2 mt-4">
            <span className="mr-2">▶</span> Preview Book
          </button>
        </div>

        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-medium mb-4">Pricing Options</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Number of Copies (Limited edition)</label>
                <input
                  type="number"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  value={bookData.copiesCount}
                  onChange={(e) => updateBookData({ copiesCount: parseInt(e.target.value, 10) })}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Set Price (USDC)</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-1 flex items-center pointer-events-none">

                      <Image
                        src={dollar}
                        alt="document upload"
                        width={20}
                        height={10}
                        className="w-5 h-5"
                      />

                    </div>
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      className="w-full border border-gray-300 rounded-md pl-7 pr-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      value={bookData.priceUSDC}
                      onChange={(e) => updateBookData({ priceUSDC: parseFloat(e.target.value) })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price in Stark (STRK)</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-1 flex items-center pointer-events-none">

                      <Image
                        src={stark}
                        alt="document upload"
                        width={20}
                        height={10}
                        className="w-5 h-5"
                      />

                    </div>
                    <input
                      type="number"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      value={bookData.priceSTRK}
                      readOnly
                    />
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-md p-4 text-sm text-blue-800">
                You&apos;ll receive 90% in royalties from each sale. We keep a small fee to maintain the platform and ensure smooth publishing for everyone.
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button
                className="px-6 py-2 bg-blue-100 text-gray-800 rounded-md font-medium hover:bg-gray-200"
                onClick={prevStep}
              >
                Previous Page
              </button>
              <button
                className="px-6 py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600"
                onClick={publishBook}
              >
                Publish Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} export default Pricing;

import React from "react";
import { X, ArrowUpRight } from "lucide-react";
import type { NFTMinting } from "./NFTMintingTable";
import Image from "next/image";

interface NFTDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  nft: NFTMinting | null;
  onRetryMinting?: (nft: NFTMinting) => void;
}

const NFTDetailModal: React.FC<NFTDetailModalProps> = ({
  isOpen,
  onClose,
  nft,
  onRetryMinting,
}) => {
  if (!isOpen || !nft) return null;

  const isSuccessful = nft.status === "Minted";
  const isFailed = nft.status === "Failed";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-5xl w-full max-h-[95vh] overflow-y-auto">
        {/* Header */}
        <div className="px-8 py-6 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-900">{nft.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-1"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="px-8 py-8">
          {/* Top Section - Book Info */}
          <div className="flex gap-8 mb-8 justify-between items-stretch">
            {/* Left: Book Details */}
            <div className="flex items-start gap-6 flex-1">
              {/* Book Cover */}
              <div className="flex-shrink-0">
                <Image
                  src="/book_cover.svg"
                  alt="Book Cover"
                  width={120}
                  height={180}
                />
              </div>

              {/* Book Info */}
              <div className="flex-1">
                <h1 className="text-xl font-bold text-gray-700">{nft.title}</h1>

                <div className="flex items-center gap-3 mb-2">
                  <span className="text-gray-600">By {nft.author}</span>
                  {/* Verified icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-blue-500"
                  >
                    <path
                      fill="currentColor"
                      d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zm-11 4.59l6.3-6.3-1.41-1.41L11 13.76l-2.29-2.3-1.42 1.42L11 16.59z"
                    />
                  </svg>
                </div>

                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-700 border border-purple-900">
                    NFT Edition
                  </span>
                </div>

                <div className="flex items-center gap-2 text-lg">
                  <span className="text-yellow-400">★</span>
                  <span className="font-medium text-gray-900">4.5</span>
                </div>
              </div>
            </div>

            <div className="flex items-end">
              {isFailed && onRetryMinting && (
                <button
                  onClick={() => onRetryMinting(nft)}
                  className="px-3 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Retry Minting
                </button>
              )}
            </div>
          </div>

          {/* Detail Stat Boxes */}
          <div className="flex flex-wrap gap-6 mb-6">
            <div className="border rounded-lg px-2 py-2 w-[200px]">
              <div className="text-xs text-gray-500 mb-1">Payment Type</div>
              <div className="text-sm font-medium text-gray-900">
                One-Time Payment
              </div>
            </div>
            <div className="border rounded-lg px-2 py-2 w-[200px]">
              <div className="text-xs text-gray-500 mb-1">Price</div>
              <div className="text-sm font-medium text-gray-900">
                {nft.feeAmount}
              </div>
            </div>
            <div className="border rounded-lg px-2 py-2 w-[200px]">
              <div className="text-xs text-gray-500 mb-1">Published Date</div>
              <div className="text-sm font-medium text-gray-900">
                {nft.mintDate}
              </div>
            </div>
            <div className="border rounded-lg px-2 py-2 w-[200px]">
              <div className="text-xs text-gray-500 mb-1">Sold</div>
              <div className="text-sm font-medium text-gray-900">57</div>
            </div>
            <div className="border rounded-lg px-2 py-2 w-[200px]">
              <div className="text-xs text-gray-500 mb-1">Transaction</div>
              <div className="flex sms-center gap-2 text-base font-medium text-gray-900">
                <ArrowUpRight className="w-4 h-4" />
                <span>All Transactions</span>
              </div>
            </div>
          </div>

          {/* Blockchain Details Section */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-8">
              Blockchain Details
            </h3>

            <div className="grid grid-cols-4 gap-x-16 gap-y-8">
              <div>
                <div className="text-sm text-gray-500 mb-2">
                  Smart Contract Address
                </div>
                <div className="text-base font-medium text-gray-900">
                  {nft.smartContractAddress || "0x9f...d45A"}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-2">Token Standard</div>
                <div className="text-base font-medium text-gray-900">
                  {nft.tokenStandard || "ERC-721"}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-2">Network</div>
                <div className="text-base font-medium text-gray-900">
                  {nft.network}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-2">Status</div>
                <div>
                  <span
                    className={`inline-flex px-3 py-1 text-sm font-medium rounded-full ${
                      isSuccessful
                        ? "bg-green-100 text-green-700"
                        : isFailed
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {isSuccessful ? "Successful" : nft.status}
                  </span>
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-2">Fee Amount</div>
                <div className="text-base font-medium text-gray-900">
                  {nft.smartContractAddress || "0x9f...d45A"}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-2">Fee Amount</div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/starknet.png"
                    alt="starknet icon"
                    width={16}
                    height={16}
                  />
                  <span className="text-base font-medium text-gray-900">
                    {nft.feeAmount}
                  </span>
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-2">Mint Date</div>
                <div className="text-base font-medium text-gray-900">
                  {nft.mintDate}
                </div>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Description
            </h3>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                {nft.description ||
                  "Delves into the complex and often insidious ways in which indigenous peoples and their unique experiences are rendered unseen and unheard in the modern era."}
              </p>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-white transition-colors">
                Read More
              </button>
            </div>
          </div>

          {/* Additional Details Grid */}
          <div className="grid grid-cols-5 gap-x-16 gap-y-8 mb-12">
            <div>
              <div className="text-sm text-gray-500 mb-3">Genre(s)</div>
              <div className="space-y-2">
                <span className="inline-block bg-gray-100 px-3 py-1 rounded-full text-sm font-medium text-gray-700 mr-2">
                  Fiction
                </span>
                <span className="inline-block bg-gray-100 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                  Comic
                </span>
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-3">Page count</div>
              <div className="text-base font-medium text-gray-900">
                21 Pages
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-3">Language</div>
              <div className="text-base font-medium text-gray-900">English</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-3">Date published</div>
              <div className="text-base font-medium text-gray-900">
                12 April, 2025
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-3">ISBN</div>
              <div className="text-base font-medium text-gray-900">
                978-3-16-148410-0
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          {/* <div className="flex gap-4 pt-8 border-t border-gray-100">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Back
            </button>
            <button className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-3 text-base font-medium">
              <Download className="w-5 h-5" />
              Export as PDF
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default NFTDetailModal;

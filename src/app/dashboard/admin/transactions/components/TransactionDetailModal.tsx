import Image from "next/image";
import { X, Download } from "lucide-react";

export interface Transaction {
  type: "Subscription" | "Purchase" | string;
  amount: string;
  status: "Successful" | "Failed" | string;
  bookTitle?: string;
  userName: string;
}

interface TransactionDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  transaction: Transaction | null;
}

const TransactionDetailModal: React.FC<TransactionDetailModalProps> = ({
  isOpen,
  onClose,
  transaction,
}) => {
  if (!isOpen || !transaction) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="p-6 relative">
          <h2 className="text-xl font-semibold text-gray-500 text-center mt-8">
            {transaction.type === "Purchase"
              ? "Book Purchase Details"
              : transaction.type === "Subscription"
              ? "Subscription Details"
              : "Transaction Details"}
          </h2>
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 bg-gray-100 p-2 rounded-sm"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          {/* Top Section - Book Info and Payment Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Left - Book Info */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="w-20 h-28 bg-gray-300 rounded flex-shrink-0"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-gray-900 mb-1">
                    {transaction.bookTitle && transaction.bookTitle !== "-"
                      ? transaction.bookTitle
                      : "99 Laws of Power"}
                  </h3>
                  <p className="text-gray-600 mb-2">Series</p>
                  <p className="text-gray-600">Regular Book</p>
                </div>
              </div>
            </div>

            {/* Right - Payment Breakdown */}
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Amount</span>
                <span className="font-medium">800.00 STRK</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Royalty Earned</span>
                <span className="font-medium">80.00 STRK</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Platform Commission</span>
                <span className="font-medium">80.00 STRK</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Paid</span>
                <div className="flex items-center gap-2">
                  <Image
                    src="/starknet.png"
                    alt="starknet icon"
                    width={16}
                    height={16}
                  />
                  <span>916.00 STRK</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section Transaction Details */}
          <div className="border rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {/* Left Column */}
            <div className="space-y-6 pr-6">
              <div className="flex items-center justify-between">
                <span className="text-gray-500 font-medium">
                  Transaction Type
                </span>
                <span className="text-gray-500 font-medium">Book Purchase</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 font-medium">Status</span>
                <span
                  className={`inline-flex items-center px-3 py-1 text-sm font-medium rounded-full ${
                    transaction.status === "Successful"
                      ? "bg-green-100 text-green-500 border border-green-700"
                      : "bg-red-100 text-red-700 border border-red-200"
                  }`}
                >
                  {transaction.status}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 font-medium">Date</span>
                <span className="text-gray-500 font-medium">
                  12 March, 2025
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 font-medium">Time</span>
                <span className="text-gray-500 font-medium">16:32</span>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6 pl-6 pt-6 md:pt-0">
              <div className="flex items-center justify-between">
                <span className="text-gray-500 font-medium">Reader</span>
                <span className="text-gray-500 font-medium">
                  {transaction.userName}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 font-medium">
                  Transaction ID
                </span>
                <span className="text-gray-500 font-medium">TRANS-00112</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 font-medium">
                  Transaction Hash
                </span>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm text-gray-800">
                    0x5a3f7b...d6e7f8g
                  </span>
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 font-medium">
                  Confirmation Status
                </span>
                <span className="text-gray-500 font-medium">12/12</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 rounded-2xl text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Back
            </button>
            <button className="flex-1 px-6 py-3 bg-[#edf7ff] rounded-2xl hover:bg-blue-200 transition-colors flex items-center justify-center gap-2">
              <Download className="w-4 h-4" />
              Export as PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetailModal;

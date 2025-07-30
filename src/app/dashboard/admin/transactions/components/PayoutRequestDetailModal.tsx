import React from "react";
import { X, Link2Off } from "lucide-react";
import type { PayoutRequest } from "./PayoutRequestTable";
import Image from "next/image";

interface PayoutRequestDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  request: PayoutRequest | null;
  onApprove: (request: PayoutRequest) => void;
  onDecline: (request: PayoutRequest) => void;
}

const PayoutRequestDetailModal: React.FC<PayoutRequestDetailModalProps> = ({
  isOpen,
  onClose,
  request,
  // onApprove,
  // onDecline,
}) => {
  if (!isOpen || !request) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6 relative">
          <h2 className="text-xl font-semibold text-gray-500 text-center mt-8">
            Payment Request Details
          </h2>
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 bg-gray-100 p-2 rounded-sm"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="space-y-6">
            {/* User Info */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full" />
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  Nana_Hamza
                </p>
                <p className="text-sm text-gray-500">nanahamza@gmail.com</p>
              </div>
            </div>

            {/* Wallet Info */}
            <div className=" rounded-xl p-4 mb-6 border">
              <div className="flex items-center mb-2">
                <Image
                  src="/braavos.svg"
                  alt="Braavos"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                  0x04a093c37ab61065d001550089b108...979
                </span>

                <button className="text-xs px-3 py-1 bg-blue-50 text-gray-400 rounded-md border border-blue-100">
                  <Link2Off className="w-4 h-4 inline-block mr-1" />
                  Disconnect
                </button>
              </div>
            </div>

            <div className="border rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              {/* Left Column */}
              <div className="space-y-6 pr-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-gray-500 font-medium">Transaction Type</p>
                  <p className="text-gray-500 font-medium">Withdraw</p>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <p className="text-gray-500 font-medium">Status</p>
                  <p className="inline-block px-3 py-1 text-xs text-green-600 bg-green-100 rounded-full">
                    Pending
                  </p>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <p className="text-gray-500 font-medium">Request Date</p>
                  <p className="text-gray-500 font-medium">12 March, 2025</p>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <p className="text-gray-500 font-medium">Time</p>
                  <p className="text-gray-500 font-medium">16:32</p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6 pl-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-gray-500">Amount to Paid</p>
                  <div className="flex items-center gap-1">
                    <Image
                      src="/starknet.png"
                      alt="STRK"
                      width={16}
                      height={16}
                    />
                    <p>800.00 STRK</p>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <p className="text-gray-500">Gas fee</p>
                  <div className="flex items-center gap-1">
                    <Image
                      src="/starknet.png"
                      alt="STRK"
                      width={16}
                      height={16}
                    />
                    <p>-80.00 STRK</p>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <p className="text-gray-500">To be Paid</p>
                  <div className="flex items-center gap-1">
                    <Image
                      src="/starknet.png"
                      alt="STRK"
                      width={16}
                      height={16}
                    />
                    <p>720.00 STRK</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200">
              <button
                onClick={onClose}
                className="flex-1 px-6 py-3 border bg-blue-100 border-gray-300 rounded-2xl text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Decline
              </button>
              <button className="flex-1 px-6 py-3 bg-blue-500 rounded-2xl hover:bg-blue-200 transition-colors flex items-center justify-center gap-2">
                Approve Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayoutRequestDetailModal;

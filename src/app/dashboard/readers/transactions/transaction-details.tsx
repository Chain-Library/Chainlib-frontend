import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, X } from "lucide-react";
import Image from "next/image";
import stk from "../../../../../public/image 2.svg";

interface TransactionDetailsProps {
  selectedTransaction: {
    details: {
      title: string;
      subtitle: string;
      category: string;
      amountPaid: string | number;
      platformCommission: string | number;
      transactionType: string;
      nftId: string;
      status: string;
      buyer: string;
      date: string;
      transactionId: string;
      time: string;
      transactionHash: string;
      confirmationStatus: string;
    };
  } | null;
  closeModal: () => void;
}

export default function TransactionDetail({ selectedTransaction, closeModal }: TransactionDetailsProps) {
    const exportPDF = () => {
      alert("Exporting transaction as PDF...");
    };
  return (
    <>
      {/* Transaction Detail Modal */}
      {selectedTransaction && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-white/50   backdrop-blur-xs bg-opacity-50 z-50"
            onClick={closeModal}
          />

          {/* Desktop Modal */}
          <div className="hidden lg:block fixed inset-0 z-50 flex items-center justify-center p-4  left-3 top-1/6 transform translate-y- translate-x-1/4">
            <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
              {/* Header */}
              <div className="flex items-center justify-center relative p-6 border-b border-gray-200">
                <h2 className="text-xl font-medium text-gray-600">
                  Transaction Details
                </h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeModal}
                  className="absolute right-6"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </Button>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Top Section - Book Info and Payment */}
                <div className="border border-gray-200 rounded-lg p-6 mb-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Side - Book Info */}
                    <div className="flex gap-4 border-r ">
                      <div className="w-32 h-40 bg-gray-300 rounded-lg flex-shrink-0"></div>
                      <div className="flex-1 flex flex-col justify-center">
                        <h3 className="text-2xl font-medium text-gray-900 mb-3">
                          {selectedTransaction.details.title}
                        </h3>
                        <p className="text-gray-600 mb-4 text-lg">
                          {selectedTransaction.details.subtitle}
                        </p>
                        <p className="text-gray-500 text-lg">
                          {selectedTransaction.details.category}
                        </p>
                      </div>
                    </div>

                    {/* Right Side - Payment Details */}
                    <div className="space-y-6 flex flex-col justify-center">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-lg">
                          Amount Paid
                        </span>
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                            <div className="w-4 h-4 rounded-full flex items-center justify-center">
                              <Image src={stk} alt="stk" />
                            </div>
                          </div>
                          <span className="font-medium text-lg">
                            {selectedTransaction.details.amountPaid}
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-lg">
                          Platform Commission
                        </span>
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                            <div className="w-4 h-4 rounded-full flex items-center justify-center">
                              <Image src={stk} alt="stk" />
                            </div>
                          </div>
                          <span className="font-medium text-lg">
                            {selectedTransaction.details.platformCommission}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Section - Transaction Details */}
                <div className="border border-gray-200 rounded-lg p-6 mb-8 relative">
                  <span className="h-[80%] bg-gray-100 left-1/2 absolute w-[2px]" />
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-lg">
                        Transaction Type
                      </span>
                      <span className="font-medium text-lg">
                        {selectedTransaction.details.transactionType}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-lg">NFT ID</span>
                      <span className="font-medium text-lg">
                        {selectedTransaction.details.nftId}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-lg">Status</span>
                      <Badge
                        variant="outline"
                        className={`text-base px-4 py-1 ${
                          selectedTransaction.details.status === "Successful"
                            ? "bg-green-50 text-green-700 border-green-300"
                            : "bg-red-50 text-red-700 border-red-300"
                        }`}
                      >
                        {selectedTransaction.details.status}
                      </Badge>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-lg">Buyer</span>
                      <span className="font-medium text-lg">
                        {selectedTransaction.details.buyer}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-lg">Date</span>
                      <span className="font-medium text-lg">
                        {selectedTransaction.details.date}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-lg">
                        Transaction ID
                      </span>
                      <span className="font-medium text-lg">
                        {selectedTransaction.details.transactionId}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-lg">Time</span>
                      <span className="font-medium text-lg">
                        {selectedTransaction.details.time}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-lg">
                        Transaction Hash
                      </span>
                      <div className="flex items-center gap-2">
                        <Download className="w-4 h-4 text-gray-400" />
                        <span className="font-medium text-lg">
                          {selectedTransaction.details.transactionHash}
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center lg:col-span-2">
                      <span className="text-gray-600 text-lg">
                        Confirmation Status
                      </span>
                      <span className="font-medium text-lg">
                        {selectedTransaction.details.confirmationStatus}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    onClick={closeModal}
                    className="flex-1 h-12 text-base border-gray-300 bg-white hover:bg-gray-50"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={exportPDF}
                    className="flex-1 h-12 text-base from-[#EDF7FF] to-[#096CFF] bg-gradient-to-l"
                  >
                    Export as PDF
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Modal */}
          <div className="lg:hidden fixed inset-0 z-50 bg-white">
            {/* Header */}
            <div className="flex items-center gap-4 p-4 border-b border-gray-200">
              <Button variant="ghost" size="icon" onClick={closeModal}>
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <h1 className="text-lg font-semibold">Transaction</h1>
            </div>

            {/* Content */}
            <div className="p-4 overflow-auto h-full pb-32">
              {/* Book Card */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
                <div className="flex gap-4 mb-4">
                  <div className="w-20 h-28 bg-gray-200 rounded-lg flex-shrink-0"></div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {selectedTransaction.details.title}
                    </h3>
                    <p className="text-gray-600 mb-1">
                      {selectedTransaction.details.subtitle}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {selectedTransaction.details.category}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Amount Paid</span>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-purple-600 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full flex items-center justify-center">
                          <Image src={stk} alt="stk" />
                        </div>
                      </div>
                      <span className="font-semibold">
                        {selectedTransaction.details.amountPaid}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Platform Commission</span>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-purple-600 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full flex items-center justify-center">
                          <Image src={stk} alt="stk" />
                        </div>
                      </div>
                      <span className="font-semibold">
                        {selectedTransaction.details.platformCommission}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transaction Details */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
                <div className="space-y-4">
                  {[
                    {
                      label: "Transaction Type",
                      value: selectedTransaction.details.transactionType,
                    },
                    {
                      label: "Status",
                      value: selectedTransaction.details.status,
                      isBadge: true,
                    },
                    {
                      label: "Date",
                      value: selectedTransaction.details.date,
                    },
                    {
                      label: "Time",
                      value: selectedTransaction.details.time,
                    },
                    {
                      label: "NFT ID",
                      value: selectedTransaction.details.nftId,
                    },
                    {
                      label: "Buyer",
                      value: selectedTransaction.details.buyer,
                    },
                    {
                      label: "Transaction ID",
                      value: selectedTransaction.details.transactionId,
                    },
                    {
                      label: "Transaction Hash",
                      value: selectedTransaction.details.transactionHash,
                      hasIcon: true,
                    },
                    {
                      label: "Confirmation Status",
                      value: selectedTransaction.details.confirmationStatus,
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2"
                    >
                      <span className="text-gray-600">{item.label}</span>
                      <div className="flex items-center gap-2">
                        {item.hasIcon && (
                          <Download className="w-4 h-4 text-gray-400" />
                        )}
                        {item.isBadge ? (
                          <Badge
                            variant="outline"
                            className={
                              item.value === "Successful"
                                ? "bg-green-50 text-green-700 border-green-200"
                                : "bg-red-50 text-red-700 border-red-200"
                            }
                          >
                            {item.value}
                          </Badge>
                        ) : (
                          <span className="font-medium text-right">
                            {item.value}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Fixed Bottom Buttons */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 space-y-3">
              <Button
                onClick={exportPDF}
                className="w-full from-[#EDF7FF] to-[#096CFF] bg-gradient-to-l"
              >
                Export as PDF
              </Button>
              <Button
                variant="outline"
                onClick={closeModal}
                className="w-full bg-transparent"
              >
                Back
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
"use client";

import React, { useState } from "react";
import { ChevronRight, Calendar } from "lucide-react";
import Image from "next/image";
import strk from "../../../public/strk.png.svg";
interface Transaction {
  id: string;
  type: string;
  amount: number;
  status: "Successful" | "Failed";
  date: string;
}

const mockTransactions: Transaction[] = [
  {
    id: "Tran-124B",
    type: "Monthly Subscription",
    amount: 100.0,
    status: "Successful",
    date: "26 April",
  },
  {
    id: "Tran-124B",
    type: "Book Purchase",
    amount: 800.45,
    status: "Successful",
    date: "25 April",
  },
  {
    id: "Tran-124B",
    type: "Book Purchase",
    amount: 56.78,
    status: "Failed",
    date: "20 April",
  },
  {
    id: "Tran-124B",
    type: "NFT Purchase",
    amount: 200.5,
    status: "Successful",
    date: "18 April",
  },
  {
    id: "Tran-124B",
    type: "NFT Purchase",
    amount: 540.569,
    status: "Successful",
    date: "18 April",
  },
];

const summaryData = {
  totalAmount: 837.06,
  breakdown: {
    bookPurchase: 372.93,
    nftPurchase: 403.93,
    monthlySubscription: 201.93,
  },
};

const TransactionContent: React.FC = () => {
  const [activeTimeFilter, setActiveTimeFilter] = useState<
    "This Week" | "This Month" | "This Year"
  >("This Week");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(5);
  const [totalTransactions] = useState(12);

  const getStatusBadge = (status: string) => {
    const baseClasses = "px-3 py-1 rounded-full text-xs font-medium";
    if (status === "Successful") {
      return `${baseClasses} bg-green-100 text-green-800`;
    } else {
      return `${baseClasses} bg-red-100 text-red-800`;
    }
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedTransactions = mockTransactions.slice(startIndex, endIndex);

  return (
    <div className="p-6 space-y-6">
      {/* Summary Section */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Total Amount Card - Left Side */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 flex-1">
          <div className="text-center items-center gap-3 justify-center flex flex-col">
            <p className="text-sm text-gray-600 mb-2">
              Total Amount Transacted
            </p>
            <div className="flex items-center gap-2">
              <Image
                src={strk}
                alt="token icon"
                width={20}
                height={20}
                className=""
              />
              <h3 className="text-3xl font-bold text-blue-600">
                {summaryData.totalAmount}
              </h3>
            </div>
          </div>
        </div>

        {/* Breakdown Cards - Right Side */}
        <div className="grid grid-cols-2 flex-col gap-4 flex-1">
          {/* Book Purchase */}
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className=" items-center gap-3">
              <p className="text-sm text-gray-600">Book Purchase</p>
              <div className="rounded-full flex items-center gap-2">
                <Image
                  src={strk}
                  alt="token icon"
                  width={16}
                  height={16}
                  className=""
                />
                <p className="text-lg font-semibold text-gray-900">
                  {summaryData.breakdown.bookPurchase} STR
                </p>
              </div>
            </div>
          </div>

          {/* NFT Purchase */}
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className=" items-center gap-3">
              <p className="text-sm text-gray-600">NFT Purchase</p>
              <div className="rounded-full flex items-center gap-2">
                <Image
                  src={strk}
                  alt="token icon"
                  width={16}
                  height={16}
                  className=""
                />
                <p className="text-lg font-semibold text-gray-900">
                  {summaryData.breakdown.nftPurchase} STRK
                </p>
              </div>
            </div>
          </div>

          {/* Monthly Subscription */}
          <div className="bg-white border col-span-2 border-gray-200 rounded-lg p-4">
            <div className=" items-center gap-3">
              <p className="text-sm text-gray-600">Monthly Subscription</p>
              <div className="rounded-full flex items-center gap-2">
                <Image
                  src={strk}
                  alt="token icon"
                  width={16}
                  height={16}
                  className=""
                />
                <p className="text-lg font-semibold text-gray-900">
                  {summaryData.breakdown.monthlySubscription} STRK
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transaction History Section */}
      <div className="bg-white rounded-lg border border-gray-200">
        {/* Filters */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            {/* Time Period Filters */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTimeFilter("This Week")}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeTimeFilter === "This Week"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                This Week
              </button>
              <button
                onClick={() => setActiveTimeFilter("This Month")}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeTimeFilter === "This Month"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                This Month
              </button>
              <button
                onClick={() => setActiveTimeFilter("This Year")}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeTimeFilter === "This Year"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                This Year
              </button>
            </div>

            {/* Date Range and Filter */}
            <div className="flex items-center gap-4">
              {/* Custom Date Range */}
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="dd/mm/yyyy"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-32 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-gray-500 text-sm">to</span>
                <input
                  type="text"
                  placeholder="dd/mm/yyyy"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-32 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  Apply
                </button>
              </div>

              {/* Filter by Button */}
              <button className="px-4 py-2 border border-gray-300 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                Filter by
              </button>
            </div>
          </div>
        </div>

        {/* Transaction Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Transaction ID
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Transaction Type
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount (STRK)
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  View Details
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {displayedTransactions.map((transaction, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {transaction.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {transaction.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full flex items-center gap-2">
                        <Image
                          src={strk}
                          alt="token icon"
                          width={16}
                          height={16}
                          className=""
                        />
                      </div>
                      {transaction.amount.toFixed(
                        transaction.amount % 1 === 0 ? 0 : 3
                      )}{" "}
                      STRK
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={getStatusBadge(transaction.status)}>
                      {transaction.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {transaction.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Showing {startIndex + 1} to {Math.min(endIndex, totalTransactions)}{" "}
            of {totalTransactions}
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
            View All
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionContent;

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Header } from "@/components/dashboard/header";
import stk from "../../../../../public/image 2.svg"
import Image from "next/image";
import TransactionDetail from "./transaction-details";

const transactionData = [
  {
    id: "Tran-124B",
    type: "Monthly Subscription",
    amount: "100.00 STRK",
    status: "Successful",
    date: "26 April",
    details: {
      title: "Monthly Subscription",
      subtitle: "Premium Plan",
      category: "Subscription",
      amountPaid: "100.00 STRK",
      platformCommission: "5.00 STRK",
      transactionType: "Monthly Subscription",
      status: "Successful",
      date: "26 April, 2025",
      time: "14:32",
      nftId: "#0001",
      buyer: "USER-0001",
      transactionId: "TRANS-00110",
      transactionHash: "0x5a3f7b...d6e7f8g",
      confirmationStatus: "12/12",
    },
  },
  {
    id: "Tran-124B",
    type: "Book Purchase",
    amount: "800.45 STRK",
    status: "Successful",
    date: "25 April",
    details: {
      title: "99 Laws of Power",
      subtitle: "NFT Edition",
      category: "eBook",
      amountPaid: "320.05 STRK",
      platformCommission: "32 STRK",
      transactionType: "Book Purchase",
      status: "Successful",
      date: "12 March, 2025",
      time: "16:32",
      nftId: "#0002",
      buyer: "USER-0001",
      transactionId: "TRANS-00112",
      transactionHash: "0x5a3f7b...d6e7f8g",
      confirmationStatus: "12/12",
    },
  },
  {
    id: "Tran-124B",
    type: "Book Purchase",
    amount: "56.78 STRK",
    status: "Failed",
    date: "20 April",
    details: {
      title: "Digital Marketing Guide",
      subtitle: "Standard Edition",
      category: "eBook",
      amountPaid: "56.78 STRK",
      platformCommission: "2.84 STRK",
      transactionType: "Book Purchase",
      status: "Failed",
      date: "20 April, 2025",
      time: "10:15",
      nftId: "#0003",
      buyer: "USER-0001",
      transactionId: "TRANS-00113",
      transactionHash: "0x5a3f7b...d6e7f8g",
      confirmationStatus: "0/12",
    },
  },
  {
    id: "Tran-124B",
    type: "NFT Purchase",
    amount: "200.5 STRK",
    status: "Successful",
    date: "18 April",
    details: {
      title: "Crypto Art Collection",
      subtitle: "Limited Edition",
      category: "NFT",
      amountPaid: "200.5 STRK",
      platformCommission: "10.03 STRK",
      transactionType: "NFT Purchase",
      status: "Successful",
      date: "18 April, 2025",
      time: "09:45",
      nftId: "#0004",
      buyer: "USER-0001",
      transactionId: "TRANS-00114",
      transactionHash: "0x5a3f7b...d6e7f8g",
      confirmationStatus: "12/12",
    },
  },
  {
    id: "Tran-124B",
    type: "NFT Purchase",
    amount: "540.569 STRK",
    status: "Successful",
    date: "18 April",
    details: {
      title: "Digital Collectible",
      subtitle: "Rare Edition",
      category: "NFT",
      amountPaid: "540.569 STRK",
      platformCommission: "27.03 STRK",
      transactionType: "NFT Purchase",
      status: "Successful",
      date: "18 April, 2025",
      time: "11:20",
      nftId: "#0005",
      buyer: "USER-0001",
      transactionId: "TRANS-00115",
      transactionHash: "0x5a3f7b...d6e7f8g",
      confirmationStatus: "12/12",
    },
  },
];

export default function TransactionPage() {
  const [activeFilter, setActiveFilter] = useState("This Week");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedTransaction, setSelectedTransaction] = useState<any>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleViewDetails = (transaction: any) => {
    setSelectedTransaction(transaction);
  };

  const closeModal = () => {
    setSelectedTransaction(null);
  };


  return (
    <div className="flex flex-col h-full">
      <Header title="Transactions"  />

      {/* Content */}
      <div className="flex-1 p-4 lg:p-6 overflow-auto mt-16">
        <div className="bg-white rounded-lg border border-gray-200">
          {/* Transaction History Header */}
          <div className="p-4 lg:p-6 border-b border-gray-200">
            <h2 className="text-lg font-medium text-[#B0B0B0] mb-4">
              Transaction History
            </h2>

            {/* Filter Controls */}
            <div className="flex flex-wrap items-center gap-3 justify-between">
              <div className="flex items-center gap-2">
                {["This Week", "This Month", "This Year"].map((filter) => (
                  <Button
                    key={filter}
                    variant={activeFilter === filter ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveFilter(filter)}
                    className={
                      activeFilter === filter
                        ? "bg-[#F6F6F6] text-[#454545] hover:bg-none hover:text-white"
                        : ""
                    }
                  >
                    {filter}
                  </Button>
                ))}

                <Input
                  placeholder="dd/mm/yyyy"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                  className="border border-[#E7E7E7] placeholder:text-[#D1D1D1] w-32 h-9"
                />

                <span className="text-gray-500 text-sm">to</span>

                <Input
                  placeholder="dd/mm/yyyy"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                  className="w-32 h-9 border border-[#E7E7E7] placeholder:text-[#D1D1D1]"
                />

                <Button
                  size="sm"
                  className="bg-[#E7E7E7] text-[#5D5D5D] hover:text-white hover:bg-gray-800"
                >
                  Apply
                </Button>
              </div>

              <Button variant="outline" size="sm">
                Filter by
              </Button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#EDF7FF]">
                  <TableHead className="font-medium text-[#5D5D5D]">
                    Transaction ID
                  </TableHead>
                  <TableHead className="font-medium text-[#5D5D5D]">
                    Transaction Type
                  </TableHead>
                  <TableHead className="font-medium text-[#5D5D5D]">
                    Amount (STRK)
                  </TableHead>
                  <TableHead className="font-medium text-[#5D5D5D]">
                    Status
                  </TableHead>
                  <TableHead className="font-medium text-[#5D5D5D]">
                    Date
                  </TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactionData.map((transaction, index) => (
                  <TableRow
                    key={index}
                    className="hover:bg-gray-50 text-[#5D5D5D]"
                  >
                    <TableCell className="font-medium">
                      {transaction.id}
                    </TableCell>
                    <TableCell>{transaction.type}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full flex items-center justify-center">
                          <Image src={stk} alt="stk" />
                        </div>
                        {transaction.amount}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={
                          transaction.status === "Successful"
                            ? "bg-green-50 text-green-700 border-green-200"
                            : "bg-red-50 text-red-700 border-red-200"
                        }
                      >
                        {transaction.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-gray-600">
                      {transaction.date}
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="link"
                        className="text-blue-600 hover:text-blue-800 p-0"
                        onClick={() => handleViewDetails(transaction)}
                      >
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          <div className="p-4 lg:p-6 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">Showing 1 to 5 of 12</p>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-8 h-8"
                  disabled
                >
                  <ChevronLeft className="w-4 h-4 text-gray-400" />
                </Button>

                <Button variant="ghost" size="icon" className="w-8 h-8">
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </Button>

                <span className="text-blue-600 font-medium text-base mx-2">
                  1
                </span>
                <span className="text-gray-400 font-medium text-base mx-2">
                  2
                </span>
                <span className="text-gray-400 font-medium text-base mx-2">
                  3
                </span>
                <span className="text-gray-400 font-medium text-base mx-2">
                  ...
                </span>
                <span className="text-gray-400 font-medium text-base mx-2">
                  10
                </span>
                <span className="text-gray-400 font-medium text-base mx-2">
                  11
                </span>
                <span className="text-gray-400 font-medium text-base mx-2">
                  12
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transaction Detail Modal */}
      <TransactionDetail closeModal={closeModal} selectedTransaction={selectedTransaction} />
    </div>
  );
}

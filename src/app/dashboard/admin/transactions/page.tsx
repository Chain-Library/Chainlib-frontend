"use client";
import { useState } from "react";
import { Filter } from "lucide-react";
import { Header } from "@/components/dashboard/header";
import Chart from "./components/Chart";
import type { ChartData } from "./components/Chart";
import ChartLegend from "./components/ChartLegend";
import Pagination from "./components/Pagination";
import SearchFilterBar from "./components/SearchFilterBar";
import StatsCard from "./components/StatsCard";
import TimeFilter from "./components/TimeFilter";
import TabNavigation from "./components/TabNavigation";
import type { Tab } from "./components/TabNavigation";
import type { Transaction } from "./components/TransactionTable";
import type { PayoutRequest } from "./components/PayoutRequestTable";
import type { Subscription } from "./components/SubscriptionTable";
import TransactionTable from "./components/TransactionTable";
import TransactionDetailModal from "./components/TransactionDetailModal";
import PayoutRequestTable from "./components/PayoutRequestTable";
import PayoutRequestDetailModal from "./components/PayoutRequestDetailModal";

const Transactions = () => {
  const [activeTab, setActiveTab] = useState("Transaction History");
  const [timeFilter, setTimeFilter] = useState("This Week");
  const [salesTimeFilter, setSalesTimeFilter] = useState("This Week");
  const [tableTimeFilter, setTableTimeFilter] = useState("This Week");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);
  const [selectedPayoutRequest, setSelectedPayoutRequest] =
    useState<PayoutRequest | null>(null);
  // const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);
  const [isPayoutModalOpen, setIsPayoutModalOpen] = useState(false);

  // Chart data
  const chartData: ChartData[] = [
    { label: "Subscription", value: 45, color: "#096cff" },
    { label: "NFT Edition", value: 32, color: "#822ecb" },
    { label: "One Time Purchase", value: 23, color: "#b6e0ff" },
  ];

  // Tab configuration
  const tabs: Tab[] = [
    { name: "Transaction History", active: true },
    { name: "Payout Request", badge: "27" },
    { name: "Subscription", active: false },
    { name: "NFT Minting", active: false },
  ];

  // Sample transaction data
  const transactionHistoryData: Transaction[] = [
    {
      id: "Tran-124B",
      type: "Subscription",
      amount: "10.99 STRK",
      user: "Reader",
      userName: "jake_reader",
      bookTitle: "-",
      status: "Successful",
      date: "26 April",
    },
    {
      id: "Tran-124B",
      type: "Purchase",
      amount: "76.09 STRK",
      user: "Reader",
      userName: "Paul_John",
      bookTitle: "Book Purchase",
      status: "Successful",
      date: "25 April",
    },
    {
      id: "Tran-124B",
      type: "Payout",
      amount: "1560.00 STRK",
      user: "Writer",
      userName: "Nana_Hamza",
      bookTitle: "-",
      status: "Failed",
      date: "20 April",
    },
    {
      id: "Tran-124B",
      type: "Payout",
      amount: "7.02 STRK",
      user: "Writer",
      userName: "Leo_17",
      bookTitle: "-",
      status: "Successful",
      date: "18 April",
    },
    {
      id: "Tran-124B",
      type: "Purchase",
      amount: "8.09 STRK",
      user: "Reader",
      userName: "Lil_ma",
      bookTitle: "Who Me Out",
      status: "Successful",
      date: "18 April",
    },
  ];

  // Payout request data
  const payoutRequestData: PayoutRequest[] = [
    {
      author: "Olu Ademola",
      email: "oluade...@gmail.com",
      amount: "500.67 STR",
      walletAddress: "0xABC...789",
      requestDate: "27 May,2025",
      status: "Pending",
    },
    {
      author: "Olu Ademola",
      email: "oluade...@gmail.com",
      amount: "500.67 STR",
      walletAddress: "0xABC...789",
      requestDate: "27 May,2025",
      status: "Pending",
    },
    {
      author: "Olu Ademola",
      email: "oluade...@gmail.com",
      amount: "500.67 STR",
      walletAddress: "0xABC...789",
      requestDate: "27 May,2025",
      status: "Pending",
    },
    {
      author: "Olu Ademola",
      email: "oluade...@gmail.com",
      amount: "500.67 STR",
      walletAddress: "0xABC...789",
      requestDate: "27 May,2025",
      status: "Pending",
    },
    {
      author: "Olu Ademola",
      email: "oluade...@gmail.com",
      amount: "500.67 STR",
      walletAddress: "0xABC...789",
      requestDate: "27 May,2025",
      status: "Pending",
    },
  ];

  // Subscription data
  const subscriptionData: Subscription[] = [
    {
      id: "Sub-001",
      type: "Monthly Subscription",
      amount: "29.99 STRK",
      user: "Reader",
      userName: "alex_reader",
      status: "Successful",
      date: "28 July",
    },
    {
      id: "Sub-002",
      type: "Annual Subscription",
      amount: "299.99 STRK",
      user: "Reader",
      userName: "sarah_writer",
      status: "Successful",
      date: "27 July",
    },
  ];

  // NFT Minting data
  const nftMintingData: Transaction[] = [
    {
      id: "NFT-001",
      type: "NFT Mint",
      amount: "150.00 STRK",
      user: "Writer",
      userName: "crypto_author",
      bookTitle: "Digital Art Collection",
      status: "Successful",
      date: "29 July",
    },
    {
      id: "NFT-002",
      type: "NFT Mint",
      amount: "200.00 STRK",
      user: "Writer",
      userName: "nft_creator",
      bookTitle: "Limited Edition Series",
      status: "Pending",
      date: "28 July",
    },
  ];

  // const getTableData = (): Transaction[] | PayoutRequest[] | Subscription[] => {
  //   switch (activeTab) {
  //     case "Payout Request":
  //       return payoutRequestData;
  //     case "Subscription":
  //       return subscriptionData;
  //     case "NFT Minting":
  //       return nftMintingData;
  //     default:
  //       return transactionHistoryData;
  //   }
  // };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handlePayoutRowClick = (request: PayoutRequest) => {
    setSelectedPayoutRequest(request);
    setIsPayoutModalOpen(true);
  };

  const handleClosePayoutModal = () => {
    setIsPayoutModalOpen(false);
    setSelectedPayoutRequest(null);
  };

  const handleViewDetails = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTransaction(null);
  };

  const handleApprove = (request: PayoutRequest) => {
    console.log("Approving:", request);
    // Handle approval logic
  };

  const handleDecline = (request: PayoutRequest) => {
    console.log("Declining:", request);
    // Handle decline logic
  };

  return (
    <>
      <Header title="Transactions" />

      <div className="p-6 bg-gray-50 min-h-screen min-w-full max-w-7xl max-auto">
        {/* Time Filter */}
        <div className="flex gap-4 mb-6">
          <TimeFilter
            activeFilter={timeFilter}
            onFilterChange={setTimeFilter}
          />
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded text-sm">
            Filter <Filter className="w-4 h-4" />
          </button>
        </div>

        {/* Top Stats Cards */}
        <div className="flex gap-6 mb-8">
          {/* Large rectangular card on the left - controlled width */}
          <div className="w-[50%]">
            {" "}
            {/* You can adjust this width as needed */}
            <StatsCard
              title="Total Transactions"
              value="109,837.06"
              currency="STRK"
              growth="20% ▲"
              variant="primary"
            />
          </div>

          {/* 2x2 grid of smaller cards on the right */}
          <div className="w-[50%]">
            <div className="grid grid-cols-2 gap-4 flex-1">
              <StatsCard
                title="Revenue Earned"
                value="21,070.93"
                currency="STR"
                size="small"
                currencyTextSize="text-xs"
                currencyFontWeight="font-light"
              />
              <StatsCard
                title="Payout Sent"
                value="51,070.93"
                currency="STR"
                size="small"
                currencyTextSize="text-xs"
                currencyFontWeight="font-light"
              />
              <StatsCard
                title="Pending Payout"
                value="12,070.93"
                currency="STR"
                size="small"
                currencyTextSize="text-xs"
                currencyFontWeight="font-light"
              />
              <StatsCard title="Failed Payout" value="9" size="small" />
            </div>
          </div>
        </div>

        {/* Sales Distribution */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">
            Sales Distribution
          </h2>

          <TimeFilter
            activeFilter={salesTimeFilter}
            onFilterChange={setSalesTimeFilter}
            showDateRange={true}
            showApplyButton={true}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
            {/* Chart */}
            <div className="border p-6 rounded-lg">
              <h3 className="text-base font-bold text-gray-400 mb-4">
                Top Read Genres
              </h3>

              <div className="flex">
                <Chart data={chartData} />
                <div className="mt-[15%]">
                  <ChartLegend data={chartData} />
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-x-6 border p-4 rounded-lg">
              <StatsCard
                title="Subscription"
                value="21,070.93"
                currency="STRK"
                size="small"
              />
              <StatsCard
                title="NFT Edition"
                value="12,070.93"
                currency="STRK"
                size="small"
              />
              <StatsCard
                title="One Time Purchase"
                value="21,070.93"
                currency="STRK"
                size="small"
              />
            </div>
          </div>
        </div>

        {/* Transaction Table Section */}
        <div className="w-full max-w-full mx-auto p-4">
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <TabNavigation
              tabs={tabs}
              activeTab={activeTab}
              onTabClick={handleTabClick}
            />

            <SearchFilterBar
              timeFilter={tableTimeFilter}
              onTimeFilterChange={setTableTimeFilter}
            />

            {activeTab === "Payout Request" ? (
              <PayoutRequestTable
                requests={payoutRequestData}
                onApprove={handleApprove}
                onDecline={handleDecline}
                onRowClick={handlePayoutRowClick}
              />
            ) : (
              <TransactionTable
                transactions={(() => {
                  switch (activeTab) {
                    case "NFT Minting":
                      return nftMintingData;
                    default:
                      return transactionHistoryData;
                  }
                })()}
                onViewDetails={handleViewDetails}
              />
            )}

            <Pagination currentItems={5} totalItems={12} itemsPerPage={5} />
          </div>
        </div>
      </div>

      {/* Transaction Detail Modal */}
      <TransactionDetailModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        transaction={selectedTransaction}
      />

      {/* Payout Request Detail Modal */}
      <PayoutRequestDetailModal
        isOpen={isPayoutModalOpen}
        onClose={handleClosePayoutModal}
        request={selectedPayoutRequest}
        onApprove={handleApprove}
        onDecline={handleDecline}
      />
    </>
  );
};

export default Transactions;

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
import TransactionTable from "./components/TransactionTable";

const Transactions = () => {
  const [activeTab, setActiveTab] = useState("Transaction History");
  const [timeFilter, setTimeFilter] = useState("This Week");
  const [salesTimeFilter, setSalesTimeFilter] = useState("This Week");
  const [tableTimeFilter, setTableTimeFilter] = useState("This Week");

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
  const transactions: Transaction[] = [
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

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    // Modal logic will be handled by parent component
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

          <TransactionTable transactions={transactions} />

          <Pagination currentItems={5} totalItems={12} itemsPerPage={5} />
        </div>
        </div>
      </div>
    </>
  );
};

export default Transactions;

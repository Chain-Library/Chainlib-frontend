"use client";

import React, { useState } from "react";
import SignupChart from "@/components/analytics/SignUpChart";
import ChartDetails from "@/components/analytics/ChartDetails";
import ReadersAnalytics from "@/components/analytics/ReaderAnalytics";
import WritersAnalytics from "@/components/analytics/WritersAnalytics";
const Page = () => {
  const [selectedTab, setSelectedTab] = useState("This Week");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const tabs = ["This Week", "This Month", "This Year", "All Time"];

  return (
    <main className="p-4">
      <h2 className="text-xl font-semibold mb-4">Total Signups</h2>

      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-4 py-1 rounded-md text-sm border ${
                selectedTab === tab
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="border border-gray-300 rounded-md px-2 py-1 text-sm"
          />
          <span className="text-sm">to</span>
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className="border border-gray-300 rounded-md px-2 py-1 text-sm"
          />
          <button
            className="px-3 py-1 text-sm rounded-md bg-blue-500 text-white hover:bg-blue-600"
            onClick={() => {
              console.log("Apply clicked", fromDate, toDate);
            }}
          >
            Apply
          </button>
        </div>
      </div>

      <div className="flex flex-wrap md:flex-nowrap gap-6 ">
        <div className=" w-full md:w-[70%]  ">
          <SignupChart />
        </div>
        <div className="w-full  md:w-[10%] ">
          <ChartDetails />
        </div>
      </div>
      <ReadersAnalytics />
      <WritersAnalytics />
    </main>
  );
};

export default Page;

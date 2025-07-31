"use client";

import React from "react";
import { useState } from "react";
import { Header } from "@/components/dashboard/header";
import { useRouter } from "next/navigation";

import {
  Users,
  UserCheck,
  BookOpen,
  UserPlus,
  Search,
  Filter,
  SortAsc,
} from "lucide-react";

const UserManagment = () => {
  const [activeTab, setActiveTab] = useState("Readers");
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const statsCards = [
    { title: "Writers", value: "257", icon: Users, bgColor: "bg-white" },
    {
      title: "Verified Writers",
      value: "83",
      icon: UserCheck,
      bgColor: "bg-white",
    },
    { title: "Readers", value: "1093", icon: BookOpen, bgColor: "bg-white" },
    {
      title: "Subscribed Readers",
      value: "204",
      icon: UserPlus,
      bgColor: "bg-white",
    },
  ];

  const additionalStats = [
    { title: "Total Users", value: "257", icon: Users, bgColor: "bg-white" },
  ];

  const readersData = [
    {
      name: "Jane Doe",
      wallet: "0xABC...789",
      joinedDate: "27 May, 2025",
      booksPurchased: 13,
      readingRank: "Bookworm",
    },
    {
      name: "Ole Paul",
      wallet: "0xABC...789",
      joinedDate: "7 June, 2025",
      booksPurchased: 3,
      readingRank: "Enthusiast",
    },
    {
      name: "Aminu Sani",
      wallet: "0xABC...789",
      joinedDate: "27 May, 2025",
      booksPurchased: 9,
      readingRank: "Scholar",
    },
    {
      name: "Faith Adamu",
      wallet: "0xABC...789",
      joinedDate: "7 June, 2025",
      booksPurchased: 11,
      readingRank: "Connoisseur",
    },
    {
      name: "Wood Word",
      wallet: "0xABC...789",
      joinedDate: "27 May, 2025",
      booksPurchased: 4,
      readingRank: "Scholar",
    },
  ];

  type StatCardProps = {
    title: string;
    value: string;
    icon: React.ElementType;
    bgColor: string;
  };

  const StatCard: React.FC<StatCardProps> = ({ title, value, icon: Icon, bgColor }) => (
    <div
      className={`${bgColor} rounded-lg p-6 shadow-sm border border-gray-200`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
        </div>
        <div className="p-2 bg-gray-100 rounded-lg">
          <Icon className="h-6 w-6 text-gray-600" />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Header title="User Managements" />

      <div className="min-h-screen bg-gray-50 p-4 md:p-6">
        <div className="w-full mx-auto">
          {/* Stats Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {statsCards.map((card, index) => (
              <StatCard key={index} {...card} />
            ))}
          </div>

          {/* Additional Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {additionalStats.map((card, index) => (
              <StatCard key={index} {...card} />
            ))}
            {/* Empty placeholders for consistent grid */}
            <div className="hidden lg:block"></div>
            <div className="hidden lg:block"></div>
            <div className="hidden lg:block"></div>
          </div>

          {/* Main Content Area */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            {/* Tab Navigation */}
            <div className="border-b border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4">
                <div className="flex space-x-1 mb-4 sm:mb-0">
                  {["Readers", "Writers"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                        activeTab === tab
                          ? "bg-blue-600 text-white"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Search and Filter Controls */}
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <input
                      type="text"
                      placeholder="Search for a Reader"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-64"
                    />
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50">
                    <SortAsc className="h-4 w-4" />
                    Sort
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50">
                    <Filter className="h-4 w-4" />
                    Filter
                  </button>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Reader Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Wallet Address
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Joined Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Books Purchased
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Reading Rank
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {readersData
                    .filter((reader) =>
                      reader.name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    )
                    .map((reader, index) => (
                      <tr
                        key={index}
                        className="hover:bg-gray-50 cursor-pointer"
                        onClick={() => router.push(`/dashboard/admin/user-management/readers/${encodeURIComponent(reader.name)}`)}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {reader.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {reader.wallet}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {reader.joinedDate}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {reader.booksPurchased}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {reader.readingRank}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <button
                            className="text-blue-600 hover:text-blue-900 font-medium"
                            onClick={e => {
                              e.stopPropagation();
                              router.push(`/dashboard/admin/user-management/readers/${encodeURIComponent(reader.name)}`);
                            }}
                          >
                            View Profile
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 border-t border-gray-200">
              <div className="text-sm text-gray-500 mb-4 sm:mb-0">
                Showing 1 to 5 of 12
              </div>
              <button className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50">
                View All
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserManagment;

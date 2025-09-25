"use client";

import React, { useState } from "react";
import { MessageCircle, Star, BookOpen } from "lucide-react";
import { useParams } from "next/navigation";
import Image from "next/image";

import { Header } from "@/components/dashboard/header";
import reader1_img from "@/assets/images/reader1.png";
import DirectNotificationContent from "@/components/dashboard/DirectNotificationContent";
import ReviewsAndFeedbackContent from "@/components/dashboard/ReviewsAndFeedbackContent";
import TransactionContent from "@/components/dashboard/TransactionContent";

import { Search } from "lucide-react";

import SuspendUserModal from "@/components/reader/SuspendUserModal";

type Reader = {
  name: string;
  wallet: string;
  joinedDate: string;
  readingRank: string;
  image: string;
};

const mockReaders: { [key: string]: Reader } = {
  "Jane Doe": {
    name: "Jane Doe",
    wallet: "0xABC...789",
    joinedDate: "27 May, 2025",
    readingRank: "Bookworm",
    image: "/api/placeholder/64/64",
  },
  "Ole Paul": {
    name: "Ole Paul",
    wallet: "0xABC...789",
    joinedDate: "7 June, 2025",
    readingRank: "Enthusiast",
    image: "/api/placeholder/64/64",
  },
  "Aminu Sani": {
    name: "Aminu Sani",
    wallet: "0xABC...789",
    joinedDate: "27 May, 2025",
    readingRank: "Scholar",
    image: "/api/placeholder/64/64",
  },
  "Faith Adamu": {
    name: "Faith Adamu",
    wallet: "0xABC...789",
    joinedDate: "7 June, 2025",
    readingRank: "Connoisseur",
    image: "/api/placeholder/64/64",
  },
  "Wood Word": {
    name: "Wood Word",
    wallet: "0xABC...789",
    joinedDate: "27 May, 2025",
    readingRank: "Scholar",
    image: "/api/placeholder/64/64",
  },
};

const UserProfilePage = () => {
  const params = useParams();
  const readerId = decodeURIComponent(params.id as string);
  const reader = mockReaders[readerId] || mockReaders["Jane Doe"];
  const [suspendModalOpen, setSuspendModalOpen] = useState(false);

  const [activeTab, setActiveTab] = useState("Library");
  const [activeFilter, setActiveFilter] = useState("All");

  const setShowModal = (show: boolean) => {
    setSuspendModalOpen(show);
  };

  const stats = [
    { label: "Following", value: "4", color: "text-blue-600" },
    {
      label: "Average Session",
      value: "45",
      unit: "Minutes",
      color: "text-blue-600",
    },
    {
      label: "Completion Rate",
      value: "4",
      unit: "Hours",
      color: "text-blue-600",
    },
    {
      label: "Last Seen",
      value: "14",
      unit: "Hours Ago",
      color: "text-blue-600",
    },
  ];

  const libraryStats = [
    { label: "Total Books Purchased", value: "24" },
    { label: "Regular Book", value: "12" },
    { label: "NFT Editions", value: "4" },
    { label: "Series", value: "8" },
    { label: "Collections", value: "3" },
    { label: "Read", value: "3" },
    { label: "Progress", value: "3" },
    { label: "Unread", value: "3" },
  ];

  const books = [
    {
      id: 1,
      title: "Native Invisibility",
      author: "Danni Collins",
      rating: 4.5,
      image: "/api/placeholder/80/120",
      isNFT: false,
      views: null,
    },
    {
      id: 2,
      title: "Native Invisibility",
      author: "Danni Collins",
      rating: 4.5,
      image: "/api/placeholder/80/120",
      isNFT: false,
      views: 4,
    },
    {
      id: 3,
      title: "Native Invisibility",
      author: "Danni Collins",
      rating: 4.5,
      image: "/api/placeholder/80/120",
      isNFT: true,
      views: null,
    },
    {
      id: 4,
      title: "Native Invisibility",
      author: "Danni Collins",
      rating: 4.5,
      image: "/api/placeholder/80/120",
      isNFT: false,
      views: 4,
    },
    {
      id: 5,
      title: "Native Invisibility",
      author: "Danni Collins",
      rating: 4.5,
      image: "/api/placeholder/80/120",
      isNFT: false,
      views: null,
    },
    {
      id: 6,
      title: "Native Invisibility",
      author: "Danni Collins",
      rating: 4.5,
      image: "/api/placeholder/80/120",
      isNFT: false,
      views: 4,
    },
    {
      id: 7,
      title: "Native Invisibility",
      author: "Danni Collins",
      rating: 4.5,
      image: "/api/placeholder/80/120",
      isNFT: false,
      views: null,
    },
    {
      id: 8,
      title: "Native Invisibility",
      author: "Danni Collins",
      rating: 4.5,
      image: "/api/placeholder/80/120",
      isNFT: true,
      views: null,
    },
  ];

  type Book = {
    id: number;
    title: string;
    author: string;
    rating: number;
    image: string;
    isNFT: boolean;
    views: number | null;
  };

  const BookCard = ({ book }: { book: Book }) => (
    <div className=" bg-white rounded-lg p-4 shadow-sm border border-gray-200 relative">
      {book.isNFT && (
        <div className="absolute top-2 left-2 bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded">
          NFT
        </div>
      )}
      <div className="flex flex-row gap-[2rem] items-center space-y-3">
        <Image src="/Cover.png" alt={book.title} width={80} height={120} />
        <div className="flex flex-col justify-between">
          <h3 className="text-base font-bold text-gray-700 mb-1">
            {book.title}
          </h3>
          <div className="flex items-center space-x-1 mb-2">
            <p className="text-xs text-gray-500">By {book.author} </p>
            <Image
              src="/verified.svg"
              alt="Verified Icon"
              width={10}
              height={10}
            />
          </div>
          <div className="flex items-right space-x-1">
            <Star className="w-3 h-3 text-yellow-400 fill-current" />
            <span className="text-xs text-gray-600">{book.rating}</span>
            {book.views && (
              <>
                <span className="text-xs text-gray-400 mx-1">•</span>
                <span className="text-xs text-gray-600">{book.views}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Header title="Reader's Profile" />
      {suspendModalOpen && (
        <div className="min-h-screen h-full p-4 md:p-6 absolute top-0 left-0 right-0 z-50">
          <SuspendUserModal setShow={setShowModal} />
        </div>
      )}
      <div className="min-h-screen bg-gray-50 p-4 md:p-6">
        <div className="w-full mx-auto">
          {/* Header Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <div className="w-24 h-24 bg-gray-300 rounded-full overflow-hidden">
                  <Image
                    src={reader1_img}
                    alt={reader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                    {reader.name}
                  </h1>
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-sm text-gray-500">{reader.wallet}</p>
                    <Image
                      src="/paste-icon.svg"
                      alt="Copy Wallet Address"
                      width={16}
                      height={16}
                    />
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-gray-500">Rank:</span>
                    <span className="bg-[#572A1229] text-[#572A12] text-xs px-4 outline-2 border-[#572A12] py-1 rounded-full">
                      {reader.readingRank}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    Joined: {reader.joinedDate}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <Image
                    src="/message_icon.png"
                    alt="Message Icon"
                    width={40}
                    height={40}
                  />
                </button>
                <button
                  onClick={() => setSuspendModalOpen(true)}
                  className="bg-transparent px-4 py-2 rounded-md text-sm text-red-400 hover:text-white hover:bg-red-600 border border-[#FF67823D]"
                >
                  Suspend User
                </button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className=" border border-[#E9F7FF] p-4 rounded-lg"
                >
                  <div className="text-sm text-gray-500 mt-1 mb-2">
                    {stat.label}
                  </div>

                  <div className={`text-base font-bold ${stat.color}`}>
                    {stat.value}
                    {stat.unit && (
                      <span className="text-sm font-normal ml-1">
                        {stat.unit}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            {/* Tab Navigation */}
            <div className="border-b border-gray-200">
              <div className="flex flex-wrap bg-[#E9F7FF] p-4">
                {[
                  "Library",
                  "Transactions",
                  "Direct Notification",
                  "Reviews & Feedback",
                ].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-3 text-xs font-medium w-fit h-fit border-none outline-none transition-colors ${
                      activeTab === tab
                        ? "border-none outline-none text-white bg-[#0061FF] rounded-xl"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Library Content */}
            {activeTab === "Library" && (
              <div className="p-6">
                {/* Library Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4  gap-4 mb-6">
                  {libraryStats.map((stat, index) => (
                    <div
                      key={index}
                      className=" border border-[#E9F7FF] p-6 rounded-lg"
                    >
                      <div className="text-xs text-gray-500">{stat.label}</div>

                      <div className="text-lg font-bold text-gray-700">
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap items-center gap-4 mb-6 bg-[#F6F6F6] p-4 rounded-lg">
                  <div className="flex space-x-1">
                    {["All", "Regular", "NFT Edition", "Series"].map(
                      (filter) => (
                        <button
                          key={filter}
                          onClick={() => setActiveFilter(filter)}
                          className={`px-3 py-1 text-sm rounded transition-colors ${
                            activeFilter === filter
                              ? "bg-gray-200 text-gray-900"
                              : "text-gray-500 hover:text-gray-700"
                          }`}
                        >
                          {filter}
                        </button>
                      )
                    )}
                  </div>
                  <div className="flex items-center max-w-xs border border-gray-300 h-[2rem] w-fit p-4">
                    <Search className="text-gray-400 h-4 w-4" />
                    <input
                      type="text"
                      placeholder="Search"
                      className="px-3 py-1 text-sm rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Books Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {books.map((book) => (
                    <BookCard key={book.id} book={book} />
                  ))}
                </div>
              </div>
            )}

            {/* Direct Notification Content */}
            {activeTab === "Direct Notification" && (
              <DirectNotificationContent />
            )}

            {/* Transaction Content */}
            {activeTab === "Transactions" && <TransactionContent />}

            {/* Reviews & Feedback Content */}
            {activeTab === "Reviews & Feedback" && (
              <ReviewsAndFeedbackContent />
            )}

            {/* Other Tab Contents */}
            {activeTab !== "Library" &&
              activeTab !== "Direct Notification" &&
              activeTab !== "Transactions" &&
              activeTab !== "Reviews & Feedback" && (
                <div className="p-6">
                  <div className="text-center text-gray-500 py-8">
                    {activeTab} content would go here
                  </div>
                </div>
              )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfilePage;

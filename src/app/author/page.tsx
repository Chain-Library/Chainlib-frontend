"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bell, BadgeCheck } from "lucide-react";
import { FiBook, FiDollarSign, FiUsers, FiEye } from "react-icons/fi";
import ProfileCompletionModal from "@/components/common/Modal";
import SearchBar from "@/components/common/SearchBar";

function AuthorDashboard() {
  const [showProfileModal, setShowProfileModal] = useState(true);
  const [showProfileAlert, setShowProfileAlert] = useState(true);

  // Mock data - would be fetched from API
  const stats = {
    booksPublished: 12,
    totalEarning: 817.0,
    totalReads: 12,
    followers: 12,
  };

  const recentBooks = [
    {
      id: 1,
      title: "Native Invisibility",
      author: "Darrin Collins",
      price: 10,
      rating: 4.5,
      imageUrl: "/bookCover.png",
      verified: true,
    },
    {
      id: 2,
      title: "Native Invisibility",
      author: "Darrin Collins",
      price: 10,
      rating: 4.5,
      imageUrl: "/bookCover.png",
      verified: true,
    },
    {
      id: 3,
      title: "Native Invisibility",
      author: "Darrin Collins",
      price: 10,
      rating: 4.5,
      imageUrl: "/bookCover.png",
      verified: false,
    },
    {
      id: 4,
      title: "Native Invisibility",
      author: "Darrin Collins",
      price: 10,
      rating: 4.5,
      imageUrl: "/bookCover.png",
      verified: true,
    },
  ];

  const trendingBooks = [
    {
      id: 1,
      title: "Native Invisibility",
      author: "Darrin Collins",
      price: 10,
      rating: 4.5,
      imageUrl: "/bookCover.png",
      verified: true,
    },
    {
      id: 2,
      title: "Native Invisibility",
      author: "Darrin Collins",
      price: 10,
      rating: 4.5,
      imageUrl: "/bookCover.png",
      verified: true,
    },
    {
      id: 3,
      title: "Native Invisibility",
      author: "Darrin Collins",
      price: 10,
      rating: 4.5,
      imageUrl: "/bookCover.png",
      verified: false,
    },
    {
      id: 4,
      title: "Native Invisibility",
      author: "Darrin Collins",
      price: 10,
      rating: 4.5,
      imageUrl: "/bookCover.png",
      verified: true,
    },
  ];

  const topAuthors = [
    {
      id: 1,
      name: "Elizabeth Joe",
      imageUrl: "/authorImg.png",
      verified: true,
    },
    { id: 2, name: "Alex Paul", imageUrl: "/authorImg2.png", verified: true },
    {
      id: 3,
      name: "Samson Tersoor",
      imageUrl: "/authorImg3.png",
      verified: true,
    },
    { id: 4, name: "Vamika Maya", imageUrl: "/authorImg4.png", verified: true },
  ];

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-8 px-4">
        <SearchBar placeholder="Search for books, authors..." />

        <div className="flex items-center justify-center space-x-4">
          {/* Notification bell */}
          <button className="text-gray-500 hover:text-gray-700 relative">
            <Bell className="w-5 h-5 text-[#5D5D5D]" fill="currentColor" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
              1
            </span>
          </button>

          {/* Profile */}
          <div className="flex items-center  border border-[#E7E7E7] rounded-md p-2">
            <div className="rounded-md overflow-hidden border border-gray-200">
              <Image
                src="/profile.png"
                alt="Profile"
                width={32}
                height={32}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="ml-2">
              <p className="text-sm font-medium text-gray-800">Joseph Yanum</p>
              <p className="text-xs text-gray-500">@joeyanum</p>
            </div>
            <BadgeCheck className="w-5 h-5 ml-3 text-[#218DFF]" />
          </div>
        </div>
      </div>

      {/* Header with Title */}
      <div className="rounded-lg p-8 mb-6 relative overflow-hidden flex flex-col md:flex-row justify-between items-center">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/headerImg.png"
            alt="Header background"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className="z-10">
          <h1 className="text-2xl md:text-3xl font-bold text-[#3D3D3D]">
            Your Words
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-[#3D3D3D]/90">
            Deserve the World
          </h2>
        </div>
        <div className="z-10">
          <Link href="/author/publish">
            <button className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-md">
              Publish Your First Book
            </button>
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-sm text-gray-500">Books Published</h3>
              <p className="text-2xl font-bold text-blue-600">
                {stats.booksPublished}
              </p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <FiBook className="text-blue-500" size={20} />
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-sm text-gray-500">Total Earning</h3>
              <p className="text-2xl font-bold text-yellow-600">
                ${stats.totalEarning.toFixed(2)}
              </p>
            </div>
            <div className="p-3 bg-yellow-100 rounded-full">
              <FiDollarSign className="text-yellow-500" size={20} />
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-sm text-gray-500">Total Reads</h3>
              <p className="text-2xl font-bold text-green-600">
                {stats.totalReads}
              </p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <FiEye className="text-green-500" size={20} />
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-sm text-gray-500">Followers</h3>
              <p className="text-2xl font-bold text-pink-600">
                {stats.followers}
              </p>
            </div>
            <div className="p-3 bg-pink-100 rounded-full">
              <FiUsers className="text-pink-500" size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Profile Completion Alert */}
      {showProfileAlert && (
        <div className="bg-[#FBBC050A]/40 border border-yellow-100 rounded-lg p-4 mb-8 flex items-start justify-between">
          <div className="flex items-center">
            <span className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-full bg-yellow-100 text-yellow-600 mr-3">
              <span>!</span>
            </span>
            <p className="text-sm text-yellow-700">
              Just a few more details and your profile will be complete!
              <br />
              <span className="text-xs">Let&#39;s get this done so you can enjoy all the features.</span>
            </p>
          </div>
          <button
            className="px-4 py-2 text-sm text-[#454545] bg-[#FBBC0533]/20 border border-yellow-200 rounded-full hover:bg-yellow-50 transition-colors"
            onClick={() => setShowProfileModal(true)}
          >
            Complete Set-up
          </button>
        </div>
      )}

      {/* Recent Published Books */}
      <div className="mb-8 bg-white rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">
            Recent Published Books
          </h2>
          <Link
            href="/author/publications"
            className="text-sm text-[#E7E7E7] border border-[#E7E7E7] rounded-full px-4 py-1"
          >
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100"
            >
              <div className="relative flex justify-center items-center h-48 w-full bg-transparent">
                <Image
                  src={book.imageUrl}
                  alt={book.title}
                  width={100}
                  height={100}
                  className="w-1/2 h-1/2"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800">{book.title}</h3>
                <div className="flex items-center">
                  <p className="text-sm text-gray-600">By {book.author}</p>
                  {book.verified && (
                    <div className="ml-1">
                      <Image
                        src="/verified.svg"
                        alt="Verified Author"
                        width={16}
                        height={16}
                      />
                    </div>
                  )}
                </div>
                <div className="flex justify-between items-center mt-2">
                  <p className="font-bold text-gray-900">${book.price}</p>
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">★</span>
                    <span className="text-sm text-gray-600">{book.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Books */}
      <div className="mb-8 bg-white rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Trending Books</h2>
          <Link
            href="/books/trending"
            className="text-sm text-[#E7E7E7] border border-[#E7E7E7] rounded-full px-4 py-1"
          >
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100"
            >
              <div className="relative flex justify-center items-center h-48 w-full bg-transparent">
                <Image
                  src={book.imageUrl}
                  alt={book.title}
                  width={100}
                  height={100}
                  className="w-1/2 h-1/2"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800">{book.title}</h3>
                <div className="flex items-center">
                  <p className="text-sm text-gray-600">By {book.author}</p>
                  {book.verified && (
                    <div className="ml-1">
                      <Image
                        src="/verified.svg"
                        alt="Verified Author"
                        width={16}
                        height={16}
                      />
                    </div>
                  )}
                </div>
                <div className="flex justify-between items-center mt-2">
                  <p className="font-bold text-gray-900">${book.price}</p>
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">★</span>
                    <span className="text-sm text-gray-600">{book.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Authors of the Week */}
      <div className="mb-8 bg-white rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">
            Top Authors for the Week
          </h2>
          <Link
            href="/community/authors"
            className="text-sm text-[#E7E7E7] border border-[#E7E7E7] rounded-full px-4 py-1"
          >
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {topAuthors.map((author) => (
            <div
              key={author.id}
              className="bg-white rounded-lg overflow-hidden border border-gray-100 h-72 relative"
            >
              {/* Full size author image with overlay */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={author.imageUrl}
                  alt={author.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="z-0"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              </div>

              {/* Author name and verified tag positioned at the bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                <div className="flex items-center justify-center">
                  <h3 className="font-semibold text-white">{author.name}</h3>
                  <div className="ml-1.5">
                    <Image
                      src="/verified.svg"
                      alt="Verified Author"
                      width={16}
                      height={16}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Profile Completion Modal */}
      <ProfileCompletionModal
        isOpen={showProfileModal}
        onClose={() => setShowProfileModal(false)}
      />
    </div>
  );
}

export default AuthorDashboard;

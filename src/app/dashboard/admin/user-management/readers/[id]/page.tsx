"use client"

import React, { useState } from 'react';
import { MessageCircle, Star, BookOpen } from 'lucide-react';
import { useParams } from 'next/navigation';

type Reader = {
  name: string;
  wallet: string;
  joinedDate: string;
  readingRank: string;
  image: string;
};

const mockReaders: { [key: string]: Reader } = {
  'Jane Doe': {
    name: 'Jane Doe',
    wallet: '0xABC...789',
    joinedDate: '27 May, 2025',
    readingRank: 'Bookworm',
    image: '/api/placeholder/64/64',
  },
  'Ole Paul': {
    name: 'Ole Paul',
    wallet: '0xABC...789',
    joinedDate: '7 June, 2025',
    readingRank: 'Enthusiast',
    image: '/api/placeholder/64/64',
  },
  'Aminu Sani': {
    name: 'Aminu Sani',
    wallet: '0xABC...789',
    joinedDate: '27 May, 2025',
    readingRank: 'Scholar',
    image: '/api/placeholder/64/64',
  },
  'Faith Adamu': {
    name: 'Faith Adamu',
    wallet: '0xABC...789',
    joinedDate: '7 June, 2025',
    readingRank: 'Connoisseur',
    image: '/api/placeholder/64/64',
  },
  'Wood Word': {
    name: 'Wood Word',
    wallet: '0xABC...789',
    joinedDate: '27 May, 2025',
    readingRank: 'Scholar',
    image: '/api/placeholder/64/64',
  },
};

const UserProfilePage = () => {
  const params = useParams();
  const readerId = decodeURIComponent(params.id as string);
  const reader = mockReaders[readerId] || mockReaders['Jane Doe'];

  const [activeTab, setActiveTab] = useState('Library');
  const [activeFilter, setActiveFilter] = useState('All');

  const stats = [
    { label: 'Following', value: '4', color: 'text-blue-600' },
    { label: 'Average Session', value: '45', unit: 'Minutes', color: 'text-blue-600' },
    { label: 'Completion Rate', value: '4', unit: 'Hours', color: 'text-blue-600' },
    { label: 'Last Seen', value: '14', unit: 'Hours Ago', color: 'text-blue-600' }
  ];

  const libraryStats = [
    { label: 'Total Books Purchased', value: '24' },
    { label: 'Regular Book', value: '12' },
    { label: 'NFT Editions', value: '4' },
    { label: 'Series', value: '8' },
    { label: 'Collections', value: '3' },
    { label: 'Read', value: '3' },
    { label: 'Progress', value: '3' },
    { label: 'Unread', value: '3' }
  ];

  const books = [
    {
      id: 1,
      title: 'Native Invisibility',
      author: 'Danni Collins',
      rating: 4.5,
      image: '/api/placeholder/80/120',
      isNFT: false,
      views: null
    },
    {
      id: 2,
      title: 'Native Invisibility',
      author: 'Danni Collins',
      rating: 4.5,
      image: '/api/placeholder/80/120',
      isNFT: false,
      views: 4
    },
    {
      id: 3,
      title: 'Native Invisibility',
      author: 'Danni Collins',
      rating: 4.5,
      image: '/api/placeholder/80/120',
      isNFT: true,
      views: null
    },
    {
      id: 4,
      title: 'Native Invisibility',
      author: 'Danni Collins',
      rating: 4.5,
      image: '/api/placeholder/80/120',
      isNFT: false,
      views: 4
    },
    {
      id: 5,
      title: 'Native Invisibility',
      author: 'Danni Collins',
      rating: 4.5,
      image: '/api/placeholder/80/120',
      isNFT: false,
      views: null
    },
    {
      id: 6,
      title: 'Native Invisibility',
      author: 'Danni Collins',
      rating: 4.5,
      image: '/api/placeholder/80/120',
      isNFT: false,
      views: 4
    },
    {
      id: 7,
      title: 'Native Invisibility',
      author: 'Danni Collins',
      rating: 4.5,
      image: '/api/placeholder/80/120',
      isNFT: false,
      views: null
    },
    {
      id: 8,
      title: 'Native Invisibility',
      author: 'Danni Collins',
      rating: 4.5,
      image: '/api/placeholder/80/120',
      isNFT: true,
      views: null
    }
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
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 relative">
      {book.isNFT && (
        <div className="absolute top-2 left-2 bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded">
          NFT
        </div>
      )}
      <div className="flex flex-col items-center space-y-3">
        <div className="w-20 h-28 bg-orange-400 rounded-md flex items-center justify-center">
          <BookOpen className="w-8 h-8 text-white" />
        </div>
        <div className="text-center">
          <h3 className="text-sm font-medium text-gray-900 mb-1">{book.title}</h3>
          <p className="text-xs text-gray-500 mb-2">By {book.author}</p>
          <div className="flex items-center justify-center space-x-1">
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
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="w-full mx-auto">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-16 h-16 bg-gray-300 rounded-full overflow-hidden">
                <img 
                  src={reader.image} 
                  alt={reader.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  {reader.name}
                  <span className="w-4 h-4 bg-green-500 rounded-full"></span>
                </h1>
                <p className="text-sm text-gray-500">{reader.wallet}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-gray-500">Rank:</span>
                  <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded">
                    {reader.readingRank}
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-1">Joined: {reader.joinedDate}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <MessageCircle className="w-5 h-5" />
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md text-sm hover:bg-red-600">
                Suspend User
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-2xl font-bold ${stat.color}`}>
                  {stat.value}
                  {stat.unit && <span className="text-sm font-normal ml-1">{stat.unit}</span>}
                </div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <div className="flex flex-wrap">
              {['Library', 'Transactions', 'Direct Notification', 'Reviews & Feedback'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === tab
                      ? 'border-blue-500 text-blue-600 bg-blue-50'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Library Content */}
          {activeTab === 'Library' && (
            <div className="p-6">
              {/* Library Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-6">
                {libraryStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex space-x-1">
                  {['All', 'Regular', 'NFT Edition', 'Series'].map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      className={`px-3 py-1 text-sm rounded transition-colors ${
                        activeFilter === filter
                          ? 'bg-gray-200 text-gray-900'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
                <div className="flex-1 max-w-xs">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Books Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {books.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            </div>
          )}

          {/* Other Tab Contents */}
          {activeTab !== 'Library' && (
            <div className="p-6">
              <div className="text-center text-gray-500 py-8">
                {activeTab} content would go here
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;

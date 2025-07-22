"use client";

import type React from "react";
import { useState } from "react";
import {
  Search,
  ChevronDown,
  BookOpen,
  Users,
  Bookmark,
  CheckCircle,
  Clock,
  Eye,
} from "lucide-react";
import Image from "next/image";
import { BookModal } from "../components/book-modal";
import imgbook from "../../../../../public/Cover.png";
import { Header } from "@/components/dashboard/header";
import { SeriesModal } from "../components/series-modal";
import { CollectionModal } from "../components/collection-modal";

interface StatCard {
  title: string;
  value: number;
  icon: React.ReactNode;
  color: string;
}

interface Book {
  id: string;
  title: string;
  author: string;
  rating: number;
  status: "read" | "unread" | "progress";
  progress?: number;
  isNFT?: boolean;
  likes?: number;
  verified?: boolean;
}

interface Collection {
  id: string;
  title: string;
  rating: number;
  likes: number;
  owners: number;
  books: string[];
}

const statCards: StatCard[] = [
  {
    title: "Total Books",
    value: 24,
    icon: <BookOpen className="w-5 h-5" />,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Regular Book",
    value: 12,
    icon: <BookOpen className="w-5 h-5" />,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "NTF Editions",
    value: 4,
    icon: <Bookmark className="w-5 h-5" />,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Series",
    value: 8,
    icon: <Users className="w-5 h-5" />,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Collections",
    value: 3,
    icon: <Bookmark className="w-5 h-5" />,
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    title: "Read",
    value: 3,
    icon: <CheckCircle className="w-5 h-5" />,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Progress",
    value: 3,
    icon: <Clock className="w-5 h-5" />,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Unread",
    value: 3,
    icon: <Eye className="w-5 h-5" />,
    color: "bg-blue-100 text-blue-600",
  },
];

const recentBooks: Book[] = [
  {
    id: "1",
    title: "Native Invisibility",
    author: "Darrin Collins",
    rating: 4.5,
    status: "progress",
    progress: 5,
    verified: true,
  },
  {
    id: "2",
    title: "Peace and Hate",
    author: "Darrin Collins",
    rating: 4.5,
    status: "unread",
    isNFT: true,
    verified: true,
  },
  {
    id: "3",
    title: "Dark World",
    author: "Darrin Collins",
    rating: 4.5,
    status: "unread",
    likes: 5,
    verified: true,
  },
  {
    id: "4",
    title: "Native Invisibility",
    author: "Darrin Collins",
    rating: 4.5,
    status: "progress",
    progress: 5,
    verified: true,
  },
];

const regularBooks: Book[] = [
  {
    id: "5",
    title: "Native Invisibility",
    author: "Darrin Collins",
    rating: 4.5,
    status: "progress",
    progress: 5,
    verified: true,
  },
  {
    id: "6",
    title: "Native Invisibility",
    author: "Darrin Collins",
    rating: 4.5,
    status: "read",
    verified: true,
  },
  {
    id: "7",
    title: "Native Invisibility",
    author: "Darrin Collins",
    rating: 4.5,
    status: "unread",
    verified: true,
  },
  {
    id: "8",
    title: "Native Invisibility",
    author: "Darrin Collins",
    rating: 4.5,
    status: "read",
    verified: true,
  },
];

const nftBooks: Book[] = [
  {
    id: "9",
    title: "Peace and Hate",
    author: "Darrin Collins",
    rating: 4.5,
    status: "progress",
    progress: 97,
    isNFT: true,
    verified: true,
  },
  {
    id: "10",
    title: "Peace and Hate",
    author: "Darrin Collins",
    rating: 4.5,
    status: "read",
    isNFT: true,
    verified: true,
  },
  {
    id: "11",
    title: "Peace and Hate",
    author: "Darrin Collins",
    rating: 4.5,
    status: "unread",
    isNFT: true,
    verified: true,
  },
  {
    id: "12",
    title: "Peace and Hate",
    author: "Darrin Collins",
    rating: 4.5,
    status: "unread",
    isNFT: true,
    verified: true,
  },
];

const seriesBooks: Book[] = [
  {
    id: "13",
    title: "Love at Night",
    author: "Darrin Collins",
    rating: 4.5,
    status: "read",
    likes: 4,
    verified: true,
  },
  {
    id: "14",
    title: "Love at Night",
    author: "Darrin Collins",
    rating: 4.5,
    status: "progress",
    progress: 46,
    likes: 5,
    verified: true,
  },
  {
    id: "15",
    title: "Dark World",
    author: "Darrin Collins",
    rating: 4.5,
    status: "unread",
    likes: 5,
    verified: true,
  },
  {
    id: "16",
    title: "Peace and Hate",
    author: "Darrin Collins",
    rating: 4.5,
    status: "progress",
    progress: 79,
    likes: 5,
    verified: true,
  },
];

const collections: Collection[] = [
  {
    id: "1",
    title: "My Best Boook",
    rating: 4.5,
    likes: 5,
    owners: 10,
    books: ["book1", "book2", "book3"],
  },
  {
    id: "2",
    title: "My Best Boook",
    rating: 4.5,
    likes: 5,
    owners: 10,
    books: ["book1", "book2", "book3"],
  },
  {
    id: "3",
    title: "My Best Boook",
    rating: 4.5,
    likes: 5,
    owners: 10,
    books: ["book1", "book2", "book3"],
  },
  {
    id: "4",
    title: "My Best Boook",
    rating: 4.5,
    likes: 5,
    owners: 10,
    books: ["book1", "book2", "book3"],
  },
];

export default function BookLibraryDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [bookType, setBookType] = useState("Book Type");
  const [genre, setGenre] = useState("Genre");
  const [bookTypeOpen, setBookTypeOpen] = useState(false);
  const [genreOpen, setGenreOpen] = useState(false);
  const [isSeriesModalOpen, setIsSeriesModalOpen] = useState(false);
  const [isCollectionModalOpen, setIsCollectionModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openBookModal = (book: Book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const closeBookModal = () => {
    setSelectedBook(null);
    setIsModalOpen(false);
  };
  const openSeriesModal = () => {
    setIsSeriesModalOpen(true);
  };

  const closeSeriesModal = () => {
    setIsSeriesModalOpen(false);
  };

  const handleSeriesBookClick = (book: any) => {
    // Convert series book to regular book format and open book modal
    const convertedBook = {
      ...book,
      likes: undefined, // Series books don't have likes in the regular book format
    };
    setSelectedBook(convertedBook);
    setIsSeriesModalOpen(false);
    setIsModalOpen(true);
  };

  const openCollectionModal = () => {
    setIsCollectionModalOpen(true);
  };

  const closeCollectionModal = () => {
    setIsCollectionModalOpen(false);
  };

  const handleCollectionBookClick = (book: any) => {
    // Convert collection book to regular book format and open book modal
    const convertedBook = {
      ...book,
      likes: undefined, // Collection books don't have likes in the regular book format
    };
    setSelectedBook(convertedBook);
    setIsCollectionModalOpen(false);
    setIsModalOpen(true);
  };

  return (
    <>
      <Header title="Library"  />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="What are we looking for"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 h-12 bg-white border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex gap-3">
              {/* Book Type Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setBookTypeOpen(!bookTypeOpen)}
                  className="h-12 px-4 bg-white border border-gray-200 rounded-xl flex items-center gap-2 text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {bookType}
                  <ChevronDown className="h-4 w-4" />
                </button>
                {bookTypeOpen && (
                  <div className="absolute top-full mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    <button
                      onClick={() => {
                        setBookType("All Books");
                        setBookTypeOpen(false);
                      }}
                      className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                    >
                      All Books
                    </button>
                    <button
                      onClick={() => {
                        setBookType("Regular Books");
                        setBookTypeOpen(false);
                      }}
                      className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50"
                    >
                      Regular Books
                    </button>
                    <button
                      onClick={() => {
                        setBookType("NFT Editions");
                        setBookTypeOpen(false);
                      }}
                      className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 last:rounded-b-lg"
                    >
                      NFT Editions
                    </button>
                  </div>
                )}
              </div>

              {/* Genre Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setGenreOpen(!genreOpen)}
                  className="h-12 px-4 bg-white border border-gray-200 rounded-xl flex items-center gap-2 text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {genre}
                  <ChevronDown className="h-4 w-4" />
                </button>
                {genreOpen && (
                  <div className="absolute top-full mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    <button
                      onClick={() => {
                        setGenre("Fiction");
                        setGenreOpen(false);
                      }}
                      className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 first:rounded-t-lg"
                    >
                      Fiction
                    </button>
                    <button
                      onClick={() => {
                        setGenre("Non-Fiction");
                        setGenreOpen(false);
                      }}
                      className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50"
                    >
                      Non-Fiction
                    </button>
                    <button
                      onClick={() => {
                        setGenre("Mystery");
                        setGenreOpen(false);
                      }}
                      className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50"
                    >
                      Mystery
                    </button>
                    <button
                      onClick={() => {
                        setGenre("Romance");
                        setGenreOpen(false);
                      }}
                      className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 last:rounded-b-lg"
                    >
                      Romance
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {statCards.map((card, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow p-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded-lg ${card.color}`}>
                    {card.icon}
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 font-medium">
                    {card.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {card.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Recently Purchased Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Recently Purchased
              </h2>
              <button className="text-gray-500 hover:text-gray-700 text-sm font-medium border rounded-full py-3 px-5">
                View All →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recentBooks.map((book) => (
                <div
                  key={book.id}
                  onClick={() => openBookModal(book)}
                  className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden cursor-pointer"
                >
                  <div className="relative">
                    <div className="aspect-[3/4] bg-gray-100 flex items-center justify-center">
                      <Image
                        src={imgbook}
                        alt={book.title}
                        width={180}
                        height={240}
                        className="object-cover rounded-t-xl"
                      />
                    </div>

                    {/* Status Badges */}
                    <div className="absolute top-3 left-3 flex gap-2">
                      {book.status === "progress" && book.progress && (
                        <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium">
                          {book.progress}% Read
                        </span>
                      )}
                      {book.status === "unread" && (
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full font-medium">
                          Unread
                        </span>
                      )}
                      {book.isNFT && (
                        <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full font-medium">
                          NFT
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                      {book.title}
                    </h3>
                    <div className="flex items-center gap-1 mb-3">
                      <p className="text-sm text-gray-600">By {book.author}</p>
                      {book.verified && (
                        <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <div className="flex text-yellow-400">
                          {Array.from(
                            { length: Math.floor(book.rating) },
                            (_, i) => (
                              <span key={i}>★</span>
                            )
                          )}
                        </div>
                        <span className="text-sm text-gray-600">
                          {book.rating}
                        </span>
                      </div>

                      {book.likes && (
                        <div className="flex items-center gap-1 text-gray-500">
                          <span className="text-sm">{book.likes}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Regular Books Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Regular Books
              </h2>
              <button className="text-gray-500 hover:text-gray-700 text-sm font-medium border rounded-full py-3 px-5">
                View All →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {regularBooks.map((book) => (
                <div
                  key={book.id}
                  onClick={() => openBookModal(book)}
                  className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden cursor-pointer"
                >
                  <div className="relative">
                    <div className="aspect-[3/4] bg-gray-100 flex items-center justify-center">
                      <Image
                        src={imgbook}
                        alt={book.title}
                        width={180}
                        height={240}
                        className="object-cover rounded-t-xl"
                      />
                    </div>

                    {/* Status Badges */}
                    <div className="absolute top-3 left-3 flex gap-2">
                      {book.status === "progress" && book.progress && (
                        <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium">
                          {book.progress}% Read
                        </span>
                      )}
                      {book.status === "read" && (
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                          Completed
                        </span>
                      )}
                      {book.status === "unread" && (
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full font-medium">
                          Unread
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                      {book.title}
                    </h3>
                    <div className="flex items-center gap-1 mb-3">
                      <p className="text-sm text-gray-600">By {book.author}</p>
                      {book.verified && (
                        <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <div className="flex text-yellow-400">
                          {Array.from(
                            { length: Math.floor(book.rating) },
                            (_, i) => (
                              <span key={i}>★</span>
                            )
                          )}
                        </div>
                        <span className="text-sm text-gray-600">
                          {book.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* NFT Edition Section */}
          <div className="mb-8 bg-blue-900 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">NFT Edition</h2>
              <button className="text-white border border-white/20 hover:bg-white/10 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                View All →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {nftBooks.map((book) => (
                <div
                  key={book.id}
                  onClick={() => openBookModal(book)}
                  className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden cursor-pointer"
                >
                  <div className="relative">
                    <div className="aspect-[3/4] bg-gray-100 flex items-center justify-center">
                      <Image
                        src={imgbook}
                        alt={book.title}
                        width={180}
                        height={240}
                        className="object-cover rounded-t-xl"
                      />
                    </div>

                    {/* Status Badges */}
                    <div className="absolute top-3 left-3 flex gap-2">
                      {book.status === "progress" && book.progress && (
                        <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium">
                          {book.progress}% Read
                        </span>
                      )}
                      {book.status === "read" && (
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                          Completed
                        </span>
                      )}
                      {book.status === "unread" && (
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full font-medium">
                          Unread
                        </span>
                      )}
                      {book.isNFT && (
                        <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full font-medium">
                          NFT
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                      {book.title}
                    </h3>
                    <div className="flex items-center gap-1 mb-3">
                      <p className="text-sm text-gray-600">By {book.author}</p>
                      {book.verified && (
                        <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <div className="flex text-yellow-400">
                          {Array.from(
                            { length: Math.floor(book.rating) },
                            (_, i) => (
                              <span key={i}>★</span>
                            )
                          )}
                        </div>
                        <span className="text-sm text-gray-600">
                          {book.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Series Section */}

          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Series</h2>
              <button className="text-gray-500 hover:text-gray-700 text-sm font-medium">
                View All →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {seriesBooks.map((book) => (
                <div
                  key={book.id}
                  onClick={() => openSeriesModal()}
                  className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden cursor-pointer"
                >
                  <div className="relative">
                    <div className="aspect-[3/4] bg-gray-100 flex items-center justify-center">
                      <Image
                        src={imgbook}
                        alt={book.title}
                        width={180}
                        height={240}
                        className="object-cover rounded-t-xl"
                      />
                    </div>

                    {/* Status Badges */}
                    <div className="absolute top-3 left-3 flex gap-2">
                      {book.status === "progress" && book.progress && (
                        <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium">
                          {book.progress}% Read
                        </span>
                      )}
                      {book.status === "read" && (
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                          Completed
                        </span>
                      )}
                      {book.status === "unread" && (
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full font-medium">
                          Unread
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                      {book.title}
                    </h3>
                    <div className="flex items-center gap-1 mb-3">
                      <p className="text-sm text-gray-600">By {book.author}</p>
                      {book.verified && (
                        <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <div className="flex text-yellow-400">
                          {Array.from(
                            { length: Math.floor(book.rating) },
                            (_, i) => (
                              <span key={i}>★</span>
                            )
                          )}
                        </div>
                        <span className="text-sm text-gray-600">
                          {book.rating}
                        </span>
                      </div>

                      {book.likes && (
                        <div className="flex items-center gap-1 text-gray-500">
                          <span className="text-sm">{book.likes}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Collections Section */}

          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Collections
              </h2>
              <button className="text-gray-500 hover:text-gray-700 text-sm font-medium">
                View All →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {collections.map((collection) => (
                <div
                  key={collection.id}
                  onClick={() => openCollectionModal()}
                  className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden cursor-pointer"
                >
                  {/* Collection Books Grid */}
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {/* Top row - 2 books */}
                      <div className="aspect-[3/4] bg-gray-100 rounded-lg flex items-center justify-center">
                        <Image
                          src={imgbook}
                          alt="Book cover"
                          width={90}
                          height={120}
                          className="object-cover rounded-lg"
                        />
                      </div>
                      <div className="aspect-[3/4] bg-gray-100 rounded-lg flex items-center justify-center">
                        <Image
                          src={imgbook}
                          alt="Book cover"
                          width={90}
                          height={120}
                          className="object-cover rounded-lg"
                        />
                      </div>
                      {/* Bottom row - 1 book + Add More */}
                      <div className="aspect-[3/4] bg-gray-100 rounded-lg flex items-center justify-center">
                        <Image
                          src={imgbook}
                          alt="Book cover"
                          width={90}
                          height={120}
                          className="object-cover rounded-lg"
                        />
                      </div>
                      <div className="aspect-[3/4] bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                        <span className="text-xs text-gray-500 text-center">
                          + Add More
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-semibold text-gray-900">
                        {collection.title}
                      </h3>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <div className="flex text-yellow-400">
                            {Array.from(
                              { length: Math.floor(collection.rating) },
                              (_, i) => (
                                <span key={i}>★</span>
                              )
                            )}
                          </div>
                          <span className="text-sm text-gray-600">
                            {collection.rating}
                          </span>
                        </div>

                        <div className="flex items-center gap-3 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <span>{collection.likes}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs">
                                {collection.owners}
                              </span>
                            </div>
                            <span>Owners</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
         
          {/* Book Modal */}
          {isModalOpen && selectedBook && (
            <BookModal book={selectedBook} onClose={closeBookModal} />
          )}

          {/* Series Modal */}
          {isSeriesModalOpen && (
            <SeriesModal
              onClose={closeSeriesModal}
              onBookClick={handleSeriesBookClick}
            />
          )}

          {/* Collection Modal */}
          {isCollectionModalOpen && (
            <CollectionModal
              onClose={closeCollectionModal}
              onBookClick={handleCollectionBookClick}
            />
          )}
        </div>
      </div>
    </>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import imgbook from "../../../public/Cover.png";
import { Star, CheckCircle, ArrowLeft, Share, Heart } from "lucide-react";
import author from "@/assets/images/author1.png";
import crypto from "@/assets/icons/strk.png";
import NavBar from "@/components/landingpage/NavBar";
import Footer from "@/components/landingpage/Footer";

interface BookCard {
  id: string;
  title: string;
  author: string;
  price: number;
  rating: number;
  image: string;
  isVerified?: boolean;
}

interface BookDetails extends BookCard {
  description: string;
  fullDescription: string;
  reviews: number;
  genre: string[];
  pageCount: number;
  language: string;
  datePublished: string;
  isbn: string;
  publisherDescription: string;
  authorBio: string;
  authorImage: string;
  cryptoPrice: string;
}

const bookData: BookCard = {
  id: "1",
  title: "Native Invisibility",
  author: "Darrin Collins",
  price: 10,
  rating: 4.5,
  image: "/book-cover.png",
  isVerified: true,
};

const bookDetails: BookDetails = {
  ...bookData,
  description:
    '"Native Invisibility" delves into the complex and often insidious ways in which indigenous peoples and their unique experiences are rendered unseen and unheard in the modern era.',
  fullDescription:
    '"Native Invisibility" delves into the complex and often insidious ways in which indigenous peoples and their unique experiences are rendered unseen and unheard in the modern era. This comprehensive exploration examines the systematic marginalization of indigenous voices across various sectors of society, from media representation to political discourse, educational curricula to economic opportunities.',
  reviews: 109,
  genre: ["Fiction", "Comic"],
  pageCount: 21,
  language: "English",
  datePublished: "12 April, 2025",
  isbn: "978-3-16-148410-0",
  publisherDescription:
    "Native Invisibility unveils the crucial ways indigenous cultures are often unseen in our modern world. This vital book fosters understanding and action for recognition and justice.",
  authorBio:
    "Darrin Collins is a dedicated researcher and writer deeply committed to exploring issues of cultural visibility, marginalization, and the intersection of identity and technology. His work in Native Invisibility reflects a long-standing interest in amplifying underrepresented voices and fostering a more equitable understanding of diverse experiences in the contemporary world.",
  authorImage: "/placeholder.svg?height=60&width=60",
  cryptoPrice: "193 STRK",
};

const BookDetailsModal = ({
  book,
  isOpen,
  onClose,
}: {
  book: BookDetails;
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <Share className="w-5 h-5" />
            <span>Share</span>
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Book Cover */}
            <div className="flex justify-center">
              <div className="w-80 aspect-[3/4] relative">
                <Image
                  src={imgbook || "/placeholder.svg"}
                  alt={book.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Right Column - Book Details */}
            <div className="space-y-6">
              {/* Title and Author */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {book.title}
                </h1>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-gray-600">By {book.author}</span>
                  {book.isVerified && (
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">
                    {book.rating} of {book.reviews} Review
                  </span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Description
                </h3>
                <p className="text-gray-600 mb-3">
                  {showFullDescription
                    ? book.fullDescription
                    : book.description}
                </p>
                <button
                  onClick={() => setShowFullDescription(!showFullDescription)}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  {showFullDescription ? "Read Less" : "Read More"}
                </button>
              </div>

              {/* Access Type */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Access Type
                </h3>
                <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  One-time Purchase
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-gray-900">
                  ${book.price}
                </span>
                <span className="text-gray-600">
                  <Image
                    src={crypto}
                    alt="Crypto Icon"
                    width={20}
                    height={20}
                    className="inline-block mr-1"
                  />
                  {book.cryptoPrice}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Buy Now
                </button>
                <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Heart className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              <button className="w-full py-3 px-6 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                Start Reading for Free
              </button>
            </div>
          </div>

          {/* Book Details Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8 pt-8 border-t">
            <div>
              <h4 className="font-medium text-gray-900 mb-1">Genre(s)</h4>
              <p className="text-gray-600">{book.genre.join(", ")}</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-1">Page count</h4>
              <p className="text-gray-600">{book.pageCount} Pages</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-1">Language</h4>
              <p className="text-gray-600">{book.language}</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-1">Date published</h4>
              <p className="text-gray-600">{book.datePublished}</p>
            </div>
            <div className="lg:col-span-2">
              <h4 className="font-medium text-gray-900 mb-1">ISBN</h4>
              <p className="text-gray-600">{book.isbn}</p>
            </div>
          </div>

          {/* Publisher and Author Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 pt-8 border-t">
            {/* From the Publisher */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                From the Publisher
              </h3>
              <p className="text-gray-600">{book.publisherDescription}</p>
            </div>

            {/* About the Author */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                About the Author
              </h3>
              <div className="flex items-start gap-4 mb-4">
                <Image
                  src={author}
                  alt={book.author}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium text-gray-900">
                      {book.author}
                    </span>
                    {book.isVerified && (
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                    )}
                  </div>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                    Follow
                  </button>
                </div>
              </div>
              <p className="text-gray-600 text-sm">{book.authorBio}</p>
            </div>
          </div>

          {/* Related Books */}
          <div className="mt-8 pt-8 border-t">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Related Books
                </h3>
                <p className="text-gray-600 mt-1">
                  People who read this also liked
                </p>
              </div>
              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium px-4 py-2 border border-gray-300 rounded-lg transition-colors">
                View All
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={`related-${index}`}
                  className="bg-gray-50 rounded-lg p-4"
                >
                  <div className="aspect-[3/4] mb-3 relative">
                    <Image
                      src={imgbook || "/placeholder.svg"}
                      alt={book.title}
                      fill
                      className="object-cover rounded-md"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm">
                    {book.title}
                  </h4>
                  <div className="flex items-center gap-1 mb-2">
                    <span className="text-xs text-gray-600">
                      By {book.author}
                    </span>
                    {book.isVerified && (
                      <CheckCircle className="w-3 h-3 text-blue-500" />
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-900">
                      ${book.price}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-medium text-gray-700">
                        {book.rating}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Books by Author */}
          <div className="mt-8 pt-8 border-t">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Books by {book.author}
                </h3>
                <p className="text-gray-600 mt-1">
                  Explore other books published by {book.author.split(" ")[0]}
                </p>
              </div>
              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium px-4 py-2 border border-gray-300 rounded-lg transition-colors">
                View All
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={`author-${index}`}
                  className="bg-gray-50 rounded-lg p-4"
                >
                  <div className="aspect-[3/4] mb-3 relative">
                    <Image
                      src={imgbook || "/placeholder.svg"}
                      alt={book.title}
                      fill
                      className="object-cover rounded-md"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm">
                    {book.title}
                  </h4>
                  <div className="flex items-center gap-1 mb-2">
                    <span className="text-xs text-gray-600">
                      By {book.author}
                    </span>
                    {book.isVerified && (
                      <CheckCircle className="w-3 h-3 text-blue-500" />
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-900">
                      ${book.price}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-medium text-gray-700">
                        {book.rating}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BookCardComponent = ({
  book,
  showNFTBadge = false,
}: {
  book: BookCard;
  showNFTBadge?: boolean;
}) => {
  const [selectedBook, setSelectedBook] = useState<BookDetails | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookClick = () => {
    setSelectedBook(bookDetails);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBook(null);
  };

  return (
    <>
      <div
        className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
        onClick={handleBookClick}
      >
        <div className="aspect-[3/4] mb-4 relative">
          <Image
            src={imgbook || "/placeholder.svg"}
            alt={book.title}
            fill
            className="object-cover rounded-md"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
          />
        </div>

        {showNFTBadge && (
          <div className="mb-2">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
              NFT
            </span>
          </div>
        )}

        <h3 className="font-semibold text-gray-900 mb-1">{book.title}</h3>

        <div className="flex items-center gap-1 mb-2">
          <span className="text-sm text-gray-600">By {book.author}</span>
          {book.isVerified && <CheckCircle className="w-4 h-4 text-blue-500" />}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">${book.price}</span>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-gray-700">
              {book.rating}
            </span>
          </div>
        </div>
      </div>

      {/* Book Details Modal */}
      {selectedBook && (
        <BookDetailsModal
          book={selectedBook}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </>
  );
};

const PaginationDots = ({
  total = 4,
  active = 0,
}: {
  total?: number;
  active?: number;
}) => (
  <div className="flex justify-center gap-2 mt-6">
    {Array.from({ length: total }).map((_, index) => (
      <div
        key={index}
        className={`w-2 h-2 rounded-full transition-colors ${
          index === active ? "bg-gray-600" : "bg-gray-300"
        }`}
      />
    ))}
  </div>
);

export default function BookMarketplace() {
  const [activeTab, setActiveTab] = useState("New Release");

  const tabs = ["New Release", "Trending", "NFT Edition", "Explore"];

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-white">
        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab
                    ? "bg-gray-100 text-gray-900 rounded-t-lg"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center py-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Dive Into a{" "}
            <span className="text-blue-600">Wide Range of Books</span> Across
            Genres
          </h1>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          {/* New Release Section */}
          <section className="mb-16">
            <div className="border-l-4 border-blue-500 pl-4 mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                New Release
              </h2>
              <p className="text-gray-600">
                Fresh from the minds of our authors explore the latest books
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, index) => (
                <BookCardComponent key={`new-${index}`} book={bookData} />
              ))}
            </div>
          </section>

          {/* Trending Books Section */}
          <section className="mb-16">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Trending Books
              </h2>
              <p className="text-gray-600">
                Discover what everyone's reading right now
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, index) => (
                <BookCardComponent key={`trending-${index}`} book={bookData} />
              ))}
            </div>
          </section>

          {/* Exclusive NFT Edition Section */}
          <section className="bg-gray-200 rounded-2xl p-6 sm:p-8 lg:p-12 mb-16">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Exclusive NFT Edition
              </h2>
              <p className="text-gray-700 max-w-3xl">
                Own limited-edition digital books with special perks bonus
                content, unique artwork, and collectible value.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, index) => (
                <BookCardComponent
                  key={`nft-${index}`}
                  book={bookData}
                  showNFTBadge
                />
              ))}
            </div>

            <PaginationDots />
          </section>

          {/* Explore Books Section */}
          <section>
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Explore Books
              </h2>
              <p className="text-gray-600">
                Browse diverse genres, discover hidden gems, and find your next
                great read.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, index) => (
                <BookCardComponent key={`explore-${index}`} book={bookData} />
              ))}
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}

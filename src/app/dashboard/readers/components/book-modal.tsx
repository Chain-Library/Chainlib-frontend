"use client"

import { ArrowLeft, MoreHorizontal, Star, X } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { BookReaderModal } from "./book-reader-modal"
import imgbook from "../../../../../public/Cover.png"
import imgbook1 from "../../../../../public/user1.svg"
interface BookModalProps {
  book: {
    id: string
    title: string
    author: string
    rating: number
    status: "read" | "unread" | "progress"
    progress?: number
    isNFT?: boolean
    likes?: number
    verified?: boolean
  }
  onClose: () => void
}

export function BookModal({ book, onClose }: BookModalProps) {
  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  const [isReaderOpen, setIsReaderOpen] = useState(false)

  const openReader = () => {
    setIsReaderOpen(true)
  }

  const closeReader = () => {
    setIsReaderOpen(false)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border-4 border-dashed border-blue-500">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-lg font-semibold">Native Invisible</h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Image
                src={imgbook1}
                alt="Joseph Yanum"
                width={32}
                height={32}
                className="rounded-full"
              />
              <div className="text-sm">
                <div className="flex items-center gap-1">
                  <span className="font-medium">Joseph Yanum</span>
                  <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                </div>
                <div className="text-gray-500">@joeyanum</div>
              </div>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <MoreHorizontal className="w-5 h-5" />
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6">
          {/* Book Info Section */}
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            {/* Book Cover */}
            <div className="flex-shrink-0">
              <Image
                src={imgbook}
                alt={book.title}
                width={240}
                height={320}
                className="rounded-xl shadow-lg"
              />
            </div>

            {/* Book Details */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-gray-600">By {book.author}</span>
                {book.verified && (
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{book.rating}</span>
                </div>
                <span className="text-gray-500">of 109 Review</span>
              </div>

              {/* Access Type */}
              <div className="mb-4">
                <div className="text-sm text-gray-600 mb-1">Access Type</div>
                <div className="text-blue-600 font-medium">One-time Purchase</div>
              </div>

              {/* Reading Progress */}
              {book.status === "progress" && book.progress && (
                <div className="mb-6">
                  <span className="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full font-medium">
                    {book.progress}% Read
                  </span>
                </div>
              )}

              {/* Continue Reading Button */}
              <button
                onClick={openReader}
                className="bg-blue-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors"
              >
                Continue Reading
              </button>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8 border-t border-dashed border-gray-300 pt-8">
            <h3 className="text-lg font-semibold mb-4">Description</h3>
            <p className="text-gray-600 mb-4">
              "Native Invisibility" delves into the complex and often insidious ways in which indigenous peoples and
              their unique experiences are rendered unseen and unheard in the modern era.
            </p>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Read More</button>
          </div>

          {/* Book Details Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 border-t border-dashed border-gray-300 pt-8">
            <div>
              <div className="text-sm text-gray-600 mb-1">Genre(s)</div>
              <div className="text-sm">Fiction</div>
              <div className="text-sm">Comic</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Page count</div>
              <div className="text-sm">21 Pages</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Language</div>
              <div className="text-sm">English</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Date published</div>
              <div className="text-sm">12 April, 2025</div>
            </div>
          </div>

          {/* ISBN */}
          <div className="mb-8 border-t border-dashed border-gray-300 pt-8">
            <div className="text-sm text-gray-600 mb-1">ISBN</div>
            <div className="text-sm">978-3-16-148410-0</div>
          </div>

          {/* From Publisher & About Author */}
          <div className="grid md:grid-cols-2 gap-8 border-t border-dashed border-gray-300 pt-8">
            {/* From the Publisher */}
            <div>
              <h3 className="text-lg font-semibold mb-4">From the Publisher</h3>
              <p className="text-gray-600 text-sm">
                Native Invisibility unveils the crucial ways indigenous cultures are often unseen in our modern world.
                This vital book fosters understanding and action for recognition and justice.
              </p>
            </div>

            {/* About the Author */}
            <div>
              <h3 className="text-lg font-semibold mb-4">About the Author</h3>
              <div className="flex items-start gap-3 mb-4">
                <Image
                  src={imgbook1}
                  alt={book.author}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{book.author}</span>
                      {book.verified && (
                        <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      )}
                    </div>
                    <button className="text-sm border border-gray-300 px-3 py-1 rounded-full hover:bg-gray-50 transition-colors">
                      Follow
                    </button>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Darrin Collins is a dedicated researcher and writer deeply committed to exploring issues of cultural
                visibility, marginalization, and the intersection of identity and technology. His work in Native
                Invisibility reflects a long-standing interest in amplifying underrepresented voices and fostering a
                more equitable understanding of diverse experiences in the contemporary world.
              </p>
            </div>
          </div>
        </div>
        {/* Book Reader Modal */}
        {isReaderOpen && <BookReaderModal book={book} onClose={closeReader} />}
      </div>
    </div>
  )
}

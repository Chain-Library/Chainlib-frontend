"use client"

import { ArrowLeft, Bell, CheckCircle, Star } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"
import imgbook from "../../../../../public/Cover.png";
import imgbook1 from "../../../../../public/user1.svg"

interface SeriesBook {
  id: string
  title: string
  author: string
  rating: number
  status: "read" | "unread" | "progress"
  progress?: number
  verified?: boolean
}

interface SeriesModalProps {
  series: {
    title: string
    totalProgress: number
    totalReviews: number
    rating: number
    bookCount: number
    books: SeriesBook[]
  }
  onClose: () => void
  onBookClick: (book: SeriesBook) => void
}

const seriesData = {
  title: "Love at Night",
  totalProgress: 57,
  totalReviews: 500,
  rating: 4.5,
  bookCount: 4,
  books: [
    {
      id: "series-1",
      title: "Love at Night 1",
      author: "Darrin Collins",
      rating: 4.5,
      status: "read" as const,
      verified: true,
    },
    {
      id: "series-2",
      title: "Love at Night 2",
      author: "Darrin Collins",
      rating: 4.5,
      status: "read" as const,
      verified: true,
    },
    {
      id: "series-3",
      title: "Love at Night 3",
      author: "Darrin Collins",
      rating: 4.5,
      status: "progress" as const,
      progress: 5,
      verified: true,
    },
    {
      id: "series-4",
      title: "Love at Night 4",
      author: "Darrin Collins",
      rating: 4.5,
      status: "unread" as const,
      verified: true,
    },
  ],
}

export function SeriesModal({ onClose, onBookClick }: Omit<SeriesModalProps, "series">) {
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

  const getStatusBadge = (book: SeriesBook) => {
    switch (book.status) {
      case "read":
        return <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium">Completed</span>
      case "progress":
        return (
          <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full font-medium">
            {book.progress}% Read
          </span>
        )
      case "unread":
        return <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-medium">Unread</span>
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-lg font-semibold">Series</h1>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
              <Bell className="w-5 h-5" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
            </button>
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
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div className="text-gray-500">@joeyanum</div>
              </div>
            </div>
          </div>
        </div>

        {/* Series Info */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">{seriesData.title}</h2>

            <div className="flex items-center gap-4">
              <span className="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full font-medium">
                {seriesData.totalProgress}% Read
              </span>
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{seriesData.rating}</span>
                <span className="text-gray-500">of {seriesData.totalReviews} Review</span>
              </div>
              <div className="flex items-center gap-1 text-gray-600">
                <span className="font-medium">{seriesData.bookCount} Series</span>
              </div>
            </div>
          </div>

          {/* Books Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {seriesData.books.map((book) => (
              <div
                key={book.id}
                onClick={() => onBookClick(book)}
                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden cursor-pointer"
              >
                <div className="relative">
                  <div className="aspect-[3/4] bg-gray-100 flex items-center justify-center p-4">
                   <Image
                        src={imgbook}
                        alt={book.title}
                        width={180}
                        height={240}
                        className="object-cover rounded-t-xl"
                      />
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-3 left-3">{getStatusBadge(book)}</div>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{book.title}</h3>
                  <div className="flex items-center gap-1 mb-3">
                    <p className="text-sm text-gray-600">By {book.author}</p>
                    {book.verified && (
                      <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-1">
                    <div className="flex text-yellow-400">
                      {Array.from({ length: Math.floor(book.rating) }, (_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-1">{book.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

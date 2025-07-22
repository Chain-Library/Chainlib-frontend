"use client"

import { ArrowLeft, Bell, CheckCircle, Star, Plus } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"
import imgbook from "../../../../../public/Cover.png";
import imgbook1 from "../../../../../public/user1.svg"

interface CollectionBook {
  id: string
  title: string
  author: string
  rating: number
  status: "read" | "unread" | "progress"
  progress?: number
  verified?: boolean
}

interface CollectionModalProps {
  collection: {
    title: string
    rating: number
    totalReviews: number
    bookCount: number
    collaborators: string[]
    books: CollectionBook[]
  }
  onClose: () => void
  onBookClick: (book: CollectionBook) => void
}

const collectionData = {
  title: "By Best Books",
  rating: 4.5,
  totalReviews: 500,
  bookCount: 5,
  collaborators: ["You", "Oluwa_Dami"],
  books: [
    {
      id: "collection-1",
      title: "Love at Night 1",
      author: "Darrin Collins",
      rating: 4.5,
      status: "read" as const,
      verified: true,
    },
    {
      id: "collection-2",
      title: "Seven Elements",
      author: "Darrin Collins",
      rating: 4.5,
      status: "read" as const,
      verified: true,
    },
    {
      id: "collection-3",
      title: "Figo",
      author: "Darrin Collins",
      rating: 4.5,
      status: "progress" as const,
      progress: 5,
      verified: true,
    },
  ],
}

export function CollectionModal({ onClose, onBookClick }: Omit<CollectionModalProps, "collection">) {
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

  const getStatusBadge = (book: CollectionBook) => {
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
      <div className="bg-gray-50 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 bg-white rounded-t-2xl border-b border-gray-200">
          <div className="flex items-center gap-4">
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-lg font-semibold">Collections</h1>
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

        {/* Collection Info */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">{collectionData.title}</h2>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{collectionData.rating}</span>
                <span className="text-gray-500">of {collectionData.totalReviews} Review</span>
              </div>
              <div className="flex items-center gap-1 text-gray-600">
                <span className="font-medium">{collectionData.bookCount} Books</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-medium">2</span>
                  </div>
                  <span className="text-gray-600 text-sm">{collectionData.collaborators.join(" and ")}</span>
                </div>
              </div>
              <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium">
                <Plus className="w-4 h-4" />
                Add Book
              </button>
            </div>
          </div>

          {/* Books Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {collectionData.books.map((book) => (
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

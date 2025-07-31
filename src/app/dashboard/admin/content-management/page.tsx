"use client";

import { useState } from "react";
import { Header } from "@/components/dashboard/header";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  TimeFilter,
  StatsGrid,
  BookTable,
  RejectModal,
  BookDetails,
  ReportsSection,
} from "./components";

type ViewType =
  | "dashboard"
  | "book-details"
  | "book-approval"
  | "reported-content";
type TabType = "all-books" | "pending-approval" | "reported-content";

interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  type: "Regular" | "NFT Edition";
  status:
    | "Approved"
    | "Pending"
    | "Rejected"
    | "Unresolved"
    | "Resolved"
    | "Valid"
    | "Reported";
  dateSubmitted: string;
  datePublished?: string;
  interactions?: string;
  tokenId?: string;
  walletAddress?: string;
  mintingDate?: string;
  reportType?: string;
  reportedBy?: string;
  rating?: number;
  price?: string;
  sold?: number;
  isbn?: string;
  language?: string;
  pageCount?: string;
  genre?: string[];
}

const mockBooks: Book[] = [
  {
    id: "1",
    title: "Native Invisibility",
    author: "Darrin Collins",
    cover: "/placeholder.svg?height=120&width=80",
    type: "Regular",
    status: "Pending",
    dateSubmitted: "17 May, 2025",
    rating: 4.5,
    price: "193 STRK",
    sold: 57,
    isbn: "978-3-16-148410-0",
    language: "English",
    pageCount: "21 Pages",
    genre: ["Fiction", "Comic"],
  },
  {
    id: "2",
    title: "The Silent Storm",
    author: "Jane Mark",
    cover: "/placeholder.svg?height=120&width=80",
    type: "Regular",
    status: "Pending",
    dateSubmitted: "12 May, 2025",
  },
  {
    id: "3",
    title: "The Silent Storm",
    author: "Jane Mark",
    cover: "/placeholder.svg?height=120&width=80",
    type: "NFT Edition",
    status: "Pending",
    dateSubmitted: "12 May, 2025",
    mintingDate: "12 May, 2025",
  },
  {
    id: "4",
    title: "The Silent Storm",
    author: "Jane Mark",
    cover: "/placeholder.svg?height=120&width=80",
    type: "NFT Edition",
    status: "Pending",
    dateSubmitted: "12 May, 2025",
    mintingDate: "12 May, 2025",
  },
  {
    id: "5",
    title: "The Silent Storm",
    author: "Jane Mark",
    cover: "/placeholder.svg?height=120&width=80",
    type: "NFT Edition",
    status: "Pending",
    dateSubmitted: "12 May, 2025",
    mintingDate: "12 May, 2025",
  },
  {
    id: "6",
    title: "Strange Waters",
    author: "Olamide Musa",
    cover: "/placeholder.svg?height=120&width=80",
    type: "Regular",
    status: "Unresolved",
    dateSubmitted: "4 June, 2025",
    reportType: "Plagiarism",
    reportedBy: "0x12...ong",
  },
  {
    id: "16",
    title: "Strange Waters",
    author: "Olamide Musa",
    cover: "/placeholder.svg?height=120&width=80",
    type: "Regular",
    status: "Resolved",
    dateSubmitted: "4 June, 2025",
    reportType: "Inappropriate",
    reportedBy: "0x12...ong",
  },
  {
    id: "26",
    title: "Strange Waters",
    author: "Olamide Musa",
    cover: "/placeholder.svg?height=120&width=80",
    type: "Regular",
    status: "Resolved",
    dateSubmitted: "4 June, 2025",
    reportType: "Inappropriate",
    reportedBy: "0x12...ong",
  },
  {
    id: "006",
    title: "Strange Waters",
    author: "Olamide Musa",
    cover: "/placeholder.svg?height=120&width=80",
    type: "Regular",
    status: "Unresolved",
    dateSubmitted: "4 June, 2025",
    reportType: "Plagiarism",
    reportedBy: "0x12...ong",
  },
  {
    id: "216",
    title: "Strange Waters",
    author: "Olamide Musa",
    cover: "/placeholder.svg?height=120&width=80",
    type: "Regular",
    status: "Resolved",
    dateSubmitted: "4 June, 2025",
    reportType: "Inappropriate",
    reportedBy: "0x12...ong",
  },
  {
    id: "601",
    title: "Strange Waters",
    author: "Olamide Musa",
    cover: "/placeholder.svg?height=120&width=80",
    type: "Regular",
    status: "Unresolved",
    dateSubmitted: "4 June, 2025",
    reportType: "Plagiarism",
    reportedBy: "0x12...ong",
  },
  {
    id: "7",
    title: "Whispers of Dawn",
    author: "John Doe",
    cover: "/placeholder.svg?height=120&width=80",
    type: "Regular",
    status: "Approved",
    dateSubmitted: "12 September, 2025",
    datePublished: "12 May, 2025",
    interactions: "2.7k Read",
  },
  {
    id: "8",
    title: "Whispers of Dawn",
    author: "John Doe",
    cover: "/placeholder.svg?height=120&width=80",
    type: "Regular",
    status: "Approved",
    dateSubmitted: "12 September, 2025",
    datePublished: "12 May, 2025",
    interactions: "2.7k Read",
  },
  {
    id: "9",
    title: "Whispers of Dawn",
    author: "John Doe",
    cover: "/placeholder.svg?height=120&width=80",
    type: "Regular",
    status: "Approved",
    dateSubmitted: "12 September, 2025",
    datePublished: "12 May, 2025",
    interactions: "2.7k Read",
  },
  {
    id: "10",
    title: "Whispers of Dawn",
    author: "John Doe",
    cover: "/placeholder.svg?height=120&width=80",
    type: "Regular",
    status: "Approved",
    dateSubmitted: "12 September, 2025",
    datePublished: "12 May, 2025",
    interactions: "2.7k Read",
  },
  {
    id: "11",
    title: "Whispers of Dawn",
    author: "John Doe",
    cover: "/placeholder.svg?height=120&width=80",
    type: "Regular",
    status: "Approved",
    dateSubmitted: "12 September, 2025",
    datePublished: "12 May, 2025",
    interactions: "2.7k Read",
  },
  {
    id: "12",
    title: "Whispers of Dawn",
    author: "John Doe",
    cover: "/placeholder.svg?height=120&width=80",
    type: "Regular",
    status: "Approved",
    dateSubmitted: "12 September, 2025",
    datePublished: "12 May, 2025",
    interactions: "2.7k Read",
  },
  {
    id: "13",
    title: "Whispers of Dawn",
    author: "John Doe",
    cover: "/placeholder.svg?height=120&width=80",
    type: "Regular",
    status: "Approved",
    dateSubmitted: "12 September, 2025",
    datePublished: "12 May, 2025",
    interactions: "2.7k Read",
  },
  {
    id: "14",
    title: "Whispers of Dawn",
    author: "John Doe",
    cover: "/placeholder.svg?height=120&width=80",
    type: "Regular",
    status: "Approved",
    dateSubmitted: "12 September, 2025",
    datePublished: "12 May, 2025",
    interactions: "2.7k Read",
  },
  {
    id: "15",
    title: "Whispers of Dawn",
    author: "John Doe",
    cover: "/placeholder.svg?height=120&width=80",
    type: "Regular",
    status: "Approved",
    dateSubmitted: "12 September, 2025",
    datePublished: "12 May, 2025",
    interactions: "2.7k Read",
  },
  {
    id: "16",
    title: "Whispers of Dawn",
    author: "John Doe",
    cover: "/placeholder.svg?height=120&width=80",
    type: "Regular",
    status: "Approved",
    dateSubmitted: "12 September, 2025",
    datePublished: "12 May, 2025",
    interactions: "2.7k Read",
  },
];

const stats = {
  totalBooks: 107,
  approved: 69,
  pendingApproval: 27,
  rejected: 4,
  reported: 107,
  unpublished: 27,
  nftEditionValidated: 4,
  approvedStats: 8,
};

export default function ChainLibContentManagement() {
  const [currentView, setCurrentView] = useState<ViewType>("dashboard");
  const [activeTab, setActiveTab] = useState<TabType>("pending-approval");
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [timeFilter, setTimeFilter] = useState("This Week");
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);
  const [rejectReason, setRejectReason] = useState("");

  const handleBookClick = (book: Book) => {
    setSelectedBook(book);
    if (book.status === "Pending") {
      setCurrentView("book-approval");
    } else if (book.status === "Unresolved" || book.status === "Resolved") {
      setCurrentView("reported-content");
    } else {
      setCurrentView("book-details");
    }
  };

  const handleBackToDashboard = () => {
    setCurrentView("dashboard");
    setSelectedBook(null);
  };

  const handleApprove = () => {
    if (selectedBook) {
      console.log("Approved:", selectedBook.title);
      handleBackToDashboard();
    }
  };

  const handleReject = () => {
    setIsRejectModalOpen(true);
  };

  const handleRejectSubmit = () => {
    if (selectedBook && rejectReason.trim()) {
      console.log("Rejected:", selectedBook.title, "Reason:", rejectReason);
      setRejectReason("");
      setIsRejectModalOpen(false);
      handleBackToDashboard();
    }
  };

  const handleRejectCancel = () => {
    setRejectReason("");
    setIsRejectModalOpen(false);
  };

  const renderDashboard = () => (
    <div>
      <Header title="Content Management" />
      <div className="space-y-6 p-6">
        <div className="bg-white rounded-lg border p-4 gap-4">
          <TimeFilter timeFilter={timeFilter} setTimeFilter={setTimeFilter} />
          <StatsGrid stats={stats} />
        </div>
        <BookTable
          books={mockBooks}
          activeTab={activeTab}
          setActiveTab={(tab) => setActiveTab(tab as TabType)}
          onBookClick={handleBookClick}
        />
      </div>
    </div>
  );

  const renderBookView = () => {
    if (!selectedBook) return null;

    return (
      <div>
        <Header
          title={
            <span
              className="cursor-pointer text-[#888888] flex items-center"
              onClick={handleBackToDashboard}
            >
              <span className="mr-2 border border-gray-300 rounded-lg px-2 py-1">
                <ArrowLeft className="h-4 w-4" />
              </span>
              Book Details
            </span>
          }
        />
        <div className="space-y-6 p-6">
          <BookDetails
            book={selectedBook}
            currentView={currentView}
            onReject={handleReject}
            onApprove={handleApprove}
          />
          {currentView === "reported-content" && (
            <ReportsSection book={selectedBook} />
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 -z-10">
      <div className="mx-auto">
        {currentView === "dashboard" && renderDashboard()}
        {(currentView === "book-details" ||
          currentView === "book-approval" ||
          currentView === "reported-content") &&
          renderBookView()}
      </div>

      <RejectModal
        isOpen={isRejectModalOpen}
        rejectReason={rejectReason}
        setRejectReason={setRejectReason}
        onCancel={handleRejectCancel}
        onSubmit={handleRejectSubmit}
      />
    </div>
  );
}

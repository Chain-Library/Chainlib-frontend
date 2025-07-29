"use client";

import { useState } from "react";
import { Header } from "@/components/dashboard/header";
import {
  ArrowLeft,
  Star,
  Eye,
  Search,
  Filter,
  ChevronDown,
  CheckCircle,
  Edit,
  MessageCircle,
  MessageCircleCodeIcon,
  DownloadCloud,
  Download,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Image from "next/image";
import check from "../../../../../public/Cover.png";
import message from "../../../../../public/Chat.svg";
import starknet from "../../../../../public/starknet.png";
import you from "../../../../../public/you.svg";
import user1 from "../../../../../public/user1.svg";

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
      // Handle approval logic
      console.log("Approved:", selectedBook.title);
      handleBackToDashboard();
    }
  };

  const handleReject = () => {
    setIsRejectModalOpen(true);
  };

  const handleRejectSubmit = () => {
    if (selectedBook && rejectReason.trim()) {
      // Handle rejection logic
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
          {/* Time Filter */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-3">
            <div className="flex flex-wrap gap-2">
              {["This Week", "This Month", "This Year", "All Time"].map(
                (filter) => (
                  <Button
                    key={filter}
                    size="sm"
                    variant="ghost"
                    onClick={() => setTimeFilter(filter)}
                    className={`text-xs sm:text-sm rounded-md px-2 sm:px-4 py-2 ${
                      timeFilter === filter ? "bg-[#F6F6F6] text-black" : ""
                    }`}
                  >
                    {filter}
                  </Button>
                )
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full lg:w-auto">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Input
                  placeholder="dd/mm/yyyy"
                  className="w-24 sm:w-32 text-xs sm:text-sm text-[#B0B0B0]"
                />
                <span className="text-xs sm:text-sm text-[#888888]">to</span>
                <Input
                  placeholder="dd/mm/yyyy"
                  className="w-24 sm:w-32 text-xs sm:text-sm text-[#B0B0B0]"
                />
              </div>
              <Button
                size="sm"
                variant="outline"
                className="rounded-md bg-[#E7E7E7] text-[#888888] text-xs sm:text-sm w-full sm:w-auto"
              >
                Apply
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#E7E7E7] rounded-lg p-4 gap-4">
            <Card className="border border-[#E9F7FF] rounded-lg">
              <CardContent className="p-4">
                <div className="text-sm text-[#888888] mb-2">Total Books</div>
                <div className="text-2xl font-bold text-[#888888]">
                  {stats.totalBooks}
                </div>
              </CardContent>
            </Card>
            <Card className="border border-[#E9F7FF] rounded-lg">
              <CardContent className="p-4">
                <div className="text-sm text-[#888888] mb-2">Approved</div>
                <div className="text-2xl font-bold text-[#888888]">
                  {stats.approved}
                </div>
              </CardContent>
            </Card>
            <Card className="border border-[#E9F7FF] rounded-lg">
              <CardContent className="p-4">
                <div className="text-sm text-[#888888] mb-2">
                  Pending Approval
                </div>
                <div className="text-2xl font-bold text-[#888888]">
                  {stats.pendingApproval}
                </div>
              </CardContent>
            </Card>
            <Card className="border border-[#E9F7FF] rounded-lg">
              <CardContent className="p-4">
                <div className="text-sm text-[#888888] mb-2">Rejected</div>
                <div className="text-2xl font-bold text-[#888888]">
                  {stats.rejected}
                </div>
              </CardContent>
            </Card>
            <Card className="border border-[#E9F7FF] rounded-lg">
              <CardContent className="p-4">
                <div className="text-sm text-[#888888] mb-2">Reported</div>
                <div className="text-2xl font-bold text-[#888888]">
                  {stats.reported}
                </div>
              </CardContent>
            </Card>
            <Card className="border border-[#E9F7FF] rounded-lg">
              <CardContent className="p-4">
                <div className="text-sm text-[#888888] mb-2">Unpublished</div>
                <div className="text-2xl font-bold text-[#888888]">
                  {stats.unpublished}
                </div>
              </CardContent>
            </Card>
            <Card className="border border-[#E9F7FF] rounded-lg">
              <CardContent className="p-4">
                <div className="text-sm text-[#888888] mb-2">
                  NFT Edition Validated
                </div>
                <div className="text-2xl font-bold text-[#888888]">
                  {stats.nftEditionValidated}
                </div>
              </CardContent>
            </Card>
            <Card className="border border-[#E9F7FF] rounded-lg">
              <CardContent className="p-4">
                <div className="text-sm text-[#888888] mb-2">Approved</div>
                <div className="text-2xl font-bold text-[#888888]">
                  {stats.approvedStats}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tabs */}
        <Tabs
          value={activeTab}
          onValueChange={(value) => setActiveTab(value as TabType)}
          className="bg-white rounded-lg border border-[#E7E7E7] p-4"
        >
          <div className="flex flex-col lg:flex-row bg-[#F6F6F6] -mb-2 rounded-lg rounded-br-none rounded-bl-none p-4 items-start lg:items-center justify-between gap-4">
            <TabsList className="bg-transparent p-0 border-0 shadow-none flex flex-wrap">
              <TabsTrigger
                value="all-books"
                className={`font-semibold px-2 sm:px-4 mr-1 sm:mr-2 py-2 rounded-md text-xs sm:text-sm data-[state=active]:bg-[#096CFF] data-[state=active]:text-white data-[state=inactive]:bg-[#F6F6F6] data-[state=inactive]:text-[#888888] bg-[#F6F6F6] text-[#888888] transition-colors`}
              >
                All Books
              </TabsTrigger>
              <TabsTrigger
                value="pending-approval"
                className={`font-semibold px-2 sm:px-4 mr-1 sm:mr-2 py-2 rounded-md text-xs sm:text-sm data-[state=active]:bg-[#096CFF] data-[state=active]:text-white data-[state=inactive]:bg-[#F6F6F6] data-[state=inactive]:text-[#888888] bg-[#F6F6F6] text-[#888888] transition-colors`}
              >
                Pending Approval
                <Badge
                  variant="destructive"
                  className="ml-1 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5 rounded-full p-0 text-xs"
                >
                  27
                </Badge>
              </TabsTrigger>
              <TabsTrigger
                value="reported-content"
                className={`font-semibold px-2 sm:px-4 py-2 rounded-md text-xs sm:text-sm data-[state=active]:bg-[#096CFF] data-[state=active]:text-white data-[state=inactive]:bg-[#F6F6F6] data-[state=inactive]:text-[#888888] bg-[#F6F6F6] text-[#888888] transition-colors`}
              >
                Reported Content
              </TabsTrigger>
            </TabsList>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full lg:w-auto">
              <div className="relative w-full sm:w-auto">
                <Search className="absolute left-3 border border-[#D1D1D1] rounded-md top-1/2 transform -translate-y-1/2 text-[#B0B0B0] h-4 w-4" />
                <Input
                  placeholder="Search for a Reader"
                  className="pl-10 w-full sm:w-64 text-sm"
                />
              </div>
              <div className="flex gap-2 w-full sm:w-auto">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-[#888888] text-xs sm:text-sm"
                      type="button"
                    >
                      Sort{" "}
                      <Filter className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                      Date Submitted
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                      Title
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                      Author
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-[#888888] text-xs sm:text-sm"
                      type="button"
                    >
                      Filter{" "}
                      <Filter className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem
                      className="text-[#888888]"
                      onSelect={(e) => e.preventDefault()}
                    >
                      Regular
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="text-[#888888]"
                      onSelect={(e) => e.preventDefault()}
                    >
                      NFT Edition
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>

          <TabsContent value="all-books" className="space-y-4">
            {renderBookTable(
              mockBooks.filter((book) => book.status === "Approved"),
              "all-books"
            )}
          </TabsContent>

          <TabsContent value="pending-approval" className="space-y-4">
            {renderBookTable(
              mockBooks.filter((book) => book.status === "Pending"),
              "pending-approval"
            )}
          </TabsContent>

          <TabsContent value="reported-content" className="space-y-4">
            {renderBookTable(
              mockBooks.filter(
                (book) =>
                  book.status === "Unresolved" || book.status === "Resolved"
              ),
              "reported-content"
            )}
          </TabsContent>

          <div className="flex flex-col sm:flex-row p-4 justify-between items-start sm:items-center gap-2 text-xs sm:text-sm text-gray-500">
            <span>Showing 1 to 10 of 107</span>
            <Button variant="ghost" size="sm" className="text-xs sm:text-sm">
              View All
            </Button>
          </div>
        </Tabs>
      </div>
    </div>
  );

  const renderBookTable = (books: Book[], tabType: string) => {
    const getTableHeaders = () => {
      switch (tabType) {
        case "all-books":
          return [
            "Cover",
            "Title and Author",
            "Status",
            "Type",
            "Date Published",
            "Interactions",
            "",
          ];
        case "pending-approval":
          if (books.some((book) => book.tokenId)) {
            return [
              "Cover",
              "Title and Author",
              "Type",
              "Date Submitted",
              "Review Status",
              "",
            ];
          }
          return [
            "Cover",
            "Title and Author",
            "Type",
            "Date Submitted",
            "Review Status",
            "",
          ];
        case "reported-content":
          return [
            "Cover",
            "Title and Author",
            "Report Type",
            "Reported By",
            "Date",
            "Status",
            "",
          ];
        default:
          return [];
      }
    };

    return (
      <div className="rounded-lg mb-2 border-b border-[#E7E7E7] rounded-tr-none rounded-tl-none">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead className="border-b bg-[#EDF7FF]">
              <tr>
                {getTableHeaders().map((header, index) => (
                  <th
                    key={index}
                    className="text-left p-2 sm:p-4 text-xs sm:text-sm font-medium text-gray-600"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.id} className="border-b hover:bg-gray-50">
                  <td className="p-2 sm:p-4">
                    <Image
                      src={book.cover || "/placeholder.svg"}
                      alt={"Book Cover"}
                      width={56}
                      height={72}
                      className="w-10 h-12 sm:w-14 sm:h-16 object-cover rounded bg-gray-200"
                    />
                  </td>
                  <td className="p-2 sm:p-4">
                    <div className="font-medium text-gray-900 text-xs sm:text-sm">
                      {book.title}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500">
                      by {book.author}
                    </div>
                  </td>
                  {tabType === "all-books" && (
                    <>
                      <td className="p-4">
                        <Badge
                          variant="secondary"
                          className="bg-green-100 text-[#34A853] px-2 py-1"
                        >
                          {book.status}
                        </Badge>
                      </td>
                      <td className="p-4 text-sm text-gray-600">{book.type}</td>
                      <td className="p-4 text-sm text-gray-600">
                        {book.datePublished}
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <Eye className="h-4 w-4" />
                          {book.interactions}
                        </div>
                      </td>
                    </>
                  )}
                  {tabType === "pending-approval" && (
                    <>
                      {book.tokenId ? (
                        <>
                          <td className="p-4 text-sm text-gray-600">
                            {book.tokenId}
                          </td>
                          <td className="p-4 text-sm text-gray-600">
                            {book.mintingDate}
                          </td>
                          <td className="p-4 text-sm text-gray-600">
                            {book.walletAddress}
                          </td>
                          <td className="p-4">
                            <Badge
                              variant="outline"
                              className="border-orange-200 text-orange-800 bg-orange-50"
                            >
                              {book.status}
                            </Badge>
                          </td>
                        </>
                      ) : (
                        <>
                          <td className="p-4 text-sm text-gray-600">
                            {book.type}
                          </td>
                          <td className="p-4 text-sm text-gray-600">
                            {book.dateSubmitted}
                          </td>
                          <td className="p-4">
                            <Badge
                              variant="outline"
                              className="border-orange-200 text-orange-800 bg-orange-50"
                            >
                              {book.status}
                            </Badge>
                          </td>
                        </>
                      )}
                    </>
                  )}
                  {tabType === "reported-content" && (
                    <>
                      <td className="p-4 text-sm text-gray-600">
                        {book.reportType}
                      </td>
                      <td className="p-4 text-sm text-gray-600">
                        {book.reportedBy}
                      </td>
                      <td className="p-4 text-sm text-gray-600">
                        {book.dateSubmitted}
                      </td>
                      <td className="p-4">
                        <Badge
                          variant={
                            book.status === "Resolved"
                              ? "secondary"
                              : "destructive"
                          }
                          className={
                            book.status === "Resolved"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }
                        >
                          {book.status}
                        </Badge>
                      </td>
                    </>
                  )}
                  <td className="p-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleBookClick(book)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {tabType === "pending-approval"
                        ? "Review"
                        : tabType === "reported-content"
                        ? book.status === "Resolved"
                          ? "View"
                          : "Resolve"
                        : "View More"}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const renderBookDetails = () => {
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
          {/* Book Info */}
          <div className="bg-white p-4 rounded-lg">
            <div className="flex justify-between ">
              <div className="flex flex-col lg:flex-row gap-6 items-center">
                <div className="flex-shrink-0">
                  <Image
                    src={check}
                    alt={selectedBook.title}
                    width={128}
                    height={176}
                    className=" object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h1 className="text-2xl font-bold text-[#5D5D5D]">
                      Native Invisibility
                    </h1>
                    <div className="flex items-center gap-2">
                      <p className="text-gray-600">By Darrin Collins</p>
                      <span className="inline-flex items-center justify-center rounded-full bg-blue-100 p-0.5">
                        <CheckCircle className="h-4 w-4 text-blue-500 fill-blue-500" />
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="ml-1 text-sm font-medium">
                          {selectedBook.rating || 4.5}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 items-start justify-start lg:items-start lg:justify-end w-full lg:w-auto">
                <button className="text-blue-600 border border-[#007AFF3D] rounded-md px-2 py-1">
                  <Image src={message} alt="message" width={24} height={24} />
                </button>
                {currentView === "book-approval" && (
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      onClick={handleReject}
                      className="border border-[#FF67823D] text-[#FF6782]"
                    >
                      Reject
                    </Button>
                    <Button onClick={handleApprove} className="bg-[#096CFF]">
                      Approve
                    </Button>
                  </div>
                )}
                {currentView == "book-details" && (
                  <button className="text-red-600 border border-[#FF67823D] rounded-md px-3 py-2 w-fit">
                    Unpublish Book
                  </button>
                )}
              </div>
            </div>

            {currentView == "book-approval" && (
              <Button
                variant="outline"
                className="w-fit bg-transparent mt-6 bg-gradient-to-b from-[#e9edf0] to-[#a8c1e6] text-white"
              >
                Preview Book
              </Button>
            )}
            {/* Book Details Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-5 rounded-lg">
              <div className="border border-[#E7E7E7] rounded-lg p-2">
                <div className="text-xs text-[#888888]">Payment Type</div>
                <div className="text-sm font-medium">One-Time Payment</div>
              </div>
              <div className="border border-[#E7E7E7] rounded-lg p-2">
                <div className="text-xs text-[#888888]">Price</div>
                <div className="font-medium text-sm">
                  {selectedBook.price || "N/A"}
                </div>
              </div>
              <div className="border border-[#E7E7E7] rounded-lg p-2">
                <div className="text-xs text-[#888888]">Published Date</div>
                <div className="font-medium text-sm">
                  {selectedBook.dateSubmitted}
                </div>
              </div>
              <div className="border border-[#E7E7E7] rounded-lg p-2">
                <div className="text-xs text-[#888888]">Sold</div>
                <div className="font-medium text-sm">
                  {selectedBook.sold || "N/A"}
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white p-4 rounded-lg space-y-4 shadow-sm">
            <div className="space-y-4 border border-[#E7E7E7] p-4 rounded-lg">
              <h2 className="text-lg font-semibold text-[#888888]">
                Description
              </h2>
              <p className="text-[#888888] leading-relaxed">
                Delves into the complex and often insidious ways in which
                indigenous peoples and their unique experiences are rendered
                unseen and unheard in the modern era.
              </p>
              <Button
                variant="outline"
                className="border-[#888888] text-xs bg-transparent text-[#888888]"
              >
                Read More
              </Button>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="border border-[#E7E7E7] rounded-lg p-4">
                <div className="text-xs text-[#888888]">Genre(s)</div>
                <div className="flex gap-2 mt-1.5">
                  <div className="text-xs bg-[#F6F6F6] text-[#888888] px-2.5 py-1 rounded-md">
                    Fiction
                  </div>
                  <div className="text-xs bg-[#F6F6F6] text-[#888888] px-2 py-1 rounded-md">
                    Comic
                  </div>
                </div>
              </div>
              <div className="border border-[#E7E7E7] rounded-lg md:p-4 p-2">
                <div className="text-xs text-[#888888]">Page count</div>
                <div className="font-normal text-sm text-[#5D5D5D] mt-1.5">
                  {selectedBook.pageCount || "21 Pages"}
                </div>
              </div>
              <div className="border border-[#E7E7E7] rounded-lg md:p-4 p-2">
                <div className="text-sm text-gray-600">Language</div>
                <div className="font-normal text-sm text-[#5D5D5D] mt-1.5">
                  {selectedBook.language || "English"}
                </div>
              </div>
              <div className="border border-[#E7E7E7] rounded-lg md:p-4 p-2">
                <div className="text-xs text-[#888888]">Published Date</div>
                <div className="font-normal text-sm text-[#5D5D5D] mt-1.5">
                  {selectedBook.dateSubmitted || "21 April 2025"}
                </div>
              </div>
              <div className="border border-[#E7E7E7] rounded-lg md:p-4 p-2">
                <div className="text-xs text-[#888888]">ISBN</div>
                <div className="font-normal text-sm text-[#5D5D5D] mt-1.5">
                  {selectedBook.isbn || "ISBN: 978-3-16-148410-0"}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            {/* Performance Stats */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-[#888888]">
                Book Performance Stats
              </h2>
              <div className="flex gap-4 text-sm  rounded-lg p-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs bg-[#F6F6F6] text-[#888888]"
                >
                  This Week
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs text-[#888888]"
                >
                  This Month
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs text-[#888888]"
                >
                  This Year
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs text-[#888888]"
                >
                  All Time
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 border border-[#E7E7E7] rounded-lg p-4">
                <Card className="h-[100px] p-2 bg-transparent border border-[#E7E7E7] ">
                  <CardContent className="px-4 py-2">
                    <div className="text-sm text-gray-600 mb-1.5">Read</div>
                    <div className="flex items-center gap-2">
                      <div className="text-2xl font-bold text-blue-600">
                        192
                      </div>
                      <div className="text-[10px] bg-red-100 text-red-500 px-1 py-0.5 rounded-md">
                        -10%
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-2 h-[100px] bg-transparent border border-[#E7E7E7]">
                  <CardContent className="p-2 ">
                    <div className="text-sm text-gray-600 mb-1.5">
                      Read Completion Rate
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-xl font-bold text-green-600">
                        75%
                      </div>
                      <div className="text-[10px] bg-green-100 text-green-500 px-1 py-0.5 rounded-md">
                        +5%
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="h-[100px] p-2 bg-transparent border border-[#E7E7E7]">
                  <CardContent className="p-2">
                    <div className="text-sm text-gray-600 mb-1.5">Purchase</div>
                    <div className="flex items-center gap-2">
                      <div className="text-2xl font-bold text-blue-600">62</div>
                      <div className="text-[10px] bg-green-100 text-green-500 px-1 py-0.5 rounded-md">
                        +8%
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="h-[100px] p-2 bg-transparent border border-[#E7E7E7]">
                  <CardContent className="p-4">
                    <div className="text-sm text-gray-600 mb-1.5">
                      Total Complete Read
                    </div>
                    <div className="text-2xl font-bold text-blue-600">70%</div>
                  </CardContent>
                </Card>
                <Card className="h-[100px] p-2 bg-transparent border border-[#E7E7E7]">
                  <CardContent className="p-4">
                    <div className="text-sm text-gray-600 mb-1.5">
                      Total Earning
                    </div>
                    <div className="text-base font-bold text-blue-600 flex items-center gap-1">
                      <Image
                        src={starknet}
                        alt="dollar"
                        width={16}
                        height={16}
                        className="inline-block mr-1"
                      />{" "}
                      <span className="text-sm">370.00</span>
                    </div>
                  </CardContent>
                </Card>
                <Card className="h-[100px] p-2 bg-transparent border border-[#E7E7E7]">
                  <CardContent className="p-4">
                    <div className="text-sm text-gray-600 mb-1.5">
                      Average Rating
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <span className="text-base font-bold">3.5</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="space-y-6 bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-[#888888]">
              Reviews and Rating
            </h2>

            <div className="flex flex-col lg:flex-row gap-8">
              <div className="text-center lg:text-left">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#5D5D5D]">
                  3.5
                </div>
                <div className="flex justify-center lg:justify-start gap-1 my-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-4 w-4 sm:h-5 sm:w-5 ${
                        star <= 3
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  1202 Reviews
                </div>
              </div>

              <div className="flex-1 space-y-2">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center gap-4">
                    <span className="text-sm w-2 text-[#888888]">{rating}</span>
                    <Progress
                      value={rating === 3 ? 60 : rating === 4 ? 30 : 10}
                      className="flex-1 [&>*]:!bg-[#DBA736]"
                    />
                  </div>
                ))}
              </div>

              {/* <div className="flex-1 h-2 bg-yellow-100 rounded">
              <div
                className="h-2 rounded bg-yellow-400"
                style={{
                  width: rating === 3 ? "60%" : rating === 4 ? "30%" : "10%",
                }}
              ></div>
            </div> */}
            </div>

            {/* Individual Reviews */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6].map((review) => (
                <Card key={review} className="h-full flex flex-col">
                  <CardContent className="flex flex-col justify-between h-full">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src="/placeholder.svg?height=40&width=40" />
                          <AvatarFallback>AS</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">Adeja Samad</span>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex gap-1">
                            {[1, 2, 3, 4].map((star) => (
                              <Star
                                key={star}
                                className="h-4 w-4 fill-yellow-400 text-yellow-400"
                              />
                            ))}
                            <Star className="h-4 w-4 text-gray-300" />
                          </div>
                          <span className="text-sm text-gray-500">
                            Yesterday
                          </span>
                        </div>

                        <p className="text-[#5D5D5D] mb-3">
                          This was a great read, and I was hooked. However, the
                          death of my favorite character impacted my overall
                          enjoyment, which is why I'm rating it 4 stars instead
                          of 5.
                        </p>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-xs bg-[#E7E7E7] text-[#888888] rounded-3xl px-4 py-2 mt-1"
                        >
                          Delete
                        </Button>
                      </div>
                    </div>

                    {/* Footer aligned at the bottom */}
                    <div className="flex items-center gap-4 border-t border-[#E7E7E7] pt-4 mt-4 text-sm text-gray-500">
                      <Image
                        src={user1}
                        alt="delete"
                        width={20}
                        height={20}
                        className="w-7 h-7 rounded-2xl"
                      />
                      <span>Author Replied</span>
                      <span>• 1 Reply</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Reports Section (if applicable) */}
          {currentView === "book-details" &&
            selectedBook.status !== "Approved" && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold">Reports & Comments</h2>

                <div className="space-y-6">
                  <div className="border rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback>LV</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-medium">Lana Victor</span>
                          <span className="text-sm text-gray-500">
                            Yesterday
                          </span>
                        </div>
                        <div className="mb-2">
                          <Badge variant="destructive" className="text-xs">
                            Plagiarism and Inappropriate Content
                          </Badge>
                        </div>
                        <p className="text-gray-700">
                          Presenting someone else's work and used images, that
                          are unsuitable, offensive, harmful, disturbing, often
                          based on societal norms, legal standards, age
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback>SY</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-medium">Samuel Yaro</span>
                          <span className="text-sm text-gray-500">
                            5 June, 2025
                          </span>
                        </div>
                        <div className="mb-2">
                          <Badge variant="destructive" className="text-xs">
                            Inappropriate Content
                          </Badge>
                        </div>
                        <p className="text-gray-700">
                          Unsuitable, offensive, harmful, disturbing, often
                          based on societal norms, legal standards, age
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
        </div>
      </div>
    );
  };

  const renderBookPendingApproval = () => {
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
          {/* Book Info */}
          <div className="bg-white p-4 rounded-lg">
            <div className="flex justify-between ">
              <div className="flex flex-col lg:flex-row gap-6 items-center">
                <div className="flex-shrink-0">
                  <Image
                    src={check}
                    alt={selectedBook.title}
                    width={128}
                    height={176}
                    className=" object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h1 className="text-2xl font-bold text-[#5D5D5D]">
                      Native Invisibility
                    </h1>
                    <div className="flex items-center gap-2">
                      <p className="text-gray-600">By Darrin Collins</p>
                      <span className="inline-flex items-center justify-center rounded-full bg-blue-100 p-0.5">
                        <CheckCircle className="h-4 w-4 text-blue-500 fill-blue-500" />
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="ml-1 text-sm font-medium">
                          {selectedBook.rating || 4.5}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 items-start justify-start lg:items-start lg:justify-end w-full lg:w-auto">
                <button className="text-blue-600 border border-[#007AFF3D] rounded-md px-2 py-1">
                  <Image src={message} alt="message" width={24} height={24} />
                </button>
                {currentView === "book-approval" && (
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      onClick={handleReject}
                      className="border border-[#FF67823D] text-[#FF6782]"
                    >
                      Reject
                    </Button>
                    <Button onClick={handleApprove} className="bg-[#096CFF]">
                      Approve
                    </Button>
                  </div>
                )}
              </div>
            </div>

            {currentView == "book-approval" && (
              <Button
                variant="outline"
                className="w-fit bg-transparent mt-6 bg-gradient-to-b from-[#e9edf0] to-[#a8c1e6] text-white"
              >
                Preview Book
              </Button>
            )}
            {/* Book Details Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-5 rounded-lg">
              <div className="border border-[#E7E7E7] rounded-lg p-2">
                <div className="text-xs text-[#888888]">Payment Type</div>
                <div className="text-sm font-medium">One-Time Payment</div>
              </div>
              <div className="border border-[#E7E7E7] rounded-lg p-2">
                <div className="text-xs text-[#888888]">Price</div>
                <div className="font-medium text-sm flex items-center gap-1">
                  <Image
                    src={starknet}
                    alt="dollar"
                    width={16}
                    height={16}
                    className="inline-block mr-1"
                  />{" "}
                  {selectedBook.price || "N/A"}
                </div>
              </div>
              <div className="border border-[#E7E7E7] rounded-lg p-2">
                <div className="text-xs text-[#888888]">Date Submitted</div>
                <div className="font-medium text-sm">
                  {selectedBook.dateSubmitted}
                </div>
              </div>
              <div className="border border-[#E7E7E7] rounded-lg p-2">
                <div className="text-xs text-[#888888]">Review Status</div>
                <div className="font-medium text-sm">Pending</div>
              </div>
            </div>
          </div>
          {/* Description */}
          <div className="bg-white p-4 rounded-lg space-y-4 shadow-sm">
            <div className="space-y-4 border border-[#E7E7E7] p-4 rounded-lg">
              <h2 className="text-lg font-semibold text-[#888888]">
                Description
              </h2>
              <p className="text-[#888888] leading-relaxed">
                Delves into the complex and often insidious ways in which
                indigenous peoples and their unique experiences are rendered
                unseen and unheard in the modern era.
              </p>
              <Button
                variant="outline"
                className="border-[#888888] text-xs bg-transparent text-[#888888]"
              >
                Read More
              </Button>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="border border-[#E7E7E7] rounded-lg p-4">
                <div className="text-xs text-[#888888]">Genre(s)</div>
                <div className="flex gap-2 mt-1.5">
                  <div className="text-xs bg-[#F6F6F6] text-[#888888] px-2.5 py-1 rounded-md">
                    Fiction
                  </div>
                  <div className="text-xs bg-[#F6F6F6] text-[#888888] px-2 py-1 rounded-md">
                    Comic
                  </div>
                </div>
              </div>
              <div className="border border-[#E7E7E7] rounded-lg md:p-4 p-2">
                <div className="text-xs text-[#888888]">Page count</div>
                <div className="font-normal text-sm text-[#5D5D5D] mt-1.5">
                  {selectedBook.pageCount || "21 Pages"}
                </div>
              </div>
              <div className="border border-[#E7E7E7] rounded-lg md:p-4 p-2">
                <div className="text-sm text-gray-600">Language</div>
                <div className="font-normal text-sm text-[#5D5D5D] mt-1.5">
                  {selectedBook.language || "English"}
                </div>
              </div>
              <div className="border border-[#E7E7E7] rounded-lg md:p-4 p-2">
                <div className="text-xs text-[#888888]">Date Submitted</div>
                <div className="font-normal text-sm text-[#5D5D5D] mt-1.5">
                  {selectedBook.dateSubmitted || "21 April 2025"}
                </div>
              </div>
              <div className="border border-[#E7E7E7] rounded-lg md:p-4 p-2">
                <div className="text-xs text-[#888888]">ISBN</div>
                <div className="font-normal text-sm text-[#5D5D5D] mt-1.5">
                  {selectedBook.isbn || "ISBN: 978-3-16-148410-0"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderReportedContent = () => {
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
          {/* Book Info */}
          <div className="bg-white p-4 rounded-lg">
            <div className="flex justify-between ">
              <div className="flex flex-col lg:flex-row gap-6 items-center">
                <div className="flex-shrink-0">
                  <Image
                    src={check}
                    alt={selectedBook.title}
                    width={128}
                    height={176}
                    className=" object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h1 className="text-2xl font-bold text-[#5D5D5D]">
                      Native Invisibility
                    </h1>
                    <div className="flex items-center gap-2">
                      <p className="text-gray-600">By Darrin Collins</p>
                      <span className="inline-flex items-center justify-center rounded-full bg-blue-100 p-0.5">
                        <CheckCircle className="h-4 w-4 text-blue-500 fill-blue-500" />
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="ml-1 text-sm font-medium">
                          {selectedBook.rating || 4.5}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 items-start justify-start lg:items-start lg:justify-end w-full lg:w-auto">
                <button className="text-blue-600 border border-[#007AFF3D] rounded-md px-2 py-1">
                  <Image src={message} alt="message" width={24} height={24} />
                </button>
                {currentView === "book-approval" && (
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      onClick={handleReject}
                      className="border-[#FF6782] text-[#FF6782] hover:bg-[#FF6782] hover:text-white"
                    >
                      Reject
                    </Button>
                    <Button onClick={handleApprove} className="bg-[#096CFF]">
                      Approve
                    </Button>
                  </div>
                )}
                {currentView === "reported-content" && (
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className="border-[#096CFF] text-[#096CFF] hover:bg-[#096bffde] hover:text-white"
                    >
                      Mark as Resolved
                    </Button>
                    <Button
                      variant="outline"
                      className="border-[#FF6782] text-[#FF6782] hover:bg-[#FF6782] hover:text-white"
                    >
                      Remove Book
                    </Button>
                  </div>
                )}
              </div>
            </div>

            {currentView == "reported-content" && (
              <Button
                variant="outline"
                className="w-fit bg-transparent mt-6 bg-gradient-to-b from-[#e9edf0] to-[#a8c1e6] text-white"
              >
                Preview Book
              </Button>
            )}
            {/* Book Details Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-5 rounded-lg">
              <div className="border border-[#E7E7E7] rounded-lg p-2">
                <div className="text-xs text-[#888888]">Payment Type</div>
                <div className="text-sm font-medium">One-Time Payment</div>
              </div>
              <div className="border border-[#E7E7E7] rounded-lg p-2">
                <div className="text-xs text-[#888888]">Price</div>
                <div className="font-medium text-sm flex items-center gap-1">
                  <Image
                    src={starknet}
                    alt="dollar"
                    width={16}
                    height={16}
                    className="inline-block mr-1"
                  />{" "}
                  {selectedBook.price || "N/A"}
                </div>
              </div>
              <div className="border border-[#E7E7E7] rounded-lg p-2">
                <div className="text-xs text-[#888888]">Published Date</div>
                <div className="font-medium text-sm">
                  {selectedBook.dateSubmitted}
                </div>
              </div>
              <div className="border border-[#E7E7E7] rounded-lg p-2">
                <div className="text-xs text-[#888888]">Sold</div>
                <div className="font-medium text-sm">47</div>
              </div>
              <div className="border border-[#E7E7E7] rounded-lg p-2">
                <div className="text-xs text-[#888888]">Transaction</div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4 text-[#888888]" />
                  <div className="font-medium text-sm">All Transactions</div>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white p-4 rounded-lg space-y-4 shadow-sm">
            <div className="space-y-4 border border-[#E7E7E7] p-4 rounded-lg">
              <h2 className="text-lg font-semibold text-[#888888]">
                Description
              </h2>
              <p className="text-[#888888] leading-relaxed">
                Delves into the complex and often insidious ways in which
                indigenous peoples and their unique experiences are rendered
                unseen and unheard in the modern era.
              </p>
              <Button
                variant="outline"
                className="border-[#888888] text-xs bg-transparent text-[#888888]"
              >
                Read More
              </Button>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="border border-[#E7E7E7] rounded-lg p-4">
                <div className="text-xs text-[#888888]">Genre(s)</div>
                <div className="flex gap-2 mt-1.5">
                  <div className="text-xs bg-[#F6F6F6] text-[#888888] px-2.5 py-1 rounded-md">
                    Fiction
                  </div>
                  <div className="text-xs bg-[#F6F6F6] text-[#888888] px-2 py-1 rounded-md">
                    Comic
                  </div>
                </div>
              </div>
              <div className="border border-[#E7E7E7] rounded-lg md:p-4 p-2">
                <div className="text-xs text-[#888888]">Page count</div>
                <div className="font-normal text-sm text-[#5D5D5D] mt-1.5">
                  {selectedBook.pageCount || "21 Pages"}
                </div>
              </div>
              <div className="border border-[#E7E7E7] rounded-lg md:p-4 p-2">
                <div className="text-sm text-gray-600">Language</div>
                <div className="font-normal text-sm text-[#5D5D5D] mt-1.5">
                  {selectedBook.language || "English"}
                </div>
              </div>
              <div className="border border-[#E7E7E7] rounded-lg md:p-4 p-2">
                <div className="text-xs text-[#888888]">Date Submitted</div>
                <div className="font-normal text-sm text-[#5D5D5D] mt-1.5">
                  {selectedBook.dateSubmitted || "21 April 2025"}
                </div>
              </div>
              <div className="border border-[#E7E7E7] rounded-lg md:p-4 p-2">
                <div className="text-xs text-[#888888]">ISBN</div>
                <div className="font-normal text-sm text-[#5D5D5D] mt-1.5">
                  {selectedBook.isbn || "ISBN: 978-3-16-148410-0"}
                </div>
              </div>
            </div>
          </div>

          {/* Reports Section */}
          <div className="bg-white p-4 rounded-lg space-y-4 shadow-sm">
            <h2 className="text-lg font-semibold text-[#888888]">
              Reports & Comments
            </h2>

            <div className="space-y-6">
              <div className="border border-[#E7E7E7] rounded-lg p-6">
                <div className=" gap-4">
                  <div className="flex gap-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>LV</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col mb-2">
                      <span className="font-medium">Lana Victor</span>
                      <span className="text-xs text-gray-500">Yesterday</span>
                    </div>
                  </div>
                  <div className="mb-2">
                    <Badge
                      variant="destructive"
                      className="text-xs bg-[#EDF7FF]  py-1 px-3 rounded-xl text-[#5D5D5D]"
                    >
                      {"Plagiarism and Inappropriate Content"}
                    </Badge>
                  </div>
                  <p className="text-sm text-[#888888] mt-2">
                    Presenting someone else's work and used images, that are
                    unsuitable, offensive, harmful, disturbing, often based on
                    societal norms, legal standards, age
                  </p>
                </div>
              </div>

              <div className="border border-[#E7E7E7] rounded-lg p-6">
                <div className=" gap-4">
                  <div className="flex gap-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>SY</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <div className="flex flex-col mb-2">
                        <span className="font-medium">Samuel Yaro</span>
                        <span className="text-xs text-gray-500">
                          5 June, 2025
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2">
                    <Badge
                      variant="destructive"
                      className="text-xs bg-[#EDF7FF]  py-1 px-3 rounded-xl text-[#5D5D5D]"
                    >
                      Inappropriate Content
                    </Badge>
                  </div>
                  <p className="text-sm text-[#888888] mt-2">
                    Unsuitable, offensive, harmful, disturbing, often based on
                    societal norms, legal standards, age
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 -z-10">
      <div className=" mx-auto">
        {currentView === "dashboard" && renderDashboard()}
        {currentView === "book-details" && renderBookDetails()}
        {currentView === "book-approval" && renderBookPendingApproval()}
        {currentView === "reported-content" && renderReportedContent()}
      </div>

      {/* Reject Modal */}
      {isRejectModalOpen && (
        <div className="fixed inset-0 bg-[#0b0a0a9d] bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-gray-900">
                Reject Publication
              </h2>
              <button
                onClick={handleRejectCancel}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <p className="text-sm text-gray-600 mb-4">
              Enter the reason you are rejecting this book for publication
            </p>

            <div className="bg-gray-100 rounded-lg p-3 mb-4">
              <p className="text-sm text-gray-600">
                Rejected by: Ola**p@gmail.com
              </p>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                placeholder="Provide the reason for rejection"
                value={rejectReason}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setRejectReason(e.target.value)
                }
                className="w-full min-h-[100px] resize-none rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="outline"
                onClick={handleRejectCancel}
                className="flex-1 border-blue-500 text-blue-500 hover:bg-blue-50 text-sm"
              >
                Cancel
              </Button>
              <Button
                onClick={handleRejectSubmit}
                disabled={!rejectReason.trim()}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white text-sm"
              >
                Reject
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

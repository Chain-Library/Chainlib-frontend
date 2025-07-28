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

type ViewType = "dashboard" | "book-details" | "book-approval";
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
    | "Valid";
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

  const handleBookClick = (book: Book) => {
    setSelectedBook(book);
    if (book.status === "Pending") {
      setCurrentView("book-approval");
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
    if (selectedBook) {
      // Handle rejection logic
      console.log("Rejected:", selectedBook.title);
      handleBackToDashboard();
    }
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      <Header title="Content Management" />

      <div className="bg-white rounded-lg border p-4 gap-4">
        {/* Time Filter */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-3">
          <div className="flex gap-2">
            {["This Week", "This Month", "This Year", "All Time"].map(
              (filter) => (
                <Button
                  key={filter}
                  size="sm"
                  variant="ghost"
                  onClick={() => setTimeFilter(filter)}
                  className={`text-sm rounded-md mb-5 px-4 py-2 ${
                    timeFilter === filter ? "bg-[#F6F6F6] text-black" : ""
                  }`}
                >
                  {filter}
                </Button>
              )
            )}
          </div>

          <div className="flex items-center gap-2 ml-auto">
            <Input
              placeholder="dd/mm/yyyy"
              className="w-32 text-sm text-[#B0B0B0]"
            />
            <span className="text-sm text-[#888888]">to</span>
            <Input
              placeholder="dd/mm/yyyy"
              className="w-32 text-sm text-[#B0B0B0]"
            />
            <Button
              size="sm"
              variant="outline"
              className="rounded-md bg-[#E7E7E7] text-[#888888]"
            >
              Apply
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 border border-[#E7E7E7] rounded-lg p-4 gap-4">
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
        <div className="flex flex-col bg-[#F6F6F6] -mb-2 rounded-lg rounded-br-none rounded-bl-none p-4 sm:flex-row sm:items-center sm:justify-between gap-4">
          <TabsList className="bg-transparent p-0 border-0 shadow-none">
            <TabsTrigger
              value="all-books"
              className={`font-semibold px-4 mr-2 py-2 rounded-md data-[state=active]:bg-[#096CFF] data-[state=active]:text-white data-[state=inactive]:bg-[#F6F6F6] data-[state=inactive]:text-[#888888] bg-[#F6F6F6] text-[#888888] transition-colors`}
            >
              All Books
            </TabsTrigger>
            <TabsTrigger
              value="pending-approval"
              className={`font-semibold px-4 mr-2 py-2 rounded-md data-[state=active]:bg-[#096CFF] data-[state=active]:text-white data-[state=inactive]:bg-[#F6F6F6] data-[state=inactive]:text-[#888888] bg-[#F6F6F6] text-[#888888] transition-colors`}
            >
              Pending Approval
              <Badge
                variant="destructive"
                className="ml-2 h-5 w-5 rounded-full p-0 text-xs"
              >
                27
              </Badge>
            </TabsTrigger>
            <TabsTrigger
              value="reported-content"
              className={`font-semibold px-4 py-2 rounded-md data-[state=active]:bg-[#096CFF] data-[state=active]:text-white data-[state=inactive]:bg-[#F6F6F6] data-[state=inactive]:text-[#888888] bg-[#F6F6F6] text-[#888888] transition-colors`}
            >
              Reported Content
            </TabsTrigger>
          </TabsList>

          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 border border-[#D1D1D1] rounded-md top-1/2 transform -translate-y-1/2 text-[#B0B0B0] h-4 w-4" />
              <Input placeholder="Search for a Reader" className="pl-10 w-64" />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-[#888888]"
                  type="button"
                >
                  Sort <Filter className="ml-2 h-4 w-4" />
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
                  className="text-[#888888]"
                  type="button"
                >
                  Filter <Filter className="ml-2 h-4 w-4" />
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

        <div className="flex p-4 justify-between items-center text-sm text-gray-500">
          <span>Showing 1 to 10 of 107</span>
          <Button variant="ghost" size="sm">
            View All
          </Button>
        </div>
      </Tabs>
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
          <table className="w-full">
            <thead className="border-b bg-[#EDF7FF]">
              <tr>
                {getTableHeaders().map((header, index) => (
                  <th
                    key={index}
                    className="text-left p-4 text-sm font-medium text-gray-600"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.id} className="border-b hover:bg-gray-50">
                  <td className="p-4">
                    <img
                      src={book.cover || "/placeholder.svg"}
                      alt={"Book Cover"}
                      className="w-14 h-16 object-cover rounded bg-gray-200"
                    />
                  </td>
                  <td className="p-4">
                    <div className="font-medium text-gray-900">
                      {book.title}
                    </div>
                    <div className="text-sm text-gray-500">
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
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={handleBackToDashboard}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Book Details
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>AL</AvatarFallback>
            </Avatar>
            <div className="text-sm">
              <div className="font-medium">Anna Loop</div>
              <div className="text-gray-500">anna***p@gmail.com</div>
            </div>
          </div>
        </div>

        {/* Book Info */}
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-shrink-0">
            <img
              src={selectedBook.cover || "/placeholder.svg"}
              alt={selectedBook.title}
              className="w-32 h-44 object-cover rounded-lg bg-gray-200"
            />
          </div>
          <div className="flex-1 space-y-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {selectedBook.title}
              </h1>
              <p className="text-gray-600">By {selectedBook.author}</p>
              {selectedBook.rating && (
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-sm font-medium">
                      {selectedBook.rating}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {currentView === "book-approval" && (
              <div className="flex gap-2">
                <Button variant="outline" onClick={handleReject}>
                  Reject
                </Button>
                <Button onClick={handleApprove}>Approve</Button>
              </div>
            )}

            <Button variant="outline" className="w-fit bg-transparent">
              Preview Book
            </Button>
          </div>
        </div>

        {/* Book Details Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-gray-50 p-6 rounded-lg">
          <div>
            <div className="text-sm text-gray-600">Payment Type</div>
            <div className="font-medium">One-Time Payment</div>
          </div>
          <div>
            <div className="text-sm text-gray-600">Price</div>
            <div className="font-medium">{selectedBook.price || "N/A"}</div>
          </div>
          <div>
            <div className="text-sm text-gray-600">Published Date</div>
            <div className="font-medium">{selectedBook.dateSubmitted}</div>
          </div>
          <div>
            <div className="text-sm text-gray-600">Sold</div>
            <div className="font-medium">{selectedBook.sold || "N/A"}</div>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Description</h2>
          <p className="text-gray-600 leading-relaxed">
            Delves into the complex and often insidious ways in which indigenous
            peoples and their unique experiences are rendered unseen and unheard
            in the modern era.
          </p>
          <Button variant="outline" size="sm">
            Read More
          </Button>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div className="text-sm text-gray-600">Genre(s)</div>
            <div className="flex gap-2 mt-1">
              {selectedBook.genre?.map((g) => (
                <Badge key={g} variant="secondary">
                  {g}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-600">Page count</div>
            <div className="font-medium">{selectedBook.pageCount}</div>
          </div>
          <div>
            <div className="text-sm text-gray-600">Language</div>
            <div className="font-medium">{selectedBook.language}</div>
          </div>
          <div>
            <div className="text-sm text-gray-600">ISBN</div>
            <div className="font-medium">{selectedBook.isbn}</div>
          </div>
        </div>

        {/* Performance Stats */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Book Performance Stats</h2>
          <div className="flex gap-4 text-sm">
            <Button variant="ghost" size="sm">
              This Week
            </Button>
            <Button variant="ghost" size="sm">
              This Month
            </Button>
            <Button variant="ghost" size="sm">
              This Year
            </Button>
            <Button variant="ghost" size="sm">
              All Time
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-4">
                <div className="text-sm text-gray-600">Read</div>
                <div className="text-2xl font-bold text-blue-600">192</div>
                <div className="text-xs text-red-500">-10%</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-sm text-gray-600">
                  Read Completion Rate
                </div>
                <div className="text-2xl font-bold text-green-600">75%</div>
                <div className="text-xs text-green-500">+5%</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-sm text-gray-600">Purchase</div>
                <div className="text-2xl font-bold text-blue-600">62</div>
                <div className="text-xs text-green-500">+8%</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-sm text-gray-600">Total Complete Read</div>
                <div className="text-2xl font-bold">70%</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-sm text-gray-600">Total Earning</div>
                <div className="text-2xl font-bold text-blue-600">$ 370.00</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-sm text-gray-600">Average Rating</div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-2xl font-bold">3.5</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="space-y-6">
          <h2 className="text-lg font-semibold">Reviews and Rating</h2>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold text-gray-900">3.5</div>
              <div className="flex justify-center gap-1 my-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-5 w-5 ${
                      star <= 3
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <div className="text-sm text-gray-600">1202 Reviews</div>
            </div>

            <div className="flex-1 space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center gap-4">
                  <span className="text-sm w-2">{rating}</span>
                  <Progress
                    value={rating === 3 ? 60 : rating === 4 ? 30 : 10}
                    className="flex-1"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Individual Reviews */}
          <div className="space-y-6">
            {[1, 2, 3, 4, 5, 6].map((review) => (
              <div key={review} className="border-b pb-6">
                <div className="flex items-start gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>AS</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium">Adeja Samad</span>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4].map((star) => (
                          <Star
                            key={star}
                            className="h-4 w-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                        <Star className="h-4 w-4 text-gray-300" />
                      </div>
                      <span className="text-sm text-gray-500">Yesterday</span>
                    </div>
                    <p className="text-gray-700 mb-3">
                      This was a great read, and I was hooked. However, the
                      death of my favorite character impacted my overall
                      enjoyment, which is why I'm rating it 4 stars instead of
                      5.
                    </p>
                    <div className="flex items-center gap-4">
                      <Button variant="ghost" size="sm">
                        Delete
                      </Button>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Avatar className="h-5 w-5">
                          <AvatarFallback className="text-xs">
                            AR
                          </AvatarFallback>
                        </Avatar>
                        <span>Author Replied</span>
                        <span>• 1 Reply</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                        <span className="text-sm text-gray-500">Yesterday</span>
                      </div>
                      <div className="mb-2">
                        <Badge variant="destructive" className="text-xs">
                          Plagiarism and Inappropriate Content
                        </Badge>
                      </div>
                      <p className="text-gray-700">
                        Presenting someone else's work and used images, that are
                        unsuitable, offensive, harmful, disturbing, often based
                        on societal norms, legal standards, age
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
                        Unsuitable, offensive, harmful, disturbing, often based
                        on societal norms, legal standards, age
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className=" mx-auto p-6">
        {currentView === "dashboard" && renderDashboard()}
        {(currentView === "book-details" || currentView === "book-approval") &&
          renderBookDetails()}
      </div>
    </div>
  );
}

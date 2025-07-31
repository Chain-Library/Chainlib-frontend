"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Search, Filter, Eye } from "lucide-react";
import Image from "next/image";

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

interface BookTableProps {
  books: Book[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onBookClick: (book: Book) => void;
}

export function BookTable({
  books,
  activeTab,
  setActiveTab,
  onBookClick,
}: BookTableProps) {
  const getTableHeaders = (tabType: string) => {
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

  const renderBookRow = (book: Book, tabType: string) => {
    return (
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
            <td className="p-2 sm:p-4">
              <Badge
                variant="secondary"
                className="bg-green-100 text-[#34A853] px-2 py-1"
              >
                {book.status}
              </Badge>
            </td>
            <td className="p-2 sm:p-4 text-xs sm:text-sm text-gray-600">
              {book.type}
            </td>
            <td className="p-2 sm:p-4 text-xs sm:text-sm text-gray-600">
              {book.datePublished}
            </td>
            <td className="p-2 sm:p-4">
              <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-600">
                <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                {book.interactions}
              </div>
            </td>
          </>
        )}
        {tabType === "pending-approval" && (
          <>
            <td className="p-2 sm:p-4 text-xs sm:text-sm text-gray-600">
              {book.type}
            </td>
            <td className="p-2 sm:p-4 text-xs sm:text-sm text-gray-600">
              {book.dateSubmitted}
            </td>
            <td className="p-2 sm:p-4">
              <Badge
                variant="outline"
                className="border-orange-200 text-orange-800 bg-orange-50"
              >
                {book.status}
              </Badge>
            </td>
          </>
        )}
        {tabType === "reported-content" && (
          <>
            <td className="p-2 sm:p-4 text-xs sm:text-sm text-gray-600">
              {book.reportType}
            </td>
            <td className="p-2 sm:p-4 text-xs sm:text-sm text-gray-600">
              {book.reportedBy}
            </td>
            <td className="p-2 sm:p-4 text-xs sm:text-sm text-gray-600">
              {book.dateSubmitted}
            </td>
            <td className="p-2 sm:p-4">
              <Badge
                variant={
                  book.status === "Resolved" ? "secondary" : "destructive"
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
        <td className="p-2 sm:p-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onBookClick(book)}
            className="text-blue-600 hover:text-blue-800 text-xs sm:text-sm"
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
    );
  };

  return (
    <Tabs
      value={activeTab}
      onValueChange={(value) => setActiveTab(value)}
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
                  Sort <Filter className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
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
        <div className="rounded-lg mb-2 border-b border-[#E7E7E7] rounded-tr-none rounded-tl-none">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead className="border-b bg-[#EDF7FF]">
                <tr>
                  {getTableHeaders("all-books").map((header, index) => (
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
                {books
                  .filter((book) => book.status === "Approved")
                  .map((book) => renderBookRow(book, "all-books"))}
              </tbody>
            </table>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="pending-approval" className="space-y-4">
        <div className="rounded-lg mb-2 border-b border-[#E7E7E7] rounded-tr-none rounded-tl-none">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead className="border-b bg-[#EDF7FF]">
                <tr>
                  {getTableHeaders("pending-approval").map((header, index) => (
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
                {books
                  .filter((book) => book.status === "Pending")
                  .map((book) => renderBookRow(book, "pending-approval"))}
              </tbody>
            </table>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="reported-content" className="space-y-4">
        <div className="rounded-lg mb-2 border-b border-[#E7E7E7] rounded-tr-none rounded-tl-none">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead className="border-b bg-[#EDF7FF]">
                <tr>
                  {getTableHeaders("reported-content").map((header, index) => (
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
                {books
                  .filter(
                    (book) =>
                      book.status === "Unresolved" || book.status === "Resolved"
                  )
                  .map((book) => renderBookRow(book, "reported-content"))}
              </tbody>
            </table>
          </div>
        </div>
      </TabsContent>

      <div className="flex flex-col sm:flex-row p-4 justify-between items-start sm:items-center gap-2 text-xs sm:text-sm text-gray-500">
        <span>Showing 1 to 10 of 107</span>
        <Button variant="ghost" size="sm" className="text-xs sm:text-sm">
          View All
        </Button>
      </div>
    </Tabs>
  );
}

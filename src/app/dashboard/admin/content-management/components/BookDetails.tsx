"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, CheckCircle, Eye, Download } from "lucide-react";
import Image from "next/image";
import check from "../../../../../../public/Cover.png";
import message from "../../../../../../public/Chat.svg";
import starknet from "../../../../../../public/starknet.png";
import user1 from "../../../../../../public/user1.svg";

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

interface BookDetailsProps {
  book: Book;
  currentView: string;
  onReject?: () => void;
  onApprove?: () => void;
}

export function BookDetails({
  book,
  currentView,
  onReject,
  onApprove,
}: BookDetailsProps) {
  return (
    <div className="space-y-6">
      {/* Book Info */}
      <div className="bg-white p-4 rounded-lg">
        <div className="flex flex-col lg:flex-row justify-between gap-4">
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 items-start">
            <div className="flex-shrink-0">
              <Image
                src={check}
                alt={book.title}
                width={128}
                height={176}
                className="w-20 h-28 sm:w-24 sm:h-32 lg:w-32 lg:h-44 object-cover rounded-lg"
              />
            </div>
            <div className="flex-1 space-y-2 sm:space-y-4">
              <div>
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#5D5D5D]">
                  Native Invisibility
                </h1>
                <div className="flex items-center gap-2">
                  <p className="text-gray-600 text-sm sm:text-base">
                    By Darrin Collins
                  </p>
                  <span className="inline-flex items-center justify-center rounded-full bg-blue-100 p-0.5">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500 fill-blue-500" />
                  </span>
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center">
                    <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-xs sm:text-sm font-medium">
                      {book.rating || 4.5}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 items-start w-full lg:w-auto">
            <button className="text-blue-600 border border-[#007AFF3D] rounded-md px-2 py-1">
              <Image src={message} alt="message" width={24} height={24} />
            </button>
            {currentView === "book-approval" && (
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={onReject}
                  className="border-[#FF6782] text-[#FF6782] hover:bg-[#FF6782] hover:text-white"
                >
                  Reject
                </Button>
                <Button onClick={onApprove} className="bg-[#096CFF]">
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
            {currentView === "book-details" && (
              <button className="text-red-600 border border-[#FF67823D] rounded-md px-3 py-2 w-fit">
                Unpublish Book
              </button>
            )}
          </div>
        </div>

        {currentView === "book-approval" && (
          <Button
            variant="outline"
            className="w-fit bg-transparent mt-6 bg-gradient-to-b from-[#e9edf0] to-[#a8c1e6] text-white"
          >
            Preview Book
          </Button>
        )}

        {currentView === "reported-content" && (
          <Button
            variant="outline"
            className="w-fit bg-transparent mt-6 bg-gradient-to-b from-[#e9edf0] to-[#a8c1e6] text-white"
          >
            Preview Book
          </Button>
        )}

        {/* Book Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-5 rounded-lg">
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
              />
              {book.price || "N/A"}
            </div>
          </div>
          <div className="border border-[#E7E7E7] rounded-lg p-2">
            <div className="text-xs text-[#888888]">Published Date</div>
            <div className="font-medium text-sm">{book.dateSubmitted}</div>
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
          <h2 className="text-lg font-semibold text-[#888888]">Description</h2>
          <p className="text-[#888888] leading-relaxed">
            Delves into the complex and often insidious ways in which indigenous
            peoples and their unique experiences are rendered unseen and unheard
            in the modern era.
          </p>
          <Button
            variant="outline"
            className="border-[#888888] text-xs bg-transparent text-[#888888]"
          >
            Read More
          </Button>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
              {book.pageCount || "21 Pages"}
            </div>
          </div>
          <div className="border border-[#E7E7E7] rounded-lg md:p-4 p-2">
            <div className="text-sm text-gray-600">Language</div>
            <div className="font-normal text-sm text-[#5D5D5D] mt-1.5">
              {book.language || "English"}
            </div>
          </div>
          <div className="border border-[#E7E7E7] rounded-lg md:p-4 p-2">
            <div className="text-xs text-[#888888]">Published Date</div>
            <div className="font-normal text-sm text-[#5D5D5D] mt-1.5">
              {book.dateSubmitted || "21 April 2025"}
            </div>
          </div>
          <div className="border border-[#E7E7E7] rounded-lg md:p-4 p-2">
            <div className="text-xs text-[#888888]">ISBN</div>
            <div className="font-normal text-sm text-[#5D5D5D] mt-1.5">
              {book.isbn || "ISBN: 978-3-16-148410-0"}
            </div>
          </div>
        </div>
      </div>

      {/* Performance Stats */}
      {currentView === "book-details" && (
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-[#888888]">
              Book Performance Stats
            </h2>
            <div className="flex gap-4 text-sm rounded-lg p-2">
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
              <Card className="h-[100px] p-2 bg-transparent border border-[#E7E7E7]">
                <CardContent className="px-4 py-2">
                  <div className="text-sm text-gray-600 mb-1.5">Read</div>
                  <div className="flex items-center gap-2">
                    <div className="text-2xl font-bold text-blue-600">192</div>
                    <div className="text-[10px] bg-red-100 text-red-500 px-1 py-0.5 rounded-md">
                      -10%
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-2 h-[100px] bg-transparent border border-[#E7E7E7]">
                <CardContent className="p-2">
                  <div className="text-sm text-gray-600 mb-1.5">
                    Read Completion Rate
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-xl font-bold text-green-600">75%</div>
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
                    />
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
      )}

      {currentView == "book-details" && (
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
                        <span className="text-sm text-gray-500">Yesterday</span>
                      </div>

                      <p className="text-[#5D5D5D] mb-3">
                        This was a great read, and I was hooked. However, the
                        death of my favorite character impacted my overall
                        enjoyment, which is why I'm rating it 4 stars instead of
                        5.
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
      )}
    </div>
  );
}

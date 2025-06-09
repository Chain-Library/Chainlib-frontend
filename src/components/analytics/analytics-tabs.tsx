import React from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const AnalyticsTabs = () => {
  const books = [
    { rank: 1, title: "The Act" },
    { rank: 2, title: "Live at Night" },
    { rank: 3, title: "Prince of Peace" },
    { rank: 4, title: "Late Every Night" },
    { rank: 5, title: "The 91 Law of Power" },
  ];
  return (
    <Tabs defaultValue="week" className="w-full">
      <TabsList className="bg-transparent">
        <TabsTrigger value="week">This Week</TabsTrigger>
        <TabsTrigger value="month">This Month</TabsTrigger>
        <TabsTrigger value="year">This Year</TabsTrigger>
        <TabsTrigger value="all">All Time</TabsTrigger>
      </TabsList>
      <TabsContent value="week">
        {/* Two Column Layout */}
        <div className=" bg-white grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Stats for Act */}
          <div className=" flex px-4 flex-col ">
            <h3 className="text-xl  font-bold text-gray-400 mb-6">
              Stats for Act
            </h3>

            <div className="p-6 h-[350px] grid grid-cols-1  content-start gap-6 sm:grid-cols-2 xl:grid-cols-3 border rounded-lg border-gray-200/40">
              <div className="p-4 border rounded-lg">
                <div className="text-sm text-gray-600 mb-2">Read</div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-blue-600">
                    192
                  </span>
                  <span className="text-xs bg-red-100 text-red-600 px-1 py-0.5 rounded">
                    -20%
                  </span>
                </div>
              </div>

              <div className="p-4 border border-gray-200/40 rounded-lg">
                <div className="text-sm text-gray-600 mb-2">
                  Read Compl Rate
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-blue-600">
                    75%
                  </span>
                  <span className="text-xs bg-green-100 text-green-600 px-1 py-0.5 rounded">
                    +16%
                  </span>
                </div>
              </div>

              <div className="p-4 border border-gray-200/40 rounded-lg">
                <div className="text-sm text-gray-600 mb-2">Sale</div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-blue-600">
                    62
                  </span>
                  <span className="text-xs bg-green-100 text-green-600 px-1 py-0.5 rounded">
                    +20%
                  </span>
                </div>
              </div>

              <div className="p-4 border border-gray-200/40 rounded-lg">
                <div className="text-sm text-gray-600 mb-2">Total Earning</div>
                <div className="text-lg flex items-center gap-2 font-semibold text-gray-900">
                  <Image
                    src="/starknet.png"
                    alt="Indian Rupee"
                    width={20}
                    height={20}
                  />
                  3150.00
                </div>
              </div>

              <div className="p-4 border border-gray-200/40 rounded-lg">
                <div className="text-sm text-gray-600 mb-2">Average Rating</div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold text-gray-900">
                    3.5
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Top Performing Books */}
          <div className=" h-[350px] rounded-lg ">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl  font-bold text-gray-400">
                Top Performing Books
              </h3>
              <Button variant="outline" size="sm" className="text-gray-600">
                View All
              </Button>
            </div>

            <div className="space-y-4   p-4 border rounded-lg border-gray-200/40">
              {books.map((book) => (
                <div key={book.rank} className="flex items-center gap-4">
                  <span className="text-gray-500 font-medium">
                    {book.rank}.
                  </span>
                  <div className="w-12 h-12 bg-gray-200 rounded"></div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">
                      {book.title}
                    </div>
                  </div>
                  <Button variant="link" className="text-blue-600 p-0 h-auto">
                    View Details
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="month">
        {/* Two Column Layout */}
        <div className=" bg-white grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Stats for Act */}
          <div className=" flex px-4 flex-col ">
            <h3 className="text-xl  font-bold text-gray-400 mb-6">
              Stats for Act
            </h3>

            <div className="p-6 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 border rounded-lg border-gray-200/40">
              <div className="p-4 border rounded-lg">
                <div className="text-sm text-gray-600 mb-2">Read</div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-blue-600">
                    192
                  </span>
                  <span className="text-xs bg-red-100 text-red-600 px-1 py-0.5 rounded">
                    -20%
                  </span>
                </div>
              </div>

              <div className="p-4 border border-gray-200/40 rounded-lg">
                <div className="text-sm text-gray-600 mb-2">
                  Read Compl Rate
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-blue-600">
                    75%
                  </span>
                  <span className="text-xs bg-green-100 text-green-600 px-1 py-0.5 rounded">
                    +16%
                  </span>
                </div>
              </div>

              <div className="p-4 border border-gray-200/40 rounded-lg">
                <div className="text-sm text-gray-600 mb-2">Sale</div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-blue-600">
                    62
                  </span>
                  <span className="text-xs bg-green-100 text-green-600 px-1 py-0.5 rounded">
                    +20%
                  </span>
                </div>
              </div>

              <div className="p-4 border border-gray-200/40 rounded-lg">
                <div className="text-sm text-gray-600 mb-2">Total Earning</div>
                <div className="text-lg flex items-center gap-2 font-semibold text-gray-900">
                  <Image
                    src="/starknet.png"
                    alt="Indian Rupee"
                    width={20}
                    height={20}
                  />
                  3150.00
                </div>
              </div>

              <div className="p-4 border border-gray-200/40 rounded-lg">
                <div className="text-sm text-gray-600 mb-2">Average Rating</div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold text-gray-900">
                    3.5
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Top Performing Books */}
          <div className=" rounded-lg ">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl  font-bold text-gray-400">
                Top Performing Books
              </h3>
              <Button variant="outline" size="sm" className="text-gray-600">
                View All
              </Button>
            </div>

            <div className="space-y-4   p-4 border rounded-lg border-gray-200/40">
              {books.map((book) => (
                <div key={book.rank} className="flex items-center gap-4">
                  <span className="text-gray-500 font-medium">
                    {book.rank}.
                  </span>
                  <div className="w-12 h-12 bg-gray-200 rounded"></div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">
                      {book.title}
                    </div>
                  </div>
                  <Button variant="link" className="text-blue-600 p-0 h-auto">
                    View Details
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="year">
        {/* Two Column Layout */}
        <div className=" bg-white grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Stats for Act */}
          <div className=" flex px-4 flex-col ">
            <h3 className="text-xl  font-bold text-gray-400 mb-6">
              Stats for Act
            </h3>

            <div className="p-6 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 border rounded-lg border-gray-200/40">
              <div className="p-4 border rounded-lg">
                <div className="text-sm text-gray-600 mb-2">Read</div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-blue-600">
                    192
                  </span>
                  <span className="text-xs bg-red-100 text-red-600 px-1 py-0.5 rounded">
                    -20%
                  </span>
                </div>
              </div>

              <div className="p-4 border border-gray-200/40 rounded-lg">
                <div className="text-sm text-gray-600 mb-2">
                  Read Compl Rate
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-blue-600">
                    75%
                  </span>
                  <span className="text-xs bg-green-100 text-green-600 px-1 py-0.5 rounded">
                    +16%
                  </span>
                </div>
              </div>

              <div className="p-4 border border-gray-200/40 rounded-lg">
                <div className="text-sm text-gray-600 mb-2">Sale</div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-blue-600">
                    62
                  </span>
                  <span className="text-xs bg-green-100 text-green-600 px-1 py-0.5 rounded">
                    +20%
                  </span>
                </div>
              </div>

              <div className="p-4 border border-gray-200/40 rounded-lg">
                <div className="text-sm text-gray-600 mb-2">Total Earning</div>
                <div className="text-lg flex items-center gap-2 font-semibold text-gray-900">
                  <Image
                    src="/starknet.png"
                    alt="Indian Rupee"
                    width={20}
                    height={20}
                  />
                  3150.00
                </div>
              </div>

              <div className="p-4 border border-gray-200/40 rounded-lg">
                <div className="text-sm text-gray-600 mb-2">Average Rating</div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold text-gray-900">
                    3.5
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Top Performing Books */}
          <div className=" rounded-lg ">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl  font-bold text-gray-400">
                Top Performing Books
              </h3>
              <Button variant="outline" size="sm" className="text-gray-600">
                View All
              </Button>
            </div>

            <div className="space-y-4   p-4 border rounded-lg border-gray-200/40">
              {books.map((book) => (
                <div key={book.rank} className="flex items-center gap-4">
                  <span className="text-gray-500 font-medium">
                    {book.rank}.
                  </span>
                  <div className="w-12 h-12 bg-gray-200 rounded"></div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">
                      {book.title}
                    </div>
                  </div>
                  <Button variant="link" className="text-blue-600 p-0 h-auto">
                    View Details
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="all">
        {/* Two Column Layout */}
        <div className=" bg-white grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Stats for Act */}
          <div className=" flex px-4 flex-col ">
            <h3 className="text-xl  font-bold text-gray-400 mb-6">
              Stats for Act
            </h3>

            <div className="p-6 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 border rounded-lg border-gray-200/40">
              <div className="p-4 border rounded-lg">
                <div className="text-sm text-gray-600 mb-2">Read</div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-blue-600">
                    192
                  </span>
                  <span className="text-xs bg-red-100 text-red-600 px-1 py-0.5 rounded">
                    -20%
                  </span>
                </div>
              </div>

              <div className="p-4 border border-gray-200/40 rounded-lg">
                <div className="text-sm text-gray-600 mb-2">
                  Read Compl Rate
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-blue-600">
                    75%
                  </span>
                  <span className="text-xs bg-green-100 text-green-600 px-1 py-0.5 rounded">
                    +16%
                  </span>
                </div>
              </div>

              <div className="p-4 border border-gray-200/40 rounded-lg">
                <div className="text-sm text-gray-600 mb-2">Sale</div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-blue-600">
                    62
                  </span>
                  <span className="text-xs bg-green-100 text-green-600 px-1 py-0.5 rounded">
                    +20%
                  </span>
                </div>
              </div>

              <div className="p-4 border border-gray-200/40 rounded-lg">
                <div className="text-sm text-gray-600 mb-2">Total Earning</div>
                <div className="text-lg flex items-center gap-2 font-semibold text-gray-900">
                  <Image
                    src="/starknet.png"
                    alt="Indian Rupee"
                    width={20}
                    height={20}
                  />
                  3150.00
                </div>
              </div>

              <div className="p-4 border border-gray-200/40 rounded-lg">
                <div className="text-sm text-gray-600 mb-2">Average Rating</div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold text-gray-900">
                    3.5
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Top Performing Books */}
          <div className=" rounded-lg ">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl  font-bold text-gray-400">
                Top Performing Books
              </h3>
              <Button variant="outline" size="sm" className="text-gray-600">
                View All
              </Button>
            </div>

            <div className="space-y-4   p-4 border rounded-lg border-gray-200/40">
              {books.map((book) => (
                <div key={book.rank} className="flex items-center gap-4">
                  <span className="text-gray-500 font-medium">
                    {book.rank}.
                  </span>
                  <div className="w-12 h-12 bg-gray-200 rounded"></div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">
                      {book.title}
                    </div>
                  </div>
                  <Button variant="link" className="text-blue-600 p-0 h-auto">
                    View Details
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default AnalyticsTabs;

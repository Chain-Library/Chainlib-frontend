"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Heart, Star, Images } from "lucide-react";
import { Header } from "@/components/dashboard/header";
import Image from "next/image";
import nft from "../../../../../public/Group 13.svg"

const books = [
  {
    id: 1,
    title: "Native Invisibility",
    author: "Darrin Collins",
    price: "$10",
    rating: 4.5,
    series: "4 Series",
    image: "/bookCover.png",
    isLiked: true,
    nft: false,
  },
  {
    id: 2,
    title: "Native Invisibility",
    author: "Darrin Collins",
    price: "$10",
    rating: 4.5,
    series: "4 Series",
    image: "/bookCover.png",
    isLiked: true,
    nft: false,
  },
  {
    id: 3,
    title: "Native Invisibility",
    author: "Darrin Collins",
    price: "$10",
    rating: 4.5,
    series: "",
    image: "/bookCover.png",
    isLiked: true,
    nft: true,
  },
  {
    id: 4,
    title: "Native Invisibility",
    author: "Darrin Collins",
    price: "$10",
    rating: 4.5,
    series: "",
    image: "/bookCover.png",
    isLiked: true,
    nft: false,
  },
];

export default function WishlistPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [bookType, setBookType] = useState("all");
  const [genre, setGenre] = useState("all");
  const [likedBooks, setLikedBooks] = useState<number[]>([1, 2, 3, 4]);

  const toggleLike = (bookId: number) => {
    setLikedBooks((prev) =>
      prev.includes(bookId)
        ? prev.filter((id) => id !== bookId)
        : [...prev, bookId]
    );
  };

  const buyAllBooks = () => {
    alert(`Purchasing ${likedBooks.length} books from wishlist!`);
  };



  return (
    <div className="flex flex-col h-full">
      <Header title="Wishlist" />

      {/* Content */}
      <div className="flex-1 mt-16 p-4 lg:p-6 overflow-auto">
        {/* Search and Filters */}
        <div className="py-4">
          <div className="">
            <div className="gap-4 flex items-center relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="What are we looking for"
                className="pl-10 w-[400px] placeholder:text-[#B0B0B0]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="right-3 flex gap-2">
                <Select value={bookType} onValueChange={setBookType}>
                  <SelectTrigger className="w-32 text-[#888888]">
                    <SelectValue placeholder="Book Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="ebook">E-book</SelectItem>
                    <SelectItem value="audiobook">Audiobook</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={genre} onValueChange={setGenre}>
                  <SelectTrigger className="w-32 text-[#888888]">
                    <SelectValue placeholder="Genre" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Genres</SelectItem>
                    <SelectItem value="fiction">Fiction</SelectItem>
                    <SelectItem value="mystery">Mystery</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        {/* Books Section */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-4 lg:p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-medium">Books</h2>
              <Button
                onClick={buyAllBooks}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Buy All({likedBooks.length}) Now
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {books.map((book) => (
                <Card key={book.id} className="relative group">
                  <CardContent className="p-4">
                    <div className="relative mb-4">
                      <Image
                        src={book.image || "/bookCover.png"}
                        alt={book.title}
                        width={50}
                        height={50}
                        className="w-1/2 mx-auto h-48 object-cover rounded-lg"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                        onClick={() => toggleLike(book.id)}
                      >
                        <Heart
                          className={`w-4 h-4 ${
                            likedBooks.includes(book.id)
                              ? "fill-red-500 text-red-500"
                              : "text-gray-400"
                          }`}
                        />
                      </Button>
                    </div>
                          <div className="space-y-2">
                              {book.nft && <Image src={nft} alt="nft"/>}
                      <h3 className="font-medium text-gray-900">
                        {book.title}
                      </h3>
                      <div className="flex items-center gap-1">
                        <span className="text-sm text-gray-600">
                          By {book.author}
                        </span>
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">{book.price}</span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm">{book.rating}</span>
                        </div>
                      </div>
                      {book.series && (
                        <div className="flex gap-1">
                          <Images className="text-base w-4" />
                          {book.series}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

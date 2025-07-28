"use client";
import { trendingBooks } from "../../assets/data/dummyData";
import BookCard from "./BookCard";

const TrendingBooks = () => (
  <div className="mt-6">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-semibold text-gray-700">Trending Books</h2>
      <button className="text-sm text-gray-500 hover:underline">
        View All &rarr;
      </button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {trendingBooks.map((book, index) => (
        <BookCard key={index} {...book} />
      ))}
    </div>
  </div>
);
export default TrendingBooks;

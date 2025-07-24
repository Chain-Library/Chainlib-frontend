"use client"
import { topAuthors } from "../../assets/data/dummyData";
import AuthorCard from "./AuthorCard";

const TopAuthors = () => (
  <div className="mt-6">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-semibold text-gray-700">Top Authors</h2>
      <button className="text-sm text-gray-500 hover:underline">
        View All &rarr;
      </button>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {topAuthors.map((author, index) => (
        <AuthorCard key={index} {...author} />
      ))}
    </div>
  </div>
);
export default TopAuthors;

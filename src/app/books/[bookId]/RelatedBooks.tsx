import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import verificationBadge from "@/assets/icons/verficiation.png";

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  price: number;
  rating: number;
  coverImage: string;
  isVerified?: boolean;
}

const BookCard: React.FC<BookCardProps> = ({
  id,
  title,
  author,
  price,
  rating,
  coverImage,
  isVerified = false,
}) => {
  return (
    <div className="group bg-gray-50 p-5 rounded-[8px]">
      <Link href={`/books/${id}`}>
        <div className="bg-gray-50 p-4 rounded-[8px] transition-all hover:shadow-md">
          <div className="relative w-full aspect-[3/4] mb-3">
            <Image
              src={coverImage}
              alt={title}
              fill
              className="object-contain"
            />
          </div>
        </div>
        <h3 className="mt-3 text-[18px] font-bold text-gray-900">{title}</h3>
        <div className="flex items-center mt-1">
          <p className="text-xs text-gray-600">By {author}</p>
          {isVerified && (
            <div className="ml-1">
              <svg
                width="12"
                height="12"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.47471 17.3998H8.58721L6.49971 15.2498H3.41221L2.74971 14.6248V11.5998L0.637207 9.4498V8.5623L2.74971 6.4123V3.3748L3.41221 2.7498H6.49971L8.58721 0.612305H9.47471L11.6247 2.7498H14.6622L15.2872 3.3623V6.4123L17.4247 8.5623V9.4498L15.2497 11.5998V14.6248L14.6247 15.2498H11.6247L9.47471 17.3998ZM7.41221 12.0998H8.29971L13.0122 7.3873L12.1247 6.4998L7.86221 10.7748L6.13721 9.0498L5.24971 9.9373L7.41221 12.0998Z"
                  fill="#218DFF"
                />
              </svg>
            </div>
          )}
        </div>
        <div className="flex items-center justify-between mt-2">
          <p className="font-bold text-gray-600 text-[18px]">${price}</p>
          <div className="flex items-center">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.27999 0.911804C6.35335 0.78591 6.45845 0.681453 6.58478 0.608853C6.71112 0.536253 6.85428 0.498047 6.99999 0.498047C7.1457 0.498047 7.28886 0.536253 7.4152 0.608853C7.54153 0.681453 7.64663 0.78591 7.71999 0.911804L9.58332 4.11047L13.202 4.89447C13.3443 4.9254 13.4761 4.9931 13.5841 5.09083C13.6921 5.18855 13.7726 5.31288 13.8176 5.45142C13.8626 5.58996 13.8705 5.73788 13.8405 5.88042C13.8105 6.02296 13.7437 6.15515 13.6467 6.2638L11.18 9.02447L11.5533 12.7078C11.5681 12.8528 11.5445 12.9992 11.4849 13.1323C11.4254 13.2654 11.332 13.3805 11.2141 13.4662C11.0961 13.5519 10.9578 13.6051 10.8128 13.6206C10.6679 13.6361 10.5214 13.6133 10.388 13.5545L6.99999 12.0611L3.61199 13.5545C3.4786 13.6133 3.33212 13.6361 3.18716 13.6206C3.0422 13.6051 2.90385 13.5519 2.7859 13.4662C2.66796 13.3805 2.57457 13.2654 2.51504 13.1323C2.45551 12.9992 2.43193 12.8528 2.44666 12.7078L2.81999 9.02447L0.353323 6.26447C0.256142 6.15582 0.18916 6.02358 0.159066 5.88095C0.128971 5.73832 0.136817 5.59029 0.181819 5.45164C0.226821 5.31299 0.307406 5.18857 0.415527 5.0908C0.523649 4.99303 0.655525 4.92534 0.79799 4.89447L4.41666 4.11047L6.27999 0.911804Z"
                fill="#E2A218"
              />
            </svg>
            <span className="ml-1 text-xs text-gray-600">{rating}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

interface BookSectionProps {
  title: string;
  subtitle?: string;
  books: BookCardProps[];
  viewAllLink: string;
}

const BookSection: React.FC<BookSectionProps> = ({
  title,
  subtitle,
  books,
  viewAllLink,
}) => {
  return (
    <section className="py-8 mt-[7rem]">
      <div className="flex items-center flex-col md:flex-row justify-between mb-4">
        <div>
          <h2 className="text-[32px] font-bold text-blue-950">{title}</h2>
          {subtitle && <p className="text-sm text-gray-900 mt-1">{subtitle}</p>}
        </div>
        <Link
          href={viewAllLink}
          className="flex mt-6 gap-4 md:mt-0 items-center text-sm font-medium text-gray-600 border border-gray-300 rounded-[16px] px-4 py-2 hover:bg-gray-50"
        >
          <span>View All</span>
          <svg
            width="25"
            height="16"
            viewBox="0 0 25 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 8H23M16.5 1L23.5 8L16.5 15" stroke="#5D5D5D" />
          </svg>
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
        {books.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
    </section>
  );
};

const relatedBooks = [
  {
    id: "1",
    title: "Native Invisibility",
    author: "Darrin Collins",
    price: 10,
    rating: 4.5,
    coverImage: "/images/bookCover1.png",
    isVerified: true,
  },
  {
    id: "2",
    title: "Native Invisibility",
    author: "Darrin Collins",
    price: 10,
    rating: 4.5,
    coverImage: "/images/bookCover1.png",
    isVerified: true,
  },
  {
    id: "3",
    title: "Native Invisibility",
    author: "Darrin Collins",
    price: 10,
    rating: 4.5,
    coverImage: "/images/bookCover1.png",
    isVerified: true,
  },
  {
    id: "4",
    title: "Native Invisibility",
    author: "Darrin Collins",
    price: 10,
    rating: 4.5,
    coverImage: "/images/bookCover1.png",
    isVerified: true,
  },
];

const authorBooks = [...relatedBooks]; // Using the same data for demo purposes

interface BookRecommendationsProps {
  className?: string;
}

const RelatedBooks: React.FC<BookRecommendationsProps> = ({ className }) => {
  return (
    <div
      className={`max-w-7xl mx-auto mt-[12rem] px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <BookSection
        title="Related Books"
        subtitle="People who read this also liked"
        books={relatedBooks}
        viewAllLink="/books/related"
      />

      <BookSection
        title="Books by Darrin Collins"
        subtitle="Explore other books published by Darrin"
        books={authorBooks}
        viewAllLink="/authors/darrin-collins/books"
      />
    </div>
  );
};

export default RelatedBooks;

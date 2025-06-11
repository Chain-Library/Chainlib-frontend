"use client";

import BookCard from "@/app/_components/BookCard";
import Link from "next/link";
// import PaginationIndicator from "@/components/landingpage/PageIndicator";
// import "keen-slider/keen-slider.min.css";
// import { useKeenSlider } from "keen-slider/react";
// import { useState } from "react";

type Book = {
  title: string;
  author: string;
  imageUrl: string;
  price: string | number;
  rating: string | number;
  verified?: boolean;
  nft?: boolean;
};


type BookSectionProps = {
  title: string;
  description: string;
  link?: string;
  books: Book[];
};

export default function BookSection({ title, description, books, link }: BookSectionProps) {
  // const [currentSlide, setCurrentSlide] = useState(0);

  // const [sliderRef] = useKeenSlider({
  //   loop: true,
  //   slides: {
  //     perView: 4,
  //     spacing: 16,
  //   },
  //   breakpoints: {
  //     "(max-width: 768px)": {
  //       slides: {
  //         perView: 3,
  //         spacing: 12,
  //       },
  //     },
  //   },
  //   slideChanged(slider) {
  //     setCurrentSlide(slider.track.details.rel);
  //   },
  //   created(slider) {
  //     setInterval(() => {
  //       slider.next();
  //     }, 4000);
  //   },
  // });

  return (
    <div className="mb-16">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-bold text-[#0F265C]">{title}</h2>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        <Link href={link || ""} className="flex items-center text-gray-600 hover:text-blue-600 py-1 px-2 md:px-4 md:py-2 border border-gray-300 rounded-xl text-label-xs md:text-md">
          View All
          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>

      <div className="sm:gap-x-12 gap-6 grid no-scrollbar overflow-x-scroll grid-flow-col snap-center">
        {books.map((book, index) => (
          <BookCard className="bg-neutral-50" key={index} book={book} />
        ))}
      </div>

      {/* <PaginationIndicator current={currentSlide} total={books.length} /> */}
    </div>
  );
}

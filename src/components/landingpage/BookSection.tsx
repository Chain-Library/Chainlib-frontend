"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import BookCard from "@/components/landingpage/BookCard";
import PaginationIndicator from "@/components/landingpage/PageIndicator";
import { useState } from "react";

type Book = {
  title: string;
  author: string;
  price: string;
  rating: string;
  verified?: boolean;
  nft?: boolean;
};


type BookSectionProps = {
  title: string;
  description: string;
  books: Book[];
};

export default function BookSection({ title, description, books }: BookSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 4,
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: {
          perView: 3,
          spacing: 12,
        },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created(slider) {
      setInterval(() => {
        slider.next();
      }, 4000); 
    },
  });

  return (
    <div className="mb-16">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-bold text-[#0F265C]">{title}</h2>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        <button className="flex items-center text-gray-600 hover:text-blue-600 px-4 py-2 border border-gray-300 rounded-xl text-sm md:text-md">
          View All
          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>

      <div ref={sliderRef} className="keen-slider">
        {books.map((book, index) => (
          <div className="keen-slider__slide" key={index}>
            <BookCard {...book} />
          </div>
        ))}
      </div>

      <PaginationIndicator current={currentSlide} total={books.length} />
    </div>
  );
}

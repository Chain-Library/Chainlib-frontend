"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import BookCard from "../reader/BookCard";
import { Book } from "@/lib/interfaces/BookInterface";







interface ExploreBooksProps {
  searchResults: Book[];
}

export default function ExploreBooks({ searchResults }: ExploreBooksProps) {
  const infiniteRef = useRef<HTMLDivElement | null>(null);
  const [sliceValue, setSliceValue] = useState(16);
  const [isVisible, setIsVisible] = useState(false);

  const increaseSlice = useCallback(() => {
    setSliceValue(prev => prev + 10);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "100px",
        threshold: 1,
      }
    );

    const currentRef = infiniteRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  useEffect(() => {
    if (isVisible && sliceValue < searchResults.length) {
      increaseSlice();
    }
  }, [isVisible, sliceValue, increaseSlice, searchResults.length]);

  useEffect(() => {
    setSliceValue(16);
  }, [searchResults]);


  return (
    <section className="w-full flex flex-col items-start justify-start gap-7">
      <div className="block">
        <h2 className="text-[#0F265C] font-bold text-2xl md:text-[32px]">
          Explore Books
        </h2>
        <p className="text-[#3D3D3D] text-lg font-normal">
          Browse diverse genres, discover hidden gems, and find your next great read.
        </p>
      </div>

      <div className="w-full h-fit grid grid-cols-2 md:[grid-template-columns:repeat(auto-fit,minmax(180px,1fr))] lg:[grid-template-columns:repeat(auto-fit,minmax(330px,1fr))] justify-center place-items-center gap-y-[60px] gap-x-6">
        {searchResults.slice(0, sliceValue).map((book) => (
          <BookCard nftSection={false} key={book.id} bookData={book} />
        ))}
      </div>

      <div ref={infiniteRef} className="h-10 w-full"></div>
    </section>
  );
}

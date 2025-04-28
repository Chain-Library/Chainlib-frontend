"use client";

import { useEffect, useRef, useState } from "react";
import bookData from "@/lib/MockData";
import BookCard from "../reader/BookCard";

export default function ExploreBooks() {
    const infiniteRef = useRef(null);
    const [sliceValue, setSliceValue] = useState(16);
    const [isVisible, setIsVisible] = useState(false);

    const increaseSlice = () => {
        setSliceValue((prev) => Math.min(prev + 16, bookData.length));
    };

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
        if (isVisible && sliceValue < bookData.length) {
            increaseSlice();
        }
    }, [isVisible, sliceValue]);

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


            <div className="w-full h-fit grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-y-[60px] gap-x-6">
                {bookData.slice(0, sliceValue).map((book, index) => (
                    <BookCard nftSection={false} key={index} bookData={book} />
                ))}
            </div>





            <div ref={infiniteRef} className="h-1 w-full"></div>
        </section>
    );
}

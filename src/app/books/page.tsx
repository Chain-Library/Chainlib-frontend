"use client"

import Footer from "@/app/_components/Footer";
import bookData from "@/lib/MockData";
import { useMemo, useState } from "react";
import Navbar from "../_components/Navbar";
import BooksPageNav from "./_components/BooksPageNav";
import ExploreBooks from "./_components/ExploreBooks";
import NewRelease from "./_components/NewRelease";
import NftEdition from "./_components/NftEdition";
import Trending from "./_components/Trending";

export default function Page() {
    const [searchTerm, setSearchTerm] = useState("");
    const [displayedSection, setDisplayedSection] = useState<string>("All");

    const searchResults = useMemo(() => {
        return bookData.filter((book) =>
            book.bookTitle.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

    const handleDisplayedSection = () => {
        switch (displayedSection) {
            case "New Release":
                return <NewRelease />;
            case "Trending":
                return <Trending />;
            case "NFT Edition":
                return <NftEdition />;
            case "Explore":
                return <ExploreBooks searchResults={searchResults} />;
            default:
                return (
                    searchTerm ? (searchResults.length > 0 ? (
                        <ExploreBooks searchResults={searchResults} />
                    ) : null) : (
                        <>
                            <NewRelease />
                            <Trending />
                            <NftEdition />
                            <ExploreBooks searchResults={searchResults} />
                        </>
                    )
                )
        }
    }

    return (
        <>
            <Navbar>
                <BooksPageNav setDisplayedSection={setDisplayedSection} displayedSection={displayedSection} />
            </Navbar>

            <section className="w-full text-center mt-40 py-16 px-6 md:px-15 flex items-center justify-center">
                {searchTerm ? (
                    searchResults.length > 0 ? (
                        <h1 className="max-w-[630px] text-[#0F265C] font-bold text-4xl md:text-[44px] " >Search Results</h1>) : (
                        <h3 className="text-red-500 text-2xl" >Book not found</h3>)) : (<h1 className="max-w-[630px] text-[#0F265C] font-bold text-4xl md:text-[44px]">
                            Dive Into a
                            <span className="text-[#096CFF]"> Wide Range of Books</span>
                            Across Genres
                        </h1>)
                }
            </section>

            <section className="w-full flex flex-col gap-22 px-6 md:px-15">
                {handleDisplayedSection()}
            </section>

            <Footer />
        </>
    )
}
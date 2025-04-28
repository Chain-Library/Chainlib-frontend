"use client"


import BooksPageNav from "@/components/BookListingPage/BooksPageNav";
import ExploreBooks from "@/components/BookListingPage/ExploreBooks";
import NewRelease from "@/components/BookListingPage/NewRelease";
import NftEdition from "@/components/BookListingPage/NftEdition";
import Trending from "@/components/BookListingPage/Trending";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Input } from "@/components/ui/input";
import bookData from "@/lib/MockData";
import { useState } from "react";



export default function Page() {
    const [searchTerm, setSearchTerm] = useState("")



    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    }

    const searchResults = bookData.filter((books) =>
        books.bookTitle.toLowerCase().includes(searchTerm.toLowerCase())
    );





    return (
        <div className="w-full h-full flex flex-col items-start justify-start gap-6 " >
            <Header />
            <BooksPageNav />
            <Input className=" max-w-[250px] self-end mr-[20px] " value={searchTerm} onChange={handleChange} />
            <section className="w-full text-center  py-10 px-8 flex items-center justify-center  " >
                <h1 className="max-w-[630px] text-[#0F265C] font-bold text-4xl md:text-[44px] " >Dive Into a <span className="text-[#096CFF] "  > Wide Range of Books</span> Across Genres</h1>
            </section>
            <div className="px-[4%] w-full flex flex-col gap-22">
                {searchTerm ? (
                    searchResults.length > 0 ? (
                        <ExploreBooks searchResults={searchResults} />
                    ) : (
                        <div className="text-center text-red-500 text-2xl py-10">Book not found</div>
                    )
                ) : (
                    <>
                        <NewRelease />
                        <Trending />
                        <NftEdition />
                    </>
                )}
            </div>

            <Footer />
        </div>
    )
}
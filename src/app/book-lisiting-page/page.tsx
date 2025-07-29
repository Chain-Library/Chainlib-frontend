"use client"


import BooksPageNav from "@/components/BookListingPage/BooksPageNav";
import ExploreBooks from "@/components/BookListingPage/ExploreBooks";
import NewRelease from "@/components/BookListingPage/NewRelease";
import NftEdition from "@/components/BookListingPage/NftEdition";
import Trending from "@/components/BookListingPage/Trending";
import { Input } from "@/components/ui/input";
import { bookData } from "@/lib/MockData";
import { useMemo, useState } from "react";



export default function Page() {
    const [searchTerm, setSearchTerm] = useState("");
    const [displayedSection, setDisplayedSection] = useState<string>("All");



    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        setDisplayedSection("All");
    }

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

            case "All":
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

            default:
                return "Select a tab";

        }
    }



    return (
        <div className="w-full h-full flex flex-col items-start justify-start gap-6 " >
            <BooksPageNav setDisplayedSection={setDisplayedSection} displayedSection={displayedSection} />
            <Input className=" max-w-[250px] self-end mr-[20px] " type={"search"} value={searchTerm} onChange={handleChange} placeholder="Search ..." />


            <section className="w-full text-center  py-10 px-8 flex items-center justify-center  " >
                {searchTerm ? (searchResults.length > 0 ?
                    (<h1 className="max-w-[630px] text-[#0F265C] font-bold text-4xl md:text-[44px] " >Search Results</h1>) :
                    <h3 className="text-red-500 text-2xl" >Book not found</h3>) :
                    <h1 className="max-w-[630px] text-[#0F265C] font-bold text-4xl md:text-[44px] " >Dive Into a <span className="text-[#096CFF] "  > Wide Range of Books</span> Across Genres</h1>}
            </section>


            <div className="px-[4%] w-full flex flex-col gap-22">
                {handleDisplayedSection()}
            </div>




        </div>
    )
}
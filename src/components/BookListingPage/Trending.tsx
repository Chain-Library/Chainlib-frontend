"use client"

import BookCard from "../reader/BookCard";
import { useState } from "react";
import { Button } from "../ui/button";
import Spinner from "../ui/Spinner";
import { bookData } from "@/lib/MockData";


export default function Trending() {
    const [loading, setLoading] = useState(false);
    const [sliceValue, setSliceValue] = useState(8);

    const increaseSlice = () => {
        if (sliceValue !== bookData.length) {
            setLoading(true)
            setSliceValue((prev) => Math.min(prev + 8, bookData.length))
            setLoading(false)
        }

    }


    return (
        <section className=" w-full flex flex-col items-start justify-start gap-7  " >

            <div className="block"  >
                <h2 className="text-[#0F265C] font-bold  text-2xl  md:text-[32px] " >Trending Books</h2>
                <p className=" text-[#3D3D3D] text-lg font-normal " >Discover what everyone&apos;s reading right now</p>
            </div>


            {/* grid box  */}
            <div className="w-full h-fit grid  grid-cols-2 md:[grid-template-columns:repeat(auto-fit,minmax(180px,1fr))] lg:[grid-template-columns:repeat(auto-fit,minmax(330px,1fr))] justify-center place-items-center gap-y-[60px] gap-x-6 " >

                {bookData.slice(0, sliceValue).map((book, index) => (
                    <BookCard nftSection={false} key={index}
                        bookData={book}
                    />
                ))}
            </div>
            <Button variant={"secondary"} className={`self-center mt-[2%] hover:bg-[#096CFF] w-[120px] ${sliceValue === bookData.length ? "cursor-not-allowed" : "cursor-pointer bg-[#096CFF] text-white "} `} onClick={increaseSlice} disabled={sliceValue === bookData.length}  >{loading ? <Spinner /> : "View more"} </Button>

        </section>
    )
}
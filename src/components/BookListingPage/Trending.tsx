"use client"
import bookData from "@/lib/MockData";
import BookCard from "../reader/BookCard";
import { useState } from "react";


export default function Trending() {

    const [sliceValue, setSliceValue] = useState(8);

    const increaseSlice = () => {
       if (sliceValue !== bookData.length) {
        setSliceValue((prev) => Math.min(prev + 8, bookData.length))
       }

    }


    return (
        <section className=" w-full flex flex-col items-start justify-start gap-7  " >

            <div className="block"  >
                <h2 className="text-[#0F265C] font-bold  text-2xl  md:text-[32px] " >Trending Books</h2>
                <p className=" text-[#3D3D3D] text-lg font-normal " >Discover what everyone&apos;s reading right now</p>
            </div>


            {/* grid box  */}
            <div className="w-full  h-fit grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-y-[60px] gap-x-6 " >

                {bookData.slice(0, sliceValue).map((book, index) => (
                    <BookCard nftSection={false} key={index}
                        bookData={book}
                    />
                ))}
            </div>

            <button onClick={increaseSlice} disabled={sliceValue === bookData.length} className="self-center" >View more</button>

        </section>
    )
}
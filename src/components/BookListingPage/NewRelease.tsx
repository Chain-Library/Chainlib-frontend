"use client"
import bookData from "@/lib/MockData";
import BookCard from "../reader/BookCard";
import { useState } from "react";





export default function NewRelease() {
    const [sliceValue, setSliceValue] = useState(8)



    const recentlyReleasedBooks = bookData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const increaseSlice = () => {
        if (sliceValue !== recentlyReleasedBooks.length) {
            setSliceValue((prev) => Math.min(prev + 8, recentlyReleasedBooks.length))
        }
    }

    return (
        <section className=" w-full flex flex-col items-start justify-start gap-7 " >

            <div className="block"  >
                <h2 className="text-[#0F265C] font-bold  text-2xl  md:text-[32px] " >New Release</h2>
                <p className=" text-[#3D3D3D] text-lg font-normal " >Fresh from the minds of our authors explore the latest books</p>
            </div>


            {/* grid box  */}
            <div className="w-full h-fit grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-y-[60px] gap-x-6 " >

                {recentlyReleasedBooks.slice(0, sliceValue).map((book, index) => (
                    <BookCard nftSection={false} key={index}
                        bookData={book}
                    />
                ))}
            </div>


            <button onClick={increaseSlice} disabled={sliceValue === recentlyReleasedBooks.length} className="self-center cursor-pointer" >View More</button>
        </section>
    )
}
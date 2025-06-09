"use client"
import BookCard from "../reader/BookCard";
import { useState } from "react";
import { Button } from "../ui/button";
import Spinner from "../ui/Spinner";
import { bookData } from "@/lib/MockData";





export default function NewRelease() {
    const [sliceValue, setSliceValue] = useState(8);
    const [loading, setLoading] = useState(false);



    const recentlyReleasedBooks = bookData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const increaseSlice = () => {
        if (sliceValue !== recentlyReleasedBooks.length) {
            setLoading(true)
            setSliceValue((prev) => Math.min(prev + 8, recentlyReleasedBooks.length))
            setLoading(false)
        }
    }

    return (
        <section className=" w-full flex flex-col items-start justify-start gap-7 " >

            <div className="block"  >
                <h2 className="text-[#0F265C] font-bold  text-2xl  md:text-[32px] " >New Release</h2>
                <p className=" text-[#3D3D3D] text-lg font-normal " >Fresh from the minds of our authors explore the latest books</p>
            </div>


            {/* grid box  */}
            <div className="w-full  h-fit grid  grid-cols-2 md:[grid-template-columns:repeat(auto-fit,minmax(180px,1fr))] lg:[grid-template-columns:repeat(auto-fit,minmax(330px,1fr))] justify-center place-items-center gap-y-[60px] gap-x-6 " >

                {recentlyReleasedBooks.slice(0, sliceValue).map((book, index) => (
                    <BookCard nftSection={false} key={index}
                        bookData={book}
                    />
                ))}
            </div>


            <Button variant={"secondary"} className={`self-center mt-[2%] hover:bg-[#096CFF] w-[120px] ${sliceValue === recentlyReleasedBooks.length ? "cursor-not-allowed" : "cursor-pointer bg-[#096CFF] text-white "} `} onClick={increaseSlice} disabled={sliceValue === recentlyReleasedBooks.length}  > {loading ? <Spinner /> : "View more"} </Button>
        </section>
    )
}
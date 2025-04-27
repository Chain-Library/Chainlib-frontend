
import bookData from "@/lib/MockData";
import BookCard from "../reader/BookCard";





export default function NewRelease() {
    return (
        <section className=" w-full flex flex-col items-start justify-start gap-7 " >

            <div className="block"  >
            <h2 className="text-[#0F265C] font-bold  text-2xl  md:text-[32px] " >New Release</h2>
            <p className=" text-[#3D3D3D] text-lg font-normal " >Fresh from the minds of our authors explore the latest books</p>
            </div>


            {/* grid box  */}
            <div className="w-full bg-red-500 h-fit grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-4 " >

{bookData.map((book, index) => (
    <BookCard key={index}
   bookData={book}
    />
))}
            </div>

        </section>
    )
}
import Image from "next/image";
import StarIcon from "../svg/StarIcon";
import VerifiedIcon from '../svg/VerifiedIcon';
import { Book } from "@/lib/interfaces/BookInterface";


interface BookCardProps {
    bookData: Book;
}

function BookCard({ bookData }: BookCardProps) {




    return (
        <div className="bg-[#F6F6F6] w-[180px] h-[350px] md:w-[330px] md:h-[379px] rounded-lg pt-4 md:pt-8 pb-6 px-3 md:px-6 flex flex-col gap-8 md:gap-10 items-start justify-start cursor-pointer "  >

            <div className="w-full h-[50%] md:h-[63%] flex items-center justify-center " >
                <Image src={"/images/bookCover1.png"} alt="bbok image" height={200} width={198} />
            </div>

            <div className=" py-2 px-3 w-full flex flex-col gap-[14px] items-start   "  >
                <div>
                    <h3 className="font-bold text-base text-[#3D3D3D] " > {bookData.bookTitle} </h3>
                    <p className=" text-[#5D5D5D] text-sm font-normal flex items-center gap-2 " ><span>By {bookData.author}  </span><VerifiedIcon /> </p>

                    </div>


                <div className="w-full flex items-center justify-between gap-10 " >
                    <h3 className="font-bold text-base text-[#5D5D5D] " >${bookData.price}</h3>
                    <small className="flex items-center text-[#5D5D5D] font-normal text-sm gap-1 " > <StarIcon /> {bookData.rating}</small>
                </div>
            </div>

        </div>
    )
}


export default BookCard;
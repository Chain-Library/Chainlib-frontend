import BackButton from "@/app/_components/backButton";
import Footer from "@/app/_components/Footer";
import Navbar from "@/app/_components/Navbar";
import NftIcon from "@/assets/svg/NftIcon";
import StarIcon from "@/assets/svg/StarIcon";
import VerifiedIcon from '@/assets/svg/VerifiedIcon';
import { CheckCircle, Star } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

const books: IBookData[] = [
    {
        id: '1',
        title: 'Native Invisibility',
        author: 'Darrin Collins',
        isVerified: true,
        price: 10,
        rating: 4.5,
        amount: 193,
        seriesCount: 5,
    },
    {
        id: '2',
        title: 'Digital Shadows',
        author: 'Maya Chen',
        isVerified: true,
        price: 15,
        rating: 4.2,
        amount: 156,
        seriesCount: 12,
    },
    {
        id: '3',
        title: 'The Last Algorithm',
        author: 'James Rodriguez',
        isVerified: false,
        price: 8,
        rating: 3.9,
        amount: 89,
        seriesCount: 3,
    },
    {
        id: '4',
        title: 'The Last Algorithm',
        author: 'James Rodriguez',
        isVerified: false,
        price: 8,
        rating: 3.9,
        amount: 89,
        seriesCount: 3,
    }
];


export default function Page() {
    return (
        <>
            <Navbar />
            <main className="mt-20 px-6 md:px-15 py-8">
                <BackButton />
                <div className="flex flex-col gap-6 md:flex-row">
                    <div className="max-w-sm flex flex-col justify-center items-center gap-y-10 rounded-base shadow-lg w-full h-fit overflow-hidden pt-6 p-4 pb-8 border border-neutral-400">
                        {/* Header Section */}
                        <div className="w-full flex flex-col items-center">
                            <div className="relative size-25 rounded-full inline-block">
                                <Image
                                    src="/user.svg"
                                    alt="Joseph Paul"
                                    fill
                                    className="object-center shadow-lg"
                                />
                            </div>
                            <div className="mt-10 w-full">
                                <div className="flex items-center justify-center gap-2">
                                    <h2 className="text-body-18px-large font-bold text-neutral-800">Joseph Paul</h2>
                                    <CheckCircle className="w-5 h-5 text-blue-400" />
                                </div>
                                <p className="text-label-large text-center text-neutral-600 mt-1">@Joe Paul</p>
                            </div>

                            <button className="mt-6 w-full text-label-large  text-neutral-600 bg-primary-50 border border-primary-600 px-4 py-2 rounded-full font-medium">
                                Following
                            </button>
                        </div>

                        {/* Stats Section */}
                        <div className=" w-full border-b border-gray-100">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-gray-600 text-sm">Average Rating</span>
                                <div className="flex items-center gap-1">
                                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    <span className="font-semibold text-gray-900">4.5</span>
                                </div>
                            </div>

                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Published</span>
                                    <span className="font-medium text-gray-900">16</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Popular Rank</span>
                                    <span className="font-medium text-gray-900">4</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Stories</span>
                                    <span className="font-medium text-gray-900">2</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">NTR Edition</span>
                                    <span className="font-medium text-gray-900">2</span>
                                </div>
                            </div>
                        </div>

                        {/* Genres Section */}
                        <div className=" w-full border-b border-gray-100">
                            <h3 className="font-semibold text-gray-900 mb-3">Genres Written In</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                                    Drama
                                </span>
                                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                                    Fiction
                                </span>
                            </div>
                        </div>

                        {/* Language Section */}
                        <div className=" w-full border-b border-gray-100">
                            <h3 className="font-semibold text-gray-900 mb-2">Language preference</h3>
                            <span className="text-gray-600 text-sm">English</span>
                        </div>

                        {/* About Section */}
                        <div className="">
                            <h3 className="font-semibold text-gray-900 mb-3">About the Author</h3>
                            <p className="text-neutral-800 text-body-base">
                                Darrin Collins is a dedicated researcher and writer deeply committed to exploring issues of cultural visibility, marginalization, and the intersection of identity and technology. His work in Native Invisibility reflects a long-standing interest in amplifying underrepresented voices and fostering a more equitable understanding of diverse experiences in the contemporary world.
                            </p>
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-y-12.5">
                        <AuthorBookCards title="Recent Publish" books={books} />
                        <AuthorBookCards title="Regular Books" books={books} />
                        <AuthorBookCards title="Series" books={books} />
                        <AuthorNFTCards books={books} />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

function AuthorBookCards({ title, link, books }: { title?: string; link?: string, books: IBookData[] }) {
    return (
        <div className="rounded-base shadow-lg border border-neutral-400 py-6 px-4">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-body-18px-large font-bold text-neutral-800">{title}</h2>

                <Link href={link || ""} className="hidden md:flex items-center text-neutral-600 py-1 px-2 md:px-4 md:py-2 border border-neutral-200 rounded-large text-label-small md:text-md">
                    View All
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </Link>
            </div>

            <div className="gap-4 grid no-scrollbar overflow-x-scroll grid-flow-col snap-center">
                {books.map((book, index) => (
                    <BookCard key={index} bookData={book} />
                ))}
            </div>

            <Link href={link || ""} className="flex mt-6 md:hidden items-center text-neutral-600 py-2.5 border border-neutral-200 rounded-base w-fit px-8 text-label-large mx-auto">
                View All
                <svg className="w-4 h-4 ml-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </Link>
        </div>

    );
}

function AuthorNFTCards({ books }: { books: IBookData[] }) {
    return (
        <div className="rounded-base bg-[#0F265C] shadow-lg border border-neutral-400 py-6 px-4">
            <div className="flex justify-between items-center mb-8 text-primary-50">
                <h2 className="text-body-18px-large font-bold ">NFT Edition</h2>

                <Link href="" className="hidden md:flex items-center py-1 px-2 md:px-4 md:py-2 border border-neutral-50 rounded-large text-label-small md:text-md">
                    View All
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </Link>
            </div>

            <div className="gap-4 grid no-scrollbar overflow-x-scroll grid-flow-col snap-center">
                {books.map((book, index) => (
                    <Link href={`/books/${book.id}`} key={index}>
                        <div className="bg-background border border-neutral-100 w-63 h-fit lg:w-60 rounded-base pt-4 md:pt-8 p-3 md:p-6 flex flex-col gap-10 items-start justify-start cursor-pointer overflow-hidden "  >
                            <div className="w-full h-[35%] md:h-[43%] flex items-center justify-center ">
                                <Image src={"/images/bookCover1.png"} alt="book image" height={100} width={100} loading="lazy" />
                            </div>

                            <div className="w-full flex flex-col items-start" >
                                <NftIcon />
                                <h3 className="font-bold mt-2 text-base text-[#3D3D3D]"> {book.title} </h3>
                                <p className="mt-1 text-neutral-600 text-sm font-normal flex items-center gap-2 " >
                                    <span>By {book.author}  </span>
                                    <VerifiedIcon />
                                </p>

                                <div className="text-body-18px-large mt-3 mb-2 font-semibold flex gap-10 item-center w-full">
                                    <div className="text-neutral-600 flex  gap-2">
                                        <Image src="/starknet.svg" alt="starkNet icon" className="" width={16} height={16} />
                                        <span className="font-bold text-neutral-600">{book.amount || 193}</span>
                                        <span className="text-label-small font-normal mt-1.5">STRK</span>
                                    </div>
                                    <div className="text-neutral-600">${book.price}</div>
                                </div>

                                <div className="w-full flex items-center gap-10 " >
                                    <small className="flex items-center text-neutral-600 font-normal text-sm gap-1 " > <StarIcon /> {book.rating}</small>
                                </div>
                            </div>

                        </div>
                    </Link>
                ))}
            </div>

            <Link href="" className="flex mt-6 md:hidden items-center text-gray-600  py-2.5 bg-background border border-neutral-100 rounded-base w-fit px-8 text-label-large mx-auto">
                View All
                <svg className="w-4 h-4 ml-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </Link>
        </div>

    );
}

function BookCard({ bookData }: { bookData: IBookData }) {
    return <Link href={`/books/${bookData.id}`} passHref>
        <div className="bg-neutral-50 border border-neutral-100 w-63 h-fit lg:w-60 rounded-base pt-4 md:pt-8 p-3 md:p-6 flex flex-col gap-10 items-start justify-start cursor-pointer overflow-hidden "  >
            <div className="w-full h-[35%] md:h-[43%] flex items-center justify-center ">
                <Image src={"/images/bookCover1.png"} alt="book image" height={100} width={100} loading="lazy" />
            </div>

            <div className="w-full flex flex-col items-start" >
                <h3 className="font-bold text-base text-[#3D3D3D]"> {bookData.title} </h3>
                <p className="mt-1 text-neutral-600 text-sm font-normal flex items-center gap-2 " >
                    <span>By {bookData.author}  </span>
                    <VerifiedIcon />
                </p>

                <div className="text-body-18px-large mt-3 mb-2 font-semibold flex gap-10 item-center w-full">
                    <div className="text-neutral-600 flex  gap-2">
                        <Image src="/starknet.svg" alt="starkNet icon" className="" width={16} height={16} />
                        <span className="font-bold text-neutral-600">{bookData.amount || 193}</span>
                        <span className="text-label-small font-normal mt-1.5">STRK</span>
                    </div>
                    <div className="text-neutral-600">${bookData.price}</div>
                </div>

                <div className="w-full flex items-center gap-10 " >
                    <small className="flex items-center text-neutral-600 font-normal text-sm gap-1 " > <StarIcon /> {bookData.rating}</small>
                    {bookData.seriesCount && (
                        <div className="flex items-center gap-1">
                            <div className="relative size-4">
                                <Image src="/is_series.svg" alt="Profile" fill className="object-cover" />
                            </div>
                            <span>{bookData.seriesCount || 5}</span>
                        </div>
                    )}
                </div>
            </div>

        </div>
    </Link>
}

interface IBookData {
    id: string;
    title: string;
    author: string;
    isVerified: boolean;
    price: number;
    rating: number;
    amount: number;
    seriesCount: number;
}
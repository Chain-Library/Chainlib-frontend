import BackButton from "@/app/_components/backButton";
import Footer from "@/app/_components/Footer";
import Navbar from "@/app/_components/Navbar";
import BookSection from "@/app/_components/ui/BookSection";
import strkImg from "@/assets/icons/strk.png";
import { bookData, relatedBooks } from "@/data";
import { BadgeCheck, Heart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// interface BookPageProps {
//   params: {
//     bookId: string;
//   };
// }

const authorBooks = [...relatedBooks]; // Using the same data for demo purposes

export default function Page() {
  // export default function Page({ params }: BookPageProps) {
  //   const { bookId } = params;

  //   const book = bookData.find((item) => item.id === bookId);

  //   if (!book) {
  //     return <BookNotFound/>; /* BookNotFound is not implemented yet **/
  //   }

  // TODO
  // Comment this out when the real data is available and use the one above
  const book = bookData.at(0)

  if (!book) return null

  return (
    <>
      <Navbar />
      <main className="flex-col mx-auto mt-20 px-6 md:px-15 py-8">
        {/* Back Button */}
        <BackButton />

        <div className="self-baseline grid grid-cols-1 md:grid-cols-10 gap-1 md:gap-20 max-w-7xl justify-self-start place-self-start h-full">
          {/* Left Column - Book Cover */}
          <div className="md:col-span-4 flex flex-col justify-between h-full">
            <div className="bg-gray-100 p-4 md:py-9 hover:shadow-lg transition rounded-lg flex justify-center shadow-base">
              <div className="relative w-64 h-80 sm:w-72 lg:w-84 sm:h-96">
                <Image
                  src={book.coverImage}
                  alt={book.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="text-body-medium space-y-4">
              <div className="flex items-center justify-between">
                <button className="w-[80%] py-4 bg-blue-500 text-white font-medium rounded-[12px] hover:bg-blue-600 transition">
                  Buy Now
                </button>
                <div className="ring-1 w-1/7 h-full ring-neutral-200 p-1.5 grid place-content-center rounded-small">
                  <Heart size={38} className="text-neutral-200 fill-neutral-200" />
                </div>
              </div>

              <button className="w-[80%] py-4 bg-blue-50 text-blue-950 font-medium rounded-[12px] hover:bg-gray-200 transition">
                Start Reading for Free
              </button>
            </div>
          </div>

          {/* Right Column - Book Details */}
          <div className="md:col-span-6 md:col-start-5">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-blue-950">
                  {book.title}
                </h1>
                <div className="flex items-center mt-2">
                  <p className="text-gray-600 text-[16px]">
                    By {book.author}
                  </p>
                  {book.isVerified && (
                    <div className="ml-2">
                      <BadgeCheck size={20} className="fill-primary-500 text-neutral-50" />
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 mt-3">
                  <Star size={19} className="fill-[#E2A218] text-neutral-50" />
                  <span className="ml-1 text-gray-700 text-[14px]">
                    {book.rating} of {book.reviews} Reviews
                  </span>
                </div>
              </div>

              <button className="text-gray-400 border px-4 py-2 gap-2 border-gray-100 rounded-[20px] hover:bg-gray-50 duration-500 flex items-center hover:text-gray-700 p-2">
                <span className="text-gray-400 text-[12px]">Share</span>

                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.3332 8.00016L9.0665 3.3335V5.66683C6.93317 5.66683 2.6665 7.06683 2.6665 12.6668C2.6665 11.8888 3.9465 10.3335 9.0665 10.3335V12.6668L13.3332 8.00016Z"
                    fill="#B0B0B0"
                    stroke="#B0B0B0"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Description */}
            <div className="mt-6">
              <h2 className="text-[16px] font-medium text-gray-900">
                Description
              </h2>
              <p className="mt-2 text-gray-600">{book.description}</p>
              <button className="mt-2 text-gray-400 hover:bg-gray-200 duration-500 px-4 py-2 border border-gray-400 rounded-base text-[12px]">
                Read More
              </button>
            </div>

            {/* Access Type */}
            <div className="mt-6">
              <h2 className="text-[16px] font-medium text-gray-900">
                Access Type
              </h2>
              <p className="mt-1 bg-blue-50 w-fit rounded-[16px] text-[12px] text-blue-950 px-4 py-2">
                One-time Purchase
              </p>
            </div>

            {/* Price */}
            <div className="mt-6 flex items-center gap-4">
              <h2 className="text-3xl font-bold text-gray-900">
                ${book.price}
              </h2>
              <div className="flex items-center mt-1 space-x-2">
                <Image src={strkImg} alt="STRK" width={16} height={16} />
                <span className="text-[#000B21] text-sm">
                  {book.strikeCount}
                </span>
              </div>
            </div>

            {/* Book Details Grid */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6 gap-y-4">
              <div className="border border-gray-100 p-4 rounded-base">
                <h3 className="text-sm text-gray-500">Genre(s)</h3>
                <div className="flex items-center gap-2">
                  <p className="mt-1 text-gray-500 bg-gray-50 px-3 py-2 rounded-base">
                    {book.genre}
                  </p>
                  <p className="mt-1 text-gray-500 bg-gray-50 px-3 py-2 rounded-base">
                    {book.category}
                  </p>
                </div>
              </div>
              <div className="border border-gray-100 p-4 rounded-base">
                <h3 className="text-sm text-gray-500">Page count</h3>
                <p className="mt-1 text-gray-900">{book.pageCount}</p>
              </div>
              <div className="border border-gray-100 p-4 rounded-base">
                <h3 className="text-sm text-gray-500">Language</h3>
                <p className="mt-1 text-gray-900">{book.language}</p>
              </div>
              <div className="border border-gray-100 p-4 rounded-base">
                <h3 className="text-sm text-gray-500">Date published</h3>
                <p className="mt-1 text-gray-900">{book.publishDate}</p>
              </div>
              <div className="border border-gray-100 p-4 rounded-base">
                <h3 className="text-sm text-gray-500">ISBN</h3>
                <p className="mt-1 text-gray-900">{book.isbn}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Publisher and Author Info */}
        <div className="mt-12 grid grid-cols-1 p-6 md:grid-cols-2 gap-8 border border-gray-100 rounded-base max-w-7xl">
          <div>
            <h2 className="text-xl font-bold text-gray-900 pb-2">
              From the Publisher
            </h2>
            <p className="mt-4 text-gray-400 ">{book.publisherNote}</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 pb-2">
              About the Author
            </h2>
            <div className="mt-4 flex items-start flex-col">
              <div className=" border w-full flex items-center border-gray-100 p-4 rounded-[16px] justify-between">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                    {/* Author image would go here */}
                    <div className="w-full h-full relative flex items-center justify-center text-gray-500">
                      <Image src={book.authorImage} className="object-contain" fill alt="author-image" />
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Link href={`author/:${book.author.toLowerCase().split(" ").join("-")}`} className="hover:underline cursor-pointer text-lg font-medium text-gray-900">
                      {book.author}
                    </Link>
                    {book.isVerified && (
                      <div className="ml-2">
                        <BadgeCheck size={18} className="fill-primary-500 text-neutral-50" />
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <button className="text-sm font-medium text-gray-500 border border-gray-300 rounded-full px-4 py-1 hover:bg-gray-50">
                    Follow
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <p className="mt-2 text-gray-400">{book.authorBio}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[89rem] w-full mx-auto my-24 space-y-18">
          <BookSection
            title="Related Books"
            description="People who read this also liked"
            books={relatedBooks}
            link="/books/related"
          />

          <BookSection
            title="Books by Darrin Collins"
            description="Explore other books published by Darrin"
            books={authorBooks}
            link="/authors/darrin-collins/books"
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

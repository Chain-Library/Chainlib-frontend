import React from "react";
import Image from "next/image";
import Link from "next/link";
import strkImg from "@/assets/icons/strk.png";
import authorImg from "@/assets/images/author1.png";
import RelatedBooks from "./RelatedBooks";

interface PageProps {
  params: {
    bookId: string;
  };
}

const BookDetails = ({ params }: PageProps) => {
  const { bookId } = params;
  const bookData = {
    title: "Native Invisibility",
    author: "Darrin Collins",
    authorImage: authorImg,
    rating: 4.5,
    reviews: 109,
    description:
      '"Native Invisibility" delves into the complex and often insidious ways in which Indigenous peoples and their unique experiences are rendered unseen and unheard in the modern era.',
    price: 12,
    strikeCount: "193 STRK",
    genre: "Fiction",
    category: "Comic",
    pageCount: "21 Pages",
    language: "English",
    publishDate: "12 April, 2025",
    isbn: "978-3-16-148410-0",
    publisherNote:
      "Native Invisibility unveils the crucial ways Indigenous cultures are often unseen in our modern world. This vital book fosters understanding and action for recognition and justice.",
    authorBio:
      "Darrin Collins is a dedicated researcher and writer deeply committed to exploring issues of cultural visibility, marginalization, and the intersection of identity and technology. His work in Native Invisibility reflects a long-standing interest in amplifying underrepresented voices and fostering a more nuanced understanding of diverse experiences in the contemporary world.",
    isVerified: true,
    coverImage: "/images/bookCover1.png",
  };

  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8`}>
      {/* Back Button */}
      <Link
        href="/books"
        className="inline-flex text-[14px] gap-4 items-center text-gray-600 hover:text-gray-800 mb-6 border border-gray-100 rounded-[12px] px-4 py-2 transition"
      >
        <svg
          width="31"
          height="20"
          viewBox="0 0 31 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.4 3.4L5.8 9H29V11H5.8L11.4 16.6L10 18L2 10L10 2L11.4 3.4Z"
            fill="#888888"
          />
        </svg>
        <span>Back</span>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20">
        {/* Left Column - Book Cover */}
        <div className="md:col-span-1">
          <div className="bg-gray-100 p-4 hover:shadow-lg transition rounded-lg flex justify-center">
            <div className="relative w-64 h-80 sm:w-72 sm:h-96">
              <Image
                src={bookData.coverImage}
                alt={bookData.title}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-4 space-y-3">
            <div className="flex items-center gap-4">
              <button className="w-[80%] py-3 bg-blue-500 text-white font-medium rounded-[12px] hover:bg-blue-600 transition">
                Buy Now
              </button>
              <svg
                width="49"
                height="49"
                viewBox="0 0 49 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="48"
                  height="48"
                  rx="11.5"
                  stroke="#D1D1D1"
                />
                <path
                  d="M18.9998 14.3335C14.9498 14.3335 11.6665 17.6168 11.6665 21.6668C11.6665 29.0002 20.3332 35.6668 24.9998 37.2175C29.6665 35.6668 38.3332 29.0002 38.3332 21.6668C38.3332 17.6168 35.0498 14.3335 30.9998 14.3335C28.5198 14.3335 26.3265 15.5648 24.9998 17.4495C24.3235 16.4864 23.4251 15.7004 22.3807 15.158C21.3364 14.6157 20.1767 14.3328 18.9998 14.3335Z"
                  fill="#D1D1D1"
                  stroke="#D1D1D1"
                  stroke-width="2.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <button className="w-[80%] py-3 bg-blue-50 text-blue-950 font-medium rounded-[12px] hover:bg-gray-200 transition">
              Start Reading for Free
            </button>
          </div>
        </div>

        {/* Right Column - Book Details */}
        <div className="md:col-span-2">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-blue-950">
                {bookData.title}
              </h1>
              <div className="flex items-center mt-2">
                <p className="text-gray-600 text-[16px]">
                  By {bookData.author}
                </p>
                {bookData.isVerified && (
                  <div className="ml-2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.4747 18.3998H9.58721L7.49971 16.2498H4.41221L3.74971 15.6248V12.5998L1.63721 10.4498V9.5623L3.74971 7.4123V4.3748L4.41221 3.7498H7.49971L9.58721 1.6123H10.4747L12.6247 3.7498H15.6622L16.2872 4.3623V7.4123L18.4247 9.5623V10.4498L16.2497 12.5998V15.6248L15.6247 16.2498H12.6247L10.4747 18.3998ZM8.41221 13.0998H9.29971L14.0122 8.3873L13.1247 7.4998L8.86221 11.7748L7.13721 10.0498L6.24971 10.9373L8.41221 13.0998Z"
                        fill="#218DFF"
                      />
                    </svg>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2 mt-3">
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.09986 1.38975C8.19157 1.23239 8.32293 1.10182 8.48085 1.01107C8.63877 0.920316 8.81773 0.872559 8.99986 0.872559C9.182 0.872559 9.36096 0.920316 9.51888 1.01107C9.6768 1.10182 9.80816 1.23239 9.89987 1.38975L12.229 5.38809L16.7524 6.36809C16.9303 6.40675 17.095 6.49138 17.23 6.61353C17.365 6.73568 17.4657 6.8911 17.5219 7.06427C17.5781 7.23745 17.588 7.42234 17.5505 7.60052C17.513 7.7787 17.4295 7.94393 17.3082 8.07975L14.2249 11.5306L14.6915 16.1348C14.7099 16.316 14.6805 16.499 14.6061 16.6653C14.5316 16.8317 14.4149 16.9756 14.2675 17.0827C14.12 17.1898 13.9471 17.2564 13.7659 17.2758C13.5847 17.2951 13.4016 17.2666 13.2349 17.1931L8.99986 15.3264L4.76487 17.1931C4.59813 17.2666 4.41502 17.2951 4.23383 17.2758C4.05263 17.2564 3.87968 17.1898 3.73226 17.0827C3.58483 16.9756 3.46808 16.8317 3.39367 16.6653C3.31926 16.499 3.28979 16.316 3.3082 16.1348L3.77487 11.5306L0.691532 8.08059C0.570055 7.94477 0.486328 7.77947 0.44871 7.60119C0.411092 7.4229 0.420899 7.23786 0.477152 7.06455C0.533405 6.89124 0.634135 6.73571 0.769287 6.6135C0.904439 6.49129 1.06928 6.40667 1.24737 6.36809L5.7707 5.38809L8.09986 1.38975Z"
                    fill="#E2A218"
                  />
                </svg>
                <span className="ml-1 text-gray-700 text-[14px]">
                  {bookData.rating} of {bookData.reviews} Reviews
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
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Description */}
          <div className="mt-6">
            <h2 className="text-[16px] font-medium text-gray-900">
              Description
            </h2>
            <p className="mt-2 text-gray-600">{bookData.description}</p>
            <button className="mt-2 text-gray-400 hover:bg-gray-200 duration-500 px-4 py-2 border border-gray-400 rounded-[8px] text-[12px]">
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
              ${bookData.price}
            </h2>
            <div className="flex items-center mt-1 space-x-2">
              <Image src={strkImg} alt="STRK" width={16} height={16} />
              <span className="text-[#000B21] text-sm">
                {bookData.strikeCount}
              </span>
            </div>
          </div>

          {/* Book Details Grid */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="border w-[186px] border-gray-100 p-4 rounded-[8px]">
              <h3 className="text-sm text-gray-500">Genre(s)</h3>
              <div className="flex items-center gap-2">
                <p className="mt-1 text-gray-500 bg-gray-50 px-3 py-2 rounded-[8px]">
                  {bookData.genre}
                </p>
                <p className="mt-1 text-gray-500 bg-gray-50 px-3 py-2 rounded-[8px]">
                  {bookData.category}
                </p>
              </div>
            </div>
            <div className="border w-[186px] border-gray-100 p-4 rounded-[8px]">
              <h3 className="text-sm text-gray-500">Page count</h3>
              <p className="mt-1 text-gray-900">{bookData.pageCount}</p>
            </div>
            <div className="border w-[186px] border-gray-100 p-4 rounded-[8px]">
              <h3 className="text-sm text-gray-500">Language</h3>
              <p className="mt-1 text-gray-900">{bookData.language}</p>
            </div>
            <div className="border w-[186px] border-gray-100 p-4 rounded-[8px]">
              <h3 className="text-sm text-gray-500">Date published</h3>
              <p className="mt-1 text-gray-900">{bookData.publishDate}</p>
            </div>
            <div className="border w-[186px] border-gray-100 p-4 rounded-[8px]">
              <h3 className="text-sm text-gray-500">ISBN</h3>
              <p className="mt-1 text-gray-900">{bookData.isbn}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Publisher and Author Info */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 border border-gray-100 p-5 rounded-[8px]">
        <div>
          <h2 className="text-xl font-bold text-gray-900 pb-2">
            From the Publisher
          </h2>
          <p className="mt-4 text-gray-400 ">{bookData.publisherNote}</p>
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
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <Image src={bookData.authorImage} alt="author-image" />
                  </div>
                </div>
                <div className="flex items-center">
                  <h3 className="text-lg font-medium text-gray-900">
                    {bookData.author}
                  </h3>
                  {bookData.isVerified && (
                    <div className="ml-2">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.47471 17.3998H8.58721L6.49971 15.2498H3.41221L2.74971 14.6248V11.5998L0.637207 9.4498V8.5623L2.74971 6.4123V3.3748L3.41221 2.7498H6.49971L8.58721 0.612305H9.47471L11.6247 2.7498H14.6622L15.2872 3.3623V6.4123L17.4247 8.5623V9.4498L15.2497 11.5998V14.6248L14.6247 15.2498H11.6247L9.47471 17.3998ZM7.41221 12.0998H8.29971L13.0122 7.3873L12.1247 6.4998L7.86221 10.7748L6.13721 9.0498L5.24971 9.9373L7.41221 12.0998Z"
                          fill="#218DFF"
                        />
                      </svg>
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
              <p className="mt-2 text-gray-400">{bookData.authorBio}</p>
            </div>
          </div>
        </div>
      </div>
      <RelatedBooks />
    </div>
  );
};

export default BookDetails;

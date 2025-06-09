"use client"

import strkImg from "@/assets/icons/strk.png";
import { bookData } from "@/data";
import { BadgeCheck, MoreVerticalIcon, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { Header } from "../../_components/header";

// interface BookPageProps {
//   params: {
//     bookId: string;
//   };
// }


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
            <Header button title="Book Preview" />
            <div className="flex flex-col gap-y-10 p-6 justify-center items-center">
                <section className="grid grid-cols-1 md:grid-cols-10 gap-1 md:gap-20 max-w-7xl justify-self-start place-self-start h-full rounded-small p-6 bg-background shadow-small">
                    {/* Left Column - Book Cover */}
                    <div className="md:col-span-4 flex flex-col space-y-4 justify-between h-full">
                        <div className="bg-gray-100 p-4 md:py-9 hover:shadow-lg transition rounded-lg flex justify-center shadow-base">
                            <div className="relative w-74 h-85 sm:w-60 lg:w-65 sm:h-75">
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
                        <button className="w-full py-4 bg-blue-50 text-blue-950 font-medium rounded-[12px] hover:bg-gray-200 transition">
                            Start Reading for Free
                        </button>
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
                                <MoreVerticalIcon size={24} />
                            </button>
                        </div>

                        {/* Access Type */}
                        <div className="mt-6">
                            <h2 className="text-[16px] font-medium text-gray-900">
                                Access Type
                            </h2>
                            <p className="mt-1 bg-[#EDF7FF] w-fit rounded-[12px] text-[12px] text-[#0F265C] px-3 py-1.5">
                                One-time Purchase
                            </p>
                        </div>

                        {/* Price */}
                        <div className="mt-6 flex items-center gap-4">
                            <div className="flex items-center mt-1 space-x-2">
                                <Image src={strkImg} alt="STRK" width={16} height={16} />
                                <span className="text-[#000B21] space-x-2">
                                    <span className=" font-bold text-2xl">
                                        193
                                    </span>
                                    <span className="mb-1">STRK</span>

                                </span>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-600">
                                ${book.price}
                            </h2>
                        </div>

                    </div>
                </section>

                <section className="rounded-small p-6 bg-background shadow-small">
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

                    {/* Book Details Grid */}
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6 gap-y-4">
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
                </section>

                {book?.blockchainData &&
                    <section className="rounded-small w-full p-6 bg-background shadow-small">
                        {/* Header */}
                        <h2 className="text-lg font-medium text-gray-700 mb-6">Blockchain Details</h2>

                        {/* Details Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                            {/* Smart Contract Address */}
                            <div>
                                <p className="text-sm text-gray-500 mb-1">Smart Contract Address</p>
                                <p className="text-sm font-medium text-gray-900">{book.blockchainData.smartContractAddress}</p>
                            </div>

                            {/* Token Standard */}
                            <div>
                                <p className="text-sm text-gray-500 mb-1">Token Standard</p>
                                <p className="text-sm font-medium text-gray-900">{book.blockchainData.tokenStandard}</p>
                            </div>

                            {/* Network */}
                            <div>
                                <p className="text-sm text-gray-500 mb-1">Network</p>
                                <p className="text-sm font-medium text-gray-900">{book.blockchainData.network}</p>
                            </div>

                            {/* Minted */}
                            <div>
                                <p className="text-sm text-gray-500 mb-1">Minted</p>
                                <p className="text-sm font-medium text-gray-900">{book.blockchainData.minted}</p>
                            </div>
                        </div>
                    </section>}

                <section className="w-full rounded-small p-6 bg-background shadow-small">
                    {/* Header */}
                    <h2 className="text-lg font-medium text-gray-700 mb-4">Book Performance Stats</h2>

                    {/* Time Period Tabs */}
                    <div className="flex gap-4 mb-6">
                        <button className="text-sm text-gray-700 bg-white px-3 py-1 rounded shadow-sm border">
                            This Week
                        </button>
                        <button className="text-sm text-gray-500 hover:text-gray-700">
                            This Month
                        </button>
                        <button className="text-sm text-gray-500 hover:text-gray-700">
                            This Year
                        </button>
                        <button className="text-sm text-gray-500 hover:text-gray-700">
                            All Time
                        </button>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                        {/* Read */}
                        <div>
                            <p className="text-sm text-gray-600 mb-1">Read</p>
                            <div className="flex items-center gap-2">
                                <span className="text-2xl font-semibold text-gray-900">192</span>
                                <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded">
                                    26%
                                </span>
                            </div>
                        </div>

                        {/* Read Completion Rate */}
                        <div>
                            <p className="text-sm text-gray-600 mb-1">Read Completion Rate</p>
                            <div className="flex items-center gap-2">
                                <span className="text-2xl font-semibold text-gray-900">75%</span>
                                <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
                                    10%
                                </span>
                            </div>
                        </div>

                        {/* Purchase */}
                        <div>
                            <p className="text-sm text-gray-600 mb-1">Purchase</p>
                            <div className="flex items-center gap-2">
                                <span className="text-2xl font-semibold text-gray-900">62</span>
                                <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
                                    18%
                                </span>
                            </div>
                        </div>

                        {/* Total Complete Read */}
                        <div>
                            <p className="text-sm text-gray-600 mb-1">Total Complete Read</p>
                            <div className="flex items-center gap-2">
                                <span className="text-2xl font-semibold text-blue-600">70%</span>
                            </div>
                        </div>

                        {/* Total Earning */}
                        <div>
                            <p className="text-sm text-gray-600 mb-1">Total Earning</p>
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-600">$</span>
                                <span className="text-2xl font-semibold text-gray-900">370.00</span>
                            </div>
                        </div>

                        {/* Average Rating */}
                        <div>
                            <p className="text-sm text-gray-600 mb-1">Average Rating</p>
                            <div className="flex items-center gap-2">
                                <span className="text-yellow-400">⭐</span>
                                <span className="text-2xl font-semibold text-gray-900">3.5</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Publisher and Author Info */}
                <section className="grid grid-cols-1 p-6 md:grid-cols-2 gap-8 border border-gray-100 rounded-small bg-background shadow-small max-w-7xl">
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
                </section>

                <section className="w-full rounded-small p-6 bg-background shadow-small">
                    {/* Header */}
                    <h2 className="text-lg font-medium text-gray-700 mb-6">Reviews and Rating</h2>

                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Left Side - Overall Rating */}
                        <div className="flex flex-col items-center md:items-start">
                            <div className="text-6xl font-bold text-gray-800 mb-2">3.5</div>

                            {/* Star Rating Display */}
                            <div className="flex items-center gap-1 mb-2">
                                <span className="text-yellow-400 text-lg">⭐</span>
                                <span className="text-yellow-400 text-lg">⭐</span>
                                <span className="text-yellow-400 text-lg">⭐</span>
                                <span className="text-gray-300 text-lg">⭐</span>
                                <span className="text-gray-300 text-lg">⭐</span>
                            </div>

                            <p className="text-sm text-gray-600">1202 Reviews</p>
                        </div>

                        {/* Right Side - Rating Breakdown */}
                        <div className="flex-1 max-w-md">
                            {ratings.map((rating) => (
                                <div key={rating.stars} className="flex items-center gap-3 mb-2">
                                    <span className="text-sm text-gray-600 w-2">{rating.stars}</span>

                                    <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                                        <div
                                            className="h-full bg-yellow-400 rounded-full transition-all duration-300"
                                            style={{ width: `${rating.percentage}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <ReviewsComments />
                </section>
            </div>
        </>
    );
};

const ratings = [
    { stars: 5, percentage: 15 },
    { stars: 4, percentage: 25 },
    { stars: 3, percentage: 45 },
    { stars: 2, percentage: 30 },
    { stars: 1, percentage: 20 }
];

const reviews = [
    {
        id: 1,
        name: "Adeja Samad",
        avatar: "/user.svg",
        rating: 3.5,
        time: "Yesterday",
        comment: "This was a great read, and I was hooked. However, the death of my favorite character impacted my overall enjoyment, which is why I'm rating it 4 stars instead of 5.",
        hasReply: true,
        replyCount: 1
    },
    {
        id: 2,
        name: "Adeja Samad",
        avatar: "/user.svg",
        rating: 3.5,
        time: "Yesterday",
        comment: "This was a great read, and I was hooked. However, the death of my favorite character impacted my overall enjoyment, which is why I'm rating it 4 stars instead of 5.",
        hasReply: false
    }
    , {
        id: 3,
        name: "Adeja Samad",
        avatar: "/user.svg",
        rating: 3.5,
        time: "Yesterday",
        comment: "This was a great read, and I was hooked. However, the death of my favorite character impacted my overall enjoyment, which is why I'm rating it 4 stars instead of 5.",
        hasReply: true,
        replyCount: 1
    },
    {
        id: 4,
        name: "Adeja Samad",
        avatar: "/user.svg",
        rating: 3.5,
        time: "Yesterday",
        comment: "This was a great read, and I was hooked. However, the death of my favorite character impacted my overall enjoyment, which is why I'm rating it 4 stars instead of 5.",
        hasReply: false
    }
];


function ReviewsComments() {
    const [newComment, setNewComment] = useState('');
    const [activeReplyId, setActiveReplyId] = useState<string | number | null>(2);

    const renderStars = (rating: number, maxStars = 5) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <span key={`full-${i}`} className="text-yellow-400" aria-hidden="true">
                    ⭐
                </span>
            );
        }

        if (hasHalfStar) {
            stars.push(
                <span key="half" className="text-yellow-400" aria-hidden="true">
                    🟊 {/* Half-star symbol or use a proper icon */}
                </span>
            );
        }

        for (let i = 0; i < maxStars - Math.ceil(rating); i++) {
            stars.push(
                <span key={`empty-${i}`} className="text-gray-300" aria-hidden="true">
                    ⭐
                </span>
            );
        }

        return <span aria-label={`Rating: ${rating} out of ${maxStars} stars`}>{stars}</span>;
    };

    const handleReplyClick = (id: string | number | null) => {
        setActiveReplyId(activeReplyId === id ? null : id); // Toggle reply input
    };

    interface HandleSubmitComment {
        (reviewId: number): void;
    }

    const handleSubmitComment: HandleSubmitComment = (reviewId) => {
        if (newComment.trim()) {
            console.log(`Submitting comment for review ${reviewId}: ${newComment}`);
            setNewComment(''); // Clear input
            setActiveReplyId(null); // Close reply input
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10 mt-25">
            {reviews.map((review) => (
                <div
                    key={review.id}
                    className="shadow-small rounded-base border border-neutral-100 p-6"
                >
                    {/* Review Header */}
                    <div className="flex items-center gap-3 mb-3">
                        <div className="relative size-12">
                            <Image
                                src={review.avatar}
                                fill
                                alt={`Avatar of ${review.name}`}
                                className="w-10 h-10 rounded-full object-cover"

                            />
                        </div>
                        <div className="flex-1">
                            <h4 className="font-medium text-gray-900">{review.name}</h4>
                            <div className="flex items-center gap-2">
                                <div className="flex">{renderStars(review.rating)}</div>
                                <span className="text-sm text-gray-500">{review.time}</span>
                            </div>
                        </div>
                    </div>

                    {/* Review Content */}
                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">{review.comment}</p>

                    {/* Reply Button */}
                    <button
                        onClick={() => handleReplyClick(review.id)}
                        className="text-sm text-neutral-600 bg-neutral-100 px-3.5 rounded-full py-1.5 font-medium mb-4"
                        aria-label={`Reply to ${review.name}'s review`}
                    >
                        Reply
                    </button>
                    <div className="h-[1px] w-full bg-neutral-100" />
                    {/* Reply Indicator */}
                    {review.hasReply && (
                        <div className="flex items-center gap-2 mt-3">
                            <div className="relative size-12">
                                <Image
                                    src="/user.svg"
                                    alt="Your avatar"
                                    fill
                                    className="w-6 h-6 rounded-full object-cover"
                                />
                            </div>
                            <span className="text-sm font-medium text-gray-700">You Replied</span>
                            <span className="text-sm text-gray-500">• {review.replyCount} Reply</span>
                        </div>
                    )}

                    {/* Comment Input Section */}
                    {activeReplyId === review.id && (
                        <div className="flex items-center gap-3 mt-4">
                            <div className="relative size-12">
                                <Image
                                    src="/user.svg"
                                    fill
                                    alt="Your avatar"
                                    className="w-8 h-8 rounded-full object-cover"
                                />
                            </div>
                            <span className="text-sm font-medium text-gray-700">You</span>
                            <div className="flex-1 flex items-center">
                                <input
                                    type="text"
                                    placeholder="Type your reply..."
                                    value={newComment}
                                    onChange={(e) => setNewComment(e.target.value)}
                                    className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    aria-label="Reply input"
                                />
                                <button
                                    onClick={() => handleSubmitComment(review.id)}
                                    className="ml-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                                    aria-label="Submit reply"
                                >
                                    <FaTelegramPlane size={24} className="blue-800" />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
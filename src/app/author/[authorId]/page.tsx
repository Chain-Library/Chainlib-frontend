"use client";

import BookCard from '@/app/_components/BookCard';
import CustomLink from '@/app/_components/CustomLink';
import SearchBar from '@/app/_components/SearchBar';
import { recentBooks, stats, topAuthors, trendingBooks } from '@/data';
import { BadgeCheck, Bell } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense, useState } from 'react';
import { FiBook, FiDollarSign, FiEye, FiUsers } from 'react-icons/fi';
import Bookloader from './_components/Bookloader';
import ProfileCompletionAlert from './_components/ProfileCompletionAlert';
import ProfileCompletionModal from './_components/ProfileCompletionModal';

function Page() {
  const [showProfileModal, setShowProfileModal] = useState(true);
  const [showProfileAlert] = useState(true);
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className="w-full max-w-6xl p-6">
      <div className="flex items-center justify-between mb-8 md:mb-15">
        <SearchBar placeholder="Search for books, authors..." />

        <div className="flex items-center justify-center space-x-4">
          {/* Notification bell */}
          <button className="text-gray-500 relative cursor-pointer hover:text-gray-700">
            <Bell className="size-6 text-[#5D5D5D]" fill="currentColor" />
            <span className="absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full bg-red-500 font-bold text-label-xs text-background">
              1
            </span>
          </button>

          {/* Profile */}
          <div className="flex items-center  border border-neutral-100 rounded-md md:p-1">
            <div className="relative size-12 rounded-md overflow-hidden border border-gray-200">
              <Image src="/user1.svg" alt="Profile" fill className="h-full w-full object-cover" />
            </div>
            <div className="hidden md:block ml-2">
              <p className="text-sm font-medium text-gray-800">Joseph Yanum</p>
              <p className="text-xs text-gray-500">@joeyanum</p>
            </div>
            <BadgeCheck className="hidden md:block size-5 ml-3 text-[#218DFF]" />
          </div>
        </div>
      </div>

      {/* Header with Title */}
      <div className="rounded-small p-8 mb-6 relative flex flex-col md:flex-row justify-between items-center md:px-15 bg-primary-50">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/headerImg.png"
            alt="Header background"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className="z-10">
          <h1 className="text-headline-small md:text-3xl font-bold text-neutral-900">Your Words</h1>
          <h2 className="text-body-18px-large md:text-headline-small font-bold text-neutral-900/90">Deserve the World</h2>
        </div>

        <CustomLink route="publish" classname="z-10 mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-background font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-md">
          Publish Your First Book
        </CustomLink>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-background p-5 rounded-lg border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-sm text-gray-500">Books Published</h3>
              {isLoading ? <p className="h-7 mt-1 w-26 bg-gray-200 rounded-small animate-pulse"></p> : <p className="text-2xl font-bold text-blue-600">{stats.booksPublished}</p>}
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <FiBook className="text-blue-500" size={20} />
            </div>
          </div>
        </div>

        <div className="bg-background p-5 rounded-lg border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-sm text-gray-500">Total Earning</h3>
              {isLoading ? <p className="h-7 mt-1 w-26 bg-gray-200 rounded-small animate-pulse"></p> : <p className="text-2xl font-bold text-yellow-600">${stats.totalEarning.toFixed(2)}</p>}

            </div>
            <div className="p-3 bg-yellow-100 rounded-full">
              <FiDollarSign className="text-yellow-500" size={20} />
            </div>
          </div>
        </div>

        <div className="bg-background p-5 rounded-lg border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-sm text-gray-500">Total Reads</h3>
              {isLoading ? <p className="h-7 mt-1 w-26 bg-gray-200 rounded-small animate-pulse"></p> : <p className="text-2xl font-bold text-green-600">{stats.totalReads}</p>}
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <FiEye className="text-green-500" size={20} />
            </div>
          </div>
        </div>

        <div className="bg-background p-5 rounded-lg border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-sm text-gray-500">Followers</h3>
              {isLoading ? <p className="h-7 mt-1 w-26 bg-gray-200 rounded-small animate-pulse"></p> : <p className="text-2xl font-bold text-pink-600">{stats.followers}</p>}

            </div>
            <div className="p-3 bg-pink-100 rounded-full">
              <FiUsers className="text-pink-500" size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Profile Completion Alert */}
      <ProfileCompletionAlert showProfileAlert={showProfileAlert} setShowProfileModal={setShowProfileModal} />

      {/* Recent Published Books */}
      <div className="mb-8 md:mb-15 bg-background rounded-base p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Recent Published Books</h2>
          <CustomLink route="publications" classname="text-sm text-neutral-600 border border-neutral-100 rounded-full px-4 py-1">
            View All →
          </CustomLink>
        </div>
        {<Suspense fallback={<Bookloader />} >
          <div className="sm:gap-x-4 lg:gap-x-10 gap-6 grid no-scrollbar overflow-x-scroll grid-flow-col snap-center">
            {recentBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </Suspense>}
      </div>

      {/* Trending Books */}
      <div className="mb-8 md:mb-15 bg-background rounded-base p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Trending Books</h2>
          <Link href="/books/trending" className="text-sm text-neutral-600 border border-neutral-100 rounded-full px-4 py-1">
            View All →
          </Link>
        </div>
        <Suspense fallback={<Bookloader />}>
          <div className="sm:gap-x-4 lg:gap-x-10 gap-6 grid no-scrollbar overflow-x-scroll grid-flow-col snap-center">
            {trendingBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </Suspense>
      </div>

      {/* Top Authors of the Week */}
      <div className="mb-8 md:mb-15 bg-background rounded-base p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Top Authors for the Week</h2>
          <Link href="/community/authors" className="text-sm text-neutral-100 border border-neutral-100 rounded-full px-4 py-1">
            View All →
          </Link>
        </div>
        <Suspense fallback={<AuthorCardLoader length={4} />} >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {topAuthors.map(author => (
              <div key={author.id} className="bg-background rounded-lg overflow-hidden border border-gray-100 h-72 relative">
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={author.imageUrl}
                    alt={author.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="z-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <div className="flex items-center justify-center">
                    <h3 className="font-semibold text-background">{author.name}</h3>
                    <div className="ml-1.5">
                      <Image
                        src="/verified.svg"
                        alt="Verified Author"
                        width={16}
                        height={16}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Suspense>
      </div>

      {/* Profile Completion Modal */}
      <ProfileCompletionModal
        isOpen={showProfileModal}
        onClose={() => setShowProfileModal(false)}
      />
    </div>
  );
}

function AuthorCardLoader({ length }: { length: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {Array.from({ length }).map((x, index) => <div key={index} className='h-72 animate-pulse'>
        <div className="rounded-small bg-gray-200 w-full h-full">
        </div>
      </div>)}
    </div>)
}

export default Page;
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Star, ArrowRight, Info } from 'lucide-react';
import Image from 'next/image';
import ximage from '@/assets/Images/1.png';

import DashboardIcons from '@/assets/icons/readerdashboardicons';

export default function ChainlibDashboard() {
  const continueReadingBooks = [
    {
      id: 1,
      title: 'Native Invisibility',
      author: 'Darrin Collins',
      progress: 70,
      cover: ximage.src,
      verified: true,
    },
    {
      id: 2,
      title: 'Peace and Hate',
      author: 'Darrin Collins',
      progress: 70,
      cover: ximage.src,
      verified: true,
      nft: true,
    },
    {
      id: 3,
      title: 'Native Invisibility',
      author: 'Darrin Collins',
      progress: 90,
      cover: ximage.src,
      verified: true,
    },
    {
      id: 4,
      title: 'Peace and Hate',
      author: 'Darrin Collins',
      progress: 43,
      cover: ximage.src,
      verified: true,
    },
  ];

  const newReleaseBooks = [
    {
      id: 1,
      title: 'Native Invisibility',
      author: 'Darrin Collins',
      price: { strk: 193, usd: 10 },
      rating: 4.5,
      reviews: 5,
      cover: ximage.src,
      verified: true,
    },
    {
      id: 2,
      title: 'Native Invisibility',
      author: 'Darrin Collins',
      price: { strk: 193, usd: 10 },
      rating: 4.5,
      cover: ximage.src,
      verified: true,
    },
    {
      id: 3,
      title: 'Native Invisibility',
      author: 'Darrin Collins',
      price: { strk: 193, usd: 10 },
      rating: 4.5,
      cover: ximage.src,
      verified: true,
    },
    {
      id: 4,
      title: 'Native Invisibility',
      author: 'Darrin Collins',
      price: { strk: 193, usd: 10 },
      rating: 4.5,
      cover: ximage.src,
      verified: true,
    },
  ];

  const nftBooks = [
    {
      id: 1,
      title: 'Peace and Hate',
      author: 'Darrin Collins',
      price: { strk: 193, usd: 10 },
      rating: 4.5,
      cover: ximage.src,
      verified: true,
    },
    {
      id: 2,
      title: 'Dark Night',
      author: 'Darrin Collins',
      price: { strk: 193, usd: 10 },
      rating: 4.5,
      cover: ximage.src,
      verified: true,
    },
    {
      id: 3,
      title: 'Bad Boys',
      author: 'Darrin Collins',
      price: { strk: 193, usd: 10 },
      rating: 4.5,
      cover: ximage.src,
      verified: true,
    },
    {
      id: 4,
      title: 'The Laws',
      author: 'Darrin Collins',
      price: { strk: 193, usd: 10 },
      rating: 4.5,
      cover: ximage.src,
      verified: true,
    },
  ];

  const topAuthors = [
    {
      id: 1,
      name: 'Elizabeth Joe',
      avatar: '/author-1.png',
      verified: true,
    },
    {
      id: 2,
      name: 'Alex Paul',
      avatar: '/author-1.png',
      verified: true,
    },
    {
      id: 3,
      name: 'Samson Tersoor',
      avatar: '/author-1.png',
      verified: true,
    },
    {
      id: 4,
      name: 'Vamika Maya',
      avatar: '/author-1.png',
      verified: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <Card className="bg-gradient-to-r from-[#096CFF] to-[#096CFF] border-0 text-white">
          <CardContent className="p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-3">
              Enjoy 3 Days on Us!
            </h1>
            <p className="text-blue-100 text-sm md:text-base max-w-md">
              Dive into stories, explore new authors, and experience Chainlib
              completely free for your first 3 days.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-[##FBBC050A] border-[#FBBC05]">
          <CardContent className="p-0 md:p-6 md:py-0 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Info className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">
                  Complete Your Profile
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  Just a few steps to unlock everything!
                </p>
              </div>
            </div>

            <Button className="bg-yellow-200 hover:bg-yellow-300 text-yellow-800 border-0">
              Complete Set-up
            </Button>
          </CardContent>
        </Card>

        <section className=" bg-white rounded-lg p-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              Continue Reading
            </h2>
            <Button
              variant="ghost"
              className="border border-[#E7E7E7] text-[#B0B0B0] rounded-2xl"
            >
              View All <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {continueReadingBooks.map((book) => (
              <Card
                key={book.id}
                className="overflow-hidden bg-transparent shadow-none border border-[#E7E7E7] rounded-md"
              >
                <CardContent className="p-4">
                  <div className="relative mb-4">
                    <Image
                      src={book.cover || '/placeholder.svg'}
                      alt={book.title}
                      width={120}
                      height={160}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                  </div>

                  <div className="mb-3 ">
                    <div className="flex items-center gap-2 justify-start">
                      <div>{book.nft && <DashboardIcons.NFTIcon />}</div>
                      <p className="text-[10px] text-[#454545] mb-1 bg-[#F6F6F6] px-2 py-1 rounded-full inline-block">
                        {book.progress}% Completed
                      </p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div
                        className="bg-blue-500 h-1.5 rounded-full"
                        style={{ width: `${book.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">
                    {book.title}
                  </h3>
                  <div className="flex items-center gap-1 mb-3">
                    <p className="text-xs text-gray-600">By {book.author}</p>
                    {book.verified && <DashboardIcons.VerifiedIcon />}
                  </div>

                  <Button className="w-full bg-[#EDF7FF] from-[#EDF7FF] to-[#096CFF] hover:bg-blue-200 text-[#0F265C] border-0">
                    Continue Reading
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className=" bg-white rounded-lg p-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              New Release
            </h2>
            <Button
              variant="ghost"
              className="border border-[#E7E7E7] text-[#B0B0B0] rounded-2xl"
            >
              View All <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {newReleaseBooks.map((book) => (
              <Card
                key={book.id}
                className="overflow-hidden bg-transparent shadow-none border border-[#E7E7E7] rounded-md"
              >
                <CardContent className="p-4">
                  <Image
                    src={book.cover || '/placeholder.svg'}
                    alt={book.title}
                    width={120}
                    height={160}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />

                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">
                    {book.title}
                  </h3>
                  <div className="flex items-center gap-1 mb-2">
                    <p className="text-xs text-gray-600">By {book.author}</p>
                    {book.verified && <DashboardIcons.VerifiedIcon />}
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-gray-900">
                      🪙 {book.price.strk}{' '}
                      <span className="text-xs text-gray-500">STRK</span>
                    </span>
                    <span className="text-sm font-medium text-gray-900">
                      ${book.price.usd}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <DashboardIcons.StarIcon />
                    <span className="text-xs text-gray-600">{book.rating}</span>
                    {book.reviews && (
                      <>
                        <DashboardIcons.CommentIcon />
                        <span className="text-xs text-gray-600">
                          {book.reviews}
                        </span>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className=" bg-white rounded-lg p-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              Trending Books
            </h2>
            <Button
              variant="ghost"
              className="border border-[#E7E7E7] text-[#B0B0B0] rounded-2xl"
            >
              View All <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {newReleaseBooks.map((book) => (
              <Card
                key={`trending-${book.id}`}
                className="overflow-hidden bg-transparent shadow-none border border-[#E7E7E7] rounded-md"
              >
                <CardContent className="p-4">
                  <Image
                    src={book.cover || '/placeholder.svg'}
                    alt={book.title}
                    width={120}
                    height={160}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />

                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">
                    {book.title}
                  </h3>
                  <div className="flex items-center gap-1 mb-2">
                    <p className="text-xs text-gray-600">By {book.author}</p>
                    {book.verified && <DashboardIcons.VerifiedIcon />}
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-gray-900">
                      🪙 {book.price.strk}{' '}
                      <span className="text-xs text-gray-500">STRK</span>
                    </span>
                    <span className="text-sm font-medium text-gray-900">
                      ${book.price.usd}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <DashboardIcons.StarIcon />
                    <span className="text-xs text-gray-600">{book.rating}</span>
                    {book.reviews && (
                      <>
                        <DashboardIcons.CommentIcon />
                        <span className="text-xs text-gray-600">
                          {book.reviews}
                        </span>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className=" bg-white rounded-lg p-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              Recommendation
            </h2>
            <Button
              variant="ghost"
              className="border border-[#E7E7E7] text-[#B0B0B0] rounded-2xl"
            >
              View All <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {newReleaseBooks.map((book) => (
              <Card
                key={`rec-${book.id}`}
                className="overflow-hidden bg-transparent shadow-none border border-[#E7E7E7] rounded-md"
              >
                <CardContent className="p-4">
                  <Image
                    src={book.cover || '/placeholder.svg'}
                    alt={book.title}
                    width={120}
                    height={160}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />

                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">
                    {book.title}
                  </h3>
                  <div className="flex items-center gap-1 mb-2">
                    <p className="text-xs text-gray-600">By {book.author}</p>
                    {book.verified && (
                      <DashboardIcons.VerifiedIcon className="w-3 h-3 text-blue-500" />
                    )}
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-gray-900">
                      🪙 {book.price.strk}{' '}
                      <span className="text-xs text-gray-500">STRK</span>
                    </span>
                    <span className="text-sm font-medium text-gray-900">
                      ${book.price.usd}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <DashboardIcons.StarIcon />
                    <span className="text-xs text-gray-600">{book.rating}</span>
                    {book.reviews && (
                      <>
                        <DashboardIcons.CommentIcon />
                        <span className="text-xs text-gray-600">
                          {book.reviews}
                        </span>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-white">
              NFT Edition
            </h2>
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 bg-transparent"
            >
              View All <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {nftBooks.map((book) => (
              <Card key={`nft-${book.id}`} className="bg-white overflow-hidden">
                <CardContent className="p-4">
                  <div className="relative mb-4">
                    <Image
                      src={book.cover || '/placeholder.svg'}
                      alt={book.title}
                      width={120}
                      height={160}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                    <Badge className="absolute top-2 right-2 bg-purple-100 text-purple-700 text-xs">
                      NFT
                    </Badge>
                  </div>

                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">
                    {book.title}
                  </h3>
                  <div className="flex items-center gap-1 mb-2">
                    <p className="text-xs text-gray-600">By {book.author}</p>
                    {book.verified && (
                      <CheckCircle className="w-3 h-3 text-blue-500" />
                    )}
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-gray-900">
                      🪙 {book.price.strk}{' '}
                      <span className="text-xs text-gray-500">STRK</span>
                    </span>
                    <span className="text-sm font-medium text-gray-900">
                      ${book.price.usd}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs text-gray-600">{book.rating}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              Top Authors for the Week
            </h2>
            <Button
              variant="ghost"
              className="text-gray-500 hover:text-gray-700"
            >
              View All <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {topAuthors.map((author) => (
              <Card key={author.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={author.avatar || '/placeholder.svg'}
                      alt={author.name}
                      width={200}
                      height={200}
                      className="w-full h-32 md:h-40 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                      <div className="flex items-center gap-1">
                        <p className="text-white font-medium text-sm">
                          {author.name}
                        </p>
                        {author.verified && (
                          <CheckCircle className="w-3 h-3 text-blue-400" />
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

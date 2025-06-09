import { cn } from "@/lib/utils";
import Image from "next/image";

type BookCardProps = {
  id?: string | number
  title: string;
  author: string;
  price: string | number;
  imageUrl: string;
  rating: string | number;
  verified?: boolean;
  nft?: boolean;
};

export default function BookCard({ book, className }: { className?: string, book: BookCardProps }) {
  const { imageUrl, title, author, price, rating, verified, nft } = book

  return <div className={cn(className, "rounded-base overflow-hidden md:shadow-small border border-neutral-100 p-6 pt-8 min-w-54")}>
    <div className="relative flex mx-auto justify-center items-center size-44 md:size-36 bg-transparent mb-8">
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-fill object-center size-4/5"
      />
      {nft && (
        <div className="absolute bottom-2 left-2 bg-purple-200 rounded-3xl mt-5 w-6 h-6 flex items-center justify-center">
          <span className="text-xs text-purple-800">NFT</span>
        </div>
      )}
    </div>
    <h3 className="font-semibold text-gray-800">{title}</h3>
    <div className="flex items-center">
      <p className="text-sm text-gray-600">By {author}</p>
      {verified && (
        <div className="ml-1">
          <Image
            src="/verified.svg"
            alt="Verified Author"
            width={16}
            height={16}
          />
        </div>
      )}
    </div>
    <div className="flex justify-between items-center mt-2">
      <p className="font-bold text-gray-900">${price}</p>
      <div className="flex items-center">
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-sm text-gray-600">{rating}</span>
      </div>
    </div>
  </div>
}

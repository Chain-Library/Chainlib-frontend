import Image from "next/image";

type BookCardProps = {
  title: string;
  author: string;
  price: string;
  rating: string;
  verified?: boolean;
  nft?: boolean;
};

export default function BookCard({ title, author, price, rating, verified, nft }: BookCardProps) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg hover:shadow-lg hover:scale-105 transition-all">
      <div className="relative">
        <Image 
          src="/Cover.png" 
          width={100}
          height={100}
          alt={title}
          className="w-[80%] ml-9 mt-5 h-50 object-cover mb-3"
        />
        {nft && (
          <div className="absolute bottom-2 left-2 bg-purple-200 rounded-3xl mt-5 w-6 h-6 flex items-center justify-center">
            <span className="text-xs text-purple-800">NFT</span>
          </div>
        )}
      </div>
      <h3 className="font-bold text-gray-900 mt-5">{title}</h3>
      <div className="flex items-center text-sm text-gray-600 mb-1">
        <span>By {author}</span>
        {verified && (
          <span className="ml-1 text-blue-500">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 inline">
              <circle cx="12" cy="12" r="10" fill="currentColor" />
              <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none" />
            </svg>
          </span>
        )}
      </div>
      <div className="flex justify-between items-center mt-2">
        <span className="font-bold text-[#5D5D5D]">${price}</span>
        <div className="flex items-center">
          <span className="text-yellow-500 mr-1">★</span>
          <span className="text-sm text-gray-600">{rating}</span>
        </div>
      </div>
    </div>
  );
}

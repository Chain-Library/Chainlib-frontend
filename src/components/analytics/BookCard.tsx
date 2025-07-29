"use client";
import Image from "next/image";
import Image2 from "@/assets/Images/footerimage.png";
type BookCardProps = {
  title: string;
  author: string;
  price: string;
  rating: number;
  cover: string;
};

const BookCard: React.FC<BookCardProps> = ({
  title,
  author,
  price,
  rating,
  cover,
}) => (
  <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
    <Image
      src={Image2}
      alt={title}
      width={60}
      height={80}
      className="rounded-md object-cover mr-4"
    />
    <div>
      <h3 className="font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-500">{author}</p>
      <p className="text-sm font-bold text-blue-600 mt-1">{price}</p>
      <div className="flex items-center text-sm text-gray-500 mt-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-yellow-400 mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        {rating}
      </div>
    </div>
  </div>
);
export default BookCard;

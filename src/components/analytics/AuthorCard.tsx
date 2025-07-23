"use client";
import Image from "next/image";

type AuthorCardProps = {
  name: string;
  image: string;
};

const AuthorCard: React.FC<AuthorCardProps> = ({ name, image }) => (
  <div className="text-center">
    <Image
      src={image}
      alt={name}
      width={100}
      height={100}
      className="rounded-full object-cover mx-auto"
      onError={(e) => {
        (e.target as HTMLImageElement).src =
          "https://placehold.co/100x100/CCCCCC/000000?text=Author";
      }}
    />
    <p className="mt-2 font-semibold text-gray-800">{name}</p>
  </div>
);
export default AuthorCard;

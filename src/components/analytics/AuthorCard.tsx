"use client";
import Image from "next/image";
import Image2 from "@/assets/Images/footerimage.png";
type AuthorCardProps = {
  name: string;
  image: string;
};

const AuthorCard: React.FC<AuthorCardProps> = ({ name, image }) => (
  <div className="text-center">
    <Image
      src={Image2}
      alt={name}
      width={100}
      height={100}
      className="rounded-full object-cover mx-auto"
    />
    <p className="mt-2 font-semibold text-gray-800">{name}</p>
  </div>
);
export default AuthorCard;

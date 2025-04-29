import Image from "next/image";
import Link from "next/link";
import book_cover from "../../../public/book_cover.svg";
import you from "../../../public/you.svg";
import tag from "../../../public/Tag.svg";

interface CollectionCardProps {
  id?: string;
  title: string;
  price: string;
  owners?: number;
  status?: string;
}

export function CollectionCard({
  id = "1",
  title,
  price,
  status,
  owners = 0,
}: CollectionCardProps) {
  return (
    <Link href={`/books/${id}`}>
      <div className="bg-white rounded-lg border border-[#e7e7e7] overflow-hidden hover:shadow-sm transition-shadow">
        <div className="relative h-56 flex items-center justify-center">
          <Image
            src={book_cover}
            alt={title}
            width={100}
            height={101}
            className="mx-auto "
          />
        </div>
        <div className="p-4 mt-3">
          <div className="flex items-center gap-1 mb-1">
            <span className="text-xs px-2 py-1.5 rounded-full">{status}</span>
          </div>
          <h3 className="font-semibold my-2 text-[#3D3D3D] text-[18px]">
            {title}
          </h3>
          <div className="text-[#5d5d5d] text-[18px] font-semibold">
            {price}
          </div>

          <div className="flex items-center space-x-5 mt-2">
            <div className="flex items-center gap-1">
              <span className="text-[#dba736] text-sm">★ 4.5</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-[#888888]">
              <Image src={tag} alt="Profile" className="object-cover" />
              <span>102</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-[#888888]">
              <Image src={you} alt="Profile" className="object-cover" />
              {owners > 0 ? <span>{owners} Owners</span> : <span>You</span>}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

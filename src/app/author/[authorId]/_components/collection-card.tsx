import Image from "next/image";
import Link from "next/link";

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
      <div className="bg-white p-6 pt-8 md:p-4 xl:p-6 rounded-lg border border-[#e7e7e7] overflow-hidden hover:shadow-small min-w-56 md:min-w-1/5 transition-shadow">
        <div className="relative mx-auto size-44 md:size-[10vw] flex items-center justify-center">
          <Image
            src="/book_cover.svg"
            alt={title}
            fill
            className=" object-fill object-center"
          />
        </div>
        <div className="mt-3 w-full">
          <div className="flex w-full items-center gap-1 mb-1">
            <span className="text-xs px-2 py-1.5 rounded-full">{status}</span>
          </div>
          <h3 className="font-semibold my-2 text-[#3D3D3D] text-[18px]">
            {title}
          </h3>
          <div className="text-[#5d5d5d] text-[18px] font-semibold">
            {price}
          </div>

          <div className="flex w-full items-center justify-between mt-2">
            <div className="flex items-center gap-1">
              <span className="text-[#dba736] text-sm">★ 4.5</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-[#888888]">
              <div className="relative size-4">
                <Image src="/Tag.svg" alt="Profile" fill className="object-cover" />
              </div>
              <span>102</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-[#888888]">
              <div className="relative size-4">
                <Image src={owners > 0 ? "/owners.svg" : "/you.svg"} alt="Profile" fill className="object-cover" />
              </div>
              {owners > 0 ? <span>Owners</span> : <span>You</span>}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

import Image from "next/image";
import Link from "next/link";

interface BookCardProps {
  id?: string;
  amount?: number;
  title: string;
  price: string;
  status: string;
  statusColor: string;
  isNft?: boolean;
  isSeries?: boolean;
}

export function BookCard({
  id = "1",
  title,
  price, amount,
  status,
  statusColor,
  isNft = false,
  isSeries = false,
}: BookCardProps) {
  return (
    <Link href={`/author/id/books/${id}`} className="p-6 pt-8 bg-background md:p-4 xl:p-6 min-w-58 md:min-w-[20%] rounded-base border border-neutral-100 overflow-hidden text-primary-600 hover:shadow-small transition-shadow">
      <div className="relative mx-auto w-full sm:max-w-46 size-44 md:size-[10vw] mb-8">
        <Image
          src="/book_cover.svg"
          alt={title}
          fill
          className="object-fill object-center"
        />
      </div>
      <div className="mt-3 w-full">
        <div className="flex items-center gap-1 mb-1 w-full">
          <span
            className="text-xs px-2 py-1.5 rounded-full"
            style={{
              backgroundColor: `${statusColor}20`,
              color: statusColor,
            }}
          >
            {status}
          </span>
          {isNft && (
            <span className="text-xs bg-[#f6f6f6] text-[#822ecb] px-1 py-0.5 rounded">
              NFT
            </span>
          )}
        </div>
        <h3 className="font-semibold my-2 text-[#3D3D3D] text-[18px]">
          {title}
        </h3>
        <div className="text-body-18px-large font-semibold flex justify-between item-center w-full">
          <div className="text-neutral-600 flex  gap-2">
            <Image src="/starknet.svg" alt="starkNet icon" className="" width={16} height={16} />
            <span className="font-bold">{amount || 193}</span>
            <span className="text-label-small font-normal mt-1.5">STRK</span>
          </div>
          <div>{price}</div>
        </div>

        <div className="flex text-label-small items-center justify-between xl:justify-start xl:space-x-5 mt-2 w-full">
          <div className="flex items-center gap-1">
            <span className="text-[#dba736] text-sm">★ 4.5</span>
          </div>
          <div className="flex items-center gap-1 ">
            <div className="relative size-4">
              <Image src="/Tag.svg" alt="Profile" fill className="object-cover" />
            </div>
            <span>102</span>
          </div>
          {isSeries && (
            <div className="flex items-center gap-1">
              <div className="relative size-4">
                <Image src="/is_series.svg" alt="Profile" fill className="object-cover" />
              </div>
              <span>5</span>
            </div>
          )}
          <div className="flex items-center gap-1 ">
            <div className="relative size-4 rounded-full">
              <Image src="/you.svg" alt="Profile" fill className="object-cover" />
            </div>
            <span>You</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

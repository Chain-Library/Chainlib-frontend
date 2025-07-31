// NFTMintingTable.tsx
import React from "react";
import Image from "next/image";

export interface NFTMinting {
  id: string;
  title: string;
  author: string;
  feeAmount: string;
  network: string;
  mintDate: string;
  status: "Minted" | "Failed" | "Pending";
  coverImage?: string;
  smartContractAddress?: string;
  tokenStandard?: string;
  transactionHash?: string;
  confirmationStatus?: string;
  description?: string;
  genres?: string[];
  pageCount?: number;
  language?: string;
  isbn?: string;
}

interface NFTMintingTableProps {
  nftMinings: NFTMinting[];
  onViewMore: (nft: NFTMinting) => void;
}

const NFTMintingTable: React.FC<NFTMintingTableProps> = ({
  nftMinings,
  onViewMore,
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Cover
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title and Author
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Fee Amount
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Network
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Mint Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {nftMinings.map((nft, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="w-10 h-12 bg-gray-300 rounded flex-shrink-0"></div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    {nft.title}
                  </div>
                  <div className="text-sm text-gray-500">by {nft.author}</div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <div className="flex items-center gap-2">
                  <Image
                    src="/starknet.png"
                    alt="starknet icon"
                    width={16}
                    height={16}
                  />
                  {nft.feeAmount}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {nft.network}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {nft.mintDate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${
                    nft.status === "Minted"
                      ? "bg-green-100 text-green-700 border border-green-200"
                      : nft.status === "Failed"
                      ? "bg-red-100 text-red-700 border border-red-200"
                      : "bg-yellow-100 text-yellow-700 border border-yellow-200"
                  }`}
                >
                  {nft.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                <button
                  className="hover:text-blue-800 font-medium"
                  onClick={() => onViewMore(nft)}
                >
                  View More
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NFTMintingTable;

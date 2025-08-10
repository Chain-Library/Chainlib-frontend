"use client";
import StatCard from "@/components/analytics/StatCard";
import { stats } from "@/assets/data/dummyData";
import Transactions from "@/components/analytics/Transactions";
import PayoutRequests from "@/components/analytics/PayoutRequests";
import TrendingBooks from "@/components/analytics/TrendingBooks";
import TopAuthors from "@/components/analytics/TopAuthors";
import StarknetProvider from "@/components/blockchain/StarknetProviders";
import { WalletProvider } from "@/components/blockchain/wallet-connect-context";
import { Header } from "@/components/dashboard/header";
import Icon from "@/assets/icons/Icon";
import Book from "@/assets/icons/Book";
import Reader from "@/assets/icons/Reader";
import Writer from "@/assets/icons/Writer";
import {
  BookOpenText,
  ImagePlus,
  BookCopy,
  BookMarked,
  Filter,
} from "lucide-react";
import Book2 from "@/assets/icons/Book2";
import Star from "@/assets/icons/Star";
import BookImage from "@/assets/icons/BookImage";
const books = new Array(4).fill({
  title: "Native Invisibility",
  author: "Darrin Collins",
  price: "193 STRK",
  rating: 4.5,
  imgSrc: <BookImage />,
});
const statCard = (label: string, value: string) => (
  <div className="bg-white rounded-xl border shadow-sm p-4 w-full flex flex-col gap-1">
    <p className="text-gray-500 text-sm">{label}</p>
    <div className="flex items-center gap-2">
      <p className="text-blue-600 font-semibold text-lg">{value} STR</p>
      <Icon />
    </div>
  </div>
);
export default function DashboardHome() {
  return (
    <>
      <Header title="Dashboard" />
      <div className="p-6 bg-gray-50 min-h-screen space-y-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              label: "Number of Regular",
              value: "257",
              color: "text-blue-600",
              icon: <Book />,
            },
            {
              label: "NFT Books",
              value: "83",
              color: "text-purple-600",
              icon: <Book2 />,
            },
            {
              label: "Readers",
              value: "1093",
              color: "text-green-600",
              icon: <Reader />,
            },
            {
              label: "Writers",
              value: "204",
              color: "text-orange-500",
              icon: <Writer />,
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="border rounded-lg p-4 flex items-center justify-between bg-white"
            >
              <div className="flex flex-col gap-1 w-full">
                <div className="flex items-center justify-between w-full">
                  <p className="text-sm text-gray-600">{card.label}</p>
                  {card.icon}
                </div>
                <p className={`font-semibold text-lg ${card.color}`}>
                  {card.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 bg-white rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-700">
              Transactions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <div className="col-span-1 xl:col-span-1 bg-blue-50 rounded-xl p-6 flex flex-col items-center justify-center text-center gap-2">
              <p className="text-gray-500">Total Transactions</p>
              <div className="flex items-center justify-center gap-2">
                <Icon />
                <p className="text-blue-600 font-bold text-2xl">109,837.06</p>
              </div>
              <span className="bg-green-100 text-green-600 text-xs px-2 py-0.5 rounded-full w-fit">
                20% ▲
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 col-span-1 xl:col-span-2">
              {statCard("Commission Eared", "21,070.93")}
              {statCard("Payout Sent", "51,070.93")}
              {statCard("Pending Payout", "12,070.93")}
              {statCard("Payout Sent", "21,070.93")}
            </div>
          </div>
        </div>

        <div className="p-4 bg-white rounded-xl shadow-sm">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">New Payout Requests</h2>
            <button className="text-sm flex items-center gap-1 border px-3 py-1.5 rounded-md">
              <Filter className="w-4 h-4" /> Filter
            </button>
          </div>
          <div className="overflow-x-auto bg-white rounded-lg border">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-gray-100 text-gray-600">
                <tr>
                  <th className="px-4 py-2">Author</th>
                  <th className="px-4 py-2">Amount</th>
                  <th className="px-4 py-2">Wallet Address</th>
                  <th className="px-4 py-2">Request Date</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <tr key={i} className="border-t">
                      <td className="px-4 py-3">
                        <div>
                          <p className="font-medium">Olu Ademola</p>
                          <p className="text-xs text-gray-500">
                            olusx_dgmail.com
                          </p>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1">
                          <Icon />
                          500.67 STR
                        </div>
                      </td>
                      <td className="px-4 py-3">0xABC...789</td>
                      <td className="px-4 py-3">27 May,2025</td>
                      <td className="px-4 py-3">
                        <span className="bg-yellow-100 text-yellow-600 px-2 py-0.5 rounded-full text-xs">
                          Pending
                        </span>
                      </td>
                      <td className="px-4 py-3 space-x-2">
                        <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-xs">
                          Approve
                        </button>
                        <button className="border border-gray-300 text-gray-700 px-3 py-1 rounded-md text-xs">
                          Decline
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div className="p-4 text-sm text-gray-500">
              Showing 1 to 5 of 12
            </div>
          </div>
        </div>

        <div className="p-4 bg-white rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Trending Books</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {books.map((book, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border p-4 flex items-center gap-4"
              >
                {book.imgSrc}
                <div>
                  <p className="font-semibold text-sm">{book.title}</p>
                  <p className="text-xs text-gray-600 flex items-center gap-1">
                    By {book.author}{" "}
                  </p>
                  <div className="flex items-center gap-1 mt-1 text-sm">
                    <div className="flex items-center gap-1">
                      {" "}
                      <Icon /> {book.price}
                    </div>
                  </div>
                  <div className="flex items-center mt-2 gap-2 text-sm text-yellow-500">
                    <span className="flex items-center gap-1">
                      <Star />
                      {book.rating}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 bg-white rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Top Authors</h2>
            <button className="text-sm text-gray-500 hover:text-black flex items-center gap-1">
              View All →
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[
              {
                name: "Elizabeth Joe",
                img: "https://randomuser.me/api/portraits/women/65.jpg",
              },
              {
                name: "Alex Paul",
                img: "https://randomuser.me/api/portraits/men/32.jpg",
              },
              {
                name: "Samson Tersoor",
                img: "https://randomuser.me/api/portraits/men/77.jpg",
              },
              {
                name: "Vamika Maya",
                img: "https://randomuser.me/api/portraits/women/49.jpg",
              },
              {
                name: "Samson Tersoor",
                img: "https://randomuser.me/api/portraits/women/44.jpg",
              },
            ].map((author, i) => (
              <div
                key={i}
                className="relative rounded-lg overflow-hidden bg-gray-200 shadow-sm hover:shadow-md transition h-48 flex items-end"
                style={{
                  backgroundImage: `url(${author.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="bg-black/50 w-full text-white text-sm font-medium py-2 px-3 flex justify-center items-center gap-1">
                  {author.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

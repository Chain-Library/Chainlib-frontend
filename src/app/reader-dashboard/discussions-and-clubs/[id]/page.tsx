"use client";

import { Header } from "@/components/dashboard/header";
import { Camera, Mic } from "lucide-react";

export default function LiveEventPage() {
  return (
    <div>
      <Header title="Native Fantasy" />

      <div className="flex flex-col items-start md:flex-row gap-x-10 p-4 md:max-w-[85rem] pt-20 px-10 ">
        <div className="">
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <div className="relative w-full h-[300px] md:h-[500px]">
              <img
                src="/live-event.png"
                alt="Live Session"
                className="object-cover w-full h-full"
              />
              <div className="flex">
                <div
                  className="  justify-end bg-[#F6F6F6] rounded-full py-1 px-1 absolute  top-2 right-2
 flex items-center gap-1"
                >
                  <span className="bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                    🔴 Live
                  </span>
                  <span className="bg-white/80 text-gray-800 text-xs px-2 py-1 rounded-full">
                    93
                  </span>
                </div>
              </div>
              <div className="absolute bottom-2 left-2 flex items-center gap-2 bg-white/70 px-3 py-1 rounded-full text-sm">
                <div className="absolute bottom-3 left-3 bg-gray-100 rounded-full px-2 py-1 flex gap-2 shadow-md">
                  <button className="w-10 h-10 flex items-center justify-center bg-white rounded-full border border-gray-300 shadow">
                    <Camera className="w-5 h-5 text-blue-600" />
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center bg-white rounded-full border border-gray-300 shadow">
                    <Mic className="w-5 h-5 text-blue-600" />
                  </button>
                </div>
              </div>
              <button className="absolute bottom-2 right-2 px-4 py-1 bg-red-600/40 text-white text-sm rounded-full">
                End Event
              </button>
            </div>

            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Native Invisibility
              </h2>
              <p className=" text-[#888888] mt-1">
                By Darrin Collins <span className="text-blue-500">✔</span>
              </p>
              <p className=" text-[#888888] mt-4">
                Vibrant book club dedicated to exploring the vast and magical
                realms of fantasy literature. From epic sagas and dark fantasy
                to urban magic and whimsical tales, we delve into all corners of
                the genre.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div>
                    <span className="text-xs text-gray-500">Host</span>
                    <p className="text-sm font-medium text-gray-900">
                      Aisha Musa
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div>
                    <span className="text-xs text-gray-500">Guest</span>
                    <p className="text-sm font-medium text-gray-900">
                      Hana Yamal
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-4 w-full  mt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-md font-semibold text-gray-900">Viewers</h3>
              <span className="text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-600">
                92 Watching
              </span>
            </div>
            <ul className="divide-y divide-[#F6F6F6]">
              {Array.from({ length: 4 }).map((_, i) => (
                <li key={i} className="flex items-center gap-4 py-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full" />
                  <p className="text-sm text-gray-800">Darrin Collins</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-4 w-full max-w-md">
          <h3 className="text-md font-semibold mb-2 text-gray-800">
            Live Chat
          </h3>
          <hr className="mb-4" />
          <div className="space-y-10">
            <div className="bg-gray-100 p-3 rounded-lg">
              <div className="flex items-center space-x-2 mb-1">
                <img
                  src="https://randomuser.me/api/portraits/men/10.jpg"
                  alt="Young John"
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-sm font-medium text-gray-800">
                  Young John
                </span>
              </div>
              <p className="text-sm text-gray-700">
                I disagree with Peace. I believe Umar deserved a second chance
                after what he did
              </p>
            </div>

            <div className="bg-gray-100 p-3 rounded-lg w-fit">
              <div className="flex items-center space-x-2 mb-1 ">
                <img
                  src="https://randomuser.me/api/portraits/men/11.jpg"
                  alt="Ahmed Aliyu"
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-sm font-medium text-gray-800">
                  Ahmed Aliyu
                </span>
              </div>
              <p className="text-sm text-gray-700">Why do you feel that way?</p>
            </div>

            <div className="bg-blue-50 p-3 rounded-lg self-end ">
              <div className="text-right text-sm font-medium text-gray-700 mb-1">
                You
              </div>
              <p className="text-sm text-gray-800 text-right">
                You're saying you don't agree with 'Peace' on this one
              </p>
            </div>

            <div className="bg-gray-100 p-3 rounded-lg">
              <div className="flex items-center space-x-2 mb-1">
                <img
                  src="https://randomuser.me/api/portraits/men/12.jpg"
                  alt="Tony Tony"
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-sm font-medium text-gray-800">
                  Tony Tony
                </span>
              </div>
              <p className="text-sm text-gray-700">
                What makes you think he deserved that second chance?
              </p>
            </div>
          </div>

          <form className="relative mt-6 max-w-md">
            <input
              type="text"
              placeholder="Type here"
              className="w-full pl-4 pr-12 py-3 rounded-md bg-gray-100 border text-[#B0B0B0] border-gray-200 text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="absolute top-1/2 right-2 transform -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

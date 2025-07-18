import React from "react";
import { Search, ChevronDown, PlusIcon } from "lucide-react";

export default function ClubsToolbar() {
  return (
    <div className="w-full p-4 grid grid-cols-2 gap-4 sm:flex sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-x-8">
        <div
          className="  text-sm  col-span-2 sm:col-auto"

          >
          <p className="text-[#454545]"> Clubs You've Joined (2)</p>
        </div>

        <div>
          <p className="text-[#454545]">Discover</p>
        </div>

        <button
          type="button"
          className="border border-gray-300 text-[#888888] flex items-center gap-x-1 rounded-lg px-3 py-3 text-sm font-medium  whitespace-nowrap hover:bg-gray-100 transition"
        >
          <span>
            <PlusIcon className="w-5 h-5" />
          </span>{" "}
          Create a Club
        </button>
      </div>

      <div className="flex items-center sm:w-4/12 gap-x-4 ">
        <div className="relative w-full col-span-2 sm:col-auto">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#B0B0B0]"
            size={16}
          />
          <input
            type="search"
            placeholder="Search for a Club"
            className="w-full rounded-lg placeholder:text-[#B0B0B0]  border border-gray-300 pl-9 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button
          type="button"
          className="flex items-center gap-1 border bg-[#F6F6F6] border-gray-300 rounded-full px-4 py-3 text-sm font-medium text-gray-700 whitespace-nowrap hover:bg-gray-100 transition col-span-2 sm:col-auto justify-center sm:justify-start"
        >
          Club Type
          <ChevronDown size={16} />
        </button>
      </div>
    </div>
  );
}

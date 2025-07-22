import React from "react";
import { Globe, PlusIcon } from "lucide-react";
import { ClubDetailsProps } from "@/lib/types";

interface CardProps extends ClubDetailsProps {
  onOpen: (club: ClubDetailsProps) => void;
}

export default function ClubCard({
  id,
  name,
  isPublic,
  memberCount,
  sessionsInfo,
  unreadNotifications,
  authorAvatars,
  onOpen,
}: CardProps) {
  return (
    <div className="flex cursor-pointer hover:shadow-sm items-center justify-between p-4 bg-white rounded-lg transition-shadow border border-[#E7E7E7] duration-300  w-full">
      <div
        className="flex-shrink-0 w-30 h-30 bg-[#D9D9D9] rounded-lg"
        aria-hidden="true"
      ></div>
      <div className="flex flex-col flex-grow ml-4 min-w-0">
        <div className="flex items-center space-x-2">
          <h2 className="text-lg font-semibold text-gray-900 truncate">
            {name}
          </h2>
          {unreadNotifications > 0 && (
            <span
              className="flex items-center justify-center w-6 h-6 text-xs text-white bg-red-600 rounded-full"
              aria-label="3 unread notifications"
            >
              {unreadNotifications}
            </span>
          )}
        </div>
        <div className="flex flex-wrap items-center text-sm space-x-3 mt-2 mb-1">
          <div className="flex text-sm items-center space-x-1 border border-[#D1D1D1] rounded-full px-2 py-0.5">
            <Globe className="w-4 h-4 text-[#888888] " aria-hidden="true" />
            <span className="text-[#888888]">
              {isPublic ? "Public" : "Private"}
            </span>
          </div>
          <div className="flex text-sm items-center space-x-1 border border-[#D1D1D1] rounded-full px-2 py-0.5">
            <PlusIcon className="text-sm w-3 h-3" />
            <span className="text-[#888888]">{memberCount}</span>
          </div>

          <div className="flex text-sm items-center space-x-1 border border-[#D1D1D1] rounded-full px-2 py-0.5">
            <span className="text-[#888888]">{sessionsInfo}</span>
          </div>
        </div>

        <div className="flex items-center space-x-2 mt-2 ">
          <div className="flex -space-x-2">
            {authorAvatars &&
              authorAvatars.length > 0 &&
              authorAvatars.map((author) => (
                <img
                  src={
                    author ?? "https://randomuser.me/api/portraits/men/32.jpg"
                  }
                  alt="Author 1"
                  className="w-6 h-6 rounded-full border-2 border-white"
                />
              ))}
          </div>

          {authorAvatars && authorAvatars.length > 0 && (
            <span className="truncate text-[#5D5D5D] ">
              {authorAvatars.length} Authors you follow are members
            </span>
          )}
        </div>
      </div>
      <button
        onClick={() => {
          onOpen({
            id: id,
            name,
            isPublic,
            memberCount,
            sessionsInfo,
            unreadNotifications,
            authorAvatars,
          });
        }}
        type="button"
        className="text-[#0F265C] py-2 px-8     transition-colors duration-300 ease-in-out
 rounded-[10px] bg-[linear-gradient(to_bottom,_#EDF7FF_100%,_#096CFF_30%)]
 hover:bg-gray-200  "
      >
        Open
      </button>
    </div>
  );
}

import { ClubDetailsProps } from "@/lib/types";
import { Globe, PlusIcon } from "lucide-react";
import React from "react";

type Props = {
  club: ClubDetailsProps | null;
  isOpen: boolean;
  onClose: () => void;
  onJoin: () => void;
};

export default function ClubModal({ club, isOpen, onClose, onJoin }: Props) {
  if (!isOpen || !club) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 bg-opacity-10 flex items-center justify-center z-50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-white rounded-xl max-w-xl w-full shadow-lg overflow-hidden">
        <header className="flex justify-end items-center p-4 ">
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="text-gray-400 hover:text-gray-700 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </header>

        <section className="p-6 space-y-10">
          <div className="flex flex-col justify-center items-center space-x-3">
            <div
              className="w-30 h-30 bg-gray-200 rounded-md"
              aria-hidden="true"
            />

            <h2 className="text-xl font-semibold text-[#0F265C] truncate mt-2">
              {club.name}
            </h2>

            <div className="flex flex-col space-y-1">
              <div className="flex flex-wrap items-center text-sm space-x-3 mt-2 mb-1">
                <div className="flex text-xs items-center space-x-1 border border-[#D1D1D1] rounded-full px-2 py-0.5">
                  <Globe
                    className="w-4 h-4 text-[#888888] "
                    aria-hidden="true"
                  />
                  <span className="text-[#888888]">
                    {club.isPublic ? "Public" : "Private"}
                  </span>
                </div>
                <div className="flex text-xs items-center space-x-1 border border-[#D1D1D1] rounded-full px-2 py-0.5">
                  <PlusIcon className="text-xs w-3 h-3" />
                  <span className="text-[#888888]">{club.memberCount}</span>
                </div>

                <div className="flex text-xs items-center space-x-1 border border-[#D1D1D1] rounded-full px-2 py-0.5">
                  <span className="text-[#888888]">{club.sessionsInfo}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2 mt-2 ">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <AvatarGroup urls={club.authorAvatars} />
                </div>
                {club.authorAvatars && club.authorAvatars.length > 0 && (
                  <span className="truncate text-[#5D5D5D] text-sm ">
                    {club.authorAvatars.length} Authors you follow are members
                  </span>
                )}
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-full bg-[#F6F6F6] w-fit text-center px-2 py-2 mb-2">
              <p className="text-xs ">About Club</p>
            </div>
            <p className="text-[#3D3D3D] text-sm">
              Vibrant book club dedicated to exploring the vast and magical
              realms of fantasy literature. From epic sagas and dark fantasy to
              urban magic and whimsical tales, we delve into all corners of the
              genre.
            </p>
          </div>

          <div>
            <div className="rounded-full bg-[#F6F6F6] w-fit text-center px-2 py-2 mb-2">
              <p className="text-xs ">Genre Focus</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs border border-[#E7E7E7] rounded-full px-3 py-1  ">
                Fiction
              </span>
              <span className="text-xs border border-[#E7E7E7] rounded-full px-3 py-1  ">
                Drama
              </span>
            </div>
          </div>
        </section>

        <footer className="flex justify-between gap-3 p-4 bg-gray-50">
          <button
            onClick={onClose}
            className="text-[#0F265C] py-4 px-8  w-full    transition-colors duration-300 ease-in-out
 rounded-[10px] bg-[linear-gradient(to_bottom,_#EDF7FF_100%,_#096CFF_30%)]
 hover:bg-gray-200  "
          >
            Cancel
          </button>
          <button
            onClick={onJoin}
            className="px-6 py-4 w-full rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Join Club
          </button>
        </footer>
      </div>
    </div>
  );
}

function Badge({ text, icon }: { text: string; icon?: "users" | "calendar" }) {
  let iconSvg = null;
  if (icon === "users") {
    iconSvg = (
      <svg
        className="w-4 h-4 text-gray-400"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a4 4 0 0 0-3-3.87M9 20H4v-2a4 4 0 0 1 3-3.87m5-6a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm5 6a4 4 0 1 0-8 0 4 4 0 0 0 8 0z"
        />
      </svg>
    );
  } else if (icon === "calendar") {
    iconSvg = (
      <svg
        className="w-4 h-4 text-gray-400"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 2v4M8 2v4M3 10h18"
        />
      </svg>
    );
  }
  return (
    <span className="inline-flex items-center space-x-1 bg-gray-100 rounded-full px-2 py-0.5 text-xs font-semibold text-gray-600">
      {iconSvg}
      <span>{text}</span>
    </span>
  );
}

function AvatarGroup({ urls }: { urls: string[] }) {
  return (
    <div className="flex -space-x-2">
      {urls.map((url, i) => (
        <img
          key={i}
          src={url}
          alt={`Author ${i + 1}`}
          className="w-6 h-6 rounded-full border-2 border-white"
        />
      ))}
    </div>
  );
}

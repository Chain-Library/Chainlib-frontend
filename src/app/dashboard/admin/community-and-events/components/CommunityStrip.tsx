"use client";
import { ClipboardList, Earth, Users } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";
import { Community } from "../utills/data";

export default function CommunityStrip({ item }: { item: Community }) {
  const router = useRouter();

  return (
    <div className="p-2 border-[.5px] rounded-[8px] border-[#E7E7E7] flex justify-between items-center">
      <div className="flex gap-x-4 items-stretch">
        <div className="rounded-[6px] bg-[#D9D9D9] w-[60px] h-[60px]" />
        <div>
          <div className="flex items-center gap-x-[10px] mb-[10px]">
            <h3 className="font-bold text-[#454545] text-base">{item.name}</h3>
            {item.liveNow && (
              <div className="py-[1px] px-[6px] bg-[#FF5C5C] rounded-full text-white text-xs">
                Ongoing Live Event
              </div>
            )}
          </div>

          <div className="flex gap-x-4">
            <div className="flex gap-x-1 items-center py-[2px] px-[6px] border-[0.5px] border-[#D1D1D1] rounded-full text-[#888888]">
              <Earth size={12} /> {item.visibility}
            </div>
            <div className="flex gap-x-1 items-center py-[2px] px-[6px] border-[0.5px] border-[#D1D1D1] rounded-full text-[#888888]">
              <Users size={12} /> {item.membersLabel}
            </div>
            <div className="flex gap-x-1 items-center py-[2px] px-[6px] border-[0.5px] border-[#D1D1D1] rounded-full text-[#888888]">
              <ClipboardList size={12} /> {item.sessionsLabel}
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() =>
          router.push(`/dashboard/admin/community-and-events/${item.id}`)
        }
        className="py-2 px-[30px] rounded-full text-[#0F265C]"
        style={{
          background:
            "linear-gradient(179.56deg, #EDF7FF 60.22%, #096CFF 317.32%)",
        }}
      >
        Open
      </button>
    </div>
  );
}

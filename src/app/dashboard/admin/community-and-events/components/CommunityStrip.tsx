import { ClipboardList, Earth, Users } from "lucide-react";
import React from "react";

function CommunityStrip() {
  return (
    <div className="p-2 border-[.5px] rounded-[8px] border-[#E7E7E7] flex justify-between items-center">
      <div className="flex gap-x-4 items-stretch">
        <div className="rounded-[6px] bg-[#D9D9D9] w-[60px]"></div>
        <div>
          <div className="flex items-center gap-x-[10px] mb-[10px]">
            <h3 className="font-bold text-[#454545] text-base">
              Fantasy Enthusiasts
            </h3>
            <div className="py-[1px] px-[6px] bg-[#FF5C5C] rounded-full text-white text-xs">
              Ongoing Live Event
            </div>
          </div>
          <div className="flex gap-x-4">
            <div className="flex gap-x-1 items-center py-[2px] px-[6px] border-[0.5px] border-[#D1D1D1] rounded-full text-[#888888]">
              <Earth size={12} /> Public
            </div>
            <div className="flex gap-x-1 items-center py-[2px] px-[6px] border-[0.5px] border-[#D1D1D1] rounded-full text-[#888888]">
              <Users size={12} /> 1.5k+
            </div>
            <div className="flex gap-x-1 items-center py-[2px] px-[6px] border-[0.5px] border-[#D1D1D1] rounded-full text-[#888888]">
              <ClipboardList size={12} /> 2+ Sessions a month
            </div>
          </div>
        </div>
      </div>

      <button
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

export default CommunityStrip;

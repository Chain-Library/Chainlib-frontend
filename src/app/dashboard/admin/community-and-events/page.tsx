"use client";
import { Header } from "@/components/dashboard/header";
import CommunityAndEventsFilter from "./components/CommunityAndEventsFilter";
import CommunityStats from "./components/CommunityStats";
import { ListFilter, Search } from "lucide-react";
import CommunityStrip from "./components/CommunityStrip";
import { COMMUNITIES } from "./utills/data";

export default function CommunityAndEvents() {
  return (
    <>
      <Header title="Community and Events" />
      <div className="p-6 font-normal text-sm">
        <div className="bg-white p-4 flex flex-col gap-y-6 rounded-[8px] overflow-hidden mb-10">
          <CommunityAndEventsFilter />
          <CommunityStats />
        </div>

        <div className="bg-white p-4 rounded-[8px]">
          <div className="flex justify-between items-center">
            <div className="relative">
              <div className="absolute z-[3] text-[#B0B0B0] top-2.5 left-3">
                <Search size={20} />
              </div>
              <input
                type="text"
                placeholder="Search for a Club"
                className="z-[1] border-[.5px] border-[#E7E7E7] rounded-[8px] py-[10px] px-10"
              />
            </div>

            <div className="flex items-center gap-x-2 text-[#5D5D5D]">
              Filter <ListFilter size={20} />
            </div>
          </div>

          <div className="mt-2 flex flex-col gap-y-4">
            {COMMUNITIES.map((c) => (
              <CommunityStrip key={c.id} item={c} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

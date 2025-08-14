import React from "react";

function CommunityStats() {
  return (
    <div className="p-4 grid grid-cols-4 gap-x-6 items-stretch border-[1px] border-[#E7E7E7] rounded-[8px]">
      <div className="text-[#888888] py-3 px-6 border-[1px] border-[#E9F7FF] rounded-[8px]">
        <h3 className="mb-2  text-sm/[100%]">Total Communities</h3>
        <h2 className="text-base/[24px] font-bold">49</h2>
      </div>
      <div className="text-[#888888] py-3 px-6 border-[1px] border-[#E9F7FF] rounded-[8px]">
        <h3 className="mb-2  text-sm/[100%]">Live Events</h3>
        <h2 className="text-base/[24px] font-bold">4</h2>
      </div>
      <div className="text-[#888888] py-3 px-6 border-[1px] border-[#E9F7FF] rounded-[8px]">
        <h3 className="mb-2  text-sm/[100%]">Public Communities</h3>
        <h2 className="text-base/[24px] font-bold">32</h2>
      </div>
      <div className="text-[#888888] py-3 px-6 border-[1px] border-[#E9F7FF] rounded-[8px]">
        <h3 className="mb-2  text-sm/[100%]">Private Communities</h3>
        <h2 className="text-base/[24px] font-bold">18</h2>
      </div>
    </div>
  );
}

export default CommunityStats;

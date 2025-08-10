import React from "react";
import { Community } from "../../utills/data";
import { ClipboardList, Earth, Users } from "lucide-react";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-1 py-[2px] px-[8px] border border-[#E4E4E4] rounded-full text-[#8A8A8A] text-xs">
      {children}
    </div>
  );
}

function DiscussionSummary({ community }: { community: Community }) {
  return (
    <div
      className="border border-[#EFEFEF] rounded-[8px] p-4 bg-white flex gap-4 items-stretch"
      style={{ boxShadow: "0px 6px 6px 0px #1212120A" }}
    >
      <div className="w-[140px] bg-[#D9D9D9] rounded-md" />
      <div className="flex-1">
        <h2 className="text-2xl/8 mb-2 font-semibold text-[#333]">
          {community.name}
        </h2>
        <p className="text-base text-[#888888] max-w-[900px]">
          {community.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-4">
          <Tag>
            <Earth size={12} /> {community.visibility}
          </Tag>
          <Tag>
            <Users size={12} /> {community.membersLabel}
          </Tag>
          <Tag>
            <ClipboardList size={12} /> {community.sessionsLabel}
          </Tag>
        </div>
      </div>
    </div>
  );
}

export default DiscussionSummary;

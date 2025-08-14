import { BadgeCheck } from "lucide-react";
import React from "react";

function DiscussionItem(props: {
  live?: boolean;
  title: string;
  author: string;
  excerpt: string;
}) {
  const { live, title, author, excerpt } = props;
  return (
    <div className="border rounded-[8px] border-[#E7E7E7] p-4">
      <div className="flex gap-4 items-stretch">
        <div className="w-[130px] rounded-md bg-[#D9D9D9]" />
        <div className="flex-1">
          {live && (
            <span className="text-[11px] bg-[#FF5C5C] text-white rounded-full px-2 py-[1px]">
              Live
            </span>
          )}
          <h3 className="font-semibold text-[#222] text-[22px]/4 my-1">
            {title}
          </h3>
          <div className="text-sm text-[#5D5D5D] flex items-center gap-1">
            By {author} <BadgeCheck size={14} className="text-[#3B82F6]" />
          </div>
          <div className="text-xs text-[#888888] mb-1 mt-4">
            Book Description
          </div>
          <div className="mt-2 text-base/6 text-[#888888]">{excerpt}</div>
          {!live && (
            <div className="mt-3 text-xs text-[#9A9A9A]">2 weeks ago</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DiscussionItem;

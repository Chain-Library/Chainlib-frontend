"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Admin, timeAgo } from "../utils/data";

export default function AdminTableRow({ item }: { item: Admin }) {
  const router = useRouter();
  const sp = useSearchParams();

  const statusStyles =
    item.status === "active"
      ? "border-[#34A853] bg-[#34A8531A] text-[#34A853]"
      : item.status === "revoked"
      ? "border-[#F9A825] bg-[#F9A8251A] text-[#F9A825]"
      : "border-[#EB5757] bg-[#EB57571A] text-[#EB5757]";

  return (
    <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] text-sm w-full border-b border-b-[#F6F6F6] items-stretch">
      <div className="py-5 px-4 text-[#5D5D5D]">{item.name}</div>
      <div className="py-5 px-4 text-[#5D5D5D]">{item.email}</div>
      <div className="py-5 px-4 text-[#5D5D5D]">
        {timeAgo(item.lastLoginAt)}
      </div>
      <div className="py-5 px-4">
        <div
          className={`py-[2px] px-2 border rounded-full w-fit ${statusStyles}`}
        >
          {item.status}
        </div>
      </div>
      <div className="py-5 px-4 flex gap-x-6 items-center">
        <button className="text-[#096CFF]">Edit</button>
        <button className="text-[#5D5D5D]">Revoke</button>
      </div>
    </div>
  );
}

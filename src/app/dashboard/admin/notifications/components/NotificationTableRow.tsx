"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { NotificationItem } from "../utils/dummy_data";

export default function NotificationTableRow({
  item,
}: {
  item: NotificationItem;
}) {
  const router = useRouter();
  const sp = useSearchParams();

  const statusStyles =
    item.status === "Sent"
      ? "border-[#34A853] bg-[#34A8531A] text-[#34A853]"
      : item.status === "Pending"
      ? "border-[#F9A825] bg-[#F9A8251A] text-[#F9A825]"
      : "border-[#EB5757] bg-[#EB57571A] text-[#EB5757]";

  const formatted = new Date(item.date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const openDetails = () => {
    const params = new URLSearchParams(sp.toString());
    params.set("details", item.id);
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="grid grid-cols-[1fr_1fr_.5fr_.5fr_.5fr_.5fr] text-sm w-full border-b border-b-[#F6F6F6] items-stretch">
      <div className="py-5 px-4 text-[#5D5D5D]">{item.title}</div>
      <div className="py-5 px-4">
        <div className="py-1 px-3 rounded-full bg-[#F6F6F6] text-[#5D5D5D] w-fit">
          {item.email}
        </div>
      </div>
      <div className="py-5 px-4 text-[#5D5D5D]">{item.recipients}</div>
      <div className="py-5 px-4">
        <div
          className={`py-[2px] px-2 border rounded-full w-fit ${statusStyles}`}
        >
          {item.status}
        </div>
      </div>
      <div className="py-5 px-4 text-[#5D5D5D]">{formatted}</div>
      <div className="py-5 px-4">
        <button onClick={openDetails} className="text-[#096CFF]">
          View Details
        </button>
      </div>
    </div>
  );
}

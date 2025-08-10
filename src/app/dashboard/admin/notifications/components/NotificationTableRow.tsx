import React from "react";

export type NotificationItem = {
  id: string;
  title: string;
  email: string;
  receiver: "Private" | "Write" | "General" | "Writer" | "Reader";
  status: "Sent" | "Pending" | "Failed";
  date: string; // ISO string
};

export default function NotificationTableRow({
  item,
}: {
  item: NotificationItem;
}) {
  const date = new Date(item.date);
  const formatted = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const statusStyles =
    item.status === "Sent"
      ? "!border-[#34A853] bg-[#34A8531A] text-[#34A853]"
      : item.status === "Pending"
      ? "!border-[#F9A825] bg-[#F9A8251A] text-[#F9A825]"
      : "!border-[#EB5757] bg-[#EB57571A] text-[#EB5757]";

  return (
    <div className="grid grid-cols-[1fr_1fr_.5fr_.5fr_.5fr_.5fr] text-sm w-full border-b border-b-[#F6F6F6] items-stretch">
      <div className="py-5 px-4 text-[#5D5D5D]">{item.title}</div>
      <div className="py-5 px-4 text-[#5D5D5D]">
        <div className="py-1 px-3 rounded-full bg-[#F6F6F6] text-[#5D5D5D] w-fit">
          {item.email}
        </div>
      </div>
      <div className="py-5 px-4 text-[#5D5D5D]">{item.receiver}</div>
      <div className="py-5 px-4">
        <div
          className={`py-[2px] px-2 border rounded-full w-fit outline-none ${statusStyles}`}
        >
          {item.status}
        </div>
      </div>
      <div className="py-5 px-4 text-[#5D5D5D]">{formatted}</div>
      <div className="py-5 px-4 text-[#5D5D5D]">
        <button className="text-[#096CFF]">View Details</button>
      </div>
    </div>
  );
}

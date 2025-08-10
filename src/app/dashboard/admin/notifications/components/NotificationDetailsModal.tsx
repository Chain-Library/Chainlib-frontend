"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { ChevronLeft } from "lucide-react";
import { NOTIFICATIONS } from "../utils/dummy_data";

export default function NotificationDetailsModal() {
  const router = useRouter();
  const sp = useSearchParams();
  const id = sp.get("details");
  const item = NOTIFICATIONS.find((n) => n.id === id);

  const close = () => {
    const params = new URLSearchParams(sp.toString());
    params.delete("details");
    router.push(`?${params.toString()}`);
  };

  React.useEffect(() => {
    if (!id) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [id]);

  if (!id || !item) return null;

  const date = new Date(item.date);
  const dateText = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  const timeText = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const statusStyles =
    item.status === "Sent"
      ? "border-[#34A853] bg-[#34A8531A] text-[#34A853]"
      : item.status === "Pending"
      ? "border-[#F9A825] bg-[#F9A8251A] text-[#F9A825]"
      : "border-[#EB5757] bg-[#EB57571A] text-[#EB5757]";

  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={close}
      />
      <div className="absolute left-1/2 top-1/2 w-[550px] max-w-[94vw] -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-6 shadow-2xl">
        <button
          onClick={close}
          className="w-9 h-9 rounded-lg border border-[#E5E5E5] flex items-center justify-center mb-4"
        >
          <ChevronLeft />
        </button>

        <div className="mx-auto w-fit mb-2">
          <span className="px-4 py-1 rounded-full bg-[#F3F4F6] text-[#6B7280] text-sm">
            Sent by: {item.email.replace(/(.{2}).*(?=@)/, "$1**")}
          </span>
        </div>

        <h2 className="text-2xl font-semibold text-center mb-4 text-[#454545]">
          {item.title}
        </h2>

        {item.image && (
          <div className="rounded-lg overflow-hidden mb-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.image} alt="" className="w-full h-auto" />
          </div>
        )}

        {item.body && (
          <p className="text-[#454545] mb-6 text-lg">{item.body}</p>
        )}

        <div className="grid grid-cols-4 gap-4 border-[1px] border-[#E7E7E7] rounded-xl p-4">
          <div>
            <div className="text-[#888888] text-sm">Receiver</div>
            <div className="text-[#5D5D5D]">{item.recipients}</div>
          </div>
          <div>
            <div className="text-[#888888] text-sm">Date</div>
            <div className="text-[#5D5D5D]">{dateText}</div>
          </div>
          <div>
            <div className="text-[#888888] text-sm">Time</div>
            <div className="text-[#5D5D5D]">{timeText}</div>
          </div>
          <div>
            <div className="text-[#888888] text-sm">Status</div>
            <div
              className={`mt-1 inline-block py-[2px] px-2 border rounded-full text-xs ${statusStyles}`}
            >
              {item.status}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

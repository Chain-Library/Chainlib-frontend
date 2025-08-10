"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

const RECIPIENTS = [
  "All",
  "Private",
  "Write",
  "General",
  "Writer",
  "Reader",
] as const;
const STATUS = ["All", "Sent", "Pending", "Failed"] as const;

export default function NotificationFilterModal() {
  const router = useRouter();
  const sp = useSearchParams();
  const open = sp.get("showFilters") === "1";

  const sentBy = sp.get("sentBy") ?? "All";
  const receiver = sp.get("receiver") ?? "All";
  const status = sp.get("status") ?? "All";

  const pushWith = (next: Record<string, string | number | undefined>) => {
    const params = new URLSearchParams(sp.toString());
    Object.entries(next).forEach(([k, v]) => {
      if (!v || v === "All") params.delete(k);
      else params.set(k, String(v));
    });
    params.delete("page");
    router.push(`?${params.toString()}`);
  };

  const close = () => {
    const params = new URLSearchParams(sp.toString());
    params.delete("showFilters");
    router.push(`?${params.toString()}`);
  };

  React.useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      id="notif-filter-modal"
      aria-modal="true"
      className="fixed inset-0 z-50"
    >
      <div className="absolute inset-0 bg-black/40" onClick={close} />
      <div className="absolute left-1/2 top-1/2 w-[380px] -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-6 shadow-xl">
        <h3 className="text-lg font-semibold mb-4 text-[#5D5D5D]">Filter by</h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {/* Sent by */}
          <div className="flex flex-col gap-2">
            <label className="text-[#888888]">Sent by</label>
            <select
              className="rounded-xl border border-[#E5E5E5] px-4 py-3"
              value={sentBy}
              onChange={(e) => pushWith({ sentBy: e.target.value })}
            >
              {RECIPIENTS.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </div>

          {/* Receiver */}
          <div className="flex flex-col gap-2">
            <label className="text-[#888888]">Receiver</label>
            <select
              className="rounded-xl border border-[#E5E5E5] px-4 py-3"
              value={receiver}
              onChange={(e) => pushWith({ receiver: e.target.value })}
            >
              {RECIPIENTS.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </div>

          {/* Status */}
          <div className="flex flex-col gap-2">
            <label className="text-[#888888]">Status</label>
            <select
              className="rounded-xl border border-[#E5E5E5] px-4 py-3"
              value={status}
              onChange={(e) => pushWith({ status: e.target.value })}
            >
              {STATUS.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={close}
          className="w-full rounded-full bg-[#E9ECEF] text-[#606770] py-3 hover:opacity-90"
        >
          Apply
        </button>
      </div>
    </div>
  );
}

"use client";
import { ListFilter } from "lucide-react";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

const FILTER_OPTIONS = [
  { key: "week", label: "This Week" },
  { key: "month", label: "This Month" },
  { key: "year", label: "This Year" },
  { key: "all", label: "All Time" },
];

export default function NotificationFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeFilter = searchParams.get("filter") || "week";
  const start = searchParams.get("start") || "";
  const end = searchParams.get("end") || "";

  const pushWith = (next: Record<string, string | number | undefined>) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(next).forEach(([k, v]) => {
      if (v === undefined || v === null || v === "") params.delete(k);
      else params.set(k, String(v));
    });
    params.delete("page");
    router.push(`?${params.toString()}`);
  };

  const onQuick = (key: string) => {
    pushWith({ filter: key, start: undefined, end: undefined });
  };

  const onApplyDates = () => {
    pushWith({ start, end, filter: undefined });
  };

  const onClearDates = () => {
    pushWith({ start: undefined, end: undefined });
  };

  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-x-4 items-center">
        <div className="flex gap-x-2 items-center">
          {FILTER_OPTIONS.map((opt) => (
            <button
              key={opt.key}
              onClick={() => onQuick(opt.key)}
              className={`px-2 py-[6px] rounded-[4px] ${
                activeFilter === opt.key && !start && !end
                  ? "bg-[#F6F6F6] text-[#454545]"
                  : "bg-transparent text-[#888888]"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <div className="flex gap-x-4 items-center">
          <div className="flex gap-x-2 items-center">
            <input
              type="text"
              placeholder="dd/mm/yyyy"
              value={start}
              onChange={(e) => pushWith({ start: e.target.value })}
              className="w-[106px] py-[6px] px-3 border border-[#E7E7E7] rounded-[8px] outline-none"
            />
            <span>to</span>
            <input
              type="text"
              placeholder="dd/mm/yyyy"
              value={end}
              onChange={(e) => pushWith({ end: e.target.value })}
              className="w-[106px] py-[6px] px-3 border border-[#E7E7E7] rounded-[8px] outline-none"
            />
          </div>
          <button
            onClick={onApplyDates}
            className="w-[60px] py-[6px] text-[#888888] bg-[#E7E7E7] rounded-[4px]"
          >
            Apply
          </button>
          {(start || end) && (
            <button
              onClick={onClearDates}
              className="w-[60px] py-[6px] text-[#888888] bg-transparent border border-[#E7E7E7] rounded-[4px]"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Opens the modal via URL param */}
      <button
        onClick={() => pushWith({ showFilters: "1" })}
        className="flex items-center gap-x-2 text-[#444] hover:opacity-80"
        aria-haspopup="dialog"
        aria-controls="notif-filter-modal"
        aria-expanded={searchParams.get("showFilters") === "1"}
      >
        Filter <ListFilter />
      </button>
    </div>
  );
}

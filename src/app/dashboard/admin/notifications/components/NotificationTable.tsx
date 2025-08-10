"use client";
import React, { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import NotificationTableHeader from "./NotificationTableHeader";
import NotificationTableRow, { NotificationItem } from "./NotificationTableRow";
import NotificationTablePagination from "./NotificationTablePagination";

// ---------- Dummy data ----------
const DUMMY: NotificationItem[] = Array.from({ length: 28 }).map((_, i) => {
  const d = new Date();
  d.setDate(d.getDate() - i); // spread over last 28 days
  const statuses: NotificationItem["status"][] = ["Sent", "Pending", "Failed"];
  const recipients: NotificationItem["receiver"][] = [
    "Private",
    "Write",
    "General",
    "Writer",
    "Reader",
  ];
  return {
    id: String(i + 1),
    title:
      i % 3 === 0
        ? "New File Format Supported"
        : i % 3 === 1
        ? "Announcement Sent"
        : "Access Policy Updated",
    email: `user${i + 1}@example.com`,
    receiver: recipients[i % recipients.length],
    status: statuses[i % statuses.length],
    date: d.toISOString(),
  };
});

// ---------- Helpers ----------
const parseDDMMYYYY = (val?: string | null) => {
  if (!val) return undefined;
  const m = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(val);
  if (!m) return undefined;
  const [_, dd, mm, yyyy] = m;
  const d = new Date(Number(yyyy), Number(mm) - 1, Number(dd));
  return isNaN(d.getTime()) ? undefined : d;
};

const startOfToday = () => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
};

const applyQuickFilter = (
  items: NotificationItem[],
  filter?: string | null
) => {
  if (!filter || filter === "all") return items;
  const today = startOfToday();
  let from = new Date(today);
  if (filter === "week") from.setDate(today.getDate() - 7);
  else if (filter === "month") from.setMonth(today.getMonth() - 1);
  else if (filter === "year") from.setFullYear(today.getFullYear() - 1);
  return items.filter((it) => new Date(it.date) >= from);
};

// ---------- Component ----------
export default function NotificationTable() {
  const searchParams = useSearchParams();

  const filter = searchParams.get("filter"); // week|month|year|all
  const start = parseDDMMYYYY(searchParams.get("start"));
  const end = parseDDMMYYYY(searchParams.get("end"));
  const page = Number(searchParams.get("page") || 1);
  const pageSize = Number(searchParams.get("pageSize") || 5);

  // 1) Start with dummy data, newest first
  const sorted = useMemo(
    () => [...DUMMY].sort((a, b) => +new Date(b.date) - +new Date(a.date)),
    []
  );

  // 2) Apply date range OR quick filter
  const filtered = useMemo(() => {
    if (start || end) {
      const s = start ?? new Date(0);
      const e = end
        ? new Date(
            end.getFullYear(),
            end.getMonth(),
            end.getDate(),
            23,
            59,
            59,
            999
          )
        : new Date();
      return sorted.filter((it) => {
        const d = new Date(it.date);
        return d >= s && d <= e;
      });
    }
    return applyQuickFilter(sorted, filter);
  }, [sorted, filter, start, end]);

  // 3) Pagination slice
  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const startIdx = (safePage - 1) * pageSize;
  const pageItems = filtered.slice(startIdx, startIdx + pageSize);

  return (
    <div className="border border-[#E7E7E7] rounded-[8px]">
      <div className="bg-[#F2F2F2] py-3 px-4 flex items-center justify-between">
        <div className="py-[10px] px-4 text-[#5D5D5D] bg-[#D1D1D1] rounded-[8px]">
          All Notifications
        </div>
        <div />
      </div>

      <div className="flex flex-col gap-y-2">
        <NotificationTableHeader />

        {pageItems.length === 0 ? (
          <div className="py-8 px-4 text-[#888]">
            No notifications match your filter.
          </div>
        ) : (
          pageItems.map((it) => <NotificationTableRow key={it.id} item={it} />)
        )}

        <NotificationTablePagination
          total={total}
          page={safePage}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
}

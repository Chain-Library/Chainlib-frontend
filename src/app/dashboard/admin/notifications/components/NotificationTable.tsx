"use client";
import React, { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import NotificationTableHeader from "./NotificationTableHeader";
import NotificationTableRow from "./NotificationTableRow";
import NotificationTablePagination from "./NotificationTablePagination";
import NotificationFilterModal from "./NotificationDetailsModal";
import { NotificationItem, NOTIFICATIONS } from "../utils/dummy_data";

export default function NotificationTable() {
  const sp = useSearchParams();

  const pageSize = Number(sp.get("pageSize") || 5);
  const page = Number(sp.get("page") || 1);

  const items = useMemo(
    () =>
      [...NOTIFICATIONS].sort((a, b) => +new Date(b.date) - +new Date(a.date)),
    []
  );

  const filtered: NotificationItem[] = items;

  const total = filtered.length;
  const startIdx = (page - 1) * pageSize;
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
        {pageItems.map((it) => (
          <NotificationTableRow key={it.id} item={it} />
        ))}
        <NotificationTablePagination
          total={total}
          page={page}
          pageSize={pageSize}
        />
      </div>

      <NotificationFilterModal />
    </div>
  );
}
